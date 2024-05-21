import { useQuery } from '@tanstack/react-query';
import { channelImageURL } from '../../../api/youtube';
import styles from './ChannelInfo.module.scss';
interface ChannelInfoProps {
  id: string;
  title: string;
}

export default function ChannelInfo({ id, title }: ChannelInfoProps) {
  const { data: videos } = useQuery({
    queryKey: ['videos'],
    queryFn: () => channelImageURL(id),
    staleTime: 1000 * 60 * 1,
  });

  return (
    <div className={styles['channel-container']}>
      <h2>{title}</h2>
      {videos?.url && (
        <img
          src={videos.url}
          alt={`${title} Channel`}
          className={styles['channel-img']}
        />
      )}
    </div>
  );
}
