import { StaticImageData } from "next/image"

export interface WorkExperinceType {
    position: string | 'Frontend Developer',
    companyName: string,
    logo: any,
    start_date: string,
    end_date: string,
    duration: string,
    industry: string,
    companyOverview: string[],
    acheivements: string[],
    challanges?: string[],
    responsiblities?: string[]
}

export interface ProjectType {
    name: string,
    date: string,
    industry: string,
    stack: 'Front End' | 'Full Stack',
    logo: StaticImageData,
    techs: Array<{ name: string, image: StaticImageData }>,
    desktopShots?: Array<{ img: StaticImageData, description: string }>,
    mobileShots?: Array<{ img: StaticImageData, description: string }>,
    description?: string[],
    link?: string
}