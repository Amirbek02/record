'use client';
import React from 'react';
import VideoLessons from '@/components/user/videoLessons/videoLessonList/VideoLessons';
import useVideosStore from '@/store/videoStore/VideosStore';
import VideoLesson from '@/components/user/videoLessons/videoLessonList/VideoLesson';

const Page = ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { fetch, videoCategories, video, error, isLoading } = useVideosStore();
  const [slug, setSlug] = React.useState<string[] | null>(null);
  React.useEffect(() => {
    // Use React.use() to handle the promise
    const getSlug = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug); // Set the slug from the resolved params
    };

    getSlug(); // Call the async function
  }, [params]);

  React.useEffect(() => {
    if (slug && slug.length > 0) {
      // Fetch data based on the resolved slug
      fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/video/?video_category=${Number(slug[0])}`,
        'subCategoryVideos',
      );
      if (slug.length > 1) {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/video/${Number(slug[1])}`, 'video');
      }
    }
  }, [slug, fetch]);
  const routeComponents: Record<string, React.ReactNode> = {
    '1': <VideoLessons videosData={videoCategories} />,
    '2': <VideoLesson video={video} />, // Assuming video is handled inside this component
    // Add more routes/components as needed
  };

  if (isLoading) {
    return <div>Жуктоо...</div>;
  }

  // Handle error state
  if (error) {
    return <div className="text-red-500">Ката: {error}</div>;
  }

  return (
    <div>
      {slug ? (
        routeComponents[slug.length] || <div>404 - Page Not Found</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Page;
