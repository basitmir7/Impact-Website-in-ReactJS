import "./whyus.css";
import img1 from "../../assets/good-review.png";
import img2 from "../../assets/24-hours-support.png";
import aboutus from "../../assets/about-us.png";

const WhyusSection = () => {
  return (
    <div className="cont">
      <div className="main">
        <div className="whyus-text">
          <h1>Why You Should Choose Us</h1>
          <div className="feature">
            <div className="feature-logo">
              <img src={img2} alt="no image" />
            </div>
            <div className="feature-text">
              <h3>Professional</h3>
              <p>
                Sapiente, assumenda suscipit autem ab expedita dignissimos,
                corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                culpa qui eos ullam minima quo, consequuntur.
              </p>
            </div>
          </div>
          <div className="feature">
            <div className="feature-logo">
              <img src={img1} alt="no image" />
            </div>
            <div className="feature-text">
              <h3>Good Review</h3>
              <p>
                Sapiente, assumenda suscipit autem ab expedita dignissimos,
                corrupti iusto nobis ex aperiam cumque reprehenderit, saepe
                culpa qui eos ullam minima quo, consequuntur.
              </p>
            </div>
          </div>
        </div>
        <div className="whyus-img">
          <img src={aboutus} alt="no image" />
        </div>
      </div>
    </div>
  );
};
export default WhyusSection;
