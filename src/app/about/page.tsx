export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">About Me</h1>
      <p className="text-sm/6 text-black/80 dark:text-white/80">
        Hi! I'm a reader who loves sharing thoughts about books. This blog
        collects my latest reviews, current reads, and what's next on my shelf.
      </p>
      <p className="text-sm/6 text-black/80 dark:text-white/80">
        This site is built with Next.js and Tailwind CSS. Expect frequent
        updates as I tinker with the design and add new features.
      </p>
    </div>
  );
}
