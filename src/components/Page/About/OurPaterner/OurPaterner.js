import {React, Component }from 'react'
import img1 from '../../../../assets/AupairFotos/pexels-kamaji-ogino-5093684.jpg'
import './OurPaterner.css'
class OurPaterner extends Component {
    state={
        isOpen: false,
        btnOpen:'more'
    }
    openHandler= () =>{
        const less=this.state.isOpen
       
        this.setState({isOpen:!less})
        console.log(less);
        if(!less)
            this.setState({btnOpen:'less'})  
        else
        this.setState({btnOpen:'more'})  
    }
    render(){
    return (
        <div className="our-paterner">
   
             <h1 className="our-pterner"> Our Paterner</h1>
             <img src={img1} alt="Our Paterner" />
             <p>
                Our Partners 
                Akagera & Rhein® Competence Center, works in cooperation with it is a sister 
                company Akagera & Rhein® Kompetenz Zentrum, a European based company registered 
                under German’s law governing companies Nr:0000 
                        
                {this.state.isOpen ?
                    <span> 
                A large cooperation and partnership with individuals, or other companies, 
                institutions, and organizations, is sought to reach a wide audience in order 
                to perfect and optimize our services. 
                </span>:null }
                <br />
                <div className="button-involved" onClick={this.openHandler}>{this.state.btnOpen}</div>
                </p>
          
        </div>
    )
    }
}
export default OurPaterner