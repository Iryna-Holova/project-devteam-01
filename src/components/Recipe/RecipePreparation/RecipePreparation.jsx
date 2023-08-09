import noImage from '../../../assets/images/no-image-ingredient.webp';

import {
  ImageWrapper,
  PreparationWrapper,
  InstructionWrapper,
  InstructionTitle,
  InstructionItem,
  InstructionList,
} from './RecipePreparation.styled';

const RecipePreparation = ({ image, instructions, title }) => {
  let items = [];
  if (instructions) {
    items = instructions
      .split('\r\n')
      .filter(elem => {
        if (!elem) return false;
        if (!isNaN(elem)) return false;
        if (elem.toLowerCase().includes('step')) return false;
        return true;
      })
      .map((item, index) => {
        let slicedItem = item;
        for (let i = 0; i < 2; i++) {
          if (!isNaN(slicedItem[i]) || slicedItem[i] === '.') {
            slicedItem = slicedItem.slice(i + 1);
          }
        }
        return (
          <InstructionItem key={index}>
            <span>{index + 1}</span>
            <p>{slicedItem}</p>
          </InstructionItem>
        );
      });
  }

  return (
    <PreparationWrapper>
      <InstructionWrapper>
        <InstructionTitle>Recipe Preparation</InstructionTitle>
        <InstructionList>{items}</InstructionList>
      </InstructionWrapper>
      <ImageWrapper>
        <img
          src={image || noImage}
          alt={title}
          loading="lazy"
          onError={({ target }) => {
            if (target.src !== noImage) {
              target.onerror = null;
              target.src = noImage;
            }
          }}
        />
      </ImageWrapper>
    </PreparationWrapper>
  );
};

export default RecipePreparation;
