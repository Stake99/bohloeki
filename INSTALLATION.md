# 🚀 Installation & Setup Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Modern browser with WebGL support

---

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers for R3F
- `three` - 3D library
- `gsap` - Animation library
- `@types/three` - TypeScript definitions

---

## Step 2: Verify Installation

Check that all packages are installed:

```bash
npm list @react-three/fiber @react-three/drei three gsap
```

Expected output:
```
├── @react-three/drei@9.105.0
├── @react-three/fiber@8.16.0
├── gsap@3.12.5
└── three@0.163.0
```

---

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Step 4: Verify 3D Features

### Check Homepage
1. Navigate to homepage
2. Look for rotating 3D tire in hero section
3. Scroll down to see animated stats counters
4. Hover over service cards for glass effects

### Check Dark Mode
1. Click dark mode toggle in header (sun/moon icon)
2. Verify theme switches smoothly
3. Check that all components adapt to dark theme

### Check Animations
1. Scroll through the page
2. Watch for elements revealing on scroll
3. Hover over buttons for magnetic effect
4. Check parallax background movement

---

## Step 5: Build for Production

```bash
npm run build
```

This will:
- Compile TypeScript
- Optimize 3D assets
- Bundle JavaScript
- Optimize images
- Generate static pages

---

## Step 6: Test Production Build

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) and verify:
- All 3D elements work
- Animations are smooth
- Dark mode functions
- No console errors

---

## Troubleshooting

### Issue: Dependencies Won't Install

**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

---

### Issue: 3D Model Not Rendering

**Check WebGL Support:**
```javascript
// Open browser console and run:
const canvas = document.createElement('canvas');
const gl = canvas.getContext('webgl');
console.log(gl ? 'WebGL supported' : 'WebGL not supported');
```

**Solutions:**
- Update your browser to latest version
- Enable hardware acceleration in browser settings
- Try a different browser (Chrome, Firefox, Safari)

---

### Issue: Build Fails

**Common Causes:**
1. TypeScript errors
2. Missing dependencies
3. Syntax errors

**Solution:**
```bash
# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

---

### Issue: Slow Performance

**Solutions:**

1. **Disable 3D on Mobile:**
```tsx
<Hero3DEnhanced show3D={false} />
```

2. **Reduce Animation Complexity:**
```tsx
// In components, check for mobile
const isMobile = window.innerWidth < 768;
```

3. **Optimize Images:**
```bash
# Use WebP format
# Compress images before uploading
# Use appropriate sizes
```

---

## Browser Compatibility

### Fully Supported
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Partially Supported
- ⚠️ Safari 13 (no 3D)
- ⚠️ Firefox 85-87 (limited 3D)

### Not Supported
- ❌ Internet Explorer 11
- ❌ Opera Mini

---

## Performance Optimization

### 1. Enable Production Mode
```bash
NODE_ENV=production npm run build
```

### 2. Analyze Bundle Size
```bash
npm run build
# Check .next/analyze/ for bundle report
```

### 3. Monitor Performance
```javascript
// Add to app/layout.tsx
import { logPerformanceMetrics } from '@/lib/performance';

useEffect(() => {
  logPerformanceMetrics();
}, []);
```

---

## Environment Variables

Create `.env.local` file:

```env
# Optional: Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Optional: API endpoints
NEXT_PUBLIC_API_URL=https://api.example.com
```

---

## Development Tools

### Recommended VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

### Browser DevTools
- React Developer Tools
- Redux DevTools (if using Redux)
- Lighthouse (for performance audits)

---

## Testing

### Run Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Generate Coverage Report
```bash
npm run test:coverage
```

---

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

---

## Post-Installation Checklist

- [ ] Dependencies installed successfully
- [ ] Development server runs without errors
- [ ] Homepage displays 3D hero
- [ ] Stats counters animate on scroll
- [ ] Service cards have glass effect
- [ ] Dark mode toggle works
- [ ] Mobile responsive
- [ ] Production build succeeds
- [ ] No console errors
- [ ] Lighthouse score 90+

---

## Getting Help

### Documentation
- [3D Upgrade Guide](./3D-UPGRADE-GUIDE.md)
- [Quick Start](./QUICK-START-3D.md)
- [Migration Guide](./MIGRATION-GUIDE.md)
- [Features Summary](./3D-FEATURES-SUMMARY.md)

### External Resources
- [Next.js Docs](https://nextjs.org/docs)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [Three.js](https://threejs.org/docs/)
- [GSAP](https://greensock.com/docs/)
- [Framer Motion](https://www.framer.com/motion/)

### Community
- [Next.js Discord](https://discord.gg/nextjs)
- [React Three Fiber Discord](https://discord.gg/poimandres)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## Next Steps

1. ✅ Complete installation
2. 📖 Read [Quick Start Guide](./QUICK-START-3D.md)
3. 🎨 Explore [Features Summary](./3D-FEATURES-SUMMARY.md)
4. 🔄 Use [Migration Guide](./MIGRATION-GUIDE.md) for other pages
5. 🚀 Deploy to production

---

**Installation Complete! 🎉**

Your Bohloeki website is now ready with 3D-enhanced, immersive features.

Start the development server and explore the new premium experience:
```bash
npm run dev
```
