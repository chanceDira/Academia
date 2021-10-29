import {React, Component }from 'react'
import img1 from '../../../../assets/AupairFotos/pexels-kamaji-ogino-5093684.jpg'
import './OurTeam.css'
// import './style.css'
class OurTeam extends Component {
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
        <div className="our-team">
   
             <h1 className="our-team"> Our Team</h1>
             <img src={img1} alt="Our Team" />
             <p>
             Our Team 

                Our team of dedicated professionals, volunteers, mentors, and guides dispatched especially
                around in the countries of Akagera and Rhine rivers’ regions, are aimed to provide through 
                heir service, a qualified support to our customers, to make the right decisions not just
                when applying for a job, study, training, internship etc. 
                        
                {this.state.isOpen ?
                    <span> 

                    abroad, but also accompanying
                    them abroad when their application succeed. We care that our customers can best use their 
                    stay abroad to make the most of the unique opportunity, ensuring their adventure a 
                    sustainable success and contribute to the development of their countries of origin by 
                    using the gathered and gained experience from abroad.
                  </span>:null }
                <br />
                <div className="button-involved" onClick={this.openHandler}>{this.state.btnOpen}</div>
                </p>
          
        </div>
    )
    }
}
export default OurTeam