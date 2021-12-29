import { FC } from 'react';
import styles from './App.module.scss';
import { RecoilRoot } from 'recoil';
import Board from '../Board';

const App: FC = () => {
  return (
    <RecoilRoot>
      <div className={styles.app}>
        <Board />
      </div>
    </RecoilRoot>
  );
};

export default App;
