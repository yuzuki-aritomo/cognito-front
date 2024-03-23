import { callConfirmForgotPasswordApi } from "@/api/confirmForgotPasswordApi";
import { callForgotPasswordApi } from "@/api/forgotPasswordApi";
import { useRouter } from "next/router";
import { useState } from "react";

const Page = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  const resetPassword = async (e: { preventDefault: () => void }) => {
    const call = async () => {
      e.preventDefault();
      await callForgotPasswordApi({ username });
      setIsComplete(true);
    };
    call();
  };

  const confirmResetPassword = async (e: { preventDefault: () => void }) => {
    const call = async () => {
      e.preventDefault();
      await callConfirmForgotPasswordApi({
        username,
        confirmation_code: code,
        password,
      });
      router.push("/login");
    };
    call();
  };

  return (
    <>
      <h1>Forgot Password</h1>
      {isComplete ? (
        <form onSubmit={confirmResetPassword}>
          <div>
            <label>Confirmation Code:</label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>
          <div>
            <label>New Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      ) : (
        <form onSubmit={resetPassword}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <button type="submit">Send Confirmation Code</button>
        </form>
      )}
    </>
  );
};

export default Page;
