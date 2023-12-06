import { Link } from "react-router-dom";
import "./AboutMe.css";
export default function AboutMeP() {
  window.onload = function () {
    const ctx = document.getElementById("myChart");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["HTML", "CSS", "Sass", "Botstrap", "JS", "ReactJS"],
        datasets: [
          {
            label: "# vote",
            data: [95, 70, 100, 50, 60, 55],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  };

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
              <p className="aboutC1AT2">
                Location: <span className="aboutC1AT1span">Toshkent</span>
              </p>
            </div>
          </div>
          <div className="aboutC1S">
            <canvas id="myChart"></canvas>
          </div>
        </div>
        <div className="aboutC2">
          <h2 className="aboutC2h2">About Me</h2>
          <p className="aboutC2BB"></p>
          <p className="aboutC2TA">
            Salom Man Zubayr To'lqinov 2008-yil 12-Iyunda Toshkentda
            Tug'ilganman. Hozirda Uchtepa Tumani 251-maktabda o'qiyman. Man
            Najot Ta'limni Yaqinda Tugatdim, Najotga kemasimdan oldin CPP ni 3
            oy Registon LSda o'qiganman undanam oldin kotlin dasturlash tilini 1
            oy It Houseda O'qiganman{" "}
          </p>
          <p className="aboutPL1">
            Man biladigna dasturlash tillar: HTML, CSS, JavaScrip, React
            JS."Sass, Bootstrap, Reducer, Redux"
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
          <Link
            to="https://t.me/zubayr_2110"
            target="_blank"
            className="aboutLink1"
          >
            Telegram
          </Link>
        </p>
      </div>
    </div>
  );
}
