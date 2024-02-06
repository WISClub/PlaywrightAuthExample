import Image from "next/image";
import styles from "./page.module.css";
import { getSession } from "@auth0/nextjs-auth0";

export default async function Home() {
  const  session = await getSession();
  return (
    <main className={styles.main}>
<a href="/api/auth/login"><h1>LOGIN</h1></a>
<a href="/api/auth/logout">LOGOUT</a>
    </main>
  );
}
