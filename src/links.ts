import github from '../public/icons/github.svg'
import instagram from '../public/icons/instagram.svg'
import linkedin from '../public/icons/linkedin.svg'
import readcv from '../public/icons/read-cv.svg'
import x from '../public/icons/x.svg'
import code from '../public/icons/code.svg'
import leetcode from '../public/icons/leetcode.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

const websites = [
  'github',
  'instagram',
  'linkedin',
  'Resume',
  'x',
  'leetcode',
  'projects',
]

const LINKS: { [key in SocialMedia]: Link } = {
  projects: {
    title: 'Projects',
    icon: code,
    link: '/projects',
  },
  github: {
    title: 'Github',
    icon: github,
    link: 'https://github.com/JiteshKhurana',
    text: '@JiteshKhurana',
  },
  linkedin: {
    title: 'Linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/jitesh-khurana/',
    text: '@jitesh-khurana',
  },
  x: {
    title: 'X',
    icon: x,
    link: 'https://twitter.com/jiteshKhurana12',
    text: 'jiteshKhurana12',
  },
  instagram: {
    title: 'Instagram',
    icon: instagram,
    link: 'https://www.instagram.com/jiteshkhurana_/',
    text: '@jiteshkhurana_',
  },
  resume: {
    title: 'Resume',
    icon: readcv,
    link: 'https://drive.google.com/file/d/13HtvJ2NVljJSv0Kx_M7ljnMxhVDCMlsJ/view?usp=sharing',
    text: '@jiteshkhurana',
  },
  leetcode: {
    title: 'Leetcode',
    icon: leetcode,
    link: 'https://leetcode.com/u/Jiteshkhurana/',
    text: '@Jiteshkhurana',
  },
}

export default LINKS
