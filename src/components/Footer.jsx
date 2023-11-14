import Logo from '../assets/Logo'
import Image from 'next/image'
import Link from 'next/link'

const contactLinks = [
	{
		label: 'Sales',
		link: 'sales@packetstream.io',
	},
	{
		label: 'Support',
		link: 'support@packetstream.io',
	},
]

const productLinks = [
	{
		label: 'Proxy',
		link: '/',
	},
	{
		label: 'Scraper+',
		link: '/',
	},
	{
		label: 'Marketplace+',
		link: '/',
	},
]

const siteLinks = [
	{
		label: 'Home',
		link: '/',
	},
	{
		label: 'Pricing',
		link: '/',
	},
	{
		label: 'Use Cases',
		link: '/',
	},
	{
		label: 'Resources',
		link: '/',
	},
	{
		label: 'Contact',
		link: '/',
	},
]

const otherLinks = [
	{
		label: 'Packeter Program',
		link: '/',
	},
	{
		label: 'Affiliate Program',
		link: '/',
	},
	{
		label: 'Referral Program',
		link: '/',
	},
	{
		label: 'Terms',
		link: '/',
	},
	{
		label: 'Privacy',
		link: '/',
	},
]

const socialLinks = [
	{
		icon: 'li',
		link: '/',
	},
	{
		icon: 'x',
		link: '/',
	},
	{
		icon: 'fb',
		link: '/',
	},
]

const Footer = async () => {
	return (
		<footer className='bg-[#FAFAFA] py-6'>
			<div className='flex flex-col w-full max-w-[1260px] mx-auto'>
				<Link href='/'>
					<Logo />
				</Link>
				<div className='flex justify-between gap-[120px] text-sm text-[#262626] mt-10'>
					<div className='flex flex-col'>
						<h4 className='font-bold mb-4'>Contact</h4>
						<ul className='flex flex-col mb-8'>
							{contactLinks.map(({ label, link }) => (
								<li className='flex font-medium gap-1 mb-2' key={label}>
									<span className='w-[60px]'>{label}:</span>{' '}
									<Link className='text-[#007BFF] underline' href={link}>
										{link}
									</Link>
								</li>
							))}
						</ul>
						<h4 className='font-bold mb-4'>Follow</h4>
						<ul className='flex gap-4'>
							{socialLinks.map(({ icon, link }) => (
								<li className='flex font-medium gap-1 mb-2' key={icon}>
									<Link className='text-[#007BFF] underline' href={link}>
										<Image href={icon} className='w-6 h-6 rounded bg-[#CCCCCC]' />
									</Link>
								</li>
							))}
						</ul>
					</div>
					<div className=''>
						<h4 className='font-bold  mb-4'>Product</h4>
						<ul className='flex flex-col'>
							{productLinks.map(({ label, link }) => (
								<Link href={link} key={label}>
									<li className='font-medium mb-2'>{label}</li>
								</Link>
							))}
						</ul>
					</div>
					<div className=''>
						<h4 className='font-bold mb-4'>Site</h4>
						<ul className='flex flex-col'>
							{siteLinks.map(({ label, link }) => (
								<Link href={link} key={label}>
									<li className='font-medium mb-2'>{label}</li>
								</Link>
							))}
						</ul>
					</div>
					<div className=''>
						<h4 className='font-bold mb-4'>Other</h4>
						<ul className='flex flex-col'>
							{otherLinks.map(({ label, link }) => (
								<Link href={link} key={label}>
									<li className='font-medium mb-2'>{label}</li>
								</Link>
							))}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
