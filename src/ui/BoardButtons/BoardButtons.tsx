import { FC, MouseEventHandler } from 'react';

import styles from './BoardButtons.module.scss';

type BoardButton = {
  key: string;
  title: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
};

interface IBoardButtons {
  buttons: Array<BoardButton>;
}

const BoardButtons: FC<IBoardButtons> = ({ buttons }) => {
  return (
    <div className={styles.buttons}>
      {buttons.map(({ key, title, handleClick }) => (
        <button key={key} className={styles.button} onClick={handleClick}>
          {title}
        </button>
      ))}
    </div>
  );
};

export default BoardButtons;
