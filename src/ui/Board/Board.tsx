import styles from '../App/App.module.scss';
import Note from '../Note';
import { default as NoteType } from '../../domain/Note';
import { default as StickerType } from '../../domain/Sticker';
import usePinnedBoardItems from '../../controllers/usePinnedBoardItems';
import Sticker from '../Sticker';
import BoardButtons from '../BoardButtons';

const Board = () => {
  const { items, addNote, addSticker } = usePinnedBoardItems();

  const getItemsComponents = () => {
    if (!items?.length) return null;

    return items.map((item) => {
      if (item instanceof StickerType) {
        return <Sticker key={item.id} src={item?.src} />;
      }

      if (item instanceof NoteType) {
        return (
          <Note key={item.id} color={item?.color} updateNote={item.update}>
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

  return (
    <div className={styles.appNotes}>
      <BoardButtons buttons={buttons} />
      {getItemsComponents()}
    </div>
  );
};

export default Board;
