// Shared resume data for all portfolio variants.
const RESUME = {
  name: "Ninad Parthiv Shah",
  initials: "NS",
  // Not rendered by the page. Mirrored by hand into the <meta name="description">
  // and og:/twitter: tags in index.html — keep the two in sync.
  headline: "AI Software Engineer building agents, MCP servers, and production LLM tools.",
  // Rendered as the hero paragraph.
  longPitch:
    "AI Software Engineer with a Master's in Data Science from Arizona State. I work on production LLM systems: multi-pass security scanners, static analysis tooling, agent orchestration with Google ADK and LangGraph, RAG pipelines, and the responsible-AI guardrails that go with them.",
  email: "ninadpshah2@gmail.com",
  phone: "+1 602 884 6345",
  links: {
    linkedin: "linkedin.com/in/ninadpshah",
    github: "github.com/NinadPShah",
  },
  resumeUrl: "resume/Ninad_Shah_AI_Engineer_Resume.pdf",
  available: "Open to AI and Data roles.",
  // Rendered as the paragraph in the Contact section.
  contactPitch:
    "I am open to AI and Data roles where I can own the work from evals to deployment. That covers AI engineering, data engineering, and data science. Email is the quickest way to reach me.",

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
      role: "AI Security Software Engineer",
      location: "Remote",
      start: "Dec 2025",
      end: "Present",
      tag: "Current",
      summary:
        "Building AI security infrastructure. Static analysis tooling, multi-pass LLM analysis, telemetry pipelines, and responsible AI guardrails.",
      bullets: [
        "Designed a five-layer AI security scanner with multi-pass LLM analysis across 25+ metrics. Version-controlled prompts and tiered guardrails brought per-scan cost under $0.005.",
        "Built static analysis tooling in Python over the ast module, tracing taint flow from untrusted sources to dangerous sinks across third-party code to surface injection and exfiltration paths.",
        "Wrote Python and SQL pipelines over BigQuery telemetry modelling 7 threat categories, with a 20-signal confidence model and a 10-layer filter that cut false positives roughly 85%.",
        "Built edit-distance heuristics flagging slopsquatted and typosquatted installs, cross-checked against the live PyPI and npm registries.",
        "Built evaluation pipelines with human-in-the-loop review to validate agent consistency across prompt versions, and analyzed MCP servers in production to surface PII exposure.",
      ],
      stack: ["Static Analysis", "LLM Evals", "MCP", "BigQuery", "SQL", "Python"],
    },
    {
      company: "CAPX",
      role: "AI Software Engineer",
      location: "Remote",
      start: "Aug 2025",
      end: "Dec 2025",
      summary:
        "Shipped agent backends for financial data extraction. Sequential orchestration, typed interfaces, tool calling, and event-driven workflows.",
      bullets: [
        "Built AI agents with Google ADK and LangGraph in sequential and autonomous modes, extracting 20+ metrics from 4,000+ firms via REST APIs.",
        "Built backend services on LangGraph with typed Pydantic interfaces, implementing state management, retries, and orchestration across long-running multi-step jobs.",
        "Owned event-driven services end to end through containerized deploys and CI/CD, iterating on AI-powered tools with real user feedback.",
      ],
      stack: ["Google ADK", "LangGraph", "Pydantic", "FastAPI", "REST"],
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
      id: "ask-ninad",
      title: "Ask Ninad — AI Chat on This Site",
      kicker: "New. Try it — bottom right.",
      year: "2026",
      disciplines: ["AI Engineering", "Software Engineering"],
      blurb:
        "The chat widget on this page. An AI that answers questions about my work in my voice, grounded strictly in a knowledge file I wrote and reviewed line by line, with a source tag on every answer. It refuses anything it cannot source, and it runs entirely on free infrastructure.",
      contributions: [
        "Grounded answers with visible source attribution, and no retrieval layer — the corpus is small enough to send whole",
        "Serverless backend on Cloudflare Workers with per-visitor rate limiting, a global daily cap, and the API key held only as a secret",
        "Refuses unsourced questions and corrects false premises instead of guessing",
        "37-check suite of factual, trap, and prompt-injection questions gates every deploy",
        "Prepared-answer fallback so the widget keeps working if the AI service is unavailable",
      ],
      stack: ["Gemini", "Cloudflare Workers", "JavaScript", "GitHub Pages"],
      metric: { value: "$0", label: "cost to run" },
    },
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
      repoUrl: "https://github.com/ninadpshah/SEC-RAG-MCP",
    },
    {
      id: "ipo-success",
      title: "IPO Success Prediction",
      kicker: "Capstone. ASU.",
      year: "2025",
      disciplines: ["Data Science", "Data Engineering"],
      blurb:
        "An end-to-end ML pipeline predicting 6-month and 3-year IPO performance from SEC filings, macroeconomic indicators, and market sentiment. Scraped 9,000+ companies from SEC EDGAR and narrowed them to 5,057 usable IPOs. Capstone for the M.S. Data Science program at Arizona State.",
      contributions: [
        "6 data sources integrated across 5,057 IPOs from 2009 to 2025",
        "200+ engineered features across financials, macro, and sentiment",
        "LightGBM AUC 0.77 with SHAP interpretability",
        "Investment backtest returning 9.6x random baseline",
      ],
      stack: ["LightGBM", "TensorFlow", "Optuna", "SHAP", "SEC EDGAR", "FRED"],
      metric: { value: "9.6x", label: "ROI vs random" },
      repoUrl: "https://github.com/ninadpshah/IPO-Success-Prediction",
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
      repoUrl: "https://github.com/ninadpshah/Fake-Review-detection",
    },
    {
      id: "tlc-tips",
      title: "NYC Taxi Tip Prediction",
      kicker: "Deep learning. At scale.",
      year: "2025",
      disciplines: ["Data Science", "Software Engineering"],
      blurb:
        "A deep learning regression model over 5.6M+ NYC Yellow Taxi trip records. Neural network with engineered temporal features, GPU-accelerated training, and Z-score outlier filtering.",
      contributions: [
        "5.6M records processed with GPU-accelerated training",
        "Cyclical temporal features extracted from pickup and dropoff timestamps",
        "RMSE of $2.62 on a 1.7M held-out test set",
      ],
      stack: ["TensorFlow", "Keras", "pandas", "scikit-learn", "GPU"],
      metric: { value: "$2.62", label: "test RMSE" },
      repoUrl: "https://github.com/ninadpshah/New-York-TLC-Tip-Prediction",
    },
    {
      id: "vision-blur",
      title: "Vision Without Glasses",
      kicker: "Research. CNN robustness.",
      year: "2022",
      disciplines: ["Data Science", "AI Engineering"],
      blurb:
        "Investigated CNN robustness to image blur for binary classification using transfer learning. Benchmarked DenseNet121, InceptionV3, and ResNet50V2 on Dogs vs Cats with Gaussian and box blur degradation.",
      contributions: [
        "98.5% binary accuracy with DenseNet121 transfer learning",
        "Custom blur pipeline with Gaussian and cylindrical kernels at multiple sigmas",
        "Undergraduate research on CNN degradation under blur, Spring 2022",
      ],
      stack: ["TensorFlow", "Keras", "OpenCV", "Transfer Learning"],
      metric: { value: "98.5%", label: "accuracy" },
      repoUrl: "https://github.com/ninadpshah/Vision-without-glasses",
    },
    {
      id: "social-media",
      title: "Instagram User Analysis",
      kicker: "Analytics. Multi-platform.",
      year: "2026",
      disciplines: ["Data Science"],
      blurb:
        "Behavioral analytics across 5,000+ users on Instagram, TikTok, YouTube, LinkedIn, Twitter, and Facebook. K-means user segmentation and interactive Plotly dashboards for engagement insights.",
      contributions: [
        "K-means clustering surfacing 5 distinct user personas",
        "Interactive Plotly dashboards for engagement and trend analysis",
        "Trend identification across platforms and content types",
      ],
      stack: ["pandas", "scikit-learn", "Plotly", "Seaborn"],
      metric: { value: "5", label: "user segments" },
      repoUrl: "https://github.com/ninadpshah/Instagram-user-analysis",
    },
  ],

  skills: {
    Languages: ["Python", "C", "C++", "SQL", "JavaScript", "Bash"],
    "AI and Data": [
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
      "Causal Inference",
    ],
    "Cloud and Tools": [
      "AWS",
      "Azure",
      "Linux",
      "Docker",
      "FastAPI",
      "Pydantic",
      "pytest",
      "asyncio",
      "REST APIs",
      "PostgreSQL",
      "BigQuery",
      "DuckDB",
      "SQLAlchemy",
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
      "Power BI",
      "Git",
      "GitHub Actions",
      "Jupyter",
    ],
    "Engineering Practices": [
      "Unit and Integration Testing",
      "Static Analysis and AST Tooling",
      "Profiling and Performance Tuning",
      "REST API Design",
      "Async Programming",
      "Packaging and Dependency Management",
      "CI/CD",
      "Code Review",
      "Microservices",
      "Event-Driven Architecture",
    ],
  },

  education: [
    {
      school: "Arizona State University",
      degree: "M.S. Data Science, Analytics, and Engineering",
      location: "Tempe, Arizona",
      start: "Aug 2023",
      end: "May 2025",
      gpa: "3.97 / 4.00",
      notes:
        "Coursework: Statistical Machine Learning. Data Visualization. Data-Driven Optimization. Big Data.",
    },
    {
      school: "Indian Institute of Technology Gandhinagar",
      degree: "B.Tech. Electrical Engineering and Computer Science",
      location: "Gandhinagar, India",
      start: "Jul 2019",
      end: "Jul 2023",
      gpa: "",
      notes: "Dual-major foundation across EE and CS. Signal processing, algorithms, distributed systems.",
      // Rendered as a highlighted line under the notes.
      honor:
        "Admitted through the JEE examinations, India's national entrance route to the IITs. All India Rank 2930 in JEE Mains from a field of over 1.2 million candidates, then All India Rank 1564 in JEE Advanced, the harder second stage that decides IIT admission. Roughly the top 0.13% of the starting field.",
    },
  ],

  // `url` makes the badge a real link to the certificate PDF. Names match the
  // certificates exactly, so a recruiter can check them against AWS.
  certifications: [
    {
      name: "AWS Certified AI Practitioner",
      issuer: "Amazon Web Services",
      issued: "Jun 2025",
      url: "resume/AWS_Certified_AI_Practitioner.pdf",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      issued: "Jun 2025",
      url: "resume/AWS_Certified_Cloud_Practitioner.pdf",
    },
    { name: "Hadoop and Apache Spark", issuer: "LinkedIn Learning" },
    { name: "Microsoft Azure", issuer: "LinkedIn Learning" },
  ],
};

window.RESUME = RESUME;
