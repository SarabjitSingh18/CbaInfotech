const faqs = [
  {
    question: "What courses are available at CBA Infotech?",
    answer:
      "We offer Full Stack Web Development, Python with Data Science, Java, C++ with DSA, and more industry-relevant courses.",
  },
  {
    question: "Is there any certification provided?",
    answer:
      "Yes! All courses come with government-recognized certification upon successful completion.",
  },
  {
    question: "Can I take demo classes before enrolling?",
    answer:
      "Absolutely. You can attend a free demo class before deciding to join a course.",
  },
]

export default faqs

const courses = [
  {
    title: "Full Stack Web Development",
    description: "Master HTML, CSS, JavaScript, React, Node.js & MongoDB from scratch.",
    slug: "web-development",
    fees: "₹30,000",
    duration: "6 Months",
    timing: "Mon-Fri, 6 PM - 8 PM",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80", // Full stack dev
    content: "This course offers an immersive experience into modern web development, covering front-end and back-end technologies. By the end, you will be able to build full-stack applications and deploy them to production environments.",
  },
  {
    title: "Python with Data Science",
    description: "Learn Python, Pandas, NumPy, Matplotlib, and dive into Machine Learning.",
    slug: "python-data-science",
    fees: "₹28,000",
    duration: "5 Months",
    timing: "Mon-Wed-Fri, 7 PM - 9 PM",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-Learn"],
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=600&q=80", // Data science
    content: "This course is tailored for aspiring data scientists. It covers core Python and data analysis tools along with practical machine learning applications using real-world datasets.",
  },
  {
    title: "C++ with DSA",
    description: "Sharpen your Data Structures & Algorithms skills using C++ for placements.",
    slug: "cpp-dsa",
    fees: "₹25,000",
    duration: "4 Months",
    timing: "Tue-Thu-Sat, 5 PM - 7 PM",
    technologies: ["C++", "STL", "DSA", "Problem Solving"],
    image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=600&q=80", // Programming
    content: "A placement-focused program designed to strengthen problem-solving skills using C++ and master DSA for competitive coding and interviews.",
  },
  {
    title: "Android Development with Kotlin",
    description: "Build native Android apps using Kotlin and Jetpack components.",
    slug: "android-kotlin",
    fees: "₹26,000",
    duration: "5 Months",
    timing: "Mon-Fri, 10 AM - 12 PM",
    technologies: ["Kotlin", "Android Studio", "Jetpack Compose"],
    image: "https://images.unsplash.com/photo-1517433456452-59b8c254d8d4?auto=format&fit=crop&w=600&q=80", // Android dev
    content: "Start building native Android apps from scratch using modern tools like Kotlin, Jetpack libraries, and clean architecture principles.",
  },
  {
    title: "AI & Machine Learning",
    description: "Master supervised and unsupervised learning with real-world datasets.",
    slug: "ai-machine-learning",
    fees: "₹35,000",
    duration: "6 Months",
    timing: "Sat-Sun, 11 AM - 2 PM",
    technologies: ["Python", "Scikit-Learn", "TensorFlow", "Pandas", "ML Algorithms"],
    image: "https://images.unsplash.com/photo-1531497865140-4170c7a9d8c7?auto=format&fit=crop&w=600&q=80", // AI ML
    content: "A hands-on course that dives deep into the core principles of machine learning. From regression to neural networks, build and evaluate real-world ML systems.",
  },
  {
    title: "Cyber Security & Ethical Hacking",
    description: "Learn penetration testing, securing networks, and protecting data.",
    slug: "cyber-security-hacking",
    fees: "₹32,000",
    duration: "5 Months",
    timing: "Tue-Thu-Sat, 6 PM - 8 PM",
    technologies: ["Kali Linux", "Wireshark", "Burp Suite", "Metasploit"],
    image: "https://images.unsplash.com/photo-1530541930197-ff04a388b57b?auto=format&fit=crop&w=600&q=80", // Cybersecurity
    content: "Explore the world of ethical hacking, security principles, and network penetration testing. You'll work with industry-grade tools to identify vulnerabilities and secure systems.",
  },
  {
    title: "DevOps with Docker & Kubernetes",
    description: "Automate deployments and manage infrastructure like a pro.",
    slug: "devops-docker-kubernetes",
    fees: "₹33,000",
    duration: "4 Months",
    timing: "Mon-Wed-Fri, 8 PM - 10 PM",
    technologies: ["Docker", "Kubernetes", "CI/CD", "Jenkins", "Linux"],
    image: "https://images.unsplash.com/photo-1547658719-da2b511691b3?auto=format&fit=crop&w=600&q=80", // DevOps
    content: "Learn how to automate build, test, and deployment pipelines with Docker and Kubernetes. Gain real-world skills to manage and monitor cloud-native infrastructure.",
  },
]


export { courses }

export const blogs = [
  {
    title: "Why Web Development is a Future-Proof Career",
    slug: "web-development-future-proof",
    excerpt: "Explore how web development continues to be one of the most in-demand and future-proof careers.",
    content: `
Web development is one of the most future-proof and versatile career choices available today. As businesses increasingly rely on digital platforms, the demand for skilled web developers continues to grow.

From small startups to global enterprises, every organization needs a robust online presence. With the rise of modern frameworks like React, Next.js, and Svelte, developers can create highly performant and scalable applications.

Moreover, the flexibility of working as a freelancer, remote developer, or within a product team makes web development not just a job—but a lifestyle. If you're looking for a dynamic, creative, and constantly evolving field, web development is the perfect choice.
    `,
    tags: ["Web Dev", "Career", "Tech"],
    image: "https://picsum.photos/id/1015/600/400",
  },
  {
    title: "Mastering Python for Data Science",
    slug: "python-for-data-science",
    excerpt: "Dive into why Python is the go-to language for data science and how to get started.",
    content: `
Python has become the most popular language for data science—and for good reason. Its clean syntax, powerful libraries, and strong community support make it ideal for analyzing data, visualizing trends, and building machine learning models.

With libraries like NumPy, Pandas, Scikit-learn, and Matplotlib, Python allows you to perform everything from basic data cleaning to advanced deep learning.

If you're entering the world of data science, mastering Python is not optional—it's essential. Whether you're a beginner or a seasoned developer, learning Python for data opens the door to countless opportunities.
    `,
    tags: ["Python", "Data Science"],
    image: "https://picsum.photos/id/1003/600/400",
  },
  {
    title: "AI and Machine Learning Trends in 2025",
    slug: "ai-ml-trends-2025",
    excerpt: "Stay ahead of the curve by exploring key trends in AI and ML for 2025.",
    content: `
The field of AI and Machine Learning is evolving at lightning speed, and 2025 promises to bring groundbreaking advancements.

We're seeing a rise in Generative AI, personalized AI agents, and AI-integrated healthcare systems. Ethical AI and explainability are also becoming major focus areas as the public and regulators demand transparency.

AutoML, no-code tools, and edge AI are democratizing access, allowing non-engineers to build powerful models. Staying updated with these trends is crucial for professionals looking to stay competitive in the AI landscape.
    `,
    tags: ["AI", "Machine Learning"],
    image: "https://picsum.photos/id/1025/600/400",
  },
  {
    title: "Breaking into Cybersecurity",
    slug: "cybersecurity-beginners",
    excerpt: "A beginner's guide to entering the exciting world of cybersecurity.",
    content: `
Cybersecurity is one of the most in-demand and high-paying tech fields today. With cyber threats increasing worldwide, organizations are investing heavily in protecting their digital assets.

To get started, you need to build a solid understanding of networking, operating systems, and basic security principles. From there, dive into ethical hacking, penetration testing, and cloud security.

Certifications like CEH, CompTIA Security+, and OSCP can boost your profile. Most importantly, keep practicing with real-world scenarios and CTF (Capture The Flag) challenges to hone your skills.
    `,
    tags: ["Cybersecurity", "Ethical Hacking"],
    image: "https://picsum.photos/id/1035/600/400",
  },
  {
    title: "Kubernetes Demystified",
    slug: "kubernetes-explained",
    excerpt: "Understand the power of Kubernetes and how it's transforming DevOps.",
    content: `
Kubernetes (K8s) has revolutionized how we deploy, manage, and scale containerized applications. It allows developers and DevOps engineers to orchestrate microservices with high availability, scalability, and resilience.

With Kubernetes, you can define your infrastructure as code, automate rollouts and rollbacks, and easily monitor your system’s health.

Whether you're deploying a small app or managing a multi-cloud platform, Kubernetes is a must-have skill for modern DevOps. Tools like Helm, ArgoCD, and Prometheus make the Kubernetes ecosystem even more powerful.
    `,
    tags: ["DevOps", "Kubernetes", "Cloud"],
    image: "https://picsum.photos/id/1044/600/400",
  },
]
