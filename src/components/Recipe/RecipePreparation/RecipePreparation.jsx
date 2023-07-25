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
    <PreparationWrapper className="container">
      <InstructionWrapper>
        <InstructionTitle>Recipe Preparation</InstructionTitle>
        <InstructionList>{items}</InstructionList>
      </InstructionWrapper>
      <ImageWrapper>
        <img src={image} alt={title} />
      </ImageWrapper>
    </PreparationWrapper>
  );
};

export default RecipePreparation;
