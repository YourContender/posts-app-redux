import { useSelector } from 'react-redux';
import { appReducer } from './redux/appReducer';
import Likes from './components/likes/Likes';
import Title from './components/title/Title';
import Comments from './components/comments/Comments';
import Spinner from './Spinner';
import './App.css';

function App() {
  const error = useSelector(state => {
    const {appReducer} = state;
    return appReducer.error
  }
);

  console.log('ERROR >>>>', error);
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
          <Spinner/>
        </div>
      </div>
    </div>
  );
}

export default App;
