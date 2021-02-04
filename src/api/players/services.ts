import { User } from "../../modules/auth/authSlice";
import { baseFetch } from "../baseFetch";
import { FetchPlayersResponse, PlayerParams } from "./PlayersDto";
import { ParamsGetElement } from "../teams/services";

const postPlayer = async (user: User, params: PlayerParams) => {
  const response = await baseFetch({
    url: "api/Player/Add",
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

const getPlayers = async (user: User): Promise<FetchPlayersResponse> => {
  const response = await baseFetch({
    url: `api/Player/GetPlayers?Page=1&PageSize=6`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    body: undefined,
  });
  return response.json();
};

const getPlayersFilter = async (
  user: User,
  { page, PageSize }: ParamsGetElement
): Promise<FetchPlayersResponse> => {
  const response = await baseFetch({
    url: `api/Player/GetPlayers?Page=${page}&PageSize=${PageSize.value}`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    body: undefined,
  });
  return response.json();
};

export const playerServices = {
  getPlayers,
  getPositions,
  getPlayersFilter,
  // getPlayerId,
  postPlayer,
};
