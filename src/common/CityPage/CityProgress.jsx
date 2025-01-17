import React from "react";
import Style from "@styles/CityProgress.module.css";
// import Style from "./NavBarStyle";

function CityProgress({ stepStatus }) {
	return (
		<div className={Style.nav_bar}>
			<div className={Style.nav_number}>{stepStatus.progress}/6</div>
		</div>
	);
}

export default CityProgress;
