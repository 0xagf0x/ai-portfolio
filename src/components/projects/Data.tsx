import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Unfur.ly',
    description:
      'Unfur.ly is your link command center. It monitors your critical links 24/7, alerts you when they break, and delivers real-time insights—so you can focus on growth.',
    techStack: [
      'Vue',
      'TailwindCSS',
      'Typescript',
      'Vite',
      'Chart.js',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://unfur.ly/app/',
      },
      {
        name: 'X',
        url: 'https://x.com/unfur_ly',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/company/unfurly',
      }
    ],
    images: [
      {
        src: '/unfurly1.png',
        alt: 'Unfur.ly landing page',
      },
      {
        src: '/unfurly2.png',
        alt: 'Unfurly dashboard'
      },
      {
        src: '/unfurly3.png',
        alt: 'Furlhub',
      },
      {
        src: '/unfurly4.png',
        alt: 'Custom Furls',
      },
    ],
  },
  {
    title: 'SeoLove.co',
    description:
      "One scan is worth a thousand visits. Paste your domain. Get your free score and 25-point personalized SEO game plan in <10 seconds. ",
     techStack: [
      'Vue',
      'TailwindCSS',
      'Typescript',
      'Vite',
      'Chart.js',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://seolove.co/app/',
      },
      {
        name: 'X',
        url: 'https://x.com/seolove_co',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/company/seolove-co',
      }
    ],
    images: [
      {
        src: '/seolove1.png',
        alt: 'SeoLove landing page',
      },
      {
        src: '/seolove2.png',
        alt: 'SeoLove dashboard',
      },
    ],
  },
  {
    title: 'Ski Resort Weather',
    description:
      "A web application that displays ski resorts on a Mapbox interactive map, plus current and weekly weather forecasts from WeatherAPI. You can also mark favorite resorts and quickly view their conditions.",
    techStack: [
      'React.JS',
      'CSS',
      'Mapbox',
      'HTML',
      'Vercel',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://ski-map.vercel.app/',
      },
      {
        name: 'github',
        url: 'https://github.com/0xagf0x/ski-weather',
      },
    ],
    images: [
      {
        src: '/ski_weather1.png',
        alt: 'Ski Resort Weather landing page',
      },
      {
        src: '/ski_weather2.png',
        alt: 'Weather information',
      },
      {
        src: '/ski_weather3.png',
        alt: 'Detailed weather forecast',
      },
      {
        src: '/ski_weather4.png',
        alt: 'Dark mode',
      },
    ],
  },
  {
    title: 'SpoilerShield',
    description:
      'AI-powered spoiler protection for social media browsing. Never get spoiled again while browsing Reddit, Twitter, or other social platforms. Spoiler Shield uses advanced machine learning to detect and hide potential spoilers before you see them.',
    techStack: ['React Native', 'TailwindCSS', 'TensorFlow', 'Core ML', 'Expo', 'Langchain'],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://spoiler-shield.vercel.app/'
      },
      {
        name: 'github',
        url: 'https://github.com/0xagf0x/spoiler-shield-mobile',
      },
    ],
    images: [
      {
        src: '/spoilershield1.png',
        alt: 'SpoilerShield marketing page',
      },
      {
        src: '/spoilershield2.png',
        alt: 'SpoilerShield marketing page',
      },
      {
        src: '/spoilershield3.png',
        alt: 'SpoilerShield Google Chrome extension',
      },
    ],
  },
  {
    title: 'Shaman Asher',
    description:
      'I built a spiritual services website using Next.js, React, and Tailwind CSS for a Richmond-based ordained shaman named Asher Miller who combines Messianic Jewish traditions with earth-based shamanic practices. The site is a clean, modern platform showcasing his virtual and in-person healing services like chakra alignment, dream interpretation, and smudging ceremonies, with standard pages including a blog system for spiritual content, services showcase, testimonials, and contact - basically a professional web presence for someone doing integrated spiritual healing work, all built with a responsive Tailwind-styled interface.',
    techStack: ['NextJS', 'TailwindCSS', 'Typescript', 'Sanity.io', 'Vercel'],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://www.shamanasher.com/'
      },
    ],
    images: [
      {
        src: '/shaman_asher1.png',
        alt: 'ShamanAsher homepage hero',
      },
      {
        src: '/shaman_asher2.png',
        alt: 'ShamanAsher services page',
      },
      {
        src: '/shaman_asher3.png',
        alt: 'ShamanAsher testimonial page',
      },
    ],
  },
   {
    title: 'AliensAmongUs.io',
    description:
      "AAU is a permissionless NFT auction house powered by the ZORA protocol, enabling creators and collectors to buy and sell digital assets in a decentralized marketplace. Our platform supports both Ethereum mainnet and testnet environments, providing a seamless experience for discovering, listing, and bidding on unique NFT collections. Built with cutting-edge Web3 technology, we're dedicated to making NFT trading accessible and transparent for everyone.",
    techStack: ['NextJS', 'Solidity', 'Web3.JS'],
    date: '2024',
    links: [
       {
        name: 'github',
        url: 'https://github.com/0xagf0x/aliensAmongUs'
      },
    ],
    images: [
      {
        src: '/aau1.png',
        alt: 'Main view',
      },
      {
        src: '/aau2.png',
        alt: 'Homepage',
      },
      {
        src: '/aau3.png',
        alt: 'Metaverse clothing view',
      },
      {
        src: '/aau4.png',
        alt: 'NFT royalty breakdown',
      },
    ],
  },
  {
    title: 'PWA Music Player',
    description:
      'This is a Progressive Web App (PWA) music player designed specifically for playing WAV audio files locally in the browser. The app allows users to upload and manage their personal music library with features including play/pause controls, track navigation, playlist management, search functionality, and a clean, responsive interface. Users can organize their music collection, view track durations, delete songs, and enjoy a seamless audio playback experience with progress tracking and shuffle capabilities.',
    techStack: ['JavaScript', 'Typescript', 'JSMediaTags'],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://wav-player.vercel.app/'
      },
       {
        name: 'github',
        url: 'https://github.com/0xagf0x/wav-player/'
      },
    ],
    images: [
      {
        src: '/pwa_music_player1.png',
        alt: 'Main view',
      },
      {
        src: '/pwa_music_player2.png',
        alt: 'Multiple audio files added',
      },
      {
        src: '/pwa_music_player3.png',
        alt: 'Player view',
      },
    ],
  },
   {
    title: 'ThreeJS Scroller',
    description:
      '',
    techStack: [ 'ThreeJS', 'JavaScript', 'Typescript','JSMediaTags'],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://threejs-scroller.vercel.app/'
      },
       {
        name: 'github',
        url: 'https://github.com/0xagf0x/threejs-scroller'
      },
    ],
    images: [
      {
        src: '/threejs_scroller1.png',
        alt: 'Main view',
      },
      {
        src: '/threejs_scroller2.png',
        alt: 'Multiple audio files added',
      },
      {
        src: '/threejs_scroller3.png',
        alt: 'Player view',
      },
    ],
  },
   {
    title: 'Crypto Coin Tracker',
    description:
      '',
    techStack: [  'JavaScript', 'Typescript','TailwindCSS'],
    date: '2024',
    links: [
      {
        name: 'website',
        url: 'https://coin-tracker-amber.vercel.app/'
      },
       {
        name: 'github',
        url: 'https://github.com/0xagf0x/coin-tracker'
      },
    ],
    images: [
      {
        src: '/crypto_coin_tracker1.png',
        alt: 'Currency view',
      },
      {
        src: '/crypto_coin_tracker2.png',
        alt: 'Trending view',
      },
      {
        src: '/crypto_coin_tracker3.png',
        alt: 'Search view',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
                <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
                >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Startup Project',
    title: 'Unfur.ly',
    src: '/preview_unfurly.png',
    content: <ProjectContent project={{ title: 'Unfur.ly' }} />,
  },
  {
    category: 'Mobile AI App',
    title: 'SpoilerShield',
    src: '/preview_spoilershield.png',
    content: <ProjectContent project={{ title: 'SpoilerShield' }} />,
  },
  {
    category: 'Startup Project',
    title: 'SeoLove.co',
    src: '/preview_seolove.png',
    content: <ProjectContent project={{ title: 'SeoLove.co' }} />,
  },
  {
    category: 'Web App',
    title: 'Ski Resort Weather',
    src: '/preview_ski_weather.png',
    content: <ProjectContent project={{ title: 'Ski Resort Weather' }} />,
  },
  {
    category: 'Startup Project',
    title: 'AliensAmongUs.io',
    src: '/preview_aau.png',
    content: <ProjectContent project={{ title: 'AliensAmongUs.io' }} />,
  },
  {
    category: 'Client Website',
    title: 'Shaman Asher',
    src: '/preview_shaman_asher.png',
    content: <ProjectContent project={{ title: 'Shaman Asher' }} />,
  },
  {
    category: 'Progressive Web App',
    title: 'PWA Music Player',
    src: '/preview_pwa_music_player.png',
    content: <ProjectContent project={{ title: 'PWA Music Player' }} />,
  },
  {
    category: 'Personal Hacking',
    title: 'ThreeJS Scroller',
    src: '/preview_threejs_scroller.png',
    content: <ProjectContent project={{ title: 'ThreeJS Scroller' }} />,
  },
  {
    category: 'Personal Hacking',
    title: 'Crypto Coin Tracker',
    src: '/preview_crypto_coin_tracker.png',
    content: <ProjectContent project={{ title: 'Crypto Coin Tracker' }} />,
  },
  
];
