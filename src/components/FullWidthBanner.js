import Image from "next/image"
import blackout from '/public/images/thameen-london-blackout.webp'

export default function FullWidthBanner() {
  return (
    <main className="banner-container">
      <div className="relative w-full h-full">
        <Image src={blackout} width={1920} height={1080} style={{objectFit: 'cover', objectPosition: 'center', width: '100vw', height: '100vh',}} priority alt="Thameen London Reboot" id="fw-banner" />
      </div>
    </main>
  )
}