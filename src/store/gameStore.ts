import { create } from 'zustand';
import { GameState } from '../types/game';

interface GameStore extends GameState {
  spin: () => void;
  updateBalance: (amount: number) => void;
  setMultiplier: (multiplier: number) => void;
}

export const useGameStore = create<GameStore>((set) => ({
  balance: 1000,
  isSpinning: false,
  lastWin: 0,
  multiplier: 1,
  symbols: Array(5).fill(Array(3).fill({ id: 'empty', value: 0, image: '' })),
  paylines: [
    [0, 0, 0, 0, 0], // Top row
    [1, 1, 1, 1, 1], // Middle row
    [2, 2, 2, 2, 2], // Bottom row
    [0, 1, 2, 1, 0], // V shape
    [2, 1, 0, 1, 2], // Inverted V
  ],
  spin: () => {
    set({ isSpinning: true });
    setTimeout(() => {
      set({ isSpinning: false });
    }, 3000);
  },
  updateBalance: (amount) => set((state) => ({ balance: state.balance + amount })),
  setMultiplier: (multiplier) => set({ multiplier }),
}));