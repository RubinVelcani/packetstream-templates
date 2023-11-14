import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import GradientBackgroundWrapper from '../../components/GradientBackgroundWrapper'
import Button from '../../components/Button'

/**
 * Component for "GradientBackground" Slices.
 */
const GradientBackground = ({ slice }) => {
	const sliceData = slice.primary
	const sliceItems = slice.items

	switch (slice.variation) {
		case 'techPartners':
			return (
				<section className='w-full' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<GradientBackgroundWrapper>
						<div className='text-[40px] text-center text-[#242424] font-bold mb-14'>
							<PrismicRichText field={sliceData.heading} />
						</div>
						<div className='flex gap-10'>
							{sliceItems.map(({ logo, link }) => (
								<div key={logo.alt} className='flex items-center justify-center border border-white rounded-lg'>
									<PrismicNextLink field={link}>
										<PrismicNextImage field={logo} />
									</PrismicNextLink>
								</div>
							))}
						</div>
					</GradientBackgroundWrapper>
				</section>
			)
		case 'buttoned':
			return (
				<section className='w-full' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<div className='text-[40px] text-center text-[#242424] font-bold mb-10'>
						<PrismicRichText field={sliceData.heading} />
					</div>
					<div className='flex gap-10 mb-20'>
						{sliceItems.map(({ logo, name, details }) => (
							<div key={logo.alt} className='flex flex-col items-center text-center text-xl rounded-lg'>
								<PrismicNextImage field={logo} />
								<p className='text-[#42495B] font-medium my-1'>{name}</p>
								<p className='text-[#242424] font-semibold'>{details}</p>
							</div>
						))}
					</div>
					<div className='w-fit mx-auto'>
						<PrismicNextLink field={slice.button_link}>
							<Button type='secondary' text={sliceData.button_text} />
						</PrismicNextLink>
					</div>
				</section>
			)
		default:
			return (
				<section className='w-full' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<GradientBackgroundWrapper>
						<div className='text-[40px] text-center text-[#242424] font-bold mb-10'>
							<PrismicRichText field={sliceData.heading} />
							<p className='text-2xl text-[#42495B] font-medium'>{sliceData.subheading}</p>
						</div>
						<div className='flex justify-center items-center gap-6 mx-auto'>
							<PrismicNextLink field={slice.primary_button_link}>
								<Button type='primary' text={sliceData.primary_button_text} />
							</PrismicNextLink>
							<PrismicNextLink field={slice.secondary_button_link}>
								<Button type='secondary' text={sliceData.secondary_button_text} />
							</PrismicNextLink>
						</div>
					</GradientBackgroundWrapper>
				</section>
			)
	}
}

export default GradientBackground
