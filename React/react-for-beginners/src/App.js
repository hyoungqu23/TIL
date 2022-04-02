  // import logo from './logo.svg';   불필요한 코드 제거
  // import './App.css';
import Button from './Button';
import styles from './App.module.css';
import { useState } from 'react';

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => prev + 1);
  }
  return (
    <div>
      <h1 className={styles.title}>Welcome back!!!</h1>
      <Button text={"Continue"} onClick={onClick} />
      <h3>{counter}</h3>
    </div>
  );
}

export default App;