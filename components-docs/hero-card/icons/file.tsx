import React, {SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function File({fill = 'currentColor', secondaryfill, strokewidth = 1, width = '1em', height = '1em', title = 'badge 13', ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height={height} style={{}} width={width} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5C3 2.79086 4.79086 1 7 1H13.3428ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H15.5C16.0523 18 16.5 17.5523 16.5 17C16.5 16.4477 16.0523 16 15.5 16H8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H8ZM13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H13Z" fill="url(#1752500502785-6792502_file_existing_0_ha8dpblo1)" mask="url(#1752500502785-6792502_file_mask_6pjiec06j)" data-glass="origin"/>
		<path clipPath="url(#1752500502785-6792502_file_clipPath_t9np9je6l)" d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5C3 2.79086 4.79086 1 7 1H13.3428ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H15.5C16.0523 18 16.5 17.5523 16.5 17C16.5 16.4477 16.0523 16 15.5 16H8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H8ZM13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H13Z" fill="url(#1752500502785-6792502_file_existing_0_ha8dpblo1)" filter="url(#1752500502785-6792502_file_filter_pe3s0hi4h)" data-glass="clone"/>
		<path d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V9H15C13.8954 9 13 8.10457 13 7V1H13.3428Z" fill="url(#1752500502785-6792502_file_existing_1_dlzvjod37)" data-glass="blur"/>
		<path d="M13 7V1H13.3428C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V9H15V8.25H20.1074C20.0992 8.2377 20.0921 8.22384 20.083 8.21094C19.9288 7.99318 19.6893 7.74982 19.2979 7.3584L14.6416 2.70215C14.2502 2.31073 14.0068 2.07117 13.7891 1.91699C13.776 1.90775 13.7624 1.89991 13.75 1.8916V7C13.75 7.69036 14.3096 8.25 15 8.25V9C13.8954 9 13 8.10457 13 7Z" fill="url(#1752500502785-6792502_file_existing_2_wmh1k53h9)"/>
		<defs>
			<linearGradient id="1752500502785-6792502_file_existing_0_ha8dpblo1" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="1" y2="23">
				<stop stopColor="#e0f2fe"/>
				<stop offset="1" stopColor="#06b6d4"/>
			</linearGradient>
			<linearGradient id="1752500502785-6792502_file_existing_1_dlzvjod37" gradientUnits="userSpaceOnUse" x1="17" x2="17" y1="1" y2="9">
				<stop stopColor="#E3E3E5" stopOpacity=".6"/>
				<stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"/>
			</linearGradient>
			<linearGradient id="1752500502785-6792502_file_existing_2_wmh1k53h9" gradientUnits="userSpaceOnUse" x1="17" x2="17" y1="1" y2="5.633">
				<stop stopColor="#fff"/>
				<stop offset="1" stopColor="#fff" stopOpacity="0"/>
			</linearGradient>
			<filter height="400%" id="1752500502785-6792502_file_filter_pe3s0hi4h" width="400%" x="-100%" y="-100%">
				<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic"/>
			</filter>
			<clipPath id="1752500502785-6792502_file_clipPath_t9np9je6l">
				<path d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V9H15C13.8954 9 13 8.10457 13 7V1H13.3428Z" fill="url(#1752500502785-6792502_file_existing_1_dlzvjod37)"/>
			</clipPath>
			<mask id="1752500502785-6792502_file_mask_6pjiec06j">
				<rect height="100%" width="100%" fill="#FFF"/>
				<path d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V9H15C13.8954 9 13 8.10457 13 7V1H13.3428Z" fill="#000"/>
			</mask>
		</defs>
	</g>
</svg>
	);
};

export default File;