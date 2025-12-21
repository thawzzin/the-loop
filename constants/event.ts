import slugify from "react-slugify";

export const featuredEvents = [
  {
    id: 1,
    title: "Green Day",
    date: "2025-02-12",
    time: "20:30",
    price: "THB2,800 – THB6,800",
    image1:
      "https://i.pinimg.com/1200x/4e/c7/86/4ec786bbc61ce194fd5d808c4af41a8c.jpg",
    image2:
      "https://i.pinimg.com/1200x/9a/82/42/9a82429b6f6580f4347e5287cc841bb3.jpg",
    image3:
      "https://i.pinimg.com/736x/f4/51/62/f4516224bce0377ac1fd2001110a7c3c.jpg",
    description:
      "An explosive night of punk rock energy and anthems that defined generations. Green Day return with a setlist that spans decades — from the raw rebellion of Dookie to the stadium-sized choruses of American Idiot and beyond. Expect roaring guitars, relentless drums, and Billie Joe Armstrong’s unmistakable charisma driving the crowd into full voice. This is more than a concert — it’s a celebration of punk spirit, youth, and resistance, delivered with the precision and power of one of the most influential rock bands of all time.",
    imageUrl: "/images/greenday.jpg",
    stadium: "Impact Arena",
    ticketUrl:
      "https://www.thaiticketmajor.com/concert/green-day-live-in-bangkok.html",
    slug: slugify("Green Day"),
  },
  {
    id: 2,
    title: "The Script",
    date: "2025-02-20",
    time: "20:30",
    price: "THB2,800 – THB3,800",
    image1:
      "https://i.pinimg.com/1200x/04/be/06/04be0669952cc16cc5f3544e634b62e8.jpg",
    image2:
      "https://i.pinimg.com/736x/12/c1/ce/12c1cebd5754b4ff05a10c32587e1716.jpg",
    image3:
      "https://i.pinimg.com/736x/88/06/c9/8806c95ef759a9762276543e8ecb59ac.jpg",
    description:
      "An emotionally charged evening of soaring melodies and heartfelt storytelling. The Script bring their signature blend of pop-rock and soul to the stage, delivering songs that balance vulnerability with arena-ready hooks. From intimate piano-led moments to powerful, sing-along choruses, their live performance creates a deep connection between band and audience. Expect a night filled with nostalgia, passion, and songs that hit straight at the heart — an experience that feels both personal and expansive.",
    stadium: "Thunder dome",
    imageUrl: "/images/thescript.jpg",
    ticketUrl:
      "https://www.thaiticketmajor.com/concert/the-script-greatest-hits-tour-2022.html",
    slug: slugify("The Script"),
  },
  {
    id: 3,
    title: "Yoasobi",
    date: "2025-01-25",
    time: "20:00",
    price: "THB3,800 – THB5,300",
    image1:
      "https://i.pinimg.com/1200x/03/95/2e/03952e604af37f0ad4d02d9ffef79c14.jpg",
    image2:
      "https://i.pinimg.com/1200x/a4/5c/1c/a45c1cf9f02e84ae7417596e8a32b980.jpg",
    image3:
      "https://i.pinimg.com/736x/24/fd/89/24fd89cb73eddfb4a0ff73bde0da4007.jpg",
    description:
      "An immersive live experience where storytelling and sound intertwine. YOASOBI bring their genre-blending J-pop sound to life with performances that feel both intimate and cinematic. Built around narratives drawn from novels and short stories, their music moves fluidly between delicate melodies and powerful electronic crescendos. With atmospheric visuals and emotional precision, the show invites the audience into a dreamlike world — one where lyrics, rhythm, and imagery combine into something deeply moving and unforgettable.",
    stadium: "BITEC Live",
    imageUrl: "/images/yoasobi.jpg",
    ticketUrl: "https://www.ticketmelon.com/viji/yoasobi",
    slug: slugify("Yoasobi"),
  },
  {
    id: 4,
    title: "One Ok Rock Detox",
    date: "2026-02-21",
    time: "19:00",
    price: "THB2,700 – THB5,500",
    image1:
      "https://i.pinimg.com/1200x/1c/ba/49/1cba49e123b16b1dd9fcb443d0ae0dbf.jpg",
    image2:
      "https://i.pinimg.com/1200x/17/63/bf/1763bf90b19724a8973087793b190689.jpg",
    image3:
      "https://i.pinimg.com/736x/61/b2/97/61b2976e96c4dc6770db0140db4c4354.jpg",
    description:
      "A relentless surge of modern rock intensity and emotional release. ONE OK ROCK return with Detox, delivering a high-octane performance fueled by explosive guitars, massive choruses, and raw vocal power. The band moves effortlessly between aggressive energy and reflective moments, creating a dynamic live experience that never lets up. With international polish and unmistakable passion, this show is built for fans who crave both catharsis and connection — loud, honest, and unapologetically alive.",
    stadium: "Impact Arena",
    imageUrl: "/images/oneOKrock.jpg",
    ticketUrl:
      "https://www.thaiticketmajor.com/concert/one-ok-rock-detox-asia-tour-2026-in-bangkok.html",
    slug: slugify("One Ok Rock Detox"),
  },
];

export const events = [
  {
    id: 1,
    title: "Yoasobi",
    date: "2025-01-25",
    time: "20:00",
    price: "THB3,800 – THB5,300",
    image1:
      "https://i.pinimg.com/1200x/03/95/2e/03952e604af37f0ad4d02d9ffef79c14.jpg",
    image2:
      "https://i.pinimg.com/1200x/a4/5c/1c/a45c1cf9f02e84ae7417596e8a32b980.jpg",
    image3:
      "https://i.pinimg.com/736x/24/fd/89/24fd89cb73eddfb4a0ff73bde0da4007.jpg",
    description:
      "An immersive live experience where storytelling and sound intertwine. YOASOBI bring their genre-blending J-pop sound to life with performances that feel both intimate and cinematic. Built around narratives drawn from novels and short stories, their music moves fluidly between delicate melodies and powerful electronic crescendos. With atmospheric visuals and emotional precision, the show invites the audience into a dreamlike world — one where lyrics, rhythm, and imagery combine into something deeply moving and unforgettable.",
    stadium: "BITEC Live",
    imageUrl: "/images/yoasobi.jpg",
    ticketUrl: "https://www.ticketmelon.com/viji/yoasobi",
    slug: slugify("Yoasobi"),
  },
  {
    id: 2,
    title: "Green Day",
    date: "2025-02-12",
    time: "20:30",
    price: "THB2,800 – THB6,800",
    image1:
      "https://i.pinimg.com/1200x/4e/c7/86/4ec786bbc61ce194fd5d808c4af41a8c.jpg",
    image2:
      "https://i.pinimg.com/1200x/9a/82/42/9a82429b6f6580f4347e5287cc841bb3.jpg",
    image3:
      "https://i.pinimg.com/736x/f4/51/62/f4516224bce0377ac1fd2001110a7c3c.jpg",
    description:
      "An explosive night of punk rock energy and anthems that defined generations. Green Day return with a setlist that spans decades — from the raw rebellion of Dookie to the stadium-sized choruses of American Idiot and beyond. Expect roaring guitars, relentless drums, and Billie Joe Armstrong’s unmistakable charisma driving the crowd into full voice. This is more than a concert — it’s a celebration of punk spirit, youth, and resistance, delivered with the precision and power of one of the most influential rock bands of all time.",
    imageUrl: "/images/greenday.jpg",
    stadium: "Impact Arena",
    ticketUrl:
      "https://www.thaiticketmajor.com/concert/green-day-live-in-bangkok.html",
    slug: slugify("Green Day"),
  },
  {
    id: 3,
    title: "The Script",
    date: "2025-02-20",
    time: "20:30",
    price: "THB2,800 – THB3,800",
    image1:
      "https://i.pinimg.com/1200x/04/be/06/04be0669952cc16cc5f3544e634b62e8.jpg",
    image2:
      "https://i.pinimg.com/736x/12/c1/ce/12c1cebd5754b4ff05a10c32587e1716.jpg",
    image3:
      "https://i.pinimg.com/736x/88/06/c9/8806c95ef759a9762276543e8ecb59ac.jpg",
    description:
      "An emotionally charged evening of soaring melodies and heartfelt storytelling. The Script bring their signature blend of pop-rock and soul to the stage, delivering songs that balance vulnerability with arena-ready hooks. From intimate piano-led moments to powerful, sing-along choruses, their live performance creates a deep connection between band and audience. Expect a night filled with nostalgia, passion, and songs that hit straight at the heart — an experience that feels both personal and expansive.",
    stadium: "Thunder dome",
    imageUrl: "/images/thescript.jpg",
    ticketUrl:
      "https://www.thaiticketmajor.com/concert/the-script-greatest-hits-tour-2022.html",
    slug: slugify("The Script"),
  },
  {
    id: 4,
    title: "Blackpink Deadline",
    date: "2025-10-24",
    time: "18:00",
    price: "THB2,800 – THB8,800+",
    image1:
      "https://i.pinimg.com/736x/d7/c5/74/d7c574779db1388a1ff0c2e7753e0edb.jpg",
    image2:
      "https://i.pinimg.com/1200x/43/42/ef/4342ef8c74138f70706cf3324a47066f.jpg",
    image3:
      "https://i.pinimg.com/736x/49/a7/7c/49a77c5ada815ab9cdc8502fc09c263c.jpg",
    description:
      "A high-impact spectacle where global pop dominance meets cutting-edge production. BLACKPINK’s Deadline tour promises razor-sharp choreography, massive visual displays, and explosive performances of chart-topping hits. Each member commands the stage with confidence and style, shifting seamlessly between fierce rap verses and euphoric pop choruses. Backed by cinematic lighting and larger-than-life visuals, this show is a bold statement of power, precision, and star energy — a night designed to leave a lasting impression.",
    stadium: "Rajamangala",
    imageUrl: "/images/blackpink.jpg",
    ticketUrl:
      "https://www.thaiticketmajor.com/concert/blackpink-world-tour-deadline-in-bangkok.html",
    slug: slugify("Blackpink Deadline"),
  },
  {
    id: 5,
    title: "Twice This Is For",
    date: "2025-12-13",
    time: "18:00",
    price: "THB2,800 – THB6,900",
    image1:
      "https://i.pinimg.com/736x/81/75/72/81757255ed15b440cf2feca2cc467e03.jpg",
    image2:
      "https://i.pinimg.com/736x/16/78/9f/16789fd74991930d1f4e6998ce91aba6.jpg",
    image3:
      "https://i.pinimg.com/736x/c1/05/70/c105702ad42216d4ec916345f1ea8082.jpg",
    description:
      "A joyful, high-energy celebration of music, movement, and connection. TWICE return with This Is For, a tour built around vibrant pop anthems, polished choreography, and heartfelt fan moments. From playful, colorful stages to emotionally resonant performances, the show flows effortlessly between fun and sincerity. Expect dazzling visuals, nonstop energy, and a shared sense of excitement that turns the arena into a sea of light, voices, and unforgettable memories.",
    stadium: "Impact Arena",
    imageUrl: "/images/twice.jpg",
    ticketUrl:
      "https://www.thaiticketmajor.com/concert/twice-this-is-for-world-tour-in-bangkok.html",
    slug: slugify("Twice This Is For"),
  },
  {
    id: 6,
    title: "One Ok Rock Detox",
    date: "2026-02-21",
    time: "19:00",
    price: "THB2,700 – THB5,500",
    image1:
      "https://i.pinimg.com/1200x/1c/ba/49/1cba49e123b16b1dd9fcb443d0ae0dbf.jpg",
    image2:
      "https://i.pinimg.com/1200x/17/63/bf/1763bf90b19724a8973087793b190689.jpg",
    image3:
      "https://i.pinimg.com/736x/61/b2/97/61b2976e96c4dc6770db0140db4c4354.jpg",
    description:
      "A relentless surge of modern rock intensity and emotional release. ONE OK ROCK return with Detox, delivering a high-octane performance fueled by explosive guitars, massive choruses, and raw vocal power. The band moves effortlessly between aggressive energy and reflective moments, creating a dynamic live experience that never lets up. With international polish and unmistakable passion, this show is built for fans who crave both catharsis and connection — loud, honest, and unapologetically alive.",
    stadium: "Impact Arena",
    imageUrl: "/images/oneOKrock.jpg",
    ticketUrl:
      "https://www.thaiticketmajor.com/concert/one-ok-rock-detox-asia-tour-2026-in-bangkok.html",
    slug: slugify("One Ok Rock Detox"),
  },
];
