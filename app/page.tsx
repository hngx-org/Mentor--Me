import HomeNavBar from "@/components/homeNavbar";
import Hero from "@/components/landingPage/hero/page";
import Partners from "@/components/landingPage/partners/page";
import MentorTypes from "@/components/landingPage/mentorTypes/page";
import BookingMentor from "@/components/landingPage/bookingMentor/page";
import Reviews from "@/components/landingPage/reviews/page";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[white] text-[black] ">
      <HomeNavBar />
      <Hero />
      <Partners />
      <MentorTypes />
      <BookingMentor />
      <Reviews />
      <Footer />
    </main>
  );
}
