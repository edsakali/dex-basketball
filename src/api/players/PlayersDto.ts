export interface PlayerParams {
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  avatarUrl?: string;
  imageFile?: File;
  id?: string | number;
  imageUrl?: string;
  callback?: () => void;
}

export interface PlayersResponse {
  data: Player[];
  count: number;
  page: number;
  size: number;
}

export interface Player {
  id: number;
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  avatarUrl: string;
}
