export interface TeamParams {
  name: string | undefined;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl?: string;
  id?: number;
}

export interface AddTeamParams extends TeamParams {
  formData: any;
}

export interface EditTeamParams {
  name: string | undefined;
  foundationYear: number;
  division: string;
  conference: string;
  id: string | undefined;
  imageUrlLogo?: string;
  imageUrl?: string;
  file?: any;
  formData?: FormData | undefined;
}
