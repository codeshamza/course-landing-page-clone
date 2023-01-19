import {
  AmazonePmsBg,
  Behavioral,
  Collaboration,
  Execution,
  ExplainersBg,
  ImprovementQestBg,
  NetflixBg,
  Product,
  ProductDesingBg,
  ProductPricingBg,
  Strategy,
  StrategyQstBg,
  Technichal,
  TechOverviewBg,
} from "./assets";

export const coursesData = [
  {
    bigTitle: "braecking The Script",
    img: `${Collaboration}`,
    videoNumber: "8",
    time: "38 min",
    subData: [
      {
        heading: "Introduction to Breaking the Script",
        img: `${TechOverviewBg}`,
        time: "3:03",
        free: true,
        first: true,
        hasDropdown: false,
        content1: [
          {
            title: "Intrigue at first sight",
            time: "3:14",
          },
          {
            title: "Jolt out of autopilot",
            time: "5:03",
          },
          {
            title: "Transmute the question",
            time: "6:37",
          },
          {
            title: "Ditch the talking head",
            time: "4:24",
          },
          {
            title: "Moonshots to Mars-shots",
            time: "5:59",
          },
          {
            title: "Pitch your own idea",
            time: "5:30",
          },
          {
            title: "Hit an emotional high note",
            time: "4:36",
          },
        ],
      },
    ],
  },
  {
    bigTitle: "Excution questions",
    img: `${Execution}`,
    videoNumber: "13",
    time: "2.7 hrs",
    subData: [
      {
        heading: "Overview of Execution questions",
        img: "",
        time: "5:33",
        free: false,
        hasDropdown: true,
        content2: [
          {
            title: "Metrics",
            videoNumber: "5",
            subContent: [
              {
                subtitle: "How to flawlessly answer Metrics questions",
                time: "13:16",
                free: false,
              },
              {
                subtitle:
                  "What metrics would you track if you were focused on improving Airbnb check-in experience?",
                time: "21:14",
                free: false,
              },
              {
                subtitle:
                  "Imagine you were the PM on Uber driver app. What key metrics would you be looking at?",
                time: "11:35",
                free: false,
              },
              {
                subtitle:
                  "Build an ML model to predict granola bar sales in a given Walmart store. Your model can only take in 10 variables.",
                time: "12:53",
                free: false,
              },
              {
                subtitle:
                  "How would you measure the success of Facebook Dating?",
                time: "17:03",
                free: false,
              },
            ],
          },
          {
            title: "Analytical",
            videoNumber: "4",
            subContent: [
              {
                subtitle: "How to flawlessly answer Analytical questions",
                time: "9:15",
                free: false,
              },
              {
                subtitle:
                  "Imagine if Microsoft Teams saw a 50% drop in new downloads. How do you figure out what happened?",
                time: "9:24",
                free: false,
              },
              {
                subtitle:
                  " A Snapchat app redesign increases time spent but reduces Snaps sent stories shared. Should you ship it?",
                time: "10:25",
                free: false,
              },
            ],
          },
          {
            title: "Crisis Response",
            videoNumber: "3",
            subContent: [
              {
                subtitle: "How to flawlessly answer Crisis Response questions",
                time: "13:17",
                free: false,
              },
              {
                subtitle:
                  "Suppose youre Marriott CEO and found that a hack just exposed the data of 5 million guests. What would you do?",
                time: "14:44",
                free: false,
              },
              {
                subtitle:
                  "You promised Best Buy that you launch the latest version of GooglePixel Buds in September, but the engineering team says itbe ready until December. What do you do?",
                time: "14:01",
                free: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    bigTitle: "Product Questions",
    img: `${Product}`,
    videoNumber: "26",
    time: "6.2 hrs",
    subData: [
      {
        heading: "Overview of Product Questions",
        img: "",
        time: "4.07",
        free: false,
        hasDropdown: true,
        content2: [
          {
            title: "Product Design",
            videoNumber: "6",
            subContent: [
              {
                subtitle: "How to flawlessly answer Product Design questions",
                time: "13:12",
                free: false,
              },
              {
                subtitle:
                  "Should TikTok build a video scrubber to allow users to skip to certain time stamps?",
                time: "17:24",
                free: false,
              },
              {
                subtitle:
                  "Imagine you are the PM in charge of building a podcast product on Facebook. What would you build?",
                time: "2:01",
                free: false,
              },
              {
                subtitle: "Design the web user experience for Lyft.",
                time: "24:57",
                img: `${ProductDesingBg}`,
                free: true,
              },
              {
                subtitle:
                  "Design a better way to find a roommate in a new city.",
                time: "20:53",
                free: false,
              },
              {
                subtitle: "Design Twitter for the blind.",
                time: "24:23",
                free: false,
              },
            ],
          },
          {
            title: "Product Improvement",
            videoNumber: "8",
            subContent: [
              {
                subtitle:
                  "How to flawlessly answer Product Improvement questions",
                time: "4:23",
                free: false,
              },
              {
                subtitle:
                  "Pick your favorite product. How would you improve it? (Google PM's response)",
                time: "17:53",
                free: false,
              },
              {
                subtitle:
                  "Pick your favorite product. How would you improve it? (Pinterest PM's response)",
                time: "15:49",
                free: false,
              },
              {
                subtitle:
                  "You work at Netflix and find that many videos are freezing in the middle to buffer. How would you improve this experience?",
                time: "15:45",
                free: false,
              },
              {
                subtitle: "What social features would you add to Spotify?",
                time: "24:27",
                free: false,
              },
              {
                subtitle: "Improve high-occupancy-vehicle (HOV) lanes.",
                time: "21:05",
                free: false,
              },
              {
                subtitle: "Tell me about your favorite non-tech product.",
                time: "9:25",
                free: false,
              },
              {
                subtitle: "Give me an example of a badly-designed product.",
                img: `${ImprovementQestBg}`,
                time: "9:26",
                free: true,
              },
            ],
          },
          {
            title: "Product Launch",
            videoNumber: "2",
            subContent: [
              {
                subtitle: "How to flawlessly answer Product Launch questions",
                time: "6:07",
                free: false,
              },
              {
                subtitle:
                  "How would you decide which country to next launch Amazon Prime 1- or 2-day shipping in?",
                time: "14:35",
                free: false,
              },
            ],
          },
          {
            title: "Product Growth",
            videoNumber: "5",
            subContent: [
              {
                subtitle: "How to flawlessly answer Product Growth questions",
                time: "4:25",
                free: false,
              },
              {
                subtitle:
                  "Twitter wants to find more ways to monetize without adding more ads. What do you suggest?",
                time: "18:52",
                free: false,
              },
              {
                subtitle:
                  "How would you use $30 million to design a referral program for Lyft to drive 1 million new signups?",
                time: "8:25",
                free: false,
              },

              {
                subtitle:
                  "OfferUp, a peer-to-peer local marketplace startup, wants to attract more sellers. What should it do?",
                time: "14:00",
                free: false,
              },
            ],
          },
          {
            title: "Product Pricing",
            videoNumber: "4",
            subContent: [
              {
                subtitle: "How to flawlessly answer Product Pricing questions",
                time: "5:53",
                free: false,
              },
              {
                subtitle: "Should Spotify increase its monthly price by $2?",
                time: "14:19",
                img: `${ProductPricingBg}`,
                free: true,
              },
              {
                subtitle:
                  "Should Instagram let users pay for an ad-free experience? If so, how much would you charge for it?",
                time: "16:27",
                free: false,
              },
              {
                subtitle:
                  "Target is a longtime Azure customer and wants a 10% discount for next year. As a PM at Azure, would you grant it?",
                time: "13:26",
                free: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    bigTitle: "Strategy Questions",
    img: `${Strategy}`,
    videoNumber: "18",
    time: "5.4 hrs",
    subData: [
      {
        heading: "Overview of Strategy questions",
        img: "",
        time: "3:35",
        free: false,
        hasDropdown: true,
        content2: [
          {
            title: "Estimation",
            videoNumber: "5",
            subContent: [
              {
                subtitle: "How to flawlessly answer Estimation Questions",
                time: "10:27",
                free: false,
              },
              {
                subtitle:
                  "Estimate the customer acquisition cost and lifetime value of Spotify users.",
                time: "22:44",
                free: false,
              },
              {
                subtitle: "How much does the average video call cost Zoom?",
                time: "19:21",
                free: false,
              },
              {
                subtitle:
                  "Estimate Apple Music's annual revenue from subscriptions in the US.",
                time: "11:58",
                free: false,
              },
              {
                subtitle:
                  "Estimate the total weight of all the mail & packages that the USPS delivers in the US on an average day.",
                time: "6:08",
                free: false,
              },
            ],
          },
          {
            title: "Corporate Strategy",
            videoNumber: "8",
            subContent: [
              {
                subtitle:
                  "How to flawlessly answer Corporate Strategy questions",
                time: "11:34",
                free: false,
              },
              {
                subtitle:
                  "Should Netflix build a native co-watching experience?",
                time: "17:53",
                img: `${NetflixBg}`,
                free: true,
              },
              {
                subtitle:
                  "Should PayPal enter the Web3 market by building a crypto/blockchain product?",
                time: "10:46",
                free: false,
              },
              {
                subtitle: "Should TikTok acquire Snapchat?",
                time: "15:36",
                free: false,
              },
              {
                subtitle:
                  "Marriott's CEO has given you a year and 50 employees to reimagine the hotel business. What do you do?",
                time: "17:51",
                free: false,
              },
              {
                subtitle: "Why did Microsoft acquire Linkedin?",
                time: "15:18",
                free: false,
              },
              {
                subtitle:
                  "If you had to eliminate one Apple product, what would it be and why?",
                time: "8:41",
                free: false,
              },
              {
                subtitle: "Should Uber Eats be a separate app from Uber?",
                time: "11:07",
                free: false,
              },
            ],
          },
          {
            title: "Competitive Analysis",
            videoNumber: "4",
            subContent: [
              {
                subtitle:
                  "How to flawlessly answer Competitive Analysis questions",
                time: "5:32",
                free: false,
              },
              {
                subtitle:
                  "Imagine Microsoft is making an Asana competitor. What value proposition would you choose?",
                time: "26:45",
                free: false,
              },
              {
                subtitle:
                  "How can Dropbox differentiate itself from Box, Google Drive, Microsoft OneDrive, etc.?",
                time: "16:51",
                free: false,
              },
              {
                subtitle: "Why are malls failing? How would you reinvent them?",
                time: "12:49",
                free: false,
              },
            ],
          },
          {
            title: "Brainstorming",
            videoNumber: "4",
            subContent: [
              {
                subtitle: "How to flawlessly answer Brainstorming questions",
                time: "7:01",
                free: false,
              },
              {
                subtitle:
                  "Pitch a non-tech/low-tech idea for all of Ford's cars.",
                time: "29:40",
                free: false,
              },
              {
                subtitle:
                  "How would you keep Facebook Marketplace safe and prevent scams?",
                time: "24:32",
                img: `${StrategyQstBg}`,
                free: true,
              },

              {
                subtitle:
                  "You've developed a teleportation device. What are some of the use cases and markets for the product?",
                time: "17:08",
                free: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    bigTitle: "Behavioral Questions",
    img: `${Behavioral}`,
    videoNumber: "20",
    time: "1.8 hrs",
    subData: [
      {
        heading: "Overview of Behavioral questions",
        img: "",
        time: "1:48",
        free: false,
        hasDropdown: true,
        content2: [
          {
            title: "Tell Me About Yourself",
            videoNumber: "6",
            subContent: [
              {
                subtitle: "How to answer 'tell me about yourself.'",
                time: "1:26",
                free: false,
              },
              {
                subtitle: "Microsoft PM's 'tell me about yourself.'",
                time: "5:42",
                free: false,
              },
              {
                subtitle: "Why the above story is powerful",
                time: "4:45",
                free: false,
              },
              {
                subtitle: "Amazon PM's 'tell me about yourself.'",
                time: "7:03",
                img: `${AmazonePmsBg}`,
                free: true,
              },
              {
                subtitle: "Uber PM's 'tell me about yourself.'",
                time: "6:08",
                free: false,
              },
            ],
          },
          {
            title: "Leadership and Drive",
            videoNumber: "6",
            subContent: [
              {
                subtitle:
                  "How to flawlessly answer Tell Me About a Time questions",
                time: "16:17",
                free: false,
              },
              {
                subtitle:
                  "Tell me about a time you didn't have the resources to do something but got it done anyway. (Meta PM's response)",
                time: "2:29",
                free: false,
              },
              {
                subtitle:
                  "Tell me about a time when you built something outside of work. (LinkedIn PM's response)",
                time: "6:06",
                free: false,
              },
              {
                subtitle:
                  "Tell me about a time you had to overcome an obstacle. (Affirm PM's response)",
                time: "9:20",
                free: false,
              },
              {
                subtitle:
                  "Tell me about a time you created an innovative product. (Uber PM's response)",
                time: "3:28",
                free: false,
              },
              {
                subtitle:
                  "Tell me about a time you had to make a really tough decision. (Pinterest PM's response)",
                time: "5:13",
                free: false,
              },
              {
                subtitle:
                  "Describe an instance where you had to make an important decision. (Microsoft PM's response)",
                time: "6:09",
                free: false,
              },
            ],
          },
          {
            title: "Teamwork and Communication",
            videoNumber: "4",
            subContent: [
              {
                subtitle:
                  "Imagine if the designer on your team wasn't meeting expectations. How would you proceed? (Google PM's response)",
                time: "5:38",
                free: false,
              },
              {
                subtitle:
                  "Tell me about a time when you earned the trust of a person or group. (LinkedIn PM's response)",
                time: "5:56",
                free: false,
              },
              {
                subtitle:
                  "Do you work well independently? (Affirm PM's response)",
                time: "2:36",
                free: false,
              },
              {
                subtitle:
                  "Tell me about a time your team failed. (Meta PM's response)",
                time: "6:48",
                free: false,
              },
            ],
          },
          {
            title: "Culture Fit",
            videoNumber: "4",
            subContent: [
              {
                subtitle: "How to flawlessly answer Culture Fit questions",
                time: "5:10",
                free: false,
              },
              {
                subtitle:
                  "How to answer 'Why are you interested in this company'. (Microsoft PM's response)",
                time: "2:58",
                free: false,
              },
              {
                subtitle: "What's your PM superpower? (Affirm PM's response)",
                time: "4:38",
                free: false,
              },

              {
                subtitle:
                  "Do you stay up to date with the tech industry? How do you get inspired with new ideas? (Affirm PM's response)",
                time: "2:30",
                free: false,
              },
              {
                subtitle:
                  "What is the most important thing a PM does? (Google PM's response)",
                time: "6:42",
                free: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    bigTitle: "Technical Questions",
    img: `${Technichal}`,
    videoNumber: "9",
    time: "1.6 hrs",
    subData: [
      {
        heading: "Overview of Technical questions",
        img: "",
        time: "1:52",
        free: false,
        hasDropdown: true,
        content2: [
          {
            title: "Algorithm Design",
            videoNumber: "3",
            subContent: [
              {
                subtitle: "How to flawlessly answer Algorithm Design questions",
                time: "7:39",
                free: false,
              },
              {
                subtitle:
                  "Design the algorithm to recommend videos on Disney+.",
                time: "18:21",
                free: false,
              },
              {
                subtitle:
                  "Google's office is all floors above 'x' in an 100-story building. Your badge works only on Google's floors. Find 'x' with the fewest swipes.",
                time: "7:59",
                free: false,
              },
            ],
          },
          {
            title: "Technical Architecture",
            videoNumber: "3",
            subContent: [
              {
                subtitle:
                  "How to flawlessly answer Technical Architecture questions",
                time: "4:20",
                free: false,
              },
              {
                subtitle:
                  "What is everything that happens when you type 'twitter.com 'and hit enter?",
                time: "6:24",
                free: false,
              },
              {
                subtitle:
                  "A vendor swipes a credit card. What technical things happen behind the scenes?",
                time: "6:14",
                free: false,
              },
            ],
          },
          {
            title: "Explainers",
            videoNumber: "5",
            subContent: [
              {
                subtitle: "How to flawlessly answer Explainer questions",
                time: "3:32",
                free: false,
              },
              {
                subtitle:
                  "How do generative adversarial networks (GANs) work? How can you use them to make deepfakes?",
                time: "6:01",
                free: false,
              },
              {
                subtitle:
                  "In Washington and Oregon, the average driver rating on Uber is higher than Lyft. But when combined, Lyft's is higher. How is this possible?",
                time: "10:11",
                free: false,
              },
              {
                subtitle:
                  "Tell me about a tech trend you find interesting or an emerging technology you're following.",
                time: "10:26",
                img: `${ExplainersBg}`,
                free: true,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    bigTitle: "Interview Strategies",
    img: `${Collaboration}`,
    videoNumber: "7",
    time: "24 min",
    subData: [
      {
        heading: "",
        img: "",
        time: "",
        free: false,
        hasDropdown: true,
        content2: [
          {
            title: "Before the Interview",
            videoNumber: "2",
            subContent: [
              {
                subtitle: "Cracking the homework assignment",
                time: false,
                free: false,
              },
              {
                subtitle: "How to practice by mock interviewing",
                time: false,
                free: false,
              },
            ],
          },
          {
            title: "During the Interview",
            videoNumber: "5",
            subContent: [
              {
                subtitle: "Acing video interviews",
                time: "6:01",
                free: false,
              },
              {
                subtitle: "Using your whiteboard",
                time: "5:29",
                free: false,
              },
              {
                subtitle: "What to do on interview day",
                time: "2:13",
                free: false,
              },
              {
                subtitle: "Making the most of the Q&A section",
                time: "2:02",
                free: false,
              },
              {
                subtitle: "Crafting a memorable thank-you note",
                time: "2:56",
                free: false,
              },
            ],
          },
        ],
      },
    ],
  },
];
