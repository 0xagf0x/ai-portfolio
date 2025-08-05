import { tool } from "ai";
import { z } from "zod";

export const getCrazy = tool({
  description:
    "This tool will share information about my outdoor adventures including hiking, national parks travels, and skiing/snowboarding. Use it when the user asks something like: 'What's your favorite place you've traveled?' or asks about hiking, national parks, or winter sports experiences.",
  parameters: z.object({}),
  execute: async () => {
    return "My wife and I love to travel around the country exploring national parks and hiking! We've been to 22 of the US national parks so far and are always planning our next adventure. There's nothing like hitting the trails together and experiencing the incredible diversity of landscapes across America - from desert canyons to mountain peaks to coastal wilderness areas. When winter comes around, you'll find us on the slopes skiing and snowboarding all season long. We're passionate about the outdoors year-round!";
  },
});