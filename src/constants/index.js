import {
  python,
  tensorflow,
  scikit_learn,
  pytorch,
  keras,
  numpy,
  pandas,
  pycharm,
  jupyter,
  mobile,
  backend,
  creator,
  web,
  gan_dapt,
  neuro_drive,
  market_predict,
  microsoft,
  adani,
  bn_software,
  ericsson,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Machine Learning',
    icon: web,
  },
  {
    title: 'Algorithms and Models',
    icon: mobile,
  },
  {
    title: 'Deep Learning Frameworks',
    icon: backend,
  },
  {
    title: 'Neural Networks',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Tensorflow',
    icon: tensorflow,
  },
  {
    name: 'Scikit Learn',
    icon: scikit_learn,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'Keras',
    icon: keras,
  },
  {
    name: 'NumPy',
    icon: numpy,
  },
  {
    name: 'Pandas',
    icon: pandas,
  },
  {
    name: 'PyCharm',
    icon: pycharm,
  },
  {
    name: 'Jupyter',
    icon: jupyter,
  },
];

const experiences = [
  {
    title: 'Machine Learning Intern',
    company_name: 'Microsoft',
    icon: microsoft,
    iconBg: '#383E56',
    date: 'June 2019 - July 2019',
    points: [
      'Assisting in the development and implementation of machine learning models and algorithms.',
      'Collaborating with a team of researchers and engineers to solve complex problems using machine learning techniques.',
      'Experimenting with different machine learning frameworks and tools.',
      'Participating in code reviews and providing feedback on machine learning code and implementations.',
    ],
  },
  {
    title: 'Robotics Workshop',
    company_name: 'Adani Institute of Infrastructure Engineering',
    icon: adani,
    iconBg: '#E6DEDD',
    date: 'Mar 2019 - Aug 2019',
    points: [
      'Building and assembling robots as part of hands-on sessions.',
      'Programming robots using languages or frameworks such as Arduino, ROS, or Python.',
      'Experimenting with sensors and actuators to enable robot interactions with the environment.',
      'Solving robotics challenges or tasks like maze navigation or line following.',
    ],
  },
  {
    title: 'Data Science Intern',
    company_name: 'BN Technologies',
    icon: bn_software,
    iconBg: '#383E56',
    date: 'Mar 2021 - Aug 2021',
    points: [
      'Exploring and visualizing data using tools like Python libraries (e.g., Pandas, Matplotlib, Seaborn) or R to gain insights and identify patterns.',
      'Contributing to the creation of data-driven reports, presentations, and visualizations to communicate findings and insights.',
      'Supporting the development and implementation of machine learning models and algorithms for data analysis and prediction.',
      'Staying updated with the latest advancements and best practices in data science through self-learning and research.',
    ],
  },
  {
    title: 'Expert AI Engineer',
    company_name: 'Ericsson',
    icon: ericsson,
    iconBg: '#E6DEDD',
    date: 'Sep 2022 - Present',
    points: [
      'Designing and developing advanced AI models and algorithms to solve complex problems.',
      'Conducting in-depth research and staying updated with the latest advancements in the field of AI.',
      'Implementing and optimizing AI models using programming languages like Python or frameworks like TensorFlow or PyTorch.',
      'Deploying AI models in production environments, considering factors like scalability, reliability, and security.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'GAN-DAPT',
    description:
      'Leveraging domain-invariant image translations, I combined domain adaptation and generalization techniques for improved image segmentation.',
    tags: [
      {
        name: 'DaSeGAN',
        color: 'blue-text-gradient',
      },
      {
        name: 'DaSeGAN-S',
        color: 'green-text-gradient',
      },
      {
        name: 'DaSeGAN-T',
        color: 'pink-text-gradient',
      },
    ],
    image: gan_dapt,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Neuro Drive',
    description:
      'Successfully trained a cutting-edge self-driving car using Convolution neural networks (CNN) utilizing a state-of-the-art simulator provided by Udacity.',
    tags: [
      {
        name: 'Opencv-python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pandas',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: neuro_drive,
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Market Value Predictor',
    description:
      "I developed a powerful regression model using machine learning algorithms to predict professional football players' market value accurately.",
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Linear Regression',
        color: 'green-text-gradient',
      },
      {
        name: 'Numpy',
        color: 'pink-text-gradient',
      },
    ],
    image: market_predict,
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
