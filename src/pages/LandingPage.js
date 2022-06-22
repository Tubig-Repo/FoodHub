
import LandingPageCSS from "./Header.module.css";
import Search from "./Search";
import Main from "./Main";
import Footer from "./Footer";

const LandingPage = ({data , loading , error}) => {

  return (
    <div>
      <header>
        <div className={LandingPageCSS.header_main}>
          <Search />
        </div>
      </header>
      <Main data={data}/>
      <Footer />
    </div>
  );
};

export default LandingPage;
