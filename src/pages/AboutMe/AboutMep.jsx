import "./AboutMe.css";

export default function AboutMeP() {
  return (
    <div className="aboutC">
      <h1 className="abouth1">Men Haqimda</h1>
      <div className="aboutContent">
        <p className="aboutCA">
          Man <span className="aboutME">Zubayr To'lqinov</span> 2008-Yilda
          Toshkentda Tug'ilganman. Man Hozir Uchtepa Tumani 251-maktabda
          O'qiyman. Man Hozirda <span className="aboutNT">Najot Ta'limni</span>{" "}
          Bitirvomman 10-Dekabrda Tugidi. Man{" "}
          <span className="aboutNT">Najot Ta'limga</span> Kemasimdan Oldin
          Birinchi Bo'b <span className="aboutPL">Kotlin</span> Dasturlash
          Tilini 1 oy ITHousda O'qiganman, Undan Keyin{" "}
          <span className="aboutPL">C++</span> ni 3-oy Yunusobodda Registon LSda
          O'qiganman, Keyin <span className="aboutNT">Najot Ta'limga</span>{" "}
          Keganman. Nega Uyolada yana o'qimaganim sabab orada azgina sharoit
          bo'magani sabab uyoda o'qiyolmadm keyin{" "}
          <span className="aboutNT">Najot Ta'limga</span> keldm.
        </p>
        <p className="aboutError">Bu Pageni Dizaynini Qilomapti Dib O'ylamela Prosta Dizyan Qilishga Erindim</p>
        <p className="aboutPLink">  
          <a href="tel:+998998801206" className="aboutLink">
            Tel:+998998801206
          </a>
        </p>
        <p className="aboutPLink1">
          <a href="https://t.me/zubayr_2110" className="aboutLink1">Telegram</a>
        </p>
      </div>
    </div>
  );
}
