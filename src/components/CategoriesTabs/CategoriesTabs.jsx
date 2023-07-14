import { TabsList, Tab } from './CategoriesTabs.styled';

const CategoriesTabs = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  // Відображення меню зі списком категорій
  return (
    <TabsList>
      {categories.map(category => (
        <Tab className={selectedCategory === category.name && 'active'}
          key={category.name}
          onClick={() => handleCategoryChange(category.name)}
        >
          {category.name}
        </Tab>
      ))}
    </TabsList>
  );
};

export default CategoriesTabs;
