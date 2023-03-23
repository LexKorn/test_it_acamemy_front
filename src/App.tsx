import Matrix from './components/Matrix/Matrix';
import Filter from './components/Filter/Filter';
import { IElem } from './types/types';
import { calcValue } from './utils/calcValue';
import { calcColor } from './utils/calcColor';

function App() {

  const elems: IElem[] = Array.from({length: 169}, (_, i) => {
    const val: number = calcValue(-100, 100);

    return {
      id: i,
      value: val,
      color: `rgb(${calcColor(val)})`
    }
  });

  return (
    <div>
      <Matrix elems={elems} />
      <Filter />
    </div>
  );
}

export default App;
