# Deployment Guide

## Deploy to Vercel (Recommended)

This Next.js portfolio is fully optimized for deployment on Vercel, the creators of Next.js.

### Quick Start

1. **Push to GitHub**
   - Push your code to a GitHub repository

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js configuration

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in seconds!

### Environment Variables

No environment variables are required for basic deployment. However, if you add features like contact forms or analytics, add them in the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables (e.g., API keys)
4. Re-deploy for changes to take effect

### Custom Domain

1. In Vercel dashboard, go to Settings > Domains
2. Add your custom domain
3. Follow the DNS configuration steps

## Alternative Deployment Options

### Netlify
- Connect your GitHub repo to Netlify
- Select Next.js from build options
- Deploy automatically on every push

### Docker
\`\`\`bash
docker build -t shubhanga-portfolio .
docker run -p 3000:3000 shubhanga-portfolio
\`\`\`

## Local Development

\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
\`\`\`

## Production Build

\`\`\`bash
npm run build
npm start
\`\`\`

## Tips for Success

- Keep images optimized (Next.js Image component auto-optimizes)
- Use Vercel Analytics for insights (already integrated)
- Monitor performance in Vercel Dashboard
- Set up GitHub branch protections for safety
- Enable automatic deployments for production
