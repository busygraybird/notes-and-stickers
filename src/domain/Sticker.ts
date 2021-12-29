import { DEFAULT_STICKER_SOURCE } from '../constants/sticker';
import PinnedBoardItem from './PinnedBoardItem';

class Sticker extends PinnedBoardItem {
  src: string;

  constructor(id: number, src?: string, pinned?: boolean) {
    super(id, pinned);

    this.src = src || DEFAULT_STICKER_SOURCE;
  }
}

export default Sticker;
