import { PrismicNextLink, PrismicNextImage } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'

import Button from '../../components/Button'

/**
 * Component for "InformationCard" Slices.
 */
const InformationCard = ({ slice }) => {
	const sliceData = slice.primary

	switch (slice.variation) {
		case 'horizontalWithButton':
			return (
				<section className='mt-[120px]' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<div className='text-[40px] text-[#242424] font-bold'>
						<PrismicRichText field={sliceData.heading} />
					</div>
					<div className='flex justify-between gap-10 mt-6'>
						<div className=''>
							<p className='text-2xl mb-10'>{sliceData.subheading}</p>
							<PrismicNextLink field={sliceData.button_link}>
								<Button type='secondary' text={sliceData.button_label} />
							</PrismicNextLink>
						</div>
						<PrismicNextImage field={sliceData.image} />
					</div>
				</section>
			)
		default:
			return (
				<section className='mt-[120px] text-center' data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
					<div className='text-[40px] text-[#242424] font-bold'>
						<PrismicRichText field={sliceData.heading} />
					</div>
					<div className='flex justify-between gap-10 mt-6'>
						<p className='text-2xl mb-10'>{sliceData.subheading}</p>
						<PrismicNextImage field={sliceData.image} />
					</div>
				</section>
			)
	}
}

export default InformationCard
