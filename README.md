# Racing Bars Chart

Bar chart race component for React

## Demo Image

![Demo Image](https://raw.githubusercontent.com/yunuskorkmaz/racing-bars-chart/master/demo.gif)

## Parameters

| Name      | Value         | Default Value | Description                    |
| --------- | ------------- | ------------- | ------------------------------ |
| data      | array         | []            | Data for drawing the chart     |
| width     | number        | 800           | Width of component container   |
| barHeight | number        | 25            | Height of a bar                |
| style     | CSSProperties | {}            | Styles for component container |

## Data Model

| Name  | Value  |
| ----- | ------ |
| id    | number |
| name  | string |
| color | string |
| value | number |

## Usage

```js
import React from "react";
import RaceGraph from "racing-bars-chart";

function Mychart() {
	const [data, setData] = React.useState([
		{ id: 0, name: "Apple", color: "#5c5b58", value: 42 },
		{ id: 1, name: "Microsoft", color: "#2c78d4", value: 38 },
		{ id: 2, name: "Google", color: "#8758be", value: 76 },
		{ id: 3, name: "IBM", color: "#0b32bf", value: 30 },
		{ id: 4, name: "Huawei", color: "#c8303b", value: 58 },
		{ id: 5, name: "Samsung", color: "#ca517c", value: 16 },
		{ id: 6, name: "LG", color: "#5b8f4a", value: 78 },
	]);

	return (
		<RaceGraph
			data={data}
			width={500}
			barHeight={25}
			style={{ backgroundColor: "#ddd" }}
		/>
	);
}
```
