// store.js
import { create } from 'zustand';

const useGlobalUserStore = create((set) => ({
  user: {
    user: null,
    token: null,
    status: 'initial'
  },
  setUser: (newData) => set({ user: newData }),
}));

export { useGlobalUserStore };