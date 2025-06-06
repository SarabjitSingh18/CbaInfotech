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
    image: "https://tse4.mm.bing.net/th?id=OIP.V-Jp13LvtVc2IiY2fp4qYwHaD4&pid=Api&P=0&h=220", // Full stack dev
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
    image: "https://images.unsplash.com/photo-1581093588401-6c84b5e1a38e", // Data science
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
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981d", // DSA / programming
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
    image: "https://images.unsplash.com/photo-1581276879432-15a19d654956", // Android development
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
    image: "https://images.unsplash.com/photo-1581093448793-0e9e1a2c7f51", // AI ML
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
    image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9", // Cybersecurity
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
    image: "https://images.unsplash.com/photo-1612844326796-e47d04dd2f9b", // DevOps / infra
    content: "Learn how to automate build, test, and deployment pipelines with Docker and Kubernetes. Gain real-world skills to manage and monitor cloud-native infrastructure.",
  },
]

export { courses }
