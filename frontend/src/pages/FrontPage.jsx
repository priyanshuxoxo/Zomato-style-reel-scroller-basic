import React from "react";
import { Link } from "react-router-dom";
import "../styles/frontpage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FrontPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.includes("token");
    if (token) navigate("/home");
  }, [navigate]);
  return (
    <main className="front-page">
      <section className="front-hero">
        <div className="front-content">
          <h1 className="front-title">🍽️ FoodView</h1>
          <p className="front-tagline">
            Discover, save, and explore trending food reels from your favorite
            restaurants and partners.
          </p>

          <div className="front-actions">
            <Link to="/user/login" className="front-btn front-btn-primary">
              Login as User
            </Link>
            <Link
              to="/food-partner/login"
              className="front-btn front-btn-outline"
            >
              Login as Food Partner
            </Link>
          </div>

          <div className="front-secondary-actions">
            <p>
              Don’t have an account?{" "}
              <Link to="/user/register" className="front-link">
                Register as User
              </Link>{" "}
              or{" "}
              <Link to="/food-partner/register" className="front-link">
                Register as Partner
              </Link>
            </p>
          </div>
        </div>
      </section>

      <footer className="front-footer">
        <p>© {new Date().getFullYear()} FoodView. All Rights Reserved.</p>
      </footer>
    </main>
  );
};

export default FrontPage;
