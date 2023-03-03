import Image from 'next/image'
import Link from 'next/link'
import { Ticker } from '../components/Ticker'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-mainbg font-[Roboto]">
        <Ticker />
        <div className="absolute bottom-0 right-0 h-64 w-96 bg-gradientbg bg-blur"></div>
        <header className="m-10 b-1 flex justify-between items-center mb-11">
          <Link href='/'>
            <Image
              className="block"
              src="/ilios-logo.png"
              alt="Ilios Token"
              width="111"
              height="89"
            />
          </Link>
          <nav className="tablet:hidden">
            <ul
              className="list-none text-white"
            >
              <li className='inline'><Link href='/'>Ilios Token</Link></li>
              <li className='inline text-gray-700 mx-2.5'>{' '}/{' '}</li>
              <li className='inline'><Link href='/governance'>Governance</Link></li>
              <li className='inline text-gray-700 mx-2.5'>{' '}/{' '}</li>
              <li className='inline'><Link href='/white-paper'>White Paper</Link></li>
              {/*<li className='inline text-gray-700 mx-2.5'>{' '}/{' '}</li>
              <li className='inline'>Community</li> */}
            </ul>
          </nav>
          {/* <a href="https://www.instagram.com/iliostoken/" className="px-9 py-4 bg-white rounded-full text-color1">
            Connect with us
          </a> */}
        </header>
        {children}
      </body>
    </html>
  )
}
