import "./about.scss";
import { useReveal, fadeInClass } from "../../hooks/useReveal";

const facts = [
  { label: "Full name", value: "Shady Agamy" },
  { label: "Nationality", value: "Egyptian" },
  { label: "Languages", value: "Arabic, English" },
  { label: "Location", value: "Cairo, Egypt" },
  { label: "Time zone", value: "Full overlap with CET / CEST business hours" },
  { label: "Availability", value: "Open to remote opportunities" },
];

export default function About() {
  const header = useReveal<HTMLElement>("about");
  const bio = useReveal<HTMLDivElement>("about");
  const info = useReveal<HTMLDListElement>("about");

  return (
    <div className="page about_page">
      <header
        ref={header.ref}
        className={`page_header ${fadeInClass(header.state)}`}
      >
        <p className="eyebrow">Who I am</p>
        <h1>About me</h1>
      </header>

      <div className="about_grid">
        <div
          ref={bio.ref}
          className={`about_bio ${fadeInClass(bio.state)}`}
        >
          <h2>
            I am <span className="co_main">Shady Agamy</span>
          </h2>
          <p>
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
          <a
            className="btn_outline"
            href="Shady_Agamy_Frontend_Developer_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download CV
          </a>
        </div>

        <dl
          ref={info.ref}
          className={`info_list about_facts ${fadeInClass(info.state, "animate__delay-1s")}`}
        >
          {facts.map(({ label, value }) => (
            <div key={label} className="info_list_row">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
