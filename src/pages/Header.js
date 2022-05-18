import HeaderCSS from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = ({ data }) => {
  const [inputValue, setInputvalue] = useState("");
  const navigate = useNavigate();
  const submitHandler = function (e) {
    e.preventDefault();

    navigate("/searched/" + inputValue);
  };
  return (
    <header>
      <div className={HeaderCSS.nav}>
        <div className={HeaderCSS.nav_container}>
          <div className="nav-logo">LOGO</div>
          <ul className={HeaderCSS.nav_links}>
            <li>
              <a>link1</a>
            </li>
            <li>
              <a>link2</a>
            </li>
            <li>
              <a>link3</a>
            </li>
          </ul>
        </div>
      </div>
      <main className={HeaderCSS.main}>
        <p className={HeaderCSS.search_text}>Find A Recipe</p>
        <form onSubmit={submitHandler} className={HeaderCSS.search_bar}>
          <input
            type="text"
            id={HeaderCSS.recipe_search}
            name="recipe-search"
            value={inputValue}
            onChange={(e) => setInputvalue(e.target.value)}
          />

          <button className={HeaderCSS.search_icon}>
            <BsSearch className={HeaderCSS.icon} />
          </button>
        </form>
      </main>
    </header>
  );
};

export default Header;
