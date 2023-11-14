'use client'

import ChevronRight from '@/assets/icons/chevronRight'
import Image from 'next/image'
import Link from 'next/link'

const residentialUseCases = [
	{
		title: 'Private Browsing',
		subheading: 'Prevent IP tracking and commercial data mining. Keep your online identity safe.',
		link: '/',
		icon: '',
	},
	{
		title: 'IP Ban Prevention',
		subheading:
			'Relay your traffic through residential IPs without being blocked or banned from web services that would normally block VPN/proxy access.',
		link: '/',
		icon: '',
	},
	{
		title: 'Geolocation Control',
		subheading: 'Specify the geolocation of your request and gain the benefits of viewing region-locked content from any location.',
		link: '/',
		icon: '',
	},
]

const commercialUseCases = [
	{
		title: 'Price Comparison',
		subheading: 'Learn how competitors algorithmically price their offerings to users all over the world.',
		link: '/',
		icon: '',
	},
	{
		title: 'Brand Protection',
		subheading: 'See how your brand is being represented online and search for improper use of IP and trademarks.',
		link: '/',
		icon: '',
	},
	{
		title: 'QA Testing',
		subheading: 'Test the performance and availability of your own web & mobile services from any geolocation in the world.',
		link: '/',
		icon: '',
	},
	{
		title: 'Ad Verification',
		subheading: "View your own pages to ensure your ad-partners aren't serving misleading advertisements and violating your ad policies.",
		link: '/',
		icon: '',
	},
	{
		title: 'Web Scraping ',
		subheading: 'Use web automation tools for market research & business intelligence without being throttled.',
		link: '/',
		icon: '',
	},
]

const UseCases = () => {
	return (
		<section className='mt-[120px]'>
			<h2 className='text-[40px] text-[#242424] font-bold'>Endless use cases</h2>
			<p className='text-2xl text-[#42495B] mt-6'>
				Embark on a Journey of Discovery and Innovation with PacketStream: In this section, we delve deep into a myriad of real-world scenarios,
				unveiling inventive and strategic ways to leverage the formidable power of our proxies. 
			</p>
			<div className='w-full flex justify-between gap-[34px] mt-10'>
				<div className=''>
					<h3 className='text-2xl	font-bold'>Residential use-cases include</h3>
					<div className='flex flex-col gap-6'>
						{residentialUseCases.map(({ title, subheading, link, icon }) => (
							<Link key={title} href={link}>
								<div className='w-full max-w-[500px]'>
									<Image src={icon} width={56} height={56} className='bg-[#F2F8FF]' />
									<div className=''>
										<h4 className=''>{title}</h4>
										<p className=''>{subheading}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
				<div className=''>
					<h3 className='text-2xl	font-bold'>Commercial use-cases include</h3>
					<div className='flex flex-col gap-6'>
						{commercialUseCases.map(({ title, subheading, link, icon }) => (
							<Link key={title} href={link}>
								<div className='w-full max-w-[500px]'>
									<Image src={icon} width={56} height={56} className='bg-[#F4FFF1]' />
									<div className=''>
										<h4 className=''>{title}</h4>
										<p className=''>{subheading}</p>
									</div>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
			<div className='flex justify-between gap-10 mt-20'>
				<div className='ml-20'></div>
				<div className='w-full max-w-[580px] rounded-[40px] bg-[#FAFAFA]'></div>
			</div>
			<button
				type='primary'
				text='Try now'
				className='flex justify-center items-center gap-2 bg-white text-[#007BFF] font-bold border-2 border-[#007BFF] rounded leading-8 py-2.5 px-8 mx-auto'
			>
				View all <ChevronRight />
			</button>
		</section>
	)
}

export default UseCases
