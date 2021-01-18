import React from 'react';
import './App.css';
import Post from './components/post';
import Video from './components/video';

function App() {
	return (
		<div className="container" style={{ backgroundColor: 'magenta' }}>
			<div className="row">
				<div className="col">
					<Video />
					
					<Post />;
				</div>
			</div>
		</div>
	);
}

export default App;
