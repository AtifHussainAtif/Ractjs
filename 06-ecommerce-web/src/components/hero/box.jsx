const Box = (props) => {
    console.log(props.color)
  return (
    <div className=" w-77 m-1.5 flex items-center justify-center px-3" style={{backgroundColor:props.color}}>
      <div className="w-[90%]">

        <h1 className="text-3xl mb-3 font-sans font-bold">{props.type}</h1>
        <p className="text-stone-500"><span>{props.items}</span> items</p>

        <h1 className="pt-2 ">
          <a href="" className="border-b-2 border-amber-700 text-2xl font-bold">
            Shop Now
          </a>
        </h1>

      </div>

    </div>
  );
};

export default Box;
