import Template from "../components/Template"

function EmployeeDashboard() {
  return <Template >

    <div className="w-full h-full flex flex-col justify-center items-center py-8 px-20 gap-y-8" >
      <div className="w-full h-3/5 flex gap-8" >
        <div className="h-full w-1/2 mb-4 p-6 border-2 border-gray-300 rounded" >
          <h3 className="text-lg mb-2" >Letter of employment</h3>
          <input type="text" className="w-full p-2 my-1 rounded border border-gray-300" value="Start Date" disabled="disabled" />
          <input type="text" className="w-full p-2 my-1 rounded border border-gray-300" value="Start Date" disabled="disabled" />
          <input type="text" className="w-full p-2 my-1 rounded border border-gray-300" value="Compensation ($)" disabled="disabled" />
          <input type="text" className="w-full p-2 my-1 rounded border border-gray-300" value="Job Duties" disabled="disabled" />
          <input type="text" className="w-full p-2 my-1 rounded border border-gray-300" value="Excempt Status" disabled="disabled" />
          <input type="text" className="w-full p-2 my-1 rounded border border-gray-300" value="Excempt Status" disabled="disabled" />
        </div>
        <div className="h-full w-1/2 mb-4 p-6 border-2 border-gray-300 rounded" >
          <h3 className="text-lg mb-2" >Letter of employment</h3>
          <textarea type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Employment Letter" disabled="disabled" />
          <input type="text" className="w-full p-2 my-2 rounded border border-gray-300" value="Company Signature" disabled="disabled" />

        </div>
      </div>
      <div className="w-full h-2/5 border-2 border-gray-300 p-6" >
        <h3 className="text-lg mb-2" >Paystub History</h3>
      </div>

    </div>
  </Template>
}

export default EmployeeDashboard
