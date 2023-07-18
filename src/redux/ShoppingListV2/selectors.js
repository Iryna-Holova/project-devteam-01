export const selectShoppingList = state => state.shoppingListV2.items;

export const selectIsInShoppingList = (state, ingredientId, recipeId) => {
  //console.log(state);
  //console.log(recipeId,ingredientId );
  const indexInSL = state.shoppingListV2.items.findIndex(
    ({ _id }) => _id === ingredientId
  );
  // if (indexInSL >= 0) console.log('indexSL', indexInSL, ingredientId, recipeId);

  if (indexInSL < 0) return false;
  const indexRecipeId = state.shoppingListV2.items[indexInSL].mesures.findIndex(
    item => {
      // console.log(item);
      return item.recipeId === recipeId;
    }
  );
  // if (indexRecipeId >= 0)
  //   console.log(
  //     'indexRecipeId',
  //     indexRecipeId,
  //     ingredientId,
  //     recipeId,
  //     indexRecipeId >= 0 ? true : false
  //   );

  return indexRecipeId >= 0 ? true : false;
};
