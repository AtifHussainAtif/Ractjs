import Left from "./left"
import Right from "./right"

const Center = (props) => {
  return (
    <div className=" flex justify-between h-svh gap-2">
    <Left />
    <Right details={props.details}/>
    </div>
  )
}

export default Center