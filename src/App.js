
import './App.css';
import Convert from './components/convert';
import NewsFeed from './components/newsFeed';

const App = () => {
  return (
    <div className="App">
      <NewsFeed/>
      <Convert/>
    </div>
  );
}

export default App;
