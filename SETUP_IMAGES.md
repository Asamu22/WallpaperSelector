# How to Add Category Images

To complete the homepage, you need to add the 6 category images to the project.

## Steps:

1. Save the 6 images you shared earlier with these exact names:
   - `nature.jpg` - Mountains landscape
   - `abstract.jpg` - Colorful geometric design  
   - `urban.jpg` - Architecture/building
   - `space.jpg` - Galaxy image
   - `minimalist.jpg` - Coffee cup
   - `animals.jpg` - Fox image

2. Place them in: `src/assets/images/`

3. The app will automatically load them from the categories data file.

## Alternative: Use Online Images

If you prefer, you can update `src/data/categories.js` to use online image URLs instead of local files.

Example:
```javascript
image: 'https://example.com/nature.jpg',
```

## After Adding Images:

Run `npm run dev` to see the homepage with all category images!
