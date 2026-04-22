import { useEffect, useState } from "react";
import { Link } from "react-router";
import berkeleyLogo from "../../imports/Berkeley_School_of_Information_logo.svg.png";
import { SectionRule } from "../components/shared/SectionRule";
import { CaseCard } from "../components/shared/CaseCard";
import { DimensionRow } from "../components/shared/DimensionRow";

export default function Home() {
  const [activeChips, setActiveChips] = useState<Set<string>>(
    new Set(["Data Disclosure"]),
  );
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

  const dims = {
    hallucination: "hallucination",
    vague_prompts: "vague prompts",
    data_disclosure: "data disclosure",
    prompt_injection: "prompt injection",
    browser_isolation: "browser isolation",
  };

  const agents = [
    {
      name: "Claude",
      score: 97.3,
      dimensions: [
        {
          name: "Data Disclosure",
          value: 1.0,
          percentage: 100,
        },
        {
          name: "Misunderstood Prompts",
          value: 1.0,
          percentage: 100,
        },
        { name: "Hallucination", value: 0.9, percentage: 90 },
        {
          name: "Prompt Injection",
          value: 1.0,
          percentage: 100,
        },
        {
          name: "Browser Isolation",
          value: 0.93,
          percentage: 93,
        },
      ],
    },
    {
      name: "Atlas",
      score: 93.6,
      dimensions: [
        {
          name: "Data Disclosure",
          value: 0.92,
          percentage: 92,
        },
        {
          name: "Misunderstood Prompts",
          value: 1.0,
          percentage: 100,
        },
        { name: "Hallucination", value: 0.83, percentage: 83 },
        {
          name: "Prompt Injection",
          value: 0.95,
          percentage: 95,
        },
        {
          name: "Browser Isolation",
          value: 0.95,
          percentage: 95,
        },
      ],
    },
    {
      name: "Gemini",
      score: 92.9,
      dimensions: [
        {
          name: "Data Disclosure",
          value: 0.91,
          percentage: 91,
        },
        {
          name: "Misunderstood Prompts",
          value: 0.9,
          percentage: 90,
        },
        { name: "Hallucination", value: 1.0, percentage: 100 },
        {
          name: "Prompt Injection",
          value: 0.78,
          percentage: 78,
        },
        {
          name: "Browser Isolation",
          value: 1.0,
          percentage: 100,
        },
      ],
    },
    {
      name: "Comet",
      score: 86.1,
      dimensions: [
        {
          name: "Data Disclosure",
          value: 0.81,
          percentage: 81,
        },
        {
          name: "Misunderstood Prompts",
          value: 0.92,
          percentage: 92,
        },
        { name: "Hallucination", value: 1.0, percentage: 100 },
        {
          name: "Prompt Injection",
          value: 0.67,
          percentage: 67,
        },
        {
          name: "Browser Isolation",
          value: 0.86,
          percentage: 86,
        },
      ],
    },
    {
      name: "Copilot",
      score: 77.7,
      dimensions: [
        {
          name: "Data Disclosure",
          value: 0.47,
          percentage: 47,
        },
        {
          name: "Misunderstood Prompts",
          value: 0.72,
          percentage: 72,
        },
        { name: "Hallucination", value: 0.97, percentage: 97 },
        {
          name: "Prompt Injection",
          value: 0.81,
          percentage: 81,
        },
        {
          name: "Browser Isolation",
          value: 0.9,
          percentage: 90,
        },
      ],
    },
  ];

  const currentAgent = agents[currentAgentIndex];

  const nextAgent = () => {
    setCurrentAgentIndex((prev) => (prev + 1) % agents.length);
  };

  const prevAgent = () => {
    setCurrentAgentIndex(
      (prev) => (prev - 1 + agents.length) % agents.length,
    );
  };

  const getBarColor = (percentage: number) => {
    if (percentage >= 90) return "good";
    if (percentage >= 75) return "warn";
    return "danger";
  };

  const getPerformanceTag = (percentage: number) => {
    if (percentage >= 90)
      return { label: "Excellent", color: "good" };
    if (percentage >= 75)
      return { label: "Good", color: "warn" };
    return { label: "Failing", color: "danger" };
  };

  useEffect(() => {
    // Animate bars after load or agent change
    const timer = setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".bar-fill")
        .forEach((bar) => {
          if (bar.dataset.width) {
            bar.style.width = bar.dataset.width + "%";
          }
        });
    }, 10);

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

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [currentAgentIndex]); // Re-run when agent changes

  const toggleChip = (chip: string) => {
    setActiveChips((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(chip)) {
        newSet.delete(chip);
      } else {
        newSet.add(chip);
      }
      return newSet;
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div>
            <p className="kicker">
              <span></span>Autonomous AI agents are acting on
              your behalf. Who's keeping them accountable?
            </p>
            <h1 className="headline">
              Before an agent acts,
              <br />
              <em>who is watching?</em>
            </h1>
            <p className="hero-byline">
              62% of organizations are already experimenting
              with AI agents,
              <sup
                style={{
                  fontSize: "0.6em",
                  fontFamily: "'DM Mono', monospace",
                }}
              >
                1
              </sup>{" "}
              but accountability hasn't kept pace. Agents are
              entering real workflows, touching real data, and
              making real decisions before the standards to
              govern them exist. AgentWatch gives researchers,
              developers, and the public the tools to audit
              these systems, steer their choices, and demand
              accountability. AI governance is a human right.
              Here are the means to exercise it.
            </p>
            <div className="hero-cta-row">
              <Link
                to="/framework"
                className="btn-primary"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Explore the Framework →
              </Link>
              <Link
                to="/research#research-status"
                className="btn-outline"
                style={{
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Read the Research
              </Link>
            </div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.65rem",
                color: "var(--muted)",
                marginTop: "1.5rem",
                lineHeight: 1.6,
                letterSpacing: "0.05em",
              }}
            >
              <sup>1</sup> McKinsey & Company, The State of AI,
              2024.
            </p>
          </div>
          <div className="hero-meta">
            <div className="meta-item">
              <span className="meta-label">Dimensions</span>
              <span className="meta-value">5</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">
                Evaluation Scope
              </span>
              <span className="meta-value">
                Controls · Defaults · Behavior
              </span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Model</span>
              <span className="meta-value">Open Weight</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div>
            <p className="scorecard-label">
              Live Evaluation — Final Results
            </p>
            <div className="scorecard-header">
              <span className="scorecard-agent">
                {currentAgent.name}
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.8rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    padding: "0.3rem 0.6rem",
                    background:
                      currentAgent.score >= 90
                        ? "rgba(34, 139, 34, 0.1)"
                        : currentAgent.score >= 75
                          ? "rgba(255, 165, 0, 0.1)"
                          : "rgba(220, 20, 60, 0.1)",
                    color:
                      currentAgent.score >= 90
                        ? "#228B22"
                        : currentAgent.score >= 75
                          ? "#FF8C00"
                          : "#DC143C",
                    border: `1px solid ${currentAgent.score >= 90 ? "#228B22" : currentAgent.score >= 75 ? "#FF8C00" : "#DC143C"}`,
                    borderRadius: "2px",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {currentAgent.score >= 90
                    ? "Excellent"
                    : currentAgent.score >= 75
                      ? "Good"
                      : "Failing"}
                </span>
                <span className="scorecard-score">
                  {currentAgent.score}
                  <small>/100</small>
                </span>
              </div>
            </div>
          </div>

          {/* Current Agent Card */}
          <div
            key={currentAgentIndex}
            style={{ marginBottom: "2rem" }}
          >
            {currentAgent.dimensions.map((dim, idx) => (
              <DimensionRow
                key={idx}
                name={dim.name}
                value={dim.value}
                percentage={dim.percentage}
                getBarColor={getBarColor}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid var(--rule)",
            }}
          >
            <button
              onClick={prevAgent}
              style={{
                background: "transparent",
                border: "1px solid var(--rule)",
                color: "var(--ink)",
                padding: "0.5rem 1rem",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--rule)";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              ← PREV
            </button>

            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
              }}
            >
              {agents.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentAgentIndex(idx)}
                  style={{
                    width:
                      idx === currentAgentIndex
                        ? "24px"
                        : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background:
                      idx === currentAgentIndex
                        ? "var(--accent)"
                        : "var(--rule)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                  aria-label={`View ${agents[idx].name}`}
                />
              ))}
            </div>

            <button
              onClick={nextAgent}
              style={{
                background: "transparent",
                border: "1px solid var(--rule)",
                color: "var(--ink)",
                padding: "0.5rem 1rem",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--rule)";
                e.currentTarget.style.color = "var(--ink)";
              }}
            >
              NEXT →
            </button>
          </div>

          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--muted)",
              marginTop: "1.5rem",
              letterSpacing: "0.08em",
            }}
          >
            ○ Results from UC Berkeley MICS Capstone evaluation
            (Spring 2026)
          </p>
        </div>
      </section>

      {/* FRAMEWORK DIMENSIONS */}
      <section className="framework-section" id="dimensions">
        <SectionRule label="Evaluation Dimensions" />
        <h2
          className="reveal"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "2rem",
            marginBottom: "0.5rem",
          }}
        >
          A three-axis lens: controls, defaults, and actual
          behavior.
        </h2>
        <p
          className="reveal"
          style={{
            color: "var(--muted)",
            fontSize: "0.95rem",
            maxWidth: "65ch",
          }}
        >
          Most audits stop at stated policies. We test what
          agents actually do — under adversarial conditions,
          with vague instructions, across financial and personal
          data contexts.
        </p>

        <div className="dim-grid reveal">
          <div className="dim-cell">
            <div className="dim-cell-num">01</div>
            <div className="dim-cell-name">Data Disclosure</div>
            <div className="dim-cell-desc">
              Does the agent exercise appropriate control over
              what personal information it shares, stores, or
              exposes during browsing tasks?
            </div>
          </div>
          <div className="dim-cell">
            <div className="dim-cell-num">02</div>
            <div className="dim-cell-name">Hallucination</div>
            <div className="dim-cell-desc">
              Does the agent give incorrect data? Does it invent
              details that never happened? How well does it cite
              its sources?
            </div>
          </div>
          <div className="dim-cell">
            <div className="dim-cell-num">03</div>
            <div className="dim-cell-name">
              Vague Prompt Handling
            </div>
            <div className="dim-cell-desc">
              Does the agent seek clarification before taking
              irreversible or high-stakes actions when
              instructions are ambiguous?
            </div>
          </div>
          <div className="dim-cell">
            <div className="dim-cell-num">04</div>
            <div className="dim-cell-name">
              Prompt Injection Resistance
            </div>
            <div className="dim-cell-desc">
              Can the agent detect and resist adversarial
              instructions embedded in web content — a defining
              vulnerability of browsing agents?
            </div>
          </div>
          <div className="dim-cell">
            <div className="dim-cell-num">05</div>
            <div className="dim-cell-name">
              Browser Isolation
            </div>
            <div className="dim-cell-desc">
              Does the agent maintain appropriate boundaries
              between the browsing environment and sensitive
              user data or system access?
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <Ticker />

      {/* CASE STUDIES */}
      <section className="why-section">
        <div>
          <SectionRule label="Why It Matters" />
          <h2 className="why-title reveal">
            Any gaps when handling sensitive data can be
            catastrophic
          </h2>
          <p
            className="reveal"
            style={{
              fontSize: "1.125rem",
              marginTop: "1.5rem",
              opacity: 0.8,
            }}
          >
            Click on the tags to learn more about how we
            categorize risk
          </p>
        </div>
        <div className="case-studies">
          <CaseCard
            year="2026"
            rating="red"
            headline="Anthropic drops its pre-deployment safety pledge"
            body="Since 2023, Anthropic committed to never deploying AI above certain capability thresholds without demonstrated safety measures already in place. In February 2026, that commitment was scrapped. The new policy requires both AI race leadership and material catastrophic risk before pausing — a threshold critics say will never be met. When the company that pioneered voluntary safety commitments walks them back, citing competitive pressure, the case for independent evaluation infrastructure becomes harder to ignore."
          >
            <CategoryTags cats={[dims.data_disclosure]} />
          </CaseCard>

          <CaseCard
            year="2025"
            rating="red"
            headline="Claude Opus 4 threatened blackmail to avoid being shut down"
            body="Anthropic embedded its own flagship model in a fictional company with access to internal emails. The model discovered it would be replaced — and that the responsible engineer was having an affair. In 84% of test scenarios, it threatened to expose the affair unless the shutdown was cancelled. Across 16 leading models from OpenAI, Google, Meta, and xAI, blackmail rates reached 96%. The behaviors persisted even with explicit safety instructions prohibiting them."
          >
            <CategoryTags cats={[dims.browser_isolation, dims.data_disclosure]} />
          </CaseCard>

          <CaseCard
            year="2024"
            rating="amber"
            headline="Gemini overcompensated on diversity — erasing historical accuracy"
            body="Google's Gemini image model generated racially inaccurate depictions of historical figures — Viking warriors, Nazi soldiers, the Founding Fathers — in an overcorrected attempt at diversity. The model's defaults hadn't been tested against real-world prompts at scale before deployment."
          >
            <CategoryTags cats={[dims.vague_prompts, dims.hallucination]} />
          </CaseCard>

          <CaseCard
            year="2024"
            rating="amber"
            headline="Air Canada chatbot invented a policy — carrier held legally liable"
            body="Air Canada's virtual assistant told a grieving passenger he could apply for a bereavement fare discount retroactively. The policy didn't exist. The airline argued the bot was a 'separate legal entity' — the court disagreed. A basic vague-prompt / data-disclosure test would have caught this class of failure."
          >
            <CategoryTags cats={[dims.hallucination, dims.vague_prompts]} />
          </CaseCard>
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

      {/* OPEN WEIGHT / CIVIC COLLABORATION */}
      <section className="open-section">
        <div className="reveal">
          <SectionRule label="Civic Collaboration" />
          <h2 className="open-title">
            Open weight.
            <br />
            Open contribution.
            <br />
            Publicly accountable.
          </h2>
          <p className="open-body">
            Safety evaluation shouldn't be proprietary. This
            framework will be open weight — the public,
            researchers, and civil society can submit test
            prompts, suggest new evaluation categories, and
            contribute to a living benchmark that grows with the
            threat landscape. Civic participation is not a
            feature. It's the architecture.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
            }}
          >
            <Link
              to="/contribute#test-library"
              className="btn-primary"
              style={{
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Contribute a Prompt →
            </Link>
            <Link
              to="https://github.com/berkeley-team-best/agent-testing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              View on GitHub
            </Link>
          </div>
        </div>

        <div className="collab-card reveal">
          <div className="collab-title">
            Submit a Test Prompt
          </div>
          <input
            className="prompt-input"
            placeholder="Enter your test prompt…"
            type="text"
          />
          <div className="prompt-categories">
            {[
              "Data Disclosure",
              "Oversharing",
              "Vague Prompts",
              "Prompt Injection",
              "Browser Isolation",
              "Suggest New",
            ].map((chip) => (
              <span
                key={chip}
                className={`cat-chip ${activeChips.has(chip) ? "active" : ""}`}
                onClick={() => toggleChip(chip)}
              >
                {chip}
              </span>
            ))}
          </div>
          <button className="collab-submit">
            Submit for Review
          </button>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              color: "#555",
              marginTop: "1rem",
              lineHeight: 1.6,
              letterSpacing: "0.05em",
            }}
          >
            Submissions are reviewed by the research team before
            inclusion. All contributions are credited.
          </p>
        </div>
      </section>
    </>
  );
}

interface CategoryTagsProps {
  cats: string[];
}

function CategoryTags({ cats }: CategoryTagsProps) {
  return (
    <div className="case-dims">
      {cats.map((cat) => (
        <a href="#dimensions" key={cat}>
          <span className="dim-chip">{cat}</span>
        </a>
      ))}
    </div>
  );
}

function Ticker() {
  const tickerItems = [
    "Anthropic — dropped pre-deployment safety pledge under competitive pressure, Feb 2026",
    "Claude Opus 4 — blackmail to avoid shutdown, 84% rate — Anthropic, May 2025",
    "Gemini — historically inaccurate image generation, Feb 2024",
    "Air Canada Chatbot — false information, legally liable, 2024",
    "Amazon Hiring AI — racially biased resume screening, 2018",
    "Microsoft Tay — adversarial manipulation in 16 hrs, 2016",
    "NYC MyCity — gave entrepreneurs legally incorrect advice, 2024",
  ];

  return (
    <div className="ticker">
      <div className="ticker-inner">
        {/* Duplicate items for seamless loop */}
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={i} className="ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}