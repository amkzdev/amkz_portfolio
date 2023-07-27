import { WorkExperinceType } from "@/types";
import logo from 'assets/logos/white.png'
import botLogo from 'assets/images/bot/logo.jpg'

import charmingLogo from 'assets/images/work experince/charming/logo.jpg'
import maktabLogo from 'assets/images/work experince/maktab/logo.jpg'

export const workExperiences: WorkExperinceType[] = [

    {
        date: 'Aug 2022 - Now',
        industry: 'Web Developement',
        logo: logo,
        name: 'Freelance Fullstack Developer',
        stack: 'Full Stack',
        description: [
            'Develop Many Projects Around The World '
            , 'Corporate With Top Companies'
            , 'Use New Technologies To Design & Impelement Enterprise Project  ']
    },
    {
        date: 'Oct 2021 - Mar 2023',
        industry: 'Stock & Financial Services',
        logo: botLogo,
        name: 'Tadbir Pardaz It Group',
        stack: 'Front End',
        description: [
            'Developed high-performance ReactJs (client-side) Trading Application for more than 40 brokerages in Stock Exchange.',
            'Maintain existing React JS Application systems, including fixing bugs, add feature,etc.',
            'Designed and Developed charts and indicators for trading applications',
            'Collaborated with other team members to ensure that features meet business needs.',
            'Implemented and Refactored application with an new exclusive designed component set that reduces bundle size by up to 40%.',
            'Managing Javascript dependencies and module bundlers .',
            'Executed necessary documentation, as directed, or needed.',
        ],
        link: 'https://etadbir.com/'
    },

    {
        date: 'Aug 2021 - Jan 2022',
        industry: 'Travel Arrangements',
        logo: charmingLogo,
        name: 'Maqin (QuYiLang)',
        stack: 'Front End',
        description: [
            'Developed and maintained a multi-language React.js application.',
            'Worked collaboratively with a team to ensure efficient and effective project completion',
            'Utilized JavaScript to implement various features and functionality within the application',
            'Successfully worked in a remote, international environment to meet project goals and deadlines',
            'Demonstrated strong problem-solving skills to overcome technical challenges and optimize application performance.'
        ],
        link: 'https://www.linkedin.com/company/quyilang/'
    },

    {
        date: 'Jan 2021 - Jul 2021',
        industry: 'E-Learning Providers',
        logo: maktabLogo,
        name: 'Maktab Sharif',
        stack: 'Front End',
        description: [
            'Fundamentals of front-end web development. such as HTML, DOM, JavaScript',
            'React library for building user interfaces',
            'Creating responsive and mobile-friendly websites',
            'Using Rest APIs to fetch and display data',
            'State management with Context & Redux',
            'Debugging and testing techniques',
            'Best practices for code organization.',
            'Collaborating with other developers using version control systems (git)'
        ],
        link: 'http://maktabsharif.ir/'
    }

]