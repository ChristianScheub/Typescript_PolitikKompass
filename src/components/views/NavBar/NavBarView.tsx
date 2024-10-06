import React from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import CategoryView from "../CategorieView";
import { Category } from "../../../types/Category";
import './NavBarView.css';


interface NavbarViewProps {
  currentCategory: Category;
  categories: Category[];
  onCategoryChange: (category: Category) => void;
}

const NavbarView: React.FC<NavbarViewProps> = ({
  currentCategory,
  categories,
  onCategoryChange,
}) => {
  const location = useLocation();

  return (
    <div>
      <Navbar variant="dark" className="navbarElement width100 shadow">
        <div className="navbarContainer">
          {location.pathname.includes("Start") ? (
            <div> {/* Hier kannst du einen Platzhalter oder einen anderen Inhalt hinzufügen, falls nötig */}</div>
          ) : (
            <CategoryView
              currentCategory={currentCategory}
              categories={categories}
              onCategoryChange={onCategoryChange}
            />
          )}
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarView;
