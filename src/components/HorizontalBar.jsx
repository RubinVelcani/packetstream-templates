'use client'
const HorizontalBar = ({ selected }) => {
	return <span className={`inline-block w-[120px] h-2 bg-[#007BFF] rounded ${selected ? 'opacity-1' : 'opacity-20'}`}></span>
}

export default HorizontalBar