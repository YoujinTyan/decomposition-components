export default function LogoHeader({ logo }) {
  return (
    <div className='logo'>
      <a href='#home' className='a-logo'>
        <img src={logo} alt='logo' />
      </a>
    </div>  
  );
}