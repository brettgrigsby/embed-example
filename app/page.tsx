export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4 tracking-tight">
            Remix Embedded Games
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Experience interactive gaming directly in your browser with Remix's seamless game embedding technology
          </p>
        </header>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Stacked Content Cards */}
          <div className="flex flex-col gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                What are Embedded Games?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                Remix allows you to embed interactive games directly into web pages, providing a seamless gaming experience without leaving your site. These embedded games are fully responsive and work across all modern browsers.
              </p>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you're showcasing game development skills, providing entertainment, or creating interactive content, Remix's embedding system makes it easy to integrate games into any web application.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
                Features
              </h2>
              <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Fully responsive design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Cross-browser compatibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Easy integration with React/Next.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Optimized performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>Customizable styling</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Embedded Game Section */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8">
            <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ position: 'relative', paddingBottom: '150%', height: 0 }}>
                <iframe
                  src="https://remix.gg/g/0595a37f-9af7-4a1b-9ae9-aab48eb3206a?embed=1"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                  allow="gamepad; fullscreen"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="text-center text-slate-500 dark:text-slate-400">
          <p>Built with Next.js and Remix</p>
        </footer>
      </main>
    </div>
  );
}
