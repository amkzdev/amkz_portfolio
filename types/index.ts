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