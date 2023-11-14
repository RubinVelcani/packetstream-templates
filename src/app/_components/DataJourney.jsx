'use client'
import { useState } from 'react'
import ChevronRight from '@/assets/icons/chevronRight'

const DataJourneyItems = [
	{
		heading: 'Residential Proxies',
		subHeading: 'the way to get more accurate data',
		details:
			'PacketStream: Navigating the Future of Residential Proxies with Unparalleled Power and Reliability. Your journey through the web, supercharged by our innovative residential proxy network, ensures you are always a step ahead, with data and content from across the globe at your fingertips, delivered with unmatched speed and security.',
	},
	{
		heading: 'Packeter program',
		subHeading: 'the way to earn money by sharing bandwidth',
		details:
			'PacketStream: Navigating the Future of Residential Proxies with Unparalleled Power and Reliability. Your journey through the web, supercharged by our innovative residential proxy network, ensures you are always a step ahead, with data and content from across the globe at your fingertips, delivered with unmatched speed and security.',
	},
	{
		heading: 'Reseller API',
		subHeading: 'the proxy infrastructure. white-labeled',
		details:
			'PacketStream: Navigating the Future of Residential Proxies with Unparalleled Power and Reliability. Your journey through the web, supercharged by our innovative residential proxy network, ensures you are always a step ahead, with data and content from across the globe at your fingertips, delivered with unmatched speed and security.',
	},
	{
		heading: 'Scraper+',
		subHeading: 'the scraping infrastructure',
		details:
			'PacketStream: Navigating the Future of Residential Proxies with Unparalleled Power and Reliability. Your journey through the web, supercharged by our innovative residential proxy network, ensures you are always a step ahead, with data and content from across the globe at your fingertips, delivered with unmatched speed and security.',
	},
	{
		heading: 'Marketplace',
		subHeading: 'the data marketplace',
		details:
			'PacketStream: Navigating the Future of Residential Proxies with Unparalleled Power and Reliability. Your journey through the web, supercharged by our innovative residential proxy network, ensures you are always a step ahead, with data and content from across the globe at your fingertips, delivered with unmatched speed and security.',
	},
]

const DataJourney = () => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(0)
	const selectedItem = DataJourneyItems[selectedItemIndex]

	return (
		<section className='mt-52'>
			<h2 className='text-[40px] font-bold'>Supporting you on every step of your data journey</h2>
			<div className='flex justify-between gap-[120px] mt-20'>
				<div className='w-full max-w-[400px] flex flex-col gap-6'>
					{DataJourneyItems.map(({ heading, subHeading }, index) => {
						const isSelected = selectedItemIndex === index
						return (
							<div
								key={heading}
								onClick={() => setSelectedItemIndex(index)}
								className={`relative flex justify-between items-center border-2 ${
									isSelected ? 'border-[#007BFF]' : 'border-transparent'
								} rounded py-4 pl-6 pr-4 cursor-pointer`}
							>
								<div className='flex flex-col gap-1'>
									<h2 className='text-[#007BFF] font-bold leading-6	'>{heading}</h2>
									<p className='text-[#42495B] font-semibold'>{subHeading}</p>
								</div>
								{selectedItem === DataJourneyItems[index] && (
									<div className='absolute right-4'>
										<ChevronRight />
									</div>
								)}
							</div>
						)
					})}
				</div>
				<div className=''>
					<h3 className='font-bold text-[32px] text-[#262626]'>{selectedItem.heading}</h3>
					<p className='font-medium leading-6	text-[#42495B] mt-4'>{selectedItem.details}</p>
				</div>
			</div>
			<button className='flex items-center gap-2 py-2.5	pl-6 pr-4 mx-auto mt-8 text-[#007BFF] font-bold leading-8'>
				Learn more <ChevronRight className='mt-0.5' />
			</button>
		</section>
	)
}

export default DataJourney
