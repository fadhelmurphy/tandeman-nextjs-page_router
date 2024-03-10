// store.js
import { create } from 'zustand';

const useLandingStore = create((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
}));

export { useLandingStore };