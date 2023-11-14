import { headers } from "next/headers";

import { PrismicPreview } from '@prismicio/next'
// import { repositoryName } from '@/prismicio'
import { repositoryName } from '../prismicio'

import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
	title: 'Packetstream',
	description: 'Bridging your data to the world. Securely and Swiftly',
}

export default function RootLayout({ children }) {
	const headersList = headers()

  const pathname = headersList.get('next-url')

	return (
		<html lang='en'>
			<body>
				<Header pathname={pathname} />
				<div className='w-full max-w-[1260px] mx-auto overflow-x-visible'>{children}</div>
				<PrismicPreview repositoryName={repositoryName} />
				<Footer />
			</body>
		</html>
	)
}
