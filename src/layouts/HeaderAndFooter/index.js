import { Footer } from "~/components/Footer";
import Header from "~/components/Header";

function HeaderAndFooter({ children }) {
  return (
    <div className="flex flex-col justify-between">
      <div>
        <Header />
      </div>
      <div className="min-h-100vh max-w-7xl mt-[100px]">{children}</div>
      <div className="mt-[300px]">
        <Footer />
      </div>
    </div>
  );
}

export default HeaderAndFooter;
