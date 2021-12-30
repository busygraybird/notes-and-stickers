import Note from '../domain/Note';
import Sticker from '../domain/Sticker';
import pinnedBoardItemsFactory from '../infractructure/pinnedBoardItemsFactory';
import { useState } from 'react';
import PinnedBoardItem from '../domain/PinnedBoardItem';

const usePinnedBoardItems = () => {
  const factory = pinnedBoardItemsFactory;

  const [pinnedBoardItems, setPinnedBoardItems] = useState<
    Array<PinnedBoardItem>
  >([]);

  const addNote = () =>
    setPinnedBoardItems((items) => [...items, factory.createBoardItem(Note)]);

  const addSticker = () =>
    setPinnedBoardItems((items) => [
      ...items,
      factory.createBoardItem(Sticker),
    ]);

  const updateNote = (id: number, text: string) => {
    const newItem = factory.createBoardItem(Note, text);
    const index = pinnedBoardItems.findIndex((item) => item.id === id);
    const items = [...pinnedBoardItems];

    items[index] = newItem;

    setPinnedBoardItems(items);
  };

  return {
    items: pinnedBoardItems,
    addNote,
    addSticker,
    updateNote,
  };
};

export default usePinnedBoardItems;
