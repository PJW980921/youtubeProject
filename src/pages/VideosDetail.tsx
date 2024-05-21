import { useLocation } from 'react-router-dom';
import RelatedVideos from '../components/videoCards/relatedVideos/RelatedVideos';
import { Item } from '../api/types/snippet';
import ChannelInfo from '../components/videoCards/videoInfo/ChannelInfo';
import styles from './VideosDetail.module.scss';

export default function VideosDetail() {
  const location = useLocation();
  const video: Item = location.state.video;

  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className={styles['detail-container']}>
      <article className="channel-box">
        <iframe
          id="player"
          width="100%"
          height="350"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={title}
          className={styles['iframe']}
        />
        <h2 className={styles['detail-title']}>{title}</h2>
        <div className={styles['channel-container']}>
          <ChannelInfo id={channelId} title={channelTitle} />
          <p className={styles['detail-description']}>{description}</p>
        </div>
      </article>
      <article>
        <section className={styles['related-box']}>
          <RelatedVideos id={video.id.videoId} />
        </section>
      </article>
    </section>
  );
}
