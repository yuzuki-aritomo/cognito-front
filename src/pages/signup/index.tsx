import { callSignUpApi } from "@/api/signUpApi";
import { useState } from "react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState<string[]>([]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Phone Number:", phoneNumber);
    console.log("Password:", password);
    console.log("User Type:", userType);
    // ここでフォームデータをサーバーに送信するなどの処理を行います
    callSignUpApi({
      username: username,
      phone_number: phoneNumber,
      password,
      user_type: userType,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setUserType((data) =>
      checked ? [...data, value] : data.filter((type) => type !== value)
    );
  };

  return (
    <div>
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
    </div>
  );
};

export default Page;
