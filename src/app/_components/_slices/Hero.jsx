import HeroBackgroundImage from '@/assets/images/heroBackgroundImage'
import HeroScreenBackgroundImage from '@/assets/images/heroScreenBackgroundImage'
import HeroProxyImage from '@/assets/images/HeroProxyImage'
import Button from '@/components/Button'
import Link from 'next/link'

const variations = [
	{
		page: 'home',
		heading: 'Unlock Global Web Access with Our Residential Proxies',
		subHeading: 'PacketStream - Bridging your data to the world. Securely and Swiftly',
		link: '',
		statList: true,
		buttons: [
			{
				link: '/',
				text: 'GET STARTED',
				type: 'primary',
			},
			{
				link: '/',
				text: 'Earn money',
				type: 'secondary',
			},
		],
		image: <HeroScreenBackgroundImage />,
	},
	{
		page: 'proxy',
		heading: 'Unlock the Web with Our Residential Proxies. Harness the Power of Peer-to-Peer Bandwidth Sharing.',
		subHeading: 'Surf the Web Unrestrained. ',
		link: {
			to: '/',
			text: 'Learn how',
		},
		statList: true,
		buttons: [
			{
				link: '/',
				text: 'START EARNING NOW',
				type: 'primary',
			},
			{
				link: '/',
				text: 'Explore prices',
				type: 'secondary',
			},
		],
		image: <HeroProxyImage />,
	},
]

const HeroStatsItems = [
	{
		heading: '7M+',
		subheading: 'residential IPs',
	},
	{
		heading: '99%',
		subheading: 'uptime',
	},
	{
		heading: 'fair',
		subheading: 'pricing',
	},
	{
		heading: '5k+',
		subheading: 'happy clients',
	},
]

const Hero = async ({ variation }) => {
	const currentVariation = variations[variation]

	return (
		<section className='relative w-full flex flex-col justify-start mt-24 '>
			<div className='w-full flex flex-col'>
				<h1 className='text-[40px] font-bold mb-8'>{currentVariation.heading}</h1>
				<h2 className='text-2xl font-medium text-[#42495B] mb-16'>{currentVariation.subHeading}</h2>
				<div className='flex flex-col lg:flex-row items-start'>
					{currentVariation.statList &&
						HeroStatsItems.map(({ heading, subheading }) => (
							<div key={heading} className='flex gap-2 mr-10'>
								<span className='border-l border-[#42495B] h-[45px]'></span>
								<div className='flex flex-col gap'>
									<h3 className='font-black'>{heading}</h3>
									<p className='font-medium'>{subheading}</p>
								</div>
							</div>
						))}
				</div>
				{currentVariation && (
					<div className='mt-20 flex items-center gap-6'>
						{currentVariation.buttons.map(button => (
							<Link key={button.text} href={button.link}>
								<Button type={button.type} text={button.text} />
							</Link>
						))}
					</div>
				)}
			</div>
			<div className='absolute -right-[50px]'>
				<div className='w-full relative flex justify-end items-center right-0 -mt-[100px]'>
					<HeroBackgroundImage className='z-20 ' />
					{currentVariation.image && <div className='absolute z-30'>{currentVariation.image}</div>}
				</div>
			</div>
		</section>
	)
}

export default Hero
