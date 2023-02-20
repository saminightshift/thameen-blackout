import { Logo } from '@components';

export default function LogoHeader() {
  return (
    <>
    <div className="grid grid-cols-6 top-0 m-0">
      <div className='col-span-1'>
        <Logo />
      </div>
        <div className='col-span-5'>
          <span>&nbsp;</span>
      </div>
    </div>
    </>
  )
}