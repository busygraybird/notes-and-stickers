import {
  ChangeEventHandler,
  FC,
  FocusEventHandler,
  HTMLAttributes,
  ReactElement,
  useState,
} from 'react';

import styles from './Note.module.scss';

interface INote extends HTMLAttributes<ReactElement> {
  color?: string;
  updateNote?: (text: string) => void;
}

// TODO: fix note text updating
const Note: FC<INote> = ({ color = '#eecabb', children, updateNote }) => {
  const [text, setText] = useState(children.toString());
  const [isEditMode, setIsEditMode] = useState(false);

  const noteStyle = {
    backgroundColor: color,
  };

  const handleClick = () => setIsEditMode(true);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) =>
    setText(event.target.value);

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    setIsEditMode(false);
    updateNote(event.target.value);
  };

  return (
    <div style={noteStyle} className={styles.note} onClick={handleClick}>
      {!isEditMode && (children || <Placeholder />)}
      {isEditMode && (
        <textarea
          value={text}
          rows={3}
          autoFocus
          className={styles.noteTextarea}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}
    </div>
  );
};

const Placeholder: FC = () => (
  <span className={styles.notePlaceholder}>I&apos;m note :)</span>
);

export default Note;
