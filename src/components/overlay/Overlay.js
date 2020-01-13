import React, { useContext } from "react";
import { DataContext } from "../../context/context";

function Overlay() {
  const [, , menuToggles] = useContext(DataContext);

  const closeOverlay = _ => {
    menuToggles.overlay.set(false);
  };

  return (
    <>
      {menuToggles.overlay.get && (
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-close-button">
              <p className="close-button" onClick={closeOverlay}>
                x
              </p>
            </div>
            <div className="overlay-content">
              Overlay window in the about section for some UI interactive
              effects and content.
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Overlay;
