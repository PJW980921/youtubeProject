import styles from './VideoCards.module.scss';
import { formatAgo } from '../../util/date';
import { useNavigate } from 'react-router-dom';
import { Item } from '../../api/types/snippet';

interface VideoCardsProps {
  video: Item;
}
export default function VideoCards({ video }: VideoCardsProps) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleVideoDetail = () => {
    navigate(`/videos/watch/${video.id.videoId}`, {
      state: { video },
    });
  };
  return (
    <li className={styles['videos-item']} onClick={handleVideoDetail}>
      <img
        className={styles['videos-img']}
        src={thumbnails.medium.url}
        alt={title}
      />
      <p className={styles['channel-name']}>{channelTitle}</p>
      <p className={styles['channel-description']}>{title}</p>
      <p className={styles['channel-date']}>{formatAgo(publishedAt, 'ko')}</p>
    </li>
  );
}
