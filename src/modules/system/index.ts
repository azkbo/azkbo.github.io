/**
 * Author: Meng
 * Date: 2022-
 * Desc: 
 */

// 初始化系统
export function systemInit(): void {
  window.onload = function () {
    const u: any = navigator.userAgent;//app = navigator.appVersion;
    const info = {//浏览器版本信息
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') > -1,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') > -1,
      weixin: u.indexOf('MicroMessenger') > -1 && u.replace(/.*(MicroMessenger\/[^\s]*).*/, "$1").replace("MicroMessenger/", "") || false,
    };

    // APP当前版本号获取方法：window.terminal.appVersion
    // window.versionCompare = function (version1, version2) {
    //   var v1 = version1.split('.');
    //   var v2 = version2.split('.');
    //   for (var i = 0; i < v1.length; i++) {
    //     if (v1[i] * 1 > v2[i] * 1) {
    //       return 1;  // 当前版本号大于要求最低版本号
    //     } else if (v1[i] * 1 < v2[i] * 1) {
    //       return -1; // 当前版本号小于要求最低版本号
    //     }
    //   }
    //   return 0; // 当前版本号等于要求最低版本号
    // }

    // 引入cordova
    const script = document.createElement('script');
    if (info.iPhone) {
      // script.src = 'static/js/ios.js'
      script.src = "https://new.bnq.cn/paylib/ios.js";
    } else if (info.android) {
      // script.src = 'static/js/android.js'
      script.src = 'https://new.bnq.cn/paylib/android.js';
    } else {
      alert('无法识别终端类型')
    }
    // document.getElementsByTagName('head')[0].appendChild(script)
    // consts.device = info.android ? 'android' : (info.iPhone ? 'iphone' : 'ipad');
    // consts.width = globalThis.innerWidth;
    // consts.height = globalThis.innerHeight;

  }
}

export function srcollListener(divId: string, onScroll: (top: number, height: number, offsetHeight: number) => void, interval = 100): void {
  let lastY = 0;
  const body = document.getElementById(divId);
  if (body) {
    body.addEventListener("scroll", () => {
      const topSize = body.scrollTop;
      if (topSize - lastY > interval) {
        onScroll(topSize, body.scrollHeight, body.offsetHeight);
        lastY = topSize;
      }
      // console.log(topSize);
      // console.log('offsetTop-------->',body.offsetTop);
      // console.log('offsetHeight-------->',body.offsetHeight);
      // console.log('scrollHeight-------->',body.scrollHeight);
    });
  }
}