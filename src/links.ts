import github from '../public/icons/github.svg'
import linkedin from '../public/icons/linkedin.svg'
import readcv from '../public/icons/read-cv.svg'
import code from '../public/icons/code.svg'
import leetcode from '../public/icons/leetcode.svg'

type SocialMedia = (typeof websites)[number]

type Link = {
  title: string
  icon: any
  link: string
  text?: string
}

const websites = ['github', 'linkedin', 'Resume', 'leetcode', 'projects']

const LINKS: { [key in SocialMedia]: Link } = {
  leetcode: {
    title: 'Leetcode',
    icon: leetcode,
    link: 'https://leetcode.com/u/Jiteshkhurana/',
    text: '@Jiteshkhurana',
  },
  github: {
    title: 'Github',
    icon: github,
    link: 'https://github.com/JiteshKhurana',
    text: '@JiteshKhurana',
  },
  projects: {
    title: 'Projects',
    icon: code,
    link: '/projects',
  },
  linkedin: {
    title: 'Linkedin',
    icon: linkedin,
    link: 'https://www.linkedin.com/in/jitesh-khurana/',
    text: '@jitesh-khurana',
  },
  resume: {
    title: 'Resume',
    icon: readcv,
    link: 'https://drive.google.com/file/d/13HtvJ2NVljJSv0Kx_M7ljnMxhVDCMlsJ/view?usp=sharing',
    text: '@jiteshkhurana',
  },
}

export default LINKS
