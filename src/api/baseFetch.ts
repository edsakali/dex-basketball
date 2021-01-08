const API_URL = process.env.REACT_APP_BASE_API_URL;

export const baseFetch = async (
  url: string,
  method: "POST" | "GET" | "DELETE" | "PUT",
  data = {}
) => {
  const requestUrl = API_URL + url;
  const requestOptions = {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return await fetch(requestUrl, requestOptions);
};
