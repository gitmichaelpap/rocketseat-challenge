import { BrowserRouter } from "react-router-dom";

import { useAuth } from "@/hooks/auth";
import Root from "@/pages/Root";
import { AppRoutes } from "@/routes/app.routes";
import { AuthRoutes } from "@/routes/auth.routes";

export const Routes = () => {
  const { user, isUserAuthenticated } = useAuth();
  const isAdmin = ["admin"].includes(user?.role);

  const userAuthenticated = isUserAuthenticated();

  return (
    <BrowserRouter>
      {user && userAuthenticated ? (
        <Root>
          <AppRoutes isAdmin={isAdmin} />
        </Root>
      ) : (
        <AuthRoutes />
      )}
    </BrowserRouter>
  );
};
