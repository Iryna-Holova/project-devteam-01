import { Ingredient } from './Ingredient';
import { Table, TableBody, TableHead } from './IngredientsTable.styled';

export const IngredientsTable = ({ ingredients, recipeId }) => {
  // const handleShoppingList = async (recipeId, id) => {
  //   console.log(`recipe id: ${recipeId}, ingrediend id: ${id}`);
  // };

  return (
    <Table className="container">
      <TableHead>
        <div>Ingredients</div>
        <div></div>
        <div>Number</div>
        <div>Add to list</div>
      </TableHead>
      <TableBody>
        {ingredients.map(({ id, img, name, mesure }) => {
          return (
            <Ingredient
              key={id}
              id={id}
              img={img}
              name={name}
              mesure={mesure}
              recipeId={recipeId}
            />
          );

        })}
      </TableBody>
    </Table>
  );
};
