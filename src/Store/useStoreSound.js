import { create } from "zustand";
const useStoreSound = create((set) => ({
  isPlaying: false,
  setIsPlaying: () => set({ isPlaying: true }),
  setStopSound: () => set({ isPlaying: false }),
}));

export default useStoreSound;
