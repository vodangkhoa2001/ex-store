import { Footer } from "~/components/Footer";
import Header from "~/components/Header";

function HeaderAndFooter({ children }) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="max-w-7xl mx-auto pt-[150px] max-sm:pt-[65px]">
        {children}
      </div>
      <div className="mt-[300px] max-sm:mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}

export default HeaderAndFooter;
