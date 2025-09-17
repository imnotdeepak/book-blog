export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-4">Contact Me</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            className="w-full rounded-md border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20 dark:focus:ring-white/20"
            placeholder="How can I help?"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90"
        >
          Send
        </button>
      </form>
    </div>
  );
}
