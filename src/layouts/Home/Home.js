import Container from "~/components/Container";
import Header from "~/components/Header";
import SideBar from "~/components/Sidebar";

function Home() {
  return (
    <div className="mx-auto">
      <div>
        <Header />
      </div>
      <div className="w-full bg-white pt-[75px]">
        <SideBar />
        <Container />
      </div>
    </div>
  );
}

export default Home;
