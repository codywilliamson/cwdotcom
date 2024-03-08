type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "cody@spectaclewebdesign.com",
  title: "Hey, I'm Cody.",
  // profile: "/profile.webp",
  description:
    "I'm a *husband, father, and software engineer*, and a few more choice words. Here I'll showcase my work, experience, and pretend like I might keep up with the blogging thing. Currently, I work for *OneStream Software* in a *Cloud Developer* role during the day, and at night, I run *Spectacle Web Design*. Anything else?",
  socials: [
    {
      label: "Github",
      link: "https://github.com/codywilliamson",
    },
  ],
};

export default presentation;
