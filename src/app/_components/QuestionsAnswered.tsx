import Button from '@/components/Button'
import QuestionsImage from '@/assets/images/questionsImage'

const QuestionsAnswered = () => (
	<section className='w-full mt-40'>
		<h2 className='text-[40px] text-[#242424] font-bold'>Get your questions answered</h2>
		<div className='flex justify-between gap-10 mt-6'>
			<div className=''>
				<h3 className='text-2xl mb-10'>Reach us out and we’ll be more than happy to talk.</h3>
				<Button type='secondary' text='Contact us' />
			</div>
			<QuestionsImage />
		</div>
	</section>
)

export default QuestionsAnswered
