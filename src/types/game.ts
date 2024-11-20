export interface GameState {
  balance: number;
  isSpinning: boolean;
  lastWin: number;
  multiplier: number;
  symbols: Symbol[][];
  paylines: number[][];
}

export interface Symbol {
  id: string;
  value: number;
  image: string;
}

export interface WinningCombination {
  symbols: Symbol[];
  payline: number[];
  multiplier: number;
}