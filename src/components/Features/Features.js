import React from 'react';
import './Features.css';
import RellaxWrapper from 'react-rellax-wrapper'

const rocketImages = {
	'Falcon 1': 'falcon-1',
	'Falcon 9': 'falcon-9',
	'Falcon Heavy': 'falcon-heavy',
	'Starship': 'starship'
}

const Features = ({name,
	height,
	diameter,
	mass,
	payload_weights: payloadWeights,
	description}) => {
	
	
	return (

<section className ="features">
		<h2 className ="features-title">
			{name} <br/>Overview
		</h2>
		<div className ="overview">

			<table className="table">
				<caption class="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td class="table-column">HEIGHT</td>
						<td class="table-column">{height.meters} m /{height.feet} ft</td>
					</tr>
					<tr>
						<td class="table-column">DIAMETER</td>
						<td class="table-column">{diameter.meters} m /{diameter.feet} ft</td>
					</tr>
					<tr>
						<td class="table-column">MASS</td>
						<td class="table-column">{mass.kg} kg / {mass.lb} lb</td>
					</tr>

					{payloadWeights.map((item) => (
					<tr key ={item.id}>
						<td class="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
						<td class="table-column">{item.kg} kg /{item.lb} lb</td>
					</tr>
					))}

				</thead>
			</table>

			<RellaxWrapper speed = {14}>
			<img
					src={`img/${rocketImages[name]}.png`}
					alt="rocket"
					className="rocket"
			/>
			</RellaxWrapper>
			
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					{description}
				</p>
			</article>
		</div>
	</section>
)};

export default Features;