import { Bebas_Neue } from 'next/font/google'
import Gallery from './components/Gallery'
import { Overlay } from './components/Overlay'

const bebas_neue = Bebas_Neue({ 
  subsets: ['latin'],
  weight: '400'
})

export default function Home() {
  return (
    <main
      className={bebas_neue.className}
    >
      <h1 className="text-center p-6 text-2xl" > Cosmic Cards </h1>
      
      {/* @ts-expect-error Async Server Component */}
      <Gallery />
      <Overlay />
    </main>
  )
}
