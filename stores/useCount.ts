export const useCountStore = defineStore("count", {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++;
    },
  },
  persist: true, // Enable persistence
});