import styles from '../card/card.module.css';
  

const Card = () =>{
   
   return <div className={styles.parent}>


  
   <div className={styles.card}>
      <div className={styles.top}>

        <img src="#" alt="" />
        <button>Save<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0RZY3wa7G_QY8b-bt6Dxr8xoNZGNqrRxkXQ&s" alt="" /></button>

      </div>
      <div className={styles.center}>
        <div className={styles.tag}>
          <h4>Amazon<span>5 days ago</span></h4>
          <h3>Senior UI/UX Designer</h3>
          <div>
            <h5>Part Time</h5>
            <h5>Full Time</h5>
           
          </div>
        </div>

      </div>
      <div className={styles.bottom}>
          <div>
            <h5>$126/hr</h5>
            <span>Islamabad, Pakistan</span>
          </div>
          <button>Apply Now</button>
      </div>
    </div>
     </div>
   
}

export default Card