import { baseFetch } from "../baseFetch";
import { PlayersResponse, PlayerParams, Player } from "./PlayersDto";
import { IdParams, ParamsGetElement } from "../appDto";
import { CustomError } from "../../core/helpers/errorHelper";
import { User } from "../auth/AuthDto";

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
  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new CustomError(
          response.status.toString(),
          "Please enter correct data!"
        );
      case 409:
        throw new CustomError(
          response.status.toString(),
          "This player has already been added!"
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Player adding error!"
        );
    }
  }
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

export enum InitialPlayersPageParams {
  page = 1,
  pageSize = 6,
}

const getPlayers = async (
  user: User,
  {
    name,
    page = InitialPlayersPageParams.page,
    pageSize = InitialPlayersPageParams.pageSize,
  }: ParamsGetElement
): Promise<PlayersResponse> => {
  let url = `api/Player/GetPlayers?Page=${page}&PageSize=${pageSize}`;
  if (name) {
    url = `${url}&Name=${name}`;
  }
  const response = await baseFetch({
    url: url,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    body: undefined,
  });
  return response.json();
};

const deletePlayer = async (user: User, { id }: IdParams): Promise<Player> => {
  const response = await baseFetch({
    url: `api/Player/Delete?id=${id}`,
    method: "DELETE",
    headers: { Authorization: "Bearer " + user.token },
  });
  return response.json();
};

const getPlayerId = async (user: User, { id }: IdParams): Promise<Player> => {
  const response = await baseFetch({
    url: `api/Player/Get?id=${id}`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
  });
  return response.json();
};

const getPlayerTeamIds = async (
  user: User,
  TeamIds: Array<{ value: string }>
): Promise<PlayersResponse> => {
  const newParams = TeamIds.map((item) => ["TeamIds", item.value]);
  const newTeamIds = new URLSearchParams(newParams).toString();
  const response = await baseFetch({
    url: `api/Player/GetPlayers?${newTeamIds}`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
  });
  return response.json();
};

const editPlayer = async (user: User, params: PlayerParams) => {
  const response = await baseFetch({
    url: "api/Player/Update",
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + user.token,
    },
    body: JSON.stringify(params),
  });
  if (!response.ok) {
    switch (response.status) {
      case 400:
        throw new CustomError(
          response.status.toString(),
          "Please enter correct data!"
        );
      default:
        throw new CustomError(response.status.toString(), "Player edit error!");
    }
  }
  return response.json();
};

export const playerServices = {
  getPlayers,
  getPositions,
  getPlayerId,
  postPlayer,
  deletePlayer,
  getPlayerTeamIds,
  editPlayer,
};
