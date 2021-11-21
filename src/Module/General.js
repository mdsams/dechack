// // Importing all sponsors logos from Assets
// import taskade from "./Assets/sponsorsLogos/taskade.png";
// import Replit from "./Assets/sponsorsLogos/replit.png";
// import interviewC from "./Assets/sponsorsLogos/interview-cake.jpg";
// import echoAR from "./Assets/sponsorsLogos/echoAR.png";
// import cfc from "./Assets/sponsorsLogos/cfc.png";
// import pass from "./Assets/sponsorsLogos/1pass.png";
// import glimpse from "./Assets/sponsorsLogos/glimpse.png";
// import qoom from "./Assets/sponsorsLogos/qoom.svg";
// import sublime from "./Assets/sponsorsLogos/sublime.png";
// import egg from "./Assets/sponsorsLogos/egg.png";
// import ll from "./Assets/sponsorsLogos/ll.png";
// import ACF from "./Assets/sponsorsLogos/ACF.png";
import dummyLogo from '../components/logo-section/dummyLogo.png'

/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets
import me from "./Assets/teami/me.png";
import moon from "./Assets/teami/moon.png";
import Ryah from "./Assets/teami/Ryah.jpg";
import lyin from "./Assets/teami/lyin.jpg";
import zoha from "./Assets/teami/zoha.png";

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */

import boy from "./Assets/boy.png";

const TOP_SECTION = {
  TITLE: "Join DecHacks",
  Typed_effect: ["4 days of creation", "Win awesome prizes"],
  SHORT_DESCRIPTION:
    "Join us from 17th Dec to 20th Dec with over 300 students from across the nation for 4 days of creation, innovation, & fun.",
  IMG_SRC: boy,
  DISCORD_LINK: "https://discord.com/invite/c5fEPAsjcg",
  JUDGES_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNVRQMUg4VllMRURDN1lON0haNFVCQUgySC4u",
  HACKERS_REGISTRATION_FORM_LINK:
    "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNTgyREk0VzdEMU9RVFlPMVNWVEJQUkNYMi4u"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/gdscsnukolkata",
  discord: "https://discord.com/invite/c5fEPAsjcg",
  linkedin: "https://www.linkedin.com/company/gdsc-snu/",
  twitter: "https://twitter.com/gdscsnu",
  devpost: "https://#", //do we have? 
  email: "google.dsc@snuniv.ac.in",            // whose mail to provide?
  mail: "google.dsc@snuniv.ac.in"
};

const MIDDLE_SECTION = {
  TITLE: "What is DecHacks?",
  LONG_DESCRIPTION:
    "DecHack is a hackathon organised by GDSC SNU in December, to encourage students put their skills in social good. We welcome brilliant engineers, designers, entreprenurs and out of the box thinkers around the campus. Compete for prizes while you make earth a better place to live",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/** ICON
 *
 * icons are from fontawesome visit = https://fontawesome.com
 * and just copy paste icon links and update icon in Prizeinfo
 *
 * INSTRUCTIONS
 *
 * Insert only 3 or less then 3 prizes per array in `Prizeinfo`, you can
 * create as many arrays you want all prizes will be rendered
 * in a group of 3.
 */

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: "overall First",
      content:
        "First Overall prize will be given to a project that outstands all other submissions"
    },
    {
      icon: <i class=" second fas fa-4x fa-medal"></i>,
      type: "overall Second",
      content:
        "Second Overall prize will be given to the second best project of the hackathon"
    },
    {
      icon: <i class=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Third Second",
      content:
        "Best third overall project of the hackathon will win some awesome prizes"
    }
  ],
  [
    //Array 2
    {
      icon: <i class="fab fourth fa-3x fa-wpbeginner"></i>,
      type: "Best Solo",
      content:
        "You project will qualify for this prize if you participate alone without a team though we encourage you to participate with a team"
    },
    {
      icon: <i class="first fas fa-4x fa-trophy"></i>,
      type: " Best Beginner",
      content: "Your project will qualify for this category if atleast 50% "
    },
    {
      icon: <i class=" fifth fa-3x fas fa-book-open"></i>,
      type: "Best UI/UX",
      content: "Project with most creative designs will be UI/UX track"
    }
  ],
  [
    //Array 3
    {
      icon: <i class="fas fa-4x sixth fa-male"></i>,
      type: "Best Web App with Qoom",
      content: "Must use qoom in your project to win this category"
    },
    {
      icon: <i class="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ]
];

/** Instructions
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */

const TeamInfo = [
  [
    //Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata/",
      img: me
    },
    {
      Name: "Moon",
      role: "Organizer",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata/",
      img: moon
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata/",
      img: Ryah
    }
  ],
  [
    //Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata/",
      img: lyin
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "https://github.com/suchetamahata",
      linkedin: "https://www.linkedin.com/in/sucheta-mahata/",
      img: zoha
    },    
  ] 
];

/** Instructions
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src:  dummyLogo}, {src:  dummyLogo}, {src:  dummyLogo}], //Array 1
  [{src:  dummyLogo}, {src:  dummyLogo}], //Array 2
  [{src:  dummyLogo}, {src:  dummyLogo}, {src:  dummyLogo}], //Array 3
  // [{src:  dummyLogo}, {src:  dummyLogo}, {src:  dummyLogo}] //Array 4
];

/** Instructions
 * Follow the strcuture provided below to add as many as FAQ's you want
 */
const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'      },
      {
        label: "Who can attend?",
        content: "Dec Hacks is open to all undergraduate, high school students and middle school students from all schools."
      },
      {
        label: "I am a first time hacker, what should I do?",
        content: "No worries, we love to welcome first time hackers and start their hacking journey from a hackathon. We have some awesome workshops and events which will help you get started with hackathon and hacking in general."
      },
      {
        label: "How team formation works?",
        content: "You can form team with 4 members in it at maximum. If you don't have a team, there'll be plenty of opportunities for you to meet hackers and form a team!"
      }
    ],
    [
      {
        label: "How to register myself in the hackathon?",
        content: "All you need is to fill our form above and join Discord, we will guide you through everything there"
      },
      {
        label: "I have more questions?",
        content: "Reach us directly at (google.dsc@snuniv.ac.in) we would happy to help you."
      }
      ,
      {
        label: "Can i volunteer?",
        content: "Yes we are actively looking for volunteers, fill the form (in footer section) we will be glad to have you."
      }
      ,
      {
        label: "Will there be swag?",
        content: "Yes! Participants will recieveing Dec Hacks swag!."
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  TeamInfo,
  frequentlyAskedQuestions
};
