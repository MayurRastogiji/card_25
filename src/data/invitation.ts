export interface InvitationData {
  blessings: {
    shloka: string;
    subtext: string;
    elder: string;
  };
  celebration: {
    tagline: string;
    milestone: string;
    milestoneYears: number;
    title: string;
    wording: string;
  };
  couple: {
    husband: string;
    wife: string;
    fullNameHusband: string;
    fullNameWife: string;
    initials: string;
    shortNames: string;
  };
  dateTime: {
    date: string;
    dayOfWeek: string;
    time: string;
    isoTarget: string; // ISO string in Asia/Kolkata
    timezone: string;
  };
  venue: {
    name: string;
    addressLine1: string;
    addressLine2: string;
    fullAddress: string;
    mapsQueryUrl: string;
    googleMapsEmbedUrl: string;
  };
  journey: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    quote: string;
  };
  closing: {
    thankYou: string;
    blessingsText: string;
    withLove: string;
    regardsLabel: string;
    hosts: string[];
    emblem: string;
  };
  rsvp: {
    heading: string;
    description: string;
    options: {
      accept: string;
      decline: string;
    };
  };
  envelope: {
    teaser: string;
    cta: string;
    skipText: string;
    sealTitle: string;
  };
}

export const invitationData: InvitationData = {
  blessings: {
    shloka: "॥ श्री गणेशाय नमः ॥",
    subtext: "With the Blessings of",
    elder: "Smt. Asha Rastogi",
  },
  celebration: {
    tagline: "Silver Jubilee Celebration",
    milestone: "25th Wedding Anniversary",
    milestoneYears: 25,
    title: "25 Years of Togetherness",
    wording: "Cordially invite you to celebrate their Silver Jubilee.",
  },
  couple: {
    husband: "Dharmendra",
    wife: "Ritu",
    fullNameHusband: "Dharmendra Rastogi",
    fullNameWife: "Ritu Rastogi",
    initials: "R & D",
    shortNames: "Ritu & Dharmendra",
  },
  dateTime: {
    date: "26 November 2026",
    dayOfWeek: "Thursday",
    time: "7 PM onwards",
    isoTarget: "2026-11-26T19:00:00+05:30",
    timezone: "Asia/Kolkata",
  },
  venue: {
    name: "Le Grande Banquet",
    addressLine1: "Shatabdi Nagar, Sector 1",
    addressLine2: "Rithani",
    fullAddress: "Le Grande Banquet, Shatabdi Nagar, Sector 1, Rithani",
    mapsQueryUrl: "https://www.google.com/maps/search/?api=1&query=Le+Grande+Banquet+Shatabdi+Nagar+Sector+1+Rithani",
    // Embed URL targeting the exact venue name & location
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Le+Grande+Banquet+Shatabdi+Nagar+Sector+1+Rithani&t=&z=15&ie=UTF8&iwloc=&output=embed",
  },
  journey: {
    heading: "Two Hearts. One Journey. 25 Beautiful Years.",
    subheading: "A Quarter-Century of Enduring Love & Shared Dreams",
    paragraphs: [
      "Twenty-five years ago, two paths converged into one sacred bond. Through every sunrise and season, love grew deeper, patience grew stronger, and laughter became the soundtrack of a beautiful home.",
      "From whispered dreams in youth to the pride of watching our family blossom, these twenty-five years have been adorned with unspoken understanding, mutual respect, and warmth that only time can forge.",
      "As we pause to look back with gratitude and look ahead with joyful anticipation, we celebrate not just the passage of twenty-five years, but the infinite little moments that made them truly magical.",
    ],
    quote: "“In the garden of life, twenty-five years of love bloom into timeless grace.”",
  },
  closing: {
    thankYou: "Thank You for Being a Part of Our Journey",
    blessingsText: "Your presence and blessings mean the world to us.",
    withLove: "With Love,",
    regardsLabel: "Love & Regards",
    hosts: ["Shivi", "Mayur"],
    emblem: "25 Years · Silver Jubilee",
  },
  rsvp: {
    heading: "We Would Love to Celebrate With You",
    description: "Your presence will make this celebration even more special. Kindly confirm your attendance.",
    options: {
      accept: "Joyfully Accept",
      decline: "Regretfully Decline",
    },
  },
  envelope: {
    teaser: "A Special Invitation Awaits You",
    cta: "Tap to Open",
    skipText: "Skip directly to invitation →",
    sealTitle: "25 Years",
  },
};
