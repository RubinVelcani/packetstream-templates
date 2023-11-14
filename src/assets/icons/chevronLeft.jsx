const ChevronLeft = ({className = '', width = '16', height = '18'}) => (
	<svg xmlns='http://www.w3.org/2000/svg' width={width} height={height} fill="none" className={className}>
		{/* <rect width='100%' height='100%' fill='#fff'></rect> */}
		<path
			fill='none'
			strokeLinecap='round'
			d='M727.273 954.545L272.727 500 727.273 45.454'
			style={{ isCustomFont: 'none', fontFileUrl: 'none' }}
			stroke='#007bff'
			strokeLinejoin='round'
			strokeWidth='2'
			vectorEffect='non-scaling-stroke'
		></path>
	</svg>
)

export default ChevronLeft
