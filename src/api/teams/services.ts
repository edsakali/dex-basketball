import { baseFetch, baseFetchImg } from "../baseFetch";
import { User } from "../../modules/auth/authSlice";
import { TeamParams } from "./TeamsDto";
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
  id: number;
}
const getTeams = async (user: User): Promise<FetchTeamsResponse> => {
  const response = await baseFetch({
    url: "api/Team/GetTeams",
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    data: undefined,
  });
  return response.json();
};

const getTeamId = async (
  user: User,
  params: TeamIdProps
): Promise<FetchTeamsResponse> => {
  const response = await baseFetch({
    url: `api/Team/GetTeams`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    data: params,
  });
  return response.json();
};

const postImage = async (
  user: User,
  formData: any
): Promise<FetchTeamsResponse> => {
  const response = await baseFetchImg({
    url: `api/Image/SaveImage`,
    method: "POST",
    headers: { Authorization: "Bearer " + user.token },
    data: formData,
  });
  return response.json();
};

const postTeam = async (user: User, params: TeamParams) => {
  const response = await baseFetch({
    url: `api/Team/Add`,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.token,
    },
    data: params,
  });
  return response.json();
};

export const teamsServices = {
  getTeams,
  getTeamId,
  postImage,
  postTeam,
};
