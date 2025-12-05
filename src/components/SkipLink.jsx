// src/components/SkipLink.jsx
const SkipLink = () => {
  return (
    <a
      href="#timeline"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-cyan-500 focus:text-black focus:font-bold focus:rounded-lg focus:shadow-lg"
    >
      Skip to main content
    </a>
  );
};

export default SkipLink;
