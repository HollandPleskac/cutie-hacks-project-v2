import Header from "./Header"
import SideLabel from './SideLabel'

function Template(props) {
  return <div className="h-screen flex flex-col" >
    <Header />
    <div className="flex h-full" >
      <div className="w-[250px] bg-blue-500 p-4 h-full" >
        <SideLabel name="Dashboard" />
      </div>
      <div className="flex-1 h-full" >
        {props.children}
      </div>
    </div>
  </div>
}

export default Template
