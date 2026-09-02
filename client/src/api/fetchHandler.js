import { ApiError } from "../errors/ApiError";

export const fetchHandler = async (apiUrl, method, reqBody) => {
  let res;
  try {
    res = await fetch(apiUrl, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqBody),
    });
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
