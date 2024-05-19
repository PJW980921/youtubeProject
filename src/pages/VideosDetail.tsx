import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/videoCards/relatedVideos/RelatedVideos';
import { Item } from '../api/types/snippet';
import ChannelInfo from '../components/videoCards/videoInfo/ChannelInfo';
import './Videos.scss';

export default function VideosDetail() {
  const location = useLocation();
  const video: Item = location.state.video;

  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="detail-container">
      <article className="channel-box">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="350"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={title}
        />
        <div>
          <h2>{title}</h2>
          <ChannelInfo id={channelId} title={channelTitle} />
        </div>
        <pre className="description-box">{description}</pre>
      </article>
      <article>
        <section className="related-box">
          <RelatedVideos id={video.id.videoId} />
        </section>
      </article>
    </section>
  );
}
