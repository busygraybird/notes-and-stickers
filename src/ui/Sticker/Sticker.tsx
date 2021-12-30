import { FC } from 'react';

import styles from './Sticker.module.scss';

interface ISticker {
  src?: string;
}

const Sticker: FC<ISticker> = ({ src }) => {
  // TODO: add alt to domain
  return <img src={src} className={styles.sticker} alt="" />;
};

export default Sticker;
