export interface TeamParams {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl?: any;
  id?: number;
}

export interface AddTeamParams extends TeamParams {
  formData: any;
}
