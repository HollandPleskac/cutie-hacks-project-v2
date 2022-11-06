import Link from 'next/link'

function Login() {
  return <div className="h-screen w-full bg-blue-500 flex items-center justify-center" >
    <div className=" w-[400px] bg-white rounded flex flex-col items-center justify-center p-8" >
      <h3 className="text-xl  mb-4" >Company Login</h3>
      <input type="text" className="p-2 w-full border-2 border-gray-300 rounded mb-4" placeholder="email" />
      <input type="text" className="p-2 w-full border-2 border-gray-300 rounded mb-4" placeholder="password" />
      <Link href='company-dashboard' >
        <button className="w-full bg-blue-500 p-2 text-white rounded border-2 border-blue-500 hover:border-blue-600 hover:bg-blue-600 transition duration-100"  >Login</button>

      </Link>
    </div>
  </div>
}

export default Login
