import { ref } from 'vue';

export const loading = ref(false);
export const whileLoading = async (callback: () => any, errorHandler?: (e: Error) => void) => {
  loading.value = true;
  try {
    await callback();
  } catch (e: any) {
    errorHandler && errorHandler(e);
  }
  loading.value = false;
};
