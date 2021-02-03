import { User } from "../../modules/auth/authSlice";
import { baseFetch } from "../baseFetch";
import { PlayerParams } from "./PlayersDto";
import { ParamsGetElement } from "../teams/services";

interface FetchPlayersResponse {
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

const postPlayer = async (user: User, params: PlayerParams) => {
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

const getPositions = async (user: User) => {
  const response = await baseFetch({
    url: "api/Player/GetPositions",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.token,
    },
    body: undefined,
  });
  return response.json();
};

const getPlayers = async (
  user: User,
  { page, PageSize }: ParamsGetElement
): Promise<FetchPlayersResponse> => {
  const response = await baseFetch({
    url: `api/Team/GetTeams?Page=${page}&PageSize=${PageSize.value}`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    body: undefined,
  });
  return response.json();
};

export const playerServices = {
  getPlayers,
  getPositions,
  // getPlayerId,
  postPlayer,
};
