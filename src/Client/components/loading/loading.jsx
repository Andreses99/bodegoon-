import {Spinner} from 'reactstrap';
import './loading.css'
const  Loading =()=>{

    return(

        <div className="loading-container">
            <div  className="loading-content">
                
                <Spinner color='primary' className='spinner-loading'/>

            </div>
               
            
        </div>
    )

}

export default Loading;