const backgroundStyles = {
  width: '100%',
	backgroundImage: `url('/gradientSectionBackground.png')`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
}

const GradientBackgroundWrapper = ({ children }) => {
	return (
		<section style={backgroundStyles}>
			<div className='p-20'>{children}</div>
		</section>
	)
}

export default GradientBackgroundWrapper
