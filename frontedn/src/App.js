import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route
  } from "react-router-dom";
import Footer from './components/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
function App() {
  return (
    <div className="app">
		<Router>
			<Switch>
				<Route path="/about" component={About} exact />	
				<Route path="/" component={Home} exact />
				<Route component={NotFound} />
			</Switch>
			<Footer/>
		</Router>                      
    </div>
  );
}

export default App;
