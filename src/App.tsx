import './App.css';
import { useLocalStorage } from './useLocalStorage';

function App() {
  const [value, { setValue }] = useLocalStorage('some-key');
  return (
    <>
      <p>Значение из LocalStorage: {value}</p>
      <div>
        <button onClick={() => setValue('new storage value')}>
          Задать значение
        </button>
        {/* <button onClick={() => removeItem()}>Удалить значение</button> */}
      </div>
    </>
  );
}

export default App;
