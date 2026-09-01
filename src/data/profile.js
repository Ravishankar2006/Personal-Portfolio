export const profile = {
  name: "Ravishankar A.G",
  // Set as a deliberate two-line lockup in the masthead. At display size
  // "Ravishankar" is wider than the container on its own, so leaving it
  // to wrap broke it mid-word ("RAVISHANKA / RA.G").
  nameLines: ["Ravishankar", "A.G"],
  initials: "RS",
  role: "Computer Science Engineer",
  location: "Tiruppur, Tamil Nadu",
  school: "Sri Eshwar College of Engineering",
  available: "Open to 2026 internships",
  lede: "Curious engineering student who builds things that ship — full-stack on the web, cross-platform on mobile, and increasingly applied AI/ML.",
  stats: [
    { value: "7.3", label: "CGPA" },
    { value: "6", label: "Shipped" },
    { value: "20", suffix: "+", label: "Technologies" },
  ],
};

/** Contact channels. A blank `url` renders as text-only (no link). */
export const contact = {
  email: "ravishankar08062006@gmail.com",
  links: [
    { label: "GitHub", handle: "@Ravishankar2006", url: "https://github.com/Ravishankar2006" },
    { label: "LinkedIn", handle: "ravishankar-a-g", url: "https://www.linkedin.com/in/ravishankar-a-g" },
    { label: "LeetCode", handle: "@ravishankar_ag · 1702", url: "https://leetcode.com/u/ravishankar_ag/" },
    // Served from public/, so the path is root-relative, not an import.
    { label: "Résumé", handle: "PDF · 1 page", url: "/resume.pdf" },
  ],
};
