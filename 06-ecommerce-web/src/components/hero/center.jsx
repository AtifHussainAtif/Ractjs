import Left from "./left"
import Right from "./right"

const Center = () => {
  return (
    <div className=" flex justify-between h-screen gap-2">
    <Left />
    <Right />
    </div>
  )
}

export default Center