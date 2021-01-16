
import './App.css';
import Post from './components/post';
import Video from './components/video';

function App() {
  return (
    <div className="container">
      <h2>BLog Posts</h2>
      <hr />
      <div className="row">
        <div className="col-8"><Post /></div>
        <div className="col-4"><Video /></div>
      </div>
      
    </div>
  );
}

export default App;
