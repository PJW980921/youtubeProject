import { selector } from 'recoil';
import { search } from '../../api/youtube';
import { searchKeywordState, videosState } from './atom';

export const searchVideosSelector = selector({
  key: 'searchVideosSelector',
  get: async ({ get }) => {
    const keyword = get(searchKeywordState);
    if (!keyword) return [];

    try {
      const videos = await search(keyword);
      return videos;
    } catch (error) {
      console.error(`Error fetching videos for keyword "${keyword}":`, error);
      return [];
    }
  },
  set: ({ set }, newValue) => {
    set(videosState, newValue);
  },
});
