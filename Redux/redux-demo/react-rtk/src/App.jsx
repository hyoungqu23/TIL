import './App.css';

import { SnackView } from './features/snack/SnackView';
import { CoffeeView } from './features/coffee/CoffeeView';
import { UserView } from './features/users/UserView';

function App() {
  return (
    <div className="App">
      <SnackView />
      <CoffeeView />
      <UserView />
    </div>
  );
}

export default App;
