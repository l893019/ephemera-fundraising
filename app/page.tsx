import ParallaxVideo from '@/components/ParallaxVideo';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Hairline from '@/components/Hairline';
import CTA from '@/components/CTA';
import PhotoGallery from '@/components/PhotoGallery';

export default function Home() {
  // Placeholder photos - replace with actual Ephemera photos
  const photos = [
    { src: '/images/gallery-1.jpg', alt: 'Ephemera gathering', width: 800, height: 600 },
    { src: '/images/gallery-2.jpg', alt: 'Intimate performance', width: 800, height: 600 },
    { src: '/images/gallery-3.jpg', alt: 'Candlelit atmosphere', width: 800, height: 600 },
    { src: '/images/gallery-4.jpg', alt: 'Artists collaborating', width: 800, height: 600 },
    { src: '/images/gallery-5.jpg', alt: 'Cozy space', width: 800, height: 600 },
    { src: '/images/gallery-6.jpg', alt: 'Community gathering', width: 800, height: 600 },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Parallax Video Background */}
      <ParallaxVideo
        videoSrc="/videos/ephemera-ambient.mp4"
        fallbackImage="/images/ephemera-fallback.jpg"
      />

      {/* Content */}
      <div className="relative z-10">
        <Hero />

        <Hairline />

        {/* Part One: The Vision */}
        <Section marker="01" question="What is Ephemera?">
          <p>
            Ephemera creates intimate, immersive gatherings where live music, art, and atmosphere come together to make people feel more present, more connected, and more alive.
          </p>
          <p>
            We are building a cultural home for people who are hungry for beauty, belonging, and meaningful encounters with artists. Not as distant performers, but as collaborators in a shared world.
          </p>
        </Section>

        <Hairline />

        <Section marker="02" question="Why now?">
          <p>
            At a time when more and more of life is mediated by screens, algorithms, and artificial intelligence, people are longing for experiences that feel embodied, human, and real.
          </p>
          <p>
            San Francisco is full of artists, patrons, technologists, and seekers, yet there are still too few spaces where these communities can meet in ways that feel intimate, generous, and creatively alive. Ephemera exists to help restore that fabric of connection and to offer a new kind of cultural gathering rooted in presence rather than performance alone.
          </p>
        </Section>

        <Hairline />

        <Section marker="03" question="What makes it different?">
          <p>
            Each Ephemera event is designed with the feeling of entering a hidden world: a cozy, carefully curated environment where guests take off their shoes, settle into a warm and beautiful space, and encounter exceptional Bay Area artists at close range.
          </p>
          <p>
            Our gatherings center on improvisational music jams, artist conversations, and immersive creative experiences that invite people not just to observe, but to feel themselves included in the atmosphere of creation. The result is something more intimate than a concert, more welcoming than an exclusive salon, and more grounded than a typical nightlife event.
          </p>
        </Section>

        <Hairline className="my-32" />

        {/* Photo Gallery */}
        <PhotoGallery photos={photos} />

        <Hairline className="my-32" />

        {/* Part Two: The Invitation */}
        <Section marker="04" question="What are we building together?">
          <p>
            As we evolve beyond a single house-based residency model, Ephemera is becoming a nomadic collective that can bring its distinctive energy to a range of spaces across the city.
          </p>
          <p>
            Over the next six months, we will host recurring small-format gatherings alongside larger immersive events, while building the portable decor, production tools, and artistic partnerships needed to make each gathering feel transportive and cohesive.
          </p>
          <p>
            Our vision is to create not just a series of events, but a recognizable cultural ecosystem. One that supports artists, nurtures patrons, and helps re-enchant the social life of San Francisco.
          </p>
        </Section>

        <Hairline />

        <Section marker="05" question="How can you help?">
          <p>
            We are raising $30-35K to support the first six months of Ephemera, including artist payments, event production, portable decor, and the infrastructure required to sustain a high-quality pop-up model.
          </p>
          <p>
            We are inviting a founding circle of patrons to help bring this vision into being at an early and formative stage. By supporting Ephemera, you are helping to cultivate a more intimate, artist-centered, and deeply human future for culture in San Francisco.
          </p>
        </Section>

        <CTA />

        {/* Footer spacing */}
        <div className="h-32" />
      </div>
    </div>
  );
}
