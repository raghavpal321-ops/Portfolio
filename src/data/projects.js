import taskImage from "../assets/images/task-manager.png";
import handGestureImage from "../assets/images/hand-gesture.png";

const projects = [
  {
    id: 1,

    title: "Task Management System",

    image: taskImage,

    description:
      "A modern full-stack task management application built with the MERN stack. It features secure JWT authentication, complete CRUD operations, responsive design, and an intuitive dashboard for efficient task management.",

    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Axios",
      "CSS",
    ],

    features: [
      "Secure JWT Authentication",
      "Task CRUD Operations",
      "Responsive User Interface",
      "Protected Routes",
      "REST API Integration",
      "Task Status Management",
      "MongoDB Database",
    ],

    live: "https://task-management-system-flame-ten.vercel.app",

    github:
      "https://github.com/raghavpal321-ops/Task-Management-System",
  },

  {
    id: 2,

    title: "Real-Time Hand Gesture Recognition System",

    image: handGestureImage,

    description:
      "An AI/ML-based real-time hand gesture recognition system that uses computer vision and machine learning to detect and classify hand gestures through a webcam.",

    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Random Forest",
    ],

    features: [
      "Real-Time Hand Detection",
      "21 Hand Landmark Detection",
      "63 Landmark Features",
      "Random Forest Classification",
      "8 Gesture Classes",
      "Real-Time Prediction",
      "Webcam Integration",
    ],

    github:
      "https://github.com/raghavpal321-ops/HandGestureRecognition",
  },
];

export default projects;