import { ApiError } from "../errors/ApiError";

export const apiRequest = async ({ url, method = "GET", body }) => {
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body !== undefined && body !== null) {
    options.body = JSON.stringify(body);
  }

  let res;
  try {
    res = await fetch(url, options);
  } catch (error) {
    throw new Error("NETWORK_ERROR", { cause: error });
  }

  let data;
  try {
    data = await res.json();
  } catch (error) {
    throw new Error("INVALID_RESPONSE", { cause: error });
  }

  if (!res.ok) {
    throw new ApiError(
      res.status,
      data.error?.code ?? "UNKNOWN_API_ERROR",
      data.error?.message ?? "Something went wrong.",
    );
  }

  return data;
};
