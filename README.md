# 🌍 PattaPulse — AI-Powered FRA Atlas & WebGIS DSS

**Live Demo:** [visionary-site-build.vercel.app](https://visionary-site-build.vercel.app/)

---

## 📖 Overview
PattaPulse is an **AI-powered platform** that digitizes Forest Rights Act (FRA) records, integrates them with **satellite imagery**, and provides a **WebGIS-based Decision Support System (DSS)**.  

It empowers decision-makers, tribal communities, and government departments by bridging the gap between **scattered legacy records** and **modern data-driven governance**.

---

## 🚀 Key Features
- 📑 **OCR + NLP Digitization** — Convert scanned FRA pattas into structured, searchable records.  
- 🗺️ **AI-Asset Mapping** — Detect farmland, ponds, forests, and homesteads from satellite imagery.  
- 🌐 **Interactive WebGIS** — View FRA claims, granted titles, and assets with filters and search.  
- 🧠 **Decision Support System (DSS)** — Suggests Central Sector Schemes (PM-KISAN, JJM, MGNREGA, DAJGUA).  
- 📥 **Data Export** — Download reports and GeoJSON/CSV for planning and monitoring.  
- 📱 **Mobile-Friendly UI** — Access data and insights from anywhere.  

---

## 🛠️ Tech Stack
- **Frontend:** React / Next.js, Mapbox GL / Leaflet  
- **Backend:** FastAPI (Python) / Flask  
- **Database:** PostgreSQL + PostGIS  
- **AI/ML:** OCR (Tesseract/TrOCR), NER (IndicBERT/XLM-R), CV Models (U-Net, Mask R-CNN)  
- **Infra:** Docker, Vercel (for demo hosting), Cloud deployment for scalability  

---

## ⚡ Quick Start (Demo Mode)

### 1️⃣ Clone Repo
'git clone https://github.com/<your-org>/<repo>.git'

'cd <repo>'

### 2️⃣ Backend Setup
python3 -m venv .venv

source .venv/bin/activate

pip install -r requirements.txt

uvicorn api.main:app --reload --host 0.0.0.0 --port 8000

### 3️⃣ Frontend Setup
cd frontend

npm install

npm run dev

Open http://localhost:3000

### 4️⃣ API Docs
http://localhost:8000/docs

### 🐳 Docker Setup
docker-compose up --build

then open http://localhost:3000

📊 Core Modules
Document Digitization → OCR + NER for FRA records.

Geospatial Mapping → Geo-referenced polygons stored in PostGIS.

AI Asset Mapping → Detect & classify natural and social assets.

WebGIS Portal → Map layers, filters, and downloads.

Decision Support → Rule-based + AI engine for scheme recommendations.


📚 References
FRA, 2006 — Ministry of Tribal Affairs

Sentinel-2 / Landsat imagery — ESA & USGS

DAJGUA Convergence Program — Govt. of India


👥 Team
Developed by Team Blue Byte for Smart India Hackathon 2025 🚀
