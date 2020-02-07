import React, { forwardRef, useState, useRef, useEffect } from 'react';
import BScroll from 'better-scroll';
const Scroll = forwardRef((props) => {
  const { direction, click, refresh, pullUpLoading, pullDownLoading, bounceTop, bounceBottom } = props;
  const { pullUp, pullDown, onScroll } = props;
  //better-scroll 实例对象
  const [bScroll, setBScroll] = useState ();
  //current 指向初始化 bs 实例需要的 DOM 元素 
  const scrollRef = useRef ();

  //初始化scroll
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect (() => {
    if (refresh && bScroll){
      bScroll.refresh ();
    }
  });

  useEffect (() => {
    if (!bScroll || !onScroll) return;
    bScroll.on ('scroll', (scroll) => {
      onScroll (scroll);
    })
    return () => {
      bScroll.off ('scroll');
    }
  }, [onScroll, bScroll]);

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
})
export default React.memo(Scroll);