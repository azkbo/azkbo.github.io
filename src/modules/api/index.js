/**
 * Author: Meng
 * Date: 2022-09-15
 * Desc: 接口
 */
import { request } from '../net/index'

export function example(data = {}) {
  return request({
    path: '/api/path',
    method: 'POST',
    host: 'base',
    env: 'test',
    data
  })
}

// 创建房间
export function createRoom(data = {}) {
  return request({
    path: '/api/create',
    method: 'POST',
    data
  })
}

// 加入房间
export function joinRoom(data = {}) {
  return request({
    path: '/api/join',
    method: 'POST',
    data
  })
}

// 开始游戏
export function playGame(roomCode = 0, userId=0) {
  return request({
    path: '/api/play',
    method: 'POST',
    data: {
      roomCode,
      userId,
      mode: 1
    }
  })
}

// 游戏详情
export function queryGameInfo(code = 0) {
  return request({
    path: `/api/info?roomCode=${code}`,
    method: 'GET'
  })
}

// 游戏制胜key
export function updateGameKey(key = 0, code = 0) {
  return request({
    path: `/api/key?userId=${key}&roomCode=${code}`,
    method: 'GET',
  })
}

// 获取房间列表
export function queryRooms(data = {}) {
  return request({
    path: '/api/rooms',
    method: 'GET',
    data
  })
}

// 获取游戏列表
export function queryGames(data = {}) {
  return request({
    path: '/api/games',
    method: 'GET',
    data
  })
}