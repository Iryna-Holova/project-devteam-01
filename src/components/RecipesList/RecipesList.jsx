import { Loader } from 'components/loader/loader';
import { RecipeItem } from 'components/RecipeItem/RecipeItem';
import { RecipesListContainer } from './RecipesList.styled';

export const RecipesList = ({
  data,
  cssClass,
  removeRecipe,
  isLoading,
  paginationPage,
}) => {
  return (
    <>
      <RecipesListContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {data.map(itemProps => {
              return (
                <RecipeItem
                  paginationPage={paginationPage}
                  remove={() => removeRecipe(itemProps._id)}
                  key={itemProps._id}
                  id={itemProps._id}
                  img={itemProps.thumb}
                  title={itemProps.title}
                  description={itemProps.description}
                  time={itemProps.time}
                  cssClass={cssClass}
                ></RecipeItem>
              );
            })}
          </>
        )}
      </RecipesListContainer>
    </>
  );
};
