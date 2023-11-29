import { Link } from "react-router-dom";
import "./AboutMe.css";

export default function AboutMeP() {
  return (
    <div className="aboutC">
      <h1 className="abouth1">About me</h1>
      <div className="aboutContent">
        <div className="aboutC1">
          <div className="aboutC1A">
            <img
              src="https://bootstrapmade.com/demo/templates/DevFolio/assets/img/testimonial-2.jpg"
              alt="img"
              className="aboutC1Aimg"
            />
            <div className="aboutC1AT">
              <p className="aboutC1AT1">
                Name: <span className="aboutC1AT1span">Zubayr To'lqinov</span>
              </p>
              <p className="aboutC1AT2">
                Profile:{" "}
                <span className="aboutC1AT1span">Frontend-Developer</span>
              </p>
              <p className="aboutC1AT2">
                Email:{" "}
                <span className="aboutC1AT1span">workaccaunt6@gmail.com</span>
              </p>
              <p className="aboutC1AT2">
                Phone: <span className="aboutC1AT1span">+998-99-880-12-06</span>
              </p>
            </div>
          </div>
          <div className="aboutC1S">
            <h2 className="aboutC1ST">Skill</h2>
            <p className="aboutC1STPL">HTML 80%</p>
            <div className="aboutC1PL1">
              <div className="aboutCPL1"></div>
            </div>
            <p className="aboutC1STPL">CSS 60%</p>
            <div className="aboutC1PL1">
              <div className="aboutCPL2"></div>
            </div>
            <p className="aboutC1STPL">JavaScript 75%</p>
            <div className="aboutC1PL1">
              <div className="aboutCPL3"></div>
            </div>
            <p className="aboutC1STPL">React 65%</p>
            <div className="aboutC1PL1">
              <div className="aboutCPL4"></div>
            </div>
          </div>
        </div>
        <div className="aboutC2">
          <h2 className="aboutC2h2">About Me</h2>
          <p className="aboutC2BB"></p>
          <p className="aboutC2TA">
            Salom Man Zubayr To'lqinov 2008-yil 12-Iyunda Tug'ilganman. Hozirda
            Uchtepa Tumanidigi 251-maktabda o'qiyman. Man Najot Ta'limni
            Tugatvomma, Najotga kemasimdan oldin c++ 3 oy Registon LSda
            o'qiganman undanam oldin kotlin dasturlash tilini 1 oy It Houseda
            O'qiganman{" "}
          </p>
          <p className="aboutPL1">
            Man biladigna dasturlash tillar: HTML, CSS, JavaScrip, React JS.
            Reducer va Reduxni ham Bilaman
          </p>
        </div>
      </div>
      <div className="AboutMeHref">
        <p className="aboutPLink">
          <a href="tel:+998998801206" target="_blank" className="aboutLink">
            Tel:+998-99-880-12-06
          </a>
        </p>
        <p className="aboutPLink1">
          <Link to="https://t.me/zubayr_2110" target="_blank" className="aboutLink1">
            Telegram
          </Link>
        </p>
      </div>
    </div>
  );
}
