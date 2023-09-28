import useAuthContext from "./useAuth";

import { postRequestWithCookie } from "./request";

const useRefreshToken = () => {
  const { setAuth } = useAuthContext();

  const refresh = async () => {
    const { data } = await postRequestWithCookie(
      `/api/v1/auth/refresh-token-cookie`
    );

    setAuth((prev) => {
      return {
        ...prev,
        user_role: data.user_role,
        access_token: data.access_token,
      };
    });
    return data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
