import Container from "~/components/Container";
import { Footer } from "~/components/Footer";
import Header from "~/components/Header";
import SideBar from "~/components/Sidebar";

function DefaultLayout() {
  return (
    <div className="mx-auto w-screen">
      <div>
        <Header />
      </div>

      <div className="w-screen bg-white lg:pt-[75px] max-sm:pt-[30px]">
        <SideBar />
        <Container />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
