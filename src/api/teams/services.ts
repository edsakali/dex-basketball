import { baseFetch } from "../baseFetch";
import { User } from "../../modules/auth/authSlice";
import { EditTeamParams, TeamParams } from "./TeamsDto";
interface FetchTeamsResponse {
  data: [
    {
      name: "string";
      foundationYear: number;
      division: "string";
      conference: "string";
      imageUrl: "string";
      id: number;
    }
  ];
  count: number;
  page: number;
  size: number;
}

interface TeamIdProps {
  id: string;
}

export interface ParamsGetElement {
  page: number;
  PageSize: { value: number };
}

const getTeams = async (user: User): Promise<FetchTeamsResponse> => {
  const response = await baseFetch({
    url: "api/Team/GetTeams?Page=1&PageSize=6",
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    body: undefined,
  });
  return response.json();
};

const getTeamsFilter = async (
  user: User,
  { page, PageSize }: ParamsGetElement
): Promise<FetchTeamsResponse> => {
  const response = await baseFetch({
    url: `api/Team/GetTeams?Page=${page}&PageSize=${PageSize.value}`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    body: undefined,
  });
  return response.json();
};

const getTeamId = async (
  user: User,
  { id }: TeamIdProps
): Promise<FetchTeamsResponse> => {
  const response = await baseFetch({
    url: `api/Team/Get?id=${id}`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
  });
  return response.json();
};

const deleteTeam = async (
  user: User,
  { id }: TeamIdProps
): Promise<FetchTeamsResponse> => {
  const response = await baseFetch({
    url: `api/Team/Delete?id=${id}`,
    method: "DELETE",
    headers: { Authorization: "Bearer " + user.token },
  });
  return response.json();
};

const postTeam = async (user: User, params: TeamParams) => {
  const response = await baseFetch({
    url: "api/Team/Add",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.token,
    },
    body: JSON.stringify(params),
  });
  return response.json();
};

const editTeam = async (user: User, params: EditTeamParams) => {
  const response = await baseFetch({
    url: "api/Team/Update",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.token,
    },
    body: JSON.stringify(params),
  });
  return response.json();
};

export const teamsServices = {
  getTeamsFilter,
  getTeamId,
  deleteTeam,
  editTeam,
  postTeam,
  getTeams,
};
