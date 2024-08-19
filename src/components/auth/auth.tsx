import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authPost } from "../../services/auth/auth.service";
import { useAuthStore } from "../../store/authStore";

const AuthLogin: React.FC = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authPost({ username, password });
      const { token, refreshToken } = response;
      login(token, refreshToken, response);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center flex-col justify-center min-h-screen ">
      <h2 className="mb-[24px] text-[42px] font-[600] text-blue-primary">
        TADI INDUSTRIES
      </h2>
      <div className="bg-white shadow-lg p-[24px] rounded-[6px]">
        <form onSubmit={handleLogin}>
          <div className="flex flex-col w-[400px]">
            <label htmlFor="text">
              <span className="text-red-primary">* </span>Username
            </label>
            <input
              type="text"
              id="text"
              value={username}
              className="mt-[4px] border-stroke rounded-[6px] px-[4px] py-[5px]"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-[12px]">
            <label htmlFor="password">
              <span className="text-red-primary">* </span>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              className="mt-[4px] border-stroke rounded-[6px] px-[4px] py-[5px]"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-primary text-white rounded-[6px] mt-[24px] py-[8px]"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Submit"}
          </button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default AuthLogin;
