import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/videoCards/relatedVideos/RelatedVideos';
import { Item } from '../api/types/snippet';
import ChannelInfo from '../components/videoCards/videoInfo/ChannelInfo';

export default function VideosDetail() {
  const location = useLocation();
  const video: Item = location.state.video;

  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section>
      <article>
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="350"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} title={channelTitle} />
        </div>
        <pre>{description}</pre>
      </article>
      <article>
        <section>
          <RelatedVideos id={video.id.videoId} />
        </section>
      </article>
    </section>
  );
}
