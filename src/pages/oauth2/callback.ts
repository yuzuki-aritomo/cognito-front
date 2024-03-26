import { useRouter } from "next/router";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { access_token, refresh_token } = router.query;

  useEffect(() => {
    if (typeof access_token === "string" && typeof refresh_token === "string") {
      document.cookie = `access-token=${access_token}; path=/; HttpOnly;`;
      document.cookie = `refresh-token=${refresh_token}; path=/; HttpOnly;`;
      router.push("/home");
    }
  }, [access_token, refresh_token, router]);
};

export default Page;
