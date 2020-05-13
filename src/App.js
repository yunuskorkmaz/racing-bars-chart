import React, { useEffect, useState } from "react";
import RaceGraph from "./components/RaceGraph";
import dataJson from "./data.json";
function App() {
	const [data, setData] = useState([]);
	const [timer, setTimer] = useState(null);
	const [updateRate, setUpdateRate] = useState(300);
	useEffect(() => {
		setData(dataJson);
	}, []);

	const randomValue = (start, end) => {
		return Math.floor(Math.random() * (end - start + 1)) + start;
	};

	const updateData = (reset = false) => {
		var items = data.map((item) => {
			return {
				...item,
				value: reset
					? randomValue(20, 100)
					: (item.value += randomValue(5, 20)),
			};
		});
		setData(items);
	};

	const play = () => {
		setTimer(setInterval(updateData, updateRate));
	};

	const pause = () => {
		clearInterval(timer);
	};

	const reset = () => {
		updateData(true);
	};

	const handleUpdateRate = (e) => {
		setUpdateRate(e.target.value);
	};

	return (
		<div style={{ margin: "20px" }}>
			<div>
				<div>
					<button onClick={play}>Play</button>
					<button onClick={pause}>Pause</button>
					<button onClick={reset}>Reset</button>
					Update Rate
					<input
						style={{ width: "60px" }}
						value={updateRate}
						type="number"
						required
						onChange={handleUpdateRate}
					/>
					ms
					<button
						onClick={() => {
							pause();
							play();
						}}
					>
						Set
					</button>
				</div>
				<RaceGraph
					data={data}
					width={800}
					barHeight={25}
					gap={5}
					style={{ backgroundColor: "#eee", padding: "15px 0" }}
				/>
			</div>
		</div>
	);
}

export default App;
