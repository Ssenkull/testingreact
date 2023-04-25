import img from './error.gif';

import './error.css';



function ErrorPage(){
    return(
        <div className='error-wrapper'>
        <h1>An error occured</h1>
        <p>Im still working on some pages tho =)</p>
        <img style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto", marginTop: "30px"}}  src={img} alt="Error"/>
        </div>
    )
}

export default ErrorPage;