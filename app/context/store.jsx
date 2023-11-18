"use client";
const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      isLargeScreen: false,
      isClient: false,
      windowWidth: 0,
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
          bullet: "January 1st",
          bullet2: "Austin, TX",
          description:
            "We are dedicated to nurturing a deeper appreciation for 8mm and 16mm filmmaking. Our analog film workshops offer hands-on experience shooting and editing analog film using our Bolex Reflex cameras and analog editing equipment. Our development sessions introduce participants to natural processing methods using nnon-toxic household items.",
          instruction:
            "Our next cohort begins January 1st. E-mail info@ccearts.org for more information",
        },
        {
          title: "Workshop",
          subtitle: "Legal challenges in documentary filmmaking",
          year: "2023",
          image: "/img/mwmc.png",
          category: "staff",
          bullet1: "Livestream",
          bullet2: "February 1st",
          bullet: "Legal challenges in documentary filmmaking",
          description:
            "Documentary filmmaking can pose many legal challenges that are best to think about early in your project. This workshop will help you navigate some of the most common legal issues from fundraising through production and distribution of your film.  There will also be a Q&A at the end where you can come with your own questions..",
          instruction: "The next workshop is January 15th.",
          instruction2: "E-mail info@ccearts.org to be included.",
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
