import { FC, HTMLAttributes, ReactElement } from 'react';

import styles from './Note.module.scss';

interface INote extends HTMLAttributes<ReactElement> {
  color?: string;
}

const Note: FC<INote> = ({ color = '#eecabb', children }) => {
  const noteStyle = {
    backgroundColor: color,
  };

  return (
    <div style={noteStyle} className={styles.note}>
      {children || <Placeholder />}
    </div>
  );
};

const Placeholder: FC = () => (
  <span className={styles.notePlaceholder}>I&apos;m note :)</span>
);

export default Note;
