export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  // {
  //   title: "Auburn Vetmag",
  //   techs: ["WordPress"],
  //   link: "https://mag.auburnvetmed.com/",
  // },
  // {
  //   title: "Isbell Lawn Care",
  //   techs: ["11ty", "Spectacle Web Design"],
  //   link: "https://isbelllawncare.com/",
  // },
  // {
  //   title: "MPH Detailing",
  //   techs: ["11ty", "Spectacle Web Design"],
  //   link: "https://mphdetailing.com/",
  // },
  {
    title: "Spectacle Web Design",
    techs: ["11ty", "Spectacle Web Design"],
    link: "https://spectaclewebdesign.com/",
  },
  // {
  //   title: "John Ed Mathison",
  //   techs: ["WordPress"],
  //   link: "https://johnedmathison.org",
  // },
  // {
  //   title: "ScottHunts.com",
  //   techs: ["WordPress", "Community Building"],
  //   link: "/",
  //   isComingSoon: true
  // },
  {
    title: "Spectacle Software Rebrand",
    techs: ["Astro", "Vue"],
    link: "/",
    isComingSoon: true
  },
  {
    title: "... and so many others not publicly available",
    techs: ["C#", "Azure", "Blazor", "PowerShell", "..."],
    link: "/",
    isComingSoon: true
  },
];

export default projects;
