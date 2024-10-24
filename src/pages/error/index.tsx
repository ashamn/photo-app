import { FC } from "react";
import { useRouteError } from "react-router-dom";

const Error: FC = () => {
  const error = useRouteError();
  console.error(error);
  return <>Error</>;
};

export default Error;
