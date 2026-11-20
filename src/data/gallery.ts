export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  caption: string;
  tag: 'All' | 'Portraits' | 'Moments' | 'Keepsakes';
}

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    src: "/images/couple-portrait.png",
    alt: "Ritu Rastogi and Dharmendra Rastogi holding hands in radiant celebration",
    title: "Hand in Hand Across 25 Years",
    subtitle: "A Sacred Bond of Love & Devotion",
    caption: "Twenty-five years of holding hands through every season, sharing joy, warmth, and enduring companionship.",
    tag: "Portraits",
  },
  {
    id: "g2",
    src: "/images/couple-original.jpg",
    alt: "Radiant smiles celebrating a lifetime of togetherness",
    title: "Laughter & Eternal Smiles",
    subtitle: "Joy in Every Shared Moment",
    caption: "The radiant happiness of two souls whose laughter and love have filled their home with warmth.",
    tag: "Moments",
  },
  {
    id: "g3",
    src: "/images/couple-portrait.png",
    alt: "Silver Jubilee Celebration Portrait",
    title: "The Silver Jubilee Couple",
    subtitle: "Honoring 25 Beautiful Years",
    caption: "A timeless milestone celebrating a quarter-century of mutual respect, family values, and sacred vows.",
    tag: "Portraits",
  },
  {
    id: "g4",
    src: "/images/gallery-placeholder.png",
    alt: "Cherished Family Blessings and Keepsakes",
    title: "Cherished Keepsake",
    subtitle: "Blessings of Elders & Children",
    caption: "Framed in love with the heartfelt blessings of Smt. Asha Rastogi, Shivi, Mayur, and all dear ones.",
    tag: "Keepsakes",
  },
  {
    id: "g5",
    src: "/images/couple-original.jpg",
    alt: "Together Through Every Season",
    title: "Togetherness Through The Years",
    subtitle: "From 1999 to Forever",
    caption: "Looking back with deep gratitude at twenty-five wonderful years, and looking forward to an eternity of love.",
    tag: "Moments",
  },
  {
    id: "g6",
    src: "/images/couple-portrait.png",
    alt: "Everlasting Harmony and Elegance",
    title: "Grace, Harmony & Devotion",
    subtitle: "Two Hearts as One",
    caption: "Celebrating the quiet strength, unconditional support, and deep affection that defined twenty-five golden years.",
    tag: "Portraits",
  },
];
