import{  React, Component }from 'react'
import './OurPaterner.css'
class ourParteners extends Component{
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
        return(
            <div className="paterner">
                <div><h1> Paterner</h1></div>
                <div className ="container-paterner">
                    <img src="https://cdn.pixabay.com/photo/2017/09/21/13/32/girl-2771936_960_720.jpg" alt="partener"/>
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
            </div>
        )
            
        
    }
}
export default ourParteners