import Container from "~/components/Container";
import Header from "~/components/Header";
import SideBar from "~/components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="mx-auto  max-w-7xl p-6 lg:px-8">
      <div>
        <Header />
      </div>
      <div className="w-full bg-white ">
        <SideBar />
        <Container />
      </div>
    </div>
  );
}

export default Home;
