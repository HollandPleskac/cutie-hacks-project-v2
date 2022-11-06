import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center" >
      <div className='w-full p-6 flex justify-between items-center shadow-md ' >
        <Image src="/logo header secure employ.png" alt="logo"
          width={220}
          height={100} />
        <div className='flex gap-4' >
          <Link href="/auth-type-login" >
            <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded' >Login </button>
          </Link>
          <Link href="/auth-type-signup" >
            <button className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded' >Sign up </button>
          </Link>
        </div>
      </div>
      < div className="flex  flex-col justify-center items-center h-full"  >
        <h1 className="text-6xl font-bold mb-6" >Trust and Security</h1>
        <h2 className="text-xl text-gray-400" >Create a brand of trust with your employees</h2>
      </div >
    </div >
  )
}
