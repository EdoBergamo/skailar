import { Jumbotron } from "@/components/jumbotron";
import { Navbar } from "@/components/navbar";
import { Partners } from "@/components/partners";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Jumbotron />
      <Partners />
    </main>
  );
}
