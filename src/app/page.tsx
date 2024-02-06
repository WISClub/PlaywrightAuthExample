import Image from "next/image";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const  session = await getSession();
  let loggedIn = !!(session && session.user && session.user["name"]);
  return (
    <main>
      <h1>You are logged {loggedIn ? "In" : "Out"}</h1>
      {
        loggedIn ? <a href="/api/auth/logout"><h1>LOGOUT</h1></a>:<a href="/api/auth/login"><h1>LOGIN</h1></a>
      }

    </main>
  );
}
