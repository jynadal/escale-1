import React from 'react';
import { render } from 'react-dom';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import 'normalize.css/normalize.css';
import './Testimonial2.css';
import '../../App.css';

const content = [
	{
		title: ' " ',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
		button: 'Read More',
		image: './Images/common/test-bg2.png',
		user: 'Corinne G',
		userProfile: null
	},
	{
		title: '\"',
		description:
		'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
		button: 'Discover',
		image: './Images/common/test-bg2.png',
		user: 'Elisabeth D.',
		userProfile: null
	},
	{
		title: '\"',
		description:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus.',
		button: 'Buy now',
		image: './Images/common/test-bg2.png',
		user: 'Béatrice Y.',
		userProfile: null
	}
];

export default function Testimonial(){
    return (
	<div className="testimonial">
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h5><span className="title">{item.title}</span>{item.description}</h5>
						<span>
							<strong className="user">{item.user}</strong>
						</span>
					</div>
					{/* <section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section> */}
				</div>
			))}
		</Slider>
	</div>
);
}
