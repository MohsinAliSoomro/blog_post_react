import './App.css';
import Post from './components/post';
import Video from './components/video';

function App() {
	return (
		<div className="container" style={{backgroundColor:'magenta'}}>
			<h2>Blog Posts</h2>
			<hr />
			<div className="row">
        <div className="col">
        <Video />
					<Post />
				</div>
				
			</div>
		</div>
	);
}

export default App;
