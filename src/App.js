import React , {useEffect , useState}  from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Recipes from "./pages/Recipes";
import Nav from "./components/Nav";
import RecipePage from "./pages/RecipePage";
import axios from 'axios';
function App() {
  const url = "https://foodhub-bscs.000webhostapp.com/index.php";
  const [data , setData] = useState(null);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res)=>{
      setData(res.data);
    }).catch((err) =>{
      setError(err);
    }).finally(()=>{
      setLoading(false);
    })
   
  }, [url]);


  return (
    <div className="container">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage data={data} loading={loading} error={error} />} />
          <Route path="/searched/:search" element={<Recipes data={data} loading={loading} error={error} />} />
          <Route path="/recipe/:recipeID" element={<RecipePage data={data} loading={loading} error={error} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
