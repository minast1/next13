import { create } from "zustand";

type ScrollState = {
  position: number;
  setIsScrolled: (val: boolean) => void;
  isScrolled: boolean;
};
const useScrollStore = create<ScrollState>()((set) => ({
  position: 0,
  setIsScrolled: (val) => set((state) => ({ isScrolled: val })),
  isScrolled: false,
}));

export default useScrollStore;
