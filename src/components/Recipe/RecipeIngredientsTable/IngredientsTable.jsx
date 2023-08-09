import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

import Modal from 'components/Modal/Modal';
import Ingredient from './Ingredient';

import {
  TableBody,
  TableHead,
  ToggleShoppingList,
} from './IngredientsTable.styled';

const IngredientsTable = ({ ingredients, recipeId, recipe }) => {
  const [showModal, setShowModal] = useState(false);
  const [ingredient, setIngredient] = useState({});

  const openModal = (desc, name) => {
    setShowModal(true);
    setIngredient({ desc, name });
  };

  return (
    <div style={{width: '100%'}}>
      <TableHead>
        <div>Ingredients</div>
        <div></div>
        <div>Number</div>
        <div>
          Add to list 
          <ToggleShoppingList
            onClick={() => console.log('Дима сделай красиво :)')}
            style={{ backgroundColor: 'var(--color-accent-secondary)' }}
          >
            {false ? <BsCheckLg /> : ' '}
          </ToggleShoppingList>
        </div>
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
              openModal={openModal}
            />
          );
        })}
      </TableBody>
      <Modal
        title={ingredient.name}
        openState={showModal}
        onModalClose={() => setShowModal(false)}
      >
        {ingredient.desc}
      </Modal>
    </div>
  );
};

export default IngredientsTable;
