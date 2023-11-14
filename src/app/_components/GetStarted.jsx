import GradientBackground from '@/components/gradientBackground'
import Button from '@/components/Button'

const GetStarted = () => {
	return (
		<section className='w-full'>
			<GradientBackground>
				<h2 className='text-[40px] text-center text-[#242424] font-bold mb-14'>Ready to get started?</h2>
				<h3 className='text-2xl text-[#42495B] text-center font-medium'>Join more than 5,000 happy customers</h3>
				<div className='flex justify-center gap-6 mt-10'>
					<Button type='primary' text='GET STARTED' />
					<Button type='secondary' text='Earn money' />
				</div>
			</GradientBackground>
		</section>
	)
}

export default GetStarted
