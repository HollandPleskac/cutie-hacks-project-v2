import Settings from '../assets/Settings'
import Person from '../assets/Person'
import Signout from '../assets/Signout'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return <div className="pl-0 px-8 py-2 flex shadow-md justify-between items-center" >
    <div className=" w-[250px] flex justify-center items-center border-r border-gray-400 h-[60px]" >
      {/* <div className=" bg-green-400 p-4 mr-2" >
        L
      </div>
      Header */}
      <Image src="/logo header secure employ.png" alt="logo"
        width={220}
        height={100} />
    </div>
    <div className="flex justify-between items-center gap-x-2" >
      <Link href={"/"} >
        <Settings className="border-2 border-gray-400 rounded-full p-2" height="40" width="40" />
      </Link>
      <Link href={"/"} >
        <Person className="border-2 border-gray-400 rounded-full p-2" height="40" width="40" />
      </Link>
      <Link href={"/"} >
        <Signout className="border-2 border-gray-400 rounded-full p-2" height="40" width="40" />  
      </Link>
    </div>
  </div >
}

export default Header
