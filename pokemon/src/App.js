import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './layouts/Layout';
import PokemonWorld from './pages/PokemonWorld';
import PokemonDetail from './pages/PokemonDetail';
import PokemonSearchResult from './pages/PokemonSearchResult';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='main' element={<Main/>}/>
          <Route path='pokemonWorld'>
            <Route index element={<PokemonWorld/>}/>
            <Route path='pokemonDetail' element={<PokemonDetail/>}/>
            <Route patth='search' element={<PokemonSearchResult/>}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
