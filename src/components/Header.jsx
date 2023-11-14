import Logo from "../assets/Logo"
import Link from "next/link"
import NewIcon from "../assets/icons/newIcon"

const NavItems = [
  { label: 'Proxy', link: '/proxy' },
  { label: 'Packeter', link: '/packeter' },
  { label: 'Scraper+', link: '/scraper' },
  { label: 'Marketplace', link: '/marketplace' },
  { label: 'Pricing', link: '/pricing' },
  { label: 'Use Cases', link: '/use-cases' },
  { label: 'Resources', link: '/resources' },
  { label: 'Contact', link: '/contact' },
] 

const Header = async ({pathname}) => {
  
  return (
    <header className="flex items-center justify-between w-full max-w-[1260px] py-6 mx-auto">
      <Link href="/"  >
        <Logo />
      </Link>
      <nav>
        <ul className="flex items-center gap-6 justify-between">
          {NavItems.map(({ label, link }) => (
            <li key={label}>
              <Link href={link} className={`flex items-center gap-2 font-medium pb-2 -mb-2 ${pathname === link ? 'text-[#007BFF] border-b-2 border-[#007BFF]' : 'text-[#646464]'}`}>{label}{label === 'Scraper+' && <NewIcon />}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={`flex items-center gap-2 px-4 py-2 rounded font-bold bg-white text-[#007BFF] border-2 border-[#007BFF]`}>Getting started</button>
    </header>
  )
}

export default Header