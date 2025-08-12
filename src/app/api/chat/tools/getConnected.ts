import { tool } from "ai";
import { z } from "zod";

export const getConnected = tool({
  description:
    "Shows the ConnectWithMeCard component with comprehensive hiring information. Use this tool when the user asks about hiring, job opportunities, employment, work, career, positions, roles, or phrases like 'Are you looking to connect?', 'available for work', 'looking for opportunities', etc.",
  parameters: z.object({}),
  execute: async () => {
    
    return `
    I'm always looking for exciting opportunities where I can build impactful products using AI/ML and modern web technologies. 

    Ready to chat about how we can work together? Hit that contact button! ✌️

    📬 **Contact me** via:
    - **Email:** charlesbuckley122@gmail.com
    - **LinkedIn:** https://www.linkedin.com/in/charles-buckley-20447950/
    - **GitHub:** https://github.com/0xagf0x
   
    `;
  },
});
