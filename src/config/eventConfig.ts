export const eventConfig = {
  occasion: "25th Wedding Anniversary",
  years: 25,
  theme: "Silver Jubilee Celebration",

  // Couple details
  coupleNames: {
    husband: "Dharmendra Rastogi",
    wife: "Ritu Rastogi",
    // Initials for wax seal and monograms
    initials: "D & R",
  },

  // Hosts
  hosts: {
    title: "HOSTED WITH LOVE BY",
    names: "Shivi Rastogi & Mayur Rastogi",
    relationship: "Children of Dharmendra & Ritu Rastogi",
  },

  date: {
    formatted: "26 November 2026",
    iso: "2026-11-26T18:30:00+05:30",
    day: "Thursday",
    time: "6:30 PM onwards",
    timezone: "Asia/Kolkata",
    month: "November",
    year: 2026,
    dayOfMonth: 26,
  },

  venue: {
    name: "Le Grande",
    address: "Le Grande, [Add full venue address here]",
    mapsUrl: "",
    qrImage: "/assets/qr/venue-qr.png",
  },

  saveTheDate: {
    heading: "Save The Date",
    subheading: "Mark your calendar for this milestone celebration",
    // User can place their marked calendar image at this path:
    calendarImage: "/assets/images/save-the-date-calendar.png",
    markedDateText: "26 November 2026 · Thursday",
  },

  invitation: {
    preHeading: "25 YEARS",
    preSubheading: "OF LOVE, LAUGHTER & TOGETHERNESS",
    heading: "Together Through Every Season of Life",

    messageLines: [
      "Some journeys become beautiful because they are shared.",
      "Twenty-five wonderful years of love, companionship, laughter and countless cherished memories have brought us to this momentous Silver Jubilee milestone.",
      "As we celebrate 25 beautiful years of togetherness, we would love to have you by our side to make this celebration even more memorable.",
      "Your warm presence and blessings would mean the world to our family.",
    ],

    closing: [
      "Love grows more beautiful with every passing year.",
      "Twenty-five years down, forever to go.",
      "We look forward to celebrating this special evening with you.",
    ],
  },

  envelopeText: {
    tagline: "A SPECIAL INVITATION AWAITS YOU",
    headline: "25th Wedding Anniversary",
    subline: "With love, we invite you to be a part of our Silver Jubilee celebration.",
    ctaButton: "OPEN YOUR INVITATION",
  },

  gallery: [
    "/assets/images/photo-1.jpg",
    "/assets/images/photo-2.jpg",
    "/assets/images/photo-3.jpg",
    "/assets/images/photo-4.jpg",
    "/assets/images/photo-5.jpg",
    "/assets/images/photo-6.jpg",
    "/assets/images/photo-7.jpg",
    "/assets/images/photo-8.jpg",
  ],

  music: {
    enabled: true,
    source: "/assets/music/celebration.mp3",
    volume: 0.25,
  },

  // Baby Pink & Pure White luxury palette tokens
  palette: {
    babyPinkLight: "#FFF0F5",
    babyPink: "#FCE4EC",
    babyPinkMedium: "#F8BBD0",
    rosePink: "#F48FB1",
    roseGold: "#D48C9E",
    roseGoldDark: "#B76E79",
    pureWhite: "#FFFFFF",
    pearlWhite: "#FAF9F6",
    charcoalRose: "#2E2428",
    mutedPlum: "#644D56",
  },
};

export type EventConfig = typeof eventConfig;
