const RecipeElement = ({ recipeName, id }) => {
  return <li key={Number(id)}>{recipeName}</li>;
};

export default RecipeElement;
