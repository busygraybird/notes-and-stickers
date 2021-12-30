import Errors from '../constants/errors';
import IdGenerator from './IdGenerator';
import PinnedBoardItem from '../domain/PinnedBoardItem';

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

  createBoardItem = <T extends PinnedBoardItem>(
    constructor: {
      new (...props: Array<string | number | boolean>): T;
    },
    ...props: Array<string | number | boolean>
  ): T => {
    const item = new constructor(this.#getNextId(), ...props);

    if (!(item instanceof PinnedBoardItem))
      throw new Error(Errors.cannot_create_board_item);

    return item;
  };
}

const pinnedBoardItemsFactory = new PinnedBoardItemsFactory();

export default pinnedBoardItemsFactory;
