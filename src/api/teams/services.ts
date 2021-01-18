import { baseFetch } from "../baseFetch";
import { User } from "../../modules/auth/authSlice";
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
const getTeams = async (user: User): Promise<FetchTeamsResponse> => {
  const response = await baseFetch({
    url: "api/Team/GetTeams",
    method: "GET",
    headers: { Authorization: "Bearer " + user.token },
    data: undefined,
  });
  return response.json();
};

export const teamsServices = {
  getTeams,
};
