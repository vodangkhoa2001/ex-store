import { Route, Redirect } from "react-router-dom";
import config from "~/config";
import { useAuth } from "~/context/userContext";
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={config.routes.login} />
        )
      }
    />
  );
};
export default PrivateRoute;
