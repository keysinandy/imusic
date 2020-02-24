export const mill2mmss = (mill) => {
  mill = parseInt(mill);
  let minutes = Math.floor( mill / 1000 / 60);
  let seconds = Math.floor(mill / 1000 - minutes * 60);
  minutes = minutes < 10 ? '0' + minutes.toString() :  minutes.toString();
  seconds = seconds < 10 ? '0' + seconds.toString() :  seconds.toString();
  return minutes + ":" + seconds
  
}