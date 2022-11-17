import Cookies from "universal-cookie";
const Logout_Button =()=>{
    const cookies =new Cookies();

    const LogoutSession=(e)=>{
        e.preventDefault();
        cookies.remove('name');
        cookies.remove('username');
        cookies.remove('email');
        window.location.href="./"; 
    }
    return(
        <>
            <a className="btn btn-light action-button" role="button" onClick={LogoutSession} href="./registrer">Logout
            </a>
        </>
    )
}

export default Logout_Button;