import "./lockNav.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbarr">
			<div className="left">
				<Link to="/" style={{ textDecoration: "none" }}>
					<span>Edu</span>
				</Link>
			</div>
			<div className="right">{true ? <WbSunnyOutlinedIcon /> : <DarkModeOutlinedIcon />}</div>
		</div>
	);
};

export default Navbar;
