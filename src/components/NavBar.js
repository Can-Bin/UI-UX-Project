import "./navbar/navbar.css"
const NavBar = () => {
    return(
        <div className="nav_container">
            <div>
                <h3>GPT-3</h3>
            </div>
            <div className="ul_container">
                <ul className="ul">
                    <li>Home</li>
                    <li>What is GPT-3</li>
                    <li>Open AI</li>
                    <li>Case Study</li>
                    <li>Library</li>
                </ul>
                <ul className="ul">
                    <li><button>Sign In</button></li>
                    <li><button>Sign Up</button></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;