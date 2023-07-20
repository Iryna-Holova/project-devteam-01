import React from 'react';
import { useDispatch } from 'react-redux';
import { MdClear } from 'react-icons/md';
import { Loader } from '../loader/loader';

import {
  Container,
  HeaderContainer,
  Title,
  TitleN,
  IngredientsListContainer,
  IngredientItem,
  IngredientImage,
  IngredientDetails,
  IngredientName,
  IngredientQuantity,
  RemoveButton,
  QuantityIndicator,
  //  EmptyListImage,
  // EmptyListText,
  MeasureContainer,
} from './IngredientsShoppinglist.styled';

import noImage from '../../assets/images/no-image-ingredient.webp'

import useShoppingListV2 from 'hooks/useShoppingListV2';
import { PENDING } from 'utils/constants';

import { delFromShoppingListV2Thunk } from 'redux/ShoppingListV2/operations';

// import {
//   deleteIngredient,
//   fetchIngredients,
// } from '../../redux/ShoppingList/operations';

const IngredientsShoppingList = () => {
  const dispatch = useDispatch();
  //const ingredients = useSelector(state => state.shoppingList.ingredients);
  //const [isLoading, setIsLoading] = useState(true);
  const { shoppingList: ingredients, status, isDeleting } = useShoppingListV2();

  //console.log(ingredients, status);

  // useEffect(() => {
  //   dispatch(fetchIngredients())
  //     .then(() => setIsLoading(false))
  //     .catch(error => {
  //       setIsLoading(false);
  //       console.error('Error loading ingredients:', error);
  //     });
  // }, [dispatch]);

  const onDelete = ({ id, recipeId, measure }) => {
    dispatch(delFromShoppingListV2Thunk({ id, recipeId, measure }));

    //console.log(id, recipeId, measure);
    // dispatch(deleteIngredient(id));
  };

  return (
    <Container>
      <HeaderContainer>
        <Title>Products</Title>
        <TitleN>Number</TitleN>
        <Title>Remove</Title>
      </HeaderContainer>
      {
        <IngredientsListContainer>
          {ingredients.map(ingredient => (
            <IngredientItem key={ingredient._id}>
              <IngredientImage src={ingredient.img || noImage} alt={ingredient.name} />
              <IngredientName>{ingredient.name}</IngredientName>

              <MeasureContainer>
                {ingredient.measures.map(measure => (
                  <IngredientDetails key={measure.recipeId}>
                    <IngredientQuantity>
                      {status === PENDING && isDeleting ? (
                        <Loader className="loader" />
                      ) : (
                        <QuantityIndicator>{measure.measure}</QuantityIndicator>
                      )}
                    </IngredientQuantity>
                    <RemoveButton
                      onClick={() =>
                        onDelete({
                          id: ingredient._id,
                          recipeId: measure.recipeId,
                          measure: measure.measure,
                        })
                      }
                    >
                      <MdClear className="remove-icon" />
                    </RemoveButton>
                  </IngredientDetails>
                ))}
              </MeasureContainer>
              {/* <IngredientDetails>
                <IngredientQuantity>
                  <QuantityIndicator>
                    {ingredient.measures[0]?.measure}
                  </QuantityIndicator>
                </IngredientQuantity>
                <RemoveButton onClick={() => onDelete(ingredient._id)}>
                  <MdClear className="remove-icon" />
                </RemoveButton>
              </IngredientDetails> */}
            </IngredientItem>
          ))}
        </IngredientsListContainer>
      }
    </Container>
  );
};

export default IngredientsShoppingList;
