import { ref, computed } from 'vue';

export const loading = ref(false);
export const whileLoading = async (callback: Function, errorHander?: (e: Error) => void) => {
  loading.value = true;
  try {
    await callback();
  } catch (e: any) {
    errorHander && errorHander(e);
  }
  loading.value = false;
};

export const isOnline = () =>
  // @ts-expect-error
  window.navigator.onLine && typeof window.google !== 'undefined';

export const ServerScript = computed(() => {
  const temp: { [key: string]: Function } = {};
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
