/* =========================================================
   YOUR CONTENT — edit this file only
   Everything shown on the website comes from here.
   Image paths are relative to index.html.
   ========================================================= */

const content = {

  /* ---------- Profile ---------- */
  name: "Shaina Lei Dasco",
  domain: "shaina.dev",
  email: "dascoshainalei@gmail.com",

  // Photos used in the profile image boxes.
  // Other photos you can swap in: profile-2.jpg, profile-3.jpg
  photos: {
    badge: "assets/images/profile/profile-formal.jpg",  // ID card on the home page
    about: "assets/images/profile/profile-3.jpg"   // framed box in About
  },

  /* ---------- Projects ----------
     title, description, cover (card image), images (popup gallery),
     optional video, stack (tools used), features (key points)
  ------------------------------------------------------- */
  projects: [
    {
      title: "SLD Personal Brand",
      description: "Logo and visual identity for my personal brand, \"Shaping Ideas, Designing the Future\", with logo variations and a mood board.",
      cover: "assets/images/branding/logo-horizontal.jpg",
      images: [
        "assets/images/branding/logo-circle.png",
        "assets/images/branding/logo-badge.png",
        "assets/images/branding/logo-horizontal.jpg",
        "assets/images/branding/logo-vertical.jpg",
        "assets/images/branding/mood-board.jpg"
      ],
      stack: ["Branding", "Logo Design", "Mood Board", "Canva"],
      features: [
        "Circular, badge, horizontal and vertical logo versions",
        "Color palette in cream, peach, pink and purple",
        "Agbalumo and Fredoka typography",
        "Mood board with brand motifs"
      ]
    },
    {
      title: "Tech Week 2026",
      description: "Promotional materials for the College of Computer Studies Tech Week event.",
      cover: "assets/images/tech-week/social-media.png",
      images: [
        "assets/images/tech-week/social-media.png",
        "assets/images/tech-week/banner-ad.png",
        "assets/images/tech-week/newsletter.png",
        "assets/images/tech-week/LANDING PAGE.png"
      ],
      stack: ["Event Promo", "Social Media", "Canva", "Web Design"],
      features: ["Social media post", "Banner ad", "Newsletter header", "Landing page design"]
    },
    {
      title: "Coffee Stop Promo",
      description: "Product promotion posters for a coffee shop, with special offers and new drinks.",
      cover: "assets/images/coffee-stop/coffee-1.png",
      images: [
        "assets/images/coffee-stop/coffee-1.png",
        "assets/images/coffee-stop/coffee-2.png"
      ],
      stack: ["Poster Design", "Advertising", "Canva"],
      features: ["Special offer poster", "New drinks poster", "Bold price and promo callouts"]
    },
    {
      title: "My Story Layouts",
      description: "Editorial-style pages about me: my story, about me, achievements, goals and interests.",
      cover: "assets/images/about-me/my-story.png",
      images: [
        "assets/images/about-me/my-story.png",
        "assets/images/about-me/about-me.png",
        "assets/images/about-me/achievements.png",
        "assets/images/about-me/interests.png"
      ],
      stack: ["Editorial Layout", "Typography", "Canva"],
      features: ["Magazine-style cover page", "Mixed photo and text layouts", "Consistent dark and cream theme"]
    },
    {
      title: "Solace Sip",
      description: "Poster for a cozy tea and beverage cafe concept.",
      cover: "assets/images/solace-sip/solace-sip.png",
      images: ["assets/images/solace-sip/solace-sip.png"],
      stack: ["Poster Design", "Illustration", "Canva"],
      features: ["Hand-drawn style lettering", "Warm cream color palette", "Menu highlights and opening hours"]
    },
    {
      title: "SkillQuest",
      description: "Gamified, TESDA-aligned skill assessment web app. Scan the QR codes to open the GitHub repository.",
      cover: "assets/images/skillquest/skillquest-cover.jpg",
      images: [
        
        "assets/images/skillquest/github-qr.png"
      ],
      stack: ["HTML", "CSS", "JavaScript", "Figma", "GitHub"],
      features: ["XP, levels and badges", "Interactive games per TESDA track", "Leaderboard and performance dashboard"]
    },
    {
      title: "Mid fidelity Figma Prototype",
      description: "An mid-fidelity prototype created in Figma of a Online Food Ordering App.Scan to access the prototype.",
      cover: "assets/images/figma/figma_cover.png",
      images: [
        "assets/images/figma/figma-prototype-qr.png",
      
    
      ],
      stack: ["Figma"],
      features: ["Mid fidelity prototype of an Online Food Ordering App", "Interactive screens and navigation", "User flow and usability testing"]
    },
    {
      title: "Promotional Video",
      description: "Short promotional video.",
      cover: "assets/images/promo-video/poster.jpg",
      video: {
        src: "assets/video/promotional-video.mp4",
        poster: "assets/images/promo-video/poster.jpg"
      },
      images: [],
      stack: ["Video", "Canva"],
      features: ["Vertical short-form video"]
    }
  ],

  /* ---------- Tech stack ---------- */
  techStack: ["HTML", "CSS", "JavaScript", "Python", "Figma", "Canva"]
};
