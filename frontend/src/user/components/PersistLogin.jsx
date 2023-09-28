import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefreshToken from "../../hooks/useRefreshToken";
import useAuthContext from "../../hooks/useAuth";
import { useRef } from "react";
import Loader from "../../components/Loader";

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuthContext();

  const initialized = useRef(false);

  const verifyRefreshToken = async () => {
    try {
      await refresh();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      !auth?.access_token ? verifyRefreshToken() : setIsLoading(false);
    }
  }, []);

  return <>{isLoading ? <Loader /> : <Outlet />}</>;
};

export default PersistLogin;
