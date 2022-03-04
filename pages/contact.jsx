
import Link from 'next/link'
import { MainLayout } from '../components/layouts/MainLayout'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <MainLayout>
         <h2>CONTACT</h2>
        <h1 className={'title'}>
         {/* Ir a  <a href="/about">About</a>*/}
     
         <Link href='/'> Home</Link>
        </h1>
        

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.jsx</code>
        </p>

    </MainLayout>
  )
}
