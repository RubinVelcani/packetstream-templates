import { PrismicRichText } from '@prismicio/react'

import CarouselWrapper from '../../components/UIComponentWrappers/CarouselWrapper'

/**
 * Component for "TestimoniesSlider" Slices.
 */
const TestimoniesSlider = ({ slice }) => {
	const sliceData = slice.primary
	const sliceItems = slice.items

	return (
		<section className='mt-[120px]' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className='text-[40px] font-bold'>
				<PrismicRichText field={sliceData.heading} />
			</div>
			<div className='w-full flex justify-between gap-[84px] mt-20'>
				<div className='w-full max-w-[560px]'>
					<p className=''>{sliceData.description}</p>
				</div>
				<CarouselWrapper className='relative w-full max-w-[580px] p-8' slidesToSlide={1}>
					{sliceItems.map(({ name, review }) => (
						<div
							key={name}
							className='relative w-full max-w-[480px] text-2xl text-[#42495B] bg-white border-t border-l border-[#242424] rounded-2xl p-8'
						>
							<span className='absolute top-0 left-0 text-[100px] font-bold'>"</span>
							<p className=''>{review}</p>
							<h3 className='text-2xl text-[#262626] font-bold mt-6'>{name}</h3>
							<div className='absolute -z-10 top-4 left-4 w-full max-w-[480px] h-full bg-[#007BFF] rounded-2xl'></div>
						</div>
					))}
				</CarouselWrapper>
			</div>
		</section>
	)
}

export default TestimoniesSlider
