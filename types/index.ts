export interface Item {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

export interface Target {
  id: string;
  name: string;
  correctItemId: string; // ID of the correct item for this target
}

export interface Level {
  level: number;
  timeLimit: number; // Time limit in seconds
  items: Item[];
  targets: Target[];
}

export interface Element {
  atomicNumber: number;
  symbol: string;
  name: string;
  category: string;
  atomicMass: string;
  electronConfiguration: string;
  discoveredYear: string;
  group: number; // Grup numarası (1-18)
  period: number; // Periyot numarası (1-7)
}
