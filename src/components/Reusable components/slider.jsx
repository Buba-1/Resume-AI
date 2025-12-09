import styles from "./slider.module.css";
import img1 from "../../assets/images/resume1.webp";
import img2 from "../../assets/images/resume2.png";
import img3 from "../../assets/images/resume3.jpg";
import img4 from "../../assets/images/resume4.webp";
import img5 from "../../assets/images/resume5.webp";
import img6 from "../../assets/images/resume6.jpg";
import img7 from "../../assets/images/resume7.jpg";
import img8 from "../../assets/images/resume8.png";
import img9 from "../../assets/images/resume9.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

function Slider() {
  // Removed useRef and useEffect, as CSS handles the animation.
  return (
    <div className={styles.slidercontainer}>
      <div className={styles.slidertrack}>
        {/* Concatenated array for seamless looping */}
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className={styles.sliderimage}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
