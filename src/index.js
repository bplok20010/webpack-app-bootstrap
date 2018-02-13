
//import "promise-polyfill";
import "core-js/es6/set";
import "core-js/es6/map";
import "core-js/es6/promise";
import React from "react";
import ReactDOM from "react-dom";

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Layout from './Layout';

function App(){
	return (
		<Layout>
			<Header>标题</Header>
			<Main>Hello Test</Main>
			<Footer>尾部</Footer>
		</Layout>
	);	
}

ReactDOM.render(<App />, document.body)