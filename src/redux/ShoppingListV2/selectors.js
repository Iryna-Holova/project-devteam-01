export const selectShoppingList = state => state.shoppingListV2.items;
export const selectStatus = state => state.shoppingListV2.status;
export const selectError = state => state.shoppingListV2.error;
export const selectIsDeleting = state => state.shoppingListV2.isDeleting;

export const selectIsInShoppingList = (state, ingredientId, recipeId) => {
  const indexInSL = state.shoppingListV2.items.findIndex(
    ({ _id }) => _id === ingredientId
  );

  if (indexInSL < 0) return false;

  //console.log(state.shoppingListV2.items[indexInSL].measures);

  const indexRecipeId = state.shoppingListV2.items[
    indexInSL
  ].measures.findIndex(item => {
    return item.recipeId === recipeId;
  });

  return indexRecipeId >= 0 ? true : false;
};
