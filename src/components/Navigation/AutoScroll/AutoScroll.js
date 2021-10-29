import React, { Component } from 'react'
class ReadyToScroll extends Component {

   constructor(props) {
       super(props)
       this.myRef = React.createRef()  
   }

   render() {
       return <div ref={this.myRef}></div> 
   }  

   scrollToMyRef = () => window.scrollTo(0, this.myRef.current.offsetTop)   
   // run this method to execute scrolling. 

}
export default ReadyToScroll