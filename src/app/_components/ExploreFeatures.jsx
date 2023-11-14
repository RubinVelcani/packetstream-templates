'use client'
import { useState } from 'react'
import Button from '@/components/Button'
import HorizontalBar from '@/components/HorizontalBar'
import Link from 'next/link'

const FeaturedItems = [
	{
		name: 'Earn money',
		title: 'PACKETER',
		description:
			'Packeters share their un-utilized bandwidth with the PacketStream network and get paid for participating. The PacketStream service measures the amount of bandwidth shared and credits your account accordingly.',
	},
	{
		name: 'Earn time',
		title: 'TIMER',
		description:
			'Packeters share their un-utilized bandwidth with the PacketStream network and get paid for participating. The PacketStream service measures the amount of bandwidth shared and credits your account accordingly.',
	},
	{
		name: 'Earn respect',
		title: 'RESPECTER',
		description:
			'Packeters share their un-utilized bandwidth with the PacketStream network and get paid for participating. The PacketStream service measures the amount of bandwidth shared and credits your account accordingly.',
	},
	{
		name: 'Earn connections',
		title: 'CONNECTER',
		description:
			'Packeters share their un-utilized bandwidth with the PacketStream network and get paid for participating. The PacketStream service measures the amount of bandwidth shared and credits your account accordingly.',
	},
	{
		name: 'Earn growth',
		title: 'GROWER',
		description:
			'Packeters share their un-utilized bandwidth with the PacketStream network and get paid for participating. The PacketStream service measures the amount of bandwidth shared and credits your account accordingly.',
	},
	{
		name: 'Earn data',
		title: 'ANALYZER',
		description:
			'Packeters share their un-utilized bandwidth with the PacketStream network and get paid for participating. The PacketStream service measures the amount of bandwidth shared and credits your account accordingly.',
	},
]

const ExploreFeatures = () => {
	const [selectedFeatureIndex, setSelectedFeatureIndex] = useState(1)
	const selectedFeature = FeaturedItems[selectedFeatureIndex]

	return (
		<section className='mt-[120px]'>
			<h2 className='text-[40px] text-[#242424] font-bold'>Explore the features</h2>
			<p className='text-2xl text-[#42495B] mt-6'>
				Elevating Your Online Experience by Demystifying the Intricacies of the Digital World. We don’t just simplify your online journey; we empower
				it, providing you with a suite of tools meticulously crafted to ensure seamless navigation through the internet’s vast expanses.
			</p>
			<div className='w-full flex justify-between gap-[34px] mt-10'>
				{FeaturedItems.map((feature, index) => {
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
					<h3 className='text-[32px] font-bold'>{selectedFeature.name}</h3>
					<span className='inline-block	text-xs font-bold bg-[#E9E9E9] rounded px-2 py-1.5 mt-3'>{selectedFeature.title}</span>
					<p className='w-full max-w-[480px] text-[#42495B] font-medium mt-6 mb-10'>{selectedFeature.description}</p>
					<Link href='/'>
						<Button type='primary' text='Try now' className='text-white font-bold bg-[#007BFF] rounded leading-8 py-2.5 px-8' />
					</Link>
				</div>
				<div className='w-full max-w-[580px] rounded-[40px] bg-[#FAFAFA]'></div>
			</div>
		</section>
	)
}

export default ExploreFeatures
