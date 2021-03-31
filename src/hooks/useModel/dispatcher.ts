export default class Dispatcher {
  data: any = {};

  callBacks: any = {};

  update = (namespace: string) => {
    (this.callBacks[namespace] || []).forEach(
      (callback: (value: any) => void) => {
        try {
          const data = this.data[namespace];
          callback(data);
        } catch (e) {
          callback(undefined);
        }
      },
    );
  };
}
