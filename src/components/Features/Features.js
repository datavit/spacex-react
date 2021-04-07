import React from 'react';
import './Features.css';
import RellaxWrapper from 'react-rellax-wrapper'

const Features = () => (

<section className ="features">
		<h2 className ="features-title">
			Falcon 1 <br/>Overview
		</h2>
		<div className ="overview">

			<table className="table">
				<caption class="table-title">
					Size
				</caption>
				<thead>
					<tr>
						<td class="table-column">HEIGHT</td>
						<td class="table-column">22.25 m / 73 ft</td>
					</tr>
					<tr>
						<td class="table-column">DIAMETER</td>
						<td class="table-column">1.68 m / 5.5 ft</td>
					</tr>
					<tr>
						<td class="table-column">MASS</td>
						<td class="table-column">30,146 kg / 66,460 lb</td>
					</tr>
					<tr>
						<td class="table-column">PAYLOAD TO LEO</td>
						<td class="table-column">450 kg / 992 lb</td>
					</tr>
				</thead>
			</table>

			<RellaxWrapper speed = {14}>
			<img
					src="img/falcon-9.png"
					alt="rocket"
					className="rocket"
			/>
			</RellaxWrapper>
			
			<article>
				<h3 className="features-subtitle">DESCRIPTION</h3>
				<p className="features-text">
					The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.
				</p>
			</article>
		</div>
	</section>
);

export default Features;