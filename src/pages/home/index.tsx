import { callGetUser } from "@/api/getUserApi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type User = {
  id: string;
  sub: string;
  phoneNumber: string;
  username: string;
  email: string | null;
};

const Page = () => {
  const [user, setUer] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const call = async () => {
      const res = await callGetUser();
      if (res?.error === "Unauthorized") {
        router.push("/login");
        return;
      }
      if (res?.user) {
        setUer({
          id: res.user.id,
          sub: res.user.cognito_sub,
          phoneNumber: res.user.phone_number,
          username: res.user.username,
          email: res.user.email,
        });
      }
    };
    call();
  }, [router]);

  return (
    <div>
      <h1>Home</h1>
      {user && (
        <>
          <p>id: {user.id}</p>
          <p>sub: {user.sub}</p>
          <p>username: {user.username}</p>
          <p>phone_number: {user.phoneNumber}</p>
          <p>email: {user.email}</p>
        </>
      )}
    </div>
  );
};

export default Page;
