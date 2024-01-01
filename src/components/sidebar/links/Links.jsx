import React from "react";

const items = ["Home", "Services", "Projects", "Contact", "About"];


const Links = () => {
  return (
    <div className="links">
      {items.map((item) => (
        <a href={`#${item}`} key={item}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default Links;
