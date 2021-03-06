import React, {useState, useEffect, useRef, useCallback} from 'react';
import style from './carousel.module.scss';
import icon from '../../icon';
const Carousel = (props) => {
    // 图片数组，宽度、高度、自动切换图片的事件
    const {dataList,bgW,bgH,intervalTime,clickHandler} = props;
    const imgList = dataList.map(v=>v.imageUrl)
    const imgLength = imgList.length;
    //视窗图片索引
    const [picViewIndex, setPicViewIndex] = useState(0);
    const carouselBodyRef = useRef();
    const imgBodyRef = useRef();
    const btnBodyRef = useRef();
    //是否正在进行动画
    const [isInAnimation, setIsInAnimation] = useState(false);
    //动画ID
    const [reqId, setReqId] = useState(0);
    const [list, setList] = useState(dataList);
    //初始化
    useEffect(()=>{
        carouselBodyRef.current.style.width = bgW + 'px';
        carouselBodyRef.current.style.height = bgH + 'px';
        imgBodyRef.current.style.width = bgW * imgLength + 'px';
        imgBodyRef.current.style.height = bgH + 'px';
        imgBodyRef.current.style.left = '0px';
        btnBodyRef.current.style.width = bgW + 'px';
        btnBodyRef.current.style.height = bgH + 'px';
        const imgList = dataList.map(v=>v.imageUrl)
        setList(imgList);
    },[bgW, bgH, imgLength, dataList])

    //定时器轮播
    /**
     * @description 使用requestAnimationFrame播放动画
     * @param {number} times
     * @param {number} start
     * @param {number} end
     * @returns Promise
     */
    const playAnim = (times, start, end) => {
        let finishTime = 0;
        let leftNum = parseInt(imgBodyRef.current.style.left.replace(/px/,''));
        //如果正在进行动画，那么将起点设置为当前位置，并且取消之前的动画
        if (isInAnimation) {
            start = leftNum;
            cancelAnimationFrame(reqId);
        }
        let moveLen = Math.abs(end - start)/times;
        //向左移则left减小
        end - start < 0 && (moveLen = -moveLen);
        //标志动画的开始
        setIsInAnimation(true);
        let anim = new Promise(resolve=>{
            const moveTo = () => {
                if (finishTime < times) {
                    let reqId = requestAnimationFrame(()=>{
                        leftNum += moveLen;
                        imgBodyRef.current && (imgBodyRef.current.style.left = leftNum + 'px');
                        finishTime++;
                        moveTo();
                    })
                    setReqId(reqId)
                } else {
                    //标志动画的结束
                    setIsInAnimation(false);
                    resolve(cancelAnimationFrame(reqId));
                }
            }
            moveTo();
        })
        return anim;
    }
    
    const handleToPrevPic = () => {
        //最左边向左划
        if (isInAnimation) {
            return;
        }
        if (picViewIndex === 0) {
            //将尾部的图放到最前面
            setList(list.slice(-1).concat(list.slice(0,-1)));
            //定位到第二张图
            imgBodyRef.current.style.left = -bgW + 'px';
            let leftNum = parseInt(imgBodyRef.current.style.left.replace(/px/,''));
            setPicViewIndex(imgLength - 1);
            playAnim(20,leftNum,leftNum+bgW).then(res=>{
                //定位到最后一张图
                imgBodyRef.current.style.left= -bgW * (imgLength - 1) + 'px';
                //还原list
                setList(list);
            })
        } else {
            let leftNum = parseInt(imgBodyRef.current.style.left.replace(/px/,''));
            setPicViewIndex(picViewIndex - 1);
            playAnim(20,leftNum,leftNum+bgW)
        }
    }

    const handlePicClick = useCallback((e) => {
        if (e.target === e.currentTarget && typeof clickHandler === 'function') {
            clickHandler(picViewIndex);
        }
    },[clickHandler,picViewIndex]);

    const handleToNextPic = () => {
        if (isInAnimation) {
            return;
        }
        //最右边向右边划
        if (picViewIndex === imgLength - 1) {
            //将头部的图放到最后面
            setList(list.slice(1).concat(list.slice(0,1)));
            imgBodyRef.current.style.left = -bgW * (imgLength - 2) + 'px';
            let leftNum = parseInt(imgBodyRef.current.style.left.replace(/px/,''));
            setPicViewIndex(0);
            playAnim(20,leftNum,leftNum-bgW).then(res=>{
                //还原list
                setList(list);
                //定位到第一张图
                imgBodyRef.current.style.left= '0px';
            });
        } else {
            let leftNum = parseInt(imgBodyRef.current.style.left.replace(/px/,''));
            setPicViewIndex(picViewIndex + 1);
            playAnim(20,leftNum,leftNum-bgW);
        }
    }
    const intervalCallback = useCallback(handleToNextPic,[picViewIndex]);
    const handleRadioChange = (e) => {
        let leftNum = parseInt(imgBodyRef.current.style.left.replace(/px/,''));
        let nextPicIndex = parseInt(e.target.id.match(/[0-9]+/)[0]);
        setPicViewIndex(nextPicIndex);
        playAnim(20,leftNum,-nextPicIndex * bgW);
    }
    //在背景图变化时设置定时器
    useEffect(()=>{
        let tid = setInterval(()=>{
            intervalCallback();
        },intervalTime);
        return ()=>clearInterval(tid);
    },[picViewIndex, intervalTime,intervalCallback]);

    return <div className={style.carouselBody}  ref={carouselBodyRef}>
        <div className={style.imgBody} ref={imgBodyRef}>
            {list.map((v,i)=>{
                return <div id={`img-${i}`} key={`${i}`} style={{
                    width:bgW,
                    height:bgH,
                    backgroundImage:`url(${v})`,
                }}></div>
            })}
        </div>
        <div className={style.btnBody} ref={btnBodyRef}  onClick={handlePicClick}>
            <button className={style.leftBtn} onClick = {handleToPrevPic}>
                <i className="iconfont">{icon.left}</i>
            </button>
            <ul className={style.bottomBtns}>
                {imgList.map((v,i)=>{
                    return <input type="radio" className="selectRatio" name="selectPic" id={`radio-${i}`} key={`radio-${i}`} checked={i === picViewIndex} onChange={handleRadioChange}/>
                })}
            </ul>
            <button className={style.rightBtn} onClick = {handleToNextPic}>
                <i className="iconfont">{icon.right}</i>
            </button>
        </div>
    </div>
}
export default React.memo(Carousel);