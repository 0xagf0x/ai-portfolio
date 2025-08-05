import { tool } from 'ai';
import { z } from 'zod';

export const getHired = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇


- 🔥 I move fast, learn faster, and I’m HUNGRYYYYY for big challenges

📬 **Contact me** via:
- Email: charlesbuckley122@gmail.com
- LinkedIn: [linkedin.com/in/charles-b](https://www.linkedin.com/in/charles-buckley-20447950/)
- GitHub: [github.com/0xagf0x](https://github.com/0xagf0x)

Let's build cool shit together ✌️
    `;
  },
});
