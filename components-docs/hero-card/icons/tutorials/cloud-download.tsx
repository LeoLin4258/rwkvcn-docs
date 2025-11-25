import React, {SVGProps} from 'react';

type IconProps = SVGProps<SVGSVGElement> & {
	secondaryfill?: string;
	strokewidth?: number;
	title?: string;
}

function CloudDownload({fill = 'currentColor', secondaryfill, strokewidth = 1, width = '1em', height = '1em', title = 'badge 13', ...props}: IconProps) {
	secondaryfill = secondaryfill || fill;

	return (
		<svg height={height} style={{}} width={width} {...props} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="none">
		<path d="M3.0665 9.35256C3.62627 5.24736 7.20427 2 11.5 2C15.7459 2 19.1859 5.0787 19.8907 9.07982C22.2211 9.50238 24 11.5515 24 14C24 16.7523 21.7523 19 19 19H5C2.24772 19 0 16.7523 0 14C0 11.9104 1.26852 10.0904 3.0665 9.35256Z" fill="url(#1752500502778-7139323_cloud-download_existing_0_lhshdq5qf)" fillRule="evenodd" mask="url(#1752500502778-7139323_cloud-download_mask_9mp91mm7r)" data-glass="origin"/>
		<path clipPath="url(#1752500502778-7139323_cloud-download_clipPath_pgl4jfim7)" d="M3.0665 9.35256C3.62627 5.24736 7.20427 2 11.5 2C15.7459 2 19.1859 5.0787 19.8907 9.07982C22.2211 9.50238 24 11.5515 24 14C24 16.7523 21.7523 19 19 19H5C2.24772 19 0 16.7523 0 14C0 11.9104 1.26852 10.0904 3.0665 9.35256Z" fill="url(#1752500502778-7139323_cloud-download_existing_0_lhshdq5qf)" fillRule="evenodd" filter="url(#1752500502778-7139323_cloud-download_filter_qrc3nceqg)" data-glass="clone"/>
		<path d="M7.12097 13L10.0001 13L10.0001 8.5C10.0001 7.67157 10.6716 7 11.5001 7L12.5001 7C13.3285 7 14.0001 7.67157 14.0001 8.5V13L16.8792 13C18.1369 13 18.8362 14.4549 18.0504 15.4371L13.1714 21.5359C12.5709 22.2865 11.4292 22.2865 10.8288 21.5359L5.94968 15.4371C5.16396 14.4549 5.86322 13 7.12097 13Z" fill="url(#1752500502778-7139323_cloud-download_existing_1_kwfnmdw7l)" data-glass="blur"/>
		<path d="M13.2501 8.5C13.2501 8.08579 12.9143 7.75 12.5001 7.75H11.5001C11.0859 7.75003 10.7501 8.08581 10.7501 8.5V13.75H7.12121C6.49233 13.75 6.14242 14.4777 6.53527 14.9688L11.4142 21.0674C11.7144 21.4427 12.2858 21.4427 12.5861 21.0674L17.465 14.9688C17.8578 14.4777 17.5079 13.75 16.879 13.75H13.2501V8.5ZM14.0001 13H16.879C18.1368 13 18.8366 14.4554 18.0509 15.4375L13.171 21.5361L13.0529 21.668C12.4719 22.2426 11.5283 22.2427 10.9474 21.668L10.8292 21.5361L5.94934 15.4375C5.18814 14.486 5.82113 13.09 7.005 13.0039L7.12121 13H10.0001V8.5C10.0001 7.67159 10.6717 7.00003 11.5001 7H12.5001C13.3285 7 14.0001 7.67157 14.0001 8.5V13Z" fill="url(#1752500502778-7139323_cloud-download_existing_2_q9z4whvim)"/>
		<defs>
			<linearGradient id="1752500502778-7139323_cloud-download_existing_0_lhshdq5qf" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="2" y2="19">
				<stop stopColor="#e0e7ff"/>
				<stop offset="1" stopColor="#4f46e5"/>
			</linearGradient>
			<linearGradient id="1752500502778-7139323_cloud-download_existing_1_kwfnmdw7l" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="7" y2="22.099">
				<stop stopColor="#E3E3E5" stopOpacity=".6"/>
				<stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"/>
			</linearGradient>
			<linearGradient id="1752500502778-7139323_cloud-download_existing_2_q9z4whvim" gradientUnits="userSpaceOnUse" x1="12" x2="12" y1="7" y2="15.744">
				<stop stopColor="#fff"/>
				<stop offset="1" stopColor="#fff" stopOpacity="0"/>
			</linearGradient>
			<filter height="400%" id="1752500502778-7139323_cloud-download_filter_qrc3nceqg" width="400%" x="-100%" y="-100%">
				<feGaussianBlur height="100%" width="100%" x="0%" y="0%" stdDeviation="2" edgeMode="none" result="blur" in="SourceGraphic"/>
			</filter>
			<clipPath id="1752500502778-7139323_cloud-download_clipPath_pgl4jfim7">
				<path d="M7.12097 13L10.0001 13L10.0001 8.5C10.0001 7.67157 10.6716 7 11.5001 7L12.5001 7C13.3285 7 14.0001 7.67157 14.0001 8.5V13L16.8792 13C18.1369 13 18.8362 14.4549 18.0504 15.4371L13.1714 21.5359C12.5709 22.2865 11.4292 22.2865 10.8288 21.5359L5.94968 15.4371C5.16396 14.4549 5.86322 13 7.12097 13Z" fill="url(#1752500502778-7139323_cloud-download_existing_1_kwfnmdw7l)"/>
			</clipPath>
			<mask id="1752500502778-7139323_cloud-download_mask_9mp91mm7r">
				<rect height="100%" width="100%" fill="#FFF"/>
				<path d="M7.12097 13L10.0001 13L10.0001 8.5C10.0001 7.67157 10.6716 7 11.5001 7L12.5001 7C13.3285 7 14.0001 7.67157 14.0001 8.5V13L16.8792 13C18.1369 13 18.8362 14.4549 18.0504 15.4371L13.1714 21.5359C12.5709 22.2865 11.4292 22.2865 10.8288 21.5359L5.94968 15.4371C5.16396 14.4549 5.86322 13 7.12097 13Z" fill="#000"/>
			</mask>
		</defs>
	</g>
</svg>
	);
};

export default CloudDownload;