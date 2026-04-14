
const card = (props) => {
  return (
    <div className="card">
        <div className="top">
         <img src={props.brandLogo} alt="" />
         <button >save</button>
        </div>
        <div className="center">
         <h4>{props.company} <span>{props.posted}</span></h4>
         <h2>{props.position}</h2>
                <span><button className="button_1">{props.button1} </button><button className="button_1">{props.button2}</button></span>  
                <hr />
        </div>
        <div className="bottom">
          <div className="pay">
            <h3>{props.payment}</h3>
            <h5>{props.location}</h5>
          </div>
        <div className="button_apply">
          <button className="button_2">Apply now</button>
        </div>
        </div>
      </div>
  )
}

export default card