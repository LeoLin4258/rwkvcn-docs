import React, {SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function Slider({title = 'badge 13', ...props}: IconProps) {
	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
	<title>{title}</title>
	<g fill="none">
		<path d="M21 16C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H6C5.44772 18 5 17.5523 5 17C5 16.4477 5.44772 16 6 16H21ZM18 6C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H18Z" fill="url(#1752500502803-117796_slider_existing_0_hyresn85p)" mask="url(#1752500502803-117796_slider_mask_a2vozkw8g)" data-glass="origin"/>
		<path clipPath="url(#1752500502803-117796_slider_clipPath_vbo3uq7ur)" d="M21 16C21.5523 16 22 16.4477 22 17C22 17.5523 21.5523 18 21 18H6C5.44772 18 5 17.5523 5 17C5 16.4477 5.44772 16 6 16H21ZM18 6C18.5523 6 19 6.44772 19 7C19 7.55228 18.5523 8 18 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H18Z" fill="url(#1752500502803-117796_slider_existing_0_hyresn85p)" filter="url(#1752500502803-117796_slider_filter_da5b1ukzi)" data-glass="clone"/>
		<path d="M6.5 12.5C8.98528 12.5 11 14.5147 11 17C11 19.4853 8.98528 21.5 6.5 21.5C4.01472 21.5 2 19.4853 2 17C2 14.5147 4.01472 12.5 6.5 12.5ZM17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5Z" fill="url(#1752500502803-117796_slider_existing_1_xqlxezvu1)" data-glass="blur"/>
		<path d="M21.25 7C21.25 4.92893 19.5711 3.25 17.5 3.25C15.4289 3.25 13.75 4.92893 13.75 7C13.75 9.07107 15.4289 10.75 17.5 10.75V11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5V10.75C19.5711 10.75 21.25 9.07107 21.25 7Z" fill="url(#1752500502803-117796_slider_existing_2_xr82swts4)"/>
		<path d="M10.25 17C10.25 14.9289 8.57107 13.25 6.5 13.25C4.42893 13.25 2.75 14.9289 2.75 17C2.75 19.0711 4.42893 20.75 6.5 20.75V21.5C4.01472 21.5 2 19.4853 2 17C2 14.5147 4.01472 12.5 6.5 12.5C8.98528 12.5 11 14.5147 11 17C11 19.4853 8.98528 21.5 6.5 21.5V20.75C8.57107 20.75 10.25 19.0711 10.25 17Z" fill="url(#1752500502803-117796_slider_existing_3_16rvcc37b)"/>
		<defs>
			<linearGradient id="1752500502803-117796_slider_existing_0_hyresn85p" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="-.5" y2="18">
				<stop stopColor="#ffedd5"/>
				<stop offset="1" stopColor="#f97316"/>
			</linearGradient>
			<linearGradient id="1752500502803-117796_slider_existing_1_xqlxezvu1" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="2.5" y2="21.5">
				<stop stopColor="#E3E3E5" stopOpacity=".6"/>
				<stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"/>
			</linearGradient>
			<linearGradient id="1752500502803-117796_slider_existing_2_xr82swts4" gradientUnits="userSpaceOnUse" x1="17.5" x2="17.5" y1="2.5" y2="7.712">
				<stop stopColor="#fff"/>
				<stop offset="1" stopColor="#fff" stopOpacity="0"/>
			</linearGradient>
			<linearGradient id="1752500502803-117796_slider_existing_3_16rvcc37b" gradientUnits="userSpaceOnUse" x1="6.5" x2="6.5" y1="12.5" y2="17.712">
				<stop stopColor="#fff"/>
				<stop offset="1" stopColor="#fff" stopOpacity="0"/>
			</linearGradient>
			<filter height="400%" id="1752500502803-117796_slider_filter_da5b1ukzi" width="400%" x="-100%" y="-100%">
				<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic"/>
			</filter>
			<clipPath id="1752500502803-117796_slider_clipPath_vbo3uq7ur">
				<path d="M6.5 12.5C8.98528 12.5 11 14.5147 11 17C11 19.4853 8.98528 21.5 6.5 21.5C4.01472 21.5 2 19.4853 2 17C2 14.5147 4.01472 12.5 6.5 12.5ZM17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5Z" fill="url(#1752500502803-117796_slider_existing_1_xqlxezvu1)"/>
			</clipPath>
			<mask id="1752500502803-117796_slider_mask_a2vozkw8g">
				<rect height="100%" width="100%" fill="#FFF"/>
				<path d="M6.5 12.5C8.98528 12.5 11 14.5147 11 17C11 19.4853 8.98528 21.5 6.5 21.5C4.01472 21.5 2 19.4853 2 17C2 14.5147 4.01472 12.5 6.5 12.5ZM17.5 2.5C19.9853 2.5 22 4.51472 22 7C22 9.48528 19.9853 11.5 17.5 11.5C15.0147 11.5 13 9.48528 13 7C13 4.51472 15.0147 2.5 17.5 2.5Z" fill="#000"/>
			</mask>
		</defs>
	</g>
</svg>
	);
};

export default Slider;