import './App.css';
import { Route } from 'wouter';
import Gallery from './components/Pages/Gallery';
import Home from './components/Pages/Home';
function App() {
  return (
    <>
      <Route path="/home"><Home /></Route>
      <Route path="/gallery"><Gallery /></Route>
    </>
  );
}

export default App;
