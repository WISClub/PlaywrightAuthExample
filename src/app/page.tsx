//src\app\page.tsx - this is a nextjs page component that is used to render the UI of the page

import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const session = await getSession();
  let loggedIn = !!(session && session.user && session.user["name"]);
  return (
    <main>
      <h1>You are logged {loggedIn ? "In" : "Out"}</h1>
      {loggedIn ? (
        <a className="logout" href="/api/auth/logout">
          <h1>LOGOUT</h1>
        </a>
      ) : (
        <a className="login" href="/api/auth/login">
          <h1>LOGIN</h1>
        </a>
      )}
    </main>
  );
}
