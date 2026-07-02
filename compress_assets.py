import os
import sys

# Ensure pillow is installed
try:
    from PIL import Image
except ImportError:
    print("Error: The 'Pillow' library is required to run this script.")
    print("Please install it by running: pip install pillow")
    sys.exit(1)

# Path configurations
assets_dir = r"C:\Users\karth\OneDrive\Documents\Git\KarthikP-Mac-Portfolio\src\assets"
app_jsx_path = r"C:\Users\karth\OneDrive\Documents\Git\KarthikP-Mac-Portfolio\src\App.jsx"

print(f"Scanning assets directory: {assets_dir}")

if not os.path.exists(assets_dir):
    print(f"Error: Assets directory not found at {assets_dir}")
    sys.exit(1)

# Find all image files
files = os.listdir(assets_dir)
image_extensions = ('.png', '.jpg', '.jpeg')

converted_files = {}
total_saved_bytes = 0

for filename in files:
    if filename.lower().endswith(image_extensions):
        base_name, ext = os.path.splitext(filename)
        src_path = os.path.join(assets_dir, filename)
        dest_filename = f"{base_name}.webp"
        dest_path = os.path.join(assets_dir, dest_filename)
        
        print(f"\nCompressing: {filename} -> {dest_filename}")
        
        try:
            old_size = os.path.getsize(src_path)
            
            # Open image using Pillow
            with Image.open(src_path) as img:
                # Save as WebP with high quality compression
                img.save(dest_path, format="WEBP", quality=85, method=6)
            
            new_size = os.path.getsize(dest_path)
            saved_bytes = old_size - new_size
            total_saved_bytes += saved_bytes
            reduction = (saved_bytes / old_size) * 100
            
            print(f"  Size reduced from {old_size / 1024:.1f} KB to {new_size / 1024:.1f} KB")
            print(f"  Saved {saved_bytes / 1024:.1f} KB ({reduction:.1f}% reduction)")
            
            # Remove old file to keep repository clean
            os.remove(src_path)
            converted_files[filename] = dest_filename
        except Exception as e:
            print(f"  Error converting {filename}: {e}")

if converted_files:
    print(f"\nUpdating import references in {app_jsx_path}...")
    try:
        with open(app_jsx_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        updated_content = content
        for old_img, new_img in converted_files.items():
            # Replace the string in the React file
            updated_content = updated_content.replace(old_img, new_img)
            
        with open(app_jsx_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
            
        print("React references updated successfully!")
        print(f"\n🎉 Done! Total space saved across all images: {total_saved_bytes / (1024 * 1024):.2f} MB")
    except Exception as e:
        print(f"Error updating App.jsx: {e}")
else:
    print("\nNo unoptimized images found to convert.")
