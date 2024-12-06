
const Section = (props) => {
    return ( 
        <>
          <h6>{props.title}</h6>
            {props.titleAling == "left" ? 
             (<h6>titulo a esquerda</h6>) : 
             (<h6>titulo no centro</h6>)}
          {props.children}
        </>
     );
}
  
export default Section;