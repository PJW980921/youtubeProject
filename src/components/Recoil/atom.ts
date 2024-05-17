import { atom } from 'recoil';
import { Item } from '../../api/types/snippet';

export const searchKeywordState = atom<string>({
  key: 'searchKeywordState',
  default: '',
});

export const videosState = atom<Item[]>({
  key: 'videosState',
  default: [],
});
