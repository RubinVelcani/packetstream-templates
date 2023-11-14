

const CardSliceVariations = [
  {
    title: '',
    description: ''
  }
]

const CardSlice = async ({variation}) => {

  return (
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
  )
}

export default CardSlice