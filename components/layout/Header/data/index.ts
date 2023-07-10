import { BookOpenIcon, BriefcaseIcon, CodeBracketIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";

export const menuItems: Array<{ url: string, icon: typeof CodeBracketIcon, name: string }> = [
    { name: 'Projects', url: '#projects', icon:CodeBracketIcon},
    { name: 'Work Experince', url: '#workexperince', icon: BriefcaseIcon  },
    { name: 'Skills', url: '#skills',icon:WrenchScrewdriverIcon },
    { name: 'Education', url: '#education', icon:BookOpenIcon },
]