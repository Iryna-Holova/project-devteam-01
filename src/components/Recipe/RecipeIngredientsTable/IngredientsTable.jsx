import { useEffect, useState } from 'react';

import { Table, TableBody, TableHead } from './IngredientsTable.styled';

export const IngredientsTable = ({ ingredients, recipeId }) => {
  const [isInShopping, setIsInShopping] = useState(false);
  
  const handleShoppingList = async (recipeId, id) => {
    console.log(`recipe id: ${recipeId}, ingrediend id: ${id}`)
  setIsInShopping(!isInShopping)
}

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
            <li key={id}>
              <div>
                <img src={img} loading="lazy" alt={name} />
              </div>
              <div>{name}</div>
              <div><span>{mesure}</span></div>
              <div>
                <button onClick={() => handleShoppingList(recipeId, id)}>{isInShopping ? '1' : '0'}</button>
              </div>
            </li>
          );
        })}
      </TableBody>
    </Table>
  );
};
