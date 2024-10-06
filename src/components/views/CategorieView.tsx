import React from "react";
import { Category } from "../../types/Category";
import Card from "../../ui/Card/Card";
import ProgressBar from "../../ui/ProgressBar";
import Button from "../../ui/Button/Button";

interface CategoryViewProps {
  currentCategory: Category;
  categories: Category[];
  currentQuestionIndex: number;
  totalQuestions: number;
  onCategoryChange: (category: Category) => void;
}

const CategoryView: React.FC<CategoryViewProps> = ({
  currentCategory,
  categories,
  currentQuestionIndex,
  totalQuestions,
  onCategoryChange,
}) => {
  return (
    <Card>
      <div>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onCategoryChange(category)}
            label={category}
            backgroundColor={
              category === currentCategory ? "#00ACC1" : "#009688" // Wenn die Kategorie ausgewählt ist, setze eine andere Hintergrundfarbe
            }
          />
        ))}
      </div>
      <ProgressBar current={currentQuestionIndex + 1} total={totalQuestions} />
    </Card>
  );
};

export default CategoryView;