import { BrowserRouter } from "react-router-dom";

// import { AppRoutes } from "@/routes/app.routes";
import { AuthRoutes } from "@/routes/auth.routes";

export const Routes = () => {
  return (
    <BrowserRouter>
      {/* <AppRoutes /> */}
      <AuthRoutes />
    </BrowserRouter>
  );
};
