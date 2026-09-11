import "./about.scss";
import mainLogo from "../../assets/info.svg";

export default function About() {
  return (
    <div className="about_page">
      <h2 className="main_heading animate__animated animate__slow animate__fadeInLeft ">
        about me <span></span> <p className="shadow">about me</p>
      </h2>
      <div className="about_page-container">
        <img
          src={mainLogo}
          alt="Info shape"
          className="about_page-img animate__animated animate__slow animate__fadeIn animate__delay-2s"
        />
        <div className="about_page-about">
          <h3 className=" animate__animated animate__slow animate__fadeInUp animate__delay-2s">
            I am <span className="co_main">Shady Agamy</span>
          </h3>
          <p className=" animate__animated animate__slow animate__fadeInUp animate__delay-3s">
            I'm a frontend developer with 6+ years in web development, four of
            them focused on React and TypeScript at PlanRadar &#8212; a B2B
            construction SaaS used across Europe. There, I've owned features
            end to end: the approvals module from scratch, the shared filter
            system's core architecture, and pieces of the document management
            system, from API integration through edge cases and testing. I
            care about clean, maintainable code and shipping features that
            hold up in production &#8212; and I keep learning as the stack
            evolves.
          </p>
          <ul className="info animate__animated animate__slow animate__fadeInUp animate__delay-4s">
            <li>
              <span>Full Name</span>: Shady Agamy
            </li>
            <li>
              <span>Nationality</span>: Egyptian
            </li>
            <li>
              <span>Languages</span>: Arabic, English
            </li>
            <li>
              <span>Location</span>: Cairo, Egypt
            </li>
            <li>
              <span>Time zone</span>: Full overlap with CET / CEST business
              hours
            </li>
            <li>
              <span>Availability</span>: Open to remote opportunities
            </li>
          </ul>

          <a
            className="custom_btn  animate__animated animate__slow animate__fadeInUp animate__delay-5s"
            href="Shady_Agamy_Frontend_Developer_CV.pdf"
            target="_blank"
            download
          >
            Download cv
          </a>
        </div>
      </div>
    </div>
  );
}
