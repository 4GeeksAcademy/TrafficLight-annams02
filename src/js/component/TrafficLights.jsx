
import React , {useState, useEffect}from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const TrafficLights = () => {
	const stages = {
		stop: { red: true, amber: false, green: false, next: "readyToGo" },
		readyToGo: { red: true, amber: true, green: false, next: "go" },
		go: { red: false, amber: false, green: true, next: "readyToStop" },
		readyToStop: { red: false, amber: true, green: false, next: "stop" }
	};

	const [stage, setStage] = useState(stages.stop);

	useEffect(() => console.log(stage), [stage]);

	return	<Display {...stage} onClick={() => setStage(stages[stage.next])} />;
	};

	const Display = ({ red, amber, green, onClick }) => (
	<div className="black-box" onClick={onClick}>
		<div className={`light ${red ? "red" : "inactive"}`} />
		<div className={`light ${amber ? "amber" : "inactive"}`} />
		<div className={`light ${green ? "green" : "inactive"}`} />
	</div>
	);

	
export default TrafficLights;
