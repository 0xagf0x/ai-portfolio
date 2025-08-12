"use client";

import { motion } from "framer-motion";
import { CalendarDays, Code2, Globe } from "lucide-react";
import { useRouter } from "next/navigation";

const ConnectWithMeCard = () => {
  const openMail = () => {
    window.open("mailto:charlesbuckley122@gmail.com", "_blank");
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/pfp.png"
              alt="Raphael's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Charles Buckley
            </h2>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Live
          </span>
        </div>
      </div>

      {/* Job Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                <li>Python, Next.js, TypeScript, Tailwind CSS</li>
                <li>OpenAI, Mistral, Claude, Whisper</li>
                <li>Prompt engineering, fine-tuning</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Hugging Face Transformers</li>
                <li>Tool routing, calling, RAG</li>
                <li>AI agent workflows</li>
                <li>
                  <a
                    href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer items-center text-blue-500 underline"
                  >
                    See more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>
        <ul className="flex flex-col text-foreground text-sm pl-[16px] list-disc gap-4">
          <li>
            <strong>Full-Stack Development: </strong> 8+ years building scalable web applications
            with React, TypeScript, and Python, leading development teams to
            deliver business-critical features at both enterprise and startup
            scale.
          </li>

          <li>
           <strong>AI/ML Integration: </strong> Practical experience implementing NLP models and
            TensorFlow solutions to extract customer insights, bridging
            cutting-edge AI with real business applications.
          </li>

          <li>
            <strong>Rapid Product Delivery: </strong> Proven ability to ship fast across diverse environments—from enterprise marketing platforms to blockchain DApps—adapting quickly to technical and business constraints.
          </li>
        </ul>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </button>
      </div>
    </motion.div>
  );
};

export default ConnectWithMeCard;
