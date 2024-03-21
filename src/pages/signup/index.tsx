import { callConfirmUserApi } from "@/api/confirmUserApi";
import { callSignUpApi } from "@/api/signUpApi";
import { useRouter } from "next/router";
import { useState } from "react";

const Page = () => {
  const [isComplete, setIsComplete] = useState(false);
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<string[]>([]);
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("User Type:", userType);
    // ここでフォームデータをサーバーに送信するなどの処理を行います
    await callSignUpApi({
      username: username,
      phone_number: phoneNumber,
      password,
      user_type: userType,
    });
    setIsComplete(true);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setUserType((data) =>
      checked ? [...data, value] : data.filter((type) => type !== value)
    );
  };
  const handleSubmitConfirm = async () => {
    await callConfirmUserApi({
      username: username,
      confirmation_code: code,
    });
    router.push("/login");
  };

  return (
    <div>
      {isComplete ? (
        <>
          <h2>確認コード入力</h2>
          <form onSubmit={handleSubmitConfirm}>
            <div>
              <label>確認コード:</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button type="submit">確認</button>
          </form>
        </>
      ) : (
        <>
          <h2>新規登録</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>ユーザー名:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label>電話番号:</label>
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div>
              <label>パスワード:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label>ユーザータイプ:</label>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="staff"
                  checked={userType.includes("staff")}
                  onChange={handleCheckboxChange}
                />
                スタッフ
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="customer"
                  checked={userType.includes("customer")}
                  onChange={handleCheckboxChange}
                />
                顧客
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="user"
                  checked={userType.includes("user")}
                  onChange={handleCheckboxChange}
                />
                ユーザー
              </label>
            </div>
            <button type="submit">登録</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Page;
