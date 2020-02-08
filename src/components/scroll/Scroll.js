import React, { forwardRef, useState, useRef, useEffect, useImperativeHandle } from 'react';
import BScroll from 'better-scroll';
import PropTypes from 'prop-types';

const Scroll = forwardRef((props,ref) =>{
  //better-scroll 实例对象
  const [bScroll, setBScroll] = useState ();
  //current 指向初始化 bs 实例需要的 DOM 元素 
  const scrollRef = useRef ();
  const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom, outerStyle } = props;
  const { pullUp, pullDown, onScroll } = props;
  
  //初始化bScroll
  useEffect (() => {
    const scroll = new BScroll (scrollRef.current, {
      scrollX: direction === "horizontal",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce:{
        top: bounceTop,
        bottom: bounceBottom
      }
    });
    setBScroll (scroll);
    return () => {
      setBScroll (null);
    }
  }, []);

  useEffect (() => {
    if (refresh && bScroll){
      bScroll.refresh ();
    }
  });

  //滚动中调用事件
  useEffect (() => {
    if (!bScroll || !onScroll) return;
    bScroll.on ('scroll', (scroll) => {
      onScroll (scroll);
    })
    return () => {
      bScroll.off ('scroll');
    }
  }, [onScroll, bScroll]);

  //上拉到底刷新
  useEffect (() => {
    if (!bScroll || !pullUp) return;
    bScroll.on ('scrollEnd', () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100){
        pullUp ();
      }
    });
    return () => {
      bScroll.off ('scrollEnd');
    }
  }, [pullUp, bScroll]);

  //下拉刷新
  useEffect (() => {
    if (!bScroll || !pullDown) return;
    bScroll.on ('touchEnd', (pos) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown ();
      }
    });
    return () => {
      bScroll.off ('touchEnd');
    }
  }, [pullDown, bScroll]);

  // 一般和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
  useImperativeHandle (ref, () => ({
    
    // 给外界暴露 refresh 方法
    refresh () {
      if (bScroll) {
        bScroll.refresh ();
        bScroll.scrollTo (0, 0);
      }
    },
    // 给外界暴露 getBScroll 方法，提供 bs 实例
    getBScroll () {
      if (bScroll) {
        return bScroll;
      }
    }
  }));

  return (
    <div ref={scrollRef} style={outerStyle}>
      <div>
        {props.children}
      </div>
    </div>
  );
})
Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll:null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true
};

Scroll.propTypes = {
  direction: PropTypes.oneOf (['vertical', 'horizontal']),
  refresh: PropTypes.bool,
  onScroll: PropTypes.func,
  pullUp: PropTypes.func,
  pullDown: PropTypes.func,
  pullUpLoading: PropTypes.bool,
  pullDownLoading: PropTypes.bool,
  bounceTop: PropTypes.bool,// 是否支持向上吸顶
  bounceBottom: PropTypes.bool// 是否支持向上吸顶
};
export default Scroll;