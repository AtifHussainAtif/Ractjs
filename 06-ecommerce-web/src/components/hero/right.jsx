import Box from "./box"


const Right = (props) => {

  return (
    <div className="w-[50%]  flex flex-wrap p-1">
      {props.details.map((e, idx) => {
          return <Box key={idx} type={e.type} items={e.items} color={e.background}/>
        })}
      </div>
  )
}

export default Right