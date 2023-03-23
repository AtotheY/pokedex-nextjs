export interface Pokemon {
  id: number;
  name: string;
  url?: string;
  weight: number;
  height: number;
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}
