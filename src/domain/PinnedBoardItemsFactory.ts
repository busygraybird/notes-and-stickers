import IdGenerator from './IdGenerator';
import Errors from '../constants/errors';
import PinnedBoardItem from './PinnedBoardItem';

class PinnedBoardItemsFactory {
  readonly #getNextId: () => number;

  constructor(startId?: number) {
    const boardItemIdIterator = IdGenerator(startId);

    this.#getNextId = () => {
      const id = boardItemIdIterator.next().value;

      if (typeof id !== 'number')
        throw new Error(Errors.cannot_create_board_item);

      return id;
    };
  }

  createBoardItem = <T extends PinnedBoardItem>(constructor: {
    new (id: number): T;
  }): T => {
    const item = new constructor(this.#getNextId());

    if (!(item instanceof PinnedBoardItem))
      throw new Error(Errors.cannot_create_board_item);

    return item;
  };
}

export default PinnedBoardItemsFactory;
