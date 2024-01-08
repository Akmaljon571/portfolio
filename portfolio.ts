import emoji from "react-easy-emoji";
import {
  EducationType,
  SkillsSectionType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "AkmaljonDev.",
  title: "Hi all, I'm AkmaljonDev",
  description: `I'm Full-Stack Engineer`,
  resumeLink: "/Rezumi.pdf",
};

export const openSource = {
  githubUserName: "Akmaljon571",
};

export const socialLinks: SocialLinksType = {
  url: "https://rezume2.netlify.app/",
  linkedin: "https://www.linkedin.com/in/akmal-ahmadjonov-a85792240/",
  github: "https://github.com/Akmaljon571",
  instagram: "https://www.instagram.com/akmalsher7771/",
  facebook: "https://www.facebook.com/profile.php?id=100091767003798",
  twitter: "https://twitter.com/Akmaljondev",
};

export const skillsSection: SkillsSectionType = {
  title: "Skills",
  subTitle: "MY ORGANIZATIONAL SKILLS AND EXPRESIENCES WITH THEM",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Sufficient Full Stack experience and completed practical projects"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji(
          "⚡ Experience building fast, reliable, and secure jobs very quickly with Node.js and reliably submitting projects with supporting libraries"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassName: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassName: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassName: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassName: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassName: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Python",
          fontAwesomeClassName: "logos:python",
        },
        {
          skillName: "Django",
          fontAwesomeClassName: "vscode-icons:file-type-django",
        },

        {
          skillName: "Redux",
          fontAwesomeClassName: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassName: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassName: "logos:yarn",
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Experience of working on multiple cloud platforms"),
        emoji(
          "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases"
        ),
        emoji(
          "⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions"
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: "AWS",
          fontAwesomeClassName: "logos:aws",
        },
        {
          skillName: "Azure",
          fontAwesomeClassName: "logos:microsoft-azure",
        },
        {
          skillName: "Heroku",
          fontAwesomeClassName: "logos:heroku-icon",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassName: "logos:postgresql",
        },
        {
          skillName: "Github",
          fontAwesomeClassName: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          fontAwesomeClassName: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassName: "logos:github-actions",
        },
        {
          skillName: "Cloudinary",
          fontAwesomeClassName: "logos:cloudinary",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassName: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassName: "logos:sentry-icon",
        },
      ],
    },
  ],
};

export const educationInfo: EducationType[] = [
  {
    schoolName: "2-KHM",
    subHeader: "Hardware and Software configuration",
    duration: "January 2020 - March 2022",
    desc: "Class Captain",
    grade: "Grade 5",
    descBullets: [],
  },
  {
    schoolName: "Najot ta'lim",
    subHeader: "Full Stack developer",
    duration: "January 2021 - March 2022",
    desc: "team captain in teamwork",
    grade: "Grade A",
    descBullets: [],
  },
];
