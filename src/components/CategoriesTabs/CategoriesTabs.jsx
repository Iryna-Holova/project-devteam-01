import React, { useEffect, useRef, useState } from 'react';
import { TabsList, Tab } from './CategoriesTabs.styled';

const CategoriesTabs = ({
  categories,
  selectedCategory,
  handleCategoryChange,
}) => {
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  const ref = useRef();
  const currentTabRef = useRef(null);

  useEffect(() => {
    const list = ref.current;

    const func = () => {
      if (currentTabRef.current) {
        const tabRect = currentTabRef.current.getBoundingClientRect();
        const listRect = list.getBoundingClientRect();

        ref.current.scrollTo({
          left:
            tabRect.left - listRect.left - (listRect.width - tabRect.width) / 2,
          behavior: 'smooth',
        });
      } else setTimeout(func, 100);
    };
    setTimeout(func, 100);

    if (list) {
      const onWheel = e => {
        e.preventDefault();
        list.scrollTo({
          left: list.scrollLeft + e.deltaY * 2,
          behavior: 'smooth',
        });
      };
      list.addEventListener('wheel', onWheel);
      return () => list.removeEventListener('wheel', onWheel);
    }
  }, []);

  const onMouseDown = e => {
    const list = ref.current;
    if (ref && list && !list.contains(e.target)) {
      return;
    }
    e.preventDefault();

    setState({
      ...state,
      isScrolling: true,
      clientX: e.clientX,
      scrollX: list.scrollLeft,
    });
  };

  const onMouseUp = e => {
    if (!state.isScrolling) {
      return;
    }
    e.preventDefault();

    setState({
      ...state,
      isScrolling: false,
    });
  };

  const onMouseMove = e => {
    if (!state.isScrolling) {
      return;
    }
    e.preventDefault();
    const { clientX, scrollX, isScrolling } = state;
    if (isScrolling) {
      ref.current.scrollLeft = scrollX - e.clientX + clientX;

      setState({
        ...state,
        scrollX: scrollX - e.clientX + clientX,
        clientX: e.clientX,
      });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    };
  });

  return (
    <TabsList ref={ref} className="container">
      {categories.map(({ _id, name }) => (
        <Tab
          className={selectedCategory === name && 'active'}
          key={_id}
          onClick={() => handleCategoryChange(name)}
          ref={selectedCategory === name ? currentTabRef : null}
        >
          {name}
        </Tab>
      ))}
    </TabsList>
  );
};

export default CategoriesTabs;
