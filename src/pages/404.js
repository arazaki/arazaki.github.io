import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main className="h-screen flex flex-col justify-center items-center">
      <h1>Page not found</h1>
      <p className="py-5 flex flex-col justify-start">
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        <Link className="mt-10 border-b w-fit" to="/">
          Go home
        </Link>
      </p>
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
