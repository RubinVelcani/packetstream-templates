'use client'
import { useState } from 'react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import HorizontalBar from '../../components/HorizontalBar'
import Button from '../../components/Button'


/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }) => {
	const sliceData = slice.primary
	const sliceItems = slice.items

	const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(0)
	const selectedFeature = sliceItems[selectedFeatureIndex]

	switch (slice.variation) {
		case 'labeledFeatures':
			return (
				<section className='mt-[120px]' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<div className='text-[40px] text-[#242424] font-bold'>
						<PrismicRichText field={sliceData.heading} />
					</div>
					<p className='text-2xl text-[#42495B] mt-6'>{sliceData.subheading}</p>
					<div className='w-full flex justify-between gap-[34px] mt-10'>
						{sliceItems.map((feature, index) => {
							const isSelected = selectedFeatureIndex === index
							return (
								<div key={index} onClick={() => setSelectedFeatureIndex(index)} className='py-4 px-6 cursor-pointer'>
									<HorizontalBar selected={isSelected} />
								</div>
							)
						})}
					</div>
					<div className='flex justify-between gap-10 mt-20'>
						<div className='ml-20'>
							<div className='text-[32px] font-bold'>
								<PrismicRichText field={selectedFeature.title} />
							</div>
							<span className='inline-block	text-xs font-bold bg-[#E9E9E9] rounded px-2 py-1.5 mt-3'>{selectedFeature.label}</span>
							<p className='w-full max-w-[480px] text-[#42495B] font-medium mt-6 mb-10'>{selectedFeature.description}</p>
							<PrismicNextLink field={selectedFeature.button_link}>
								<Button
									type='primary'
									text={selectedFeature.button_text}
									className='text-white font-bold bg-[#007BFF] rounded leading-8 py-2.5 px-8'
								/>
							</PrismicNextLink>
						</div>
						<div className='w-full max-w-[580px] rounded-[40px] bg-[#FAFAFA]'>
							<PrismicNextImage field={selectedFeature.image} />
						</div>
					</div>
				</section>
			)

		default:
			return (
				<section className='mt-[120px]' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<div className='text-[40px] text-[#242424] font-bold'>
						<PrismicRichText field={sliceData.heading} />
					</div>
					<p className='text-2xl text-[#42495B] mt-6'>{sliceData.subheading}</p>
					<div className='w-full flex justify-between gap-[34px] mt-10'>
						{sliceItems.map((feature, index) => {
							const isSelected = selectedFeatureIndex === index
							return (
								<div key={feature.title} onClick={() => setSelectedFeatureIndex(index)} className='py-4 px-6 cursor-pointer'>
									<HorizontalBar selected={isSelected} />
								</div>
							)
						})}
					</div>
					<div className='flex justify-between gap-10 mt-20'>
						<div className='ml-20'>
							<div className='text-[32px] font-bold'>
								<PrismicRichText field={selectedFeature.title} />
							</div>
							<p className='w-full max-w-[480px] text-[#42495B] font-medium mt-6 mb-10'>{selectedFeature.description}</p>
							<PrismicNextLink field={selectedFeature.button_link}>
								<Button
									type='primary'
									text={selectedFeature.button_text}
									className='text-white font-bold bg-[#007BFF] rounded leading-8 py-2.5 px-8'
								/>
							</PrismicNextLink>
						</div>
						<div className='w-full max-w-[580px] rounded-[40px]'>
							<PrismicNextImage field={selectedFeature.image} />
						</div>
					</div>
				</section>
			)
	}
}

export default Features
