import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faLaptop,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import persons1 from "../../assets/persons-group-1.png";
import persons2 from "../../assets/persons-group-2.png";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="section">
        <div
          className="persons-1"
          style={{ float: "left", position: "relative" }}
        >
          <img src={persons1} alt="person image 1" />
        </div>
        <div
          className="persons-2"
          style={{ float: "right", position: "relative" }}
        >
          <img src={persons2} alt="person image 2" />
        </div>
        <div className="header-intro">
          <h1>Let's growth your business with us</h1>
          <p className="master-head">
            Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
            iusto nobis ex aperiam cumque reprehenderit, saepe culpa qui eos
            ullam minima quo, consequuntur.
          </p>
          <p>
            <a href="#" className="button-intro">
              Get in touch
            </a>
          </p>
        </div>
      </div>
      <div className="contain">
        <div className="box-items">
          <div className="item-logo">
            <FontAwesomeIcon icon={faLayerGroup} />
          </div>
          <div className="item-text">
            <h1>Design</h1>
            <p>
              Sapiente, assumenda suscipit autem ab expedita dignissimos,
              corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa
              qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>
        <div className="box-items">
          <div className="item-logo">
            <FontAwesomeIcon icon={faLaptop} />
          </div>
          <div className="item-text">
            <h1>Applications</h1>
            <p>
              Sapiente, assumenda suscipit autem ab expedita dignissimos,
              corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa
              qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>
        <div className="box-items">
          <div className="item-logo">
            <FontAwesomeIcon icon={faBagShopping} />
          </div>
          <div className="item-text">
            <h1>eCommerce</h1>
            <p>
              Sapiente, assumenda suscipit autem ab expedita dignissimos,
              corrupti iusto nobis ex aperiam cumque reprehenderit, saepe culpa
              qui eos ullam minima quo, consequuntur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
