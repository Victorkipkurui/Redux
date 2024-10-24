import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Redux Counter App</h2>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;