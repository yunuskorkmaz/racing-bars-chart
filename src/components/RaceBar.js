import React from "react";

const RaceBar = ({ item, maxValue, rowIndex, ...dimensions }) => {
	return (
		<li
			style={{
				top: `${5 + rowIndex * (dimensions.barHeight + 5)}px`,
			}}
		>
			<div
				className="race-bar"
				style={{
					backgroundColor: item.color,
					width: (item.value / maxValue) * (dimensions.maxWidth - 100),
				}}
			>
				<span>{item.name}</span>
			</div>
			<span>{item.value}</span>
		</li>
	);
};

export default RaceBar;
