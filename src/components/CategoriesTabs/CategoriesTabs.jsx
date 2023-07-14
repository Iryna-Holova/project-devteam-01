import { TabsList, Tab } from './CategoriesTabs.styled';

const CategoriesTabs = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  // Відображення меню зі списком категорій
  return (
    <TabsList>
      {categories.map(({_id, name}) => (
        <Tab className={selectedCategory === name && 'active'}
          key={_id}
          onClick={() => handleCategoryChange(name)}
        >
          {name}
        </Tab>
      ))}
    </TabsList>
  );
};

export default CategoriesTabs;
