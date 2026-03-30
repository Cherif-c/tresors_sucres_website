import { site } from '@/config/site';

function MapFrame({ src, title }: { src: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft">
      <div className="relative h-[min(70vh,520px)] min-h-[360px] w-full">
        <iframe
          title={title}
          src={src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <div className="px-5 py-4 text-sm text-tsCream/80">
        {site.address.line1}, {site.address.cityRegion}
      </div>
    </div>
  );
}

export default function GoogleMap() {
  const placeEmbed = site.googleMapsPlaceEmbedSrc;
  const locatorUrl = site.googleMapLocatorUrl;
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY;
  const address = site.address.full;

  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address,
  )}`;

  const fallback = (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 text-tsCream/90 shadow-soft">
      <div className="text-xs uppercase tracking-[0.22em] text-tsCream/65">Carte</div>
      <div className="mt-3 text-sm leading-7">
        Carte non disponible ici. Ouvre Google Maps pour l’itinéraire et un aperçu du quartier.
      </div>
      <div className="mt-4">
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-tsCream px-5 py-3 text-sm font-semibold text-tsBurgundy transition hover:opacity-90"
        >
          Ouvrir dans Google Maps
        </a>
      </div>
    </div>
  );

  if (placeEmbed.length > 0) {
    return <MapFrame src={placeEmbed} title="Carte — Trésors Sucrés sur Google Maps" />;
  }

  if (locatorUrl.length > 0) {
    return <MapFrame src={locatorUrl} title="Carte — Localisation" />;
  }

  if (apiKey) {
    const embedSrc = `https://www.google.com/maps/embed/v1/place?key=${encodeURIComponent(
      apiKey,
    )}&q=${encodeURIComponent(address)}`;

    return (
      <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-soft">
        <iframe
          title="Google Maps"
          src={embedSrc}
          className="h-[360px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="px-5 py-4 text-sm text-tsCream/80">
          {site.address.line1}, {site.address.cityRegion}
        </div>
      </div>
    );
  }

  return fallback;
}
