import Header from '../src/components/header/Header.js'
import SideBar from '../src/components/sideBar/SideBar.js'
import Home from '../src/pages/home/Home.js'

function App() {
	return (
		<div className="App">
			
			<div className='AppLeft' >
				<Header />
				<SideBar />
			</div>
			<div className='AppRight' >
				<Home />
			</div>
			
		</div>
	);
}

export default App;
