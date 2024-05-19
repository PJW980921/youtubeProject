import { relatedVideos } from '../../../api/youtube';
import { useQuery } from '@tanstack/react-query';
import VideoCards from '../VideoCards';

type IdType = {
  id: string | undefined;
};
export default function RelatedVideos({ id }: IdType) {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ['related', id],
    queryFn: () => relatedVideos(id || ''),
    staleTime: 1000 * 60 * 5,
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {videos && (
        <ul className="videos-container">
          {videos.map((video) => {
            return <VideoCards video={video} key={video.id.videoId} />;
          })}
        </ul>
      )}
    </>
  );
}
