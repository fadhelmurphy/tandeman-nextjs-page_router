// store.js
import { create } from 'zustand';

const useGlobalUserStore = create((set) => ({
    user: null,
    token: null,
    status: 'initial',
  setUser: (newData) => set(newData),
}));

export { useGlobalUserStore };