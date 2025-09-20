export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
          <p className="text-lg text-foreground">
            A little about my reading journey
          </p>
        </div>

        <div className="bg-card-bg rounded-lg shadow-lg p-8 border border-border-color">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-6">My Reading Story</h2>
            
            <p className="text-foreground leading-relaxed mb-6">
              Welcome to RambutanReads! I'm a passionate book lover who believes that 
              every book has the power to transport us to different worlds, introduce us 
              to fascinating characters, and teach us something new about ourselves and 
              the world around us.
            </p>

            <p className="text-foreground leading-relaxed mb-6">
              My reading journey began in childhood with fantasy novels and has evolved 
              to encompass a wide range of genres including literary fiction, science 
              fiction, memoirs, and everything in between. I believe that great books 
              can be found in every genre, and I love discovering hidden gems and 
              sharing them with fellow readers.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">What You'll Find Here</h3>
            
            <ul className="list-disc list-inside text-foreground mb-6 space-y-2">
              <li>Honest and thoughtful book reviews</li>
              <li>Reading recommendations across genres</li>
              <li>Updates on what I'm currently reading</li>
              <li>My ever-growing TBR (To Be Read) list</li>
              <li>Reading challenges and goals</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mb-4">My Reading Philosophy</h3>
            
            <p className="text-foreground leading-relaxed mb-6">
              I believe that reading should be a joy, not a chore. While I appreciate 
              literary masterpieces, I also love a good page-turner that keeps me up 
              all night. Every book has its place, and I'm here to help you find the 
              perfect read for your mood, whether you're looking for an escape, 
              inspiration, or something to make you think.
            </p>

            <h3 className="text-xl font-bold text-foreground mb-4">Favorite Genres</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-accent-burgundy bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-bold text-accent-burgundy mb-2">Fiction</h4>
                <p className="text-sm text-foreground">Literary fiction, contemporary, historical</p>
              </div>
              <div className="bg-accent-green bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-bold text-accent-green mb-2">Fantasy & Sci-Fi</h4>
                <p className="text-sm text-foreground">Epic fantasy, space opera, magical realism</p>
              </div>
              <div className="bg-highlight-gold bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-bold text-highlight-gold mb-2">Non-Fiction</h4>
                <p className="text-sm text-foreground">Memoirs, biographies, popular science</p>
              </div>
              <div className="bg-accent-burgundy bg-opacity-10 p-4 rounded-lg">
                <h4 className="font-bold text-accent-burgundy mb-2">Mystery & Thriller</h4>
                <p className="text-sm text-foreground">Psychological thrillers, cozy mysteries</p>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground mb-4">Reading Goals</h3>
            
            <p className="text-foreground leading-relaxed mb-6">
              This year, I'm focusing on reading more diversely, exploring new authors 
              and perspectives, and sharing my reading journey with fellow book lovers. 
              I'm always looking for new recommendations, so feel free to reach out 
              with your favorite books!
            </p>

            <div className="text-center mt-8">
              <p className="text-foreground">
                Happy reading! 📚
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
