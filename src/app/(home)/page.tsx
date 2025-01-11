import MainSection from "@/components/user/main-section/MainSection";
import Graduates from "@/components/user/gratuates";
import VideoLessons from "@/components/user/Lesson";
import Training from "@/components/user/Training";

export default function Home() {
  return (
    <>
      <MainSection />
      <Graduates />
      <VideoLessons />
      <Training />
    </>
  );
}
