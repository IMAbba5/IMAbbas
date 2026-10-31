/**
 * ============================================================
 *  SITE CONTENT
 * ============================================================
 *  This is the only file you need to edit to update your site.
 *  Change the values below, save, commit, and push — GitHub
 *  Pages rebuilds automatically within a minute or two.
 *
 *  Leave a field as an empty string "" to hide it automatically
 *  (e.g. an unfinished preprint link, or a social profile you
 *  haven't set up yet).
 * ============================================================
 */

const PORTFOLIO_DATA = {

  // ---------------------------------------------------------
  // PERSONAL / HERO
  // ---------------------------------------------------------
  personal: {
    name: "Muhammad Abbas",
    role: "Computer Vision & Deep Learning Researcher",
    tagline: "I am a Machine Learning and Computer Vision researcher interested in developing efficient, robust, and generalizable deep learning models, with a focus on object detection, image segmentation, and practical AI applications.",
    location: "Charsadda, KPK, Pakistan",
    email: "mabbaskhan771@gmail.com",
    phone: "+92 318 9139081",

    // Shown in the About block under the hero.
    about: "I am a Computer Science graduate with a strong interest in machine learning, computer vision, and deep learning. My research focuses on developing efficient and reliable AI models, particularly for tasks such as object detection, image segmentation, and visual understanding. I am interested in exploring how learning methods can be improved to make models more accurate, adaptable, and practical for real-world applications. I am currently working on research projects and manuscripts while seeking opportunities to continue my academic journey through an M.S. or Ph.D. and collaborate with researchers who share similar interests.",

    // Leave any value "" to hide that link automatically.
    // Add your real profile URLs here — nothing is invented or guessed.
    links: {
      github: "https://github.com/IMAbba5",
      linkedin: "https://www.linkedin.com/in/imabbas/",
      googleScholar: "",
      orcid: "",       // e.g. "https://orcid.org/0000-0000-0000-0000"
      instagram: "https://www.instagram.com/its._m_abbas?utm_source=qr&igsi=MXEzbmY2dDl0dDJzZw==",
      facebook: "https://www.facebook.com/share/1KHWf1mtes/",
      whatsapp: "https://wa.me/923189139081",
      cvFile: "" // e.g. "assets/Abbas_CV.pdf" if you add the CV to /assets
    },

    // WeChat uses an ID rather than a guessed public profile URL.
    wechatId: "Abbas1x",

    // Small status badge shown in the hero. Leave "" to hide it.
    availability: "Open to Ph.D. / M.S. research positions",

    // Hero portrait. Leave "" to fall back to a text-only hero.
    photo: "assets/portrait.jpg"
  },

  // ---------------------------------------------------------
  // EDUCATION — rendered as a chronological timeline
  // ---------------------------------------------------------
  education: [
    {
      degree: "BS in Computer Science",
      institution: "Bacha Khan University, Charsadda",
      period: "2021 – 2025",
      score: "CGPA 3.54 / 4.00",

      thesis: "Correlation and Prompt Guided Salient Object Detection Network (CP-SODNet)"
    },
    {
      degree: "Diploma of Information Technology",
      institution: "KPK Board of Technical & Commerce Education, Peshawar",
      period: "2022",
      score: "78.28%"
    }
  ],


  publications: [
    
    {
      venue: "WACV 2027",
      status: "Accepted"
    },
    {
      venue: "IEEE",
      status: "Under Review"
    }

  ],

  // ---------------------------------------------------------
  // EXPERIENCE — rendered as a chronological timeline
  // ---------------------------------------------------------
  
projects: [
  {
    title: "SPC-Net: Salient Object Detection",
    org: "Independent Research",
    location: "Charsadda, Pakistan",
    period: "2025 – Present",
    category: "Computer Vision / Deep Learning",
    bullets: [
      "Developed SPC-Net, a framework combining visual and language-guided features for salient object detection, achieving state-of-the-art S-measure and E-measure across five RGB benchmarks.",
      "Designed an adaptive fallback pseudo-prompt generator and a point-classification loss to improve predictions for small and low-contrast salient objects.",
      "Evaluated the model on the SIP benchmark, where it outperformed RGB-D methods using RGB input alone."
    ]
  },
  {
    title: "Knowledge Distillation for Bird Species Recognition",
    org: "Independent Research",
    location: "Research Project",
    period: "2025 – Present",
    category: "Deep Learning / Model Compression",
    bullets: [
      "Developed a knowledge-distillation framework to transfer knowledge from a Swin-Base teacher model to a compact GCViT student model.",
      "Improved student-model accuracy from 86.76% to 88.16%, with the final ensemble reaching 90.42% on CUB-200-2011 and 89.36% on NABirds.",
      "Trained the models using a single 6 GB GPU, exploring efficient deep learning under limited computational resources."
    ]
  },
  {
    title: "Fire Detection Using RGB Images",
    org: "Computer Vision Research Project",
    location: "",
    period: "",
    category: "Computer Vision / Deep Learning",
    bullets: [
      "Developed a fire-detection approach using RGB images and text prompts to combine visual and textual information.",
      "Extracted image and text features using their corresponding encoders and constructed a correlation map to guide localization.",
      "Generated a pseudo-prompt from the correlation map and combined it with visual-text correlation features through convolutional layers and a mask decoder to produce a fire saliency mask.",
      "Applied data augmentation to improve training."
    ]
  },
  {
    title: "Anomaly Detection Using RGB Images",
    org: "Computer Vision Research Project",
    location: "",
    period: "",
    category: "Anomaly Detection / Image Segmentation",
    bullets: [
      "Explored a deep learning approach to detect anomalous regions in RGB images.",
      "Investigated deep feature extraction and pixel-level prediction to distinguish anomalous regions from normal backgrounds and generate segmentation masks."
    ]
  },
  {
    title: "Brain Tumor Segmentation Using U-Net",
    org: "BraTS 2020",
    location: "",
    period: "",
    category: "Medical Image Analysis / Deep Learning",
    bullets: [
      "Explored a U-Net-based architecture for brain tumor segmentation using MRI scans.",
      "Designed an encoder-decoder architecture with skip connections to combine features from different levels and predict tumor regions at the pixel level."
    ]
  },
  {
    title: "Software Developer Internship",
    org: "Ilyasoft",
    location: "Peshawar, Pakistan",
    period: "6 months",
    category: "Software Development",
    bullets: [
      "Contributed to an e-commerce platform using C#/.NET, HTML, JavaScript, and MySQL, supporting front-end development and database integration.",
      "Worked on a library management system, implementing application features and connecting the user interface with backend functionality using C#/.NET, HTML, JavaScript, and MySQL."
    ]
  }
],


  // ---------------------------------------------------------
  // SKILLS — grouped into labeled clusters
  // ---------------------------------------------------------
  skills: [
    {
      group: "Deep Learning",
      items: ["PyTorch", "Hugging Face Transformers", "Timm", "OpenCV", "Scikit-learn"]
    },
    {
      group: "Foundation Models",
      items: ["CLIP", "SAM (Segment Anything)", "Swin Transformer", "GCViT", "ViT"]
    },
    {
      group: "Tools & Platforms",
      items: ["Git / GitHub", "Linux / Bash", "CUDA", "Google Colab", "Weights & Biases", "LaTeX"]
    },
    {
      group: "Programming & Data",
      items: ["Python", "C++", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      group: "Languages",
      items: ["English", "Urdu", "Pashto"]
    }
  ],

  // ---------------------------------------------------------
  // CERTIFICATIONS — grouped by program, each with a certificate image.
  // date: shown under the title. verifyUrl: "" hides the verify link.
  // ---------------------------------------------------------
  certifications: [
    {
      program: "Machine Learning Specialization",
      issuer: "Stanford Online & DeepLearning.AI",
      items: [
        {
          title: "Machine Learning Specialization",
          detail: "3 courses — regression & classification, advanced learning algorithms, unsupervised learning, recommenders & reinforcement learning",
          date: "Sep 2024",
          image: "assets/certificates/machine-learning-specialization.jpg",
          verifyUrl: "https://coursera.org/verify/specialization/HKDAZQ4UG7SO"
        }
      ]
    },
    {
      program: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      items: [
        {
          title: "Neural Networks and Deep Learning",
          date: "Sep 2024",
          image: "assets/certificates/neural-networks-and-deep-learning.jpg",
          verifyUrl: "https://coursera.org/verify/XNHWET8KXH0Q"
        },
        {
          title: "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
          date: "Oct 2024",
          image: "assets/certificates/improving-deep-neural-networks.jpg",
          verifyUrl: "https://coursera.org/verify/WQBWY9IGU8SE"
        },
        {
          title: "Structuring Machine Learning Projects",
          date: "Oct 2024",
          image: "assets/certificates/structuring-ml-projects.jpg",
          verifyUrl: "https://coursera.org/verify/82NTLSNUVVD0"
        },
        {
          title: "Convolutional Neural Networks",
          date: "Nov 2024",
          image: "assets/certificates/convolutional-neural-networks.jpg",
          verifyUrl: "https://coursera.org/verify/YIGP7VH3564D"
        }
      ]
    },
    {
      program: "TensorFlow Developer Courses",
      issuer: "DeepLearning.AI",
      items: [
        {
          title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
          date: "Nov 2024",
          image: "assets/certificates/intro-to-tensorflow.jpg",
          verifyUrl: "https://coursera.org/verify/XV0EUBXGGVUH"
        },
        {
          title: "Convolutional Neural Networks in TensorFlow",
          date: "Nov 2024",
          image: "assets/certificates/cnn-in-tensorflow.jpg",
          verifyUrl: "https://coursera.org/verify/91M1BARSNVUR"
        }
      ]
    }
  ],

  // ---------------------------------------------------------
  // MENTOR
  // ---------------------------------------------------------
  references: [
    {
      name: "Dr. Amin Ullah",
      title: "Senior AI/ML Engineer, Boeing Research & Technology, Seattle, WA, USA",
      relation: "Deep Learning Research Mentor",
      image: "https://iaminullah.com/assets/img/prof_pic.jpg?9a1579e315a2c93f87994cf2d1b260fb=",
      email: "amin.ullah@boeing.com",
      website: "https://www.iaminullah.com"
    }
  ],

  // Bump this whenever you'd like the footer date to change.
  lastUpdated: "August 2026"
};
