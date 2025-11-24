import React, { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function Bolt({ title = 'badge 13', ...props }: IconProps) {
	return (
		<svg height="25" width="24" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg" {...props}>
			<title>{title}</title>
			<g fill="none">
				<path d="M12 15V23.0359C12 24.0747 13.3876 24.4247 13.8803 23.5103L19.9902 12.1709C20.4887 11.1737 19.7633 10.0002 18.6484 10H12V6C9.5 8.5 7.87348 10.6369 7.5 15H12Z" fill="url(#qy4dlyy6d281752500502767-4202697_bolt_existing_0_xj1v2qxex)" mask="url(#qy4dlyy6d281752500502767-4202697_bolt_mask_yl22birbk)" data-glass="origin" />
				<path clipPath="url(#qy4dlyy6d281752500502767-4202697_bolt_clipPath_qizq5y859)" d="M12 15V23.0359C12 24.0747 13.3876 24.4247 13.8803 23.5103L19.9902 12.1709C20.4887 11.1737 19.7633 10.0002 18.6484 10H12V6C9.5 8.5 7.87348 10.6369 7.5 15H12Z" fill="url(#qy4dlyy6d281752500502767-4202697_bolt_existing_0_xj1v2qxex)" filter="url(#qy4dlyy6d281752500502767-4202697_bolt_filter_mvph9r03k)" data-glass="clone" />
				<path d="M12 9V1.96408C12 0.925331 10.6124 0.575284 10.1197 1.48974L4.00979 12.8291C3.51129 13.8263 4.23674 14.9998 5.35158 15H12V9Z" fill="url(#qy4dlyy6d281752500502767-4202697_bolt_existing_1_pr0095u8f)" data-glass="blur" />
				<path d="M10.1201 1.48889C10.6131 0.575627 11.9995 0.925489 12 1.9635V11.9996H11.25V1.9635C11.2499 1.87984 11.2247 1.83362 11.2002 1.80432C11.1708 1.76933 11.1232 1.73694 11.0615 1.72131C10.9997 1.70575 10.9419 1.71126 10.8994 1.72815C10.8639 1.74232 10.8201 1.77156 10.7803 1.84534L5.30762 11.9996H4.45605L10.1201 1.48889Z" fill="url(#qy4dlyy6d281752500502767-4202697_bolt_existing_2_8ujc3fzwv)" />
				<defs>
					<linearGradient id="qy4dlyy6d281752500502767-4202697_bolt_existing_0_xj1v2qxex" gradientUnits="userSpaceOnUse" x1="13.825" x2="13.825" y1="6" y2="27">
						<stop stopColor="#e0e0e0" />
						<stop offset="1" stopColor="#0026ff" />
					</linearGradient>
					<linearGradient id="qy4dlyy6d281752500502767-4202697_bolt_existing_1_pr0095u8f" gradientUnits="userSpaceOnUse" x1="7.925" x2="7.925" y1="-2" y2="15">
						<stop stopColor="#E3E3E5" stopOpacity=".6" />
						<stop offset="1" stopColor="#5656f5" stopOpacity=".6" />
					</linearGradient>
					<linearGradient id="qy4dlyy6d281752500502767-4202697_bolt_existing_2_8ujc3fzwv" gradientUnits="userSpaceOnUse" x1="8.228" x2="8.228" y1=".963" y2="11">
						<stop stopColor="#fff" stopOpacity="1" />
						<stop offset="1" stopColor="#fff" stopOpacity="0" />
					</linearGradient>
					<filter height="400%" id="qy4dlyy6d281752500502767-4202697_bolt_filter_mvph9r03k" width="400%" x="-100%" y="-100%">
						<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic" />
					</filter>
					<clipPath id="qy4dlyy6d281752500502767-4202697_bolt_clipPath_qizq5y859">
						<path d="M12 9V1.96408C12 0.925331 10.6124 0.575284 10.1197 1.48974L4.00979 12.8291C3.51129 13.8263 4.23674 14.9998 5.35158 15H12V9Z" fill="url(#qy4dlyy6d281752500502767-4202697_bolt_existing_1_pr0095u8f)" />
					</clipPath>
					<mask id="qy4dlyy6d281752500502767-4202697_bolt_mask_yl22birbk">
						<rect height="100%" width="100%" fill="#FFF" />
						<path d="M12 9V1.96408C12 0.925331 10.6124 0.575284 10.1197 1.48974L4.00979 12.8291C3.51129 13.8263 4.23674 14.9998 5.35158 15H12V9Z" fill="#000" />
					</mask>
				</defs>
			</g>
		</svg>
	);
};

export default Bolt;