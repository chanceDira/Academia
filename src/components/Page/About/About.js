import {React, Component }from 'react'
import img1 from '../../../assets/CenterFoto/img7.png'
import './About.css'
class About extends Component {
    state={
        isOpen: false,
        btnOpen:'Read more'
    }
    openHandler= () =>{
        const less=this.state.isOpen
       
        this.setState({isOpen:!less})
        console.log(less);
        if(!less)
            this.setState({btnOpen:'less'})  
        else
        this.setState({btnOpen:'Read more'})  
    }
    render(){
        return (
            <div className="About">
                <div>
                    <h1 > About Us</h1>
                </div>
                <div className="about-panel">    
                <div className="about-panel-item">

                </div> 
                <p>Akagera & Rhein® Competence Center, is an East-Africa based company 
                    registered under Rwanda Law governing companies N°17/2018 of 13/04/2018,
                    under RDB No:  specialized in international languages learning,
                    
                    international and intercultural exchange issues by investing in
                    consultancy, {this.state.isOpen ?
                        <span>
                     qualification, to improve the knowledge and understanding
                    between the global market of opportunities and possibilities to the 
                    
                    destinations of Akagera and Rhine rivers’ countries by facilitating  
                    the interlinkage related to international mobility by facilitating a 
                    successful stay, integration and participation in host and origin
                    countries. 
                    
                   
                    Personal development consists of activities that develop a person's
                    capability and potential, building human capital, facilitate employability,
                    and enhance quality of life and the realization of dreams and aspirations. 
                    Nowadays education is as much about what you learn as it is about the 
                    places that it can take you in your career and life in the future. 
                    <br/>
                    In a world that values mobility, integration, and a global vision 
                    of the world; having an international and intercultural qualifications 
                    and experience is no longer just a consideration but a must.

                    <br />
                    <br />
                
                    The World is being through the globalisation and international 
                    exchange opportunities more opener. People go often abroad for different
                    individual reasons such as doing business, studying, learning, training, 
                    working, doing internship, volunteering, visiting, reunification with 
                    their family, receiving medical care or for others global or national
                    interests. 
                    </span>:null }
                    <br />
                    <div className="button-involved" onClick={this.openHandler}>{this.state.btnOpen}</div>
                    </p>
                   
                        
                                
                </div>
            </div>
        )
    }
}
export default About