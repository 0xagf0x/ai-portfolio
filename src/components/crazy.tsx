'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/np_glacier.png',
      alt: 'Avalanche Lake - Glacier NP',
      caption: 'Avalanche Lake - Glacier National Park',
    },
         {
      src: '/sports_mt_bachelor_2.png',
      alt: 'Mt. Bachelor - Oregon, US',
      caption: 'Mt. Bachelor - Oregon, US',
    },
     {
      src: '/sports_coffin_mountain.png',
      alt: 'Coffin Mountain (5,770ft) - Oregon, US',
      caption: 'Coffin Mountain - Oregon, US',
    },
    {
      src: '/sports_mt_bachelor.png',
      alt: 'Mt. Bachelor - Oregon, US',
      caption: 'Mt. Bachelor - Oregon, US',
    },
    {
      src: '/sports_anchorage.png',
      alt: 'Anchorage, AK - US',
      caption: 'Anchorage, AK - US',
    },
     {
      src: '/sports_mt_rainier.png',
      alt: 'Mt. Rainier (14,410ft) - Oregon, US',
      caption: 'Mt. Rainier - Washington, US',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        {/* <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Avalanche Lake - Glacier NP
        </h2> */}
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Crazy;