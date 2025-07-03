import {
  IoCallOutline,
  IoLocationOutline,
  IoMailOutline,
} from "react-icons/io5";
import {
  books_1_1,
  books_1_2,
  books_1_3,
  books_1_4,
  books_2_1,
  books_2_2,
  books_2_3,
  books_2_4,
  books_3_1,
  books_3_2,
  books_3_3,
  books_3_4,
  books_4_1,
  books_4_2,
  books_4_3,
  books_4_4,
  books_5_1,
  books_5_2,
  books_5_3,
  books_5_4,
  books_6_1,
  books_6_2,
  books_6_3,
  books_6_4,
  books_hs1,
  books_hs2,
  books_hs3,
  books_r1,
  books_r2,
  books_r3,
  books_r4,
  icons_bc_2,
  icons_bc_3,
  icons_bc_4,
  icons_book_cover,
  icons_bp_2,
  icons_bp_3,
  icons_bp_4,
  icons_bp_5,
  icons_bp_6,
  icons_bp_7,
  icons_distribution,
  icons_ebook,
  icons_edit,
  icons_editing,
  icons_format,
  icons_ill_1,
  icons_ill_2,
  icons_ill_3,
  icons_ill_4,
  icons_isbn,
  icons_marketing,
  icons_notes,
  icons_print,
  icons_product,
  icons_proofreading,
  portfolio_book_cover_1,
  portfolio_book_cover_2,
  portfolio_book_cover_3,
  portfolio_book_cover_4,
  portfolio_book_cover_5,
  portfolio_book_cover_6,
  portfolio_book_cover_7,
  portfolio_book_cover_8,
  portfolio_book_ill_1,
  portfolio_book_ill_2,
  portfolio_book_ill_3,
  portfolio_book_ill_4,
  portfolio_book_ill_5,
  portfolio_book_ill_6,
  portfolio_book_ill_7,
  portfolio_book_ill_8,
  portfolio_ghost_wr_1,
  portfolio_ghost_wr_2,
  portfolio_ghost_wr_3,
  portfolio_ghost_wr_4,
  portfolio_ghost_wr_5,
  portfolio_ghost_wr_6,
  portfolio_ghost_wr_7,
  portfolio_ghost_wr_8,
  process_img,
  reviews_m1,
  reviews_m2,
  reviews_m3,
  reviews_w1,
  reviews_w2,
  reviews_w3,
  services_bc_process,
  services_bc_sec2,
  services_bi_sec2,
  services_fiction_sec2,
  services_gw_sec2,
  services_ill_cta,
  services_ill_process,
} from "../assets";

export const navigation = [
  {
    title: "Ghostwriting",
    link: "/ghostwriting",
    dropdown: [
      {
        title: "Fiction",
        link: "/ghostwriting/fiction",
      },
      {
        title: "Non-Fiction",
        link: "/ghostwriting/non-fiction",
      },
      {
        title: "Informative",
        link: "/ghostwriting/informative",
      },
      {
        title: "Biography",
        link: "/ghostwriting/biography",
      },
      {
        title: "Autobiography",
        link: "/ghostwriting/autobiography",
      },
      {
        title: "Memoir",
        link: "/ghostwriting/memoir",
      },
    ],
  },
  {
    title: "Book Publishing",
    link: "/book-publishing",
    dropdown: [
      {
        title: "E-Book Publishing",
        link: "/ebook-publishing",
      },
      {
        title: "Self Publishing",
        link: "/self-publishing",
      },
      {
        title: "Children's Book Publishing",
        link: "/childrens-book-publishing",
      },
      {
        title: "Barnes & Noble",
        link: "/barnes-and-noble",
      },
    ],
  },
  {
    title: "Amazon Publishing",
    link: "/amazon-publishing",
  },
  {
    title: "Audio Book Publishing",
    link: "/audio-book-publishing",
  },
  {
    title: "Book Marketing",
    link: "/book-marketing-services",
    dropdown: [
      {
        title: "Amazon Paid Ads",
        link: "/amazon-paid-ads",
      },
      {
        title: "Book SEO And SEM",
        link: "/book-seo-and-sem",
      },
      {
        title: "Digital Marketing",
        link: "/digital-marketing",
      },
    ],
  },
  {
    title: "Services",
    link: false,
    dropdown: [
      {
        title: "Proofreading and Editing",
        link: "/proofreading-and-editing",
      },
      {
        title: "Author Website",
        link: "/author-website",
      },
      {
        title: "Book Illustrations",
        link: "/book-illustrations",
      },
      {
        title: "Book Cover",
        link: "/book-cover",
      },
      {
        title: "Formatting and Layout",
        link: "/formatting-and-layout",
      },
    ],
  },
  {
    title: "About",
    link: "/about-us",
  },
];

export const contactDetails = [
  {
    name: "Call Us",
    href: "tel:+19292664429",
    text: "+1 (929) 266 4429",
    icon: IoCallOutline,
  },
  {
    name: "Email Us",
    href: "mailto:info@inknestpublishing.com",
    text: "info@inknestpublishing.com",
    icon: IoMailOutline,
  },
  {
    name: "Location",
    href: false,
    text: "39 Broadway 12th floor, New York, NY 10004",
    icon: IoLocationOutline,
  },
];

export const homeSec3 = [
  {
    title: "Ghost Writing Services for Biography",
    text: "Capture someone’s real-life journey with dignity, accuracy, and storytelling finesse. Our biography ghost writing service transforms timelines and milestones into a legacy worth reading.",
    url: "/ghostwriting/biography",
    img: books_hs1,
  },
  {
    title: "Ghost Writing Services for Autobiography",
    text: "Your story, told your way. Ink Nest Publishing helps you narrate your life’s experiences with emotional depth and personal voice. We guide you through the process with compassion and clarity.",
    url: "/ghostwriting/autobiography",
    img: books_hs2,
  },
  {
    title: "Ghost Writing Services for Memoir",
    text: "Our memoir ghost writing services focus on reflection and meaning. Perfect for those seeking to share personal challenges, life lessons, or defining moments with vulnerability and purpose.",
    url: "/ghostwriting/memoir",
    img: books_hs3,
  },
  {
    title: "Ghost Writing Services for Fiction",
    text: "Let imagination take the lead. From plot arcs to character dialogue, our fiction ghost writers help craft novels that engage and entertain, while staying true to your original concept.",
    url: "/ghostwriting/fiction",
    img: books_hs1,
  },
  {
    title: "Ghost Writing Services for Business Books",
    text: "Position yourself as a thought leader. Whether you’re a startup founder or an industry expert, our business book ghost writing service helps you share strategies, systems, and insights professionally.",
    url: "/ghostwriting/informative",
    img: books_hs2,
  },
  {
    title: "Ghost Writing Services for Self-Help & Personal Growth",
    text: "Inspire transformation. Our self-help ghost writers assist in framing your expertise and motivation in a way that empowers readers. Together, we’ll turn guidance into growth.",
    url: "/ghostwriting/non-fiction",
    img: books_hs3,
  },
];

export const portfolio = [
  {
    title: "Non-Fiction",
    content: [
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_1_1,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_1_2,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_1_3,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_1_4,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
    ],
  },
  {
    title: "Fiction",
    content: [
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_2_1,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_2_2,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_2_3,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_2_4,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
    ],
  },
  {
    title: "Informative",
    content: [
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_3_1,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_3_2,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_3_3,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_3_4,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
    ],
  },
  {
    title: "Biography",
    content: [
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_4_1,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_4_2,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_4_3,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_4_4,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
    ],
  },
  {
    title: "Autobiography",
    content: [
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_5_1,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_5_2,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_5_3,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_5_4,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
    ],
  },
  {
    title: "Memoir",
    content: [
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_6_1,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_6_2,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_6_3,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
      {
        title: "Write Boldly. Smart Publish. Grow Forever.",
        img: books_6_4,
        text: [
          "We believe every story deserves a place to soar. At Ink Nest Publishing, we’re here to support authors in bringing their ideas whether it’s through powerful words, stunning audiobooks, or expert guidance in self publishing and Amazon book publishing.",
          "From personal memoirs to thrilling fiction, our book publishing services are built for every voice and every genre. We don’t just help you publish we help you grow. With services ranging from editing to audiobook creation, our team works with you to build something lasting.",
          "Whether you’re here to promote your book, publish your first one, or explore audiobook narration services, we’re excited to be part of your journey.",
        ],
      },
    ],
  },
];

export const servicesList = [
  { title: "Book Publishing", link: "/book-publishing" },
  { title: "E-Book Publishing", link: "/ebook-publishing" },
  { title: "Proofreading and Editing", link: "/proofreading-and-editing" },
  { title: "Book Promotions and Marketing", link: "/book-marketing-services" },
  { title: "Author Website", link: "/author-website" },
  { title: "Book Illustrations", link: "/book-illustrations" },
  { title: "Book Cover", link: "/book-cover" },
  { title: "Formatting and Layout", link: "/formatting-and-layout" },
  { title: "Audio Book Publishing", link: "/audio-book-publishing" },
  { title: "Amazon Publishing", link: "/amazon-publishing" },
  { title: "Ghostwriting", link: "/ghostwriting" },
];

export const exServices = [

  { title: "Amazon Self Publishing", img: 'icons_amazon_self_publish' },
  { title: "Book Formatting", img: icons_format },
  { title: "Cover Design", img: icons_book_cover },
  { title: "Audiobook Publishing", img: 'icons_audiobook' },
  { title: "eBook Publishing", img: icons_ebook },
  { title: "Children’s Book Publishing", img: 'icons_children_book' },
  { title: "Book Marketing Services", img: icons_marketing },
  { title: "Ghostwriting & Editing", img: 'icons_ghostwriting' },
  { title: "Self Publishing", img: 'icons_self_publish' },
];

export const processSteps = {
  title: "Our Smooth Yet Trusted Work-Flow",
  highlight: "Trusted",
  img: process_img,
  text: "Ink Nest Publishing, believes in making it all quick, simple and easy for you. We keep the publishing journey simple and supportive. Whether you're just starting or nearly done, Ink Nest Publishing helps bring your story to life step by step.",
  points: [
    {
      title: "Let’s Shape the Big Idea",
      text: "We start by understanding what your book is really about—your themes, message, and purpose—so we build on a strong, clear foundation.",
    },
    {
      title: "Plan with Purpose",
      text: "Our team dives into research to map out your book’s direction. From chapter flow to key points, we make sure it all fits together beautifully.",
    },
    {
      title: "Write with Confidence",
      text: "We guide you through each draft, chapter by chapter, helping you balance structure with your unique voice and story style.",
    },
    {
      title: "Polish Every Page",
      text: "Our editors refine your work, checking clarity, grammar, tone, and structure. We go through rounds of edits until your manuscript shines.",
    },
    {
      title: "Hear What Matters",
      text: "You’ll get real, helpful feedback from our editors and team. We’ll work with your vision to improve, never overwrite.",
    },
    {
      title: "Publish with Impact",
      text: "We finalize your book with professional formatting, stunning cover design, and seamless upload to platforms like Amazon, eBook stores, and audiobook channels.",
    },
  ]
};

export const reviews = [
  {
    author: "Cristine Jones",
    avatar: reviews_w1,
    book: books_r1,
    bold: "Wow! Absolutely incredible service from start to finish.",
    comment: "I had no idea where to begin with self-publishing, but the team at Ink Nest Publishing guided me through every step. From formatting to audiobook creation, they made it feel so easy. I finally saw my children’s book come to life and couldn’t be more grateful.",
  },
  {
    author: "Danny Mullen",
    avatar: reviews_m1,
    book: books_r2,
    bold: "Incredible experience! I truly appreciate the heart and skill behind the work.",
    comment: "From ghostwriting to illustrating my autobiography, Ink Nest Publishing made the entire process smooth and personal. They brought my story to life with care, creativity, and true professionalism. I felt heard, respected, and completely supported from start to finish.",
  },
  {
    author: "Daniel Methew",
    avatar: reviews_m2,
    book: books_r3,
    bold: "I still can’t believe my book is out in the world!",
    comment: "Working with this team was a dream come true. They handled everything from the narration to the final touches of my audiobook. I never imagined the process could be this smooth. Highly recommend their audiobook publishing services!",
  },
  {
    author: "Tina Singh",
    avatar: reviews_w2,
    book: books_r4,
    bold: "They truly brought my vision to life.",
    comment: "From the first draft to the final print, the team supported me at every step. The ghostwriting felt authentic, and the cover design was exactly what I imagined. Highly recommended!",
  },
  {
    author: "Larry Ruiz",
    avatar: reviews_m3,
    book: books_hs2,
    bold: "Thank you for making the publishing process so smooth.",
    comment: "I loved working with Ink Nest Publishing! They designed a stunning book cover and created illustrations that matched my story perfectly. Everything was handled so professionally.",
  },
  {
    author: "Sophia Harry",
    avatar: reviews_w3,
    book: books_hs3,
    bold: "From rough draft to reality, thank you!",
    comment: "Ink Nest helped me self-publish my memoir. They took care of the technical stuff, let me stay creative, and got the audiobook recorded by a great narrator. It’s been such a rewarding journey. Super happy!!",
  },
]


export const faqs = [
  {
    ques: "What editing services does Ink Nest Publishing offer for authors?",
    ans: "At Ink Nest Publishing, we help refine your story from start to finish. Our editing services include developmental editing (to shape your book’s structure), line and copy editing (for flow and grammar), and stylistic editing to keep your voice intact, ensuring your book reads smoothly and professionally.",
  },
  {
    ques: "Can Ink Nest Publishing help me publish my book on Amazon?",
    ans: "Yes! Ink Nest Publishing offers full support for Amazon self-publishing. From formatting and uploading to optimization, we guide you every step of the way, making sure your book is ready for the digital shelf and easy for readers to find.",
  },
  {
    ques: "Does Ink Nest Publishing offer ghostwriting for people who have ideas but no time?",
    ans: "Absolutely. We provide ghostwriting services where our expert writers take your ideas and turn them into a compelling, professionally written book while staying true to your voice and vision.",
  },
  {
    ques: "What if I want my book as an audiobook, can Ink Nest Publishing help?",
    ans: "We’ve got you covered. Ink Nest offers complete audiobook publishing from narration and editing to distribution. Whether it's your voice or a professional narrator, we’ll help bring your book to life in audio form.",
  },
  {
    ques: "Does Ink Nest Publishing offer book marketing help after publishing?",
    ans: "Yes, we do. We provide customized book marketing services, including Amazon promotion, social media strategy, and more. Our goal is to help your book get noticed and reach the right readers.",
  },
]

export const services = [
  {
    title: "Ghostwriting",
    link: "/ghostwriting",
    hero: {
      title: "Hire a Ghostwriter for Fiction, Nonfiction, and Biographies Now",
      text: [
        "Want to turn your story or ideas into a book? At Ink Nest Publishing, our ghost writing services go beyond the basics. We become your storytelling partner, transforming your ideas, memories, or outlines into books that resonate with readers and stay true to your voice.",
        "Whether you’re an entrepreneur with a powerful message, a first-time author, or someone with a life story worth sharing, our writers help you shape every word with clarity and care."
      ],
      quote: "A great ghostwriter doesn’t just write your story, they breathe life into your thoughts.",
      title_second: "Extra Value: Ghost Writing + Book Marketing – Affordable Ghostwriting Services You Can Trust",
      text_second: "Once your story is complete, why stop there? Ink Nest Publishing also offers book marketing services to help you promote your book ethically and effectively. From building your author brand to boosting discoverability, we’re here for every step."
    },
    secTwo: {
      title: "Ghost Writing Genre That Honors Your Story",
      text: [
        "At Ink Nest Publishing, our ghost writing services span across genres and formats, ensuring your story gets told the right way, no matter the shape it takes. We specialize in fiction, nonfiction, and everything in between, bringing structure, heart, and professionalism to every manuscript.",
        `<em>“A great ghostwriter doesn’t replace your voice, they reveal it.”</em>`,
        "Whether you’re planning to publish on Amazon, pitch to a traditional publisher, or simply want to share your story, we’re here to make your words resonate."
      ],
      img: services_gw_sec2,
    },
    homeSec3: true,
    portfolio: [
      portfolio_ghost_wr_1,
      portfolio_ghost_wr_2,
      portfolio_ghost_wr_3,
      portfolio_ghost_wr_4,
      portfolio_ghost_wr_5,
      portfolio_ghost_wr_6,
      portfolio_ghost_wr_7,
      portfolio_ghost_wr_8,
    ],
    sec6: {
      title: "Our Workflow Made Simple For Your Ease",
      text: "Our ghost writing services are a collaborative journey—we listen, refine, and write with you to create content that reflects your voice and purpose.",
      points: [
        {
          title: "Ghost Writing Consultation",
          text: "We begin with a one-on-one discussion to understand your vision, goals, audience, and tone. This foundation allows us to craft a custom ghost writing strategy tailored to your project.",
        },
        {
          title: "Ghost Writing Outlining & Structure",
          text: "Our team works with you to shape a clear outline, ensuring your book flows logically and fully reflects your unique message.",
        },
        {
          title: "Dedicated Ghost Writing & Drafting",
          text: "Using your voice, our professional ghostwriters start writing your book, sending regular drafts for your review. Revisions are always collaborative.",
        },
        {
          title: "Ghost Writing Manuscript Development",
          text: "We develop the manuscript in thoughtful stages, focusing on storytelling flow, accuracy, and consistency—each section written with purpose and polish.",
        },
        {
          title: "Ghost Writing Collaboration & Feedback",
          text: "Throughout the process, your input shapes the outcome. Ink Nest Publishing keeps you involved through timely updates and clear communication.",
        },
        {
          title: "Final Ghost Writing Polishing & Preparation",
          text: "Once the draft is complete, we proofread, refine formatting, and prepare your manuscript for final use, including options for editing or self-publishing support.",
        },
      ],
    },
    service_faq: [
      {
        ques: "Why should I hire a ghostwriter for my book?",
        ans: "We understand that not everyone has the time, writing skill, or experience to turn an idea into a full book. Our ghostwriters work with you to craft a polished manuscript that captures your voice, message, and purpose, without stress or overwhelm.",
      },
      {
        ques: "What are ghost writing services at Ink Nest Publishing?",
        ans: "Ghost writing services at Ink Nest Publishing involve professional writers working behind the scenes to help you create your book. We take your ideas, notes, or outlines and turn them into well-structured, publication-ready manuscripts, always with your approval at every step.",
      },
      {
        ques: "How do I find ghostwriters for books?",
        ans: "You’re already in the right place. Ink Nest Publishing connects you with experienced, vetted ghostwriters who specialize in everything from memoirs and nonfiction to fiction and business books. We make the process collaborative, clear, and tailored to your needs.",
      },
      {
        ques: "Who are the best ghostwriters?",
        ans: "The best ghostwriters are those who can write in your voice while maintaining quality and flow. At Ink Nest Publishing, our writers are skilled, professional, and committed to making your story shine, without taking the spotlight away from you.",
      },
    ]
  },
  {
    title: "Fiction",
    link: "/ghostwriting/fiction",
    hero: {
      title: "Bestselling Fiction Ghostwriting Services for Every Genre",
      text: "Every great book starts with a spark, and at Ink Nest Publishing, we’re here to fan it into something unforgettable. Whether it’s a sweeping romance, a fast-paced thriller, or a heartwarming children’s tale, our Fiction Writing Services are built to transform your vision into a reader favorite manuscript.",
      quote: "Every great idea deserves the words to match."
    },
    sec2_new: {
      title: "Write the Next Bestseller With Our Professional Fiction Ghostwriting Services",
      text: [
        "Let’s work together to turn your idea into a masterpiece. With our fiction ghostwriting service, you maintain full ownership of your book. We’re simply the pen that brings your vision to the page. Our process starts with a deep understanding of your concept, tone, and target audience, followed by personalized story development led by experienced fiction writers. Each manuscript is crafted from scratch original, compelling, and in your voice. We work in all major genres, from mystery and fantasy to romance and children’s fiction, ensuring your book resonates with the right readers. Our team also provides editing, formatting, and optional guidance for Amazon self-publishing and book marketing all under one roof.",
        "With Ink Nest Publishing, you maintain full ownership and creative control while we handle the words, structure, and storytelling expertise."
      ],
      img: services_fiction_sec2
    },
    sec3_cards: {
      title: "But What Makes Us An Excellent Among The Competition?",
      highlight: "Excellent",
      text: "We don’t just write stories—we ghostwrite fiction that sounds like you. Our team works behind the scenes with dedication, creativity, and confidentiality to ensure your characters, plot, and tone stay true to your voice. Beginning with concept planning and outlining, we gradually move to writing a full manuscript for you just as you want. In short, we help you go from a blank page to a book you can proudly call your own. But here’s what truly sets us apart:",
      cards: [
        {
          title: "Experienced Fiction Ghostwriting Professionals",
          text: "Our team is made up of seasoned ghostwriters who excel in crafting compelling fiction across multiple genres from literary drama to pulse-pounding thrillers always with captivating prose and a storytelling-first approach.",
        },
        {
          title: "Bespoke Story Development",
          text: "We create customized stories that reflect your vision and target audience. Whether you’re starting from scratch or building on an idea, our fiction ghostwriting services adapt to your needs.",
        },
        {
          title: "Versatile Genre Expertise",
          text: "From sci-fi to romance to children’s fiction, our writers deliver nuanced, genre-specific fiction ghostwriting with finesse and depth, ensuring your project feels authentic and polished.",
        },
        {
          title: "Emotionally Engaging Narratives",
          text: "Every story is designed to connect. We develop vivid characters, believable arcs, and narratives that build an emotional bridge with your readers a signature of our fiction ghostwriting style.",
        },
        {
          title: "Publishing-Ready Quality",
          text: "We don’t just write we deliver professionally edited, polished manuscripts ready for submission or self-publishing. Timeliness, clarity, and quality are our top priorities.",
        },
        {
          title: "Independent Publishing Guidance",
          text: "We guide you through Amazon self-publishing and other self-publishing routes as part of our book publishing services, with transparency and expertise.",
        },
      ],
    },
    cta_2: {
      title: "Got A Story To Share? We Got The Perfect Words To Jot That Story Down!",
      text: "You have the full ground to be creative. Just brainstorm and let us handle the words. It’s easy to begin, connect with us through our website or live chat to learn more about our fiction ghostwriting packages."
    },
    default_portfolio: 1,
    sec6: {
      title: "Our Simple Fiction Ghostwriting & Publishing Process",
      highlight: "Fiction Ghostwriting",
      text: "From blank page to bookshelf Ink Nest Publishing is with you every step of the way.",
      points: [
        {
          title: "Research & Story Planning",
          text: "We begin by learning everything about your idea. Through collaborative discussions and research, our fiction ghostwriting team creates a solid story layout before writing the first chapter. Your vision leads the way.",
        },
        {
          title: "Chapter-by-Chapter Review",
          text: "You’re in the loop, always. Once we complete a chapter, you get to review it. Your feedback helps us shape the book exactly the way you imagined.",
        },
        {
          title: "Editing & Proofreading",
          text: "Every story deserves polish. Our editors refine the manuscript to ensure it’s clear, consistent, and error-free—whether it’s your first draft or a full novel.",
        },
        {
          title: "Artistic Formatting & Design",
          text: "Great books need to look the part. We offer formatting and basic design support—fonts, structure, and clean layout. Optional cover design guidance is available too.",
        },
        {
          title: "Self-Publishing & Book Marketing",
          text: "While we’re not affiliated with Amazon or any other platform, we can walk you through Amazon self-publishing and other options. We also provide optional book marketing services tailored to your goals.",
        },
        {
          title: "Final Release & Promotion",
          text: "Ready to launch? We assist with publishing and offer strategies to help promote your book to the right audience. Our team helps you prepare for a confident debut.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What exactly is fiction ghostwriting, and how does it work?",
        ans: "Fiction ghostwriting means you bring the idea, and we write the story for you. At Ink Nest Publishing, our writers collaborate with you to create original content—you stay in full control, and your name goes on the final book.",
      },
      {
        ques: "Do you write in all fiction genres?",
        ans: "Yes! Our fiction ghostwriters specialize in a wide range of genres—from mystery and sci-fi to romance, fantasy, and children’s fiction. Whatever your story idea, Ink Nest Publishing will match you with the right writer for your style and audience.",
      },
      {
        ques: "How long does it take to complete a ghostwriting project?",
        ans: "It depends on the project’s length and complexity. We’ll always give you a clear timeline upfront and keep you updated along the way.",
      },
    ],
  },
  {
    title: "Non-Fiction",
    link: "/ghostwriting/non-fiction",
    hero: {
      title: "Ink Nest Publishing’s Non-Fiction Ghostwriting Services That Make Your Story Matter",
      text: "At Ink Nest Publishing, our Non-Fiction Ghostwriting Service is designed for individuals, professionals, and entrepreneurs who want to share real stories, personal journeys, or subject-matter expertise in a way that resonates deeply with readers. Whether you’re crafting a memoir, a self-help book, a biography, or a business guide, we offer thoughtful, custom-tailored writing with clarity, depth, and authenticity.",
      quote: "Real stories. Real impact. Written with purpose."
    },
    sec2_new: {
      title: "Bring Your Real Story to Life with Non-Fiction Ghostwriting You Can Trust",
      text: [
        "Writing non-fiction takes more than facts; it requires structure, emotion, and the right tone. At Ink Nest Publishing, our non-fiction ghostwriters specialize in turning raw ideas, interviews, and outlines into engaging content that is informative, reflective, and emotionally compelling. Whether you’re aiming to build credibility, inspire others, or leave a legacy, we craft your book with lyrical structure, metaphorical richness, and reader clarity without compromising accuracy."
      ]
    },
    sec3_cards: {
      title: "Professional Non-Fiction Ghostwriting Backed by Research and Clarity",
      highlight: "Non-Fiction Ghostwriting",
      text: "Your ideas deserve to be written well and written honestly and we stick to that. We don’t just focus on style; we also prioritize transparency and integrity in every project. Our team delivers polished, customized content that never cuts corners. Each non-fiction ghostwriting assignment goes through a quality process, ensuring the copy is unique, tailored, and professionally handled.",
      cards: [
        {
          title: "Client Trust and Data Confidentiality",
          text: "We value your story and your privacy. When you choose Ink Nest Publishing, your personal information, interviews, and book drafts are kept strictly confidential. From secure communication to trusted account management, we maintain your trust through clear terms and professional respect. We also provide updates throughout the non-fiction ghostwriting process to keep you involved and in control."
        },
        {
          title: "Simple Pricing, No Hidden Charges",
          text: "We believe in transparent, honest service. Our non-fiction ghostwriting services come with flexible pricing plans and no hidden royalties or surprise fees. You pay for the quality writing and creative effort we provide, and the final manuscript is completely yours. Every detail is laid out before we start—from payment structure to timeline—because great service begins with clarity."
        },
        {
          title: "Collaborative Revisions Until You’re Happy",
          text: "Feedback is part of the journey. Throughout the non-fiction ghostwriting process, our team remains open to your input. We revise, fine-tune, and adjust the manuscript until it feels right to you. At Ink Nest Publishing, our goal is your satisfaction—not through false promises, but through genuine collaboration."
        },
        {
          title: "Dedicated Project Management and Support",
          text: "Each client is paired with a dedicated account manager who guides you from the first draft to the final handoff. Need help after hours? Our friendly support team is here to answer questions and keep things moving smoothly. With Ink Nest Publishing, you’re not just hiring a writer—you’re partnering with a full-service team that cares about your message."
        }
      ]

    },
    cta_2: {
      title: "Got A Story To Share? We Got The Perfect Words To Jot That Story Down!",
      text: "You have the full ground to be creative. Just brainstorm and let us handle the words. It’s easy to begin, connect with us through our website or live chat to learn more about our fiction ghostwriting packages."
    },
    default_portfolio: true,
    sec6: {
      title: "Ink Nest Publishing – Our Simple Yet Easy Non-Fiction Writing Process",
      highlight: "Non-Fiction",
      text: "Our Non-Fiction Ghostwriting Service is built around clarity, collaboration, and professionalism. From first idea to final release, we handle each step with attention to your voice and goals.",
      points: [
        {
          title: "Introductory Call",
          text: "We begin with a discovery call to understand your story, needs, and vision. Once you’re ready, we sign a clear, no-surprise agreement to move forward.",
        },
        {
          title: "Research & Outline",
          text: "Our non-fiction writers conduct deep research, then draft a clear outline based on your input. You review and approve before we move ahead.",
        },
        {
          title: "Content Writing",
          text: "With your feedback, we write the first draft. Every chapter reflects your message and you stay involved throughout revisions.",
        },
        {
          title: "Editing & Proofreading",
          text: "Our editors refine and correct the manuscript for structure, clarity, and accuracy—ensuring it’s 100% clean and ready to publish.",
        },
        {
          title: "Formatting & Design",
          text: "We format your manuscript to fit major self-publishing standards and can help with design elements like layout and font styling.",
        },
        {
          title: "Publishing & Marketing",
          text: "Though not affiliated with Amazon, we guide you through Amazon self-publishing and offer book marketing services to help promote your work effectively.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What is non-fiction ghostwriting?",
        ans: "It's when a professional writer helps you turn your real-life story or ideas into a well-written book in your voice, but with our writing help.",
      },
      {
        ques: "Will I own the rights to my book?",
        ans: "Yes, once the project is done, the book is 100% yours, including all rights.",
      },
      {
        ques: "Can I stay involved during the writing?",
        ans: "Absolutely. You’ll review outlines, drafts, and give feedback at every stage.",
      },
      {
        ques: "Why should I choose Ink Nest Publishing?",
        ans: "We make the writing process easy, honest, and tailored to you with no hidden charges or unrealistic promises.",
      },
    ]
  },
  {
    title: "Informative",
    link: "/ghostwriting/informative",
    hero: {
      title: "Ink Nest Publishing – Informative Writing Services For Clear, Credible, and Content",
      text: "At Ink Nest Publishing, our Informative Writing Services are built to do more than just share facts, they’re crafted to educate, engage, and build trust. Whether you need expert guides, brand-building content, or clear educational material, we deliver writing that’s accurate, approachable, and aligned with your voice. Every piece we create is rooted in real-world knowledge and backed by genuine experience, so your audience learns, connects, and keeps coming back.",
      quote: "Information is powerful only when it’s clear, trusted, and compelling."
    },
    sec2_new: {
      title: "Bring Your Real Story to Life with Non-Fiction Ghostwriting You Can Trust",
      text: [
        "Writing non-fiction takes more than facts; it requires structure, emotion, and the right tone. At Ink Nest Publishing, our non-fiction ghostwriters specialize in turning raw ideas, interviews, and outlines into engaging content that is informative, reflective, and emotionally compelling. Whether you’re aiming to build credibility, inspire others, or leave a legacy, we craft your book with lyrical structure, metaphorical richness, and reader clarity without compromising accuracy."
      ]
    },
    sec3_cards: {
      title: "Discover Your Creative Brilliance with Us",
      highlight: "Creative Brilliance",
      text: "We write with purpose every sentence crafted to inform and every paragraph designed to keep your readers engaged. Whether you’re a thought leader, educator, or entrepreneur, we help you create smart, reader-friendly content with a professional tone. With Ink Nest Publishing, informative writing means educating without overwhelming and inspiring without overselling.",
      cards: [
        {
          title: "Research-Based Articles",
          text: "Every piece we create is backed by credible sources and professional research. Our writers analyze data, trends, and verified information to ensure accuracy and trust. You’ll get writing that supports your reputation and reflects your field expertise. Informative writing must be built on truth and we make sure of it.",
        },
        {
          title: "How-To Guides & Tutorials",
          text: "We turn complex steps into easy-to-follow guides. From product manuals to service walkthroughs, we create structured content that helps users learn quickly and confidently. The best informative writing doesn’t just explain, it empowers readers to act.",
        },
        {
          title: "Reports & Case Studies",
          text: "Need to present results? We convert raw data into professional reports or case studies with digestible insights. It’s not just about numbers, it’s about telling a story your audience can understand. With Ink Nest Publishing, your informative writing becomes a tool for smarter decisions.",
        },
        {
          title: "Educational Content",
          text: "From workbooks to curriculum content, we help you deliver learning material that’s both digestible and effective. We keep the tone clear and the depth appropriate to your audience. With Ink Nest Publishing, educational informative writing is accurate, engaging, and learner-focused.",
        },
      ]
    },
    default_portfolio: 2,
    sec6: {
      title: "Our Easy To Understand Process",
      highlight: "Understand",
      text: "Our Informative Writing Service follows a thoughtful, transparent process to ensure every piece of content we create is accurate, engaging, and easy to understand. Whether it’s a guide, article, or educational material, we keep it clear, professional, and reader-friendly.",
      points: [
        {
          title: "Deep Research",
          text: "We begin with solid research, gathering insights from trusted sources to ensure your content is accurate and relevant. Informative writing starts with the truth. We make sure it’s backed by facts.",
        },
        {
          title: "Define the Goal",
          text: "Before we write, we identify the purpose of your content, who it’s for, and what it should achieve. Clarity of purpose makes the message sharper and more meaningful.",
        },
        {
          title: "Structure Logically",
          text: "We organize the content using headers, bullets, and clear formatting to help readers absorb the information with ease. In informative writing, structure helps the message land right.",
        },
        {
          title: "First Draft Creation",
          text: "Our writers build a draft that communicates your message in a simple, direct tone—never boring, always professional. At Ink Nest Publishing, informative writing is made to connect, not just instruct.",
        },
        {
          title: "Edit & Improve",
          text: "We revise the draft to tighten flow, improve clarity, and ensure the tone is just right for your audience. Great writing is thoughtful writing—we take the time to polish every line.",
        },
        {
          title: "Final Proofreading",
          text: "We check for any lingering grammar or style issues so the content is publication-ready and professional. Final touches make all the difference in impactful, informative writing.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What is informative writing?",
        ans: "Informative writing explains a topic clearly so readers can understand and learn from it.",
      },
      {
        ques: "Can I suggest topics for my content?",
        ans: "Yes! We welcome your ideas and make sure the final content fits your goals.",
      },
      {
        ques: "Does Ink Nest Publishing write content for websites or blogs?",
        ans: "Absolutely. We create informative content for websites, blogs, articles, and more.",
      },
      {
        ques: "How do I know the information is accurate?",
        ans: "We use trusted sources and research carefully to ensure everything we write is correct.",
      },
      {
        ques: "Why choose Ink Nest Publishing for informative writing?",
        ans: "We focus on clarity, accuracy, and quality, giving you content that truly connects with your audience.",
      },
    ]
  },
  {
    title: "Biography",
    link: "/ghostwriting/biography",
    hero: {
      title: "Professional Biography Writing Services That Captures The Essence Of Who You Really Are",
      text: "What if your life story could inspire someone else’s next chapter? At Ink Nest Publishing, we turn memories into meaningful words. Whether you’ve lived a life full of adventure, overcome adversity, or simply want to preserve your legacy for future generations our biography writing services are here to bring your story to life. With honesty, creativity, and deep respect for your voice, we craft compelling biographies that do more than inform they resonate, inspire, and endure.",
    },
    sec2_new: {
      title: "We Write Authentic, Compelling Biographies That Preserve Your Voice",
      text: [
        "We don’t just collect facts we dive deep into your timeline to preserve your most powerful moments. Our professional biography writers listen closely to your voice, using materials like journals, audio, and interviews to recreate your story with vivid, heartfelt detail. With Ink Nest Publishing, your biography becomes a lasting tribute to your experiences written with dignity and depth."
      ]
    },
    sec3_cards: {
      title: "Precise & Professional Biography Writing You Can Trust",
      highlight: "Biography Writing",
      text: "We believe every life holds a story worth sharing. As trusted professionals in biography writing, we make sure every project is handled with care, creativity, and precision, so your story shines exactly the way it deserves.",
      cards: [
        {
          title: "Words That Carry Wisdom",
          text: "Your biography should be more than dates and events. We infuse each chapter with meaning, context, and a compelling narrative arc—turning personal milestones into memorable life lessons that readers can connect with. Biography writing is both art and responsibility, and we take both seriously.",
        },
        {
          title: "Expert Ghostwriters, Trusted Process",
          text: "Our experienced ghostwriters are skilled at shaping biographies that reflect your voice. We ensure your story is accurate, respectful, and beautifully told. At Ink Nest Publishing, we never overpromise. Instead, we let real stories speak for themselves.",
        },
        {
          title: "Confidential, Collaborative & Custom",
          text: "We respect your privacy and treat your story with discretion. You’ll have full creative input at every stage—whether it’s reviewing drafts, adjusting the tone, or refining the message. Your life. Your voice. Our words carefully written, never misrepresented.",
        },
        {
          title: "Publish with Confidence, Not Confusion",
          text: "We don’t use logos, titles, or brand names we aren’t authorized to. If your biography is being published on Amazon, we’ll support the process honestly. From book publishing services to ethical marketing, we handle it the right way.",
        },
      ]
    },
    default_portfolio: 3,
    sec6: {
      title: "Our Biography Writing Workflow",
      highlight: "Biography Writing",
      text: "Our process mirrors our successes. Whether you’re an aspiring author or a business needing excellent content, we've got you covered.",
      points: [
        {
          title: "Initial Consultation",
          text: "Discuss your vision, goals, and key life events with our expert writers to set the foundation for your biography.",
        },
        {
          title: "Research",
          text: "Our team conducts thorough research, gathering all necessary details, anecdotes, and background information to enrich your story.",
        },
        {
          title: "Outline Creation",
          text: "We develop a detailed outline, structuring your biography to ensure a coherent and engaging narrative flow.",
        },
        {
          title: "Writing Drafts",
          text: "Our writers craft initial drafts, blending your experiences with compelling storytelling to create a captivating biography.",
        },
        {
          title: "Review and Revisions",
          text: "Collaborate with our writers to review drafts, provide feedback, and ensure the biography accurately represents your story.",
        },
        {
          title: "Final Editing",
          text: "We perform editing and proofreading, polishing the biography to perfection before delivering the final, ready-to-publish manuscript.",
        },
      ]
    },
    service_faq: [
      {
        ques: "How does the biography writing process work?",
        ans: "We start with a consultation, then move through research, writing, revisions, and final editing, keeping you involved at every step.",
      },
      {
        ques: "Can Ink Nest Publishing help if I only have a rough draft?",
        ans: "Yes, we can turn your rough notes or draft into a well-structured, professionally written biography.",
      },
      {
        ques: "Will I get to review and approve the chapters?",
        ans: "Absolutely! You’ll review each draft and share your feedback so we get everything just right.",
      },
      {
        ques: "Is my personal information safe with Ink Nest Publishing?",
        ans: "Yes, your story stays secure and confidential with us. We respect your privacy at every step.",
      },
      {
        ques: "Do I have to be famous to write a biography?",
        ans: "Not at all! Everyone has a story worth telling and we’re here to help you share yours.",
      },
    ]
  },
  {
    title: "Autobiography",
    link: "/ghostwriting/autobiography",
    hero: {
      title: "Capture Your Legacy with Autobiography Writing",
      text: "Every memory matters. At Ink Nest Publishing, our autobiography writing service empowers you to document your life in your own words, shaped by our professional storytellers who understand how to bring real experiences to life.",
    },
    sec2_new: {
      title: "Your story deserves to be written, and remembered.",
      text: [
        "Our team of professional ghostwriters works closely with you from the first word to the final edit. We prioritize authenticity, privacy, and storytelling that sounds like you, not like us. Whether you’re a public figure, educator, entrepreneur, or simply someone with a legacy to share, we’ll help you craft a detailed, engaging narrative that reflects your voice.",
        "From personal discussions to collaborative writing sessions, we handle each project with care and confidentiality. You can publish it privately for family or publicly for readers worldwide, the choice is always yours."
      ]
    },
    sec3_cards: {
      title: "Professional Autobiography Writing Services That Reflects You",
      highlight: "Autobiography Writing",
      text: "Our approach to autobiography writing is rooted in trust, talent, and truth. We don’t just write, we collaborate, listen, and bring your life experiences to the page in a way that is meaningful, respectful, and uniquely yours. Here’s how we make your story shine:",
      cards: [
        {
          title: "Personalized Storytelling",
          text: "We begin by understanding your journey, from childhood memories to life-defining moments, crafting an autobiography that genuinely represents your voice and vision.",
        },
        {
          title: "Professional Ghostwriters",
          text: "Our seasoned team has years of experience specifically in autobiography writing, ensuring your manuscript is polished, organized, and deeply engaging.",
        },
        {
          title: "Narratives That Resonate",
          text: "We specialize in building story arcs that not only inform but move readers, whether you’re writing for family, friends, or a broader audience.",
        },
        {
          title: "Confidentiality Guaranteed",
          text: "Your privacy is always protected. Every step of the writing process is handled with the highest level of discretion and care.",
        },
        {
          title: "Collaborative Process",
          text: "You’re involved in every chapter. From interviews to draft reviews, we value your feedback to ensure the final version is exactly how you envision it.",
        },
        {
          title: "Deadline-Driven Delivery",
          text: "We respect your time. Our team is committed to delivering high-quality autobiographies within your required timeframe, without compromising quality.",
        },
      ]
    },
    default_portfolio: 3,
    sec6: {
      title: "Our Step-by-Step Autobiography Writing Process",
      highlight: "Autobiography Writing",
      text: "At Ink Nest Publishing, our process is transparent, collaborative, and structured to help you feel confident every step of the way.",
      points: [
        {
          title: "Initial Consultation",
          text: "We begin by discussing your life experiences and goals, helping us understand what truly matters in your autobiography.",
        },
        {
          title: "Outline Creation",
          text: "A custom outline is developed, structuring the key events and themes that will guide your narrative flow.",
        },
        {
          title: "Interviews",
          text: "Through engaging interviews, we gather in-depth stories, reflections, and personal moments that add richness to your book.",
        },
        {
          title: "Draft Writing",
          text: "Our writers begin crafting your story, ensuring that your tone, message, and authenticity are preserved in the first draft.",
        },
        {
          title: "Review and Feedback",
          text: "You receive the draft for review. Your feedback is essential, and we refine the manuscript to make sure it feels right to you.",
        },
        {
          title: "Finalization",
          text: "Once revisions are complete, we deliver your finished manuscript, polished, professional, and ready for publication.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What is the fastest way to write a book?",
        ans: "We start with a detailed discussion, then outline, write, and polish your book quickly through a smooth, collaborative process.",
      },
      {
        ques: "Can Ink Nest Publishing assist me in publishing and marketing?",
        ans: "Yes, Ink Nest Publishing offers both publishing support and strategic book marketing services tailored to your needs.",
      },
      {
        ques: "How much time is required to write a book?",
        ans: "It depends on your content, but at Ink Nest Publishing, we usually complete full drafts within a few weeks to a few months.",
      },
      {
        ques: "What about my private information and copyright issues?",
        ans: "We ensure full confidentiality, and you retain 100% rights to your autobiography with Ink Nest Publishing.",
      },
      {
        ques: "What makes Ink Nest Publishing different from others?",
        ans: "We focus on authentic storytelling with a human touch, offering dedicated autobiography writing that reflects your real voice.",
      },
    ]
  },
  {
    title: "Memoir",
    link: "/ghostwriting/memoir",
    hero: {
      title: "Capture Your Story with Memoir",
      text: "Is Your Life Story Too Important to Forget? At Ink Nest Publishing, our memoir writing service is focused on those who want to preserve life’s unforgettable moments. Whether you’re navigating joy, trauma, change, or reflection, your story deserves to be told with honesty and care. Our experienced ghostwriters collaborate closely with you to bring your voice to the forefront. From heartfelt family stories to deeply personal journeys of growth, we write memoirs that feel real, not rehearsed. We don’t offer cookie-cutter writing; we build each memoir from scratch, rooted in your truth. “Memory fades, but memoirs last forever.” Let us help you capture your story in a way that will be cherished for generations to come.",
    },
    sec2_new: {
      title: "Thinking About Writing a Memoir But Don’t Know Where to Start?",
      text: [
        "Ink Nest Publishing offers a thoughtful memoir writing experience, built for individuals who want their memories transformed into lasting literature. We ask the right questions, listen deeply, and help you structure your story, all while writing in a tone that sounds like you, not us.",
        "From the first conversation to the final chapter, our team focuses on truth, tone, and trust. We don’t make flashy promises. Instead, we deliver a manuscript that preserves your history and resonates with your intended audience, whether that’s your family, your community, or the world.",
        "Even the quietest lives have stories that can speak volumes."
      ]
    },
    sec3_cards: {
      title: "Choose Ink Nest Publishing for Your Memoir Writing",
      highlight: "Memoir Writing",
      text: "As a trusted team of professional writers, we help transform your life story into a compelling, heartfelt memoir. Here’s what sets our memoir writing service apart:",
      cards: [
        {
          title: "Your Voice, Authentically Captured",
          text: "Our writers focus on understanding your personal journey to craft a memoir that sounds genuinely like you, not generic or scripted.",
        },
        {
          title: "Deep Experience in Memoir Writing",
          text: "With years of experience, our team specializes in emotionally impactful memoirs that connect deeply with readers.",
        },
        {
          title: "Personal Connection Through Storytelling",
          text: "We write memoirs that are not just informative but emotionally rich, making your story relatable and memorable.",
        },
        {
          title: "Respect for Your Privacy",
          text: "Every detail you share is treated with full confidentiality, and we approach your personal story with professionalism and empathy.",
        },
        {
          title: "Fully Collaborative Process",
          text: "You’re part of the journey. From outlining to final review, we include you in every step of the memoir writing process.",
        },
        {
          title: "Ready for Publishing or Personal Use",
          text: "We deliver polished, high-quality manuscripts that meet professional standards, whether for private legacy or wider publication.",
        },
      ]
    },
    default_portfolio: 3,
    sec6: {
      title: "Memoir Writing Process Made Simple",
      highlight: "Memoir Writing",
      text: "At Ink Nest Publishing, our process is built on care, clarity, and creativity, guiding you through each stage of your memoir writing journey with professional support.",
      points: [
        {
          title: "Let’s Talk First",
          text: "We begin with a one-on-one consultation to learn your story, background, and goals so we can personalize your memoir.",
        },
        {
          title: "Plan Your Storyline",
          text: "Our team researches your timeline and themes, building a strong outline to give your memoir a clear structure.",
        },
        {
          title: "Start the First Draft",
          text: "We write a compelling first version, using your voice and experiences to create a story that feels honest and engaging.",
        },
        {
          title: "You Give Feedback",
          text: "You review the draft and share your thoughts so we can adjust the content to better match your message and style.",
        },
        {
          title: "We Make Revisions",
          text: "Using your input, we polish the flow, strengthen the narrative, and ensure your memoir reads smoothly and emotionally.",
        },
        {
          title: "Final Book Delivery",
          text: "We deliver your finished manuscript, clean, complete, and ready for publishing or personal sharing, just as you envisioned.",
        },
      ]
    },
    service_faq: [
      {
        ques: "Can I write a memoir even if I’m not a writer?",
        ans: "Absolutely! At Ink Nest Publishing, we turn your memories into a professionally written memoir. You just need the story, we handle the writing.",
      },
      {
        ques: "How involved will I be in the writing process?",
        ans: "You’ll be involved at every step, from sharing your story to reviewing drafts, so the memoir truly reflects your voice.",
      },
      {
        ques: "Will my personal information be safe?",
        ans: "Your privacy matters to us. We treat your story and personal details with complete confidentiality and care.",
      },
      {
        ques: "What makes Ink Nest Publishing different?",
        ans: "We specialize in memoir writing with a personal touch, blending your experiences with professional storytelling that feels honest and human.",
      },
    ]
  },
  {
    title: "Book Publishing",
    link: "/book-publishing",
    hero: {
      bg: "",
      title: "Experience Hassle-Free Amazon Book Publishing With Us",
      text: "At Ink Nest Publishing, we value your voice and your vision. Publishing your book isn’t just about putting words on paper, it’s about crafting a legacy, building credibility, and touching readers’ lives. That’s why we walk with you through every step, from preparing your manuscript to making it available for readers worldwide. We don’t use buzzwords like “instant success” because we believe in real work and real results. With us, your book gets the attention it truly deserves.",
      title_second: "What You Can Expect from Our Book Publishing Services",
      points: [
        { bold: "Expert Guidance at Every Step ", text: "– Our editors, designers, and publishing experts work alongside you to prepare your book for a professional release. From structure and formatting to selecting the best platform for your genre, we guide you with clarity and care." },
        { bold: "Real Support, Real People ", text: "– We’re a team of passionate publishing professionals, not automated replies or call centers. When you have a question, you’ll get a thoughtful answer, and when you face a challenge, we help you solve it." },
        { bold: "Wide Distribution Network ", text: "– Our publishing support includes assisting you in getting your book listed on popular self-publishing platforms like Amazon KDP or IngramSpark. We never claim official affiliation, but we help you navigate these tools with confidence." },
      ]
    },
    secTwo: {
      title: "What Makes Ink Nest Publishing Different?",
      text: [
        "We’re more than just a service provider, we’re your creative partner. We understand the emotional weight behind every sentence you’ve written, and we treat your work with the respect it deserves.",
        "We don’t hide behind technical jargon or unrealistic timelines. Instead, we offer honest, achievable publishing plans that reflect your goals and resources. Whether you want a quiet release for your family memoir or a marketing push for your fiction novel, we help you take the right next step."
      ],
      img: "",
    },
    sec3: {
      title: "Eye-Catching Book Cover Designs That Sells, Just The Right Way to Publish",
      highlight: "Book Cover Designs",
      text: "At Ink Nest Publishing, we help writers bring their stories to life, authentically, responsibly, and professionally. Whether you want to publish your memoir, launch a children’s book, or explore self-publishing platforms like Amazon KDP, we guide you every step of the way.",
      cards: [
        {
          title: "Innovative Approach",
          text: "We don’t rely on outdated publishing methods. Ink Nest Publishing uses modern tools and creative strategies tailored to each author’s unique voice and genre. From manuscript assessments to custom book design and launch planning, every part of our approach is driven by quality and purpose, not hollow guarantees. Our goal isn’t just to publish books; it’s to elevate voices and bring meaningful stories to readers in a competitive market.",
        },
        {
          title: "Personalized Solutions",
          text: "There’s no template for a great book, and there shouldn’t be one for your publishing journey either. Our team offers tailored services designed around your goals, genre, and audience. Whether you want to publish a children’s book, promote your self-help guide, or get visibility on Amazon’s bookstore, we create personalized strategies that respect your voice and budget. You stay in control, and we handle the technical side with clarity and care.",
        },
        {
          title: "Collaboration",
          text: "Unlike agencies that take over your book or mislead you into losing your rights, we work in collaboration with our authors. Your voice is always central. We provide tools, support, and feedback, but the choices remain yours. Our authors retain full ownership, control pricing, and decide where and how to distribute their work. We’re here to support, not dictate. That’s the Ink Nest Publishing promise.",
        },
        {
          title: "Tailored Strategies",
          text: "Whether you’re writing a children’s book, a business guide, or a poetry collection, we customize your publishing journey. We don’t believe in one-size-fits-all; your book deserves a strategy as unique as your story.",
        },
      ]
    },
    default_portfolio: true,
    sec5: {
      title: "Reliable Book Publishing Services You Can Trust",
      text: "At Ink Nest Publishing, we offer a complete suite of book publishing services designed to support independent authors through every phase of their journey. Whether you’re looking to publish on Amazon, enhance your book with professional editing, or create a long-term author brand, we provide real solutions with honesty, quality, and transparency. We provide expert support for platforms like Amazon KDP, IngramSpark, and others, giving you full control, legal clarity, and professional polish.",
      cards: [
        {
          title: "Editing and Proofreading",
          text: "We refine manuscripts to ensure clarity, tone, and grammar, helping you present your story in the best light without changing your authentic voice.",
          img: icons_ill_2,
        },
        {
          title: "Cover Design",
          text: "Our professional designers create custom visuals that reflect your book’s theme, genre, and target audience. No templates, no shortcuts.",
          img: icons_bp_2,
        },
        {
          title: "Marketing Strategies",
          text: "From organic strategies to targeted ad planning, we help you promote your book while staying compliant with all platform guidelines.",
          img: icons_bp_3,
        },
        {
          title: "Distribution Channels",
          text: "We guide you through the process of publishing through platforms like Amazon KDP and others.",
          img: icons_bp_4,
        },
        {
          title: "Author Branding",
          text: "We help you build a strong author identity, focusing on visibility, consistency, and connection with your ideal readers.",
          img: icons_bp_5,
        },
        {
          title: "Manuscript Evaluation",
          text: "Our editorial team provides honest, constructive feedback to strengthen your manuscript’s structure, readability, and emotional impact.",
          img: icons_bp_6,
        },
        {
          title: "Publishing Consultation",
          text: "Confused about the process? We walk you through every option and requirement, from ISBNs to formats to pricing models, with no hidden agendas.",
          img: icons_bp_7,
        },
      ]

    },
    sec6: {
      title: "Step-by-Step Book Publishing Process at Ink Nest Publishing",
      highlight: "Ink Nest Publishing",
      text: "Publishing a book should be exciting, not overwhelming. Our clearly structured process gives you full transparency and control from draft to distribution:",
      points: [
        {
          title: "Manuscript Evaluation",
          text: "We start with a thorough assessment to understand your content, genre, and goals. No bots. Just experienced editors giving you honest feedback.",
        },
        {
          title: "Developmental Editing",
          text: "Our editors work with you to fine-tune your manuscript, strengthening its structure, pacing, and storytelling before polishing the language.",
        },
        {
          title: "Design and Formatting",
          text: "Next, our team formats your book professionally for print and digital platforms, while also designing a stunning, genre-appropriate cover.",
        },
        {
          title: "Publication",
          text: "We assist in setting up your book on trusted self-publishing platforms. You retain all rights. We help you publish on Amazon KDP and others ethically and correctly.",
        },
        {
          title: "Marketing",
          text: "Our book marketing services help increase your visibility using ethical, realistic promotional plans. No “top rankings in a day.” Just smart, steady exposure.",
        },
        {
          title: "Royalties",
          text: "You keep what’s yours. We explain royalty structures in detail and guide you in choosing the best compensation models based on your distribution goals.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What genres does Ink Nest Publishing support?",
        ans: "At Ink Nest Publishing, we work with a wide range of genres including fiction, nonfiction, memoirs, fantasy, children’s books, self-help, and more. We focus on understanding your unique voice and vision, so we can offer tailored support, no matter your genre. Our goal is to make your publishing journey both personal and professional.",
      },
      {
        ques: "How long does it take to publish my book with Ink Nest Publishing?",
        ans: "The publishing timeline varies depending on the services you choose, such as editing, design, or marketing. Typically, our authors move from manuscript to published book in 6 to 12 weeks. We never rush quality and always prioritize accuracy, transparency, and author involvement throughout the process.",
      },
      {
        ques: "Do I keep full rights to my book after publishing?",
        ans: "Yes, absolutely. At Ink Nest Publishing, you retain 100% ownership of your work. We support independent publishing models where authors have complete control over royalties, pricing, and distribution. Our job is to guide and support, not to take over your content.",
      },
      {
        ques: "What kind of book marketing services do you provide?",
        ans: "We offer customized book marketing services that include social media content, launch strategies, promotional guidance, and organic reach-building techniques. While we don’t guarantee sales or rankings, we help position your book for maximum visibility using ethical, proven marketing tactics.",
      },
    ]
  },
  {
    title: "E-Book Publishing",
    link: "/ebook-publishing",
  },
  {
    title: "Self Publishing",
    link: "/self-publishing",
  },
  {
    title: "Children's Book Publishing",
    link: "/childrens-book-publishing",
    hero: {
      title: "Need Help Polishing Your Children’s Book Before Publishing?",
      text: "At Ink Nest Publishing, we understand how important it is to get every word just right when writing for young readers. Whether it’s a picture book, early reader, or middle-grade story, we help authors create stories that are engaging, age-appropriate, and ready for Amazon or any platform of your choice. Our children book publishing include:",
      points: [
        {
          text: "Age-appropriate language editing for readability and comprehension",
        },
        {
          text: "Character and dialogue review to ensure consistency and engagement",
        },
        {
          text: "Pacing and structure checks for a smooth storytelling arc",
        },
        {
          text: "Grammar, spelling, and punctuation fixes",
        },
        {
          text: "Feedback on illustrations and text flow (for picture books)",
        },
        {
          text: "Final proofreading before submission or Amazon publishing",
        },
      ]
    },
    sec2_new: {
      title: "Turn Your Children’s Story into a Published Book with Ink Nest Publishing",
      text: [
        "Do you have a finished manuscript and need help getting it into the hands of young readers? Or are you just starting and unsure what comes next? Our team specializes in turning your vision into a professionally published book that stands out on Amazon and beyond. With child-friendly layouts, beautiful illustrations, and gentle editorial support, we make sure your story connects with kids—and leaves a lasting impression.",
        "Writing a children’s book is a heartfelt journey—and getting it published should be just as rewarding. At Ink Nest Publishing, we help bring your stories to life with complete children’s book publishing services, from formatting and illustration to editing, design, and Amazon self-publishing support. Whether you're sharing bedtime rhymes, picture book adventures, or early chapter stories, we guide you every step of the way with care and creativity."
      ]
    },
    sec3: {
      title: "4 Key Elements Every Successful Children's Book Needs",
      highlight: "Children's Book",
      text: "Creating a children’s book is not just about writing a fun story, it’s about making something kids and parents will love to read. These four key elements help ensure your book is engaging, polished, and ready to succeed.",
      cards: [
        {
          title: "A Clear, Age-Appropriate Storyline",
          text: "Children's books should be easy to follow, with simple language and a strong message. Whether it’s a fun adventure or a gentle life lesson, the story must suit the age group you're writing for—from toddlers to early readers.",
        },
        {
          title: "Engaging Illustrations",
          text: "Visuals are just as important as words in children’s books. Bright, expressive illustrations help tell the story, keep kids interested, and spark their imagination. The artwork should match the tone, pacing, and theme of the book.",
        },
        {
          title: "Professional Editing and Layout",
          text: "Even the best stories need a final polish. Proper grammar, smooth sentence flow, and well-formatted pages make the reading experience enjoyable and professional. Editing ensures your story reads clearly and confidently.",
        },
        {
          title: "High-Quality Publishing and Distribution",
          text: "Once your book is ready, it must be published in the right format—print, eBook, or both. Using trusted platforms like Amazon KDP helps get your book in front of parents, teachers, and readers everywhere.",
        },
      ]
    },
    default_portfolio: 3,
    sec5: {
      title: "Everything You Need to Publish a Beautiful Children’s Book",
      text: "At Ink Nest Publishing, we don’t just help you publish a children’s book—we help you craft an experience that kids, parents, and teachers will cherish. From editing and illustrations to final publishing on Amazon, we offer complete, end-to-end services to bring your story to life.",
      cards: [
        {
          title: "Professional Editing",
          text: "We fine-tune your manuscript for grammar, flow, and age-appropriate language. Whether it’s a picture book or an early reader, our editors make sure every word feels natural and clear for young audiences.",
          img: icons_ill_2,
        },
        {
          title: "Custom Illustration",
          text: "Our illustrators create original, child-friendly artwork that matches your story’s mood and characters. You choose the style—bright, playful, soft, or detailed—and we bring it to life, page by page.",
          img: icons_ill_3,
        },
        {
          title: "Storyboarding and Layout Design",
          text: "We help map out how text and illustrations work together. From page turns to pacing, the layout is designed to keep children engaged while making the book easy to read and visually balanced.",
          img: icons_ill_4,
        },
        {
          title: "Book Formatting (Print & eBook)",
          text: "Your book will be professionally formatted for both paperback and digital formats, including Amazon KDP and Kindle. We ensure fonts, spacing, and alignment all meet publishing standards and look great in print.",
          img: icons_ill_1,
        },
        {
          title: "Cover Design",
          text: "A great children’s book cover grabs attention and sets the tone. We design both front and back covers that are fun, colorful, and perfectly matched to your story and target age group.",
          img: icons_bp_2,
        },
        {
          title: "ISBN and Copyright Guidance",
          text: "We assist you in registering your ISBN and copyright so your book is professionally recognized and protected. We’ll also add a barcode if you're planning on distributing print copies.",
          img: icons_ill_2,
        },
        {
          title: "Amazon Publishing Support",
          text: "From setting up your KDP account to uploading your final files, we walk you through the entire publishing process. We’ll also help with writing your book description, selecting categories, and adding SEO-friendly keywords.",
          img: icons_ill_3,
        },
      ]
    },
    sec6: {
      title: "How We Bring Your Children's Book to Life – Step by Step",
      highlight: "Children's Book",
      text: "At Ink Nest Publishing, every children’s book goes through a thoughtful process designed to bring out the best in your story. Here's how we turn your idea into a beautifully published book:",
      points: [
        {
          title: "Manuscript Review & Editorial Feedback",
          text: "We begin by reading your story carefully and providing detailed feedback to improve clarity, tone, and structure—always keeping your target age group in mind.",
        },
        {
          title: "Professional Editing & Proofreading",
          text: "Once the structure is solid, our editors refine grammar, word choice, and sentence flow. Final proofreading ensures everything reads smoothly before moving forward.",
        },
        {
          title: "Illustration Planning & Style Selection",
          text: "We collaborate with you to choose the right illustration style and plan each scene visually. You’ll receive sketches and drafts before final artwork begins.",
        },
        {
          title: "Custom Illustrations & Visual Development",
          text: "Our illustrators create original, high-quality artwork that matches your story’s tone and pacing—bringing your characters and settings to life.",
        },
        {
          title: "Layout Design & Book Formatting",
          text: "We combine text and images into a clean, child-friendly layout. Each page is carefully designed for print and digital reading, including Amazon KDP formatting.",
        },
        {
          title: "Publishing & Launch Support",
          text: "Finally, we help you publish your book on Amazon and other platforms, including uploading files, setting up metadata, choosing categories, and crafting an SEO-friendly book description.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What file formats do you accept for formatting?",
        ans: "We accept manuscripts in Word (.doc/.docx), Google Docs, and PDF formats. If your file is in another format, just let us know—we'll help convert it.",
      },
      {
        ques: "Do you format for both print and eBook?",
        ans: "Yes, we provide professional formatting for both print (paperback/hardcover) and eBook platforms like Kindle, Apple Books, and more. Each version is optimized to meet platform-specific requirements.",
      },
      {
        ques: "Can I request changes after formatting is complete?",
        ans: "Absolutely. We offer a round of free revisions to make sure your layout looks just right. Your satisfaction is our priority.",
      },
    ]
  },
  {
    title: "Barnes & Noble",
    link: "/barnes-and-noble",
  },
  {
    title: "Amazon Publishing",
    link: "/amazon-publishing",
  },
  {
    title: "Audio Book Publishing",
    link: "/audio-book-publishing",
    hero: {
      bg: "",
      title: "Audio Book Narration Services That Feels Like It Was Written to Be Heard",
      text: [
        "Thinking about turning your book into something listeners can enjoy on the go? At Ink Nest Publishing, we offer professional audiobook services that bring your story to life through voice. Our team works with experienced narrators who understand tone, clarity, and emotional delivery, making sure your book is not just read, but truly felt by your audience.",
        "Whether it’s fiction, memoir, or educational content, our audiobook production process is built for quality. From voice selection to final mastering, we ensure every word is captured with precision, helping you connect with listeners across platforms like Audible and beyond."
      ]
    },
    sec2_new: {
      title: "Let Your Book Speak—Literally with Our Audiobook Narration Services",
      text: [
        "Ever wondered what your book would sound like if it truly spoke to your audience? At Ink Nest Publishing, our audiobook service is built to do exactly that, transform your written words into a rich listening experience. We match your story with the right voice, tone, and pacing to make sure your message lands just the way you imagined.",
        "Whether you’re looking to expand your book’s reach, engage a wider audience, or simply bring your characters to life through sound, we’ve got you covered. From script prep to studio-quality narration and final mastering, every step is handled with care and precision. Turn your words into an unforgettable listening experience."
      ]
    },
    sec3_cards: {
      title: "Bring Your Story to Life with an Audiobook",
      highlight: "Audiobook",
      text: "At Ink Nest Publishing, we offer a complete audiobook narration service that captures your book’s tone, emotion, and message, helping your story resonate with listeners around the world. Here’s why our process stands out:",
      cards: [
        {
          title: "Narrators Who Match Your Vision",
          text: "We help you choose a voice artist who fits your book’s mood, genre, and intended audience.",
        },
        {
          title: "Experienced Audio Production Team",
          text: "Our team has hands-on experience in professional audiobook narration, ensuring smooth pacing, clarity, and emotional depth.",
        },
        {
          title: "Emotionally Engaging Delivery",
          text: "We specialize in making audiobooks come alive, connecting listeners with every word through tone, pause, and inflection.",
        },
        {
          title: "Confidential and Respectful Handling",
          text: "Your manuscript and voice direction are handled with full confidentiality and attention to your creative expectations.",
        },
        {
          title: "Client Collaboration at Every Stage",
          text: "We include your feedback after sample recordings and throughout editing, so the final version reflects your goals.",
        },
      ]
    },
    default_portfolio: 3,
    sec6: {
      title: "Our Smooth Audiobook Narration Process",
      highlight: "Audiobook Narration",
      text: "Our step-by-step process ensures your audiobook sounds professional, natural, and emotionally engaging, perfect for self-publishing or personal use.",
      points: [
        {
          title: "Voice Selection",
          text: "We start by helping you choose the right narrator based on your book’s tone, audience, and style.",
        },
        {
          title: "Script Review",
          text: "Our team reviews your manuscript and prepares it for audio, marking tone shifts, pauses, and pronunciations.",
        },
        {
          title: "Recording Begins",
          text: "A professional narrator records your audiobook in a high-quality studio, capturing the right pace, clarity, and emotion.",
        },
        {
          title: "Review and Feedback",
          text: "You listen to a sample, share your feedback, and we ensure the narration feels just right before completing the full book.",
        },
        {
          title: "Editing and Mastering",
          text: "We edit and master the audio to meet industry standards, like removing noise and ensuring consistent quality.",
        },
        {
          title: "Final Delivery",
          text: "You receive the polished audiobook in your preferred format, ready for distribution or upload to platforms like Amazon Audible.",
        },
      ]
    },
    service_faq: [
      {
        ques: "Do you offer professional narration for audiobooks?",
        ans: "Yes, Ink Nest Publishing provides high-quality audiobook narration using skilled voice artists suited to your genre and tone.",
      },
      {
        ques: "Can I choose the voice for my audiobook?",
        ans: "Absolutely! We let you review and select from a range of voice samples to find the perfect match for your story.",
      },
      {
        ques: "Will I get the final audio files to use anywhere?",
        ans: "Yes, we provide full audio files in your preferred format, ready for upload to platforms like Amazon Audible or personal distribution.",
      },
      {
        ques: "Do I own the rights to my audiobook?",
        ans: "You retain full ownership of your audiobook and narration files once the project is complete.",
      },
    ]
  },
  {
    title: "Book Marketing",
    link: "/book-marketing-services",
    hero: {
      bg: "",
      title: "Want Your Story to Reach A Wider Audience? Trust Our Comprehensive Book Marketing Services Now!",
      text: "Have you poured your heart into your manuscript but aren’t sure how to get it noticed? At Ink Nest Publishing, we help authors grow their reach with honest, creative, and strategic book marketing no hype, no shortcuts. As an independent book marketing service provider, we specialize in supporting self-published and indie authors with impactful campaigns that get results.",
      title_second: "What We Help With:",
      points: [
        { text: "Stunning visual assets to make your book stand out" },
        { text: "Engaging book descriptions and back-cover copy" },
        { text: "Multi-platform promotional strategies" },
        { text: "Ethical, transparent marketing that respects your voice" },
      ],
      quote: "Your story is powerful now let’s give it the spotlight it deserves.",
    },
    secTwo: {
      title: "All Set To Promote Your Book Just the Right Way? Try Our Creative Book Marketing Services",
      text: [
        "At Ink Nest Publishing, we transform your literary vision into a compelling presence. As an independent book marketing company, we help authors around the world connect with their ideal readers through ethical, custom-built marketing strategies.",
        "Whether you’re launching a first book or expanding your reader base, we provide the tools and creativity to elevate your work without overpromising or imitating third-party brands."
      ],
      img: "",
    },
    sec3: {
      title: "The Best Online Book Marketing Services On Your Fingertips ",
      highlight: "Book Marketing",
      text: "We help you connect with real readers through honest and impactful marketing. At Ink Nest Publishing, we combine strategy with creativity to make sure your book stands out,  not by making false claims but by building genuine interest across the right platforms.",
      cards: [
        {
          title: "Book Launch and Promotions",
          text: "Your book launch is more than a release—it’s a moment to connect. We organize virtual launch events, host reader discussions, and arrange live Q&As to boost excitement. Through authentic storytelling and smart planning, we turn your book promotion into an experience your audience won’t forget. We don’t just promote books, we promote relationships.",
        },
        {
          title: "Advertising",
          text: "Want your book to grab attention? Our creative team builds eye-catching ads and visuals that reflect your book’s message. We run ad campaigns using proven methods that help you reach readers in crowded markets—no hype, just solid strategy and design. From graphic-rich print ads to short video promos, we focus on what works.",
        },
        {
          title: "Social Media Marketing",
          text: "We help authors build real communities online. Our team manages your social presence, creates reader-friendly content, and shares posts that connect emotionally and visually. Whether it’s Instagram, Facebook, or other platforms, we create a strategy that grows your book’s visibility in an honest, audience-first way, encouraging people to like, share, and talk about your story.",
        },
        {
          title: "SEO & Content Marketing",
          text: "Great books deserve to be discovered. We write high-quality blogs, articles, and posts that show off your writing and help your book get found online. By using the right keywords and SEO strategies, we help your book rank higher in searches, guiding the right readers to your story organically. No tricks. Just content that clicks.",
        },
      ]
    },
    default_portfolio: true,
    sec5: {
      title: "Book Marketing That Connects",
      text: "At Ink Nest Publishing, we offer ethical and author-focused book marketing services to help your work reach the right readers. With strategies built on research, creativity, and transparency, we guide you from planning to promotion, one real step at a time.",
      cards: [
        {
          title: "Social Media Campaigns",
          text: "We build and manage custom campaigns to promote your book across relevant platforms. With thoughtful visuals, engaging posts, and author-reader interaction, we build awareness and grow your online presence organically.",
          img: icons_ill_1,
        },
        {
          title: "Media Outreach",
          text: "We reach out to credible bloggers, influencers, and media outlets with personalized pitches and stories to help build your book’s visibility, reviews, and public interest—no bots, no spam, just meaningful outreach.",
          img: icons_ill_2,
        },
        {
          title: "Launch Plan",
          text: "We build a realistic and personalized launch plan with events, promotions, and outreach you can actually use, helping you achieve the best results while staying true to your voice.",
          img: icons_ill_3,
        },
        {
          title: "Market Research",
          text: "We study the market landscape to help you understand your target readers, spot current trends, and identify competition. This allows us to build a clear, focused marketing path tailored to your book’s unique strengths.",
          img: icons_ill_4,
        },
        {
          title: "Branding & Positioning",
          text: "Our team helps define your author’s brand and positioning. We craft messaging and identity that speak to your readers, making sure your book stands out in a crowded marketplace, honestly and effectively.",
          img: icons_ill_1,
        },
        {
          title: "Cover Designs",
          text: "First impressions matter. We create eye-catching, professionally designed covers that align with your genre and draw readers in without false promises or misleading visuals.",
          img: icons_ill_2,
        },
        {
          title: "Book Description",
          text: "Our content specialists write reader-focused descriptions that highlight the essence of your book, drawing attention to its key themes and helping readers decide if it’s right for them.",
          img: icons_ill_3,
        },
      ]
    },
    sec6: {
      title: "Boost Your Book’s Visibility with Ethical, Honest Marketing That Converts",
      highlight: "Honest Marketing",
      text: "We offer transparent and creative book marketing services tailored to your goals, your genre, and your voice. Whether you’re navigating Amazon self publishing or looking to promote your book after release, we build strategies that are practical, personal, and proven to connect with readers.",
      points: [
        {
          title: "Discovery & Positioning",
          text: "We begin by learning your story, not just your book, but your goals, audience, and platform needs. We analyze current trends, reader behavior, and relevant markets to position your book where it fits naturally and has room to grow. No guesswork, just clear, honest direction.",
        },
        {
          title: "Strategy Mapping",
          text: "Our team builds a customized marketing plan with timelines, messaging, and recommended platforms. Whether your focus is Amazon book publishing, social media, or email marketing, we help you create a plan that’s focused on visibility, not vanity.",
        },
        {
          title: "Creative & Content Development",
          text: "We develop professional materials that speak to your audience. From impactful cover visuals to compelling blurbs, author bios, and promo content, everything is tailored to your tone and readers. We avoid hype and stick to clarity that converts.",
        },
        {
          title: "Campaign Execution",
          text: "We implement multi-channel outreach, including ethical ad placements, book promotion, influencer collaborations, and organic social media engagement. Our team also assists in coordinating launch-day buzz that feels real, not forced.",
        },
        {
          title: "Reader Engagement",
          text: "We go beyond posting—we create conversations. By interacting with followers, encouraging shares, and facilitating Q&As or reader forums, we help you build loyal connections that extend beyond the book page.",
        },
        {
          title: "Analytics & Adjustments",
          text: "Our work doesn’t end at launch. We monitor key performance data, reader feedback, and channel responses. Based on results, we refine your campaigns to improve engagement, boost visibility, and support long-term growth.",
        },
      ]
    },
    service_faq: [
      {
        ques: "How do book marketing services work with Ink Nest Publishing?",
        ans: "At Ink Nest Publishing, our book marketing services help promote your book by identifying your target audience, creating tailored campaigns, and using proven strategies to increase visibility across digital platforms. Every plan is personalized to fit your book’s unique goals.",
      },
      {
        ques: "How much do Ink Nest Publishing’s book marketing services cost?",
        ans: "Our pricing depends on your project size, marketing scope, and the services you choose. We offer flexible and transparent packages designed for different stages of your publishing journey. Contact Ink Nest Publishing for a free consultation and quote.",
      },
      {
        ques: "Who offers book marketing services online?",
        ans: "Many companies and freelancers provide book marketing, but Ink Nest Publishing focuses on personalized, ethical strategies. We don’t believe in gimmicks—just real support, honest promotion, and creative storytelling that connects with readers.",
      },
      {
        ques: "What makes Ink Nest Publishing different from other book marketing companies?",
        ans: "Unlike companies that offer one-size-fits-all solutions, Ink Nest Publishing partners closely with authors. We prioritize transparency, thoughtful branding, and measurable strategies, always focused on your book’s success.",
      },
    ]
  },
  {
    title: "Amazon Paid Ads",
    link: "/amazon-paid-ads",
    hero: {
      bg: "",
      title: "Scale Your Reach with Proven Amazon Ad Strategies ",
      text: "Looking to promote your book online? With our Book Marketing Services and Amazon Paid Ads Service, we help authors reach the right readers. From optimizing your book’s Amazon presence to managing targeted ads, we work with your goals in mind, all while staying true to platform rules and reader trust."
    },
    sec2_new: {
      title: "Get Seen. Get Clicks. Get Results on Amazon",
      text: [
        "Want to grow visibility without risking your reputation? We get it. Ink Nest Publishing’s Amazon Paid Ads Services are fully aligned with Google Ads and Amazon Advertising policies. That means no clickbait, no impersonation, and no overhyped claims. Just authentic book promotion handled by experienced professionals who know the value of trust.",
        "Your story deserves a spotlight. Let us help you reach real readers through real results, one ethical campaign at a time. From Amazon keyword targeting to sponsored ad management, every step is designed to maximize your reach while protecting your brand’s integrity. You’ll receive honest performance updates, clear expectations, and marketing that works for real authors, not just algorithms."
      ]
    },
    sec3_cards: {
      title: "Sell More Books with Targeted Amazon Campaigns",
      highlight: "Audiobook",
      text: "With Ink Nest Publishing’s Amazon Paid Ads Service, we don’t just write your book we help it get found. Our targeted ad strategies are tailored for authors, driving real traffic and boosting your book’s visibility on Amazon. More eyes, more clicks, more readers.",
      cards: [
        {
          title: "Targeted Ad Campaigns",
          text: "We create custom Amazon ad campaigns that reach the right readers based on your book’s genre, keywords, and audience behavior.",
        },
        {
          title: "Keyword Optimization Strategy",
          text: "We research and select high-performing keywords to ensure your ads appear in relevant searches, maximizing visibility and conversions.",
        },
        {
          title: "Ad Copywriting Support",
          text: "Our team crafts compelling ad copy that draws clicks and encourages readers to explore and buy your book.",
        },
        {
          title: "Daily Budget Management",
          text: "We help you manage ad spend effectively—allocating your budget smartly to get the most out of every dollar.",
        },
        {
          title: "Performance Analytics Tracking",
          text: "We monitor ad performance closely with reports and insights, helping you understand what’s working and how to improve.",
        },
      ]
    },
    default_portfolio: 3,
    sec6: {
      title: "Our 6-Step Ad Success Process",
      highlight: "6-Step Ad",
      text: "Let your words shine, while we handle the spotlight. At Ink Nest Publishing, our Amazon Paid Ads service is designed to do one thing get your book noticed. From targeting the right readers to smart budgeting, we take the guesswork out of advertising. Whether you’re launching your first title or scaling a series, we’ve got your back with a strategy that works.",
      points: [
        {
          title: "Initial Consultation",
          text: "We start by understanding your book, goals, and audience to tailor an ad plan that fits your vision.",
        },
        {
          title: "Market Research",
          text: "We dig into trends, competitors, and buyer behavior to know exactly where and how to place your ads.",
        },
        {
          title: "Keyword Targeting",
          text: "We identify powerful keywords to get your book in front of readers who are actively searching.",
        },
        {
          title: "Campaign Setup",
          text: "Our experts build Amazon ad campaigns designed for maximum reach, relevance, and conversion.",
        },
        {
          title: "Daily Monitoring",
          text: "We track your ad performance every day, making sure your budget is used wisely and efficiently.",
        },
        {
          title: "Ongoing Optimization",
          text: "We refine and tweak your campaigns regularly to boost results and lower costs over time.",
        },
      ]
    },
    service_faq: [
      {
        ques: "How do Amazon Paid Ads work with Ink Nest Publishing?",
        ans: "We set up and manage targeted ads that appear on Amazon to help your book reach the right audience.",
      },
      {
        ques: "Can I set my own ad budget?",
        ans: "Yes, Ink Nest Publishing works with your preferred budget and adjusts the strategy to make every dollar count.",
      },
      {
        ques: "How long before I see results?",
        ans: "Most authors begin seeing traction within 1–2 weeks, depending on your genre and campaign type.",
      },
      {
        ques: "Do I need an Amazon Author Central account?",
        ans: "It’s recommended, and we’ll guide you through it if needed. It helps track reviews and optimize listings.",
      },
      {
        ques: "Will I get updates on my ad performance?",
        ans: "Absolutely. Ink Nest Publishing provides regular performance reports so you can see what’s working.",
      },
    ]
  },
  {
    title: "Book SEO And SEM",
    link: "/book-seo-and-sem",
    hero: {
      bg: "",
      title: "Be Found, Be Read",
      text: "Looking to promote your book online the smart way? With Ink Nest Publishing’s Book SEO & SEM Service, we help your work rise above the noise. From optimizing your Amazon book listing to increasing your Google presence, we ensure your book gets seen by readers who are actively searching. Whether you want to publish on Amazon or boost your already published title, our strategies are built for long-term results and meaningful reach. Words matter but so does where they show up."
    },
    sec2_new: {
      title: "Book SEO That Works",
      text: [
        "Ink Nest Publishing’s Book SEO & SEM Services are crafted to help authors get discovered through both Amazon and Google search. We use proven optimization strategies no shortcuts, no spammy tricks. Just real data, thoughtful content, and a sharp understanding of how Amazon Book Publishing and Google Search really work.",
        "We help you build your online presence with keyword-rich listings, metadata optimization, and SEO-friendly author profiles. The result? Better visibility for your book, more clicks, and higher conversions without compromising your brand. If you’re asking, “How do I promote my book ethically and effectively?” this is it."
      ]
    },
    sec3_cards: {
      title: "BOOK SEO & SEM Services",
      highlight: "Book SEO & SEM",
      text: "Listing Optimization Strategy. We optimize your Amazon book page with powerful keywords, compelling copy, and reader-focused design to boost discoverability.",
      cards: [
        {
          title: "Author Profile SEO",
          text: "We strengthen your Amazon Author Central and Google presence with keyword-rich bios and search-friendly descriptions.",
        },
        {
          title: "Google Search Integration",
          text: "We help build your book’s presence on Google using targeted content and search engine marketing tools to attract new readers.",
        },
        {
          title: "Sales Copy Enhancement",
          text: "Our team rewrites your book title, subtitle, and description to improve clarity, SEO impact, and clickability.",
        },
        {
          title: "Keyword Research Report",
          text: "You’ll receive a full breakdown of the best-performing search terms related to your book, genre, and reader intent.",
        },
        {
          title: "Search Ad Alignment",
          text: "If you’re running Google or Amazon ads, we make sure your SEO and SEM strategies are perfectly aligned for optimal impact.",
        },
      ]
    },
    default_portfolio: 3,
    sec6: {
      title: "Our Book SEO & SEM Process",
      highlight: "Book SEO & SEM",
      text: "Let your words shine while we handle the search engines. At Ink Nest Publishing has crafted a step-by-step method that helps authors enhance their online visibility ethically and effectively.",
      points: [
        {
          title: "Author Discovery Call",
          text: "We begin with a conversation to understand your goals, book niche, and audience profile.",
        },
        {
          title: "SEO Audit",
          text: "We review your current listings, search performance, and competition to pinpoint growth opportunities.",
        },
        {
          title: "Keyword Research",
          text: "We identify high-ranking and genre-relevant keywords that will help your book surface in reader searches.",
        },
        {
          title: "Page Optimization",
          text: "Our team revamps your Amazon page and author profile using best practices for SEO and sales engagement.",
        },
        {
          title: "Google Presence Setup",
          text: "We support your discoverability with off-Amazon SEO strategies like website optimization and search result listings.",
        },
        {
          title: "Reporting & Refinement",
          text: "You’ll receive progress updates, traffic data, and ongoing adjustments to stay ahead of trends and competition.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What does Book SEO & SEM mean?",
        ans: "It’s the process of improving your book’s visibility on Amazon and Google search using keyword optimization and strategic content.",
      },
      {
        ques: "How can SEO help me promote my book?",
        ans: "By optimizing your book’s listing and author profile, readers can find your book more easily, especially through organic search.",
      },
      {
        ques: "Do I need this if I already publish on Amazon?",
        ans: "Yes! Publishing is just step one. Our SEO helps you compete and stay visible in a crowded marketplace.",
      },
      {
        ques: "Will I need a website or blog?",
        ans: "Not necessarily, but it helps. If you don’t have one, we focus more on optimizing your Amazon and Google listings.",
      },
      {
        ques: "Is this service only for new books?",
        ans: "No, Ink Nest Publishing’s Book Marketing Services help both new and existing books gain lasting visibility and sales traction.",
      },
    ]
  },
  {
    title: "Digital Marketing",
    link: "/digital-marketing",
    hero: {
      bg: "",
      title: "Transform Your Digital Marketing Approach",
      text: "Looking to promote your book across more than just Amazon? With Ink Nest Publishing’s Digital Marketing Services, we help authors expand their reach beyond the bookstore. From email campaigns and social media promotion to search engine visibility and content marketing, we tailor every strategy to your goals. Whether you’re new to Amazon Book Publishing or ready to publish on Amazon, we’re here to grow your presence ethically and effectively.",
      title_second: "Made for Modern Authors",
      text_second: "If you’ve chosen Amazon Self Publishing, your next step is getting noticed. That’s where we come in. Ink Nest Publishing offers Book Marketing Services designed for the digital world because writing your book was just the beginning. With our flexible and customized marketing plans, you’ll reach real readers on platforms that matter: Google, Facebook, Instagram, and beyond. Whether it’s children’s book publishing or a memoir launch, our marketing helps your message find a home."
    },
    sec2_new: {
      title: "Purposeful Promotion, Real Results",
      text: [
        "Want to reach readers without gimmicks or guesswork? We’ve got you covered. Ink Nest Publishing’s Digital Marketing Services are built on trust, creativity, and results that last. We don’t believe in flashy promises we believe in consistent visibility, meaningful content, and smart targeting that speaks directly to your audience.",
        "Whether you want to promote my book, build an author brand, or boost engagement, our team uses the best digital marketing practices from SEO to social storytelling to keep your book in front of the right people."
      ],
    },
    sec3_cards: {
      title: "Digital Marketing Services – Ink Nest Publishing",
      highlight: "Digital Marketing",
      text: "Unlock the true potential of your book with our dynamic digital marketing strategies designed for maximum impact. Connect with your ideal readers while preserving authenticity and building lasting trust in your brand!",
      cards: [
        {
          title: "Content Marketing Campaigns",
          text: "We create valuable content (blogs, articles, visuals) around your book that drives engagement and improves search rankings.",
        },
        {
          title: "Social Media Strategy",
          text: "We plan and manage social posts to connect with your audience where they already are—Facebook, Instagram, LinkedIn, and more.",
        },
        {
          title: "Marketing Plans",
          text: "Build a loyal reader base through targeted email sequences, newsletter campaigns, and launch announcements.",
        },
        {
          title: "SEO Optimization Support",
          text: "We improve your website or Amazon page visibility by optimizing it for high-ranking keywords related to your book.",
        },
        {
          title: "Traffic & Conversion Boosting",
          text: "We guide you in turning visitors into readers using landing pages, lead magnets, and ad funnels that work.",
        },
        {
          title: "Author Branding Setup",
          text: "From profile photos to bios, we help shape a consistent, trustworthy online image across your digital channels.",
        },
      ]
    },
    default_portfolio: 3,
    sec6: {
      title: "Our Digital Marketing Process",
      highlight: "Digital Marketing",
      text: "Let your story travel far with strategy, soul, and smart marketing.",
      points: [
        {
          title: "Discovery Session",
          text: "We learn about your book, publishing goals, target readers, and platforms you want to focus on.",
        },
        {
          title: "Platform Audit",
          text: "We review your current online presence across Amazon, social media, and search engines to identify growth areas.",
        },
        {
          title: "Custom Strategy Plan",
          text: "We develop a digital marketing roadmap designed to meet your goals—from visibility to email growth.",
        },
        {
          title: "Content & Campaign Creation",
          text: "We create content, social media posts, SEO-rich blurbs, and email campaigns tailored to your voice and genre.",
        },
        {
          title: "Launch & Monitor",
          text: "We launch your campaigns and track performance metrics to ensure every move brings results.",
        },
        {
          title: "Review & Optimize",
          text: "We regularly update your campaigns based on data, trends, and feedback to keep things fresh and effective.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What makes Ink Nest Publishing’s Digital Marketing Services different?",
        ans: "We combine creative storytelling with data-driven digital strategies, ideal for authors who want to grow their audience ethically.",
      },
      {
        ques: "Do I need to have a website?",
        ans: "Not necessarily, but we can help you build or optimize one if you want to expand beyond Amazon and grow your brand.",
      },
      {
        ques: "Can I choose which platforms to focus on?",
        ans: "Absolutely. Whether it’s social media, or SEO, we build a plan that fits your comfort zone and your book’s audience.",
      },
      {
        ques: "I’ve already published, can I still use this?",
        ans: "Yes. Whether you’re launching or relaunching, Ink Nest Publishing’s Book Marketing Services are perfect for both new and existing authors.",
      },
    ]
  },
  {
    title: "Proofreading and Editing",
    link: "/proofreading-and-editing",
    hero: {
      bg: "",
      title: "Polish Your Manuscript with Expert Book Editing Services",
      text: "Is your book ready to be read, or does it need one last polish? At Ink Nest Publishing, our best editing services are clearly about catching typos and every error that stops your book from being the best seller. It’s about helping your story land exactly the way you intended, clear, powerful, and ready for your readers.",
      title_second: "Our Editing Services Include:",
      points: [
        { text: "Improve structure, pacing, and content flow" },
        { text: "Refine tone, transitions, and sentence style" },
        { text: "Fix grammar, spelling, punctuation, and clarity" },
        { text: "Final polish before print or digital release" },
        { text: "Honest editorial guidance to strengthen your work" },
      ]
    },
    secTwo: {
      title: "Professional Book Editing Services For Your Ease",
      text: "Unlock your story’s full potential with Ink Nest Publishing’s expert editing services. We collaborate closely with authors to enhance every aspect of your manuscript, refining its structure, language, tone, and clarity. From developmental editing to final proofreading, our skilled editors ensure that your work is clear, cohesive, and captivating from beginning to end.",
      img: "",
    },
    sec3: {
      title: "Refine, Reshape, and Reach Readers",
      highlight: "Reach Readers",
      text: "Want to learn more about how we can help you publish your book? We’re here to support your publishing goals whether you’re looking to publish on Amazon or simply need expert guidance through professional book publishing services.",
      cards: [
        {
          title: "Line Editing",
          text: "Our experienced editors at Ink Nest Publishing carefully review each sentence to enhance clarity, tone, and structure. We focus on improving readability by refining sentence flow and selecting the right words for your audience. Line editing is a key part of our book editing services, helping make your content more engaging and easier to understand without changing your unique voice.",
        },
        {
          title: "Proofreading",
          text: "Before your manuscript is ready to publish, our proofreaders perform a detailed final check. We correct grammar, punctuation, and formatting issues to ensure a clean, professional finish. This last step in our book editing services helps you present your book confidently to readers, retailers, and publishing platforms.",
        },
        {
          title: "Developmental Editing",
          text: "Our professional editors provide deep feedback on your book’s structure, character arcs, pacing, and narrative flow. Whether you’re working on fiction or nonfiction, we help strengthen your storytelling so your book connects with readers and exceeds expectations.",
        },
        {
          title: "Copy Editing",
          text: "Our copy editors focus on polishing your manuscript’s mechanics. Grammar, consistency, sentence clarity, and word usage. We help ensure your writing is smooth, error-free, and easy to understand without altering your unique voice.",
        },
      ]
    },
    portfolio: [
      portfolio_book_ill_1,
      portfolio_book_ill_2,
      portfolio_book_ill_3,
      portfolio_book_ill_4,
      portfolio_book_ill_5,
      portfolio_book_ill_6,
      portfolio_book_ill_7,
      portfolio_book_ill_8,
    ],
    sec5: {
      title: "Want Your Book to Sound Polished and Professional? Get In Touch",
      text: "At Ink Nest Publishing, we offer a full suite of book editing services designed to refine your manuscript with care and clarity. Here’s how we help you bring out your book’s best version:",
      cards: [
        {
          title: "Copy Editing",
          text: "We correct grammar, punctuation, and consistency issues while protecting your voice. Every manuscript deserves a clean, professional polish and we make sure it gets there.",
          img: icons_ill_1,
        },
        {
          title: "Proofreading",
          text: "Our proofreaders take one final pass to catch any lingering mistakes before you hit publish. It’s a small detail that makes a big difference.",
          img: icons_ill_2,
        },
        {
          title: "Content Editing",
          text: "We make sure your message is clearly delivered by tightening structure, fixing repetition, and improving logical flow, all while keeping your ideas intact.",
          img: icons_ill_3,
        },
        {
          title: "Stylistic Editing",
          text: "We fine-tune your tone and writing style, helping it align with your genre and audience. With Ink Nest Publishing, your story retains its originality while becoming even more impactful.",
          img: icons_ill_4,
        },
        {
          title: "Manuscript Evaluation",
          text: "Our editors take a deep look at your manuscript, offering personalized feedback that highlights strengths and pinpoints opportunities for growth—a perfect first step to elevate your story.",
          img: icons_ill_1,
        },
        {
          title: "Developmental Editing",
          text: "We help you shape the big picture from structure to pacing to character development, making sure your story flows with purpose and emotional impact.",
          img: icons_ill_2,
        },
        {
          title: "Line Editing",
          text: "Our team refines each sentence to improve clarity, flow, and readability. With Ink Nest Publishing, your writing becomes smoother, sharper, and more engaging.",
          img: icons_ill_3,
        },
      ]
    },
    cta: {
      img: services_ill_cta
    },
    sec6: {
      title: "Our Workflow: Simple, Clear, and Built Around You",
      highlight: "Workflow",
      text: "We believe great editing should feel effortless. At Ink Nest Publishing, our editing process is smooth, collaborative, and designed to bring out the best in your manuscript. Whether you’re publishing your first book or refining your tenth, we walk with you every step of the way.",
      points: [
        {
          title: "Manuscript Evaluation",
          text: "We start by reviewing your manuscript’s structure, flow, and potential. This gives us a clear roadmap for how to elevate your work.",
        },
        {
          title: "Progressive Editing",
          text: "From plot and pacing to characters and tone, our editors offer helpful suggestions to strengthen your narrative and overall consistency.",
        },
        {
          title: "Linguistic Editing",
          text: "We polish your sentence structure, word choice, and readability while preserving your original voice. The goal? Clear, confident storytelling.",
        },
        {
          title: "Copyediting",
          text: "Our detail-focused editors correct grammar, punctuation, and formatting to meet professional standards, no missed commas or awkward phrasing here.",
        },
        {
          title: "Proofreading",
          text: "We make one final pass to catch any lingering typos or inconsistencies. Your manuscript gets a clean, ready-to-publish finish.",
        },
        {
          title: "Client Collaboration",
          text: "You stay informed and involved throughout. With Ink Nest Publishing, your voice leads—we simply help it shine.",
        },
      ]
    },
    service_faq: [
      {
        ques: "I'm ready to publish my book, where do I start?",
        ans: "Start with editing. Whether your manuscript is a rough draft or nearly polished, our editorial team helps refine your voice, tighten the structure, and prepare your book for self-publishing success.",
      },
      {
        ques: "Do you offer Children’s Book Publishing support?",
        ans: "We do! Our team specializes in children’s book publishing, helping you craft engaging, age-appropriate stories with rhythmic flow and editorial clarity.",
      },
      {
        ques: "What makes Ink Nest Publishing different?",
        ans: "No exaggerated promises, just honest editing. Transparent services with no hidden fees. Clear refund, privacy, and terms of service policies. We use only our own brand, identity, and content. You always own your book, we’re here to support, not control.",
      },
      {
        ques: "What’s included in your Book Publishing Services?",
        ans: "Line Editing and Proofreading, Comprehensive Manuscript Review, Story Flow & Plot Enhancement, One-on-One Collaboration with Editors, Guidance on How to Publish my Book with ease.",
      },
    ]
  },
  {
    title: "Author Website",
    link: "/author-website",
  },
  {
    title: "Book Illustrations",
    link: "/book-illustrations",
    hero: {
      bg: "",
      title: "Transform Your Story with Ink Nest Book Illustrations",
      text: "Ready to see your story transformed into a masterpiece? At Ink Nest Publishing, we believe that powerful illustrations don’t just decorate a page, they bring stories to life. Whether you’re envisioning whimsical children’s tales, emotional graphic memoirs, or vivid fantasy worlds, our in-house team of illustrators turns your manuscript into a visual masterpiece that resonates with readers of all ages. From modern digital styles to nostalgic vintage art, we tailor our approach to your voice, your genre, and your audience.",
      points: [
        { bold: "Custom Book Illustrations ", text: "– Hand-drawn or digital, created just for your story" },
        { bold: "Dynamic Visual Storytelling ", text: "– Every scene crafted to move your reader" },
        { bold: "Children’s Book Art ", text: "– Soft, expressive, age-appropriate characters and settings" },
        { bold: "Cover & Interior Design ", text: "– Designed for both print and digital publishing" },
        { bold: "Unlimited Creativity  ", text: "– No templates. Just your vision, realized beautifully." },
      ]
    },
    secTwo: {
      title: "Why Authors Choose Ink Nest Publishing for Book Illustrations",
      text: [
        "At Ink Nest Publishing, we do more than just illustrate, we illuminate your book with visual storytelling that adds emotional depth and creative clarity. Our illustrations don’t overpower your words, they complement them.",
        "Whether you’re exploring Amazon self-publishing, launching a children’s book, or looking for a publishing-ready design for your next novel, our team crafts imagery that fits your story, and your vision, from start to shelf.",
        `<em style="color:#ffffff"><b>“A book illustration is not just drawn, it’s discovered, layer by layer.”</b></em>`
      ],
      img: "",
    },
    sec3: {
      title: "Color Every Page with Emotion & Meaning through Book Illustrations",
      highlight: "Book Illustrations",
      text: "We specialize in transforming your manuscript into an immersive visual experience. Our book illustration services cover everything from spot sketches to full-spread artworks, all designed to captivate, connect, and convey the soul of your story.",
      img: services_bi_sec2,
      cards: [
        {
          title: "Spot Illustration",
          text: "Tiny but powerful, perfect for highlighting moments, emotions, or key themes on a page.",
        },
        {
          title: "Half Page",
          text: "A balance of imagery and text that brings character-driven scenes or narrative beats to life.",
        },
        {
          title: "Full Page",
          text: "Bold, standalone illustrations that stop the reader and draw them into your story’s world.",
        },
        {
          title: "Spread Illustration",
          text: "Double-page enchantment, for emotional climaxes, magical lands, or detailed sequences that deserve room to breathe.",
        },
      ]
    },
    portfolio: [
      portfolio_book_ill_1,
      portfolio_book_ill_2,
      portfolio_book_ill_3,
      portfolio_book_ill_4,
      portfolio_book_ill_5,
      portfolio_book_ill_6,
      portfolio_book_ill_7,
      portfolio_book_ill_8,
    ],
    sec5: {
      title: "What Makes Our Illustration Services Unique?",
      text: "We support independent authors at every stage, from custom illustrations to book editing services, formatting, and guidance on how to publish on Amazon or other platforms.",
      cards: [
        {
          title: "Customized Improvement",
          text: "We enhance every project with thoughtful visuals tailored to your narrative voice. Our illustrations don’t just decorate, they build meaning, emotion, and visual rhythm into each page.",
          img: icons_ill_1,
        },
        {
          title: "Versatile Styles",
          text: "From whimsical watercolor to bold vector art, we adapt to your book’s theme. Whether you’re publishing a fantasy epic or a heartwarming children’s tale, our styles fit your genre perfectly.",
          img: icons_ill_2,
        },
        {
          title: "Consistent Engagement",
          text: "Our goal is more than beauty, it’s reader engagement. Every illustration is intentionally designed to spark curiosity and hold attention, panel after panel.",
          img: icons_ill_3,
        },
        {
          title: "Collaborative Process",
          text: "We listen first, sketch second. You’re part of the process from concept to completion, ensuring your input is heard and reflected in the final art.",
          img: icons_ill_4,
        },
      ]
    },
    cta: {
      img: services_ill_cta
    },
    sec6: {
      title: "Journey Through Our Illustration Process",
      highlight: "Illustration Process",
      img: services_ill_process,
      text: "We treat illustration as both art and storytelling. Every step in our process is intentional, built on communication, creativity, and care. Whether you’re looking to publish on Amazon or any platform, our visuals are crafted to match the heart of your story while meeting publishing standards.",
      points: [
        {
          title: "Understanding Ideas",
          text: "We begin by understanding your story, characters, tone, audience, genre, and personal artistic preferences.",
        },
        {
          title: "Concept Development",
          text: "Our team brainstorms, sketches, and maps visual direction before we dive into detailed artwork.",
        },
        {
          title: "Team Collaboration",
          text: "Your input is central. We keep you in the loop at every phase, from color palettes to layout approvals.",
        },
        {
          title: "Artwork Creation",
          text: "With expert hands and digital tools, we bring your book to life through custom illustration styles.",
        },
        {
          title: "Detailed Refinement",
          text: "We fine-tune based on feedback, ensuring each detail aligns with your vision and publishing needs.",
        },
        {
          title: "Final Delivery",
          text: "Your files are formatted and refined, ready to print, publish, or promote on the platform of your choice.",
        },
      ]
    },
    service_faq: [
      {
        ques: "What kind of book illustration services does Ink Nest Publishing offer?",
        ans: "At Ink Nest Publishing, we offer spot illustrations, half-page, full-page, and spread illustrations, all tailored to match your book’s genre and audience.",
      },
      {
        ques: "How involved will I be in the illustration process?",
        ans: "You’ll be involved at every step! Ink Nest Publishing believes in a fully collaborative process, from concept sketches to final designs, so your feedback and ideas help shape the final artwork.",
      },
      {
        ques: "Does Ink Nest Publishing provide children’s book illustrations too?",
        ans: "Yes, children’s book publishing is one of our specialties. Ink Nest Publishing creates age-appropriate, emotionally expressive illustrations that capture young readers’ attention and bring your characters to life.",
      },
      {
        ques: "How long does the book illustration process take at Ink Nest Publishing?",
        ans: "It depends on the number of illustrations and the complexity of your book. Typically, the process at Ink Nest Publishing takes 3 to 6 weeks, including revisions and your approvals along the way.",
      },
    ],
  },
  {
    title: "Book Cover",
    link: "/book-cover",
    hero: {
      bg: "",
      title: "Professional Book Cover Design Services For Every Genre With Ink Nest",
      text: "At Ink Nest Publishing, we believe a powerful story deserves a powerful visual. Our book cover design services are crafted to give your work the first impression it truly deserves. Whether you’re writing fiction, nonfiction, or a children’s book, we help you present your story with covers that are compelling, genre-accurate, and uniquely yours.",
      title_second: "What Our Book Cover Design Service Includes",
      points: [
        { bold: "Premium Visuals ", text: "– Designed by experienced professionals who understand both storytelling and market trends." },
        { bold: "Unique Illustrations & Layouts ", text: "– Every design is tailored, not pulled from a standard gallery. We align illustrations and typography with your story’s tone and audience." },
        { bold: "Brand Consistency ", text: "– We ensure your cover aligns with your author brand, whether this is your debut or your next in a series. Cohesion matters, especially across Amazon listings and series packaging." },
        { bold: "Swift Delivery ", text: "– We meet deadlines without sacrificing detail, so you can move forward with confidence in your timeline." },
      ]
    },
    secTwo: {
      title: "Why Choose Ink Nest Publishing for Your Cover Design?",
      text: [
        "Our designers collaborate closely with authors to fully grasp the mood, genre, and purpose of each book before starting on sketches. Your book cover serves as a powerful narrative, inviting readers into your world. At Ink Nest, we create designs that capture the essence of your story, ensuring it resonates long before the first page is turned. Let us help you craft a cover that speaks volumes!",
        "We also assist authors publishing on Amazon by designing covers that meet KDP’s size, resolution, and bleed requirements. Whether it’s a memoir, fantasy, spiritual guide, or illustrated story, Ink Nest Publishing delivers covers that are not only visually stunning but also tell your story before a word is read. Let’s collaborate and make your cover as unforgettable as the pages inside."
      ],
      img: "",
    },
    sec3: {
      title: "Cover Design Making Your Story Unforgettable",
      highlight: "Cover Design",
      text: "At Ink Nest Publishing, we specialize in creating book covers that connect visually, emotionally, and professionally. Whether you’re writing a novel, a memoir, or a children’s book, our design team crafts personalized covers that match your story’s tone, genre, and audience, while meeting industry standards across all platforms. ",
      img: services_bc_sec2,
      cards: [
        {
          title: "Custom Designs",
          text: "Our designers begin by understanding your story and genre. We don’t use templates or recycled visuals. Instead, we create one-of-a-kind designs that reflect your book’s unique message, tone, and target readership.",
        },
        {
          title: "Genre-Specific Covers",
          text: "From suspense and sci-fi to romance and nonfiction, our team creates cover styles that align with each genre’s reader expectations. Every layout, color, and font is chosen to enhance recognition and appeal.",
        },
        {
          title: "Series Cohesion",
          text: "Planning a trilogy or series? We ensure consistent branding across all titles, making your series look cohesive, professional, and visually collectible on digital and physical bookshelves alike.",
        },
        {
          title: "Digital Optimization",
          text: "We design for both print and digital formats. From eBooks on Amazon to print-on-demand, our cover files are formatted to meet industry resolution, bleed, and spine width standards, so your book always looks polished, no matter the platform.",
        },
      ]
    },
    portfolio: [
      portfolio_book_cover_1,
      portfolio_book_cover_2,
      portfolio_book_cover_3,
      portfolio_book_cover_4,
      portfolio_book_cover_5,
      portfolio_book_cover_6,
      portfolio_book_cover_7,
      portfolio_book_cover_8,
    ],
    sec5: {
      title: "What Sets Ink Nest Publishing Apart",
      text: "We understand that a book cover isn’t just a visual, it’s a handshake between your story and your reader. That’s why our approach combines insight, intention, and design integrity.",
      cards: [
        {
          title: "Designs that Tell a Story",
          text: "A great cover doesn’t just attract; it communicates. We draw on your story’s key themes to develop artwork that offers more than a title and image—it offers meaning. Our team visualizes concepts that connect emotionally with your audience.",
          img: icons_ill_1,
        },
        {
          title: "Tailored Visuals with Purpose",
          text: "We don’t use one-size-fits-all designs. Every cover we create is crafted from scratch, ensuring it’s not only aesthetically appealing but also aligned with your genre, tone, and target readers.",
          img: icons_bc_2,
        },
        {
          title: "Designed for the Reader’s Experience",
          text: "Every design decision is made with your audience in mind. We consider genre expectations, emotional tone, color psychology, and readability, all to ensure your cover performs well both on-screen and on-shelf.",
          img: icons_bc_3,
        },
        {
          title: "Collaborative Design Process",
          text: "We don’t just design for you, we design with you. From concept to delivery, your feedback helps shape the final cover. Our creative workflow is built on open communication and mutual respect.",
          img: icons_bc_4,
        },
      ]
    },
    sec6: {
      title: "Our Step-by-Step Book Cover Design Process",
      highlight: "Illustration Process",
      img: services_bc_process,
      text: "At Ink Nest Publishing, our book cover design service blends visual storytelling with strategic design. We work closely with authors to design covers that resonate with their readers, covers that look beautiful, feel genre-aligned, and meet the technical requirements for both print and digital distribution.",
      points: [
        {
          title: "Idea Generation",
          text: "Every great cover starts with a clear concept. Our team brainstorms visuals, styles, and mood boards based on your manuscript and vision.",
        },
        {
          title: "Design Drafts",
          text: "We create and present multiple design directions for you to review, ensuring you have creative options and control from the beginning.",
        },
        {
          title: "Detail Refinement",
          text: "Typography, layout, image treatment—we fine-tune every element to make your cover not just attractive, but meaningful.",
        },
        {
          title: "Quality Assurance",
          text: "Each cover is finalized in high resolution and formatted for all major platforms. Whether for eBook or paperback, your design is print- and pixel-ready.",
        },
        {
          title: "Final Review",
          text: "Before final delivery, you get the opportunity to provide feedback. We make revisions based on your input, ensuring your complete satisfaction.",
        },
        {
          title: "Client Support",
          text: "Even after your cover is delivered, we’re here to help. We assist with uploading files, adjusting for platform specs, and providing support for future titles.",
        },
      ]
    },
    service_faq: [
      {
        ques: "Can you design both the front and back covers of a book?",
        ans: "Yes. We design full-wrap covers including spine and back cover, suitable for print-ready books across platforms like Amazon KDP or IngramSpark.",
      },
      {
        ques: "Do you also offer eBook cover design?",
        ans: "Absolutely. We deliver eBook-optimized covers in the correct resolution and ratio for platforms like Amazon, Apple Books, and others.",
      },
      {
        ques: "How can I hire a designer from your team?",
        ans: "Just click Let’s Work Together or use the live chat. We’ll discuss your project, send you options, and match you with a designer who fits your genre and style.",
      },
      {
        ques: "Your Cover, Your Voice, Our Craft",
        ans: "Every book deserves a compelling visual identity, and at Ink Nest Publishing, we make sure your cover does justice to the story it holds.",
      },
    ]
  },
  {
    title: "Formatting and Layout",
    link: "/formatting-and-layout",
    hero: {
      bg: "",
      title: "Professional Book Formatting Services Adhering To Amazon KDP’s Standards",
      text: "Struggling with how to make your manuscript look professional and polished? With Ink Nest Publishing’s Formatting and Layout Service, we help authors transform raw drafts into clean, industry-standard books ready for print or digital platforms. Whether you’re navigating Amazon Book Publishing or preparing to publish on Amazon, our design team ensures your book looks as good as it reads.",
      title_second: "Our Book Formatting & Layout Services Tailored to Support Self-Publishing Success",
      text_second: "No matter where you are in your publishing journey from writing to launch, Ink Nest Publishing is here to help.Our Formatting and Layout Service is part of a complete suite of Book Publishing Services, which include editing, design, metadata, and book marketing services.Whether you want to promote my book, prepare it for Amazon, or just make it shine on the page, we offer tailored solutions for real authors with real goals.",
      quote: "A story well told deserves to be beautifully laid out."
    },
    sec2_new: {
      title: "Hassle -Free & The Best Book Formatting, Done Right ",
      text: [
        "Want to avoid layout errors and confusing page breaks? We understand. Ink Nest Publishing’s Formatting and Layout Service delivers expertly styled manuscripts with readable fonts, proper spacing, smart chapter breaks, and all the subtle visual cues that make your book feel professional. From children’s book publishing to memoirs, we take care of the little things, so readers can focus on your words, not the formatting.",
        "This is more than just “cleaning up your manuscript” it’s about creating a reading experience that aligns with your genre, tone, and goals. Whether you’re launching under Amazon Self Publishing or prepping your manuscript for another platform, we’re here to make it beautiful."
      ],
    },
    sec3_cards: {
      title: "Top-Notch Formatting and Layout Services – Ink Nest Publishing",
      highlight: "Formatting and Layout",
      text: "Our services are perfect for indie authors, hybrid publishers, and anyone ready to say, “I’m ready to publish my book professionally.” Whether you’re aiming to promote my book soon or simply want a polished draft in your hands, our layout team brings your vision to life.",
      cards: [
        {
          title: "Print-Ready Formatting",
          text: "We prepare your manuscript for print-on-demand platforms like Amazon KDP, with precise margins, bleed, trim sizes, and interior specs.",
        },
        {
          title: "eBook Conversion Design",
          text: "Your book will be optimized for Kindle and other e-readers, ensuring consistent font, spacing, and chapter navigation across devices.",
        },
        {
          title: "Genre-Specific Styling",
          text: "We align your book’s interior design with genre expectations, whether it’s fiction, nonfiction, poetry, or children’s book publishing.",
        },
        {
          title: "Typography & Spacing Polish",
          text: "We select fonts and spacing that support readability, balance white space, and give your book a polished, professional look.",
        },
        {
          title: "Image & Graphic Placement",
          text: "Got images, charts, or illustrations? We place and align them perfectly so they flow with your narrative, not disrupt it.",
        },
        {
          title: "Title & Section Layout",
          text: "We stylize your chapter titles, subheads, quotes, and page breaks for a seamless reading experience, every time.",
        },
      ]
    },
    default_portfolio: true,
    sec6: {
      title: "Our Layout Success Process",
      highlight: "Layout",
      img: services_bc_process,
      text: "Let your words breathe on every page. At Ink Nest Publishing, our Formatting and Layout Service is all about making your book visually engaging and professionally finished.",
      points: [
        {
          title: "Style Consultation",
          text: "We begin by discussing your book’s genre, tone, and layout vision from font style to chapter flow.",
        },
        {
          title: "Manuscript Review",
          text: "We assess your raw draft to find layout concerns like inconsistent spacing, font issues, or missing visual structure.",
        },
        {
          title: "Layout Mockup",
          text: "Our design team creates a sample layout so you can see how your final pages will appear in print or on screen.",
        },
        {
          title: "Format Application",
          text: "We apply your approved layout to the full manuscript using tools compatible with Amazon, IngramSpark, and other platforms.",
        },
        {
          title: "Proof & Feedback",
          text: "You’ll receive a proof version to review and suggest final adjustments before formatting is locked in.",
        },
        {
          title: "Final Export",
          text: "We deliver clean, industry-ready files in PDF and/or ePub format—ready for Amazon Book Publishing, eBooks, or printing.",
        },
      ]
    },
    service_faq: [
      {
        ques: "Do I need formatting if I already wrote my book in Word?",
        ans: "Yes! Word files are not designed for publishing standards. We format it to meet Amazon and reader-friendly guidelines.",
      },
      {
        ques: "Can I request changes after seeing the first layout?",
        ans: "Of course. Ink Nest Publishing includes a revision round so you’re happy with every detail before publishing.",
      },
      {
        ques: "Is formatting different for Kindle and print?",
        ans: "Yes. We format separately for print and digital because each has different layout rules and reader behaviors.",
      },
      {
        ques: "What if my book has images or special sections?",
        ans: "No problem. We work with illustrated pages, poetry formatting, and nonstandard sections like recipes or quotes.",
      },
    ]
  },
];

export const terms = [
  {
    title: "Privacy policy",
    url: "/privacy-policy",
    description: "The privacy policy assists both you and us in keeping your information private. Our privacy policy will assist you in understanding the steps we take to protect your privacy both before and after the work process.",
    text: [
      {
        title: 'USER INFORMATION',
        details: "'For your identification and peaceful partnership, we may gather the following information.' \n ` Name, business name and job title. | Contact information, including phone numbers, email addresses or website.` \n 'We need your information to understand your needs better and offer you a better service, namely for the following reasons:' \n `The information may be used to enhance our goods and services. | We may also contact you to solicit feedback on our services based on the information you supply. | We can utilize the information to tailor the website to your preferences.`"
      },
      {
        title: "Security",
        detail: "We are dedicated to keeping your information safe. To prevent unauthorized access or disclosure, we have established appropriate physical, administrative systems and technological to protect and secure the information we collect online. \n `Clients' Information at Ink Nest Publishing is kept extremely secure during transmission by using the Secure Sockets Layer (SSL) Software, which encrypts the client's information. | Ink Nest Publishing adheres to widely established industry standards to safeguard the personal information submitted by the customer both during transmission and after received. However, because no Internet transmission or computer storage method is completely safe, we cannot guarantee its perfect security despite utilizing commercially reasonable efforts to protect your personal information.`"
      },
      {
        title: "3RD PARTY SHARING",
        detail: "`We do not disclose any personally identifiable information to other parties. | We do not provide or sell our client's personal information to third parties. | Ink Nest Publishing bills you for services using the services of credit card processing firms.These businesses never disclose, save, preserve, or use confidential information for any other reason.`",
      },
      {
        title: "COOKIES AND THEIR USE",
        detail: "`Cookies, alphanumeric identifiers, allow our systems to recognize our clients' browsers and save products in their Shopping Carts during visits. | The Help section of the toolbar on most browsers is useful for preventing the browser from accepting new cookies, disabling cookies, and notifying the user when a new cookie is received. |Clients usually do not prohibit cookies since they allow you to benefit from our site's key features fully. According to our findings, clients leave cookies to be accepted. | Ink Nest Publishing logs your IP address to diagnose server problems and administer our website.In addition, your IP address is used to collect broad demographic data regarding you, such as your location and Internet service provider. | Clients' aggregate information on how our visitors utilize the site may be obtained. This information might include specific visitor patterns on the site and search queries. There is no connection between IP address, log file data, and Personally Identifiable Information (PII). | Third parties can only obtain information about browser kinds, access times, URLs used to reach our site, and URLs visited by visitors on our site if combined.`",
      },
      {
        title: "Consumer Data Safety Measures",
        detail: "Your privacy is important to us. As a result, we do not disclose your name or contact information to any third party. Furthermore, we keep the information you supply secret. The information you enter is solely used to understand your needs better and tailor our services to meet them. We make every effort to adhere to PCI and consumer data protection regulations. \n Our organization does not permit its agents to get sensitive consumer information like credit card numbers.As a result, we strongly warn our clients not to discuss any personal or sensitive information with our workers.If you do so, you do it at your own risk, and our firm is not accountable for any abuse. \n Your requested work may be sent to one of our worldwide manufacturing or service facilities for excellent delivery.However, an NDA requires them to keep consumer information strictly secret.",
      },
      {
        title: "Pseudonym Policy",
        detail: "'We have a policy of employing aliases to ensure the following:' \n `We employ pseudonyms to eliminate unnecessary confusion and inconvenience for our clients when they are allocated a new account manager; it allows our customers to stay connected with a single point of contact while easily remembering their names. Moreover, as our staff comprises people from different regions and cultures, using pseudonyms helps us present a uniform culture of the organization.`",
      },
    ]
  },
  {
    title: "Terms & Conditions",
    url: "/terms-and-conditions",
    description: "The aforementioned terms and conditions apply to www.inknestpublishing.com projects.",
    text: [
      {
        title: 'COPYRIGHT',
        details: "You shall have complete ownership of the material that we create for you and supply in accordance with the parameters agreed upon. We will have no copyright on the content, and you are free to publish and use it as you see fit."
      },
      {
        title: "PAYMENT",
        detail: "All services listed on the website need a 100% upfront payment. The customer is responsible for any transaction fees and taxes (where applicable)."
      },
      {
        title: "REVISIONS",
        detail: "We provide limitless changes on provided work as long as the requests are submitted within 7 days of the work being delivered and, in extreme situations, within 14 days of the work being delivered. All modification requests for client orders will be fulfilled in accordance with the order's urgency, with a typical minimum turnaround time of 24 hours. \n 'The following is the revision turnaround time based on urgency:' \n `For orders up to 24 hours of urgency, the Revision turnaround time would be 24 hours. | For orders between 24-48 hours of urgency, the Revision turnaround time would be 48 hours. | For orders of 48 hours and above, the Revision turnaround time would be 72 hours.`",
      },
      {
        title: "PROJECT REQUIREMENTS",
        detail: "Before beginning a project, any project needs will be reviewed with the clients. Service-level disputes shall be resolved in accordance with the terms and requirements agreed upon at the start of a project, these terms and conditions, and reasonable business practices.",
      },
      {
        title: "REFUND POLICY",
        detail: "You may request a complete refund before we begin work on your project. However, after work on a project has begun, the refund will be executed after any relevant transaction charges have been deducted from the amount. If you join up utilizing a limited-time or reduced offer, you will not be eligible for a refund. A refund request can be submitted if you are unsatisfied with any product or service provided by Amazon Publishing Process. within 5 days of your order completion. If we are unable to perform the requested service due to our unlimited revision policy, we will issue a percentage-based refund. If no refund request is received within five days of your purchase's delivery, both parties will presume your satisfaction with the supplied goods.",
      },
      {
        title: "TERM OF USE OF THIS WEBSITE",
        detail: "`The content on www.inknestpublishing.com includes, but is not limited to, the company's services and does not constitute advice, certificates, guarantees, or warranties. | The firm, its affiliates, associates, or employees are not liable for any loss or harm caused by an unintended inaccuracy in the information on this website. | The company and its affiliates and associates are not liable for any failure of performance, omission, interruption, error, deletion, defect, delay in operation or transmission, theft or destruction, computer virus, communications line failure, or unauthorized access to, alteration of, or use of information contained on the website at any time. | You agree to defend, indemnify, and hold harmless the business and its affiliated companies, partners, officers, representatives, and employees from and against any claims, liabilities, damages, losses, and expenditures arising out of or in any way connected with {your access to or use of the website and its services; \\ your violation of these Terms of Use; or \\ your violation of any third party right, including without limitation any intellectual property right, publicity right, or any other right.} | This Agreement or your use of this Site does not create a partnership, joint venture, employment, or agency relationship between you and the firm.`",
      },
    ]
  }
];
