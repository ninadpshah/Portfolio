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
    {
      company: "CAPX",
      role: "AI Software Engineer",
      location: "Remote",
      start: "Aug 2025",
      end: "Dec 2025",
      summary:
        "Shipped agent backends for financial data extraction. Sequential orchestration, tool calling, and event-driven workflows.",
      bullets: [
        "Built AI agents with Google ADK and sequential autonomous orchestration. Extracted 20+ metrics from 4,000+ firms via REST APIs.",
        "Built backend services with multi-step workflow automation and tool-calling patterns. Implemented state management and usage analysis guardrails.",
        "Owned event-driven architectures and iterated on AI-powered tools with end users based on real-world feedback.",
      ],
      stack: ["Google ADK", "Tool Calling", "FastAPI", "REST"],
    },
    {
      company: "Arizona State University",
      role: "Academic Integrity Data Analyst",
      location: "Tempe, AZ",
      start: "Sep 2024",
      end: "May 2025",
      summary:
        "Owned end-to-end data analysis across 500+ hours of records and turned messy inputs into stakeholder-ready findings.",
      bullets: [
        "Defined project scope and deliverables across 500+ hours of data with attention to detail and fast iteration.",
        "Communicated complex technical findings clearly to stakeholders at different levels through well-documented deliverables.",
      ],
      stack: ["Python", "SQL", "Tableau"],
    },
    {
      company: "Spyne.ai",
      role: "Computer Vision Intern",
      location: "Gurugram, India",
      start: "May 2022",
      end: "Jul 2022",
      summary:
        "Production computer vision systems. 50K+ training images and 99.8% uptime in production.",
      bullets: [
        "Built and deployed production computer vision services using FastAPI and AWS with 99.8% uptime through robust testing.",
        "Designed a computer vision system trained on 50K+ images, iterating on real customer feedback.",
        "Integrated services into production via REST APIs with logging, telemetry, monitoring, and CI/CD pipelines.",
        "Fine-tuned and deployed image enhancement models with 95%+ accuracy.",
      ],
      stack: ["PyTorch", "FastAPI", "AWS", "CI/CD"],
    },
  ],

  projects: [
    {
      id: "edgar-rag",
      title: "SEC EDGAR RAG and Local MCP Server",
      kicker: "Featured. Open Source.",
      year: "2026",
      disciplines: ["AI Engineering", "Data Engineering"],
      blurb:
        "An MCP server with a RAG pipeline over SEC EDGAR 10-K filings. FastMCP, ChromaDB, and BGE embeddings. Year-over-year filing comparison and Loughran-McDonald sentiment scoring grounded in the Lazy Prices research.",
      contributions: [
        "Structure-aware 512-token chunker hitting 87.7% recall on financial docs",
        "Loughran-McDonald sentiment across 5 categories plus YoY cosine similarity diff",
        "Eval harness with 35 golden queries measuring Recall@K and MRR",
      ],
      stack: ["FastMCP", "ChromaDB", "BGE-base", "Python", "Loughran-McDonald"],
      metric: { value: "0.89", label: "Recall @ 5" },
    },
    {
      id: "ipo-success",
      title: "IPO Success Prediction",
      kicker: "Capstone. ASU.",
      year: "2025",
      disciplines: ["Data Science", "Data Engineering"],
      blurb:
        "An end-to-end ML pipeline predicting 6-month and 3-year IPO performance from SEC filings, macroeconomic indicators, and market sentiment. Capstone for the M.S. Data Science program at Arizona State.",
      contributions: [
        "Integrated 6 data sources covering 5,057 IPOs from 2009 to 2025",
        "200+ engineered features across financials, macro, and sentiment",
        "LightGBM AUC 0.77 with SHAP interpretability",
        "Investment backtest returning 9.6x random baseline",
      ],
      stack: ["LightGBM", "TensorFlow", "Optuna", "SHAP", "SEC EDGAR", "FRED"],
      metric: { value: "9.6x", label: "ROI vs random" },
    },
    {
      id: "fake-reviews",
      title: "Fake Review Detection",
      kicker: "Research. ML benchmark.",
      year: "2024",
      disciplines: ["Data Science", "AI Engineering"],
      blurb:
        "A comparative benchmark of 16 classifiers detecting fake reviews on Amazon and Yelp datasets. Engineered sentiment, readability, and behavioral features end to end.",
      contributions: [
        "16 classifiers benchmarked on accuracy, precision, recall, F1, and ROC AUC",
        "VADER sentiment, Flesch readability, and 9 behavioral features",
        "90.2% accuracy on Amazon, 89.7% on Yelp",
      ],
      stack: ["scikit-learn", "XGBoost", "LightGBM", "CatBoost", "NLTK", "VADER"],
      metric: { value: "90.2%", label: "accuracy" },
    },
  ],

  skills: {
    Languages: ["Python", "C", "C++", "SQL", "Julia"],
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
