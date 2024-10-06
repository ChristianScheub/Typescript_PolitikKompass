import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa"; // Arrow Left Icon
import CategoryView from "../CategorieView";
import { Category } from "../../../types/Category";
import './NavBarView.css';

interface NavbarViewProps {
  currentCategory?: Category; // Optional
  categories?: Category[]; // Optional
  onCategoryChange?: (category: Category) => void; // Optional
}

const NavbarView: React.FC<NavbarViewProps> = ({
  currentCategory,
  categories,
  onCategoryChange,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const isLegalPage = location.pathname.includes("legal");

  const handleBackClick = () => {
    navigate(-1); // Navigiert zur vorherigen Seite
  };

  return (
    <div>
      <Navbar variant="dark" className="navbarElement width100 shadow">
        <div className="navbarContainer">
          {isLegalPage ? (
            <div className="navbarLeft">
              <FaArrowLeft onClick={handleBackClick} id="backIcon" />
            </div>
          ) : categories && currentCategory && onCategoryChange ? (
            <CategoryView
              currentCategory={currentCategory}
              categories={categories}
              onCategoryChange={onCategoryChange}
            />
          ) : null}
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarView;