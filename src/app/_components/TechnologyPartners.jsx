import Image from 'next/image'
import GradientBackground from '../../components/GradientBackgroundWrapper'
import paypalLogo from '../../../public/paypalLogo.png'
import awsLogo from '../../../public/awsLogo.png'
import stripeLogo from '../../../public/stripeLogo.png'
import dockerLogo from '../../../public/dockerLogo.png'
import gaLogo from '../../../public/gaLogo.png'
import goLogo from '../../../public/goLogo.png'
import Link from 'next/link'

const partners = [paypalLogo, awsLogo, stripeLogo, dockerLogo, gaLogo, goLogo]

const TechnologyPartners = () => {
	return (
		<section className='w-full'>
			<GradientBackground>
				<h2 className='text-[40px] text-center text-[#242424] font-bold mb-14'>Technology partners</h2>
				<div className='flex gap-10'>
					{partners.map((partner, index) => (
						<div key={index} className='w-[160px] h-[100px] flex items-center justify-center border border-white rounded-lg'>
							<Link href="/">
								<Image src={partner} alt='partner' />
							</Link>
						</div>
					))}
				</div>
			</GradientBackground>
		</section>
	)
}

export default TechnologyPartners
