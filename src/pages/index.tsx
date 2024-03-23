import Link from "next/link";

export default function Home() {
  return (
    <>
      <p>hello world</p>
      <Link href="/signup">Sign up</Link>
      <br />
      <Link href="/login">Login</Link>
      <br />
      <Link href="/home">Home</Link>
      <br />
      <Link href="/forgot_password">Reset Password</Link>
    </>
  );
}
