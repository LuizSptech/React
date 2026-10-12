const  Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>LoouizDev</h1>
            <div className="links">
                <a href="/">inicio</a>

                <a href="/create" style={{

          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' }}>Projetos</a>
                
            </div>
        </nav>
    );
}
 
export default Navbar;