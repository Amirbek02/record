import MainSection from '@/components/user/main-section/MainSection';
import Graduates from '@/components/user/gratuates';
import VideoLessons from '@/components/user/Lesson';
import Training from '@/components/user/Training';
import Footer from '@/components/user/footer/Footer';
import Feedback from '@/components/user/Feedback';

export default function Home() {
  return (
    <>
      <MainSection />
      <Graduates />
      <VideoLessons />
      <Training />
      <Feedback />
      <Footer />
    </>
  );
}
