import { atom } from 'recoil';
import PinnedBoardItem from '../domain/PinnedBoardItem';

export const pinnedBoardItemsState = atom<Array<PinnedBoardItem>>({
  key: 'pinnedBoardItems',
  default: [],
});
