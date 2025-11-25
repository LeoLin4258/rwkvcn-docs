import React, {SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function Hammer({fill = 'currentColor', secondaryfill, strokewidth = 1, width = '1em', height = '1em', title = 'badge 13', ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height={height} style={{}} width={width} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M14.5489 8H9.4513L9.08052 19.9253C9.0382 21.0584 9.94529 22 11.0791 22H12.921C14.0549 22 14.962 21.0584 14.9197 19.9254L14.5489 8Z" fill="url(#1752500502789-480700_hammer_existing_0_qgphq5w1k)" mask="url(#1752500502789-480700_hammer_mask_ln5zbtsqv)" data-glass="origin"/>
		<path clipPath="url(#1752500502789-480700_hammer_clipPath_4eubffvza)" d="M14.5489 8H9.4513L9.08052 19.9253C9.0382 21.0584 9.94529 22 11.0791 22H12.921C14.0549 22 14.962 21.0584 14.9197 19.9254L14.5489 8Z" fill="url(#1752500502789-480700_hammer_existing_0_qgphq5w1k)" filter="url(#1752500502789-480700_hammer_filter_h37whqno5)" data-glass="clone"/>
		<path d="M3 9V5C3 3.34315 4.34315 2 6 2H14.7393C15.4739 2 16.1833 2.26975 16.7324 2.75781L19.9932 5.65625C20.6335 6.22554 21 7.04162 21 7.89844V9.5C21 10.8807 19.8807 12 18.5 12H6C4.34315 12 3 10.6569 3 9Z" fill="url(#1752500502789-480700_hammer_existing_1_6e34eq727)" data-glass="blur"/>
		<path d="M3 9V5C3 3.34315 4.34315 2 6 2H14.7393C15.4739 2 16.1833 2.26975 16.7324 2.75781L19.9932 5.65625C20.6335 6.22554 21 7.04162 21 7.89844V9.5C21 10.8807 19.8807 12 18.5 12V11.25C19.4665 11.25 20.25 10.4665 20.25 9.5V7.89844C20.25 7.33628 20.0393 6.79772 19.665 6.38574L19.4951 6.2168L16.2344 3.31836C15.8225 2.95228 15.2902 2.75 14.7393 2.75H6C4.75736 2.75 3.75 3.75736 3.75 5V9C3.75 10.2426 4.75736 11.25 6 11.25V12C4.34315 12 3 10.6569 3 9ZM18.5 11.25V12H6V11.25H18.5Z" fill="url(#1752500502789-480700_hammer_existing_2_dfjodie1d)"/>
		<defs>
			<linearGradient id="1752500502789-480700_hammer_existing_0_qgphq5w1k" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="8" y2="22">
				<stop stopColor="#ede9fe"/>
				<stop offset="1" stopColor="#7c3aed"/>
			</linearGradient>
			<linearGradient id="1752500502789-480700_hammer_existing_1_6e34eq727" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="2" y2="12">
				<stop stopColor="#E3E3E5" stopOpacity=".6"/>
				<stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"/>
			</linearGradient>
			<linearGradient id="1752500502789-480700_hammer_existing_2_dfjodie1d" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="2" y2="7.791">
				<stop stopColor="#fff"/>
				<stop offset="1" stopColor="#fff" stopOpacity="0"/>
			</linearGradient>
			<filter height="400%" id="1752500502789-480700_hammer_filter_h37whqno5" width="400%" x="-100%" y="-100%">
				<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic"/>
			</filter>
			<clipPath id="1752500502789-480700_hammer_clipPath_4eubffvza">
				<path d="M3 9V5C3 3.34315 4.34315 2 6 2H14.7393C15.4739 2 16.1833 2.26975 16.7324 2.75781L19.9932 5.65625C20.6335 6.22554 21 7.04162 21 7.89844V9.5C21 10.8807 19.8807 12 18.5 12H6C4.34315 12 3 10.6569 3 9Z" fill="url(#1752500502789-480700_hammer_existing_1_6e34eq727)"/>
			</clipPath>
			<mask id="1752500502789-480700_hammer_mask_ln5zbtsqv">
				<rect height="100%" width="100%" fill="#FFF"/>
				<path d="M3 9V5C3 3.34315 4.34315 2 6 2H14.7393C15.4739 2 16.1833 2.26975 16.7324 2.75781L19.9932 5.65625C20.6335 6.22554 21 7.04162 21 7.89844V9.5C21 10.8807 19.8807 12 18.5 12H6C4.34315 12 3 10.6569 3 9Z" fill="#000"/>
			</mask>
		</defs>
	</g>
</svg>
	);
};

export default Hammer;