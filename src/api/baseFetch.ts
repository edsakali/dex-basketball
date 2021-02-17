const API_URL = process.env.REACT_APP_BASE_API_URL;

interface PropsBaseFetch extends RequestInit {
  url: string;
}

export const baseFetch = async ({ url, ...rest }: PropsBaseFetch) => {
  const requestUrl = API_URL + url;
  const requestOptions = {
    ...rest,
  };

  return await fetch(requestUrl, requestOptions);
};
