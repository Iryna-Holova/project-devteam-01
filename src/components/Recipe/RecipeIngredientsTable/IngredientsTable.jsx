import { Ingredient } from './Ingredient';
import { Table, TableBody, TableHead } from './IngredientsTable.styled';

const IngredientsTable = ({ ingredients, recipeId, recipe }) => {
  return (
    <Table className="container">
      <TableHead>
        <div>Ingredients</div>
        <div></div>
        <div>Number</div>
        <div>Add to list</div>
      </TableHead>
      <TableBody>
        {ingredients.map(({ id, img, name, mesure, desc }) => {
          return (
            <Ingredient
              key={id}
              id={id}
              img={img}
              name={name}
              measure={mesure}
              recipeId={recipeId}
              recipe={recipe}
              desc={desc}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default IngredientsTable;
