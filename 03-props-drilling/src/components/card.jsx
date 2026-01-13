

const Card = (props) => {
    return   <div className="card">
      <div className="top">

        <img src={props.logo}alt="" />
        <button>Save <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RZY3wa7G_QY8b-bt6Dxr8xoNZGNqrRxkXQ&s" alt="" /></button>

      </div>
      <div className="center">
        <div className="tag">
          <h4>{props.company}<span>{props.date}</span></h4>
          <h3>{props.position}</h3>
          <div>
            <h5>{props.tag1}</h5>
            <h5>{props.tag2}</h5>
           
          </div>
        </div>

      </div>
      <div className="bottom">
          <div>
            <h5>{props.salary}</h5>
            <span>{props.location}</span>
          </div>
          <button>Apply Now</button>
      </div>
    </div>
}

export default Card;