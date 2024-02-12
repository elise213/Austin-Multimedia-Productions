"use client";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isLargeScreen: false,
      isClient: false,
      windowWidth: 0,
      fiscalFilms: [
        {
          title: "All That's Left Of You",
          type: "Fiction Feature",
          status: "Pre-Production",
          director: "Cherien Dabis",
          producer: "Thanassis Karathanos",
          execProducer: "Karim Amer",
          image: "/img/all-thats-left-of-you.jpeg",
          directorBio:
            "Cherien Dabis is a critically acclaimed Palestinian American filmmaker and Emmy nominated television director. She is best known for her critically acclaimed independent feature films AMREEKA (2009) and MAY IN THE SUMMER (2013), which premiered at the Sundance, Cannes and Venice film festivals and won dozens of international awards. AMREEKA was nominated for three Independent Spirit Awards, including Best Picture, and broke records in its theatrical release by becoming the most-screened Arab-directed film in US-cinema history. Dabis is highly sought after in television for her standout episodic directing work on Emmy and Golden Globe-winning shows like ONLY MURDERS IN THE BUILDING (Hulu), RAMY (Hulu) and OZARK (Netflix)",
          producerBio:
            "Thanassis Karathanos studied political sciences and economics in Athens and Berlin. In 1998 he founded the film production company TWENTY TWENTY VISION in Berlin and in 2003 the production company PALLAS FILM in Halle (Saale). He has produced dozens of international films that have been celebrated at top tier film festivals and enjoy theatrical success worldwide. Recent credits include Cannes official selection MEDITERRANEAN FEVER (2022), THE GRAVEDIGGER’S WIFE (2021), academy award nominated THE MAN WHO SOLD HIS SKIN (2020) and Cannes competition title IT MUST BE HEAVEN (2019). He is a member of the European and German Film Academy.",
          execProducerBio:
            "Karim Amer is an Academy Award-nominated filmmaker. His most recent film DEFIANT (2023) premiered at the Toronto Film Festival. THE GREAT HACK (2019), which he directed and produced, premiered at the Sundance Film Festival, was BAFTA and Emmy-nominated, and won a Cinema Eye Award. He also directed and produced HBO’s THE VOW (2020), a series about the self-improvement group NXIVM.  He has also produced Emmy-winning and Oscar-nominated THE SQUARE (2013), Audience Award-winner at the Sundance Film Festival and the Toronto Film Festival. He has produced the Golden Globe-winning series RAMY (2019) and teamed up with Angelina Jolie to produce Academy Award-nominated THE BREADWINNER (2017). Karim is a member of the Academy of Motion Picture Arts and Sciences.",
          logline:
            "In the moments before a Palestinian teen is confronted by Israeli soldiers at a protest in the West Bank, his mother recounts the series of events that led him to that fateful moment, starting with his grandfather’s displacement from Jaffa in 1948. All That’s Left of You is an epic historical drama chronicling the story of one family over three generations and examining the passage of trauma to each.",
          synopsis:
            "The year is 1948. Hundreds of thousands of Palestinians have been forced to flee their homes. But Palestinian citrus farmer SHARIF refuses to go anywhere. Instead, he sends his family to safety and stays behind to protect their multigenerational land. Soon after, the city falls, and Sharif is captured. Months go by, and his family fears the worst. Even his youngest son SALIM, who’s desperate to hold out hope, starts to mourn. A year later, they’ve given up on ever seeing Sharif again. That’s when Sharif unexpectedly turns up on their doorstep. A shadow of the man he used to be, he can barely hold himself upright. Salim can’t help but feel that he’s lost his father for good. Decades later, Sharif is still haunted by how quickly his life, his entire society was erased. He obsesses over what he could’ve done to change his family’s fate. His son SALIM now has a family of his own, and they’ve managed to build their lives in a dilapidated refugee camp in the occupied West Bank. One day, Salim is rushing his young son NOOR home at the onset of an unexpected curfew. But they’re caught by a group of Israeli soldiers. In a troubling encounter, Noor is forced to see that his own father can’t protect him. In that instant, his perspective shifts, and the man who was once his hero is deemed a coward.  Nearly a decade later, the West Bank is ablaze with resistance. NOOR, now a rebellious teen, fearlessly confronts Israeli soldiers at a protest that descends into chaos. He’s injured and taken to a hospital. As doctors set out to save their son, Salim and Hanan manage to find a glimmer of hope to help them make meaning of all the pain they’ve had to carry.",
        },
      ],
      content: [
        {
          title: "Apocalypse Now",
          year: "1979",
          image: "/img/apocalypse-now-1979.jpeg",
          category: "suspense",
          category2: "new",
          trailer: "https://youtu.be/9l-ViOOFH-s",
          description: "this is the description",
        },
      ],
      movies: [
        {
          title: "DIY 16mm Filmmaking",
          year: "2023",
          image: "/img/bolex2.jpg",
          category: "new",
          bullet: "April 1st",
          bullet2: "Austin, TX",
          description:
            "This workshop offers hands-on experience shooting with a 16mm or 8mm Bolex Reflex camera, processing film using non-toxic household items, and editing by hand using analog equipment",
          instruction: "",
          instruction2:
            "E-mail info@ccearts.org to be included in the next cohort.",
        },
        {
          title: "Legal challenges in documentary filmmaking",
          year: "2023",
          image: "/img/mwmc.png",
          category: "staff",
          bullet1: "Livestream",
          bullet2: "May 1st",
          description:
            "This workshop will help you navigate some of the most common legal issues in documentary filmmaking, including fundraising, production and distribution.  Come with questions.",
          instruction: "",
          instruction2:
            "E-mail info@ccearts.org to be included in the next workshop.",
        },
        // {
        //   title: "Begotten",
        //   year: "1989",
        //   Runtime: "1h 18m",
        //   Director: "E. Elias Merhige",
        //   image: "/img/begotten2.png",
        //   category: "horror",
        //   bullet: "October 30th in Austin TX",
        //   description:
        //     "Begotten (1989) is a disturbing vision of sacrifice, death, and rebirth that borders on the unwatchable. The story behind its creation — and its creator — is one that descends deep into the occult, alternate realities, and how art is a ritualized ceremony of catharsis... Begotten’s unflinching eye records death and rebirth in gut-wrenching clarity...It’s a spiritual purge of the toxins of human existence. Begotten has to be seen to be believed, although the stark, bleached-out white and inky black contrast at times makes it impossible to discern what’s haunting your screen. It’s like the art of Franz Kline and Francis Bacon brought into horrific, pulsating life. -- Marc Paterson, Certified Forgotten",
        //   instruction: "October 30 at 7:30pm",
        //   instruction2:
        //     "If you're squeamish you should avoid this like the plague; others may find it hard to shake off the artistry and originality of this visionary effort. And if you're looking to be freaked out you shouldn't pass it up. -- Jonathan Rosenbaum",
        // },
        // {
        //   title: "The Texas Chain Saw Massacre",
        //   year: "1974",
        //   image: "/img/the-texas-chain-saw-massacre-1974.jpeg",
        //   category: "suspense",
        //   category2: "staff",
        //   category2: "newtofree",
        // },
        // {
        //   title: "The Elephant Man",
        //   year: "1980",
        //   image: "/img/the-elephant-man-1980.jpeg",
        //   category: "staff",
        //   category2: "newtofree",
        //   bullet: "October 30th in Austin TX",
        //   trailer: "https://youtu.be/kxb_1457gGs?si=-ylCQ4iHSAS8FP_g",
        //   description:
        //     "The film is different from the stage play of the same name, in which David Bowie played Merrick in 1980-81, as did Bradley Cooper in the recent London revival with a voice clearly inspired by Hurt. The play suggests a daring sexual tension in Kendal’s interest in Merrick, whereas the film imagines extended episodes in which a corrupt hospital porter (played by Michael Elphick) is being paid by pub drinkers to let them come and gawp at the terrified patient. At the time, I remember thinking that Treves’ rescuing of Merrick was like Nicholas Nickleby stepping in to prevent Smike being beaten in the legendary Royal Shakespeare Company stage adaptation in 1979. Lynch’s film was celebrated and spoofed in its time, not least in Richard Curtis’s comedy The Tall Guy, the plot of which featured a gobsmackingly tasteless musical version of The Elephant Man in which Jeff Goldblum took the lead. (Once you realise Lynch’s movie was produced by Mel Brooks, you can’t help thinking about his Young Frankenstein.) Nowadays, the context for its representation of disability has changed and the actor Adam Pearson, who has a similar condition to Merrick’s, has condemned the practice of “cripping up”. It has to be said that Lynch’s Elephant Man, while not exactly sentimental, takes a determinedly un-alienated attitude to Merrick’s image: rational, compassionate and very different from his approach to what might be called body-nonconformity in Eraserhead in which the keynote is clearly one of horror. There is far more empathy in The Elephant Man... (Peter Bradshaw)",
        //   instruction: "October 30 at 7:30pm",
        // },
        // {
        //   title: "The Evil Dead",
        //   year: "1981",
        //   image: "/img/the-evil-dead-1981.jpeg",
        //   category: "new2",
        //   category2: "new1",
        //   bullet: "1",
        //   bullet2: "2",
        //   bullet3: "3",
        //   trailer:
        //     "https://www.youtube.com/watch?v=0cQmKgV0cug&ab_channel=ParkCircus",
        //   description:
        //     "Whether we write or speak or do but look We are ever unapparent. What we are Cannot be transfused into word or book. Our soul from us is infinitely far. However much we give our thoughts the will To be our soul and gesture it abroad, Our hearts are incommunicable still. In what we show ourselves we are ignored. The abyss from soul to soul cannot be bridged By any skill of thought or trick of seeming. Unto our very selves we are abridged When we would utter to our thought our being. We are our dreams of ourselves, souls by gleams, And each to each other dreams of others' dreams.",
        // },
        // {
        //   title: "Being There",
        //   year: "1979",
        //   image: "/img/being-there-1979.jpeg",
        //   category: "comedy",
        //   category2: "staff",
        // },
        // {
        //   title: "Carrie",
        //   year: "1976",
        //   image: "/img/carrie-1976.jpeg",
        //   category: "horror",
        //   category2: "staff",
        //   category2: "new",
        // },
        // {
        //   title: "Chinatown",
        //   year: "1974",
        //   image: "/img/chinatown-1974.jpeg",
        //   category: "drama",
        //   category2: "new",
        // },
        // {
        //   title: "Close Encounters of the Third Kind",
        //   year: "1977",
        //   image: "/img/close-encounters-of-the-third-kind-1977.jpeg",
        //   category: "drama",
        //   category2: "new",
        // },
        // {
        //   title: "Coffy",
        //   year: "1973",
        //   image: "/img/coffy-1973.jpeg",
        //   category: "drama",
        //   category2: "newtofree",
        // },
        // {
        //   title: "Deliverance",
        //   year: "1972",
        //   image: "/img/deliverance-1972.jpeg",
        //   category: "drama",
        //   category2: "new",
        // },
        // {
        //   title: "Enter the Dragon",
        //   year: "1973",
        //   image: "/img/enter-the-dragon-1973.jpeg",
        //   category: "drama",
        //   category2: "newtofree",
        // },
        // {
        //   title: "Frenzy",
        //   year: "1972",
        //   image: "/img/frenzy-1972.jpeg",
        //   category: "drama",
        //   category2: "new",
        // },
        // {
        //   title: "Moonraker",
        //   year: "1979",
        //   image: "/img/moonraker-1979.jpeg",
        //   category: "drama",
        //   category2: "newtofree",
        // },
        // {
        //   title: "Network",
        //   year: "1976",
        //   image: "/img/network-1976.jpeg",
        //   category: "drama",
        //   category2: "staff",
        //   category2: "new",
        // },

        // {
        //   title: "The French Connection",
        //   year: "1971",
        //   image: "/img/the-french-connection-1971.jpeg",
        //   category: "suspense",
        //   category2: "staff",
        // },
        // {
        //   title: "The Long Goodbye",
        //   year: "1973",
        //   image: "/img/the-long-goodbye-1973.jpeg",
        //   category: "drama",
        //   category2: "newtofree",
        // },
        // {
        //   title: "The Outlaw Josey Wales",
        //   year: "1976",
        //   image: "/img/the-outlaw-josey-wales-1976.jpeg",
        //   category: "drama",
        //   category2: "new",
        // },
      ],
    },
    actions: {
      initializeScreenSize: () => {
        setStore({
          isLargeScreen: window.innerWidth > 1000,
          isClient: true,
          windowWidth: window.innerWidth,
        });
      },

      updateScreenSize: () => {
        setStore({
          isLargeScreen: window.innerWidth > 1000,
          windowWidth: window.innerWidth,
        });
      },
    },
  };
};

export default getState;
