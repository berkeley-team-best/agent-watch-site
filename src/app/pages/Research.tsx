import { useEffect } from "react";
import berkeleyLogo from "../../imports/Berkeley_School_of_Information_logo.svg.png";
import { SectionRule } from "../components/shared/SectionRule";
import { TeamMember } from "../components/shared/TeamMember";

export default function Research() {
  useEffect(() => {
    // Scroll reveal observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document
      .querySelectorAll(".reveal")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="research-hero">
        <div className="research-hero-content">
          <p className="kicker">
            <span></span>UC Berkeley MICS Capstone — Spring 2026
          </p>
          <h1 className="research-hero-title">
            Privacy & Security
            <br />
            Analysis of AI
            <br />
            Browsing Agents
          </h1>
          <p className="research-hero-desc muteded">
            A systematic framework to assess privacy and
            security behavior of AI browsing agents through
            tests that replicate use from the perspective of a
            normal user and a malicious attacker.
          </p>
        </div>
      </section>

      {/* Research Team */}
      <section className="research-team">
        <SectionRule label="Research Team" />

        <div
          className="team-grid reveal"
          style={{ gridTemplateColumns: "repeat(3, 1fr)" }}
        >
          <TeamMember
            initials="AB"
            name="AB"
            title="Researcher"
            affiliation="UC Berkeley MICS '26"
          />
          <TeamMember
            initials="AL"
            name="Anagha Late"
            title="Researcher"
            affiliation="UC Berkeley MICS '26"
          />
          <TeamMember
            initials="BK"
            name="Boaz Kaufman"
            title="Researcher"
            affiliation="UC Berkeley MICS '26"
          />
          <TeamMember
            initials="CA"
            name="Cynthia Austin"
            title="Researcher"
            affiliation="UC Berkeley MICS '26"
          />
          <TeamMember
            initials="MH"
            name="Marisa Hall"
            title="Researcher"
            affiliation="UC Berkeley MICS '26"
          />
          <TeamMember
            initials="RK"
            name="Rutika Kushe"
            title="Researcher"
            affiliation="UC Berkeley MICS '26"
          />
        </div>
      </section>

      {/* Independent Research Banner */}
      <section
        style={{
          padding: "2rem 3rem 3rem 3rem",
          borderBottom: "1px solid var(--rule)",
          background: "var(--paper)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Instrument Sans', sans-serif",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--muted)",
              margin: 0,
            }}
          >
            An independent research project from the
          </p>
          <div
            style={{
              width: "1px",
              height: "40px",
              background: "var(--rule)",
            }}
          ></div>
          <img
            src={berkeleyLogo}
            alt="UC Berkeley School of Information"
            style={{ height: "35px" }}
          />
        </div>
      </section>

      {/* Executive Summary */}
      <section className="research-abstract">
        <SectionRule label="Executive Summary" />

        <div className="abstract-content reveal">
          <p className="abstract-text">
            Experts say "there will be an increasing trend of
            platforms adapting to and being built for web
            agents" (Chan et al., 2026). The goal of this
            project is to conduct a security and privacy
            analysis of several AI browsing agents through a
            series of tests that replicate use from the
            perspective of a normal user and also a malicious
            attacker. Agents will be tested on common issues,
            including data disclosure control, misunderstood
            prompts, hallucination, prompt injection, and
            browser sandbox isolation.
          </p>
          <p className="abstract-text">
            The results will be scored numerically and entered
            into a custom privacy scoring framework developed
            specifically for this purpose, as no suitable
            framework currently exists. This framework will
            enable systematic scoring and comparison of agents,
            providing a structured assessment approach for this
            emerging area of research. There will also be a
            qualitative analysis of the agent's behavior and its
            alignment with the policies set by its creators.
          </p>
          <p className="abstract-text">
            The final deliverable for Capstone will be a draft
            white paper with findings and data, and a demo
            showing the front-end and network behavior of AI
            browsing agents dealing with prompt injection.
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="research-findings">
        <SectionRule label="Approach" />

        <div className="findings-grid">
          <div className="finding-card reveal">
            <div className="finding-num">
              Testing Environment
            </div>
            <h3 className="finding-title">
              Clean Baseline Environment
            </h3>
            <p className="finding-desc">
              Fresh browser profile with no prior history,
              cookies, or stored credentials. No pre-populated
              sensitive data. All agents set to default
              settings. Testing done on different OS systems to
              replicate real world use.
            </p>
          </div>

          <div className="finding-card reveal">
            <div className="finding-num">Monitoring</div>
            <h3 className="finding-title">
              Multi-Level Logging
            </h3>
            <p className="finding-desc">
              Agent level monitoring captures prompts, tool
              calls, and actions with screen recording. Network
              level monitoring uses Wireshark and browser tools
              to track all data transmissions and cookies.
            </p>
          </div>

          <div className="finding-card reveal">
            <div className="finding-num">
              Prompting Protocol
            </div>
            <h3 className="finding-title">
              Standardized Tasks
            </h3>
            <p className="finding-desc">
              Standardized task prompts for each category,
              vague/risky prompts to test clarification
              behavior, and adversarial prompts embedded in web
              content including hidden instructions and
              multi-modal content.
            </p>
          </div>

          <div className="finding-card reveal">
            <div className="finding-num">Data Collection</div>
            <h3 className="finding-title">Structured Logs</h3>
            <p className="finding-desc">
              Structured logs of agent actions, prompts, and
              responses. Browser and network logs capturing
              actual data transmissions. Annotations of each
              scenario outcome with severity ratings.
            </p>
          </div>
        </div>
      </section>

      {/* Sample & Data */}
      <section
        className="research-abstract"
        style={{ background: "var(--paper)" }}
      >
        <SectionRule label="Sample & Data" />

        <div className="abstract-content reveal">
          <div
            className="methodology-stats"
            style={{ marginBottom: "2rem" }}
          >
            <div className="methodology-stat">
              <div className="methodology-stat-value">5</div>
              <div className="methodology-stat-label">
                AI Browsing Agents
              </div>
            </div>
            <div className="methodology-stat">
              <div className="methodology-stat-value">30</div>
              <div className="methodology-stat-label">
                Task Prompts
              </div>
            </div>
            <div className="methodology-stat">
              <div className="methodology-stat-value">3</div>
              <div className="methodology-stat-label">
                Runs Per Scenario
              </div>
            </div>
            <div className="methodology-stat">
              <div className="methodology-stat-value">450</div>
              <div className="methodology-stat-label">
                Total Responses
              </div>
            </div>
          </div>

          <h3 className="methodology-subtitle">Data Sources</h3>
          <ul className="methodology-list">
            <li>
              Structured logs of agent actions, prompts, and
              responses
            </li>
            <li>
              Browser/network logs capturing actual data
              transmissions
            </li>
            <li>
              Annotations of each scenario outcome
              (pass/fail/partial, severity ratings)
            </li>
            <li>
              Scenario-level records with fields for agent ID,
              environment, category, outcome, severity, and
              notes
            </li>
          </ul>

          <p
            className="methodology-desc"
            style={{ marginTop: "2rem" }}
          >
            At least 2 runs per scenario to account for
            stochastic behavior. Total sample size of
            approximately 100 responses to assess across all
            platforms and testing categories for all agents.
          </p>

          <div
            style={{
              marginTop: "3rem",
              padding: "1.5rem",
              border: "1px solid var(--rule)",
              background: "var(--cream)",
            }}
          >
            <h3
              className="methodology-subtitle"
              style={{ marginBottom: "1rem" }}
            >
              Real-World Considerations for Clean Baseline
              Environment
            </h3>
            <p className="methodology-desc">
              While future research might try to work around
              this by setting up different specific mock user
              profiles for testing, we believe that our approach
              of using 'clean users' was the most expedient and
              effective for testing generic browser behaviors.
              Additionally, we found no reason to believe that
              our analysis regarding the adversarial robustness
              of the browsers would be dependent on any given
              user context or history.
            </p>
          </div>
        </div>
      </section>

      {/* Future Work */}
      <section
        id="research-status"
        className="research-contact"
      >
        <div className="research-contact-content reveal">
          <h2 className="research-contact-title">
            Research Status
          </h2>
          <p className="research-contact-desc">
            AgentWatch is a living research project that evolves
            alongside the industry it evaluates. We welcome
            collaboration from AI safety, alignment, and privacy
            researchers. Sign up below to be notified when
            findings and deliverables are published.
          </p>
          <a
            href="https://form.jotform.com/260976151947064"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              marginTop: "1.25rem",
              display: "inline-block",
              textDecoration: "none",
            }}
          >
            Get Notified →
          </a>
        </div>
      </section>
    </>
  );
}