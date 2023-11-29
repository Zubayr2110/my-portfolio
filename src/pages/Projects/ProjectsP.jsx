import { useNavigate } from "react-router-dom";
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
                <a href="https://0name.netlify.app">
                  <button className="projectCD1ndbtn1">Project Link</button>
                </a>
                <a href="https://github.com/Zubayr2110/client-first.git">
                  <button className="projectCD1ndbtn2">Github Link</button>
                </a>
              </div>
            </div>
          </div>
          <div className="projectCDC1">
            <div className="projectCD2ndtext">
              <h2 className="projectCD1ndh2">
                Todo List 
              </h2>
              <div className="projectCDbtn">
                <a href="https://todog.netlify.app/">
                  <button className="projectCD1ndbtn1">Project Link</button>
                </a>
                <a href="https://github.com/Zubayr2110/Todo.git">
                  <button className="projectCD1ndbtn2">Github Link</button>
                </a>
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
                <a href="https://sh0p.netlify.app">
                  <button className="projectCD1ndbtn1">Project Link</button>
                </a>
                <a href="https://github.com/Zubayr2110/fileshop.git">
                  <button className="projectCD1ndbtn2">Github Link</button>
                </a>
              </div>
            </div>
          </div>
          <div className="projectCDC1">
            <div className="projectCD2ndtext">
              <h2 className="projectCD1ndh2">
                This Is My Portfolio
              </h2>
              <div className="projectCDbtn">
                <a href="https://my-portfolio.uz">
                  <button className="projectCD1ndbtn1">Project Link</button>
                </a>
                <a href="https://github.com/Zubayr2110/my-portfolio.git">
                  <button className="projectCD1ndbtn2">Github Link</button>
                </a>
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

