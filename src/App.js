import './App.css';
import Post from './components/post';
import Video from './components/video';

function App() {
	return (
		<div className="container" style={{ backgroundColor: 'magenta' }}>
			<h2 style={{ color: 'cyan' }}>Blog Posts</h2>
			<hr />
			<div className="row">
				<div className="col">
					<Video />
					
				</div>
			</div>
		</div>
	);
}

export default App;
