import { Link, useLocation } from "react-router-dom";
import config from "~/config";
function Breadcrumbs({ title }) {
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "" && crumb !== "sign-up" && crumb !== "login")
    .map((crumb) => {
      return (
        <div key={crumb}>
          <div>
            <div className="flex items-center">
              <Link to={config.routes.home}>Home</Link>
              <p className="mx-3">/</p>
              <p className="first-letter:uppercase font-semibold">{title}</p>
            </div>
          </div>
        </div>
      );
    });
  return <div className=" flex">{crumbs}</div>;
}

export default Breadcrumbs;
