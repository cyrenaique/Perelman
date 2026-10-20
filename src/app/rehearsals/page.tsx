import { Play, ExternalLink } from "lucide-react";

interface RehearsalVideo {
  file: string;
  url: string;
}

// Rehearsal clips hosted on Mega.nz. `file` encodes the spectacle and year.
const rehearsalVideos: RehearsalVideo[] = [
  { file: "MaryPoppins2022-1.mp4", url: "https://mega.nz/file/N4Um1TzY#Gee5jokgFEATlv37l4CLWCR-Bku1XizOWOrCbSBF1As" },
  { file: "MaryPoppins2022-2.mp4", url: "https://mega.nz/file/xwknVKwQ#KTUIj2RIxj35YSkbq7-hZaT-tvrYz-rUAeXtJkxkthM" },
  { file: "MaryPoppins2022-3.mp4", url: "https://mega.nz/file/hg8TyBJb#rgoiycmc3ARptjz9b6E016e3jXwl85mr2KD7pH-fcgM" },
  { file: "MaryPoppins2022-4.mp4", url: "https://mega.nz/file/5ps1Ha6b#D9XkK1EQwjxmvvIvz7bD5EolfnaV4PinqDnLWsOb4Cc" },
  { file: "MaryPoppins2022-5.mp4", url: "https://mega.nz/file/RtUH2R6a#AAkABADvvsbPcBML3rDTbQAAAAAAAAAAl0M_X4Pge0M" },
  { file: "MaryPoppins2022-6.mp4", url: "https://mega.nz/file/hh9GEZqb#y4e6V-GxQ5vULrHqck6XAUMRnj1HMjHii94zXXDAV_E" },
  { file: "MaryPoppins2022-7.mp4", url: "https://mega.nz/file/V5kFmTDR#TwQ_5bFvoFHDyHGBNFUqkO0X76HLBNlCsorWTFNwSs4" },
  { file: "MaryPoppins2022-8.mp4", url: "https://mega.nz/file/w8VwkCxY#0JEggqk4L9b6JrgXZgtfvA_1ZPaJBLYiX6aJ3Wiw_Aw" },
  { file: "MaryPoppins2022-9.mp4", url: "https://mega.nz/file/t4NQTTSY#DiL4xdDOD4ips0CAe3Xdgf93fReUNjMyjeiSX53iObk" },
  { file: "MaryPoppins2022-10.mp4", url: "https://mega.nz/file/k9UijC6S#AAAAAEZSQUh40hvm4lRdvAAAAAAAAAAActIb5uNUXbw" },
  { file: "MaryPoppins2022-11.mp4", url: "https://mega.nz/file/A4kizSBY#c176fG8LENc2wjPCnldLJKgaktCBpYP2cQitWuF1fqg" },
  { file: "MaryPoppins2022-12.mp4", url: "https://mega.nz/file/R1Vn2IQa#evZlOdOn5mS74DceSTSNrOXv8Mmhd3OatCcFWThvwVU" },
  { file: "MaryPoppins2022-13.mp4", url: "https://mega.nz/file/xo9SXDZI#a00hdimmx37MbxtFg0t_nE5e8TlpMLxg4NMtLmTodAA" },
  { file: "MaryPoppins2022-14.mp4", url: "https://mega.nz/file/M41XEbAT#Gxb4KCmlFFgu-0qThCb2mnoXcItlxCktdtOrtT2Dm-g" },
  { file: "MaryPoppins2022-15.mp4", url: "https://mega.nz/file/E5kVTSoY#M4sudwwwpwoSIZes1e9iw7qOy-ZShbcB2alVw6H7KEY" },
  { file: "MaryPoppins2022-16.mp4", url: "https://mega.nz/file/991U3boJ#QIhv21wFwxGGpBAwW2LuhUz1fx-HxAUmFSp9s_9F3hE" },
  { file: "MaryPoppins2022.mp4", url: "https://mega.nz/file/FtdwAILZ#ukMEVDM5fzECiy69MqIbi1BFLBhlj_TrGfK3sDT90Qk" },
  { file: "MaryPoppins2023 -1.mp4", url: "https://mega.nz/file/g00GWBhI#iPKv8sQnLOLSDeEpqUtiSsBiehWtPQPOoWJRo9fXaJs" },
  { file: "MaryPoppins2023 -2.mp4", url: "https://mega.nz/file/40MCwa5L#Bp_bEI0VSvWfeqBincUgegN7j5dce0R7UBGGr1RnEXE" },
  { file: "MaryPoppins2023.mp4", url: "https://mega.nz/file/Y0smnR7T#pEIUol1xH4n2h5IyyZA6B1FM_7Fc4iNb6l54bw9dxFc" },
  { file: "SoundOfMusic2025-1.mp4", url: "https://mega.nz/file/519mibAB#eZjMytya-BiH2bJkJ-xqjvLeX4lECUInfv7goax7j-Y" },
  { file: "SoundOsMusic2025.mp4", url: "https://mega.nz/file/4lMwDYya#ypmGh_khC-SVIjDKgYmgWwpZLZ3jTEo2PwTeLYPI5dY" },
];

interface Clip {
  url: string;
  thumb: string;
  clipNumber: number | null;
}

interface RehearsalGroup {
  key: string;
  spectacle: string;
  year: number;
  clips: Clip[];
}

// Turn a camelCase file prefix into a readable spectacle name.
// e.g. "MaryPoppins" -> "Mary Poppins", "SoundOfMusic"/"SoundOsMusic" -> "Sound of Music"
function prettifySpectacle(prefix: string): string {
  return prefix
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/\bO[sf]\b/g, "of")
    .trim();
}

// Parse a filename like "MaryPoppins2022-1.mp4" or "MaryPoppins2023 -2.mp4"
// into its spectacle, year and clip number.
function parseFile(name: string): { spectacle: string; year: number; clipNumber: number | null } | null {
  const match = name.match(/^(.+?)(\d{4})\s*(?:-\s*(\d+))?\.[^.]+$/);
  if (!match) return null;
  const [, prefix, year, clip] = match;
  return {
    spectacle: prettifySpectacle(prefix),
    year: parseInt(year, 10),
    clipNumber: clip ? parseInt(clip, 10) : null,
  };
}

function getRehearsalGroups(): RehearsalGroup[] {
  const groups = new Map<string, RehearsalGroup>();
  for (const video of rehearsalVideos) {
    const parsed = parseFile(video.file);
    if (!parsed) continue;
    const key = `${parsed.spectacle} ${parsed.year}`;
    if (!groups.has(key)) {
      groups.set(key, { key, spectacle: parsed.spectacle, year: parsed.year, clips: [] });
    }
    const thumb = encodeURI(`/videos/rehearsal-thumbs/${video.file.replace(/\.mp4$/i, ".jpg")}`);
    groups.get(key)!.clips.push({ url: video.url, thumb, clipNumber: parsed.clipNumber });
  }

  const result = Array.from(groups.values());
  // Clips with no number first, then ascending by number.
  for (const group of result) {
    group.clips.sort((a, b) => (a.clipNumber ?? -1) - (b.clipNumber ?? -1));
  }
  // Newest year first, then alphabetically by spectacle.
  result.sort((a, b) => b.year - a.year || a.spectacle.localeCompare(b.spectacle));
  return result;
}

export default function RehearsalsPage() {
  const groups = getRehearsalGroups();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 select-none pointer-events-none">
          <div className="absolute top-8 left-[10%] font-math text-7xl text-white/[0.04] rotate-6">&int;</div>
          <div className="absolute bottom-6 right-[12%] font-math text-6xl text-white/[0.04] -rotate-12">&sum;</div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center">
            Rehearsals
          </h1>
        </div>
      </section>

      {/* Info banner */}
      <div className="bg-amber-50 border-l-4 border-amber-400 px-4 py-3 mx-auto max-w-7xl mt-6 sm:mx-4 lg:mx-auto rounded-r-lg">
        <p className="text-amber-800 text-sm">
          <strong>Note:</strong> Rehearsal clips are hosted on Mega.nz. Click a clip to open it in a new tab.
        </p>
      </div>

      {/* Rehearsal videos grouped by spectacle & year */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {groups.length === 0 ? (
            <p className="text-center text-gray-500">No rehearsal videos available yet.</p>
          ) : (
            <div className="flex flex-col gap-14">
              {groups.map((group) => (
                <div key={group.key}>
                  <div className="flex items-baseline gap-3 mb-6 border-b border-primary-100 pb-3">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-gray-900">
                      {group.spectacle}
                    </h2>
                    <span className="text-primary-500 font-medium">{group.year}</span>
                    <span className="ml-auto text-sm text-gray-400">
                      {group.clips.length} {group.clips.length === 1 ? "clip" : "clips"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {group.clips.map((clip) => (
                      <a
                        key={clip.url}
                        href={clip.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary-900 to-primary-950 hover:ring-4 ring-primary-400 transition-all shadow-sm hover:shadow-lg"
                      >
                        <img
                          src={clip.thumb}
                          alt={`${group.spectacle} ${group.year} rehearsal`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                          <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center group-hover:bg-white/40 transition-colors">
                            <Play className="w-6 h-6 text-white ml-0.5" />
                          </div>
                        </div>
                        <ExternalLink className="absolute top-2 right-2 w-4 h-4 text-white/80 group-hover:text-white transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
