import { AxiosError } from "axios";

const errFallback = {
  message: "Something went wrong please try again"
};

export default function parseError(err: AxiosError | any) {
  const errRes = err.response || {};
  const accurateError = errRes.data || errFallback;

  return accurateError.message || accurateError.error;
}
