// Shared resume data for all portfolio variants.
const RESUME = {
  name: "Ninad Parthiv Shah",
  initials: "NS",
  headline: "AI Software Engineer building agents, MCP servers, and production LLM tools.",
  longPitch:
    "I work on production AI. Recent projects include a five-layer security scanner, agent orchestration with Google ADK, and a RAG pipeline over SEC filings. I focus on evals, guardrails, and the infrastructure that keeps agents reliable in production.",
  location: "Salt Lake City, UT. Remote. Open to relocation.",
  email: "ninadpshah2@gmail.com",
  phone: "+1 602 884 6345",
  links: {
    linkedin: "linkedin.com/in/ninadpshah",
    github: "github.com/NinadPShah",
  },
  resumeUrl: "https://drive.google.com/file/d/1wy9pdjOpB591IIImGIc2HprW5UUhAzsh/view?usp=sharing",
  available: "Open to AI and ML Engineer roles. May 2026.",
  alsoOpen: "Primary focus: AI and ML Engineering. Also open to Data Engineering and Data Science roles.",

  capabilities: [
    {
      title: "AI Engineering",
      blurb: "LLM systems in production. Agents, MCP servers, evals, and guardrails.",
      tags: ["Agents", "MCP", "RAG", "Evals"],
      primary: true,
    },
    {
      title: "Data Science",
      blurb: "Statistical modelling and analysis on large, messy real-world data.",
      tags: ["Python", "Statistics", "ML"],
    },
    {
      title: "Software Engineering",
      blurb: "Production backends, REST APIs, and the CI/CD that keeps them shipping.",
      tags: ["FastAPI", "Docker", "CI/CD"],
    },
    {
      title: "Data Engineering",
      blurb: "Scalable pipelines and storage across distributed systems and cloud.",
      tags: ["PySpark", "AWS", "Snowflake"],
    },
  ],

  experience: [
    {
      company: "Armor1.ai",
      role: "Security Software Engineer",
      location: "Remote",
      start: "Dec 2025",
      end: "Present",
      tag: "Current",
      summary:
        "Building AI security infrastructure. Multi-pass LLM analysis, evaluation pipelines, and responsible AI guardrails.",
      bullets: [
        "Designed a five-layer AI security scanner with multi-pass LLM analysis across 25+ metrics. Combined static review with agent-based detection and tiered guardrails to cut per-scan cost under $0.005.",
        "Built evaluation pipelines with human-in-the-loop review to validate agent consistency across prompt versions on curated evalsets.",
        "Analyzed MCP servers and AI tooling in production to surface PII exposure and security risks, driving responsible AI framework adoption.",
      ],
      stack: ["LLM Evals", "MCP", "Guardrails", "Python"],
    },
  ],

  projects: [
  ],

  skills: {
    Languages: [
],
    "AI and ML": [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "CatBoost",
      "OpenCV",
      "spaCy",
      "NLTK",
      "Hugging Face",
      "MLflow",
      "LangChain",
      "LangGraph",
      "Google ADK",
      "Claude Agent SDK",
    ],
    "Modelling and Systems": [
      "LLMs",
      "Agent Orchestration",
      "MCP Servers",
      "RAG Pipelines",
      "Tool Calling",
      "A2A Coordination",
      "Prompt Engineering",
      "Eval Pipelines",
      "Responsible AI",
      "Computer Vision",
      "Transfer Learning",
      "Sentiment Analysis",
      "Feature Engineering",
      "Time Series",
    ],
    "Cloud and Tools": [
      "AWS",
      "Azure",
      "Docker",
      "FastAPI",
      "REST APIs",
      "PySpark",
      "Spark",
      "Hadoop",
      "Snowflake",
      "Vector DBs",
      "ChromaDB",
      "FastMCP",
      "Optuna",
      "SHAP",
      "pandas",
      "NumPy",
      "Plotly",
      "Tableau",
      "Git",
      "Jupyter",
    ],
  },

  education: [
  ],

  certifications: [
  ],
};

window.RESUME = RESUME;
