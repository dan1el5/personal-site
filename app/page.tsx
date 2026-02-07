import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Dev } from "@/components/sections/Dev";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Dev />
      <GitHubActivity />
      <Footer />
    </main>
  );
}
