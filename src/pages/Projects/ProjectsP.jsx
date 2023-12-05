import { Link, useNavigate } from "react-router-dom";
import {
  ProjectSimg,
  ProjectSimg2,
  ProjectSimg3,
  ProjectSimg4,
} from "../../components/export_img";
import "./Projects.css";

export default function ProjectsP() {
  const navigate = useNavigate();
  return (
    <div className="projectcontent">
      <div className="projectCC">
        <h1 className="projecth1">Projects</h1>
        <div className="projectCD">
          <div className="projectCDC">
            <div className="projectCD1nd">
              <img src={ProjectSimg} alt="img" width={600} height={400} className="projectResponseimg" />
            </div>
            <div className="projectCD1ndtext">
              <h2 className="projectCD1ndh2">
                Ushbu loyiha HTML va CSS dan iborat
              </h2>
              <div className="projectCDbtn">
                <Link to="https://0name.netlify.app" target='_blank'>
                  <button className="projectCD1ndbtn1">Project Link</button>
                </Link>
                <Link to="https://github.com/Zubayr2110/client-first.git" target='_blank'>
                  <button className="projectCD1ndbtn2">Github Link</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="projectCDC1">
            <div className="projectCD2ndtext">
              <h2 className="projectCD1ndh2">
                Todo List 
              </h2>
              <div className="projectCDbtn">
                <Link to="https://todog.netlify.app/" target='_blank'>
                  <button className="projectCD1ndbtn1">Project Link</button>
                </Link>
                <Link to="https://github.com/Zubayr2110/Todo.git" target='_blank'>
                  <button className="projectCD1ndbtn2">Github Link</button>
                </Link>
              </div>
            </div>
            <div className="projectCD2nd">
              <img src={ProjectSimg4} alt="img" width={600} height={400} className="projectResponseimg" />
            </div>
          </div>
          <div className="projectCDC2">
            <div className="projectCD1nd">
              <img src={ProjectSimg2} alt="img" width={600} height={400} className="projectResponseimg" />
            </div>
            <div className="projectCD1ndtext">
              <h2 className="projectCD1ndh2">
                Bu Project HTML CSS va JS API yordamida Yasalgan
              </h2>
              <div className="projectCDbtn">
                <Link to="https://sh0p.netlify.app" target='_blank'>
                  <button className="projectCD1ndbtn1">Project Link</button>
                </Link>
                <Link to="https://github.com/Zubayr2110/fileshop.git" target='_blank'>
                  <button className="projectCD1ndbtn2">Github Link</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="projectCDC1">
            <div className="projectCD2ndtext">
              <h2 className="projectCD1ndh2">
                This Is My Portfolio
              </h2>
              <div className="projectCDbtn">
                <Link to="https://my-portfolio.uz" target='_blank'>
                  <button className="projectCD1ndbtn1">Project Link</button>
                </Link>
                <Link to="https://github.com/Zubayr2110/my-portfolio.git" target='_blank'>
                  <button className="projectCD1ndbtn2">Github Link</button>
                </Link>
              </div>
            </div>
            <div className="projectCD2nd">
              <img src={ProjectSimg3} alt="img" width={600} className="projectResponseimg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

