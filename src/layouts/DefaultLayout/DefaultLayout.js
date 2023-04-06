import Container from "~/components/Container";
import { Footer } from "~/components/Footer";
import Header from "~/components/Header";
import SideBar from "~/components/Sidebar";

function DefaultLayout() {
  return (
    <div className="mx-auto">
      <div>
        <Header />
      </div>
      <div className="w-full bg-white pt-[75px]">
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
