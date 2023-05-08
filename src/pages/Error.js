import { Link } from 'react-router-dom';

import img from './error.gif';
import './error.css';




function ErrorPage(){
    return(
        <div className='error-wrapper'>
        <h1>An error occured</h1>
        <p>Im still working on some pages tho =)</p>
        <img className='error-img' style={{ display: 'block', width: "250px", height: "250px",objectFit: 'contain', margin: "0 auto", marginTop: "30px"}}  src={img} alt="Error"/>
        <button className='home-btn error-btn'>
        <Link to="/">Back to Home Page</Link>
        </button>
        </div>
    )
}

export default ErrorPage;