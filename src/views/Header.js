import CenterMenuHeader from "../components/CenterMenuHeader"
import LogoHeader from "../components/LogoHeader"
import RightMenuHeader from "../components/RightMenuHeader"
import logo from '../media/logo.svg';


export default function Header() {
  return (
    <div className='header'>
      <LogoHeader logo={logo} />
      <CenterMenuHeader />
      <RightMenuHeader />
    </div>
  )
}