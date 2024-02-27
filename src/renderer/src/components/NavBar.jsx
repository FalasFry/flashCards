import { NavLink } from "react-router-dom";

function NavBar(){
	
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<NavLink className="nav-link" to="/">
					Load Cards
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/study-page">
					Create Cards
				</NavLink>
			</li>
			<li className="nav-item">
				<NavLink className="nav-link" to="/study-page">
					StudyZone
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

export default NavBar;