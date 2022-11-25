/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 网络封装
 */

import { network } from './fetch'
import { Config, getTagHost, requestHeader, requestParams } from './config'

// 请求
export function request({ path, method = "GET", data = {}, headers = {}, host = Config.host, env = Config.env, loading = true, loadingStr = "加载中...", toast = true } = {}) {

  // loading && _showLoading(loading, loadingStr); // 加载框

  const url = getTagHost(host, env) + path; // 拼接请求地址
  data = requestParams(data); // 处理参数
  headers = requestHeader(headers); // 处理请求头

  const options = { url, method, data, headers }; // 参数重组
  return new Promise((resolve) => {
    console.log(options);
    let result = { code: -1, message: '', data: null, header: {} }
    // 发起请求
    network(options).then((res) => {
      if (res.code == 0) {
        _parseData(res, result);
      } else {
        _parseErr(res, result);
      }
      resolve(result);
    }).catch((err) => {
      result.code = -101;
      result.message = err.message || '服务升级中，请稍后';
      resolve(result);
    }).finally(() => {
      console.log(result);
      loading && _showLoading(false, loadingStr);
      if (toast && result.code != 0 && result.message) {
        _showToast(result.message);
      }
    });
  });
}

// {code, result, msg}
function _parseData(res, result) {
  result.code = res.code;
  result.data = res.data;
  result.message = res.message;
  if (res.code == 501) {
    // 登录
  }
}

function _parseErr(res, result) {
  const code = res.code || res.status;
  const message = res.message;
  result.code = code;
  if (code == 404) {
    result.message = '接口路径404有误！'
  } else if (code == 405) {
    result.message = '请求方法有误！'
  } else {
    result.message = message;
  }

}

// 显示加载框
function _showLoading(loading, loadingStr) {
  console.log(loading, loadingStr);
}

// 显示toast
function _showToast(msg) {
  alert(msg)
}