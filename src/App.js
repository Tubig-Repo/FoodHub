import React from "react";
import Header from "./components/Header";
import Recipe from "./components/Recipes";
import axios from "axios";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      inputValue: "",
      filteredData: [],
    };

    this.setInput = this.setInput.bind(this);
    this.searchEvent = this.searchEvent.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://foodhub-bscs.000webhostapp.com/index.php")
      .then((res) => {
        this.setState({ data: res.data });
      });
  }

  setInput(input) {
    this.setState({ inputValue: input.target.value });
  }

  searchEvent() {
    this.setState({
      filteredData: this.state.data.filter((el) =>
        el.FoodName.toLowerCase().includes(this.state.inputValue)
      ),
    });
  }

  render() {
    return (
      <div className="container">
        <Header searchEvent={this.searchEvent} setInput={this.setInput} />
        <Recipe recipeData={this.state.data} query={this.state.filteredData} />
        {console.log(this.state.data)}
      </div>
    );
  }
}
// function App() {
//   const [recipeData, setRecipe] = useState([
//     {
//       foodId: 1,
//       foodName: "Adobong Manok",
//       location: "Batangas",
//       ingredients:
//         "1 Whole Chicken+1 Slice Onion+1 Head Garlic+2 bay leaves+1/4 Cup Soy Sauce+1/2 teaspoon perppercorns+1/4 cup Canola oil+2 large sliced potatoes+1/2 Cup vinegar +1 cup water+salt and pepper",
//     },

//     {
//       foodId: 2,
//       foodName: "Sinigang na baboy",
//       location: "Ilocos",
//     },

//     {
//       foodId: 3,
//       foodName: "Bibingka",
//       location: "Ilocos",
//     },
//   ]);

//   return (
//     <div className="container">
//       <Header />
//       <Recipe recipeData={recipeData} />
//     </div>
//   );
// }

export default App;
