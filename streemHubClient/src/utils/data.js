const footerLinks = [
  {
    category: 'products',
    list: [
      {
        text: 'pricing',
        url: '',
      },
      {
        text: 'features',
        url: '',
      },
      {
        text: 'customers',
        url: '',
      },
      {
        text: 'feedback',
        url: '',
      },
    ],
  },
  {
    category: 'help',
    list: [
      {
        text: 'getting started',
        url: '',
      },
      {
        text: 'sign up',
        url: '/signup',
      },
      {
        text: 'login',
        url: '/login',
      },
      {
        text: 'FAQ',
        url: '',
      },
    ],
  },
  {
    category: 'site map',
    list: [
      {
        text: 'ABOUT US',
        url: '',
      },
      {
        text: 'COLLAB',
        url: '',
      },
      {
        text: 'POSTS',
        url: '/posts',
      },
      {
        text: 'CONTACT US',
        url: '',
      },
    ],
  },
]
// HOME data
const features = [
  {
    title: 'Books',
    text: 'Download books for an API like Google scholar, summarizing them using an AI algorithm, generating voice books or audios, and providing details and related books on author and titles ',
    img: '/home/books.png',
  },
  {
    title: 'Projects/articles/research work',
    text: 'This platform allows users to find related research/projects, access references/citations, collaborate on research, and upload their own projects for collaboration.',
    img: '/home/projects.png',
  },
  {
    title: 'Codes',
    text: 'We provide downloadable frontend code files, accompanied by step-by-step explanations of the code using GPT AI.',
    img: '/home/codes.png',
  },
  {
    title: 'Linking',
    text: 'The platform allows users to link specific details of one website to another, such as linking updated prices of Amazon goods to another website to reflect price changes. It also provides access to website source code, including SSH links and keys for server access. Users can obtain the link of the website they want to link from, as well as the necessary areas to perform link operations',
    img: '/home/linking.png',
  },
  {
    title: 'Filter',
    text: 'The platform provides information about authors (books, projects, articles), topics/names/titles, and the ability to filter websites based on links, images, HTML only, JavaScript only, CSS only, or all elements',
    img: '/home/filter.png',
  },
]
const faq = [
  'How do you use the Ide feature ?',
  'How to create and subscribe to the pricing?',
  'How to start collaboration projects?',
  'How to start use IDE in-chat feature?',
]
// temp posts data
const posts = [
  {
    id: 1,
    name: 'Bob Willer',
    text: 'Can you make changes to a product which other developers have already started?',
    img: true,
  },
  {
    id: 2,
    name: 'Bob Willer',
    text: "🚀 Building the future, one line of code at a time! Excited to share the latest project I've been working on. Stay tuned for the unveiling! 💻✨ #DeveloperLife #CodeCrafting #InnovationInProgress",
    img: false,
  },
  {
    id: 3,
    name: 'Bob Willer',
    text: 'Can you make changes to a product which other developers have already started?',
    img: true,
  },
  {
    id: 4,
    name: 'Bob Willer',
    text: 'Can you make changes to a product which other developers have already started?',
    img: true,
  },
]

export { footerLinks, features, faq, posts }
