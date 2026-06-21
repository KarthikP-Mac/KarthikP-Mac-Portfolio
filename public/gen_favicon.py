from PIL import Image, ImageDraw
import os

# Use the ORIGINAL unmodified profile photo as source
src = r'e:\java projects\react project\portfolio\portfolio\src\assets\karthik_profile.png'
pub = r'e:\java projects\react project\portfolio\portfolio\public'

SIZE = 512
img = Image.open(src).convert('RGBA')
iw, ih = img.size
print(f'Source image: {iw}x{ih}')

# Crop a square from center
side = min(iw, ih)
left = (iw - side) // 2
top  = (ih - side) // 2
img_sq = img.crop((left, top, left + side, top + side))
img_sq = img_sq.resize((SIZE, SIZE), Image.LANCZOS)

# Apply circular mask — NO border rings, just the plain photo
mask = Image.new('L', (SIZE, SIZE), 0)
ImageDraw.Draw(mask).ellipse([0, 0, SIZE - 1, SIZE - 1], fill=255)

canvas = Image.new('RGBA', (SIZE, SIZE), (0, 0, 0, 0))
canvas.paste(img_sq, (0, 0), mask)

def save_circle(base, out_path, size, fmt='PNG', **kwargs):
    c = base.resize((size, size), Image.LANCZOS)
    c.save(out_path, fmt, **kwargs)
    print(f'  Saved {os.path.basename(out_path)} ({size}x{size}): {os.path.getsize(out_path):,} bytes')

save_circle(canvas, os.path.join(pub, 'favicon-512.png'),      512, optimize=True, compress_level=9)
save_circle(canvas, os.path.join(pub, 'favicon.png'),          512, optimize=True, compress_level=9)
save_circle(canvas, os.path.join(pub, 'apple-touch-icon.png'), 180, optimize=True)
save_circle(canvas, os.path.join(pub, 'favicon-48x48.png'),     48, optimize=True)
save_circle(canvas, os.path.join(pub, 'favicon-96x96.png'),     96, optimize=True)
save_circle(canvas, os.path.join(pub, 'favicon-32x32.png'),     32, optimize=True)
save_circle(canvas, os.path.join(pub, 'favicon-16x16.png'),     16, optimize=True)

webp_path = os.path.join(pub, 'favicon-512.webp')
canvas.resize((512, 512), Image.LANCZOS).save(webp_path, 'WEBP', quality=85)
print(f'  Saved favicon-512.webp: {os.path.getsize(webp_path):,} bytes')

ico_path  = os.path.join(pub, 'favicon.ico')
canvas.save(ico_path, format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
print(f'  Saved favicon.ico: {os.path.getsize(ico_path):,} bytes')

print('All done! No borders, just the original photo.')
