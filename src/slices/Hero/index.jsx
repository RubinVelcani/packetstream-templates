import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import Button from '../../components/Button'
import HeroBackgroundImage from '../../assets/images/heroImage'

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice, slices }) => {
	const sliceData = slice.primary
	const dataItemsSlices = slice.items

	return (
		<section className='w-full flex justify-between relative mt-24' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className='w-full flex flex-col items-start mr-auto' style={{ maxWidth: '550px' }}>
				<div className='text-[40px] font-bold mb-8'>
					<PrismicRichText field={slice.primary.heading} />
				</div>
				<div className='text-2xl font-medium text-[#42495B] mb-16'>{sliceData.subheading}</div>
				<div className='flex flex-col lg:flex-row items-start'>
					{dataItemsSlices.map(({ data_item_heading, data_item_subheading }) => (
						<div className='flex gap-2 mr-10'>
							<span className='border-l border-[#42495B] h-[45px]'></span>
							<div className='flex flex-col gap'>
								<h3 className='font-black'>{data_item_heading}</h3>
								<p className='font-medium'>{data_item_subheading}</p>
							</div>
						</div>
					))}
				</div>
				{
					<div className='mt-20 flex items-center gap-6'>
						<PrismicNextLink field={sliceData.primary_button_link}>
							<Button type='primary' text={sliceData.primary_button_text} />
						</PrismicNextLink>
						<PrismicNextLink field={sliceData.secondary_button_link}>
							<Button type='secondary' text={sliceData.secondary_button_text} />
						</PrismicNextLink>
					</div>
				}
			</div>
			<HeroBackgroundImage className='z-0 absolute right-0'>
				<div className='absolute z-30 right-0' style={{ top: '50%', right: '0%', transform: 'translate(-0%, -50%)' }}>
					<PrismicNextImage field={sliceData.image} />
				</div>
			</HeroBackgroundImage>
		</section>
	)
}

export default Hero
