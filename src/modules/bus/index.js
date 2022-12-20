/**
 * Author: Meng
 * Date: 2022-
 * Desc: 事件分发
 * 1.可以添加事件
 * 2.发送事件
 * 3.移除事件
 * {key: '事件名', event: '回调函数', tag: '渠道', mode: 0普通1单次}
 * 4.支持单次订阅，意思就是发送事件之后自动移除事件
 * 5.支持防止多次添加同一事件
 * 6.支持粘性事件，可以先发送后订阅
 * 7.支持延时消息
 */

export default class EventBus {
  static _bus_list = [];
  static _event_list = []; // {key: '事件名', data: '数据'}

  static add(key, event) {
    this.push(key, event);
  }

  static send(key, data, time=0) {
    const _bus = this._bus_list;
    _bus.forEach(e => {
      if(e.key == key) {
        if(e.event) {
          const timer = setTimeout(() => {
            clearTimeout(timer);
            e.event(data);
          }, time);
        }
      }
    });

    this._bus_list = _bus.filter(e => e.key != key || e.mode != 1);
  }

  static stick(key, data) {
    this.send(key, data);
    this._event_list.push({key, data});
  }

  static one(key, event) {
    this.push(key, event, 1);
  }

  static push(key, event, mode, tag) {
    this._bus_list = this._bus_list.filter(e => e.key != key || e.tag != tag);
    this._bus_list.push({key, event, mode, tag})

    const events = this._event_list;
    if(events.length > 0) {
      let isRemove = false
      events.forEach(e => {
        if(e.key == key) {
         isRemove = event(e.data)
        }
      });
      if(isRemove) {
        this._event_list = events.filter(e => e.key != key);
      }
    }
  }

  static remove({key, event, stickKey}) {
    if(key) {
      this._bus_list = this._bus_list.filter(e => e.key != key)
    }else if(event) {
      this._bus_list = this._bus_list.filter(e => e.event != event)
    }else if(stickKey) {
      this._event_list = this._event_list.filter(e => e.key == stickKey)
    }
  }
}