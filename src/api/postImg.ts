import { baseFetch } from "./baseFetch";
import { User } from "./auth/AuthDto";

const _postImage = async (
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

export const getUploadedImage = async (user: User, imageFile: File) => {
  const formData = new FormData();
  formData.append("file", imageFile);
  return await _postImage(user, formData);
};
