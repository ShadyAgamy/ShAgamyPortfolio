import "./homepage.scss";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage_section">
        <h1 className="animate__animated animate__slow animate__fadeInUp">
          Hi, I am <span className="co_main">Shady Agamy</span>
        </h1>
        <p className="animate__animated animate__slow animate__fadeInUp animate__delay-2s">
          Frontend developer with 6+ years of experience in web development,
          four of them focused on React &#38; TypeScript. At PlanRadar, a B2B
          construction SaaS used across Europe, I built the approvals feature
          and the core of the shared filter system in a large-scale codebase.
          I'm comfortable owning a feature end to end, from API integration to
          edge cases and testing.
        </p>
        <p className="homepage_location animate__animated animate__slow animate__fadeInUp animate__delay-3s">
          <i className="fas fa-map-marker-alt"></i> Cairo, Egypt &#8212; full
          overlap with CET / CEST business hours.
        </p>
        <div className="links animate__animated animate__slow animate__fadeInUp animate__delay-4s">
          <a
            href="https://www.linkedin.com/in/shady-agamy-746a59147/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/ShadyAgamy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://codepen.io/shady-agmy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
