export interface PlayerParams {
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  avatarUrl?: string;
  formData?: FormData;
  id?: number;
}

export interface FetchPlayersResponse {
  data: [
    {
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
  ];
  count: number;
  page: number;
  size: number;
}
