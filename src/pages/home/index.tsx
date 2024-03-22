import { callGetUser } from "@/api/getUserApi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type User = {
  sub: string | null;
  phoneNumber: string | null;
};

const Page = () => {
  const [user, setUer] = useState<User>({ sub: null, phoneNumber: null });
  const router = useRouter();

  useEffect(() => {
    const call = async () => {
      const res = await callGetUser();
      if (res?.error === "Unauthorized") {
        router.push("/login");
        return;
      }
      setUer({
        sub: res?.user.sub,
        phoneNumber: res?.user.phone_number,
      });
    };
    call();
  }, [router]);

  return (
    <div>
      <h1>Home</h1>
      <p>sub: {user.sub}</p>
      <p>phone_number: {user.phoneNumber}</p>
    </div>
  );
};

export default Page;
