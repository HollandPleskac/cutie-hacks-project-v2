import Dashboard from '../assets/Dashboard'

function SideLabel({ name }) {
  return <div className="flex items-center hover:bg-blue-600 rounded transition duration-100 cursor-pointer">
    <div className="mr-2 w-[30px] flex justify-center items-center" >
      <Dashboard />
    </div>
    <h3 className='text-white'>{name}</h3>
  </div>
}

export default SideLabel
