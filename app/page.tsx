import { Discord } from "@/components/discord";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Jumbotron } from "@/components/jumbotron";
import { Navbar } from "@/components/navbar";
import { Partners } from "@/components/partners";
import { ReviewsSlider } from "@/components/reviews-slider";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Jumbotron />
      <Partners />
      <Features />
      <Discord />
      <ReviewsSlider />
      <Footer />
    </main>
  );
}
