import { Camera, Instagram } from "lucide-react";
import PageWrapper from "../components/PageWrapper";
import ParallaxHero from "../components/ParallaxHero";
import ScrollButtons from "../components/ScrollButtons";

const Gallery = () => {
  // Gallery items - add your events here
  const galleryItems = [];

  // Instagram posts data - add image URL and Instagram post URL
  // To get the image URL from an Instagram post:
  // Method 1: Right-click on the post image in Instagram > "Copy image address"
  // Method 2: Open the post in browser, right-click image > "Copy image address"
  // Method 3: Use a tool like https://www.instadp.com/ or similar to extract image URLs
  // Method 4: Use Instagram's oEmbed API: https://api.instagram.com/oembed?url=POST_URL
  const instagramPosts = [
    {
      id: "venture-verse-2025",
      title: "Venture Verse 2025",
      category: "hackathons",
      date: "2025",
      image: "/vv25.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DPUVDnzkz49/",
    },
    {
      id: "sdg-solve-a-thon",
      title: "SDG Solve-A-Thon",
      category: "hackathons",
      date: "2025",
      image: "/sdg_sat.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DPT4urkk6eX/",
    },
    {
      id: "innovatex-2025",
      title: "Innovatex 2025",
      category: "hackathons",
      date: "2025",
      image: "/iv25.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DJHUUvDSUtL/",
    },
    {
      id: "tech-exhibit",
      title: "Tech Exhibit",
      category: "hackathons",
      date: "2025",
      image: "/te.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DI8orRkJzVk/",
    },
    {
      id: "turing-games",
      title: "The Turing Games",
      category: "hackathons",
      date: "2025",
      image: "/tg.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DI6KB1cpBpW/",
    },
    {
      id: "ai-unravel-robotics",
      title: "AI Unravel: Robotics Workshop",
      category: "workshops",
      date: "2025",
      image: "/au_robotics.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DI6JzSmJDwJ/",
    },
    {
      id: "oops-odyssey",
      title: "OOPS Odyssey",
      category: "hackathons",
      date: "2025",
      image: "/oop.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DI6IgP0JQW7/",
    },
    {
      id: "query-quest",
      title: "Query Quest",
      category: "hackathons",
      date: "2025",
      image: "/qq.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DI6IJkAJlk9/",
    },
    {
      id: "hackgrid-1",
      title: "HackGrid 1.0",
      category: "hackathons",
      date: "2025",
      image: "/hg1.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DIqJuuKpPI5/",
    },
    {
      id: "webweave-2025",
      title: "WebWeave 2025",
      category: "hackathons",
      date: "2025",
      image: "/ww25.png", // Using local image from public folder
      instagramUrl: "https://www.instagram.com/p/DImRc-2y7Mc/",
    },
  ];

  // Combine regular gallery items and Instagram posts
  const allItems = [
    ...galleryItems,
    ...instagramPosts.map((post) => ({
      ...post,
      isInstagram: true,
    })),
  ];

  return (
    <PageWrapper>
      <ScrollButtons />

      {/* HERO SECTION */}
      <ParallaxHero>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
          <div className="text-center">
            <div className="mb-10">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl glass-card animate-glow-pulse">
                <Camera className="w-5 h-5 text-cyan" />
                <span className="text-cyan/80 text-sm font-medium tracking-wider uppercase">
                  Event Gallery
                </span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="text-gradient letter-spacing-animate inline-block">
                Gallery
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-cyan/70 font-light tracking-widest uppercase max-w-3xl mx-auto">
              Capturing Moments of Innovation and Excellence
            </p>

            <div className="flex items-center justify-center gap-4 mt-16">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan to-transparent" />
              <div
                className="w-2 h-2 rounded-full bg-cyan animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />
            </div>
          </div>
        </div>
      </ParallaxHero>

      {/* GALLERY GRID */}
      <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, hsl(190 100% 50% / 0.15) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {allItems.length === 0 ? (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-primary-foreground/30 mx-auto mb-4" />
              <p className="text-primary-foreground/50 text-xl">No events to display yet.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  Event <span className="text-gradient">Gallery</span>
                </h2>
                <p className="text-primary-foreground/50 text-lg max-w-2xl mx-auto">
                  Captured moments from our events and workshops
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {allItems.map((item, index) => {
                  const cardContent = (
                    <>
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <h3 className="text-xl font-bold text-primary-foreground mb-2">
                            {item.title}
                          </h3>
                          <p className="text-cyan/80 text-sm font-medium">{item.date}</p>
                        </div>
                        {item.isInstagram && (
                          <div className="absolute top-4 right-4">
                            <div className="w-10 h-10 rounded-full gradient-accent flex items-center justify-center shadow-lg">
                              <Instagram className="w-5 h-5 text-primary-foreground" />
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-primary-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-primary-foreground/50 text-sm mb-3">{item.date}</p>
                        <div className="flex items-center justify-end">
                          {item.isInstagram && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg glass-card-light text-xs text-primary-foreground/70 group-hover:text-cyan transition-colors">
                              <Instagram className="w-3 h-3" />
                              <span>Instagram</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </>
                  );

                  if (item.isInstagram && item.instagramUrl) {
                    return (
                      <a
                        key={item.id}
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative overflow-hidden rounded-3xl glass-card hover:border-cyan/40 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan/10 block"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {cardContent}
                      </a>
                    );
                  }

                  return (
                    <div
                      key={item.id}
                      className="group relative overflow-hidden rounded-3xl glass-card hover:border-cyan/40 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-cyan/10"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {cardContent}
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 lg:py-32 gradient-dark relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[600px] bg-cyan/10 rounded-full blur-[150px] animate-pulse-glow" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-8">
            More Events <span className="text-gradient">Coming Soon</span>
          </h2>
          <p className="text-primary-foreground/50 text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Stay tuned for more exciting events, workshops, and competitions. Follow us to never miss an update!
          </p>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Gallery;
