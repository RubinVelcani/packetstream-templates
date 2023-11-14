const backgroundStyle = {
  width: '863px',
  height: '736px',
	backgroundImage: `url('/heroBackgroundImage.png')`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
  marginTop: '-64px'
}

const HeroBackgroundImage = ({ children, className }) => (
	<div className={className} style={backgroundStyle}>
		{children}
	</div>
)

		// <svg xmlns='http://www.w3.org/2000/svg' width='1000' height='1000' viewBox='0 0 1000 1000' fill='none' className={className}>
		// 	<g filter='url(#filter0_f_713_8528)' opacity='0.5'>
		// 		<path
		// 			fill='url(#paint0_linear_713_8528)'
		// 			d='M830.138 349.175c45.902 61.48-347.5-137.5-537.074-31.814-3.949 206.992 666.251 107.339 582.574 169.814-170.38 127.208-656.298 147.646-746.501 26.831C38.935 393.192 75.379 140.002 274.311 64.92 557.137-41.825 739.935 228.36 830.138 349.175z'
		// 		></path>
		// 	</g>
		// 	<g filter='url(#filter1_f_713_8528)' opacity='0.5'>
		// 		<path
		// 			fill='url(#paint1_linear_713_8528)'
		// 			d='M62.904 464.733c136.238 79.942 293.738 182.442 578.238 89.942 117.887-170.188-245-60-354-189-36.5-124 536.385-93.516 544.614 57.033 8.229 150.549-157.213 282.001-369.526 293.606C249.917 727.919 71.133 615.282 62.904 464.733z'
		// 		></path>
		// 	</g>
		// 	<defs>
		// 		<filter
		// 			id='filter0_f_713_8528'
		// 			width='880.406'
		// 			height='633.969'
		// 			x='42.461'
		// 			y='0.473'
		// 			colorInterpolationFilters='sRGB'
		// 			filterUnits='userSpaceOnUse'
		// 		>
		// 			<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
		// 			<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'></feBlend>
		// 			<feGaussianBlur result='effect1_foregroundBlur_713_8528' stdDeviation='20'></feGaussianBlur>
		// 		</filter>
		// 		<filter
		// 			id='filter1_f_713_8528'
		// 			width='849.141'
		// 			height='508.5'
		// 			x='22.906'
		// 			y='248.637'
		// 			colorInterpolationFilters='sRGB'
		// 			filterUnits='userSpaceOnUse'
		// 		>
		// 			<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
		// 			<feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape'></feBlend>
		// 			<feGaussianBlur result='effect1_foregroundBlur_713_8528' stdDeviation='20'></feGaussianBlur>
		// 		</filter>
		// 		<filter
		// 			id='filter2_d_713_8528'
		// 			width='568'
		// 			height='368'
		// 			x='311.641'
		// 			y='233.676'
		// 			colorInterpolationFilters='sRGB'
		// 			filterUnits='userSpaceOnUse'
		// 		>
		// 			<feFlood floodOpacity='0' result='BackgroundImageFix'></feFlood>
		// 			<feColorMatrix in='SourceAlpha' result='hardAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'></feColorMatrix>
		// 			<feOffset dx='2' dy='2'></feOffset>
		// 			<feGaussianBlur stdDeviation='12'></feGaussianBlur>
		// 			<feComposite in2='hardAlpha' operator='out'></feComposite>
		// 			<feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0'></feColorMatrix>
		// 			<feBlend in2='BackgroundImageFix' result='effect1_dropShadow_713_8528'></feBlend>
		// 			<feBlend in='SourceGraphic' in2='effect1_dropShadow_713_8528' result='shape'></feBlend>
		// 		</filter>
		// 		<linearGradient id='paint0_linear_713_8528' x1='-34.189' x2='909.463' y1='295.252' y2='272.098' gradientUnits='userSpaceOnUse'>
		// 			<stop stopColor='#FE8017' stopOpacity='0.7'></stop>
		// 			<stop offset='1' stopColor='#F7DC69' stopOpacity='0.3'></stop>
		// 		</linearGradient>
		// 		<linearGradient id='paint1_linear_713_8528' x1='846.656' x2='48.004' y1='695.301' y2='192.14' gradientUnits='userSpaceOnUse'>
		// 			<stop stopColor='#FDDAAE'></stop>
		// 			<stop offset='1' stopColor='#F7DD6A'></stop>
		// 		</linearGradient>
		// 	</defs>
		// </svg>
export default HeroBackgroundImage
