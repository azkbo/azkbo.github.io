/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 网络请求配置
 */

export const Config = {
  host: 'base',
  env: 'prod',
  // env: 'test',
}

// 参数处理
export function requestParams(data) {
  return data
}

// 请求头处理
export function requestHeader(header) {
  return {
    'Content-Type': 'application/json',
    ...header
  }
}

// 根据环境获取根路径
export function getTagHost(host = 'base', env = 'prod') {
  return AppHost[env][host];
}

const AppHost = {
  prod: {
    base: 'http://localhost:8093',
    ws: 'ws://192.168.253.170:89',
    game: 'http://localhost:8093/game',
  },
  test: {
    base: 'http://192.168.253.170:8093',
    ws: 'ws://192.168.253.170:89',
    game: 'http://192.168.253.170:8093/game',
  }
}