import './VideoCards.scss';
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
    <li className="videos-item" onClick={handleVideoDetail}>
      <img className="videos-img" src={thumbnails.medium.url} alt={title} />
      <p className="channel-name">{channelTitle}</p>
      <p className="channel-description">{title}</p>
      <p className="channel-date">{formatAgo(publishedAt, 'ko')}</p>
    </li>
  );
}
