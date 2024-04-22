
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

	const onClick = () => {
		setStage(stages[stage.next])
	}
	
	return	(
		<div> 
			<button type="button" className="btn btn-dark" onClick={onClick} > A por el siguiente! </button>
			<div className="black-box">
			<div className={`light ${stage.red ? "red" : "inactive"}`} />
			<div className={`light ${stage.amber ? "amber" : "inactive"}`} />
			<div className={`light ${stage.green ? "green" : "inactive"}`} />
			</div> 
		</div>
	
	);

};


	
export default TrafficLights;
