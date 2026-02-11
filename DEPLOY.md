# Deploy to Netlify via GitHub

## Step 1: Push to GitHub

1. Create a new repository on GitHub (name it something like `portfolio` or `jaykumar-portfolio`)
2. Copy the repository URL (it will look like: `https://github.com/YOUR_USERNAME/portfolio.git`)

3. Run these commands in your terminal:

```bash
# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push your code
git branch -M main
git push -u origin main
```

## Step 2: Deploy on Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your repository
5. Netlify will automatically detect Next.js and use these settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
   - **Node version:** 18

6. Click "Deploy site"

Your site will be live at: `https://your-site-name.netlify.app`

## Alternative: Quick Deploy (if you have GitHub CLI)

If you have GitHub CLI installed, you can also run:
```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

Then follow Step 2 above.






