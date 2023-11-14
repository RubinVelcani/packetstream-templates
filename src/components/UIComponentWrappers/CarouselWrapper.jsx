'use client'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import ChevronRight from '../../assets/icons/chevronRight'
import ChevronLeft from '../../assets/icons/chevronLeft'

// const responsive = {
// 	superLargeDesktop: {
// 		breakpoint: { max: 4000, min: 3000 },
// 		items: 1,
// 	},
// 	desktop: {
// 		breakpoint: { max: 3000, min: 1024 },
// 		items: 1,
// 	},
// 	tablet: {
// 		breakpoint: { max: 1024, min: 464 },
// 		items: 1,
// 	},
// 	mobile: {
// 		breakpoint: { max: 464, min: 0 },
// 		items: 1,
// 	},
// }

const responsive = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 1,
	},
	mobile: {
		breakpoint: {
			max: 464,
			min: 0,
		},
		items: 1,
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 464,
		},
		items: 1,
	},
}

const CustomRightArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType },
		className,
	} = rest
	return (
		<button className={className} onClick={() => onClick()}>
			<ChevronRight className='w-6 h-6 flex items-center justify-center' />
		</button>
	)
}

const CustomLeftArrow = ({ onClick, ...rest }) => {
	const {
		onMove,
		carouselState: { currentSlide, deviceType },
		className,
	} = rest
	return (
		<button className={className} onClick={() => onClick()}>
			<ChevronLeft className='w-6 h-6 flex items-center justify-center' />
		</button>
	)
}

const CarouselWrapper = ({ children, ...rest }) => {
	return (
		<Carousel
			responsive={responsive}
			partialVisible={true}
			customRightArrow={<CustomRightArrow className='absolute right-4 w-1.5 h-3' />}
			customLeftArrow={<CustomLeftArrow className='absolute left-4 w-1.5 h-3' />}
			{...rest}
		>
			{...children}
		</Carousel>
	)
}

export default CarouselWrapper
