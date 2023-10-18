import {
  BookingMentor,
  Footer,
  Hero,
  MentorTypes,
  Partners,
  Reviews,
} from "@/components";

export default function Home() {
  return (
    <main className="bg-[white] text-[black] h-screen">
      <Hero />
      <Partners />
      <MentorTypes />
      <BookingMentor />
      <Reviews />
      <Footer />
    </main>
  );
}
