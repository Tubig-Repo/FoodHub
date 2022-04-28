import HeaderCSS from "./Header.module.css";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <header>
      <div className={HeaderCSS.nav}>
        <div className={HeaderCSS.nav_container}>
          <div className="nav-logo">LOGO</div>
          <ul className={HeaderCSS.nav_links}>
            <li>
              <a href="#">link1</a>
            </li>
            <li>
              <a href="#">link2</a>
            </li>
            <li>
              <a href="#">link3</a>
            </li>
          </ul>
        </div>
      </div>
      <main className={HeaderCSS.main}>
        <p className={HeaderCSS.search_text}>Find A Recipe</p>
        <div className={HeaderCSS.search_bar}>
          <input
            type="text"
            id={HeaderCSS.recipe_search}
            name="recipe-search"
          />
          <div className={HeaderCSS.search_icon}>
            <BsSearch className={HeaderCSS.icon} />
          </div>
        </div>
      </main>
    </header>
  );
};

export default Header;
