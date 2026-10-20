"use client";

import { useEffect, useState } from "react";

interface MediaFile {
  name: string;
  src: string;
}

interface Clip {
  src: string;
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

function buildGroups(files: MediaFile[]): RehearsalGroup[] {
  const groups = new Map<string, RehearsalGroup>();

  for (const file of files) {
    const parsed = parseFile(file.name);
    if (!parsed) continue;
    const key = `${parsed.spectacle} ${parsed.year}`;
    if (!groups.has(key)) {
      groups.set(key, { key, spectacle: parsed.spectacle, year: parsed.year, clips: [] });
    }
    groups.get(key)!.clips.push({ src: file.src, clipNumber: parsed.clipNumber });
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
  const [groups, setGroups] = useState<RehearsalGroup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/media?folder=videos&subfolder=Rehearsal")
      .then((res) => res.json())
      .then((data: { files?: MediaFile[] }) => setGroups(buildGroups(data.files ?? [])))
      .catch(() => setGroups([]))
      .finally(() => setLoading(false));
  }, []);

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

      {/* Rehearsal videos grouped by spectacle & year */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <p className="text-center text-gray-500">Loading rehearsals…</p>
          ) : groups.length === 0 ? (
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.clips.map((clip) => (
                      <div
                        key={clip.src}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-primary-100 hover:shadow-lg transition-all"
                      >
                        <div className="aspect-video bg-black">
                          <video
                            src={clip.src}
                            controls
                            preload="metadata"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
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
