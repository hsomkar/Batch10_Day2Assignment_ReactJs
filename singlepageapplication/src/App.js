import {page} from './VIEWS/home.js';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      {page}
    </BrowserRouter>
  );
}

export default App;
