import Template from "../components/Template"
import { useState } from "react"

function EmployeeDashboard() {
  const [page, setPage] = useState(0);

  const handleClick = () => {
    setPage(1)
  }

  return <Template >

    <div className="w-full h-full flex flex-col justify-center items-center" >

      {
        page == 0 &&
        <>
          <div className=" flex justify-center gap-3" >
            <DashBoxInvite click={handleClick} />
          </div>
        </>
      }
      {page === 1 &&
        <>
          <div className=" flex justify-center gap-3" >
            <DashboardBox1 name="Letter of Employment" />
            <DashboardBox2 name="Employment Contract" />
          </div>
          <button className="mt-8 p-3 px-6 rounded text-white bg-blue-500" >Send Invite</button>
        </>
      }
    </div>
  </Template>
}

function DashboardBox1() {
  return <div className="flex flex-col items-center" >
    <div className="w-[400px] h-[430px] border-2 border-gray-300 rounded mb-4 p-6" >
      <h3 className="text-lg mb-2" >Add Contract of Employment</h3>
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="Start Date" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="End Date" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="Compensation ($)" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="Job Duties" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="Excempt Status" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="Excempt Status" />
    </div>
    <button className="w-full bg-blue-500 rounded text-white py-2 hover:bg-blue-600 transition duration-100" >Add</button>
  </div>
}

function DashboardBox2() {
  return <div className="flex flex-col items-center" >
    <div className="w-[400px] h-[430px] border-2 border-gray-300 rounded mb-4 p-6" >
      <h3 className="text-lg mb-2" >Employment Letter</h3>
      <textarea type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="Employment Letter" />
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="Company Signature" />

    </div>
    <button className="w-full bg-blue-500 rounded text-white py-2 hover:bg-blue-600 transition duration-100" >Add</button>
  </div>
}

function DashBoxInvite(props) {
  return <div className="flex flex-col items-center" >
    <div className="w-[400px] h-[430px] border-2 border-gray-300 rounded mb-4 p-6" >
      <h3 className="text-lg mb-2" >Invite employee by email address</h3>
      <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" placeholder="Email Address" />

    </div>
    <button onClick={props.click} className="w-full bg-blue-500 rounded text-white py-2 hover:bg-blue-600 transition duration-100" >Continue</button>
  </div>
}

export default EmployeeDashboard
