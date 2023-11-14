import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import Button from '../../components/Button'
import ChevronRight from '../../assets/icons/chevronRight'

/**
 * Component for "CasesGrid" Slices.
 */
const CasesGrid = ({ slice }) => {
	//TODO: Change button text to button label in Slicemachine and front
	//TODO: Change item_title to title (etc.) in Slicemachine and front
	//TODO: When the site is finished, create custom utility classes for basic design values from Figma

	const sliceData = slice.primary
	const sliceItems = slice.items

	const group1Items = sliceItems.filter(item => item.belongs_to_group == 1)
	const group2Items = sliceItems.filter(item => item.belongs_to_group == 2)

	switch (slice.variation) {
		case ' ss':
			break
		default:
			return (
				<section className='mt-[120px]' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<div className='text-[40px] text-[#242424] font-bold'>
						<PrismicRichText field={sliceData.heading} />
					</div>
					<p className='text-2xl text-[#42495B] mt-6'>{sliceData.subheading}</p>
					<div className='w-full flex justify-between gap-[34px] mt-10'>
						<div className=''>
							<h3 className='text-2xl	font-bold'>{sliceData.group_1_label}</h3>
							<div className='flex flex-col gap-6 mt-4'>
								{group1Items.map(({ item_title, item_description, item_link, item_image }) => (
									<PrismicNextLink field={item_link} key={item_title}>
										<div
											className='w-full flex items-start gap-6 rounded'
											style={{ padding: '16px', boxShadow: '2px 2px 24px 0 rgba(0, 0, 0, 0.08' }}
										>
											<PrismicNextImage field={item_image} />
											<div className='flex flex-col gap-2 items-start'>
												<div className='w-full flex justify-between items-center'>
													<h4 className='text-[#262626] font-semibold'>{item_title}</h4>
													<ChevronRight />
												</div>
												<p className='font-medium'>{item_description}</p>
											</div>
										</div>
									</PrismicNextLink>
								))}
							</div>
						</div>
						<div className=''>
							<h3 className='text-2xl	font-bold'>{sliceData.group_2_label}</h3>
							<div className='flex flex-col gap-6 mt-4'>
								{group2Items.map(({ item_title, item_description, item_link, item_image }) => (
									<PrismicNextLink field={item_link} key={item_title}>
										<div
											className='w-full flex items-start gap-6 rounded'
											style={{ padding: '16px', boxShadow: '2px 2px 24px 0 rgba(0, 0, 0, 0.08' }}
										>
											<PrismicNextImage field={item_image} />
											<div className='flex flex-col gap-2 items-start text-[#262626]'>
												<div className='w-full flex justify-between items-center'>
													<h4 className='text-[#262626] font-semibold'>{item_title}</h4>
													<ChevronRight />
												</div>
												<p className='font-medium'>{item_description}</p>
											</div>
										</div>
									</PrismicNextLink>
								))}
							</div>
						</div>
					</div>
					<div className='w-full flex justify-center mt-20'>
						<PrismicNextLink field={sliceData.button_link}>
							<Button type='secondary' text={sliceData.button_label} />
						</PrismicNextLink>
					</div>
				</section>
			)
	}
}

export default CasesGrid
