export interface PhotographItem {
  id: string;
  src: string;
  title: string;
  description?: string;
  category?: "All" | "Nature & Landscape" | "Urban & Life" | "Atmosphere";
  location?: string;
  isFeatured?: boolean;
}

/**
 * Personal photography archive.
 * All photographs are personally taken by Mikiyas Birhanu and stored in /public/assets/photography.
 *
 * To add a new photograph in the future:
 * 1. Place the image in /public/assets/photography/
 * 2. Add an entry to the photographyData array below with its filename and title.
 * 3. The gallery count, layout, and lightbox will automatically update.
 */
export const photographyData: PhotographItem[] = [
  {
    id: "photo-01",
    src: "/assets/photography/Summer dusk.jpg",
    title: "Summer Dusk",
    category: "Atmosphere",
    isFeatured: true,
  },
  {
    id: "photo-02",
    src: "/assets/photography/nature's art.jpg",
    title: "Nature's Art",
    category: "Nature & Landscape",
  },
  {
    id: "photo-03",
    src: "/assets/photography/peaceful night.jpg",
    title: "Peaceful Night",
    category: "Atmosphere",
  },
  {
    id: "photo-04",
    src: "/assets/photography/old town.jpg",
    title: "Old Town",
    category: "Urban & Life",
  },
  {
    id: "photo-05",
    src: "/assets/photography/transparent mountain.jpg",
    title: "Transparent Mountain",
    category: "Nature & Landscape",
  },
  {
    id: "photo-06",
    src: "/assets/photography/calm lake.jpg",
    title: "Calm Lake",
    category: "Nature & Landscape",
  },
  {
    id: "photo-07",
    src: "/assets/photography/A speaking smoke.jpg",
    title: "A Speaking Smoke",
    category: "Atmosphere",
  },
  {
    id: "photo-08",
    src: "/assets/photography/a moving history.jpg",
    title: "A Moving History",
    category: "Urban & Life",
  },
  {
    id: "photo-09",
    src: "/assets/photography/close to it.jpg",
    title: "Close to It",
    category: "Atmosphere",
  },
  {
    id: "photo-10",
    src: "/assets/photography/deep talk here.jpg",
    title: "Deep Talk Here",
    category: "Urban & Life",
  },
  {
    id: "photo-11",
    src: "/assets/photography/focus .jpg",
    title: "Focus",
    category: "Atmosphere",
  },
  {
    id: "photo-12",
    src: "/assets/photography/hella coffee.jpg",
    title: "Hella Coffee",
    category: "Urban & Life",
  },
  {
    id: "photo-13",
    src: "/assets/photography/how lonely can you get.jpg",
    title: "How Lonely Can You Get",
    category: "Atmosphere",
  },
  {
    id: "photo-14",
    src: "/assets/photography/like a tv screen.jpg",
    title: "Like a TV Screen",
    category: "Atmosphere",
  },
  {
    id: "photo-15",
    src: "/assets/photography/lucky leaf.jpg",
    title: "Lucky Leaf",
    category: "Nature & Landscape",
  },
  {
    id: "photo-16",
    src: "/assets/photography/needs speed.jpg",
    title: "Needs Speed",
    category: "Urban & Life",
  },
  {
    id: "photo-17",
    src: "/assets/photography/shaded lake.jpg",
    title: "Shaded Lake",
    category: "Nature & Landscape",
  },
  {
    id: "photo-18",
    src: "/assets/photography/slower time.jpg",
    title: "Slower Time",
    category: "Urban & Life",
  },
  {
    id: "photo-19",
    src: "/assets/photography/stop and see.jpg",
    title: "Stop and See",
    category: "Atmosphere",
  },
  {
    id: "photo-20",
    src: "/assets/photography/taste the feeling.jpg",
    title: "Taste the Feeling",
    category: "Urban & Life",
  },
  {
    id: "photo-21",
    src: "/assets/photography/wake up to this.jpg",
    title: "Wake Up to This",
    category: "Nature & Landscape",
  },
  {
    id: "photo-22",
    src: "/assets/photography/waking up memory.jpg",
    title: "Waking Up Memory",
    category: "Atmosphere",
  },
  {
    id: "photo-23",
    src: "/assets/photography/warm beauty.jpg",
    title: "Warm Beauty",
    category: "Atmosphere",
  },
];

export const photographyCategories = [
  "All",
  "Nature & Landscape",
  "Atmosphere",
  "Urban & Life",
] as const;

export type PhotographyCategory = (typeof photographyCategories)[number];
