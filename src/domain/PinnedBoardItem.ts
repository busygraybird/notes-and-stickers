import { IBoardItem } from './types/IBoardItem';

abstract class PinnedBoardItem implements IBoardItem {
  id: number;
  pinned: boolean;

  protected constructor(id: number, pinned?: boolean) {
    this.id = id;
    this.pinned = pinned || false;
  }
}

export default PinnedBoardItem;
