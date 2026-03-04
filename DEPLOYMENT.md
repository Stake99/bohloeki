# Deployment Guide - Bohloeki Enterprises Website

This guide provides detailed instructions for deploying the Bohloeki Enterprises corporate website to production.

## Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Environment Configuration](#environment-configuration)
3. [Deployment Platforms](#deployment-platforms)
4. [Post-Deployment Verification](#post-deployment-verification)
5. [Maintenance and Updates](#maintenance-and-updates)

## Pre-Deployment Checklist

Before deploying to production, ensure the following tasks are completed:

### Content Updates

- [ ] Replace all placeholder images in `public/images/`
- [ ] Update company logo (`public/images/logo.svg`)
- [ ] Verify all text content is accurate and proofread
- [ ] Update contact information (phone, email, address)
- [ ] Verify production metrics and statistics are current
- [ ] Review all page content for accuracy

### Technical Verification

- [ ] Run production build successfully: `npm run build`
- [ ] Verify no TypeScript errors: `npm run type-check`
- [ ] Verify no linting errors: `npm run lint`
- [ ] Test all pages load correctly
- [ ] Test contact form validation
- [ ] Test mobile menu functionality
- [ ] Verify all links work correctly
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on multiple devices (mobile, tablet, desktop)

### Performance and Accessibility

- [ ] Run Lighthouse audit (target: 90+ performance, 100 accessibility)
- [ ] Test with screen reader (VoiceOver, NVDA, or JAWS)
- [ ] Verify keyboard navigation works on all pages
- [ ] Check color contrast meets WCAG AA standards
- [ ] Verify images have proper alt text
- [ ] Test with slow network connection

### SEO and Metadata

- [ ] Verify all pages have unique titles and descriptions
- [ ] Check OpenGraph tags are correct
- [ ] Verify structured data (JSON-LD) is valid
- [ ] Test sitemap.xml is accessible
- [ ] Test robots.txt is accessible
- [ ] Verify canonical URLs are correct

## Environment Configuration

### Required Environment Variables

Create a `.env.local` file (for local development) or configure in your deployment platform:

```bash
# Site Configuration
NEXT_PUBLIC_BASE_URL=https://bohloeki.com
NEXT_PUBLIC_SITE_NAME=Bohloeki Enterprises

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@bohloeki.com
NEXT_PUBLIC_CONTACT_PHONE=+266-XXXX-XXXX
```

### Optional Environment Variables

```bash
# Analytics (if using Google Analytics)
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX

# Google Tag Manager (if using GTM)
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Form Submission Endpoint (if using external form service)
NEXT_PUBLIC_FORM_ENDPOINT=https://api.example.com/contact
```

### Environment-Specific Configuration

**Development:**
```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

**Staging:**
```bash
NEXT_PUBLIC_BASE_URL=https://staging.bohloeki.com
```

**Production:**
```bash
NEXT_PUBLIC_BASE_URL=https://bohloeki.com
```

## Deployment Platforms

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js applications, offering zero-configuration deployment.

#### Initial Setup

1. **Create Vercel Account**
   - Sign up at [vercel.com](https://vercel.com)
   - Connect your Git provider (GitHub, GitLab, or Bitbucket)

2. **Import Project**
   - Click "New Project"
   - Select your repository
   - Vercel will auto-detect Next.js configuration

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables from `.env.local.example`
   - Set variables for Production, Preview, and Development environments

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy your application
   - You'll receive a deployment URL (e.g., `your-project.vercel.app`)

#### Custom Domain Setup

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `bohloeki.com`)
3. Configure DNS records as instructed by Vercel:
   - Add A record pointing to Vercel's IP
   - Or add CNAME record pointing to `cname.vercel-dns.com`
4. Wait for DNS propagation (can take up to 48 hours)
5. Vercel will automatically provision SSL certificate

#### Automatic Deployments

- **Production**: Pushes to `main` branch trigger production deployments
- **Preview**: Pull requests trigger preview deployments
- **Rollback**: Easy rollback to previous deployments in dashboard

#### Build Configuration

Vercel automatically detects Next.js and uses:
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 18.x (or specified in `package.json`)

### Option 2: Netlify

Netlify is another excellent option for static site hosting.

#### Initial Setup

1. **Create Netlify Account**
   - Sign up at [netlify.com](https://netlify.com)
   - Connect your Git provider

2. **Import Project**
   - Click "New site from Git"
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `.next`
     - **Node version**: 18 (set in `netlify.toml` or environment)

3. **Configure Environment Variables**
   - Go to Site Settings → Environment Variables
   - Add all required variables

4. **Deploy**
   - Click "Deploy site"
   - Netlify will build and deploy your application

#### Custom Domain Setup

1. Go to Domain Settings
2. Add custom domain
3. Configure DNS records as instructed
4. SSL certificate is automatically provisioned

### Option 3: Self-Hosted (VPS/Cloud Server)

For self-hosting on a VPS or cloud server (AWS EC2, DigitalOcean, etc.):

#### Server Requirements

- Node.js 18+
- npm or yarn
- Process manager (PM2 recommended)
- Reverse proxy (Nginx or Apache)
- SSL certificate (Let's Encrypt recommended)

#### Deployment Steps

1. **Clone Repository**
```bash
git clone https://github.com/your-org/bohloeki-website.git
cd bohloeki-website
```

2. **Install Dependencies**
```bash
npm install
```

3. **Configure Environment**
```bash
cp .env.local.example .env.local
# Edit .env.local with production values
nano .env.local
```

4. **Build Application**
```bash
npm run build
```

5. **Install PM2**
```bash
npm install -g pm2
```

6. **Start Application with PM2**
```bash
pm2 start npm --name "bohloeki-website" -- start
pm2 save
pm2 startup
```

7. **Configure Nginx**

Create `/etc/nginx/sites-available/bohloeki`:

```nginx
server {
    listen 80;
    server_name bohloeki.com www.bohloeki.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/bohloeki /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

8. **Setup SSL with Let's Encrypt**
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d bohloeki.com -d www.bohloeki.com
```

#### Updating Deployment

```bash
cd bohloeki-website
git pull origin main
npm install
npm run build
pm2 restart bohloeki-website
```

## Post-Deployment Verification

After deployment, verify the following:

### Functional Testing

- [ ] Visit all pages and verify they load correctly
- [ ] Test navigation between pages
- [ ] Test mobile menu on mobile devices
- [ ] Submit contact form with valid and invalid data
- [ ] Test all internal and external links
- [ ] Verify images load correctly
- [ ] Test animations and interactions

### Performance Testing

- [ ] Run Lighthouse audit on production URL
- [ ] Check page load times with slow 3G throttling
- [ ] Verify images are properly optimized
- [ ] Check bundle sizes in Network tab
- [ ] Verify static generation (view page source)

### SEO Verification

- [ ] Verify meta tags in page source
- [ ] Check OpenGraph tags with [OpenGraph Debugger](https://www.opengraph.xyz/)
- [ ] Test Twitter Card with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verify sitemap.xml is accessible: `https://bohloeki.com/sitemap.xml`
- [ ] Verify robots.txt is accessible: `https://bohloeki.com/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools

### Security Verification

- [ ] Verify HTTPS is working
- [ ] Check SSL certificate is valid
- [ ] Test security headers with [Security Headers](https://securityheaders.com/)
- [ ] Verify no console errors or warnings
- [ ] Test CORS if using external APIs

### Accessibility Testing

- [ ] Test with keyboard navigation (Tab, Enter, Escape)
- [ ] Test with screen reader (VoiceOver, NVDA, JAWS)
- [ ] Verify color contrast with [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ ] Test with browser zoom (200%, 400%)
- [ ] Verify focus indicators are visible

## Maintenance and Updates

### Regular Maintenance Tasks

**Weekly:**
- Monitor website uptime and performance
- Check for broken links
- Review analytics data

**Monthly:**
- Update dependencies: `npm update`
- Run security audit: `npm audit`
- Review and update content as needed
- Check Lighthouse scores

**Quarterly:**
- Review and update SEO metadata
- Update production metrics and statistics
- Review accessibility compliance
- Update images and visual content

### Updating Content

To update website content:

1. Edit content in respective page files (`app/*/page.tsx`)
2. Update constants in `lib/constants.ts`
3. Test changes locally: `npm run dev`
4. Commit and push changes
5. Deployment platform will automatically rebuild and deploy

### Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update package-name

# Test after updates
npm run build
npm run type-check
npm run lint
```

### Rollback Procedure

**Vercel/Netlify:**
1. Go to Deployments in dashboard
2. Find previous working deployment
3. Click "Promote to Production"

**Self-Hosted:**
```bash
cd bohloeki-website
git log --oneline  # Find commit hash
git checkout <commit-hash>
npm install
npm run build
pm2 restart bohloeki-website
```

### Monitoring and Analytics

**Recommended Tools:**
- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Analytics**: Google Analytics, Plausible
- **Error Tracking**: Sentry, LogRocket
- **Performance Monitoring**: Vercel Analytics, Lighthouse CI

### Support and Troubleshooting

**Common Issues:**

1. **Build Fails**
   - Check TypeScript errors: `npm run type-check`
   - Check for missing dependencies: `npm install`
   - Review build logs for specific errors

2. **Images Not Loading**
   - Verify images exist in `public/images/`
   - Check image paths in components
   - Verify image domains in `next.config.js`

3. **Environment Variables Not Working**
   - Ensure variables start with `NEXT_PUBLIC_` for client-side
   - Redeploy after updating environment variables
   - Clear cache and rebuild

4. **Slow Performance**
   - Run Lighthouse audit to identify issues
   - Check bundle size: `npm run build`
   - Optimize images and assets
   - Enable CDN caching

## Conclusion

Following this deployment guide ensures a smooth, secure, and optimized deployment of the Bohloeki Enterprises website. Regular maintenance and monitoring will keep the website performing at its best.

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
