// In-memory state
let authState = { isAuthenticated: false, user: null };
let users = [];
let blogComments = {};

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with AI in 2025',
    date: '2025-01-15',
    author: 'Sarah Chen',
    excerpt: 'Learn how to start your AI journey with the latest tools and frameworks. TensorFlow, PyTorch, and LangChain explained.',
    content: `<p>Artificial Intelligence is more accessible than ever in 2025. Whether you're a complete beginner or looking to expand your skills, here's your roadmap.</p>
    <h3>Why Start with AI Now?</h3>
    <p>The AI landscape has matured significantly. With tools like ChatGPT, Claude, and open-source models, you can build production-ready applications in weeks, not months.</p>
    <h3>Essential Tools</h3>
    <ul>
      <li><strong>Python</strong> - The foundation language for AI/ML</li>
      <li><strong>TensorFlow/PyTorch</strong> - Deep learning frameworks</li>
      <li><strong>LangChain</strong> - For building LLM applications</li>
      <li><strong>Hugging Face</strong> - Access thousands of pre-trained models</li>
    </ul>
    <h3>Your First Project</h3>
    <p>Start with a simple text classification project using Hugging Face transformers. You'll learn the basics of fine-tuning and deployment.</p>`
  },
  {
    id: 2,
    title: 'React vs Vue: Which to Learn First?',
    date: '2025-01-12',
    author: 'Alex Rodriguez',
    excerpt: 'An honest comparison of React and Vue.js for beginners. We analyze learning curves, job markets, and ecosystem strength.',
    content: `<p>Choosing your first frontend framework can be overwhelming. Let's break down React and Vue.js objectively.</p>
    <h3>Learning Curve</h3>
    <p>Vue.js has a gentler learning curve with its intuitive template syntax. React requires understanding JSX and has a steeper initial curve, but the concepts transfer well to other technologies.</p>
    <h3>Job Market</h3>
    <p>React dominates with approximately 3x more job postings. However, Vue.js developers are in high demand for specific projects and startups.</p>
    <h3>Verdict</h3>
    <p>Learn React if you want maximum job opportunities. Choose Vue if you value developer experience and rapid development.</p>`
  },
  {
    id: 3,
    title: 'Docker for Absolute Beginners',
    date: '2025-01-10',
    author: 'Michael Park',
    excerpt: 'Containers explained simply. Learn why Docker is essential for modern development and how to get started in 30 minutes.',
    content: `<p>Docker revolutionized how we develop and deploy applications. Here's everything you need to know to get started.</p>
    <h3>What is Docker?</h3>
    <p>Docker packages your application and its dependencies into containers - lightweight, portable units that run consistently anywhere.</p>
    <h3>Why Use Docker?</h3>
    <ul>
      <li><strong>Consistency</strong> - Works on your machine, works in production</li>
      <li><strong>Isolation</strong> - No dependency conflicts</li>
      <li><strong>Efficiency</strong> - Faster than virtual machines</li>
    </ul>
    <h3>Getting Started</h3>
    <p>Install Docker Desktop, write a simple Dockerfile, and deploy your first container. It's easier than you think!</p>`
  },
  {
    id: 4,
    title: 'Python Best Practices 2025',
    date: '2025-01-08',
    author: 'Emma Wilson',
    excerpt: 'Modern Python development practices including type hints, async/await, and the latest Python 3.12 features.',
    content: `<p>Python continues to evolve. Here are the practices that will make you a better Python developer in 2025.</p>
    <h3>Type Hints Are Essential</h3>
    <p>Use type hints for better code documentation and catch bugs early with tools like mypy.</p>
    <h3>Embrace Async/Await</h3>
    <p>For I/O-bound operations, async programming can dramatically improve performance. Modern frameworks like FastAPI are built on async principles.</p>
    <h3>New in Python 3.12</h3>
    <p>Pattern matching, improved error messages, and performance improvements make Python 3.12 a must-upgrade.</p>`
  },
  {
    id: 5,
    title: 'Building Your First API with Node.js',
    date: '2025-01-05',
    author: 'James Taylor',
    excerpt: 'Step-by-step guide to creating a RESTful API using Node.js and Express. Includes authentication and database integration.',
    content: `<p>APIs power modern web applications. Learn how to build a production-ready REST API from scratch.</p>
    <h3>Project Setup</h3>
    <p>We'll use Express.js for routing, MongoDB for data storage, and JWT for authentication.</p>
    <h3>Best Practices</h3>
    <ul>
      <li>Input validation with Joi</li>
      <li>Error handling middleware</li>
      <li>Rate limiting for security</li>
      <li>Proper HTTP status codes</li>
    </ul>
    <h3>Testing Your API</h3>
    <p>Use Jest for unit tests and Supertest for integration testing. Don't skip this step!</p>`
  },
  {
    id: 6,
    title: 'Mastering Git and GitHub',
    date: '2025-01-03',
    author: 'Lisa Anderson',
    excerpt: 'Beyond the basics: branching strategies, pull requests, and collaborative workflows that professional developers use daily.',
    content: `<p>Git is more than just commit and push. Master these workflows to work effectively in any team.</p>
    <h3>Branching Strategies</h3>
    <p>Git Flow, GitHub Flow, and Trunk-Based Development - when to use each approach.</p>
    <h3>Writing Great Commits</h3>
    <p>Follow conventional commits specification. Your future self (and teammates) will thank you.</p>
    <h3>Pull Request Best Practices</h3>
    <p>Keep PRs small, write descriptive descriptions, and respond to feedback professionally.</p>`
  }
];

const platforms = [
  { 
    id: 'react', 
    name: 'React', 
    icon: '⚛️', 
    category: 'Web Development', 
    description: 'JavaScript library for building user interfaces', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'React Official Tutorial', link: 'https://react.dev/learn', platform: 'React.dev' },
        { title: 'React for Beginners', link: 'https://www.youtube.com/results?search_query=react+tutorial+for+beginners', platform: 'YouTube' },
        { title: 'freeCodeCamp React Course', link: 'https://www.freecodecamp.org/learn/front-end-development-libraries/', platform: 'freeCodeCamp' }
      ],
      intermediate: [
        { title: 'React Hooks Deep Dive', link: 'https://www.youtube.com/results?search_query=react+hooks+tutorial', platform: 'YouTube' },
        { title: 'State Management', link: 'https://www.udemy.com/courses/search/?q=react+free&price=price-free', platform: 'Udemy Free' },
        { title: 'React Router Guide', link: 'https://reactrouter.com/en/main', platform: 'React Router' }
      ],
      advanced: [
        { title: 'Advanced React Patterns', link: 'https://www.youtube.com/results?search_query=advanced+react+patterns', platform: 'YouTube' },
        { title: 'Performance Optimization', link: 'https://react.dev/learn/render-and-commit', platform: 'React.dev' },
        { title: 'React + TypeScript', link: 'https://www.typescriptlang.org/docs/handbook/react.html', platform: 'TypeScript' }
      ],
      expert: [
        { title: 'React Internals', link: 'https://www.youtube.com/results?search_query=react+internals', platform: 'YouTube' },
        { title: 'Building Libraries', link: 'https://github.com/topics/react', platform: 'GitHub' },
        { title: 'React Compiler', link: 'https://react.dev/learn/react-compiler', platform: 'React.dev' }
      ]
    }
  },
  { 
    id: 'vue', 
    name: 'Vue.js', 
    icon: '💚', 
    category: 'Web Development', 
    description: 'Progressive JavaScript framework', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'Vue.js Official Guide', link: 'https://vuejs.org/guide/introduction.html', platform: 'Vue.js' },
        { title: 'Vue 3 Tutorial', link: 'https://www.youtube.com/results?search_query=vue+3+tutorial', platform: 'YouTube' },
        { title: 'Vue Fundamentals', link: 'https://www.freecodecamp.org/news/tag/vue/', platform: 'freeCodeCamp' }
      ],
      intermediate: [
        { title: 'Composition API', link: 'https://vuejs.org/guide/extras/composition-api-faq.html', platform: 'Vue.js' },
        { title: 'Vuex State Management', link: 'https://vuex.vuejs.org/', platform: 'Vuex' },
        { title: 'Vue Router', link: 'https://router.vuejs.org/', platform: 'Vue Router' }
      ],
      advanced: [
        { title: 'Advanced Components', link: 'https://www.youtube.com/results?search_query=advanced+vue+components', platform: 'YouTube' },
        { title: 'Vue Performance', link: 'https://vuejs.org/guide/best-practices/performance.html', platform: 'Vue.js' },
        { title: 'Custom Directives', link: 'https://vuejs.org/guide/reusability/custom-directives.html', platform: 'Vue.js' }
      ],
      expert: [
        { title: 'Vue Internals', link: 'https://www.youtube.com/results?search_query=vue+internals', platform: 'YouTube' },
        { title: 'Plugin Development', link: 'https://vuejs.org/guide/reusability/plugins.html', platform: 'Vue.js' },
        { title: 'Vue Source Code', link: 'https://github.com/vuejs/core', platform: 'GitHub' }
      ]
    }
  },
  { 
    id: 'python', 
    name: 'Python', 
    icon: '🐍', 
    category: 'Programming', 
    description: 'Versatile programming language', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'Python for Beginners', link: 'https://www.python.org/about/gettingstarted/', platform: 'Python.org' },
        { title: 'Python Tutorial', link: 'https://www.youtube.com/results?search_query=python+tutorial+for+beginners', platform: 'YouTube' },
        { title: 'Learn Python', link: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/', platform: 'freeCodeCamp' }
      ],
      intermediate: [
        { title: 'OOP in Python', link: 'https://realpython.com/python3-object-oriented-programming/', platform: 'Real Python' },
        { title: 'Data Structures', link: 'https://docs.python.org/3/tutorial/datastructures.html', platform: 'Python Docs' },
        { title: 'File Handling', link: 'https://www.w3schools.com/python/python_file_handling.asp', platform: 'W3Schools' }
      ],
      advanced: [
        { title: 'Decorators & Generators', link: 'https://realpython.com/primer-on-python-decorators/', platform: 'Real Python' },
        { title: 'Async Python', link: 'https://realpython.com/async-io-python/', platform: 'Real Python' },
        { title: 'Design Patterns', link: 'https://refactoring.guru/design-patterns/python', platform: 'Refactoring Guru' }
      ],
      expert: [
        { title: 'Python Internals', link: 'https://tenthousandmeters.com/tag/python-behind-the-scenes/', platform: 'Blog' },
        { title: 'CPython Source', link: 'https://github.com/python/cpython', platform: 'GitHub' },
        { title: 'Performance Optimization', link: 'https://realpython.com/python-performance/', platform: 'Real Python' }
      ]
    }
  },
  { 
    id: 'nodejs', 
    name: 'Node.js', 
    icon: '🟢', 
    category: 'Backend', 
    description: 'JavaScript runtime', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'Node.js Introduction', link: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs', platform: 'Node.js' },
        { title: 'Node.js Tutorial', link: 'https://www.youtube.com/results?search_query=nodejs+tutorial', platform: 'YouTube' },
        { title: 'Node.js Course', link: 'https://www.freecodecamp.org/news/tag/node-js/', platform: 'freeCodeCamp' }
      ],
      intermediate: [
        { title: 'Express.js Guide', link: 'https://expressjs.com/en/starter/installing.html', platform: 'Express' },
        { title: 'REST APIs', link: 'https://www.youtube.com/results?search_query=node+rest+api+tutorial', platform: 'YouTube' },
        { title: 'MongoDB + Node', link: 'https://www.mongodb.com/languages/javascript', platform: 'MongoDB' }
      ],
      advanced: [
        { title: 'Microservices', link: 'https://www.youtube.com/results?search_query=nodejs+microservices', platform: 'YouTube' },
        { title: 'Authentication', link: 'https://www.youtube.com/results?search_query=nodejs+jwt+authentication', platform: 'YouTube' },
        { title: 'Testing Node Apps', link: 'https://jestjs.io/', platform: 'Jest' }
      ],
      expert: [
        { title: 'Node.js Performance', link: 'https://nodejs.org/en/learn/getting-started/profiling', platform: 'Node.js' },
        { title: 'Cluster & PM2', link: 'https://pm2.keymetrics.io/docs/usage/quick-start/', platform: 'PM2' },
        { title: 'Node.js Source', link: 'https://github.com/nodejs/node', platform: 'GitHub' }
      ]
    }
  },
  { 
    id: 'docker', 
    name: 'Docker', 
    icon: '🐳', 
    category: 'DevOps', 
    description: 'Container platform', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'Docker Getting Started', link: 'https://docs.docker.com/get-started/', platform: 'Docker' },
        { title: 'Docker Tutorial', link: 'https://www.youtube.com/results?search_query=docker+tutorial+for+beginners', platform: 'YouTube' },
        { title: 'Docker Basics', link: 'https://www.freecodecamp.org/news/tag/docker/', platform: 'freeCodeCamp' }
      ],
      intermediate: [
        { title: 'Dockerfile Best Practices', link: 'https://docs.docker.com/develop/develop-images/dockerfile_best-practices/', platform: 'Docker' },
        { title: 'Docker Compose', link: 'https://docs.docker.com/compose/', platform: 'Docker' },
        { title: 'Networking', link: 'https://docs.docker.com/network/', platform: 'Docker' }
      ],
      advanced: [
        { title: 'Multi-stage Builds', link: 'https://docs.docker.com/build/building/multi-stage/', platform: 'Docker' },
        { title: 'Docker Security', link: 'https://docs.docker.com/engine/security/', platform: 'Docker' },
        { title: 'Optimization', link: 'https://www.youtube.com/results?search_query=docker+optimization', platform: 'YouTube' }
      ],
      expert: [
        { title: 'Docker Internals', link: 'https://www.youtube.com/results?search_query=docker+internals', platform: 'YouTube' },
        { title: 'Custom Images', link: 'https://docs.docker.com/engine/reference/builder/', platform: 'Docker' },
        { title: 'Production Deploy', link: 'https://docs.docker.com/engine/swarm/', platform: 'Docker' }
      ]
    }
  },
  { 
    id: 'mongodb', 
    name: 'MongoDB', 
    icon: '🍃', 
    category: 'Database', 
    description: 'NoSQL database', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'MongoDB University', link: 'https://learn.mongodb.com/', platform: 'MongoDB' },
        { title: 'MongoDB Tutorial', link: 'https://www.youtube.com/results?search_query=mongodb+tutorial', platform: 'YouTube' },
        { title: 'Getting Started', link: 'https://www.mongodb.com/docs/manual/tutorial/getting-started/', platform: 'MongoDB' }
      ],
      intermediate: [
        { title: 'Schema Design', link: 'https://www.mongodb.com/docs/manual/data-modeling/', platform: 'MongoDB' },
        { title: 'Aggregation', link: 'https://www.mongodb.com/docs/manual/aggregation/', platform: 'MongoDB' },
        { title: 'Indexing', link: 'https://www.mongodb.com/docs/manual/indexes/', platform: 'MongoDB' }
      ],
      advanced: [
        { title: 'Performance', link: 'https://www.mongodb.com/docs/manual/administration/analyzing-mongodb-performance/', platform: 'MongoDB' },
        { title: 'Replication', link: 'https://www.mongodb.com/docs/manual/replication/', platform: 'MongoDB' },
        { title: 'Sharding', link: 'https://www.mongodb.com/docs/manual/sharding/', platform: 'MongoDB' }
      ],
      expert: [
        { title: 'MongoDB Architecture', link: 'https://www.youtube.com/results?search_query=mongodb+architecture', platform: 'YouTube' },
        { title: 'High Availability', link: 'https://www.mongodb.com/docs/manual/core/replica-set-high-availability/', platform: 'MongoDB' },
        { title: 'Atlas Advanced', link: 'https://www.mongodb.com/docs/atlas/', platform: 'MongoDB Atlas' }
      ]
    }
  },
  { 
    id: 'tensorflow', 
    name: 'TensorFlow', 
    icon: '🧠', 
    category: 'AI Tools', 
    description: 'ML framework', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'TensorFlow Basics', link: 'https://www.tensorflow.org/tutorials', platform: 'TensorFlow.org' },
        { title: 'Intro to Machine Learning', link: 'https://www.youtube.com/results?search_query=tensorflow+tutorial+for+beginners', platform: 'YouTube' },
        { title: 'TensorFlow Course', link: 'https://www.freecodecamp.org/news/tag/tensorflow/', platform: 'freeCodeCamp' }
      ],
      intermediate: [
        { title: 'Neural Networks', link: 'https://www.tensorflow.org/tutorials/keras/classification', platform: 'TensorFlow.org' },
        { title: 'CNNs & Image Classification', link: 'https://www.tensorflow.org/tutorials/images/cnn', platform: 'TensorFlow.org' },
        { title: 'Transfer Learning', link: 'https://www.tensorflow.org/tutorials/images/transfer_learning', platform: 'TensorFlow.org' }
      ],
      advanced: [
        { title: 'Custom Training Loops', link: 'https://www.tensorflow.org/guide/keras/writing_a_training_loop_from_scratch', platform: 'TensorFlow.org' },
        { title: 'Model Optimization', link: 'https://www.tensorflow.org/model_optimization', platform: 'TensorFlow.org' },
        { title: 'Distributed Training', link: 'https://www.tensorflow.org/guide/distributed_training', platform: 'TensorFlow.org' }
      ],
      expert: [
        { title: 'TensorFlow Extended (TFX)', link: 'https://www.tensorflow.org/tfx', platform: 'TensorFlow.org' },
        { title: 'Custom Ops & Kernels', link: 'https://www.tensorflow.org/guide/create_op', platform: 'TensorFlow.org' },
        { title: 'Production ML Systems', link: 'https://www.youtube.com/results?search_query=tensorflow+production+deployment', platform: 'YouTube' }
      ]
    }
  },
  { 
    id: 'pytorch', 
    name: 'PyTorch', 
    icon: '🔥', 
    category: 'AI Tools', 
    description: 'Deep learning framework', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'PyTorch Fundamentals', link: 'https://pytorch.org/tutorials/beginner/basics/intro.html', platform: 'PyTorch.org' },
        { title: 'Deep Learning with PyTorch', link: 'https://www.youtube.com/results?search_query=pytorch+tutorial', platform: 'YouTube' },
        { title: 'PyTorch for Beginners', link: 'https://www.freecodecamp.org/news/tag/pytorch/', platform: 'freeCodeCamp' }
      ],
      intermediate: [
        { title: 'Building Neural Networks', link: 'https://pytorch.org/tutorials/beginner/blitz/neural_networks_tutorial.html', platform: 'PyTorch.org' },
        { title: 'Computer Vision', link: 'https://pytorch.org/tutorials/intermediate/torchvision_tutorial.html', platform: 'PyTorch.org' },
        { title: 'NLP with PyTorch', link: 'https://pytorch.org/tutorials/beginner/nlp/pytorch_tutorial.html', platform: 'PyTorch.org' }
      ],
      advanced: [
        { title: 'Custom Datasets & DataLoaders', link: 'https://pytorch.org/tutorials/beginner/data_loading_tutorial.html', platform: 'PyTorch.org' },
        { title: 'Mixed Precision Training', link: 'https://pytorch.org/tutorials/recipes/recipes/amp_recipe.html', platform: 'PyTorch.org' },
        { title: 'Model Deployment', link: 'https://pytorch.org/tutorials/beginner/saving_loading_models.html', platform: 'PyTorch.org' }
      ],
      expert: [
        { title: 'Distributed Training', link: 'https://pytorch.org/tutorials/beginner/dist_overview.html', platform: 'PyTorch.org' },
        { title: 'Custom C++ Extensions', link: 'https://pytorch.org/tutorials/advanced/cpp_extension.html', platform: 'PyTorch.org' },
        { title: 'PyTorch Internals', link: 'https://www.youtube.com/results?search_query=pytorch+internals', platform: 'YouTube' }
      ]
    }
  },
  { 
    id: 'openai', 
    name: 'OpenAI API', 
    icon: '🤖', 
    category: 'AI Tools', 
    description: 'AI and ML APIs', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'OpenAI Quickstart', link: 'https://platform.openai.com/docs/quickstart', platform: 'OpenAI' },
        { title: 'First API Call', link: 'https://www.youtube.com/results?search_query=openai+api+tutorial', platform: 'YouTube' },
        { title: 'ChatGPT API Guide', link: 'https://platform.openai.com/docs/guides/gpt', platform: 'OpenAI' }
      ],
      intermediate: [
        { title: 'Prompt Engineering', link: 'https://platform.openai.com/docs/guides/prompt-engineering', platform: 'OpenAI' },
        { title: 'Function Calling', link: 'https://platform.openai.com/docs/guides/function-calling', platform: 'OpenAI' },
        { title: 'Embeddings', link: 'https://platform.openai.com/docs/guides/embeddings', platform: 'OpenAI' }
      ],
      advanced: [
        { title: 'Fine-tuning Models', link: 'https://platform.openai.com/docs/guides/fine-tuning', platform: 'OpenAI' },
        { title: 'Vision API', link: 'https://platform.openai.com/docs/guides/vision', platform: 'OpenAI' },
        { title: 'Streaming Responses', link: 'https://www.youtube.com/results?search_query=openai+streaming+api', platform: 'YouTube' }
      ],
      expert: [
        { title: 'Production Best Practices', link: 'https://platform.openai.com/docs/guides/production-best-practices', platform: 'OpenAI' },
        { title: 'Rate Limits & Optimization', link: 'https://platform.openai.com/docs/guides/rate-limits', platform: 'OpenAI' },
        { title: 'Building AI Agents', link: 'https://www.youtube.com/results?search_query=openai+agents+tutorial', platform: 'YouTube' }
      ]
    }
  },
  { 
    id: 'huggingface', 
    name: 'Hugging Face', 
    icon: '🤗', 
    category: 'AI Tools', 
    description: 'ML model hub', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'Transformers Quick Tour', link: 'https://huggingface.co/docs/transformers/quicktour', platform: 'Hugging Face' },
        { title: 'Getting Started', link: 'https://www.youtube.com/results?search_query=huggingface+tutorial', platform: 'YouTube' },
        { title: 'NLP Course', link: 'https://huggingface.co/learn/nlp-course/chapter1/1', platform: 'Hugging Face' }
      ],
      intermediate: [
        { title: 'Fine-tuning Pretrained Models', link: 'https://huggingface.co/docs/transformers/training', platform: 'Hugging Face' },
        { title: 'Pipeline API', link: 'https://huggingface.co/docs/transformers/main_classes/pipelines', platform: 'Hugging Face' },
        { title: 'Datasets Library', link: 'https://huggingface.co/docs/datasets/', platform: 'Hugging Face' }
      ],
      advanced: [
        { title: 'Custom Models', link: 'https://huggingface.co/docs/transformers/custom_models', platform: 'Hugging Face' },
        { title: 'Model Optimization', link: 'https://huggingface.co/docs/optimum/', platform: 'Hugging Face' },
        { title: 'Distributed Training', link: 'https://huggingface.co/docs/transformers/perf_train_gpu_many', platform: 'Hugging Face' }
      ],
      expert: [
        { title: 'Deploy to Production', link: 'https://huggingface.co/docs/inference-endpoints/', platform: 'Hugging Face' },
        { title: 'Building Spaces', link: 'https://huggingface.co/docs/hub/spaces', platform: 'Hugging Face' },
        { title: 'Contributing Models', link: 'https://huggingface.co/docs/transformers/model_sharing', platform: 'Hugging Face' }
      ]
    }
  },
  { 
    id: 'langchain', 
    name: 'LangChain', 
    icon: '🦜', 
    category: 'AI Tools', 
    description: 'LLM framework', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'LangChain Introduction', link: 'https://python.langchain.com/docs/get_started/introduction', platform: 'LangChain' },
        { title: 'Building Your First App', link: 'https://www.youtube.com/results?search_query=langchain+tutorial', platform: 'YouTube' },
        { title: 'Quickstart Guide', link: 'https://python.langchain.com/docs/get_started/quickstart', platform: 'LangChain' }
      ],
      intermediate: [
        { title: 'Chains & Prompts', link: 'https://python.langchain.com/docs/modules/chains/', platform: 'LangChain' },
        { title: 'Vector Stores', link: 'https://python.langchain.com/docs/modules/data_connection/vectorstores/', platform: 'LangChain' },
        { title: 'Memory Systems', link: 'https://python.langchain.com/docs/modules/memory/', platform: 'LangChain' }
      ],
      advanced: [
        { title: 'Building Agents', link: 'https://python.langchain.com/docs/modules/agents/', platform: 'LangChain' },
        { title: 'RAG Applications', link: 'https://python.langchain.com/docs/use_cases/question_answering/', platform: 'LangChain' },
        { title: 'Custom Tools', link: 'https://python.langchain.com/docs/modules/agents/tools/', platform: 'LangChain' }
      ],
      expert: [
        { title: 'Production Deployment', link: 'https://python.langchain.com/docs/guides/deployment', platform: 'LangChain' },
        { title: 'LangSmith Tracing', link: 'https://docs.smith.langchain.com/', platform: 'LangSmith' },
        { title: 'Advanced Agent Systems', link: 'https://www.youtube.com/results?search_query=langchain+advanced+agents', platform: 'YouTube' }
      ]
    }
  },
  { 
    id: 'stablediffusion', 
    name: 'Stable Diffusion', 
    icon: '🎨', 
    category: 'AI Tools', 
    description: 'AI image generation', 
    resourceCount: 12,
    resources: {
      beginner: [
        { title: 'Getting Started', link: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui', platform: 'GitHub' },
        { title: 'First Images', link: 'https://www.youtube.com/results?search_query=stable+diffusion+tutorial', platform: 'YouTube' },
        { title: 'Prompt Basics', link: 'https://stable-diffusion-art.com/prompt-guide/', platform: 'SD Art' }
      ],
      intermediate: [
        { title: 'Advanced Prompting', link: 'https://www.youtube.com/results?search_query=stable+diffusion+prompting', platform: 'YouTube' },
        { title: 'ControlNet Guide', link: 'https://stable-diffusion-art.com/controlnet/', platform: 'SD Art' },
        { title: 'Model Training', link: 'https://huggingface.co/docs/diffusers/training/overview', platform: 'Hugging Face' }
      ],
      advanced: [
        { title: 'LoRA Training', link: 'https://www.youtube.com/results?search_query=stable+diffusion+lora+training', platform: 'YouTube' },
        { title: 'Custom Models', link: 'https://huggingface.co/docs/diffusers/training/dreambooth', platform: 'Hugging Face' },
        { title: 'API Integration', link: 'https://github.com/Stability-AI/StableSwarmUI', platform: 'GitHub' }
      ],
      expert: [
        { title: 'Production Deployment', link: 'https://github.com/invoke-ai/InvokeAI', platform: 'GitHub' },
        { title: 'Custom Pipelines', link: 'https://huggingface.co/docs/diffusers/using-diffusers/custom_pipeline_overview', platform: 'Hugging Face' },
        { title: 'Optimization Techniques', link: 'https://www.youtube.com/results?search_query=stable+diffusion+optimization', platform: 'YouTube' }
      ]
    }
  },
  { id: 'rust', name: 'Rust', icon: '🦀', category: 'Programming', description: 'Systems language', resourceCount: 12 },
  { id: 'angular', name: 'Angular', icon: '🅰️', category: 'Web Development', description: 'Platform for building apps', resourceCount: 12 },
  { id: 'typescript', name: 'TypeScript', icon: '📘', category: 'Programming', description: 'Typed superset of JavaScript', resourceCount: 12 },
  { id: 'java', name: 'Java', icon: '☕', category: 'Programming', description: 'Object-oriented language', resourceCount: 12 },
  { id: 'kubernetes', name: 'Kubernetes', icon: '☸️', category: 'DevOps', description: 'Container orchestration', resourceCount: 12 },
  { id: 'firebase', name: 'Firebase', icon: '🔥', category: 'Backend', description: 'Google cloud platform', resourceCount: 12 },
  { id: 'nextjs', name: 'Next.js', icon: '▲', category: 'Web Development', description: 'React framework', resourceCount: 12 },
  { id: 'postgresql', name: 'PostgreSQL', icon: '🐘', category: 'Database', description: 'Relational database', resourceCount: 12 },
  { id: 'react-native', name: 'React Native', icon: '📱', category: 'Mobile', description: 'Mobile app framework', resourceCount: 12 },
  { id: 'tailwind', name: 'Tailwind CSS', icon: '🎨', category: 'Web Development', description: 'CSS framework', resourceCount: 12 },
  { id: 'oauth', name: 'OAuth', icon: '🔐', category: 'Security', description: 'Authorization framework', resourceCount: 12 },
  { id: 'graphql', name: 'GraphQL', icon: '◆', category: 'Backend', description: 'Query language for APIs', resourceCount: 12 },
  { id: 'redis', name: 'Redis', icon: '🔴', category: 'Database', description: 'In-memory data store', resourceCount: 12 },
  { id: 'git', name: 'Git', icon: '📚', category: 'DevOps', description: 'Version control system', resourceCount: 12 },
  { id: 'aws', name: 'AWS', icon: '☁️', category: 'DevOps', description: 'Cloud computing platform', resourceCount: 12 },
  { id: 'midjourney', name: 'Midjourney', icon: '🖼️', category: 'AI Tools', description: 'AI art generation', resourceCount: 12 }
];

const tools = [
  { id: 'vscode', name: 'VS Code', icon: '💻', category: 'Code Editor', description: 'Powerful code editor with extensions', link: 'https://code.visualstudio.com', searchLink: 'https://www.google.com/search?q=VS+Code+tutorials' },
  { id: 'intellij', name: 'IntelliJ IDEA', icon: '🧠', category: 'IDE', description: 'Java IDE by JetBrains', link: 'https://www.jetbrains.com/idea/', searchLink: 'https://www.google.com/search?q=IntelliJ+IDEA+tutorials' },
  { id: 'webstorm', name: 'WebStorm', icon: '⚡', category: 'IDE', description: 'JavaScript IDE by JetBrains', link: 'https://www.jetbrains.com/webstorm/', searchLink: 'https://www.google.com/search?q=WebStorm+tutorials' },
  { id: 'pycharm', name: 'PyCharm', icon: '🐍', category: 'IDE', description: 'Python IDE by JetBrains', link: 'https://www.jetbrains.com/pycharm/', searchLink: 'https://www.google.com/search?q=PyCharm+tutorials' },
  { id: 'figma', name: 'Figma', icon: '🎨', category: 'Design', description: 'Collaborative interface design tool', link: 'https://figma.com', searchLink: 'https://www.google.com/search?q=Figma+design+tutorials' },
  { id: 'sketch', name: 'Sketch', icon: '💎', category: 'Design', description: 'Digital design toolkit', link: 'https://www.sketch.com', searchLink: 'https://www.google.com/search?q=Sketch+app+tutorials' },
  { id: 'adobe-xd', name: 'Adobe XD', icon: '🎭', category: 'Design', description: 'UI/UX design and prototyping', link: 'https://www.adobe.com/products/xd.html', searchLink: 'https://www.google.com/search?q=Adobe+XD+tutorials' },
  { id: 'postman', name: 'Postman', icon: '📡', category: 'API Testing', description: 'API development and testing platform', link: 'https://postman.com', searchLink: 'https://www.google.com/search?q=Postman+API+testing+tutorials' },
  { id: 'insomnia', name: 'Insomnia', icon: '😴', category: 'API Testing', description: 'REST and GraphQL client', link: 'https://insomnia.rest', searchLink: 'https://www.google.com/search?q=Insomnia+REST+client+tutorials' },
  { id: 'swagger', name: 'Swagger', icon: '📋', category: 'API Documentation', description: 'API documentation tools', link: 'https://swagger.io', searchLink: 'https://www.google.com/search?q=Swagger+API+documentation+tutorials' },
  { id: 'git', name: 'Git', icon: '📚', category: 'Version Control', description: 'Distributed version control system', link: 'https://git-scm.com', searchLink: 'https://www.google.com/search?q=Git+version+control+tutorials' },
  { id: 'github', name: 'GitHub', icon: '🐙', category: 'Version Control', description: 'Code hosting platform', link: 'https://github.com', searchLink: 'https://www.google.com/search?q=GitHub+tutorials' },
  { id: 'gitlab', name: 'GitLab', icon: '🦊', category: 'Version Control', description: 'DevOps lifecycle tool', link: 'https://gitlab.com', searchLink: 'https://www.google.com/search?q=GitLab+tutorials' },
  { id: 'bitbucket', name: 'Bitbucket', icon: '🪣', category: 'Version Control', description: 'Git solution by Atlassian', link: 'https://bitbucket.org', searchLink: 'https://www.google.com/search?q=Bitbucket+tutorials' },
  { id: 'jira', name: 'Jira', icon: '📊', category: 'Project Management', description: 'Issue and project tracking', link: 'https://www.atlassian.com/software/jira', searchLink: 'https://www.google.com/search?q=Jira+project+management+tutorials' },
  { id: 'trello', name: 'Trello', icon: '📌', category: 'Project Management', description: 'Visual collaboration tool', link: 'https://trello.com', searchLink: 'https://www.google.com/search?q=Trello+tutorials' },
  { id: 'notion', name: 'Notion', icon: '📝', category: 'Productivity', description: 'All-in-one workspace', link: 'https://notion.so', searchLink: 'https://www.google.com/search?q=Notion+productivity+tutorials' },
  { id: 'obsidian', name: 'Obsidian', icon: '🔮', category: 'Productivity', description: 'Knowledge base and note-taking', link: 'https://obsidian.md', searchLink: 'https://www.google.com/search?q=Obsidian+note+taking+tutorials' },
  { id: 'slack', name: 'Slack', icon: '💬', category: 'Communication', description: 'Team communication platform', link: 'https://slack.com', searchLink: 'https://www.google.com/search?q=Slack+team+communication+tutorials' },
  { id: 'discord', name: 'Discord', icon: '🎮', category: 'Communication', description: 'Voice, video, and text chat', link: 'https://discord.com', searchLink: 'https://www.google.com/search?q=Discord+tutorials' },
  { id: 'jenkins', name: 'Jenkins', icon: '🔧', category: 'CI/CD', description: 'Automation server', link: 'https://www.jenkins.io', searchLink: 'https://www.google.com/search?q=Jenkins+CI+CD+tutorials' },
  { id: 'circleci', name: 'CircleCI', icon: '⭕', category: 'CI/CD', description: 'Continuous integration platform', link: 'https://circleci.com', searchLink: 'https://www.google.com/search?q=CircleCI+tutorials' },
  { id: 'travis', name: 'Travis CI', icon: '🚦', category: 'CI/CD', description: 'CI service for GitHub', link: 'https://travis-ci.org', searchLink: 'https://www.google.com/search?q=Travis+CI+tutorials' },
  { id: 'github-actions', name: 'GitHub Actions', icon: '⚙️', category: 'CI/CD', description: 'Automate workflows', link: 'https://github.com/features/actions', searchLink: 'https://www.google.com/search?q=GitHub+Actions+tutorials' },
  { id: 'terraform', name: 'Terraform', icon: '🗗️', category: 'Infrastructure', description: 'Infrastructure as code', link: 'https://www.terraform.io', searchLink: 'https://www.google.com/search?q=Terraform+infrastructure+as+code+tutorials' },
  { id: 'ansible', name: 'Ansible', icon: '🤖', category: 'Infrastructure', description: 'IT automation platform', link: 'https://www.ansible.com', searchLink: 'https://www.google.com/search?q=Ansible+automation+tutorials' },
  { id: 'webpack', name: 'Webpack', icon: '📦', category: 'Build Tools', description: 'Module bundler', link: 'https://webpack.js.org', searchLink: 'https://www.google.com/search?q=Webpack+module+bundler+tutorials' },
  { id: 'vite', name: 'Vite', icon: '⚡', category: 'Build Tools', description: 'Next generation frontend tooling', link: 'https://vitejs.dev', searchLink: 'https://www.google.com/search?q=Vite+build+tool+tutorials' },
  { id: 'babel', name: 'Babel', icon: '🗼', category: 'Build Tools', description: 'JavaScript compiler', link: 'https://babeljs.io', searchLink: 'https://www.google.com/search?q=Babel+JavaScript+compiler+tutorials' },
  { id: 'eslint', name: 'ESLint', icon: '🔍', category: 'Code Quality', description: 'JavaScript linting utility', link: 'https://eslint.org', searchLink: 'https://www.google.com/search?q=ESLint+JavaScript+linting+tutorials' },
  { id: 'prettier', name: 'Prettier', icon: '✨', category: 'Code Quality', description: 'Opinionated code formatter', link: 'https://prettier.io', searchLink: 'https://www.google.com/search?q=Prettier+code+formatter+tutorials' },
  { id: 'sonarqube', name: 'SonarQube', icon: '🎯', category: 'Code Quality', description: 'Code quality and security', link: 'https://www.sonarqube.org', searchLink: 'https://www.google.com/search?q=SonarQube+code+quality+tutorials' },
  { id: 'sentry', name: 'Sentry', icon: '🚨', category: 'Monitoring', description: 'Error tracking and monitoring', link: 'https://sentry.io', searchLink: 'https://www.google.com/search?q=Sentry+error+tracking+tutorials' },
  { id: 'datadog', name: 'Datadog', icon: '🐕', category: 'Monitoring', description: 'Monitoring and analytics', link: 'https://www.datadoghq.com', searchLink: 'https://www.google.com/search?q=Datadog+monitoring+tutorials' },
  { id: 'grafana', name: 'Grafana', icon: '📈', category: 'Monitoring', description: 'Analytics and monitoring', link: 'https://grafana.com', searchLink: 'https://www.google.com/search?q=Grafana+monitoring+tutorials' },
  { id: 'prometheus', name: 'Prometheus', icon: '🔥', category: 'Monitoring', description: 'Systems monitoring toolkit', link: 'https://prometheus.io', searchLink: 'https://www.google.com/search?q=Prometheus+monitoring+tutorials' },
  { id: 'nginx', name: 'Nginx', icon: '🌐', category: 'Web Server', description: 'High-performance web server', link: 'https://nginx.org', searchLink: 'https://www.google.com/search?q=Nginx+web+server+tutorials' },
  { id: 'apache', name: 'Apache', icon: '🪶', category: 'Web Server', description: 'HTTP server project', link: 'https://httpd.apache.org', searchLink: 'https://www.google.com/search?q=Apache+HTTP+server+tutorials' },
  { id: 'vercel', name: 'Vercel', icon: '▲', category: 'Hosting', description: 'Frontend deployment platform', link: 'https://vercel.com', searchLink: 'https://www.google.com/search?q=Vercel+deployment+tutorials' },
  { id: 'netlify', name: 'Netlify', icon: '🌊', category: 'Hosting', description: 'Web development platform', link: 'https://netlify.com', searchLink: 'https://www.google.com/search?q=Netlify+hosting+tutorials' },
  { id: 'heroku', name: 'Heroku', icon: '💜', category: 'Hosting', description: 'Cloud platform as a service', link: 'https://heroku.com', searchLink: 'https://www.google.com/search?q=Heroku+deployment+tutorials' },
  { id: 'railway', name: 'Railway', icon: '🚂', category: 'Hosting', description: 'Infrastructure platform', link: 'https://railway.app', searchLink: 'https://www.google.com/search?q=Railway+app+hosting+tutorials' },
  { id: 'supabase', name: 'Supabase', icon: '⚡', category: 'Backend', description: 'Open source Firebase alternative', link: 'https://supabase.com', searchLink: 'https://www.google.com/search?q=Supabase+backend+tutorials' },
  { id: 'prisma', name: 'Prisma', icon: '🔷', category: 'Database', description: 'Next-generation ORM', link: 'https://www.prisma.io', searchLink: 'https://www.google.com/search?q=Prisma+ORM+tutorials' },
  { id: 'chromadb', name: 'ChromaDB', icon: '🎨', category: 'AI Database', description: 'AI-native vector database', link: 'https://www.trychroma.com', searchLink: 'https://www.google.com/search?q=ChromaDB+vector+database+tutorials' },
  { id: 'pinecone', name: 'Pinecone', icon: '🌲', category: 'AI Database', description: 'Vector database for ML', link: 'https://www.pinecone.io', searchLink: 'https://www.google.com/search?q=Pinecone+vector+database+tutorials' },
  { id: 'cursor', name: 'Cursor', icon: '🖱️', category: 'AI Code Editor', description: 'AI-powered code editor', link: 'https://cursor.sh', searchLink: 'https://www.google.com/search?q=Cursor+AI+code+editor+tutorials' },
  { id: 'github-copilot', name: 'GitHub Copilot', icon: '🤖', category: 'AI Assistant', description: 'AI pair programmer', link: 'https://github.com/features/copilot', searchLink: 'https://www.google.com/search?q=GitHub+Copilot+tutorials' },
  { id: 'tabnine', name: 'Tabnine', icon: '🧩', category: 'AI Assistant', description: 'AI code completion', link: 'https://www.tabnine.com', searchLink: 'https://www.google.com/search?q=Tabnine+AI+code+completion+tutorials' },
  { id: 'replit', name: 'Replit', icon: '🔄', category: 'Cloud IDE', description: 'Collaborative browser IDE', link: 'https://replit.com', searchLink: 'https://www.google.com/search?q=Replit+online+IDE+tutorials' },
  { id: 'codesandbox', name: 'CodeSandbox', icon: '📦', category: 'Cloud IDE', description: 'Online code editor', link: 'https://codesandbox.io', searchLink: 'https://www.google.com/search?q=CodeSandbox+tutorials' },
  { id: 'stackblitz', name: 'StackBlitz', icon: '⚡', category: 'Cloud IDE', description: 'Online IDE for web apps', link: 'https://stackblitz.com', searchLink: 'https://www.google.com/search?q=StackBlitz+online+IDE+tutorials' }
];

function renderPlatforms() {
  const grid = document.getElementById('platformGrid');
  grid.innerHTML = platforms.map(p => `
    <div class="platform-card" onclick='openPlatform(${JSON.stringify(p).replace(/'/g, "&#39;")})'>
      <span class="platform-category">${p.category}</span>
      <div class="platform-icon">${p.icon}</div>
      <h3 class="platform-name">${p.name}</h3>
    </div>
  `).join('');
}

function renderTools() {
  const grid = document.getElementById('toolsGrid');
  grid.innerHTML = tools.map(tool => `
    <div class="platform-card">
      <span class="platform-category">${tool.category}</span>
      <div class="platform-icon">${tool.icon}</div>
      <h3 class="platform-name">${tool.name}</h3>
      <p style="color: var(--text-gray); margin-top: 1rem; font-size: 0.95rem; min-height: 45px;">${tool.description}</p>
      <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
        <a href="${tool.link}" target="_blank" rel="noopener noreferrer" 
           style="flex: 1; display: block; padding: 0.7rem; background: linear-gradient(135deg, var(--primary-red), var(--accent-purple)); 
                  border-radius: 8px; color: white; text-decoration: none; text-align: center; font-weight: 600; font-size: 0.9rem; transition: all 0.3s;"
           onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 5px 15px rgba(255, 31, 90, 0.5)'"
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
          Visit →
        </a>
        <a href="${tool.searchLink}" target="_blank" rel="noopener noreferrer" 
           style="flex: 1; display: block; padding: 0.7rem; background: rgba(255, 31, 90, 0.1); border: 1px solid var(--glass-border);
                  border-radius: 8px; color: var(--primary-red); text-decoration: none; text-align: center; font-weight: 600; font-size: 0.9rem; transition: all 0.3s;"
           onmouseover="this.style.background='rgba(255, 31, 90, 0.2)'; this.style.borderColor='var(--primary-red)'"
           onmouseout="this.style.background='rgba(255, 31, 90, 0.1)'; this.style.borderColor='var(--glass-border)'">
          🔍 Learn
        </a>
      </div>
    </div>
  `).join('');
}

function openPlatform(platform) {
  if (!authState.isAuthenticated) {
    showAuthModal();
    return;
  }

  const modal = document.getElementById('platformModal');
  const details = document.getElementById('platformDetails');

  const hasResources = platform.resources && Object.keys(platform.resources).length > 0;

  if (hasResources) {
    const levels = ['beginner', 'intermediate', 'advanced', 'expert'];
    const levelIcons = { beginner: '🌱', intermediate: '🚀', advanced: '⚡', expert: '👑' };
    const levelColors = { 
      beginner: '#4ade80', 
      intermediate: '#60a5fa', 
      advanced: '#f97316', 
      expert: '#a855f7' 
    };

    details.innerHTML = `
      <h2 class="modal-title">${platform.icon} ${platform.name}</h2>
      <p style="color: var(--text-gray); margin-bottom: 2rem; font-size: 1.1rem;">${platform.description}</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
        ${levels.map(level => `
          <button onclick="showLevel('${level}')" id="btn-${level}"
            style="padding: 1rem; background: rgba(255,31,90,0.1); border: 2px solid var(--glass-border); 
                   border-radius: 12px; color: var(--text-white); cursor: pointer; transition: all 0.3s; 
                   font-weight: 700; text-transform: uppercase; font-size: 0.9rem;"
            onmouseover="this.style.borderColor='var(--primary-red)'; this.style.transform='translateY(-2px)'"
            onmouseout="if(!this.classList.contains('active')) { this.style.borderColor='var(--glass-border)'; this.style.transform='translateY(0)' }">
            <div style="font-size: 1.5rem; margin-bottom: 0.3rem;">${levelIcons[level]}</div>
            ${level}
          </button>
        `).join('')}
      </div>

      ${levels.map(level => `
        <div id="level-${level}" class="level-content" style="display: none;">
          <h3 style="color: ${levelColors[level]}; margin-bottom: 1.5rem; font-size: 1.4rem; font-weight: 700;">
            ${levelIcons[level]} ${level.toUpperCase()} RESOURCES
          </h3>
          <div style="display: grid; gap: 1rem;">
            ${platform.resources[level].map(resource => `
              <div style="background: rgba(255,31,90,0.05); border: 1px solid var(--glass-border); 
                          border-radius: 12px; padding: 1.5rem; transition: all 0.3s;"
                   onmouseover="this.style.borderColor='var(--primary-red)'; this.style.background='rgba(255,31,90,0.1)'"
                   onmouseout="this.style.borderColor='var(--glass-border)'; this.style.background='rgba(255,31,90,0.05)'">
                <div style="display: flex; justify-content: space-between; align-items: start; gap: 1rem;">
                  <div style="flex: 1;">
                    <h4 style="color: var(--text-white); font-size: 1.1rem; margin-bottom: 0.5rem; font-weight: 700;">
                      ${resource.title}
                    </h4>
                    <p style="color: var(--text-gray); font-size: 0.9rem; margin-bottom: 1rem;">
                      📚 ${resource.platform}
                    </p>
                  </div>
                </div>
                <a href="${resource.link}" target="_blank" rel="noopener noreferrer"
                   style="display: inline-block; padding: 0.8rem 1.5rem; background: linear-gradient(135deg, var(--primary-red), var(--accent-purple)); 
                          border-radius: 8px; color: white; text-decoration: none; font-weight: 700; transition: all 0.3s;"
                   onmouseover="this.style.transform='translateX(5px)'; this.style.boxShadow='0 5px 20px rgba(255,31,90,0.4)'"
                   onmouseout="this.style.transform='translateX(0)'; this.style.boxShadow='none'">
                  Start Learning →
                </a>
              </div>
            `).join('')}
          </div>
        </div>
      `).join('')}
    `;

    setTimeout(() => {
      showLevel('beginner');
    }, 100);

  } else {
    details.innerHTML = `
      <h2 class="modal-title">${platform.icon} ${platform.name}</h2>
      <p style="color: var(--text-gray); margin-bottom: 2rem;">${platform.description}</p>
      <div style="padding: 2rem; background: rgba(255,31,90,0.1); border-radius: 15px; border: 1px solid var(--glass-border); text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🚀</div>
        <h3 style="color: var(--primary-red); margin-bottom: 1rem; font-weight: 700;">
          ${platform.resourceCount} Learning Resources Available
        </h3>
        <p style="color: var(--text-gray); margin-bottom: 2rem;">
          Complete tutorials, guides, and documentation for mastering ${platform.name}
        </p>
        <a href="https://www.google.com/search?q=${encodeURIComponent(platform.name + ' tutorial free')}" 
           target="_blank" rel="noopener noreferrer"
           style="display: inline-block; padding: 1rem 2rem; background: linear-gradient(135deg, var(--primary-red), var(--accent-purple)); 
                  border-radius: 10px; color: white; text-decoration: none; font-weight: 700; transition: all 0.3s;"
           onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 10px 30px rgba(255,31,90,0.5)'"
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none'">
          🔍 Search Free Courses
        </a>
      </div>
    `;
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function showLevel(level) {
  document.querySelectorAll('.level-content').forEach(el => el.style.display = 'none');
  
  ['beginner', 'intermediate', 'advanced', 'expert'].forEach(l => {
    const btn = document.getElementById(`btn-${l}`);
    if (btn) {
      btn.style.borderColor = 'var(--glass-border)';
      btn.style.background = 'rgba(255,31,90,0.1)';
    }
  });
  
  const levelEl = document.getElementById(`level-${level}`);
  if (levelEl) levelEl.style.display = 'block';
  
  const activeBtn = document.getElementById(`btn-${level}`);
  if (activeBtn) {
    activeBtn.style.borderColor = 'var(--primary-red)';
    activeBtn.style.background = 'rgba(255,31,90,0.2)';
  }
}

function updateUI(authenticated) {
  const userMenu = document.getElementById('userMenu');
  const signInBtn = document.getElementById('signInBtn');

  if (authenticated) {
    userMenu.style.display = 'block';
    signInBtn.style.display = 'none';
    document.getElementById('userName').textContent = authState.user.name;
    document.getElementById('userEmail').textContent = authState.user.email;
    const initials = authState.user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    document.getElementById('userInitials').textContent = initials;
  } else {
    userMenu.style.display = 'none';
    signInBtn.style.display = 'block';
  }
}

function showAuthModal() {
  document.getElementById('authModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
  document.getElementById('authModal').classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Particle Animation
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.radius = Math.random() * 2 + 1;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 31, 90, ${this.opacity})`;
    ctx.fill();
  }
}

const particles = [];
for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  particles.forEach((p1, i) => {
    particles.slice(i + 1).forEach(p2 => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255, 31, 90, ${0.2 * (1 - distance / 150)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    });
  });

  requestAnimationFrame(animate);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  renderPlatforms();
  renderTools();
  animate();

  document.getElementById('signInBtn').addEventListener('click', showAuthModal);
  document.getElementById('authClose').addEventListener('click', closeAuthModal);
  document.getElementById('platformClose').addEventListener('click', () => {
    document.getElementById('platformModal').classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  document.getElementById('showSignup').addEventListener('click', () => {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupForm').classList.add('active');
  });

  document.getElementById('showLogin').addEventListener('click', () => {
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById('loginForm').classList.add('active');
  });

  document.getElementById('loginFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      authState = { isAuthenticated: true, user: { name: user.name, email: user.email } };
      updateUI(true);
      closeAuthModal();
      alert('Welcome back! You can now access all resources.');
    } else {
      alert('Invalid credentials. Please try again or sign up.');
    }
  });

  document.getElementById('signupFormElement').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (users.some(u => u.email === email)) {
      alert('Email already exists. Please login instead.');
      document.getElementById('signupForm').classList.remove('active');
      document.getElementById('loginForm').classList.add('active');
      return;
    }

    users.push({ name, email, password });
    authState = { isAuthenticated: true, user: { name, email } };
    updateUI(true);
    closeAuthModal();
    alert(`Welcome ${name}! Account created successfully.`);
  });

  document.getElementById('logoutBtn').addEventListener('click', () => {
    authState = { isAuthenticated: false, user: null };
    updateUI(false);
    alert('Logged out successfully.');
  });

  document.getElementById('accessBtn').addEventListener('click', () => {
    document.getElementById('resources').scrollIntoView({ behavior: 'smooth' });
  });

  document.getElementById('searchBtn').addEventListener('click', () => {
    alert('Search feature - click on any platform card below to explore!');
  });

  // Blog functionality
  renderBlogPosts();

  document.getElementById('blogClose').addEventListener('click', () => {
    document.getElementById('blogModal').classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Chat functionality
  const chatToggle = document.getElementById('chatToggle');
  const chatContainer = document.getElementById('chatContainer');
  const chatClose = document.getElementById('chatClose');
  const chatSend = document.getElementById('chatSend');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  chatToggle.addEventListener('click', () => {
    chatContainer.classList.add('active');
    chatToggle.style.display = 'none';
    chatInput.focus();
  });

  chatClose.addEventListener('click', () => {
    chatContainer.classList.remove('active');
    chatToggle.style.display = 'flex';
  });

  chatSend.addEventListener('click', sendChatMessage);
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendChatMessage();
    }
  });

  // Auto-resize textarea
  chatInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 100) + 'px';
  });
});

// Blog functions
function renderBlogPosts() {
  const grid = document.getElementById('blogPosts');
  grid.innerHTML = blogPosts.map(post => `
    <div class="blog-card" onclick="openBlogPost(${post.id})">
      <div class="blog-date">📅 ${formatDate(post.date)}</div>
      <h3 class="blog-title">${post.title}</h3>
      <p class="blog-excerpt">${post.excerpt}</p>
      <div class="blog-author">✍️ ${post.author}</div>
    </div>
  `).join('');
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function openBlogPost(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;

  const modal = document.getElementById('blogModal');
  const content = document.getElementById('blogPostContent');

  const comments = blogComments[postId] || [];

  content.innerHTML = `
    <h2 class="modal-title">${post.title}</h2>
    <div style="display: flex; justify-content: space-between; color: var(--text-gray); margin-bottom: 2rem; font-size: 0.9rem;">
      <span>📅 ${formatDate(post.date)}</span>
      <span>✍️ ${post.author}</span>
    </div>
    <div class="blog-content">${post.content}</div>
    
    <div class="blog-comments">
      <h3 style="color: var(--primary-red); margin-bottom: 1.5rem; font-size: 1.5rem;">💬 Comments (${comments.length})</h3>
      
      ${authState.isAuthenticated ? `
        <div class="comment-form">
          <textarea class="comment-input" id="newComment" placeholder="Share your thoughts..."></textarea>
          <button class="comment-submit" onclick="addComment(${postId})">Post Comment</button>
        </div>
      ` : `
        <div style="text-align: center; padding: 2rem; background: rgba(255,31,90,0.05); border-radius: 15px; margin-bottom: 2rem;">
          <p style="color: var(--text-gray); margin-bottom: 1rem;">Sign in to leave a comment</p>
          <button onclick="showAuthModal(); document.getElementById('blogModal').classList.remove('active')" 
                  style="padding: 0.8rem 2rem; background: linear-gradient(135deg, var(--primary-red), var(--accent-purple)); 
                         border: none; border-radius: 10px; color: white; font-weight: 700; cursor: pointer;">
            Sign In
          </button>
        </div>
      `}
      
      <div class="comment-list">
        ${comments.map(comment => `
          <div class="comment-item">
            <div class="comment-header">
              <div class="comment-author">👤 ${comment.author}</div>
              <div class="comment-date">${formatDate(comment.date)}</div>
            </div>
            <div class="comment-text">${comment.text}</div>
          </div>
        `).join('') || '<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No comments yet. Be the first!</p>'}
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function addComment(postId) {
  if (!authState.isAuthenticated) {
    alert('Please sign in to comment');
    return;
  }

  const commentText = document.getElementById('newComment').value.trim();
  if (!commentText) return;

  if (!blogComments[postId]) {
    blogComments[postId] = [];
  }

  blogComments[postId].push({
    author: authState.user.name,
    text: commentText,
    date: new Date().toISOString().split('T')[0]
  });

  openBlogPost(postId);
}

// Chat functions
let chatHistory = [];

async function sendChatMessage() {
  const input = document.getElementById('chatInput');
  const sendBtn = document.getElementById('chatSend');
  const messagesContainer = document.getElementById('chatMessages');
  
  const message = input.value.trim();
  if (!message) return;

  input.disabled = true;
  sendBtn.disabled = true;
  
  addChatMessage(message, 'user');
  input.value = '';
  input.style.height = 'auto';
  
  const loadingDiv = document.createElement('div');
  loadingDiv.className = 'chat-message assistant';
  loadingDiv.innerHTML = `
    <div class="message-avatar">🤖</div>
    <div class="message-content">
      <div class="message-loading">
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
        <div class="loading-dot"></div>
      </div>
    </div>
  `;
  messagesContainer.appendChild(loadingDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
  // Simulate delay
  setTimeout(() => {
    loadingDiv.remove();
    const response = getSimulatedResponse(message);
    addChatMessage(response, 'assistant');
  }, 1500);
  
  input.disabled = false;
  sendBtn.disabled = false;
}

function getSimulatedResponse(message) {
  const msg = message.toLowerCase();
  
  // React
  if (msg.includes('react')) {
    return 'React is a popular JavaScript library for building UIs. Start with the official tutorial at react.dev, then practice building small projects. Key concepts: JSX, components, hooks, and state management.';
  }
  
  // Python
  if (msg.includes('python')) {
    return 'Python is great for beginners! Start with basics: variables, loops, functions. Then explore web development (Django/Flask) or data science (pandas/numpy). Check python.org for official docs.';
  }
  
  // AI/ML
  if (msg.includes('ai') || msg.includes('machine learning') || msg.includes('ml')) {
    return 'Start with Python basics, then learn: 1) NumPy & Pandas, 2) TensorFlow or PyTorch, 3) Build simple projects like image classification. Our platform has courses for TensorFlow, PyTorch, and more!';
  }
  
  // Docker
  if (msg.includes('docker')) {
    return 'Docker containers package your app with its dependencies. Benefits: consistency across environments, easy deployment, isolation. Start with Docker Desktop and write your first Dockerfile. Check our Docker section for tutorials!';
  }
  
  // Career advice
  if (msg.includes('career') || msg.includes('job')) {
    return 'Focus on: 1) Master fundamentals (JavaScript/Python), 2) Build portfolio projects, 3) Contribute to open source, 4) Network on LinkedIn, 5) Practice LeetCode for interviews. The tech job market rewards consistent learners!';
  }
  
  // Learning path
  if (msg.includes('learn') || msg.includes('start')) {
    return 'Recommended path: 1) Pick one language (JavaScript/Python), 2) Build 3-5 projects, 3) Learn Git & GitHub, 4) Explore frameworks (React/Django), 5) Deploy projects live. Use our platform\'s beginner → expert paths!';
  }
  
  // Comparison
  if (msg.includes('vs') || msg.includes('better')) {
    return 'Every technology has trade-offs. Consider: 1) Job market demand, 2) Your learning style, 3) Project requirements, 4) Community support. Browse our platform resources to compare technologies in-depth!';
  }
  
  // Default responses
  const defaults = [
    'Interesting question! I recommend checking our platform resources for detailed guides on this topic. What specific aspect interests you most?',
    'Great question! Our learning platform has comprehensive tutorials for this. Would you like recommendations for beginner, intermediate, or advanced level?',
    'That\'s a common question in tech! Browse our platform sections - we have 28+ technologies with structured learning paths. Which area interests you?',
    'I can help with that! Our platform offers courses on React, Python, Docker, AI tools, and more. What would you like to learn first?'
  ];
  
  return defaults[Math.floor(Math.random() * defaults.length)];
}

function addChatMessage(text, sender) {
  const messagesContainer = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${sender}`;
  
  const avatar = sender === 'user' ? '👤' : '🤖';
  
  messageDiv.innerHTML = `
    <div class="message-avatar">${avatar}</div>
    <div class="message-content">${text}</div>
  `;
  
  messagesContainer.appendChild(messageDiv);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
