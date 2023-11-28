import { Route, Redirect } from "react-router-dom";
import config from "~/config";
import { useAuth } from "~/context/userContext";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn && restricted ? (
          <Redirect to={config.routes.home} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export { PublicRoute };
