type eventType = {
  type: string;
  [key: string]: any;
};

export class EventDispatcer {
  eventMap: Map<string, Map<number, any>>;
  constructor() {
    if (window && window.EventBus) {
      throw new Error('这是一个单例！');
    }
    this.eventMap = new Map();
    
  }
  dispatchEvent(event: eventType, once: boolean = false) {
    let evtSet = this.eventMap.get(event.type);
    if (evtSet) {
      for (let item of evtSet.values()) {
        item(event);
        if (once) {
          // 是否触发一次进行销毁
          this.removeEventListener(event.type, item);
        }
      }
    }
  }
  addEventListener(eventType: string, func: (value?: any) => void) {
    let evtSet = this.eventMap.get(eventType);
    if (!evtSet) {
      evtSet = new Set();
      evtSet.add(func);
    } else {
      for (let item of evtSet.values()) {
        this.removeEventListener(eventType, item);
      }
      evtSet.add(func);
    }
    this.eventMap.set(eventType, evtSet);
  }
  removeEventListener(eventType: string, func: (value?: any) => void) {
    let evtSet = this.eventMap.get(eventType);
    if (evtSet) {
      evtSet.delete(func);
    }
  }
}
export default new EventDispatcer();
