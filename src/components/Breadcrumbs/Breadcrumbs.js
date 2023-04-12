import { Link, useLocation } from "react-router-dom";
import config from "~/config";
function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "" && crumb !== "sign-up" && crumb !== "login")
    .map((crumb) => {
      currentLink = +`/${crumb}`;
      return (
        <div key={crumb}>
          <Link to={currentLink}>
            <div className="flex items-center">
              <Link to={config.routes.home}>Home</Link>{" "}
              <p className="mx-3">/</p>
              <p className="first-letter:uppercase font-semibold">{crumb}</p>
            </div>
          </Link>
        </div>
      );
    });
  return <div>{crumbs}</div>;
}

export default Breadcrumbs;
