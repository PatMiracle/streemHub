import books from 'public/images/home/books.png'
import projects from 'public/images/home/projects.png'
import codes from 'public/images/home/codes.png'
import linking from 'public/images/home/linking.png'
import filter from 'public/images/home/filter.png'

const features = [
  {
    title: 'Books',
    text: 'Download books for an API like Google scholar, summarizing them using an AI algorithm, generating voice books or audios, and providing details and related books on author and titles ',
    img: books,
  },
  {
    title: 'Projects/articles/research work',
    text: 'This platform allows users to find related research/projects, access references/citations, collaborate on research, and upload their own projects for collaboration.',
    img: projects,
  },
  {
    title: 'Codes',
    text: 'We provide downloadable frontend code files, accompanied by step-by-step explanations of the code using GPT AI.',
    img: codes,
  },
  {
    title: 'Linking',
    text: 'The platform allows users to link specific details of one website to another, such as linking updated prices of Amazon goods to another website to reflect price changes. It also provides access to website source code, including SSH links and keys for server access. Users can obtain the link of the website they want to link from, as well as the necessary areas to perform link operations',
    img: linking,
  },
  {
    title: 'Filter',
    text: 'The platform provides information about authors (books, projects, articles), topics/names/titles, and the ability to filter websites based on links, images, HTML only, JavaScript only, CSS only, or all elements',
    img: filter,
  },
]

export const faq = [
  'How do you use the Ide feature ?',
  'How to create and subscribe to the pricing?',
  'How to start collaboration projects?',
  'How to start use IDE in-chat feature?',
]

export default features
