# Statewide Litigation Group (SLG) — Deployment & GoDaddy Domain Guide

Is project ko GitHub pe push karne, Vercel pe deploy karne, aur GoDaddy custom domain attach karne ka complete step-by-step process neeche diya gaya hai.

---

## 1. Project Overview & Features
- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS with custom **Navy & Gold** royal legal palette (`#0B1B3D` and `#C5A059`) matching your official firm logo.
- **Official Logo**: Configured as website logo (`/logo.png`) and Favicon (`/favicon.png`).
- **Alliances & Social Links**:
  - **We Want Change (Facebook)**: `https://www.facebook.com/share/1CXb8Mf5qS/?mibextid=wwXIfr`
  - **Law Nest (Instagram)**: `https://www.instagram.com/invites/contact/?utm_content=s4h1oyg&dlrf=ftbvsg1lvwqr`
- **Mobile Responsive**: Fully optimized with sticky navigation, touch pills for court coordinates, mobile drawer menu, and reactive modals.
- **Production Routing**: `vercel.json` pre-configured for SPA routing and asset caching.

---

## 2. GitHub pe Code Upload Kaise Karein

Agar aapne abhi tak Git initialize nahi kiya hai, to terminal / command prompt me ye commands chalayein:

```bash
# 1. Project folder me jayein (agar already nahi hain):
cd "c:\Users\150ax\OneDrive\Desktop\SLG"

# 2. Git initialize karein:
git init

# 3. Saari files add karein:
git add .

# 4. First commit karein:
git commit -m "Statewide Litigation Group React website initial commit"

# 5. Main branch set karein:
git branch -M main

# 6. GitHub pe jakar new repository banayein (e.g., 'slg-legal' ya 'statewide-litigation-group').
# Uske baad GitHub repository ka URL link karein:
git remote add origin https://github.com/APNA_GITHUB_USERNAME/REPO_NAME.git

# 7. Code push karein:
git push -u origin main
```

---

## 3. Vercel pe Deploy Kaise Karein (Free & Instant)

1. [https://vercel.com](https://vercel.com) par jayein aur apne GitHub account se **Log in** karein.
2. Dashboard par **"Add New..."** button click karein aur **"Project"** select karein.
3. Apni GitHub repository (`slg-legal` / `statewide-litigation-group`) choose karke **"Import"** par click karein.
4. Vercel automatically project ko detect kar lega:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **"Deploy"** button par click karein.
6. 1 minute ke andar aapki website live ho jayegi aur aapko ek live Vercel URL mil jayega (e.g., `https://slg-legal.vercel.app`).

---

## 4. GoDaddy Domain Vercel se Kaise Connect Karein

Jab aap GoDaddy se domain buy kar len (e.g. `yourdomain.com`), to usse connect karne ke liye ye steps follow karein:

### Step A: Vercel Dashboard me Domain Add Karein
1. Vercel me apne deployed project ko open karein.
2. **Settings** tab par click karein -> Left menu se **"Domains"** select karein.
3. Apne domain ka naam enter karein (e.g. `yourdomain.com`) aur **"Add"** click karein.
4. Vercel aapko `yourdomain.com` aur `www.yourdomain.com` dono recommend karega.

### Step B: GoDaddy DNS Settings me Records Add Karein
1. [https://www.godaddy.com](https://www.godaddy.com) me login karein.
2. **My Products** -> **Domains** me jakar apne domain ke **"DNS"** ya **"Manage DNS"** button par click karein.
3. **DNS Records** section me niche diye 2 records add / edit karein:

| Type | Name / Host | Value / Points to | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | 1/2 Hour (1800s) |
| **CNAME** | `www` | `cname.vercel-dns.com` | 1/2 Hour (1800s) |

> **Note**: Agar GoDaddy me already koi puraana **A Record** `@` ke saath bana ho, to use Edit karke Value `76.76.21.21` kar dein.

### Step C: Verification & Free SSL
- GoDaddy me save karne ke 5-15 minute ke andar Vercel DNS verify kar lega aur green checkmark **"Valid Configuration"** show karega.
- Vercel automatically **Free SSL Certificate (HTTPS)** generate karke activate kar dega.
- Aapki website live custom domain par securely khulne lagegi!

---

## 5. Local Development Commands
Agar aapko locally run karna ho:
```bash
# Development server start karein:
npm run dev

# Production build test karein:
npm run build
```
