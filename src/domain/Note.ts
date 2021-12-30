import { DEFAULT_NOTE_COLOR } from '../constants/note';
import PinnedBoardItem from './PinnedBoardItem';

class Note extends PinnedBoardItem {
  color: string;
  text: string;

  constructor(id: number, text?: string, color?: string, pinned?: boolean) {
    super(id, pinned);

    this.color = color || DEFAULT_NOTE_COLOR;
    this.text = text || '';
  }
}

export default Note;
