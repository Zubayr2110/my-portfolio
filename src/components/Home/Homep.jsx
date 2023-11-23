import { useNavigate } from "react-router-dom";
import {
  MainAvatar,
  MainBootstrapIcon,
  MainCssIcon,
  MainHtmlIcon,
  MainJsIcon,
  MainReactJSIcon,
  MainSassIcon,
  MainThumbnail2ndimg,
  MainThumbnailarrowIcon,
  MainThumbnailimg,
} from "../export_img";
import "./Home.css";

export default function Homep() {
  const navigate = useNavigate();
  return (
    <main className="home">
      <img src={MainAvatar} alt="img" className="mainavataricon" />
      <h1 className="mainh1">
        Salom Men{" "}
        <span className="mainh1span">
          Zubayr <br /> Frontend
        </span>{" "}
        Dasturchiman
      </h1>
      <p className="maininfo">
        Men Frontend Dasturchiman. <br /> Hozirda Najot Ta'limni, Chilonzor
        Filialini Bitirdim. Meni Tajribam <br /> HTML, CSS, Sass, JS, Bootstrap,
        React JS, Reducer, Redux.
      </p>
      <a href="tel:+998998801206" className="mainbtna">
        <button className="mainbtn">Contact Me</button>
      </a>
      <p className="mainEW">EXPERIENCE WITH</p>
      <div className="mainLanguageIcon">
        <img src={MainHtmlIcon} alt="" />
        <img src={MainCssIcon} alt="" />
        <img src={MainJsIcon} alt="" />
        <img src={MainReactJSIcon} alt="" />
      </div>
      <p className="mainPT">Projects</p>
      <div className="mainProjects">
        <a href="https://youtu.be/xcGtfYUfDLo?si=Vp-SIeVPGpqZve5z">
          <div className="mainProjects1nd">
            <img
              src={MainThumbnailimg}
              alt="image"
              className="mainProjects1ndimg"
            />
            <div className="mainProjects1ndtext">
              <div className="mainProjects1ndtext1">
                <p className="mainProjects1ndtext11">CLICK HERE TO VISIT</p>
                <p className="mainProjects1ndtext12">HTML TUTORIAL</p>
              </div>
              <img
                src={MainThumbnailarrowIcon}
                alt="icon"
                className="mainthumbicon"
              />
            </div>
          </div>
        </a>
        <a href="https://youtu.be/uUULF8ikQoY?si=u9_GAAniL9ZfzLtA">
          <div className="mainProjects2nd">
            <img
              src={MainThumbnail2ndimg}
              alt="image"
              className="mainProjects1ndimg"
            />
            <div className="mainProjects1ndtext">
              <div className="mainProjects1ndtext1">
                <p className="mainProjects1ndtext11">CLICK HERE TO VISIT</p>
                <p className="mainProjects1ndtext12">CSS TUTORIAL</p>
              </div>
              <img
                src={MainThumbnailarrowIcon}
                alt="icon"
                className="mainthumbicon"
              />
            </div>
          </div>
        </a>
      </div>
      <p className="mainHYP">Loyihangiz Bormi?</p>
      <p className="mainPKB">
        Keling, birgalikda <br /> ajoyib Web-Sayt yarataylik
      </p>
    </main>
  );
}
