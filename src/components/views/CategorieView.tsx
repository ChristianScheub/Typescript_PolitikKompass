import React, { useState, useEffect } from "react";
import { Category } from "../../types/Category";
import Select from 'react-select';

interface CategoryViewProps {
  currentCategory: Category;
  categories: Category[];
  onCategoryChange: (category: Category) => void;
}

const CategoryView: React.FC<CategoryViewProps> = ({
  currentCategory,
  categories,
  onCategoryChange,
}) => {

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      backgroundColor: '#00796B', // Hintergrundfarbe des Select-Controls
      border: 'none', // Optional: entfernt den Rahmen
      boxShadow: 'none', // Optional: entfernt den Schatten
      '&:hover': {
        border: 'none', // Optional: entfernt den Rahmen beim Hover
      },
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: 'white', // Textfarbe für die aktuell ausgewählte Option
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black', // Textfarbe für die Optionen
      backgroundColor: state.isSelected ? '#00796B' : 'white', // Hintergrundfarbe für ausgewählte Optionen
      '&:hover': {
        backgroundColor: '#00796B', // Hintergrundfarbe für Optionen beim Hover
        color: 'white', // Textfarbe für Optionen beim Hover
      },
    }),
  };

  const categoryOptions = categories.map(category => ({
    value: category,
    label: category
  }));

  return (
    <div>
        <Select
          className="mb-3"
          options={categoryOptions}
          styles={customStyles} 
          value={{ value: currentCategory, label: currentCategory }}
          onChange={(selectedOption: { value: Category; label: string } | null) => 
            onCategoryChange(selectedOption?.value as Category)}
        />
    </div>
  );
};

export default CategoryView;