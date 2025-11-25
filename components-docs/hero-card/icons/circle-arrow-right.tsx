import React, {SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function CircleArrowRight({fill = 'currentColor', secondaryfill, strokewidth = 1, width = '1em', height = '1em', title = 'badge 13', ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height={height} style={{}} width={width} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z" fill="url(#1752500502774-2800238_circle-arrow-right_existing_0_0eu70w1bk)" mask="url(#1752500502774-2800238_circle-arrow-right_mask_ikxa2618m)" data-glass="origin"/>
		<path clipPath="url(#1752500502774-2800238_circle-arrow-right_clipPath_i9q03945e)" d="M8 7.61307C8.0002 5.90648 10.0157 4.90589 11.4824 5.88455L18.0557 10.2713C19.3143 11.1111 19.3143 12.8884 18.0557 13.7283L11.4824 18.115C10.0157 19.0938 8 18.0933 8 16.3865V13.4998H3L2.84668 13.492C2.09029 13.4152 1.5 12.7764 1.5 11.9998C1.50011 11.2232 2.09035 10.5844 2.84668 10.5076L3 10.4998H8V7.61307Z" fill="url(#1752500502774-2800238_circle-arrow-right_existing_0_0eu70w1bk)" filter="url(#1752500502774-2800238_circle-arrow-right_filter_csmysv27c)" data-glass="clone"/>
		<path d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" fill="url(#1752500502774-2800238_circle-arrow-right_existing_1_q6dcy0lm4)" fillRule="evenodd" data-glass="blur"/>
		<path d="M22.25 12C22.25 6.33908 17.6609 1.75 12 1.75C6.33908 1.75 1.75 6.33908 1.75 12C1.75 17.6609 6.33908 22.25 12 22.25V23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1L12.5664 1.01465C18.3783 1.30945 23 6.11484 23 12L22.9854 12.5664C22.6906 18.3783 17.8852 23 12 23V22.25C17.6609 22.25 22.25 17.6609 22.25 12Z" fill="url(#1752500502774-2800238_circle-arrow-right_existing_2_qqvhgsoii)"/>
		<defs>
			<linearGradient id="1752500502774-2800238_circle-arrow-right_existing_0_0eu70w1bk" gradientUnits="userSpaceOnUse" x1="10.25" x2="10.25" y1="5.5" y2="18.5">
				<stop stopColor="#e0e7ff"/>
				<stop offset="1" stopColor="#4f46e5"/>
			</linearGradient>
			<linearGradient id="1752500502774-2800238_circle-arrow-right_existing_1_q6dcy0lm4" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="1" y2="23">
				<stop stopColor="#E3E3E5" stopOpacity=".6"/>
				<stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"/>
			</linearGradient>
			<linearGradient id="1752500502774-2800238_circle-arrow-right_existing_2_qqvhgsoii" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="1" y2="13.74">
				<stop stopColor="#fff"/>
				<stop offset="1" stopColor="#fff" stopOpacity="0"/>
			</linearGradient>
			<filter height="400%" id="1752500502774-2800238_circle-arrow-right_filter_csmysv27c" width="400%" x="-100%" y="-100%">
				<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic"/>
			</filter>
			<clipPath id="1752500502774-2800238_circle-arrow-right_clipPath_i9q03945e">
				<path d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" fill="url(#1752500502774-2800238_circle-arrow-right_existing_1_q6dcy0lm4)" fillRule="evenodd"/>
			</clipPath>
			<mask id="1752500502774-2800238_circle-arrow-right_mask_ikxa2618m">
				<rect height="100%" width="100%" fill="#FFF"/>
				<path d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM9 15.6387C9 17.0545 10.594 17.8842 11.7539 17.0723L16.9521 13.4336C17.9472 12.7369 17.9471 11.2631 16.9521 10.5664L11.7539 6.92773C10.594 6.11583 9 6.94554 9 8.36133V15.6387Z" fill="#000" fillRule="evenodd"/>
			</mask>
		</defs>
	</g>
</svg>
	);
};

export default CircleArrowRight;