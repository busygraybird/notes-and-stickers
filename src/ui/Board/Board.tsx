import Note from '../Note';
import styles from '../App/App.module.scss';
import { default as NoteType } from '../../domain/Note';
import { default as StickerType } from '../../domain/Sticker';
import usePinnedBoardItems from '../../controllers/usePinnedBoardItems';
import Sticker from '../Sticker';
import BoardButtons from '../BoardButtons';
import { ReactElement } from 'react';

const Board = () => {
  const { items, addNote, addSticker, updateNote } = usePinnedBoardItems();

  const getItemsComponents = (): ReactElement[] => {
    if (!items?.length) return null;

    return items.map((item) => {
      if (item instanceof StickerType) {
        return <Sticker key={item.id} src={item?.src} />;
      }

      if (item instanceof NoteType) {
        return (
          <Note
            key={item.id}
            color={item?.color}
            updateNote={(text) => updateNote(item.id, text)}
          >
            {item?.text}
          </Note>
        );
      }
    });
  };

  const buttons = [
    {
      key: 'note',
      title: 'Add note',
      handleClick: addNote,
    },
    {
      key: 'sticker',
      title: 'Add sticker',
      handleClick: addSticker,
    },
  ];

  const boardItems = getItemsComponents();

  return (
    <div className={styles.appNotes}>
      <BoardButtons buttons={buttons} />
      {boardItems}
    </div>
  );
};

export default Board;
