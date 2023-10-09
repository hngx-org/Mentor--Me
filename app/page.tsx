import HomeNavBar from "@/components/homeNavbar";
import Hero from "@/components/landingPage/hero/page";
import Partners from "@/components/landingPage/partners/page";
import MentorTypes from "@/components/landingPage/mentorTypes/page";
import BookingMentor from "@/components/landingPage/bookingMentor/page";
import Reviews from "@/components/landingPage/reviews/page";
import Footer from "@/components/Footer";
import MenteeSideBar from "@/components/SideBar/MenteeSideBar";
import MentorSideBar from "@/components/SideBar/MentorSideBar";

export default function Home() {
  return (
    <main className="bg-[white] text-[black] h-screen">
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
