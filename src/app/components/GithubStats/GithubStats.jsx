"use client";
import React from "react";

const statsCards = [
  {
    title: "GitHub Activity",
    description: "Track my latest development trends and active repositories.",
    image:
      "https://github-readme-stats.vercel.app/api?username=sakhawat236hossain&show_icons=true&theme=dark&hide_border=true&include_all_commits=true&count_private=true",
  },
  {
    title: "Top Languages",
    description:
      "A snapshot of the programming languages I use most in my repositories.",
    image:
      "https://github-readme-stats.vercel.app/api/top-langs/?username=sakhawat236hossain&theme=dark&hide_border=true&layout=compact",
  },
];

export default function GithubStats() {
  return (
    <section className="relative w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-sm font-black uppercase tracking-[0.35em] text-purple-600">
            Open Source Impact
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            GitHub Statistics
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            A visual summary of my GitHub activity and top languages to show
            real coding consistency and technical focus.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {statsCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 shadow-2xl shadow-slate-900/5"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                  {card.description}
                </p>
              </div>
              <div className="bg-slate-900 dark:bg-slate-900/90">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto block"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/sakhawat236hossain"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-8 py-4 text-sm font-black text-white shadow-lg shadow-purple-500/20 transition hover:bg-purple-500"
          >
            View Full GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
