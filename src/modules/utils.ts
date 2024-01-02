/* eslint-disable no-undef */
import { computed } from 'vue';

export const isOnline = () =>
  // @ts-expect-error 'Cause ONLY AppsScript Window has `google` member
  window.navigator.onLine && typeof window.google !== 'undefined';

export const ServerScript = computed(() => {
  const temp: { [key: string]: (...arg: []) => Promise<any> } = {};
  for (const methodName in google.script.run) {
    const method = google.script.run[methodName];
    if (typeof method !== 'function') continue;
    if (methodName === method.prototype.constructor.name) continue;
    temp[methodName] = (...arg: any[]) =>
      new Promise((resolve, reject) =>
        google.script.run
          .withSuccessHandler(resolve)
          .withFailureHandler(reject)
          [methodName](...arg)
      );
  }
  return temp;
});
