import Likes from './components/likes/Likes';
import Title from './components/title/Title';
import Comments from './components/comments/Comments';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Likes />
            <Title />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;
