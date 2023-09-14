import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
	const [inputs, setInputs] = useState({
		email: "",
		password: "",
	});

	const [err, setErr] = useState(null);
	const navigate = useNavigate();

	return (
		<div className="login">
			<div className="card">
				<div className="right">
					<h1>Login</h1>
					<form>
						<input type="text" placeholder="Email" name="email" />
						<input type="password" placeholder="Password" name="password" />
						{err && <span className="error">{err}</span>}
						<button>Login</button>
						<span className="registercheck">
							Not Resgistered?
							<Link to="/register" className="link">
								Register
							</Link>
						</span>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
