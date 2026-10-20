# Regenerates thumbnails for the Rehearsals page from the local video files.
#
# Requirements: ffmpeg on PATH, and the rehearsal .mp4 files present locally in
# public/videos/Rehearsal/ (these are git-ignored; they are hosted on Mega.nz
# and only kept locally as the source for thumbnails).
#
# Usage (from repo root):
#   pwsh ./scripts/generate-rehearsal-thumbs.ps1
#
# Each thumbnail is a frame grabbed ~1s into the clip, scaled to 640px wide,
# saved as public/videos/rehearsal-thumbs/<same-name>.jpg. The Rehearsals page
# maps each clip to its thumbnail by filename.

$root = Split-Path $PSScriptRoot -Parent
$src = Join-Path $root "public/videos/Rehearsal"
$out = Join-Path $root "public/videos/rehearsal-thumbs"

# ffmpeg writes progress to stderr; don't let that abort the script.
$ErrorActionPreference = "Continue"

if (!(Test-Path $src)) {
  Write-Error "Source folder not found: $src (download the rehearsal mp4 files there first)"
  exit 1
}

New-Item -ItemType Directory -Force -Path $out | Out-Null

Get-ChildItem "$src/*.mp4" | ForEach-Object {
  $thumb = Join-Path $out ($_.BaseName + ".jpg")
  # Fast seek 1s in; fall back to the first frame for very short clips.
  ffmpeg -y -ss 1 -i $_.FullName -frames:v 1 -vf "scale=640:-2" -q:v 3 $thumb *> $null
  if (!(Test-Path $thumb) -or (Get-Item $thumb).Length -eq 0) {
    ffmpeg -y -i $_.FullName -frames:v 1 -vf "scale=640:-2" -q:v 3 $thumb *> $null
  }
  if (Test-Path $thumb) { Write-Output ("OK   " + $_.BaseName + ".jpg") }
  else { Write-Output ("FAIL " + $_.Name) }
}
