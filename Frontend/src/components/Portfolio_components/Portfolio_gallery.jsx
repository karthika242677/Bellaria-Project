import React, { useContext } from "react";
import { shop_products } from "../../assets/assets";
import { MyContext } from "../../context/MyContextProvider";
const Portfolio_gallery = () => {
  const galleryItems = shop_products.filter(
    (item) => item.category === "Masonry"
  );

  const { hoveredItem, handleMouseEnter, handleMouseLeave } = useContext(MyContext);

  return (
    <div
      className="container my-5"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "15px",
      }}
    >
      {galleryItems.map((item) => (
        <div
          key={item.id}
          onMouseEnter={() => handleMouseEnter(item.id)}
          onMouseLeave={handleMouseLeave}
          style={{
            position: "relative",
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            transform: hoveredItem === item.id ? "scale(1.03)" : "scale(1)",
            transition: "transform 0.3s ease",
            cursor: "pointer",
          }}
        >
          <img
            src={item.img}
            alt={item.desc}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Overlay text */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 10, 8, 0.5)",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              opacity: hoveredItem === item.id ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <h5>{item.type}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio_gallery;
