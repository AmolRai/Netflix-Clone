import React, { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  });

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img
        className="nav-image-one"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
      ></img>
      <img
        className="nav-image-two"
        src="https://i.pinimg.com/474x/44/78/1b/44781ba4ac0c63f2ecf0793a533bf8dc.jpg"
      ></img>
    </div>
  );
}

export default Nav;
