import axios from 'axios';
import { Root, Item, Default } from './types/snippet';

const apiKey = import.meta.env.VITE_APP_YOUTUBE_API_KEY;

const apiClient = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: { key: apiKey },
});

// 가장 인기 있는 비디오 가져오기
export const mostPopular = async (): Promise<Item[]> => {
  try {
    const response = await apiClient.get<Root>('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        maxResults: 25,
      },
    });
    console.log(response.data);
    return response.data.items;
  } catch (error) {
    console.error('가장 인기 있는 비디오를 가져오는 중 오류 발생:', error);
    throw error;
  }
};

// 키워드로 비디오 검색
export const search = async (keyword: string): Promise<Item[]> => {
  try {
    const response = await apiClient.get<Root>('search', {
      params: {
        part: 'snippet',
        q: keyword,
        type: 'video',
        maxResults: 25,
      },
    });

    const videoItems: Item[] = response.data.items.map((item) => ({
      ...item,
      id: {
        kind: item.id.kind,
        videoId: item.id.videoId ?? '',
      },
    }));
    return videoItems;
  } catch (error) {
    console.error(`키워드 "${keyword}"로 검색하는 중 오류 발생:`, error);
    throw error;
  }
};

// 채널 이미지 URL 가져오기
export const channelImageURL = async (id: string): Promise<Default> => {
  try {
    const response = await apiClient.get<Root>('channels', {
      params: {
        part: 'snippet',
        maxResults: 25,
        id,
      },
    });
    console.log(response.data);
    return response.data.items[0].snippet.thumbnails.default;
  } catch (error) {
    console.error('채널 이미지 URL을 가져오는 중 오류 발생:', error);
    throw error;
  }
};

// 관련 비디오 가져오기
export const relatedVideos = async (id: string): Promise<Item[]> => {
  try {
    const response = await apiClient.get<Root>('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        relatedToVideoId: id,
      },
    });
    console.log(response.data);
    return response.data.items;
  } catch (error) {
    console.error(
      `비디오 ID "${id}"에 대한 관련 비디오를 가져오는 중 오류 발생:`,
      error
    );
    throw error;
  }
};
