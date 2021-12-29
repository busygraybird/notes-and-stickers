import styles from '../App/App.module.scss';
import Note from '../Note';
import { default as NoteType } from '../../domain/Note';
import { default as StickerType } from '../../domain/Sticker';
import usePinnedBoardItems from '../../controllers/usePinnedBoardItems';
import Sticker from '../Sticker';

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
          <Note key={item.id} color={item?.color}>
            {item?.text}
          </Note>
        );
      }
    });
  };

  return (
    <div className={styles.appNotes}>
      {getItemsComponents()}
      <button onClick={addNote}>Add note</button>
      <button onClick={addSticker}>Add sticker</button>
    </div>
  );
};

export default Board;
