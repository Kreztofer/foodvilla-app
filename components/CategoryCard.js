import React from 'react';
import CategoryRow from './CategoryRow';

const CategoryCard = ({ imgUrl, title, id, restaurant, long, short }) => {
  return (
    <>
      <CategoryRow
        catImg={imgUrl}
        catTitle={title}
        restaurant={restaurant}
        long={long}
        short={short}
        key={id}
      />
    </>
  );
};
export default CategoryCard;
