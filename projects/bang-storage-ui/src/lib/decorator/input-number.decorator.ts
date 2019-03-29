export function InputNumber(target: object, key: string): void {
  let currentValue: number = target[key];
  Object.defineProperty(target, key, {
    set(v: any): void {
      let flag = false;
      switch (typeof v) {
        case 'string':
          if (v && !isNaN(Number(v))) {
            flag = true;
          }
          break;
        case 'boolean':
          break;
        case 'symbol':
          break;
        case 'undefined':
          break;
        case 'function':
          break;
        case 'object':
          break;
        default:
          flag = true;
      }
      if (flag) {
        currentValue = parseInt(v, 10);
      } else {
        console.error(`Please pass in a pure numeric parameter!`);
      }
    },
    get(): any {
      return currentValue;
    }
  });
}
