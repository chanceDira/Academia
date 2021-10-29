import React,{Component} from 'react'
import Aux from '../../../hoc/Auxi/Auxilliary'
import Toolbar from '../../Navigation/Toolbar/Toolbar'
import './Layout.css'
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer'
// import ScrollDemo from '../../../components/Navigation/AutoScroll/AutoScroll'
import Contacts from '../../Navigation/Contacts/Contacts'
class Layout extends Component{
    state = {
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () => {
                this.setState({showSideDrawer: false})

    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer}
            
        } )
      
    }
    render(){
        return (
            <Aux>
                 <div>
                    <Contacts />
                </div>
                <Toolbar 
                    open={this.state.showSideDrawer} 
                    toggle ={this.sideDrawerToggleHandler }
                    /> 
                 {/* <ScrollDemo /> */}
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed ={this.sideDrawerClosedHandler }/>
               
                <main className ='content1'>
                    {this.props.children}  
                </main>
            </Aux>
   
        )

    }
}

export default Layout