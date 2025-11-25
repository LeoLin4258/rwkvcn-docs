import React, {SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function PaperPlane({fill = 'currentColor', secondaryfill, strokewidth = 1, width = '1em', height = '1em', title = 'badge 13', ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height={height} style={{}} width={width} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M21.6776 4.18458C22.0463 3.03731 20.9625 1.95364 19.8153 2.32227L2.2772 7.95899C1.05479 8.35081 0.881376 10.0028 1.98423 10.6475L9.16391 14.835L11.2577 18.4243L21.6776 4.18458Z" fill="url(#1752500502797-7620732_paper-plane_existing_0_nkkdd9t06)" mask="url(#1752500502797-7620732_paper-plane_mask_ydmxcxv1y)" data-glass="origin"/>
		<path clipPath="url(#1752500502797-7620732_paper-plane_clipPath_ofdqzif6z)" d="M21.6776 4.18458C22.0463 3.03731 20.9625 1.95364 19.8153 2.32227L2.2772 7.95899C1.05479 8.35081 0.881376 10.0028 1.98423 10.6475L9.16391 14.835L11.2577 18.4243L21.6776 4.18458Z" fill="url(#1752500502797-7620732_paper-plane_existing_0_nkkdd9t06)" filter="url(#1752500502797-7620732_paper-plane_filter_0htf5jaml)" data-glass="clone"/>
		<path d="M16.04 21.7227L21.6777 4.1846C21.864 3.60492 21.6795 3.04147 21.3033 2.6734L9.16406 14.835L13.3516 22.0137C13.9962 23.1237 15.649 22.9407 16.04 21.7227Z" fill="url(#1752500502797-7620732_paper-plane_existing_1_z0vo4pxvb)" data-glass="blur"/>
		<path d="M21.3037 2.6734C21.6796 3.04139 21.8638 3.60471 21.6777 4.18414L16.04 21.7222C15.649 22.9403 13.9962 23.1233 13.3516 22.0132L9.16406 14.8345L21.3037 2.6734ZM10.1025 14.9556L13.999 21.6353L14 21.6373C14.3171 22.1831 15.133 22.0945 15.3262 21.4927L20.9062 4.13239L10.1025 14.9556Z" fill="url(#1752500502797-7620732_paper-plane_existing_2_gm00quyt4)"/>
		<defs>
			<linearGradient id="1752500502797-7620732_paper-plane_existing_0_nkkdd9t06" gradientUnits="userSpaceOnUse" x1="11.501" x2="11.501" y1="2.249" y2="18.424">
				<stop stopColor="#dcfce7"/>
				<stop offset="1" stopColor="#16a34a"/>
			</linearGradient>
			<linearGradient id="1752500502797-7620732_paper-plane_existing_1_z0vo4pxvb" gradientUnits="userSpaceOnUse" x1="15.458" x2="15.458" y1="2.673" y2="22.75">
				<stop stopColor="#E3E3E5" stopOpacity=".6"/>
				<stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"/>
			</linearGradient>
			<linearGradient id="1752500502797-7620732_paper-plane_existing_2_gm00quyt4" gradientUnits="userSpaceOnUse" x1="15.457" x2="15.457" y1="2.673" y2="14.3">
				<stop stopColor="#fff"/>
				<stop offset="1" stopColor="#fff" stopOpacity="0"/>
			</linearGradient>
			<filter height="400%" id="1752500502797-7620732_paper-plane_filter_0htf5jaml" width="400%" x="-100%" y="-100%">
				<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic"/>
			</filter>
			<clipPath id="1752500502797-7620732_paper-plane_clipPath_ofdqzif6z">
				<path d="M16.04 21.7227L21.6777 4.1846C21.864 3.60492 21.6795 3.04147 21.3033 2.6734L9.16406 14.835L13.3516 22.0137C13.9962 23.1237 15.649 22.9407 16.04 21.7227Z" fill="url(#1752500502797-7620732_paper-plane_existing_1_z0vo4pxvb)"/>
			</clipPath>
			<mask id="1752500502797-7620732_paper-plane_mask_ydmxcxv1y">
				<rect height="100%" width="100%" fill="#FFF"/>
				<path d="M16.04 21.7227L21.6777 4.1846C21.864 3.60492 21.6795 3.04147 21.3033 2.6734L9.16406 14.835L13.3516 22.0137C13.9962 23.1237 15.649 22.9407 16.04 21.7227Z" fill="#000"/>
			</mask>
		</defs>
	</g>
</svg>
	);
};

export default PaperPlane;