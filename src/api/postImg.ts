import { User } from "../modules/auth/authSlice";
import { baseFetch } from "./baseFetch";

export const postImage = async (
  user: User,
  formData: FormData | undefined
): Promise<string> => {
  const response = await baseFetch({
    url: "api/Image/SaveImage",
    method: "POST",
    headers: { Authorization: "Bearer " + user.token },
    body: formData,
  });
  return response.json();
};
