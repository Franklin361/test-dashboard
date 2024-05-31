import {useRouteError, Link} from "react-router-dom";

import {SideBar} from "../components/SideBar";

export const ErrorPage = () => {
  const error = useRouteError() as {statusText?: string; message?: string};

  console.error(error);

  return (
    <div className="grid min-h-dvh grid-cols-[auto,1fr] gap-0 p-2">
      <SideBar />
      <div className="flex flex-col items-center gap-5 pl-6 pr-4 pt-10 text-lg">
        <h1 className="text-5xl font-bold">Oops!</h1>
        <p className="opacity-80">Sorry, an unexpected error has occurred.</p>
        <p className="font-semibold ">{error.statusText || error.message}</p>
        <Link replace className="hover:underline" to="/">
          Go back to activity page
        </Link>
      </div>
    </div>
  );
};
