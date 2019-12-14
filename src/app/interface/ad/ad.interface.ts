export interface ICreative {
  name: string;
  url: string;
}

export interface AdData {
  type: 'IMAGE' | 'VIDEO';
  coordinates: {
    x: number;
    y: number;
  };
  creative: ICreative;
  date: number;
}
