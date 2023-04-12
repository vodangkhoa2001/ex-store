import { Footer } from "~/components/Footer";
import Header from "~/components/Header";

function HeaderAndFooter({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="max-w-7xl mx-auto pt-[150px]">{children}</div>
      <div className="mt-[300px]">
        <Footer />
      </div>
    </div>
  );
}

export default HeaderAndFooter;
