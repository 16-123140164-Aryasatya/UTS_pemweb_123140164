# 🚀 PANDUAN LENGKAP: Dari NOL Sampai DEPLOY

### Yang Harus Sudah Terinstall:
```bash
# Cek apakah sudah terinstall:
node --version    # Harus v14 atau lebih baru
npm --version     # Harus v6 atau lebih baru
git --version     # Harus v2 atau lebih baru
```

**Jika belum ada, install:**
1. **Node.js**: Download dari https://nodejs.org (pilih LTS version)
2. **Git**: Download dari https://git-scm.com
3. **VS Code** (recommended): Download dari https://code.visualstudio.com

---

## LANGKAH 1: Buat Project React (5 menit)

### 1.1 Buka Terminal/Command Prompt

**Windows:**
- Tekan `Win + R`
- Ketik `cmd` → Enter

**Mac/Linux:**
- Tekan `Cmd + Space`
- Ketik `terminal` → Enter

### 1.2 Navigate ke Folder Yang Diinginkan

```bash
# Contoh: Masuk ke folder Documents
cd Documents

# Atau buat folder baru untuk project
mkdir My_Projects
cd My_Projects
```

### 1.3 Create React App

```bash
# Jalankan command ini (tunggu 2-5 menit)
npx create-react-app news-portal

# Setelah selesai, masuk ke folder project
cd news-portal
```

**Cek berhasil atau tidak:**
```bash
npm start
```
Browser akan otomatis buka dengan logo React yang berputar. **BERHASIL!**

Tutup server dengan: `Ctrl + C`

---

## LANGKAH 2: Buat Struktur Folder (3 menit)

### 2.1 Buka Project di VS Code

```bash
# Di terminal, masih di folder news-portal:
code .
```

Atau manual: Buka VS Code → File → Open Folder → Pilih `news-portal`

### 2.2 Buat Folder-Folder Baru

Di VS Code, buat folder baru di dalam `src/`:

**Cara:** Klik kanan pada folder `src` → New Folder → Ketik nama folder

Buat folder-folder ini:
```
src/
├── components/    ← Buat folder ini
├── services/      ← Buat folder ini
├── utils/         ← Buat folder ini
└── styles/        ← Buat folder ini
```

### 2.3 Buat Folder Screenshots

Klik kanan pada folder **ROOT** (news-portal) → New Folder → `screenshots`

---

## LANGKAH 3: Copy File-File Utama (10 menit)

### 3.1 Update `public/index.html`

1. Buka file: `public/index.html`
2. **HAPUS semua isinya**
3. Copy dari **Artifact #3** (public/index.html)
4. Paste ke file
5. Save (`Ctrl + S`)

### 3.2 Buat File-file di `public/`

**A. Buat `public/manifest.json`:**
1. Klik kanan folder `public` → New File
2. Nama: `manifest.json`
3. Copy dari **Artifact #27** (public/manifest.json)
4. Save

**B. Buat `public/robots.txt`:**
1. Klik kanan folder `public` → New File
2. Nama: `robots.txt`
3. Copy dari **Artifact #28** (public/robots.txt)
4. Save

### 3.3 Update File-file di Root

**A. Update `.gitignore`:**
1. Buka file `.gitignore` (sudah ada)
2. Copy dari **Artifact #21** (.gitignore)
3. Replace semua isi
4. Save

**B. Buat `.env.example`:**
1. Klik kanan di root folder → New File
2. Nama: `.env.example`
3. Copy dari **Artifact #20** (.env.example)
4. Save

**C. Buat `.env`:** **PENTING!**
1. Klik kanan di root folder → New File
2. Nama: `.env` (HARUS TEPAT, tidak ada .txt)
3. Ketik:
```
REACT_APP_NEWS_API_KEY=SEMENTARA_KOSONG
```
4. Save (Nanti kita isi dengan API key asli)

**D. Buat `vercel.json`:**
1. Klik kanan di root folder → New File
2. Nama: `vercel.json`
3. Copy dari **Artifact #25** (vercel.json)
4. Save

---

## LANGKAH 4: Copy Services & Utils (5 menit)

### 4.1 Buat `src/services/newsApi.js`

1. Klik kanan folder `src/services` → New File
2. Nama: `newsApi.js`
3. Copy dari **Artifact #4** (src/services/newsApi.js)
4. Save

### 4.2 Buat `src/utils/dateFormatter.js`

1. Klik kanan folder `src/utils` → New File
2. Nama: `dateFormatter.js`
3. Copy dari **Artifact #5** (src/utils/dateFormatter.js)
4. Save

---

## LANGKAH 5: Copy Semua Components (15 menit)

**Buat 9 file di folder `src/components/`:**

### Cara membuat file component:
1. Klik kanan folder `src/components`
2. New File
3. Ketik nama file (sesuai list di bawah)
4. Copy dari artifact yang sesuai
5. Save

### List Components yang harus dibuat:

| No | Nama File | Copy dari Artifact |
|----|-----------|-------------------|
| 1 | `Header.jsx` | Artifact #6 |
| 2 | `SearchForm.jsx` | Artifact #7 |
| 3 | `CategoryNav.jsx` | Artifact #8 |
| 4 | `ArticleCard.jsx` | Artifact #9 |
| 5 | `ArticleList.jsx` | Artifact #10 |
| 6 | `Pagination.jsx` | Artifact #11 |
| 7 | `LoadingSpinner.jsx` | Artifact #12 |
| 8 | `DateFilter.jsx` | Artifact #26 |
| 9 | `ErrorBoundary.jsx` | Artifact #29 |

**Ulangi untuk semua 9 files!**

---

## LANGKAH 6: Copy Semua CSS Files (10 menit)

**Buat 6 file di folder `src/styles/`:**

### Cara yang sama seperti components:

| No | Nama File | Copy dari Artifact |
|----|-----------|-------------------|
| 1 | `App.css` | Artifact #11 |
| 2 | `Header.css` | Artifact #14 |
| 3 | `SearchForm.css` | Artifact #15 |
| 4 | `ArticleCard.css` | Artifact #16 |
| 5 | `responsive.css` | Artifact #17 |
| 6 | `ErrorBoundary.css` | Artifact #30 |

**Buat semua 6 files!**

---

## LANGKAH 7: Update Main App Files (5 menit)

### 7.1 Update `src/App.jsx`

1. Buka `src/App.jsx` (delete file lama jika ada)
2. Delete semua isi
3. Copy dari **Artifact #18** (src/App.jsx)
4. Save

### 7.2 Update `src/index.js`

1. Buka `src/index.js`
2. Delete semua isi
3. Copy dari **Artifact #19** (src/index.js) - YANG SUDAH UPDATE
4. Save

### 7.3 Delete File yang Tidak Perlu

Hapus file-file ini (jika ada):
- `src/App.css` (lama - kita punya versi baru di styles/)
- `src/App.test.js`
- `src/logo.svg`
- `src/reportWebVitals.js`
- `src/setupTests.js`

**Cara hapus:** Klik kanan file → Delete

---

## LANGKAH 8: Dapatkan API Key (5 menit)

### 8.1 Daftar di NewsAPI

1. Buka browser → https://newsapi.org
2. Klik tombol **"Get API Key"** (pojok kanan atas)
3. Isi form:
   - First name: [Nama kamu]
   - Email: [Email kamu]
   - Password: [Buat password]
4. Ceklis "I agree to terms"
5. Klik **"Submit"**

### 8.2 Verifikasi Email

1. Buka email kamu
2. Cari email dari NewsAPI
3. Klik link verifikasi

### 8.3 Copy API Key

1. Setelah login, akan muncul **API key**
2. Copy API key (contoh: `a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6`)

### 8.4 Paste ke `.env`

1. Buka file `.env` di project kamu
2. Update baris pertama:
```
REACT_APP_NEWS_API_KEY=a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```
(Ganti dengan API key kamu yang asli)
3. **SAVE!**

---

## LANGKAH 9: Test Project Locally (5 menit)

### 9.1 Install Dependencies (jika belum)

```bash
npm install
```

### 9.2 Start Development Server

```bash
npm start
```

Tunggu 30 detik - 1 menit. Browser akan otomatis buka.

### 9.3 Cek Apakah Berfungsi

**Harus terlihat:**
- Header dengan logo "News Portal"
- Form pencarian dengan 5 input
- Category navigation (Technology, Business, Sports, dll)
- Article cards dengan gambar dan judul
- Pagination di bawah

**Test fitur:**
1. Ketik keyword di search box → Klik "Search News"
2. Pilih category (misal: Technology)
3. Ubah date range
4. Klik pagination (halaman 2, 3, dll)
5. Resize browser untuk test responsive

### 9.4 Cek Console untuk Error

1. Tekan `F12` di browser
2. Tab Console
3. Tidak boleh ada error merah!

**Jika ada error:**
- Cek apakah `.env` sudah diisi API key
- Cek apakah semua file sudah dicopy
- Cek apakah ada typo di import statement
- RESTART server: `Ctrl+C` → `npm start`

---

### 10 Initialize Git di Project

Buka terminal di VS Code (`Ctrl + ~` atau Terminal → New Terminal):

```bash
# Initialize git
git init

# Add all files
git add .

# Commit pertama
git commit -m "Initial commit - News Portal"

# Rename branch ke main
git branch -M main
```

### 10.1 Connect ke GitHub

**Copy commands dari GitHub** (ada di halaman setelah create repo):

```bash
# Ganti 'username' dengan username GitHub kamu
git remote add origin https://github.com/username/news-portal.git

# Push ke GitHub
git push -u origin main
```


**Cara buat Personal Access Token:**
1. GitHub → Settings (kamu) → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token
4. Beri nama: "News Portal Deploy"
5. Centang: `repo` (semua)
6. Generate → Copy token
7. Paste sebagai password di terminal

### 10.2 Verify di GitHub

1. Refresh halaman GitHub repository
2. Harus terlihat semua file
3. PENTING: Cek file `.env` TIDAK ADA di GitHub (harus di-ignore)

---

## LANGKAH 11: Deploy ke Vercel (10 menit)

### 11.1 Buat Akun Vercel

1. Buka https://vercel.com
2. Klik **"Sign Up"**
3. Pilih **"Continue with GitHub"**
4. Authorize Vercel untuk akses GitHub

### 11.2 Import Project

1. Di dashboard Vercel, klik **"Add New..."** → **"Project"**
2. Akan muncul list repositories dari GitHub
3. Cari **"news-portal"**
4. Klik **"Import"**

### 11.3 Configure Project

Di halaman configure:

**Framework Preset:** Otomatis detect "Create React App" 

**Root Directory:** `./` (biarkan default)

**Build Command:** `npm run build` (biarkan default)

**Output Directory:** `build` (biarkan default)

### 11.4 Tambahkan Environment Variable

1. Expand **"Environment Variables"**
2. Isi:
   - **Name:** `REACT_APP_NEWS_API_KEY`
   - **Value:** [Paste API key kamu]
   - Environment: Pilih **Production**, **Preview**, **Development** (centang semua)
3. Klik add

### 11.5 Deploy!

1. Klik tombol "Deploy" (besar, biru)
2. Tunggu 2-5 menit (ada progress bar)
3. Congratulations! akan muncul jika sukses

### 11.6 Verify Deployment

1. Klik "Visit" atau buka URL yang diberikan
2. URL format: `https://news-portal-xxx-username.vercel.app`
3. Test semua fitur:
   - ✅ Search works
   - ✅ Category filter works
   - ✅ Pagination works
   - ✅ Responsive di mobile
   - ✅ Images load

### 11.7 Copy Production URL

Copy URL deployment (misal: `https://news-portal-abc123.vercel.app`)