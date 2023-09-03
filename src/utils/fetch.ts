export const BASE_URL = 'http://localhost:3000/api';

type RequestMethod = "GET" | "POST" | "PATCH" | "DELETE";

interface IParams {
  url: string;
  body?: string | null;
  method?: RequestMethod;
  headers?: HeadersInit;
}

export const makeRequest = async ({
  url,
  body = null,
  method = "GET",
  headers = {},
}: IParams) => {
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`${BASE_URL}/${url}`, options);

  if (!res.ok) {
    throw new Error("error fetch");
  }

  return await res.json();
};
