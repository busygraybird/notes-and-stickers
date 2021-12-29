import { FC } from 'react';

interface ISticker {
  src?: string;
}

const Sticker: FC<ISticker> = ({ src }) => {
  // TODO: add alt to domain
  return <img src={src} alt="" />;
};

export default Sticker;
