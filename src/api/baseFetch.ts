const API_URL = process.env.REACT_APP_BASE_API_URL;

interface PropsBaseFetch {
  url: string;
  method: "POST" | "GET" | "DELETE" | "PUT";
  data?: {};
  headers?: {};
}

export const baseFetch = async (props: PropsBaseFetch) => {
  const { url, method, data, headers } = props;
  const requestUrl = API_URL + url;
  const requestOptions = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(headers || {}),
    },
    body: JSON.stringify(data),
  };

  return await fetch(requestUrl, requestOptions);
};
