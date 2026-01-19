import Center from "./center"

const Hero = (props) => {
  return (
    <div className="bg-[#cee2f5] py-2">
        <Center details={props.details}/>
    </div>
  )
}

export default Hero