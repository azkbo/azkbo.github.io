/**
 * Author: Meng
 * Date: 2022-08-12
 * Desc: 事件
 * 1.支持一次性订阅，即发送之后自动移除
 * 2.支持防止多次添加同一事件
 * 3.支持粘性事件，即可以先发送后订阅
 * 4.支持延时消息
 */

// 订阅模型
interface BusDao {
  key: string; // 订阅Key
  tag?: string; // 标签
  mode?: number; // 订阅模式 0普通；1单次
  event: (data: any) => void; // 订阅回调函数
}

// 粘性消息模型
interface StickDao {
  key: string;
  data: any;
}

// 事件 key
export const BusKey = {
  login: "account_login", // 登录成功
  logout: "account_logout", // 退出成功
  app_tab: "app_tab_change", // app
};

class Bus {
  private static _event_bus: BusDao[] = []; // 事件集合{ key, event, mode: 订阅模式, tag: 标签, }
  private static _stick_bus: StickDao[] = []; // 消息集合{ key, data: 消息}

  // 添加事件
  static add(key: string, event: (data: any) => boolean, tag = "") {
    // Bus._event_bus = Bus._event_bus.filter((e) => e.key == key && e.tag == tag);
    Bus._event_bus.push({ key, event, mode: 9, tag });
    // 当存在黏性事件 发送消息
    if (Bus._stick_bus.length > 0) {
      let isRemove = false; // 是否中断/移除订阅
      Bus._stick_bus.forEach((e) => {
        if (e.key == key) {
          isRemove = event(0);
        }
      });

      if (isRemove) {
        Bus._stick_bus = Bus._stick_bus.filter((e) => e.key != key);
      }
    }
  }

  // 发送事件/消息 delay -延时多少毫秒发送
  static send(key: string, data: any, delay = 0) {
    if (delay > 0) {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        Bus.sendMsg(key, data);
      }, delay);
    } else {
      Bus.sendMsg(key, data);
    }
  }

  // 发送事件/消息
  static stick(key: string, data: any, delay = 0) {
    Bus.send(key, data, delay);
    // 添加前先移除
    Bus._stick_bus = Bus._stick_bus.filter((e) => e.key == key);
    Bus._stick_bus.push({ key, data });
  }

  // 真实发送消息方法
  static sendMsg(key: string, data: any) {
    const event = Bus._event_bus.filter((e) => e.key == key);
    try {
      event.forEach((e) => {
        if (e.event) {
          e.event(data);
        } else {
          e.mode = 1; // 如果订阅函数不存在则移除
        }
      });
    } catch (error) {
      console.log(" Bus Send Error: ===>", error);
    }

    // 移除一次性订阅事件
    Bus._event_bus = Bus._event_bus.filter((e) => e.key != key && e.mode != 1);
    // console.log(_event_bus);
  }

  // 一次性订阅 - 发送后自动移除
  static single(key: string, event: (data: any) => void, tag = "") {
    Bus._event_bus = Bus._event_bus.filter((e) => e.key == key && e.tag == tag);
    Bus._event_bus.push({ key, event, mode: 1, tag });
  }

  // 移除订阅
  static remove(param = { key: "", event: null, stick: "" }) {
    if (param.key) {
      Bus._event_bus = Bus._event_bus.filter((e) => e.key != param.key);
    } else if (param.event) {
      Bus._event_bus = Bus._event_bus.filter((e) => e.event != param.event);
    } else if (param.stick) {
      Bus._stick_bus = Bus._stick_bus.filter((e) => e.key != param.stick);
    }
  }

  // 清除
  static clear() {
    Bus._event_bus = [];
  }
}

export default Bus;
