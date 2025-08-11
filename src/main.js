const roadmapData = {
  foundations: {
    "cs-fundamentals": {
      title: "Core CS & Programming Principles",
      content: `
              <h4 class="font-bold text-lg mb-2">Data Structures & Algorithms (DSA)</h4>
              <p class="mb-4">The backbone of efficient code. While you won't implement complex algorithms daily, DSA knowledge trains you to write optimized, scalable code, reducing technical debt and improving performance—a key selling point for clients.</p>
              <h4 class="font-bold text-lg mb-2">Object-Oriented Programming (OOP)</h4>
              <p class="mb-4">Mastering OOP helps you write modular, reusable, and maintainable code. For a solopreneur managing entire codebases alone, this is a direct investment in long-term productivity and project quality.</p>
              <h4 class="font-bold text-lg mb-2">Problem-Solving & Critical Thinking</h4>
              <p>This is your core skill. It's not just about debugging; it's about understanding client needs, architecting solutions, and navigating business challenges. It's what separates a coder from a true solopreneur.</p>
          `,
    },
    "os-networking": {
      title: "Operating Systems & Networking",
      content: `
              <h4 class="font-bold text-lg mb-2">Linux Mastery</h4>
              <p class="mb-4">A force multiplier for operational efficiency. Deep Linux knowledge allows you to manage cloud servers, automate tasks with shell scripts (Bash/Python), and troubleshoot deployment issues without needing a separate administrator, saving time and money.</p>
              <h4 class="font-bold text-lg mb-2">Networking Fundamentals</h4>
              <p>Essential for designing secure, scalable, and highly available applications. Understanding the OSI model, IP, DNS, Load Balancing, and Firewalls empowers you to prevent costly outages and build client trust by delivering reliable systems.</p>
          `,
    },
    "version-control": {
      title: "Version Control Systems",
      content: `
              <h4 class="font-bold text-lg mb-2">Git: Your Personal Safety Net</h4>
              <p class="mb-4">Mastery of Git is non-negotiable. It allows for safe experimentation, easy rollbacks, and provides a clear history of your work. A well-maintained Git repository is also a professional showcase of your organized development practices to clients.</p>
              <h4 class="font-bold text-lg mb-2">Platforms: GitHub, GitLab</h4>
              <p>These platforms are your portfolio and your gateway to the open-source community. A strong GitHub profile with personal projects and contributions is a powerful marketing tool for attracting freelance work and demonstrating your skills.</p>
          `,
    },
  },
  paths: {
    frontend: {
      title: "Frontend Development",
      content: `
              <p>This is the art and science of building the user's experience. It's what your clients and their customers see, touch, and interact with. A great frontend is responsive, accessible, and visually appealing.</p>
              <div class="mt-4 p-4 bg-white rounded-lg">
                  <h4 class="font-bold text-lg mb-2">Key Areas</h4>
                  <ul class="list-disc list-inside text-gray-700">
                      <li><strong>HTML:</strong> The semantic skeleton of the web.</li>
                      <li><strong>CSS:</strong> Styling, layout, and responsiveness.</li>
                      <li><strong>JavaScript:</strong> The language of interactivity.</li>
                      <li><strong>Frameworks:</strong> Tools to build complex UIs efficiently.</li>
                  </ul>
              </div>
          `,
    },
    "html-css": {
      title: "HTML & CSS",
      content: `
              <h4 class="font-bold text-lg mb-2">HTML: Semantic & Accessible</h4>
              <p class="mb-4">Go beyond basic tags. Using semantic HTML (&lt;article&gt;, &lt;nav&gt;) improves SEO and accessibility (WCAG). For a freelancer, this is a key differentiator, opening doors to clients with specific accessibility mandates.</p>
              <h4 class="font-bold text-lg mb-2">CSS: Modern Layout & Frameworks</h4>
              <p>Master Flexbox and Grid for complex layouts. Leverage a framework like <strong>Tailwind CSS</strong> to rapidly build professional, responsive designs. Speed and quality are paramount in freelance projects, and frameworks are your shortcut to both.</p>
          `,
    },
    javascript: {
      title: "JavaScript (ES6+)",
      content: `
              <h4 class="font-bold text-lg mb-2">The Universal Language</h4>
              <p class="mb-4">Mastery of modern JavaScript (ES6+ features like arrow functions, classes, modules) is non-negotiable. It allows you to write clean, maintainable, and efficient code, reducing debug time and technical debt.</p>
              <h4 class="font-bold text-lg mb-2">Solopreneur's Advantage</h4>
              <p>JS is incredibly versatile. You can use it for the frontend, the backend (Node.js), and even mobile apps (React Native). Mastering one language ecosystem for the entire stack maximizes your productivity and market appeal.</p>
          `,
    },
    "frontend-frameworks": {
      title: "Frontend Frameworks",
      content: `
              <p class="mb-4">Frameworks provide a structured foundation for building complex applications. The choice depends on project needs, but understanding the landscape is key. React is the market leader, making it a strategic first choice.</p>
              <div class="chart-container my-6">
                  <canvas id="frameworks-chart"></canvas>
              </div>
              <div id="framework-details" class="mt-4 p-4 bg-white rounded-lg border border-gray-200">
                  <p class="text-gray-600">Click on a framework in the legend to see details here.</p>
              </div>
          `,
    },
    "build-tools": {
      title: "Frontend Build Tools",
      content: `
              <h4 class="font-bold text-lg mb-2">Webpack, Vite, & Babel</h4>
              <p class="mb-4">These tools are essential for a professional workflow. They automate tasks like bundling code, transpiling modern JS for older browsers (Babel), and optimizing assets for production. Proficiency here leads to faster load times and a better user experience.</p>
              <h4 class="font-bold text-lg mb-2">Why They Matter</h4>
              <p>A streamlined build process with tools like Vite (offering lightning-fast updates) directly translates to quicker project delivery and a higher quality end-product, enhancing your reputation and client satisfaction.</p>
          `,
    },
    backend: {
      title: "Backend Development",
      content: `
              <p>This is the engine room of your application. Backend development involves server-side logic, APIs, databases, and all the behind-the-scenes work that powers the user-facing frontend.</p>
              <div class="mt-4 p-4 bg-white rounded-lg">
                  <h4 class="font-bold text-lg mb-2">Key Areas</h4>
                  <ul class="list-disc list-inside text-gray-700">
                      <li><strong>Backend Language:</strong> The core logic (e.g., Node.js, Python).</li>
                      <li><strong>APIs:</strong> How the frontend and backend communicate.</li>
                      <li><strong>Databases:</strong> Storing and retrieving application data.</li>
                      <li><strong>Security:</strong> Protecting data and infrastructure.</li>
                  </ul>
              </div>
          `,
    },
    "backend-languages": {
      title: "Choosing a Backend Language",
      content: `
              <h4 class="font-bold text-lg mb-2">Node.js with Express</h4>
              <p class="mb-4">An exceptionally strong choice for its full-stack JavaScript synergy. Reduces cognitive load and is highly efficient for building APIs and real-time applications. The vast ecosystem is a huge plus for a solo developer.</p>
              <h4 class="font-bold text-lg mb-2">Python with Django/Flask/FastAPI</h4>
              <p class="mb-4">A compelling alternative, especially if you're interested in data-driven apps or AI/ML integration. Python's readability and powerful frameworks (Flask for simplicity, Django for "batteries-included" rapid development) make it very versatile.</p>
              <h4 class="font-bold text-lg mb-2">Other Languages (Go, Java, PHP)</h4>
              <p>Awareness of these languages can unlock valuable niche freelance opportunities in areas like high-performance services (Go), enterprise applications (Java), or CMS/e-commerce (PHP).</p>
          `,
    },
    apis: {
      title: "API Design & Development",
      content: `
              <h4 class="font-bold text-lg mb-2">RESTful Principles</h4>
              <p class="mb-4">Mastering REST is fundamental for creating interoperable applications and integrating with third-party services. A well-designed API is a hallmark of a professional developer.</p>
              <h4 class="font-bold text-lg mb-2">Introduction to GraphQL</h4>
              <p>A forward-looking skill. GraphQL offers a more efficient way to fetch data, reducing network overhead. Knowing it can be a significant advantage for modern projects and clients who prioritize performance.</p>
          `,
    },
    databases: {
      title: "Database Management",
      content: `
              <p class="mb-6">Choosing the right database is a critical architectural decision that impacts performance, cost, and scalability. As a solopreneur, you are the database architect.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="p-6 bg-white rounded-lg border border-gray-200">
                      <h4 class="font-bold text-lg mb-2">SQL (Relational)</h4>
                      <p class="text-sm text-gray-500 mb-2">e.g., PostgreSQL, MySQL</p>
                      <p class="mb-3">Best for structured data where consistency is critical (e.g., financial systems, e-commerce transactions). Table-based with a predefined schema.</p>
                      <strong class="text-[#38332E]">Choose for:</strong> Data integrity, complex queries.
                  </div>
                  <div class="p-6 bg-white rounded-lg border border-gray-200">
                      <h4 class="font-bold text-lg mb-2">NoSQL (Non-Relational)</h4>
                      <p class="text-sm text-gray-500 mb-2">e.g., MongoDB, Redis</p>
                      <p class="mb-3">Best for unstructured or rapidly changing data (e.g., social media feeds, content management). Flexible, schema-less models.</p>
                      <strong class="text-[#38332E]">Choose for:</strong> Scalability, flexibility, speed.
                  </div>
              </div>
               <div class="mt-6 p-4 bg-teal-50 border-l-4 border-teal-500 rounded">
                  <h4 class="font-bold text-lg mb-2 text-teal-800">Solopreneur's Secret Weapon: PostgreSQL</h4>
                  <p class="text-teal-700">PostgreSQL is exceptionally versatile. With extensions, it can handle caching, full-text search, and even AI vector embeddings, potentially replacing multiple other services. This consolidation simplifies your stack and significantly reduces infrastructure costs.</p>
              </div>
          `,
    },
    devops: {
      title: "DevOps Engineering",
      content: `
              <p>DevOps is a culture and a set of practices that automate and integrate the processes between software development and IT operations. For a solopreneur, it's the key to scaling your output without scaling your team.</p>
               <div class="mt-4 p-4 bg-white rounded-lg">
                  <h4 class="font-bold text-lg mb-2">Key Areas</h4>
                  <ul class="list-disc list-inside text-gray-700">
                      <li><strong>CI/CD:</strong> Automating your delivery pipeline.</li>
                      <li><strong>Containers:</strong> Packaging apps for portability.</li>
                      <li><strong>IaC:</strong> Managing infrastructure with code.</li>
                      <li><strong>Cloud:</strong> Your digital infrastructure provider.</li>
                  </ul>
              </div>
          `,
    },
    "ci-cd": {
      title: "CI/CD Pipelines",
      content: `
              <h4 class="font-bold text-lg mb-2">Automated Builds & Testing (CI)</h4>
              <p class="mb-4">Continuous Integration is your personal QA team. It automatically builds and tests your code on every commit, catching bugs early and ensuring high code quality. This is indispensable when you're working alone.</p>
              <h4 class="font-bold text-lg mb-2">Seamless Releases (CD)</h4>
              <p class="mb-4">Continuous Delivery/Deployment allows you to release new features and fixes faster and more reliably. This agility is a huge competitive advantage in the freelance market.</p>
              <h4 class="font-bold text-lg mb-2">Recommended Tool: GitHub Actions</h4>
              <p>It's simple, tightly integrated with your repository, and has a low barrier to entry. It "just works," minimizing the time you spend on pipeline maintenance and maximizing your coding time.</p>
          `,
    },
    containers: {
      title: "Containerization & Orchestration",
      content: `
              <h4 class="font-bold text-lg mb-2">Docker: Your Consistency King</h4>
              <p class="mb-4">Docker solves the "it works on my machine" problem forever. It packages your application and its dependencies into a portable container, ensuring it runs predictably anywhere. This is crucial for delivering reliable projects.</p>
              <h4 class="font-bold text-lg mb-2">Kubernetes: The Scalability Engine</h4>
              <p class="mb-4">While complex, mastering Kubernetes (K8s) allows you to build highly scalable, resilient, enterprise-ready applications. For a solopreneur, the pragmatic path is to learn the principles and then leverage <strong>Managed K8s Services (EKS, AKS, GKE)</strong> in production. This gives you the power of K8s without the massive operational overhead.</p>
              <h4 class="font-bold text-lg mb-2">Lightweight Alternatives</h4>
              <p>For smaller projects or local development, consider simpler tools like <strong>K3s</strong> or <strong>Docker Swarm</strong> to get the benefits of orchestration without the complexity of full-blown K8s.</p>
          `,
    },
    iac: {
      title: "Infrastructure as Code (IaC)",
      content: `
              <h4 class="font-bold text-lg mb-2">Terraform: Your Infrastructure Blueprint</h4>
              <p class="mb-4">Terraform allows you to define and provision your entire cloud infrastructure using code. This makes your deployments repeatable, version-controlled, and auditable. It eliminates manual errors and dramatically speeds up environment setup for new projects.</p>
              <h4 class="font-bold text-lg mb-2">Ansible: Your Configuration Automator</h4>
              <p>With its simple, agentless approach, Ansible is perfect for automating server configuration and software deployment. It ensures consistency across environments and saves you countless hours of manual setup.</p>
              <h4 class="font-bold text-lg mb-2">GitOps: Your Predictable Deployment Model</h4>
              <p>Using Git as the single source of truth for your infrastructure (with tools like Argo CD or Flux), GitOps provides an auditable, automated, and self-reconciling deployment process. It transforms high-pressure releases into a predictable, low-stress activity.</p>
          `,
    },
    cloud: {
      title: "Cloud Computing Platforms",
      content: `
              <h4 class="font-bold text-lg mb-2">Choosing Your Provider: AWS, Azure, GCP</h4>
              <p class="mb-4">While it's good to be aware of all three, a solopreneur should master one primary cloud provider. This allows for deep expertise. The key is to leverage their generous <strong>free tiers</strong> for learning and hosting small projects without initial cost.</p>
              <h4 class="font-bold text-lg mb-2">Essential Services</h4>
              <p class="mb-4">Focus on core services: <strong>Compute</strong> (VMs, Serverless Functions like Lambda), <strong>Storage</strong> (S3), <strong>Databases</strong> (RDS), and <strong>Networking</strong> (VPC, Load Balancers). The shift to <strong>serverless</strong> is particularly beneficial for solopreneurs, as it drastically reduces infrastructure management.</p>
              <h4 class="font-bold text-lg mb-2">Security & Cost Optimization</h4>
              <p>These are not optional—they are business-critical. Implement robust security (IAM, network policies) and diligently monitor costs. A security breach or a surprise cloud bill can be devastating to a solo business.</p>
          `,
    },
    observability: {
      title: "Observability",
      content: `
              <h4 class="font-bold text-lg mb-2">Your Eyes and Ears</h4>
              <p class="mb-4">Observability (monitoring, logging, alerting) allows you to proactively identify and resolve issues in production before they impact clients. This is critical for maintaining reliability and client trust when you are the entire operations team.</p>
              <h4 class="font-bold text-lg mb-2">Key Tools</h4>
              <p>While cloud providers have built-in dashboards, understanding the concepts behind tools like <strong>Prometheus</strong> for monitoring and the <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana) for logging is valuable for larger projects or corporate roles.</p>
          `,
    },
  },
  toolkit: {
    mindset: {
      title: "Mindset & Project Management",
      content: `
              <h4 class="font-bold text-lg mb-2">The Solopreneurial Mindset</h4>
              <p class="mb-4">Cultivate proactivity, organization, and resilience. View challenges as learning opportunities. Your internal drive is your most important asset, as there's no manager to provide motivation.</p>
              <h4 class="font-bold text-lg mb-2">Project Management for One</h4>
              <p class="mb-4">Master time management, prioritize tasks ruthlessly, and break large goals into small, manageable steps. Use tools like <strong>Trello</strong> or <strong>Asana</strong> to visualize your workflow and prevent burnout.</p>
              <h4 class="font-bold text-lg mb-2">Business Automation</h4>
              <p>Automate administrative tasks (invoicing, follow-ups) with CRM and accounting tools. This is your "virtual team," freeing up your time for billable work and client acquisition.</p>
          `,
    },
    acquisition: {
      title: "Client Acquisition & Branding",
      content: `
              <h4 class="font-bold text-lg mb-2">Build a Compelling Portfolio</h4>
              <p class="mb-4">Your portfolio should showcase *results*, not just code. Use case studies to explain how you solved a real client problem and delivered tangible value. This builds trust and allows you to command higher rates.</p>
              <h4 class="font-bold text-lg mb-2">Find Your Niche & USP</h4>
              <p class="mb-4">Don't be a generalist. Specialize in a niche where you have passion and skill. This reduces competition, attracts higher-paying clients, and establishes you as an authority.</p>
              <h4 class="font-bold text-lg mb-2">Strategic Outreach</h4>
              <p>Move beyond bidding on low-paying jobs. Build your brand on <strong>LinkedIn</strong>, engage in niche communities, and perform direct outreach to your dream clients. Focus on value-driven relationships, not volume.</p>
          `,
    },
    legal: {
      title: "Pricing, Contracts & Legal",
      content: `
              <h4 class="font-bold text-lg mb-2">Pricing Your Services</h4>
              <p class="mb-4">Understand the pros and cons of hourly, project-based, and value-based pricing. Your goal should be to move towards <strong>value-based pricing</strong>, where your fee is tied to the business value you deliver to the client.</p>
              <div class="chart-container my-6">
                  <canvas id="pricing-chart"></canvas>
              </div>
              <h4 class="font-bold text-lg mb-2">Craft Robust Contracts</h4>
              <p class="mb-4">Your contract is your primary legal protection. It must clearly define the scope of work, payment terms, intellectual property rights, and confidentiality. This prevents scope creep and ensures you get paid on time.</p>
              <h4 class="font-bold text-lg mb-2">Form a Single-Member LLC</h4>
              <p>This is a critical step. An LLC protects your personal assets (house, car, savings) from business debts and lawsuits. It provides a legal and financial foundation for your solo enterprise.</p>
          `,
    },
    "soft-skills": {
      title: "Indispensable Soft Skills",
      content: `
              <h4 class="font-bold text-lg mb-2">Communication & Client Relationships</h4>
              <p class="mb-4">This is a core business function. It covers everything from gathering requirements to managing expectations and building long-term relationships that lead to repeat business and referrals.</p>
              <h4 class="font-bold text-lg mb-2">Adaptability & Continuous Learning</h4>
              <p class="mb-4">The tech landscape changes constantly. Your ability to adapt and learn new skills is your primary competitive edge and the key to long-term relevance.</p>
              <h4 class="font-bold text-lg mb-2">Negotiation & Sales</h4>
              <p>These are not optional. Strong negotiation and sales skills are how you acquire projects and secure fair compensation. It's how you turn your technical ability into a profitable business.</p>
          `,
    },
  },
};

const skillTreeData = [
  {
    name: "Frontend Development",
    id: "frontend",
    children: [
      { name: "HTML & CSS", id: "html-css" },
      { name: "JavaScript (ES6+)", id: "javascript" },
      { name: "Frontend Frameworks", id: "frontend-frameworks" },
      { name: "Build Tools", id: "build-tools" },
    ],
  },
  {
    name: "Backend Development",
    id: "backend",
    children: [
      { name: "Backend Languages", id: "backend-languages" },
      { name: "API Design", id: "apis" },
      { name: "Database Management", id: "databases" },
    ],
  },
  {
    name: "DevOps Engineering",
    id: "devops",
    children: [
      { name: "CI/CD Pipelines", id: "ci-cd" },
      { name: "Containerization", id: "containers" },
      { name: "Infrastructure as Code", id: "iac" },
      { name: "Cloud Platforms", id: "cloud" },
      { name: "Observability", id: "observability" },
    ],
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const modalContainer = document.getElementById("modal-container");
  const skillTreeContainer = document.getElementById("skill-tree");
  const skillDetailsContainer = document.getElementById("skill-details");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  let activeChart = null;

  function createModal(title, content) {
    const modalHTML = `
          <div class="modal bg-white w-full max-w-2xl rounded-lg shadow-xl relative transform scale-95 opacity-0" role="dialog" aria-modal="true" aria-labelledby="modal-title">
              <div class="p-6 md:p-8">
                  <div class="flex justify-between items-start">
                      <h3 id="modal-title" class="text-2xl font-bold text-[#38332E]">${title}</h3>
                      <button class="modal-close-btn text-gray-500 hover:text-gray-800">&times;</button>
                  </div>
                  <div class="mt-4 text-gray-600">${content}</div>
              </div>
          </div>
      `;
    modalContainer.innerHTML = modalHTML;
    modalContainer.classList.remove("hidden");

    const modalElement = modalContainer.querySelector(".modal");
    setTimeout(() => {
      modalElement.classList.remove("scale-95", "opacity-0");
      modalElement.classList.add("scale-100", "opacity-100");
    }, 10);

    modalContainer
      .querySelector(".modal-close-btn")
      .addEventListener("click", closeModal);
  }

  function closeModal() {
    const modalElement = modalContainer.querySelector(".modal");
    if (modalElement) {
      modalElement.classList.add("scale-95", "opacity-0");
      setTimeout(() => {
        modalContainer.classList.add("hidden");
        modalContainer.innerHTML = "";
      }, 300);
    }
  }

  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const modalId = e.currentTarget.dataset.modal;
      const section = e.currentTarget.closest("section").id;
      const data = (
        section === "foundations"
          ? roadmapData.foundations
          : roadmapData.toolkit
      )[modalId];
      if (data) {
        createModal(data.title, data.content);
        if (modalId === "legal") {
          setTimeout(createPricingChart, 50);
        }
      }
    });
  });

  modalContainer.addEventListener("click", (e) => {
    if (e.target === modalContainer) {
      closeModal();
    }
  });

  function buildSkillTree() {
    let treeHTML = "";
    skillTreeData.forEach((category) => {
      treeHTML += `
              <li>
                  <a href="#" class="skill-item font-bold text-lg text-[#38332E] block py-1" data-id="${
                    category.id
                  }">${category.name}</a>
                  <ul class="pl-4 mt-1 space-y-1">
                      ${category.children
                        .map(
                          (child) => `
                          <li><a href="#" class="skill-item text-gray-600 hover:text-[#D4A373] hover:font-medium block py-1" data-id="${child.id}">${child.name}</a></li>
                      `
                        )
                        .join("")}
                  </ul>
              </li>
          `;
    });
    skillTreeContainer.innerHTML = treeHTML;
  }

  function displaySkillDetails(skillId) {
    const data = roadmapData.paths[skillId];
    if (!data) return;

    if (activeChart) {
      activeChart.destroy();
      activeChart = null;
    }

    const detailsHTML = `
          <div class="fade-in">
              <h3 class="text-2xl md:text-3xl font-bold text-[#38332E] mb-4">${data.title}</h3>
              <div class="prose max-w-none text-gray-700">${data.content}</div>
          </div>
      `;
    skillDetailsContainer.innerHTML = detailsHTML;

    if (skillId === "frontend-frameworks") {
      createFrameworksChart();
    }
  }

  skillTreeContainer.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("skill-item")) {
      const skillId = e.target.dataset.id;

      document
        .querySelectorAll(".skill-item")
        .forEach((item) =>
          item.classList.remove("text-[#D4A373]", "font-bold")
        );
      e.target.classList.add("text-[#D4A373]", "font-bold");

      displaySkillDetails(skillId);
    }
  });

  function createFrameworksChart() {
    const ctx = document.getElementById("frameworks-chart").getContext("2d");
    const frameworkDetailsEl = document.getElementById("framework-details");

    const frameworkData = {
      React: {
        data: [5, 4, 5, 4, 5],
        description:
          "<strong>React:</strong> The market leader. Its component-based architecture and vast ecosystem make it a strategic choice for job market relevance and freelance opportunities. Ideal for complex SPAs.",
      },
      Angular: {
        data: [3, 5, 3, 5, 3],
        description:
          "<strong>Angular:</strong> A full-featured framework backed by Google. Its steep learning curve is offset by its suitability for large, enterprise-level applications where structure and maintainability are key.",
      },
      "Vue.js": {
        data: [4, 3, 4, 3, 4],
        description:
          "<strong>Vue.js:</strong> Known for its simplicity and gentle learning curve. Excellent for rapid development, MVPs, and integrating into existing projects, making it great for solopreneurs starting out.",
      },
    };

    const datasets = Object.keys(frameworkData).map((key, index) => {
      const colors = [
        {
          bg: "rgba(212, 163, 115, 0.2)",
          border: "rgba(212, 163, 115, 1)",
        },
        { bg: "rgba(56, 51, 46, 0.2)", border: "rgba(56, 51, 46, 1)" },
        {
          bg: "rgba(107, 114, 128, 0.2)",
          border: "rgba(107, 114, 128, 1)",
        },
      ];
      return {
        label: key,
        data: frameworkData[key].data,
        backgroundColor: colors[index].bg,
        borderColor: colors[index].border,
        pointBackgroundColor: colors[index].border,
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: colors[index].border,
      };
    });

    activeChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: [
          "Market Demand",
          "Learning Curve",
          "Ecosystem",
          "Scalability",
          "Performance",
        ],
        datasets: datasets,
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: "rgba(0,0,0,0.1)" },
            grid: { color: "rgba(0,0,0,0.1)" },
            pointLabels: { font: { size: 12 }, color: "#38332E" },
            ticks: {
              backdropColor: "transparent",
              stepSize: 1,
              max: 5,
              min: 0,
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
            onClick: (e, legendItem, legend) => {
              const frameworkName = legendItem.text;
              frameworkDetailsEl.innerHTML =
                frameworkData[frameworkName].description;

              legend.chart.data.datasets.forEach((dataset, i) => {
                if (dataset.label === frameworkName) {
                  dataset.borderWidth = 3;
                } else {
                  dataset.borderWidth = 1;
                }
              });
              legend.chart.update();
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }
                if (context.parsed.r !== null) {
                  const labels = [
                    "Low",
                    "Mid-Low",
                    "Medium",
                    "Mid-High",
                    "High",
                  ];
                  label += labels[context.parsed.r - 1];
                }
                return label;
              },
            },
          },
        },
      },
    });
  }

  function createPricingChart() {
    const ctx = document.getElementById("pricing-chart")?.getContext("2d");
    if (!ctx) return;

    const data = {
      labels: ["Hourly", "Project-Based", "Value-Based"],
      datasets: [
        {
          label: "Earning Potential",
          data: [2, 3, 5],
          backgroundColor: [
            "rgba(212, 163, 115, 0.6)",
            "rgba(212, 163, 115, 0.8)",
            "rgba(212, 163, 115, 1)",
          ],
          borderColor: ["#D4A373", "#D4A373", "#D4A373"],
          borderWidth: 1,
        },
      ],
    };

    const tooltips = {
      Hourly: "Simple, but caps income. Best for maintenance or unclear scope.",
      "Project-Based":
        "Predictable, but requires accurate estimation to avoid scope creep.",
      "Value-Based":
        "Highest potential. Aligns your fee with the client's ROI.",
    };

    activeChart = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        indexAxis: "y",
        maintainAspectRatio: false,
        scales: {
          x: {
            beginAtZero: true,
            display: false,
          },
          y: {
            grid: { display: false },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: function (context) {
                return tooltips[context.label];
              },
            },
          },
        },
      },
    });
  }

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href").substring(1) === entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: "-50% 0px -50% 0px" }
  );

  document.querySelectorAll("main section").forEach((section) => {
    observer.observe(section);
  });

  buildSkillTree();
});
