import { AxiosError } from "axios";

const errFallback = {
  message: "Something went wrong please try again"
};

const isArray = (element: any) => {
  return element instanceof Array;
};

export default function parseError(err: AxiosError | any) {
  const errRes = err.response || {};
  const accurateError = errRes.data || errFallback;
  return extractListErrors(accurateError.message) || accurateError.error;
}

const extractListErrors = (possibleArray: any): string => {
  const message = isArray(possibleArray)
    ? possibleArray.reduce((prev: string, curr: string) => {
        return `${prev}\n${curr}`;
      }, ``)
    : possibleArray;

  return message;
};
