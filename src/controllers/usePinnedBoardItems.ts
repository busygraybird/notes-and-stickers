import Note from '../domain/Note';
import Sticker from '../domain/Sticker';
import pinnedBoardItemsFactory from '../model/pinnedBoardItemsFactory';
import { useRecoilState } from 'recoil';
import { pinnedBoardItemsState } from '../model/pinnedBoardItems';

const usePinnedBoardItems = () => {
  const factory = pinnedBoardItemsFactory;

  const [pinnedBoardItems, setPinnedBoardItems] = useRecoilState(
    pinnedBoardItemsState,
  );

  const addNote = () =>
    setPinnedBoardItems((items) => [...items, factory.createBoardItem(Note)]);

  const addSticker = () =>
    setPinnedBoardItems((items) => [
      ...items,
      factory.createBoardItem(Sticker),
    ]);

  return { items: pinnedBoardItems, addNote, addSticker };
};

export default usePinnedBoardItems;
