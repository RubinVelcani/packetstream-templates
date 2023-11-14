'use client'
import CarouselWrapper from '@/components/UIComponentWrappers/CarouselWrapper'

const testimonialItems = [
	{
		name: 'Robbie F.',
		details:
			"If you're not using PacketStream for your business intelligence automation, then do you really care about your business? All jokes aside though, PacketStream has been one of the most powerful tools in our companies arsenal. Cheers!",
	},
	{
		name: 'Fobbie R.',
		details:
			"If you're not using PacketStream for your business intelligence automation, then do you really care about your business? All jokes aside though, PacketStream has been one of the most powerful tools in our companies arsenal. Cheers!",
	},
	{
		name: 'Rubbie V.',
		details:
			"If you're not using PacketStream for your business intelligence automation, then do you really care about your business? All jokes aside though, PacketStream has been one of the most powerful tools in our companies arsenal. Cheers!",
	},
]

const Testimonials = () => {
	return (
		<section className='mt-52'>
			<h2 className='text-[40px] font-bold'>What our products helped our customers achieve</h2>
			<div className='w-full flex justify-between gap-[84px] mt-20'>
				<div className='w-full max-w-[560px]'>
					<p className=''>
						Throughout the years, our residential proxies have not merely been products; they have emerged as pivotal instruments, catalyzing a
						plethora of success stories across individuals and businesses alike.
					</p>
					<p>
						From furnishing critical data that shapes strategic decision-making to dismantling digital barriers and enabling access to geographically
						confined content, our proxies have been the silent architects behind myriad success narratives. 
					</p>
				</div>
				<CarouselWrapper className='relative w-full max-w-[580px] p-8' slidesToSlide={1}>
					{testimonialItems.map(({ name, details }) => (
						<div
							key={name}
							className='relative w-full max-w-[480px] text-2xl text-[#42495B] bg-white border-t border-l border-[#242424] rounded-2xl p-8'
						>
							<span className='absolute top-0 left-0 text-[100px] font-bold'>"</span>
							<p className=''>{details}</p>
							<h3 className='text-2xl text-[#262626] font-bold mt-6'>{name}</h3>
							<div className='absolute -z-10 top-4 left-4 w-full max-w-[480px] h-full bg-[#007BFF] rounded-2xl'></div>
						</div>
					))}
				</CarouselWrapper>
			</div>
		</section>
	)
}

export default Testimonials
