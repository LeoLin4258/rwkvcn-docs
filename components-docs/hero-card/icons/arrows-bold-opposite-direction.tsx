import React, { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function ArrowsBoldOppositeDirection({ title = 'badge 13', ...props }: IconProps) {
	return (
		<svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
			<title>{title}</title>
			<g fill="none">
				<path d="M12 15.1099V12.134H18.5C19.3284 12.134 20 11.4624 20 10.634L20 6.63397C20 5.80555 19.3284 5.13398 18.5 5.13398L12 5.13398V2.15802C12 0.917543 10.58 0.213184 9.59238 0.963774L1.07138 7.43974C0.281546 8.04001 0.281546 9.22795 1.07138 9.82822L9.59238 16.3042C10.58 17.0548 12 16.3504 12 15.1099Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_0_ng1mkmgk8)" mask="url(#1752500502765-1219022_arrows-bold-opposite-direction_mask_m1tbxjjqc)" data-glass="origin" />
				<path clipPath="url(#1752500502765-1219022_arrows-bold-opposite-direction_clipPath_06b3zrgty)" d="M12 15.1099V12.134H18.5C19.3284 12.134 20 11.4624 20 10.634L20 6.63397C20 5.80555 19.3284 5.13398 18.5 5.13398L12 5.13398V2.15802C12 0.917543 10.58 0.213184 9.59238 0.963774L1.07138 7.43974C0.281546 8.04001 0.281546 9.22795 1.07138 9.82822L9.59238 16.3042C10.58 17.0548 12 16.3504 12 15.1099Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_0_ng1mkmgk8)" filter="url(#1752500502765-1219022_arrows-bold-opposite-direction_filter_fjwlm2igw)" data-glass="clone" />
				<path d="M12 21.976L12 19L5.50001 19C4.67158 19 4 18.3284 4.00001 17.5L4.00003 13.5C4.00003 12.6716 4.67161 12 5.50003 12L12 12L12 9.02404C12 7.78356 13.42 7.07921 14.4076 7.8298L22.9286 14.3058C23.7185 14.906 23.7185 16.094 22.9286 16.6942L14.4076 23.1702C13.42 23.9208 12 23.2164 12 21.976Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_1_7ryavlmrh)" data-glass="blur" />
				<path d="M4 17.4996V13.4996C4.0001 12.6712 4.67165 11.9996 5.5 11.9996H12V9.024C12 7.78361 13.4196 7.07932 14.4072 7.82966L22.9287 14.3052C23.7185 14.9055 23.7184 16.0936 22.9287 16.6939L14.4072 23.1695C13.4505 23.8966 12.0881 23.2588 12.0039 22.0904L12 21.9761V18.9996H5.5V18.2496H12.75V21.9761C12.7503 22.5961 13.4604 22.948 13.9541 22.5728L22.4746 16.0972C22.8695 15.7971 22.8695 15.203 22.4746 14.9029L13.9541 8.42634C13.4603 8.05104 12.75 8.40376 12.75 9.024V12.7496H5.5C5.08586 12.7496 4.7501 13.0855 4.75 13.4996V17.4996C4.75 17.9138 5.08579 18.2496 5.5 18.2496V18.9996L5.34668 18.9918C4.59028 18.915 4 18.2762 4 17.4996Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_2_p9nlanf69)" />
				<defs>
					<linearGradient id="1752500502765-1219022_arrows-bold-opposite-direction_existing_0_ng1mkmgk8" gradientUnits="userSpaceOnUse" x1="10.239" x2="10.239" y1=".655" y2="16.613">
						<stop stopColor="#e9d5ff" />
						<stop offset="1" stopColor="#8b5cf6" />
					</linearGradient>
					<linearGradient id="1752500502765-1219022_arrows-bold-opposite-direction_existing_1_7ryavlmrh" gradientUnits="userSpaceOnUse" x1="24.5" x2="4" y1="15.5" y2="15.5">
						<stop stopColor="#E3E3E5" stopOpacity=".6" />
						<stop offset="1" stopColor="#BBBBC0" stopOpacity=".6" />
					</linearGradient>
					<linearGradient id="1752500502765-1219022_arrows-bold-opposite-direction_existing_2_p9nlanf69" gradientUnits="userSpaceOnUse" x1="13.761" x2="13.761" y1="7.521" y2="16.762">
						<stop stopColor="#fff" />
						<stop offset="1" stopColor="#fff" stopOpacity="0" />
					</linearGradient>
					<filter height="400%" id="1752500502765-1219022_arrows-bold-opposite-direction_filter_fjwlm2igw" width="400%" x="-100%" y="-100%">
						<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic" />
					</filter>
					<clipPath id="1752500502765-1219022_arrows-bold-opposite-direction_clipPath_06b3zrgty">
						<path d="M12 21.976L12 19L5.50001 19C4.67158 19 4 18.3284 4.00001 17.5L4.00003 13.5C4.00003 12.6716 4.67161 12 5.50003 12L12 12L12 9.02404C12 7.78356 13.42 7.07921 14.4076 7.8298L22.9286 14.3058C23.7185 14.906 23.7185 16.094 22.9286 16.6942L14.4076 23.1702C13.42 23.9208 12 23.2164 12 21.976Z" fill="url(#1752500502765-1219022_arrows-bold-opposite-direction_existing_1_7ryavlmrh)" />
					</clipPath>
					<mask id="1752500502765-1219022_arrows-bold-opposite-direction_mask_m1tbxjjqc">
						<rect height="100%" width="100%" fill="#FFF" />
						<path d="M12 21.976L12 19L5.50001 19C4.67158 19 4 18.3284 4.00001 17.5L4.00003 13.5C4.00003 12.6716 4.67161 12 5.50003 12L12 12L12 9.02404C12 7.78356 13.42 7.07921 14.4076 7.8298L22.9286 14.3058C23.7185 14.906 23.7185 16.094 22.9286 16.6942L14.4076 23.1702C13.42 23.9208 12 23.2164 12 21.976Z" fill="#000" />
					</mask>
				</defs>
			</g>
		</svg>
	);
};

export default ArrowsBoldOppositeDirection;