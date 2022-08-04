import React from "react";
import Navbar from "components/Navbar/Navbar.tsx";
import Footer from "components/Footer/Footer";
import { renderFooterHandler } from "utils/utils";
import Home from "pages/Home/Home";
import './index.scss';

const App = () => {

	return (
		<>
			<Navbar />
			<Home />
			<Footer>{renderFooterHandler('footer-default')}</Footer>
		</>
	);
}

export default App;
