import "./logo.css"
import logoImg from "../../assets/Logo_AMDB.png";

const Logo = () => {
    return (
        <div className="logo">
        <img src={logoImg} alt="AMDB logo" />
        </div>
    )
}

export default Logo;