'use client'
import { useState, useMemo } from 'react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import ChevronRight from '../../assets/icons/chevronRight'
import Button from '../../components/Button'

/**
 * Component for "DataJourney" Slices.
 */
const DataJourney = ({ slice }) => {
	const sliceData = slice.primary
	const sliceItems = useMemo(() => slice.items, [slice])

	const [selectedItem, setSelectedItem] = useState(sliceItems[0])

	return (
		<section className='mt-56' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
			<div className='text-[40px] font-bold mb-8'>
				<PrismicRichText field={sliceData.heading} />
			</div>
			<div className='flex justify-between items-start lg:gap-[120px] mt-20'>
				<div className='w-full flex flex-col'>
					<div className='flex flex-col items-start'>
						{sliceItems.map(item => {
							const isSelected = selectedItem.title === item.title

							return (
								<div
									key={item.link}
									onClick={() => setSelectedItem(item)}
									className={`relative flex justify-between items-center border-2 ${
										isSelected ? 'border-[#007BFF]' : 'border-transparent'
									} rounded py-4 pl-6 pr-4 cursor-pointer`}
								>
									<div className='flex flex-col gap-1 mr-10'>
										<div className='text-[#007BFF] font-bold leading-6'>
											<PrismicRichText field={item.title} />
										</div>
										<p className='text-[#42495B] font-semibold'>{item.subtitle}</p>
									</div>
									{isSelected && (
										<div className='absolute right-4'>
											<ChevronRight />
										</div>
									)}
								</div>
							)
						})}
					</div>
				</div>
				<div style={{ maxWidth: '620px' }}>
					<div className='font-bold text-[32px] text-[#262626]'>
						<PrismicRichText field={selectedItem.title} />
					</div>
					<p className='font-medium leading-6	text-[#42495B] mt-4'>{selectedItem.description}</p>
					<div className='ml-5'>
						<PrismicNextImage field={selectedItem.image} />
					</div>
				</div>
			</div>
			<div className='flex justify-center mt-9'>
				<PrismicNextLink field={selectedItem.link}>
					<Button type='secondary' text={sliceData.link_label} className='border-transparent mx-auto' />
				</PrismicNextLink>
			</div>
		</section>
	)
}

export default DataJourney
