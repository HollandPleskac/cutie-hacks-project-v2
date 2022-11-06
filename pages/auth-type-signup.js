import Link from "next/link"

function AuthTypeLogin() {
  return <div className="flex-col h-screen w-full bg-blue-500 flex items-center justify-center gap-8" >
    <h1 className="text-3xl text-white font-bold" >Who are you?</h1>
    <div className="flex gap-8" >
      <Link href="signup-employee" >
        <div className="p-12 bg-white rounded text-xl cursor-pointer" >
          Employee
        </div>
      </Link>
      <Link href="signup-company" >
        <div className="p-12 bg-white rounded text-xl cursor-pointer" >
          Company
        </div>
      </Link>

    </div>
  </div>
}

export default AuthTypeLogin
