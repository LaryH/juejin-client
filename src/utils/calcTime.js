export default function(ctime, mtime) {
  const time = mtime - ctime;
  if (time < 3600) {
    return parseInt(time / 60) + "分钟前";
  } else if (time >= 3600 && time < 86400) {
    return parseInt(time / 3600) + "小时前";
  } else if (time >= 86400 && time < 604800) {
    return parseInt(time / 86400) + "天前";
  } else if (time >= 604800 && time < 2592000) {
    return parseInt(time / 604800) + "星期前";
  } else if (time >= 2592000 && time < 31104000) {
    return parseInt(time / 2592000) + "月前";
  } else if (time >= 31104000) {
    return parseInt(time / 2592000) + "年前";
  }
}
