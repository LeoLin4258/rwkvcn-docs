import React, {SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function Button({fill = 'currentColor', secondaryfill, strokewidth = 1, width = '1em', height = '1em', title = 'badge 13', ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height={height} style={{}} width={width} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M6 13H18C18.9293 13 19.394 13 19.7804 12.9231C21.3671 12.6075 22.6075 11.3671 22.9231 9.78036C23 9.39397 23 8.92931 23 8C23 7.07069 23 6.60603 22.9231 6.21964C22.6075 4.63288 21.3671 3.39249 19.7804 3.07686C19.394 3 18.9293 3 18 3H6C5.07069 3 4.60603 3 4.21964 3.07686C2.63288 3.39249 1.39249 4.63288 1.07686 6.21964C1 6.60603 1 7.07069 1 8C1 8.92931 1 9.39397 1.07686 9.78036C1.39249 11.3671 2.63288 12.6075 4.21964 12.9231C4.60603 13 5.07069 13 6 13Z" fill="url(#1752500502770-6340105_button_existing_0_l4y1wc8sk)" mask="url(#1752500502770-6340105_button_mask_iuivb648b)" data-glass="origin"/>
		<path clipPath="url(#1752500502770-6340105_button_clipPath_w631kiu3t)" d="M6 13H18C18.9293 13 19.394 13 19.7804 12.9231C21.3671 12.6075 22.6075 11.3671 22.9231 9.78036C23 9.39397 23 8.92931 23 8C23 7.07069 23 6.60603 22.9231 6.21964C22.6075 4.63288 21.3671 3.39249 19.7804 3.07686C19.394 3 18.9293 3 18 3H6C5.07069 3 4.60603 3 4.21964 3.07686C2.63288 3.39249 1.39249 4.63288 1.07686 6.21964C1 6.60603 1 7.07069 1 8C1 8.92931 1 9.39397 1.07686 9.78036C1.39249 11.3671 2.63288 12.6075 4.21964 12.9231C4.60603 13 5.07069 13 6 13Z" fill="url(#1752500502770-6340105_button_existing_0_l4y1wc8sk)" filter="url(#1752500502770-6340105_button_filter_2xgndge1n)" data-glass="clone"/>
		<path d="M8.24247 10.4549C7.78665 9.08694 9.08838 7.78521 10.4563 8.24103L21.7466 12.0044C23.319 12.5289 23.3487 14.7428 21.7907 15.3093L17.0385 17.037L15.3108 21.7893C14.7442 23.3473 12.5304 23.3176 12.0059 21.7451L8.24247 10.4549Z" fill="url(#1752500502770-6340105_button_existing_1_4y8h7ts1h)" data-glass="blur"/>
		<path d="M8.24219 10.4552C7.78643 9.0873 9.08818 7.78564 10.4561 8.2413L21.7471 12.005C23.1085 12.4596 23.312 14.1794 22.3301 15.0001H20.4463L21.5342 14.6046C22.4244 14.2807 22.4071 13.0166 21.5088 12.7169L10.2197 8.95224C9.43808 8.69179 8.69372 9.43622 8.9541 10.2179L10.5479 15.0001H9.75684L8.24219 10.4552Z" fill="url(#1752500502770-6340105_button_existing_2_4y48h6agr)"/>
		<defs>
			<linearGradient id="1752500502770-6340105_button_existing_0_l4y1wc8sk" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="3" y2="13">
				<stop stopColor="#e0e7ff"/>
				<stop offset="1" stopColor="#4f46e5"/>
			</linearGradient>
			<linearGradient id="1752500502770-6340105_button_existing_1_4y8h7ts1h" gradientUnits="userSpaceOnUse" x1="8.665" x2="18.672" y1="8.664" y2="18.67">
				<stop stopColor="#E3E3E5" stopOpacity=".6"/>
				<stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"/>
			</linearGradient>
			<linearGradient id="1752500502770-6340105_button_existing_2_4y48h6agr" gradientUnits="userSpaceOnUse" x1="15.546" x2="15.546" y1="8.149" y2="15">
				<stop stopColor="#fff" stopOpacity="1"/>
				<stop offset="1" stopColor="#fff" stopOpacity="0"/>
			</linearGradient>
			<filter height="400%" id="1752500502770-6340105_button_filter_2xgndge1n" width="400%" x="-100%" y="-100%">
				<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic"/>
			</filter>
			<clipPath id="1752500502770-6340105_button_clipPath_w631kiu3t">
				<path d="M8.24247 10.4549C7.78665 9.08694 9.08838 7.78521 10.4563 8.24103L21.7466 12.0044C23.319 12.5289 23.3487 14.7428 21.7907 15.3093L17.0385 17.037L15.3108 21.7893C14.7442 23.3473 12.5304 23.3176 12.0059 21.7451L8.24247 10.4549Z" fill="url(#1752500502770-6340105_button_existing_1_4y8h7ts1h)"/>
			</clipPath>
			<mask id="1752500502770-6340105_button_mask_iuivb648b">
				<rect height="100%" width="100%" fill="#FFF"/>
				<path d="M8.24247 10.4549C7.78665 9.08694 9.08838 7.78521 10.4563 8.24103L21.7466 12.0044C23.319 12.5289 23.3487 14.7428 21.7907 15.3093L17.0385 17.037L15.3108 21.7893C14.7442 23.3473 12.5304 23.3176 12.0059 21.7451L8.24247 10.4549Z" fill="#000"/>
			</mask>
		</defs>
	</g>
</svg>
	);
};

export default Button;