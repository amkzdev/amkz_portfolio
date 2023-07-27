import { StaticImageData } from "next/image"

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


export interface WorkExperinceType {
    name: string,
    date: string,
    industry: string,
    stack: 'Front End' | 'Full Stack',
    logo: StaticImageData,
    techs?: Array<{ name: string, image: StaticImageData }>,
    desktopShots?: Array<{ img: StaticImageData, description: string }>,
    mobileShots?: Array<{ img: StaticImageData, description: string }>,
    description?: string[],
    link?: string
}