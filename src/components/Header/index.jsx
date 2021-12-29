import axios from "axios";
import { useEffect } from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import "../Header/header.scss";

const Header = () => {
  const getUuid = async () => {
    try {
      const { data } = await axios.get("http://172.20.10.8:8080/post/uuid", {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      return data;
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    const id = getUuid();
    console.log(id);
  }, []);

  return (
    <header className="Header">
      <Logo />
    </header>
  );
};

export default Header;
