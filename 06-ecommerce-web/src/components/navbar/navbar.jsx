import Links from './links'
import Logo from './logo'
import Register from './register'
const Navbar = () => {
  return (
    <div className="bg-white flex justify-between box-border px-7 py-7">
        <Logo />
        <Links />
        <Register />
    </div>
  )
}

export default Navbar