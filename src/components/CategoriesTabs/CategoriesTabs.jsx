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
        <Tab
          key={category.name}
          isactive={selectedCategory === category.name.toLowerCase() ? 1 : 0}
          onClick={() => handleCategoryChange(category.name)}
        >
          {category.name}
        </Tab>
      ))}
    </TabsList>
  );
};

export default CategoriesTabs;
