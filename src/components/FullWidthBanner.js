import Image from "next/image"
import blackout from '/public/images/thameen-london-blackout.webp'

export default function FullWidthBanner() {
  return (
    <main className="banner-container">
      <div className="">
        <Image src={blackout} width={1920} height={1080} style={{objectFit: 'cover', objectPosition: 'center'}} priority alt="Thameen London Reboot" id="fw-banner" />
      </div>
    </main>
  )
}