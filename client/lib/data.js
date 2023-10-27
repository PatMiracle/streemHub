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

const searchResults = [
  {
    id: 1,
    name: 'Name of Book',
    author: 'Author',
  },
  {
    id: 2,
    name: 'Name of Book',
    author: 'Author',
  },
  {
    id: 3,
    name: 'Name of Book',
    author: 'Author',
  },
  {
    id: 4,
    name: 'Name of Book',
    author: 'Author',
  },
  {
    id: 5,
    name: 'Name of Book',
    author: 'Author',
  },
  {
    id: 6,
    name: 'Name of Book',
    author: 'Author',
  },
]

const tags = [
  'books',
  'projects',
  'research works',
  'articles',
  'codes',
  'links',
]

import { FaMicrophone } from 'react-icons/fa'
import { Camera, VideoCircle, MessageQuestion, Image } from 'iconsax-react'
const iconsInputs = [
  {
    id: 1,
    icon: <Camera size={30} />,
    idName: 'camera',
    fileType: 'image/*',
  },
  {
    id: 2,
    icon: <VideoCircle size={30} />,
    idName: 'video',
    fileType: 'video/*',
  },
  {
    id: 3,
    icon: <MessageQuestion size={30} />,
    idName: 'message',
    fileType: 'text/*',
  },
  {
    id: 4,
    icon: <FaMicrophone size={30} />,
    idName: 'audio',
    fileType: 'audio/*',
  },
  {
    id: 5,
    // eslint-disable-next-line jsx-a11y/alt-text
    icon: <Image size={30} />,
    idName: 'image',
    fileType: 'image/*',
  },
]
export { posts, notifs, messages, searchResults, tags, iconsInputs }
