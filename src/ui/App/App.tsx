import { FC } from 'react';
import Note from '../Note';

import styles from './App.module.scss';

const App: FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.appNotes}>
        {notes &&
          notes.map((note) => (
            <Note color={note?.color} key={note.id}>
              {note.text}
            </Note>
          ))}
      </div>
    </div>
  );
};

// TODO: remove test data
const notes = [
  {
    id: 0,
    color: '#f1a9a9',
    text: 'note1',
  },
  {
    id: 1,
    color: '#e3e3e3',
    text: 'note2',
  },
  {
    id: 2,
    text: 'note3',
  },
];

export default App;
