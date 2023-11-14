'use client'
import ChevronRight from '../assets/icons/chevronRight'

type ButtonPropType = {
	text: string
	type: 'primary' | 'secondary'
	className?: string
}
const primaryButtonStyle = 'bg-[#007BFF] text-white border-2 border-transparent'
const secondaryButtonStyle = 'bg-transparent text-[#007BFF] border-2 border-[#007BFF]'

const Button = ({ type, text, className }: ButtonPropType) => {
	const style = type === 'primary' ? primaryButtonStyle : secondaryButtonStyle
	return (
		<button className={`flex items-center gap-2 px-6 py-2.5 rounded font-bold ${style} ${className}`}>
			{text}
			{type === 'secondary' && <ChevronRight />}
		</button>
	)
}

export default Button
