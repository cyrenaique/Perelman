"""
Rename numbered photos in folders to img_001.jpeg format
so they sort correctly on Yandex Disk (alphabetical order).

Usage:
    python rename_photos.py <folder_path>
    python rename_photos.py <folder_path> --dry-run   (preview without renaming)

Examples:
    python rename_photos.py "C:\Photos\2026"
    python rename_photos.py "C:\Photos\2026" --dry-run
"""

import os
import re
import sys


def extract_number(filename):
    """Extract leading number from filename like '22a.jpeg' -> (22, 'a')"""
    name = os.path.splitext(filename)[0]
    match = re.match(r"^(\d+)(\D*)$", name)
    if match:
        return (int(match.group(1)), match.group(2))
    return (float("inf"), name)


def rename_photos(folder_path, dry_run=False):
    if not os.path.isdir(folder_path):
        print(f"Error: '{folder_path}' is not a valid directory.")
        sys.exit(1)

    extensions = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"}
    files = []

    for f in os.listdir(folder_path):
        ext = os.path.splitext(f)[1].lower()
        if ext in extensions:
            files.append(f)

    # Sort numerically
    files.sort(key=extract_number)

    if not files:
        print("No image files found in the folder.")
        return

    total = len(files)
    width = len(str(total))  # pad width (e.g. 3 digits for 70 files)
    width = max(width, 3)    # minimum 3 digits

    print(f"Found {total} images in '{folder_path}'\n")

    for i, old_name in enumerate(files, start=1):
        ext = os.path.splitext(old_name)[1].lower()
        new_name = f"img_{i:0{width}d}{ext}"
        old_path = os.path.join(folder_path, old_name)
        new_path = os.path.join(folder_path, new_name)

        if dry_run:
            print(f"  [DRY RUN] {old_name}  ->  {new_name}")
        else:
            os.rename(old_path, new_path)
            print(f"  {old_name}  ->  {new_name}")

    if dry_run:
        print(f"\nDry run complete. No files were renamed.")
    else:
        print(f"\nDone! Renamed {total} files.")


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python rename_photos.py <folder_path> [--dry-run]")
        sys.exit(1)

    folder = sys.argv[1]
    dry = "--dry-run" in sys.argv

    rename_photos(folder, dry_run=dry)
