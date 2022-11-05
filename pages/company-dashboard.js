import Template from "../components/Template"

function EmployeeDashboard() {
  return <Template >

    <div className="w-full h-full flex justify-center items-center py-8 px-20 gap-x-8" >
      <div className="w-full h-full " >
        <div className="flex flex-col h-full border-2 border-gray-300 rounded mb-4 p-6">
          <h1 className="mb-4 text-lg" >Employees at Company</h1>
          <div className="flex-1 " >
            <Employee name="Holland Pleskac" email="hples933@ucr.edu" pending={false} />
          </div>
        </div>

      </div>
      <div className="w-full h-full flex flex-col gap-y-8 " >
        <div className="h-1/3 p-6 border-2 border-gray-300 rounded" >
          <h3 className="text-lg mb-3" >Invite an Employee</h3>
          <h4  >Invite an employee by their email address associated with<br /> their work by clicking the button below.</h4>
          <button className="mt-3 bg-blue-500 p-4 rounded text-white" >Invite by Email</button>
        </div>
        <div className="h-2/3 border-2 border-gray-300 rounded p-8" >
          <Employee name="Noah Snodgrass" email="nsnod384@ucr.edu" pending={true} />
        </div>
      </div>

    </div>
  </Template>
}

function Employee(props) {
  if (props.pending) {
    return <div className="p-4 rounded bg-blue-400 text-white" >
      <h3>{props.name}</h3>
      <h4 className="text-white" >{props.email}</h4>
    </div>
  } else {
    return <div className="p-4 rounded bg-blue-500 text-white" >
      <h3>{props.name}</h3>
      <h4 className="text-white" >{props.email}</h4>
    </div>
  }
}

export default EmployeeDashboard
