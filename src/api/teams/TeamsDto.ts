export interface TeamParams {
  name: string | undefined;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl?: string;
  id?: number | string;
  imageUrlLogo?: string;
  imageFile?: File;
  callback?: () => void;
}

export interface TeamsResponse {
  data: Team[];
  count: number;
  page: number;
  size: number;
}

export interface Team {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
}
