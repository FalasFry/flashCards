import { NavLink } from "react-router-dom";

function Navbar(){
	
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<NavLink className="nav-link" to="/">
					Hem
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/study-page">
					StudyZone
				</NavLink>
			</li>
		</ul>
	);
	
}

export default Navbar;