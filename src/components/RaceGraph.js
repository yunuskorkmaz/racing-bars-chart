import React, { useEffect, useState } from "react";
import RaceBar from "./RaceBar";

import "../styles.css";

const RaceGraph = ({ padding, barHeight, width, data, style }) => {
	const [items, setItems] = useState([]);
	const [max, setMax] = useState(0);
	const [containerWidth, setContainerWidth] = useState(0);
	useEffect(() => {
		setItems(data.sort((a, b) => b.value - a.value));
		setContainerWidth(width);
	}, []);

	useEffect(() => {
		setItems(data);
		setMax(Math.max(...data.map((item) => item.value)));
		setContainerWidth(width);
	}, [data, width]);

	return (
		<div
			className="race-graph-container"
			style={{ ...style, height: "auto", width: containerWidth }}
		>
			<ul
				style={{
					width: containerWidth,
					height: items.length * (barHeight + 5),
				}}
			>
				{items.map((item, index) => {
					var rowIndex = items
						.slice()
						.sort((a, b) => b.value - a.value)
						.findIndex((a) => a.id === item.id);
					return (
						<RaceBar
							key={index}
							item={item}
							rowIndex={rowIndex}
							maxValue={max}
							maxWidth={width}
							barHeight={barHeight}
						/>
					);
				})}
			</ul>
		</div>
	);
};
RaceGraph.defaultProps = {
	width: 800,
	barHeight: 25,
};
export default RaceGraph;
