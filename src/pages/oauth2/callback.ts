import { useRouter } from "next/router";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { access_token, refresh_token } = router.query;

  useEffect(() => {
    if (typeof access_token === "string" && typeof refresh_token === "string") {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      router.push("/home");
    }
  }, [access_token, refresh_token, router]);
};

export default Page;
