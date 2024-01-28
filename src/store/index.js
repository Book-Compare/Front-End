// Trong thư mục gốc, tạo một thư mục có tên là `store` và trong đó tạo một file `index.js` (hoặc `index.ts`).
import { reactive, readonly } from 'vue';

const state = reactive({
  isAuthenticated: false,
});

const mutations = {
  setAuthStatus(status) {
    state.isAuthenticated = status;
  },
};

export const useAuthStore = () => {
  return {
    state: readonly(state),
    mutations,
  };
};
