import { ReactComponent as Logo } from "../../assets/logo.svg";
import "../Header/header.scss";

const Header = () => {
  return (
    <header className="Header">
      <Logo />
    </header>
  );
};

export default Header;