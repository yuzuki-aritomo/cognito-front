import { callLoginApi } from "@/api/loginApi";
import { useRouter } from "next/router";
import { useState } from "react";

const Page = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await callLoginApi({ id, password });
    router.push("/home");
  };

  const lineLoginUrl = process.env.NEXT_PUBLIC_OAUTH2_LINE_URL as string;

  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={() => router.replace(lineLoginUrl)}>LINE LOGIN</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID:</label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
};

export default Page;
