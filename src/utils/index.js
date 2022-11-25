/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 工具类封装
 * 
 */

export function formatNum(n) {
  return (n > 9 ? n : '0' + n).toString()
}

// 转化时间
export function transformDate(date) {
  // let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  // let hour = date.getHours()
  // let minute = date.getMinutes()
  // var second = date.getSeconds()

  return [year, month, day].map(formatNum).join('-')
}

export function formatDate() {
  return Date.now();
}

// 清空div子组件
export function clearChild(dIv) {
  const body = document.getElementById(dIv);
  if(body) {
    while (body.hasChildNodes()) {
      if (body.firstChild) {
        body.removeChild(body.firstChild)
      }
    }
  }
}

// 字符串判空
export function isEmpty(e) {
  return e == null || e.length === 0 || e === 'null';
}

// 全部替换key需要替换的字符 key1新的字符
export function replaceAll(value, key, key2) {
  return value.replace(new RegExp(key, 'gm'), key2);
}
