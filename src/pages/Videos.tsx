import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { search } from '../api/youtube';
import VideoCards from '../components/videoCards/VideoCards';
import './Videos.scss';
import { useEffect } from 'react';

export default function Videos() {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
    refetch,
  } = useQuery({
    queryKey: ['videos'],
    queryFn: () => search(keyword || ''),
    staleTime: 1000 * 60 * 1,
  });

  useEffect(() => {
    refetch();
  }, [keyword, refetch]);
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {videos && (
        <ul className="videos-container">
          {videos.map((video) => {
            return (
              <VideoCards video={video} key={video.id.videoId ?? video.etag} />
            );
          })}
        </ul>
      )}
    </>
  );
}
