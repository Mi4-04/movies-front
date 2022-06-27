import { useRouter } from "next/router";

export const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { replace, pathname } = useRouter();
  if (typeof window !== "undefined" && pathname !== "/") {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      replace("/");
    }
  }
  return children;
};
