import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import LockNav from "./components/lockNav/LockNav";
import "./style.scss";
import Course from "./components/Course/Course";

function App() {
	const darkMode = false;

	const Log = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<LockNav />
				<Login />
			</div>
		);
	};

	const Reg = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<LockNav />
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

	const Cours = () => {
		return (
			<div className={`theme-${darkMode ? "dark" : "light"}`}>
				<Navbar />
				<Course />
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
		{
			path: "/course",
			element: <Cours />
		}
	]);

	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
