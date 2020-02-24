import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import style from './lyricList.module.scss';

const changeValue = (valueStr) => {
  const result = valueStr.replace(/([0-9]+):([0-9]+)\.([0-9]+)/,(match,$1,$2,$3)=>{
    let value = parseInt($1) * 60 + parseInt($2) + parseInt($3) * 0.01;
    return value;
  })
  return parseFloat(result);
}

const LyricList = (props) => {
  const { lyricString, currentTime, lyricId } = props;
  const [totalLyric,setTotalLyric] = useState([]);
  const container = useRef();
  const OFFSET_LINE = 26;
  const BASE_LINE = 8;
  //把字符串切割为每行的数组
  useEffect(()=>{
    const firstReg = /\[.+\n/g;
    const lineReg = /[0-9]{2}:[0-9]{2}\.[0-9]{2}/g;
    let lyricArr = lyricString.match(firstReg);
    let lyric = [];
    //如果某行有多条，则返回多条的数组
    if (lyricArr) {
      let result = lyricArr.map(lineValue=>{
        let lineArr = lineValue.match(lineReg);
        if (lineArr) {
          return lineArr.map(v=>{
            let time = changeValue(v);
            let value = lineValue.replace(/\[.+\]/g,'');
            return {
              time : time,
              value :value
            }
          }) 
        } else {
          return null
        }
      })
      let totalArr = result.flat().filter(v=>v!=null);
      lyric = totalArr.sort((a,b)=>{
        return a.time - b.time;
      })
    }
    setTotalLyric(lyric)
  },[lyricString])


  useLayoutEffect(()=>{
    let index = 0;
    for (let i = 0; i < totalLyric.length; i++) {
      const element = totalLyric[i];
      if (currentTime <= element.time) {
        index = i;
        break;
      }
    };
    container.current.scrollTop = Math.max(0,index - BASE_LINE) * OFFSET_LINE;
  },[currentTime,totalLyric])
  return (<div className={style.list} ref={container}>
    {totalLyric.map(value => {
      return <p className={`${style.item} `.concat(currentTime > value.time ? `${style.current}` : '') } key={`${lyricId}_${value.time}_${value.value.slice(0,4)}`}  data-time={value.time}>{value.value}</p>
    })}
  </div>)
}

export default LyricList