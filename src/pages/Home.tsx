// import Wrapper from "@/components/wrapper";
import H1 from "@/components/typo/H1";
import H2 from "@/components/typo/H2";
// import BlockQuotes from "@/components/typo/BlockQuotes";
import { AppTable } from "@/components/ui/AppTable";

const Home = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-24">
      <H1>Restaurant Management</H1>
      <H2>Manage your restaurant with ease</H2>
      <div className="mt-10 container mx-auto">
          <AppTable />
        </div>
    </section>
  );
};

export default Home;
