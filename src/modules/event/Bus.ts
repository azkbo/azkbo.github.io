/**
 * Author: Meng
 * Date: 2022-08-12
 * Desc: 事件
 */

interface BusDao {
  key: string;
  tag?: string;
  mode?: number;
  event: (data: any) => void;
}

// 事件 key
export const BusKey = {
  login: "account_login", // 登录成功
  logout: "account_logout", // 退出成功
  app_tab: "app_tab_change", // app
};

class Bus {
  private static _bus3: BusDao[] = []; // 事件集合{ key, event, mode: 1:单次订阅, tag:标签, time: 消息保存多久及多久内再次订阅依旧可以收到消息}

  // 添加事件
  static add(key: string, event: (data: any) => void) {
    Bus._bus3.push({ key, event, mode: 9 });
  }

  // 发送事件
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

  static sendMsg(key: string, data: any) {
    const event = Bus._bus3.filter((e) => e.key == key);
    try {
      event.forEach((e) => {
        if (e.event) {
          e.event(data);
        }
      });
    } catch (error) {
      console.log(' Bus Send Error: ===>', error);
    }
    
    // 移除一次性事件
    Bus._bus3 = Bus._bus3.filter(
      (e) => e.key != key || (e.key == key && e.mode != 1)
    );
    // console.log(_bus3);
  }

  // 一次性事件 - 不用单独移除
  static single(key: string, event: (data: any) => void, tag = "") {
    Bus._bus3 = Bus._bus3.filter((e) => e.key == key && e.tag == tag);
    Bus._bus3.push({ key, event, mode: 1, tag });
  }

  // 移除事件
  static remove(param = { key: "", event: null }) {
    if (param.key) {
      Bus._bus3 = Bus._bus3.filter((e) => e.key != param.key);
    } else if (param.event) {
      Bus._bus3 = Bus._bus3.filter((e) => e.event != param.event);
    }
  }

  // 清除事件
  static clear() {
    Bus._bus3 = [];
  }
}

export default Bus;
