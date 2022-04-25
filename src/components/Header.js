import HeaderCSS from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={HeaderCSS.nav}>
        <div className={HeaderCSS.nav_container}>
          <div className="nav-logo">LOGO</div>
          <ul className="nav-links">
            <li>link1</li>
            <li>link2</li>
            <li>link3</li>
          </ul>
        </div>
      </div>
      <main className={HeaderCSS.main}>
        <div className={HeaderCSS.search_bar}>
          <input
            type="search"
            id={HeaderCSS.recipe_search}
            name="recipe-search"
          />
        </div>
      </main>
    </header>
  );
};

export default Header;
