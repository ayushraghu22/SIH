import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./style.scss";

function App() {
	const darkMode = false;

	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
			</div>
		);
	};

	const Log = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<Login />
			</div>
		);
	};

	const Reg = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<Register />
			</div>
		);
	};

	const Hom = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<Home />
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Hom />,
		},
		{
			path: "/login",
			element: <Log />,
		},
		{
			path: "/register",
			element: <Reg />,
		},
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
