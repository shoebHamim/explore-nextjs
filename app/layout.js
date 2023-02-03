import './globals.css'
import { Montserrat } from '@next/font/google'
const montserrat=Montserrat({
  weight:['400','700'],
  subsets:['latin'],
  variable:'--font-montserrat'
})
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head />
      <body className={`${montserrat.className} mx-32`}>
        <nav   >
          <ul className='flex gap-6'>
          <h2><a href="/">Logo</a></h2>
            <li><a href="./about">About</a></li>
            <li><a href="">Sign Up</a></li>
          </ul>
        </nav>
        
        {children}</body>
    </html>
  )
}
