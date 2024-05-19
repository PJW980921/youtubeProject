import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { searchVideosSelector } from '../../Recoil/selector';
import { channelImageURL } from '../../../api/youtube';

interface ChannelInfoProps {
  id: string;
  title: string;
}

export default function ChannelInfo({ id, title }: ChannelInfoProps) {
  const videos = useRecoilValue(searchVideosSelector);
  const [channelImage, setChannelImage] = useState<string>('');

  useEffect(() => {
    const fetchChannelImage = async () => {
      try {
        const thumbnail = await channelImageURL(id);
        setChannelImage(thumbnail.url);
      } catch (error) {
        console.error(error);
      }
    };

    fetchChannelImage();
  }, [id]);

  return (
    <div className="channel-info-container">
      <h2>{title}</h2>
      {channelImage && (
        <img
          src={channelImage}
          alt={`${title} Channel`}
          className="channel-image"
        />
      )}
      <ul>
        {videos.map((video) => (
          <li key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
