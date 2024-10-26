"use client"
import { useState } from 'react';



const CategoryScreen = () => {
  // Define the categories and their corresponding content
  const categories = [
    { id: 1, name: 'Category 1', content: 'This is content for Category 1.' },
    { id: 2, name: 'Category 2', content: 'This is content for Category 2.' },
    { id: 3, name: 'Category 3', content: 'This is content for Category 3.' },
    { id: 4, name: 'Category 4', content: 'This is content for Category 4.' },
    { id: 5, name: 'Category 5', content: 'This is content for Category 5.' }
  ];

  // State to keep track of the currently selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className={styles.container}>
      <div className={styles.screen}>
        {/* Content changes based on selected category */}
        <h2>{selectedCategory.name}</h2>
        <p>{selectedCategory.content}</p>
      </div>

      <div className={styles.categoryList}>
        {categories.map((category) => (
          <button 
            key={category.id} 
            className={`${styles.categoryButton} ${selectedCategory.id === category.id ? styles.active : ''}`} 
            onClick={() => setSelectedCategory(category)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryScreen;
