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
    tagline: "Building data-efficient, generalizable vision models — from salient object detection with SAM & CLIP to knowledge distillation for efficient deep learning.",
    location: "Charsadda, KPK, Pakistan",
    email: "mabbaskhan771@gmail.com",
    phone: "+92 318 9139081",

    // Shown in the About block under the hero.
    about: "Aspiring Ph.D./M.S. candidate in Computer Science with two manuscripts under review at top venues, including a first-author submission to WACV 2027. My research centers on computer vision, vision–language and foundation models (CLIP, SAM), salient object detection, and knowledge distillation for efficient deep learning. I'm looking for a research position to help advance data-efficient, generalizable vision models alongside experienced researchers.",

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
      score: "CGPA 3.54 / 4.00"
    },
    {
      degree: "Diploma of Information Technology",
      institution: "KPK Board of Technical & Commerce Education, Peshawar",
      period: "2022",
      score: "78.28%"
    }
  ],

  // ---------------------------------------------------------
  // PUBLICATIONS
  // status: "Under Review" | "Published" | "Accepted" | "Preprint"
  // link: "" hides the preprint button and shows "coming soon"
  // ---------------------------------------------------------
  publications: [
    {
      title: "SPC-Net: Salient Prompt Combination of SAM and CLIP for Salient Object Detection",
      authors: "M. Abbas, M. F. Bulbul, T. Hussain, A. Ullah",
      venue: "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV) 2027",
      status: "Under Review",
      firstAuthor: true,
      summary: "Combines SAM and CLIP through a multi-prompt bank with element-wise max aggregation, reaching state-of-the-art S-measure and E-measure across five RGB benchmarks — and outperforming RGB-D methods on SIP using RGB input alone. Introduces an adaptive fallback pseudo-prompt generator and a point-classification loss to prevent prompt collapse on small, low-contrast objects.",
      link: ""
    },
    {
      title: "Distilling Swin-Base Knowledge into GCViT for Robust Bird Species Recognition",
      authors: "M. F. Bulbul, M. Abbas, H. Ali, H. Aljuaid, N. Dilshad",
      venue: "IEEE Access",
      status: "Under Review",
      firstAuthor: false,
      summary: "A knowledge-distillation framework that transfers Swin-Base (89.75%) knowledge into a compact GCViT student, lifting accuracy from 86.76% to 88.16%. The final ensemble reaches 90.42% on CUB-200-2011 and 89.36% on NABirds — trained end-to-end on a single 6GB GPU.",
      link: ""
    }
  ],

  // ---------------------------------------------------------
  // EXPERIENCE — rendered as a chronological timeline
  // ---------------------------------------------------------
  experience: [
    {
      title: "Independent Researcher — Deep Learning / Computer Vision",
      org: "Self-directed Research",
      location: "Charsadda, Pakistan",
      period: "2025 – Present",
      bullets: [
        "Developed SPC-Net, combining SAM and CLIP via a multi-prompt bank with element-wise max aggregation; achieved state-of-the-art S-measure and E-measure across five RGB benchmarks, surpassing RGB-D methods on SIP using RGB input only.",
        "Designed an adaptive fallback pseudo-prompt generator and a point-classification loss to counter prompt collapse for small, low-contrast salient objects.",
        "Built a knowledge-distillation framework transferring Swin-Base (89.75%) knowledge to a GCViT student, raising accuracy 86.76% → 88.16%; final ensemble reached 90.42% (CUB-200-2011) and 89.36% (NABirds), all trained on a single 6GB GPU."
      ]
    },
    {
      title: "Intern Software Developer",
      org: "Ilyasoft",
      location: "Peshawar, Pakistan",
      period: "6 months",
      bullets: [
        "Developed full-stack features for an e-commerce platform and a library management system.",
        "Practiced agile SDLC in a team setting."
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
