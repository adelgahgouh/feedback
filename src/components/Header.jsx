 
 function Header({title,bgColor,textColor}) {

    const headerstyle={
        background:bgColor,
        color:textColor,
    }
   return (
     <header style={headerstyle} >
         <div className="container">
             <h2> {title}</h2>
         </div>
     </header>
   )
 }
 Header.defaultProps={
     title:"Feedback app",
     bgColor:"rgba(0,0,0,0.4)",
     textColor:'#ff6a95',
 }
 export default Header 