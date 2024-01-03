import { createApp, type App } from 'vue';

export function withSetup<T>(composable: () => T): [T | undefined, App<Element>] {
  let result;
  const app = createApp({
    setup() {
      result = composable();
      // template の警告を抑えます
      return () => {};
    },
  });
  app.mount(document.createElement('div'));
  // provide/unmount のテストのため
  // result と app インスタンスを返却します
  return [result, app];
}
