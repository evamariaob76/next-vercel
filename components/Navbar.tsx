import styles from './NavBar.module.css'
import { ActiveLink } from './ActiveLink'

export const Navbar = () => {
  const menuItems = [
    {
        text: 'Home',
        href: '/'
    },
    {
        text: 'About',
        href: '/about'
    },
    {
        text: 'Contact',
        href: '/contact'
    },
    {
        text: 'Pricing',
        href: '/pricing'
    },
];
  return (
    <div>
          <nav className={styles['menu-container']}>

            {menuItems.map (menuItems =>(
                <ActiveLink key={menuItems.href} text= {menuItems.text} href={menuItems.href}>{menuItems.text}</ActiveLink>

            ))}
         {/* <ActiveLink text= "Home" href="/">Home</ActiveLink>
          <ActiveLink text= "About" href="/about">About</ActiveLink> 
          <ActiveLink text= "Contact"href="/contact">Contact</ActiveLink>
          <ActiveLink text= "Pricing"href="/pricing">Pricing</ActiveLink>*/}

      </nav>
    </div>
  )
}
