# Rupesh Nambiar - Finance Services Portfolio

Professional finance services website showcasing ACCA-qualified expertise in IFRS reporting, audit, and financial management across GCC, Asia, Europe, and North America.

## 🚀 Quick Deploy to Vercel (Recommended - 5 Minutes)

### Step 1: Push Your Code to GitHub
You've already created the repository. Now add these files:

1. Go to your GitHub repository: `https://github.com/YOUR_USERNAME/services-to-offer`
2. Click "Add file" → "Upload files"
3. Upload ALL the files from this folder:
   - `package.json`
   - `vite.config.js`
   - `tailwind.config.js`
   - `postcss.config.js`
   - `index.html`
   - `.gitignore`
   - `src/` folder (with `App.jsx`, `main.jsx`, `index.css`)

**OR** use Git commands (if you have Git installed):
```bash
git add .
git commit -m "Complete project setup"
git push origin main
```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" → Sign in with GitHub
3. Click "New Project"
4. Select your `services-to-offer` repository
5. Vercel will auto-detect Vite settings - just click "Deploy"
6. Wait 2-3 minutes - Done! 🎉

Your website will be live at: `https://services-to-offer.vercel.app`

### Step 3: Add Custom Domain (Optional)
1. In Vercel dashboard → Go to your project → Settings → Domains
2. Add your custom domain (e.g., `rupeshnambiar.com`)
3. Follow DNS instructions from Vercel
4. Domain will be live in 24-48 hours

---

## 🌐 Alternative: Deploy to Netlify

### Option A: Drag & Drop (Easiest)
1. Build the project locally:
   ```bash
   npm install
   npm run build
   ```
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist/` folder to Netlify
4. Done! Get URL like `https://your-site.netlify.app`

### Option B: Connect to GitHub
1. Go to [netlify.com](https://netlify.com) → "New site from Git"
2. Connect GitHub → Select your repository
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy site"

---

## 💻 Local Development

Run the website on your computer:

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open `http://localhost:5173` in your browser

---

## 📁 Project Structure

```
services-to-offer/
├── index.html          # Entry HTML file
├── package.json        # Dependencies
├── vite.config.js      # Build configuration
├── tailwind.config.js  # Tailwind CSS config
├── postcss.config.js   # PostCSS config
├── .gitignore          # Git ignore rules
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Main component
    └── index.css       # Global styles
```

---

## 🎨 Customization

### Update Contact Information
Edit `src/App.jsx` and find these sections:
- Line 3: Email links
- Line 4: Phone number
- Line 5: LinkedIn URL

### Change Colors
Edit these constants in `src/App.jsx`:
- Search for `amber-400` to change gold accent
- Search for `slate-900` to change background
- Search for `Playfair Display` to change heading font

### Add/Remove Services
Edit the `services` array in `src/App.jsx` (around line 50)

---

## 🔗 Share Your Website

Once deployed, share your link:

### Email Signature
```
Rupesh Nambiar, ACCA
Finance Professional | Dubai, UAE
🌐 https://your-site.vercel.app
📧 rupeshnambiar@hotmail.com
```

### LinkedIn
1. Profile → Featured → Add featured → Link
2. Paste your website URL
3. Add title: "Finance Services Portfolio"

### Business Cards
Generate QR code at [qr-code-generator.com](https://www.qr-code-generator.com)

---

## 🆘 Troubleshooting

### "npm: command not found"
Install Node.js from [nodejs.org](https://nodejs.org)

### Build fails on Vercel/Netlify
Check that all files are uploaded to GitHub, especially the `src/` folder

### Website shows blank page
Check browser console (F12) for errors. Ensure all files are in correct folders.

### Want to make changes after deployment
1. Update files in GitHub
2. Vercel/Netlify auto-redeploys (or manually trigger)
3. Changes live in 1-2 minutes

---

## 📞 Support

Created by Rupesh Nambiar  
📧 rupeshnambiar@hotmail.com  
🔗 [LinkedIn](https://linkedin.com/in/rupeshsnambiar)

---

## 📜 License

© 2026 Rupesh Nambiar. All rights reserved.
