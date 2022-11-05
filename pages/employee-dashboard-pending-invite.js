import Template from "../components/Template"
import { useState } from 'react'
import Link from 'next/link'

function EmployeeDashboardPendingInvite() {
  return <Template >

    <div className="w-full h-full flex flex-col justify-center items-center py-8 px-20" >

      <div className=" flex justify-center gap-8" >
        <DashboardBox1 />
        <DashboardBox2 />
      </div>
      <Link href="employee-dashboard">
        <button className="mt-4 bg-blue-400 p-4 rounded text-white" >Accept Invite</button>
      </Link>
    </div>
  </Template>
}

function DashboardBox1() {
  const [signed, setSigned] = useState(false)
  return <div className="flex flex-col items-center" >
    <div className="w-[400px] h-[430px] border-2 border-gray-300 rounded mb-4 p-6" >
      <h3 className="text-lg mb-2" >Add Contract of Employment</h3>
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Start Date" disabled="disabled" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Start Date" disabled="disabled" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Compensation ($)" disabled="disabled" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Job Duties" disabled="disabled" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Excempt Status" disabled="disabled" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Excempt Status" disabled="disabled" />
    </div>
    {signed && <button onClick={() => { setSigned((prevState) => !prevState) }} className="w-full bg-gray-500 rounded text-white py-2 hover:bg-gray-600 transition duration-100" >Take away Signature</button>}
    {!signed && <button onClick={() => { setSigned((prevState) => !prevState) }} className="w-full bg-blue-500 rounded text-white py-2 hover:bg-blue-600 transition duration-100" >Sign</button>}

  </div>
}

function DashboardBox2() {
  const [signed, setSigned] = useState(false)

  return <div className="flex flex-col items-center" >
    <div className="w-[400px] h-[430px] border-2 border-gray-300 rounded mb-4 p-6" >
      <h3 className="text-lg mb-2" >Employment Letter</h3>
      <textarea type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Employment Letter" disabled="disabled" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Company Signature" disabled="disabled" />

    </div>
    {signed && <button onClick={() => { setSigned((prevState) => !prevState) }} className="w-full bg-gray-500 rounded text-white py-2 hover:bg-gray-600 transition duration-100" >Take away Signature</button>}
    {!signed && <button onClick={() => { setSigned((prevState) => !prevState) }} className="w-full bg-blue-500 rounded text-white py-2 hover:bg-blue-600 transition duration-100" >Sign</button>}

  </div>
}


export default EmployeeDashboardPendingInvite
