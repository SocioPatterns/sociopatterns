#!/usr/bin/env python3
"""
Generate images.json manifest file for the home page gallery.
Run this script after adding images to assets/img/roll/
"""
import json
from pathlib import Path

# Path to the roll directory
roll_dir = Path('assets/img/roll')

# Find all image files (jpg, jpeg, png)
image_extensions = {'.jpg', '.jpeg', '.png', '.JPG', '.JPEG', '.PNG'}
image_files = []

for file in roll_dir.iterdir():
    if file.is_file() and file.suffix in image_extensions:
        image_files.append(file.name)

# Sort for consistency
image_files.sort()

# Write to images.json
manifest_path = roll_dir / 'images.json'
with open(manifest_path, 'w') as f:
    json.dump(image_files, f, indent=2)

print(f"Generated {manifest_path}")
print(f"Found {len(image_files)} images:")
for img in image_files[:10]:  # Show first 10
    print(f"  - {img}")
if len(image_files) > 10:
    print(f"  ... and {len(image_files) - 10} more")
