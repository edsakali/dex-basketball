import { baseFetch } from "../baseFetch";
import { TeamsResponse, Team, TeamParams } from "./TeamsDto";
import { IdParams, ParamsGetElement } from "../appDto";
import { CustomError } from "../../core/helpers/errorHelper";
import { User } from "../auth/AuthDto";

export enum InitialTeamsPageParams {
  page = 1,
  pageSize = 6,
}

const getTeams = async (
  user: User,
  {
    name,
    page = InitialTeamsPageParams.page,
    pageSize = InitialTeamsPageParams.pageSize,
  }: ParamsGetElement
): Promise<TeamsResponse> => {
  let url = `api/Team/GetTeams?Page=${page}&PageSize=${pageSize}`;
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

const getTeamId = async (user: User, { id }: IdParams): Promise<Team> => {
  const response = await baseFetch({
    url: `api/Team/Get?id=${id}`,
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
  });
  return response.json();
};

const deleteTeam = async (user: User, { id }: IdParams): Promise<Team> => {
  const response = await baseFetch({
    url: `api/Team/Delete?id=${id}`,
    method: "DELETE",
    headers: { Authorization: "Bearer " + user.token },
  });

  if (!response.ok) {
    switch (response.status) {
      case 500:
        throw new CustomError(
          response.status.toString(),
          "Unable to delete team, players must be deleted!"
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Command deletion error!"
        );
    }
  }

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
  if (!response.ok) {
    switch (response.status) {
      case 409:
        throw new CustomError(
          response.status.toString(),
          "This command has already been added!"
        );
      default:
        throw new CustomError(
          response.status.toString(),
          "Command adding error!"
        );
    }
  }
  return response.json();
};

const editTeam = async (user: User, params: TeamParams) => {
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
  getTeamId,
  deleteTeam,
  editTeam,
  postTeam,
  getTeams,
};
