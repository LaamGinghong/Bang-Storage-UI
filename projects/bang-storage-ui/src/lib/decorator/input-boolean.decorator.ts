export function InputBoolean(target: object, key: string): void {
  let currentValue: boolean = target[key];
  Object.defineProperty(target, key, {
    set(newValue: any): void {
      currentValue = newValue !== false;
    },
    get(): boolean {
      return currentValue;
    }
  });
}
