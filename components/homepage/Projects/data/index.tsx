import { ProjectType } from "types";
import tanalandLogo from '@assets/images/projects/tanaland.png'

////Tanaland
import tanalandDesktop1 from 'assets/images/projects/tanaland/desktop (1).png'
import tanalandDesktop2 from 'assets/images/projects/tanaland/desktop (2).png'
import tanalandDesktop3 from 'assets/images/projects/tanaland/desktop (3).png'
import tanalandDesktop4 from 'assets/images/projects/tanaland/desktop (4).png'

import tanalandMobile1 from 'assets/images/projects/tanaland/mobile (1).png'
import tanalandMobile2 from 'assets/images/projects/tanaland/mobile (2).png'
import tanalandMobile3 from 'assets/images/projects/tanaland/mobile (3).png'
import tanalandMobile4 from 'assets/images/projects/tanaland/mobile (4).png'



import react from '@assets/images/techs/react.png'
import next from '@assets/images/techs/next.svg'
import ts from '@assets/images/techs/ts.png'
import js from '@assets/images/techs/js.png'
import tailwind from '@assets/images/techs/tailwind.png'
import mui from '@assets/images/techs/mui.png'

export const projects: ProjectType[] = [
    {
        date: '2023',
        industry: 'Ecommerce Marketplace',
        logo: tanalandLogo,
        name: 'Tanaland',
        stack: 'Front End',
        techs: [
            { name: 'Next 13', image: next },
            { name: 'React', image: react },
            { name: 'Typescript', image: ts },
            { name: 'JavaScript', image: js },
            { name: 'Tailwind', image: tailwind },
        ],
        description: [
            'Developed front-end projects in the e-commerce marketplace domain',
            'Implemented a responsive website using Next.js 13.4',
            'Created a seamless user experience across different devices and screen sizes',
            'Ensured easy navigation and interaction for users on desktop, tablet, and mobile devices',
            'Handled a large number of users simultaneously'
        ],
        desktopShots: [
            { description: 'tanaland-desktop-shot-1', img: tanalandDesktop1 },
            { description: 'tanaland-desktop-shot-2', img: tanalandDesktop2 },
            { description: 'tanaland-desktop-shot-3', img: tanalandDesktop3 },
            { description: 'tanaland-desktop-shot-4', img: tanalandDesktop4 },
        ],
        link: 'https://www.tanaland.com/',
        mobileShots: [
            { description: 'tanaland-mobile-shot-1', img: tanalandMobile1 },
            { description: 'tanaland-mobile-shot-2', img: tanalandMobile2 },
            { description: 'tanaland-mobile-shot-3', img: tanalandMobile3 },
            { description: 'tanaland-mobile-shot-4', img: tanalandMobile4 },

        ]
    }
]