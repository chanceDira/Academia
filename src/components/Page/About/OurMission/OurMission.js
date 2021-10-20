import {React, Component }from 'react'
import img1 from '../../../../assets/AupairFotos/pexels-kamaji-ogino-5093684.jpg'
import './OurMission.css'
class OurMission extends Component {
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
        <div className="our-mission">
            <div>

            <h1 > Our Mission</h1>
             <img src={img1} alt="Our Mission" />
            </div> 
             <p>
                Our first mission is set out to fill the information and qualification gap 
                between persons with a desire to learn new languages to enrich their 
                competence or wish to travel abroad and inform them about opportunities 
                offered by families, companies, organisations, or institutions which 
                maintains cultural, professional, or educational exchange programs and desire 
                to enrol internationals or work with them. 
                    
            {this.state.isOpen ?
                <span> 

                It is our mission to contribute to the change of lives and cultural
                understanding through giving independent and qualified advice, consultancy
                services, trainings, and qualifications measures, connecting and offer a 
                diversified support to the people with willingness to learn languages, to 
                travel and explore the world, by taking the presented opportunities and
                contribute back to the development of their countries of origins using 
                experiences they gathered and gained abroad. 
                <br /> <br />
                As the travel industry has evolved and access to opportunities to see the world 
                has grown, our mission is something greater than building a bridge between citizen,
                families, companies, and organisation or institutions form the countries of Akagera
                and Rhine rivers region, but also being a platform making dreams becoming possible
                by strengthening the encounter of cultures with creative and modern approaches. 
                <br /> <br />
                Our philosophy is based on the concept of Temporary and Circular Migration, which
                is defined as a migratory phenomenon on the rise all over the world in terms of 
                effective management of migration, as well as a potential contribution to
                development. 
                    
                </span>:null }
            <br />
            <div className="button-involved" onClick={this.openHandler}>{this.state.btnOpen}</div>
                </p>
          
        </div>
    )
    }
}
export default OurMission