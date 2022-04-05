import { BrowserRouter as Router, Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import "./blog.css";
import blog2 from "../../assets/post_3.jpg";
import blog3 from "../../assets/post_4.jpg";
import blog1 from "../../assets/post_2.jpg";

const Blog = ({ img }: { img: string }) => {
  return (
    <div className="py-5">
      <img className="blog-img w-100 " src={img} alt="not found" />
      <div className="ps-3 pt-3">
        <p className="mb-0 pb-2 meta">May 27, 2021 • 12 Comments</p>
        <h5 className="fw-bold">Important of getting a notifications</h5>
        <p className="blog-text-p">
          Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti
          iusto nobis ex aperiam cumque reprehenderit consequuntur.
        </p>
        <Router>
          <Link to="/" className="text-decoration-none text-danger blog-text-p">
            Read More{" "}
            <span>
              <FiChevronRight />
            </span>
          </Link>
        </Router>
      </div>
    </div>
  );
};

const BlogPosts = () => {
  return (
    <div className="py-5">
      <div className="container py-5">
        <div className="text-center">
          <h3 className="fw-bold">Blog Posts</h3>
          <div className="d-flex justify-content-center">
            <p className="blog-post-subhead">
              Sapiente, assumenda suscipit autem ab expedita dignissimos,
              corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 px-4">
            <Blog img={blog1} />
          </div>
          <div className="col-md-4 px-4">
            <Blog img={blog2} />
          </div>
          <div className="col-md-4 px-4">
            <Blog img={blog3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
