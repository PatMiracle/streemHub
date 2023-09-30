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
const notifs = [
  { notif: 'Leo net like your post ' },
  {
    notif: 'Moses commented on your post ',
    info: "AI, like automation, doesn't eliminate people. It simply changes the nature of our jobs. It makes new jobs possible.",
  },
  {
    notif: 'Moses commented on your post',
    info: "AI, like automation, doesn't eliminate people. It simply changes the nature of our jobs. It makes new jobs possible.",
  },
  {
    notif: 'Moses commented on your post',
    info: "AI, like automation, doesn't eliminate people. It simply changes the nature of our jobs. It makes new jobs possible.",
  },
  {
    notif: 'Moses commented on your post',
    info: "AI, like automation, doesn't eliminate people. It simply changes the nature of our jobs. It makes new jobs possible.",
  },
]
const messages = [
  {
    name: 'Leo.Net',
    text: 'Can you show me the code you used in making the video alignment in the application we are working on ',
    time: '6:19am',
  },
  {
    name: 'Aya Mason',
    text: 'What programming language can i use to create a text animation for my website ',
    time: '6:19am',
  },
  {
    name: 'Aya Mason',
    text: 'What programming language can i use to create a text animation for my website ',
    time: '6:19am',
  },
  {
    name: 'Leo.Net',
    text: 'Can you show me the code you used in making the video alignment in the application we are working on ',
    time: '6:19am',
  },
  {
    name: 'Aya Mason',
    text: 'What programming language can i use to create a text animation for my website ',
    time: '6:19am',
  },
  {
    name: 'Leo.Net',
    text: 'Can you show me the code you used in making the video alignment in the application we are working on ',
    time: '6:19am',
  },
  {
    name: 'Aya Mason',
    text: 'What programming language can i use to create a text animation for my website ',
    time: '6:19am',
  },
]

import searchImg1 from '/public/images/search/search-img.png'
import searchImg2 from '/public/images/search/search-img.png'
import searchImg3 from '/public/images/search/search-img.png'
import searchImg4 from '/public/images/search/search-img.png'
import searchImg5 from '/public/images/search/search-img.png'
import searchImg6 from '/public/images/search/search-img.png'

const searchResults = [
  {
    id: 1,
    searchImg: searchImg1,
    name: 'Name of Book',
    author: 'Author'
  },
  {
    id: 2,
    searchImg: searchImg2,
    name: 'Name of Book',
    author: 'Author'
  },
  {
    id: 3,
    searchImg: searchImg3,
    name: 'Name of Book',
    author: 'Author'
  },
  {
    id: 4,
    searchImg: searchImg4,
    name: 'Name of Book',
    author: 'Author'
  },
  {
    id: 5,
    searchImg: searchImg5,
    name: 'Name of Book',
    author: 'Author'
  },
  {
    id: 6,
    searchImg: searchImg6,
    name: 'Name of Book',
    author: 'Author'
  }
]

const tags = [
  {
      id: 1,
      tagName: 'Books'
  },
  {
      id: 2,
      tagName: 'Projects'
  },
  {
      id: 3,
      tagName: 'Research works'
  },
  {
      id: 4,
      tagName: 'Articles'
  },
  {
      id: 5,
      tagName: 'Codes'
  },
  {
      id: 6,
      tagName: 'Links'
  }
]

export { faq, posts, notifs, messages, searchResults, tags }
