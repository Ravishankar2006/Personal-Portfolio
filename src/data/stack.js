/**
 * The stack, always visible — no tabs.
 * 22 short strings is not enough content to justify hiding
 * three-quarters of it behind a click.
 *
 * The hero command bar's `stack` output reads this same array, so the
 * two can no longer drift the way Terminal.jsx and TechWorkflow.jsx had.
 */
export const stack = [
  {
    group: "Languages",
    items: ["C++", "Java", "Python", "JavaScript", "Dart", "HTML/CSS"],
  },
  {
    group: "Frameworks",
    items: ["ReactJS", "Flutter", "Tailwind CSS", "Framer Motion"],
  },
  {
    group: "Tools",
    items: [
      "VS Code",
      "GitHub",
      "Postman",
      "Android Studio",
      "Firebase",
      "AWS",
      "Vercel",
      "Render",
      "Google Colab",
    ],
  },
  {
    group: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firestore"],
  },
];

/** Flat list for the marquee band. */
export const stackFlat = stack.flatMap((g) => g.items);
