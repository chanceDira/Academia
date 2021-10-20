import{ React,Component} from 'react'
import CreateIcon from '@material-ui/icons/Create';
import './OurUniqueness.css'
class OurUniqueness extends Component {
    state={
        isElig: true,
        isServ: false,
        isApp: false,
        isRev: false,
        btnOpen:'more'
    }
    EligHandler= () =>{
        const less=this.state.isElig

        this.setState({isElig:!less,
            isServ: false,
            isApp: false,
            isRev: false})
        console.log(less);
        if(!less)
            this.setState({btnOpen:'less'})  
        else
        this.setState({btnOpen:'more'})  
    }

    ServHandler= () =>{
        const less=this.state.isServ
       
        this.setState({isServ:!less,
            isElig: false,
            isApp: false,
            isRev: false,})
        console.log(less);
        if(!less)
            this.setState({btnOpen:'less'})  
        else
        this.setState({btnOpen:'more'})  
    }

    AppHandler= () =>{
        const less=this.state.isApp
       
        this.setState({isApp:!less,
            isElig: false,
            isServ: false,
            isRev: false})
        console.log(less);
        if(!less)
            this.setState({btnOpen:'less'})  
        else
        this.setState({btnOpen:'more'})  
    }

    RevHandler= () =>{
        const less=this.state.isRev
       
        this.setState({isRev:!less,
            isElig: false,
            isServ: false,
            isApp: false,
          })
        console.log(less);
        if(!less)
            this.setState({btnOpen:'less'})  
        else
        this.setState({btnOpen:'more'})  
    }
    render(){
    return (
        <div className="OurUniqueness">
            <div className="uniqueness-container">

                <div className="uniqueness-item">
                    <CreateIcon style={{fontSize:"100px"}} />
                    <h1 >Our uniqueness</h1>
                        <p>
                            We value our customers and view each participant as an individual, with their own needs and wishes. Through strong relationships with our partner around our operating areas, we can ensure that Akagera & Rhein® Competence Center Customers, whether looking expert advice or short or long term support, they are treated with high professionalism, discretion, and increased comfort beyond their expectation.  We believe that the satisfaction of our customer is the out guiding principle to success. 
                            In the region we are  the first independent company, which offers large services package with competent partners and  who know the region of our activities. 
                            We have a pool of qualified agents and an efficient network in the sectors mentioned above.
                            Because your success and our success' story.
                        </p>
                </div>

                <div className="uniqueness-item--1">
                    <div className="how-to-proceed-control" >
                        <div className="how-to-proceed-item--1" onClick={this.EligHandler}>Eligibility</div>
                        <div className="how-to-proceed-item--2"  onClick={this.ServHandler}>Service</div>
                        <div className="how-to-proceed-item--3"  onClick={this.AppHandler}>Application form</div>
                        <div className="how-to-proceed-item--4"  onClick={this.RevHandler}>Review</div>
                    </div>
                  
                    {this.state.isElig?
                    
                    
                  
                    <div className="how-to-proceed-content-elig" >
                        <h1>Check your elegibity </h1>

                        Our Center assesses  your personal situationfree of charge using our 
                        digital-automated assessment instrument.
                        To check is you are eligible on one of our programms. 
                        <div className="get-content-elig">Check your elegibility </div>
                    </div>
                   :null }
                      {this.state.isServ ?
                    
                    <div className="how-to-proceed-content-serv" >
                        <h1>Choose a Service </h1>

                        There are different types of Services  our Center offers. Every type of service has its specific conditions 
                        Bevore you apply for a specific programm  you need to know wich type of  programm is  suitibale to you. 
                        The eligibility check and our advisor help how to get the right choose.  In case of hesitation please contact our team in order to avoid any mistakes
                        <div className="get-content-serv"> Choose a Service</div>
                    
                    </div>
                   :null }
                      {this.state.isApp ?
                    
                    <div className="how-to-proceed-content-app" >
                        <h1>Complete the 
                            application form 
                        </h1>
                        Fillful the application form by giving the right  and correct answers. In case of confusion our support team will guide you. Please hesitate to contact  our support team in order to avoid unecessary errors. 
                                            </div>
                   :null }
                      {this.state.isRev ?
                    
                    <div className="how-to-proceed-content-rev" >
                        <h1>Documents review </h1>
                        ​When submitting an application of participation on a specific programm  you often need to send some support documents. We advice our customer to go trought the generated check liste and upload the listed documents to reviewed by our staffs. 
                    </div>
                   :null }

                </div>
            </div>
            
          
        </div>
    )
    }
}
export default OurUniqueness