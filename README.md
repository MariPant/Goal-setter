# Goal setter project

## Two Backend Services + Frontend (TypeScript, Express, JSON DB, React/Redux)

## **Team Members**

* *Marina Panteleev – x109430*

# **Project Overview**

This project implements the required architecture of **two backend services** running inside the  **same Node.js / npm project** , using:

* **TypeScript**
* **Express**
* **JSON-file database**
* **REST API**
* **test.http for testing**
* **Optional React frontend** (used here to visualize CRUD operations)

The project contains:

## **1️⃣ App1 — Gateway Service (Port 5001)**

* Accepts requests from the virtual frontend (`test.http`) or real React frontend
* Open CORS: any origin allowed
* Forwards REST calls to App2 via Axios
* Has **no database** — only a proxy layer

---

## **2️⃣ App2 — Core API Service (Port 5002)**

* Accepts requests **only** from App1 (CORS restricted)
* Implements the actual REST API
* Uses a **JSON file** (`dist/goals.json`) as a persistent database
* Supports:
  * `GET /api/goals`
  * `POST /api/goals`
  * `PUT /api/goals/:id`
  * `DELETE /api/goals/:id`

---

## **3️⃣ Frontend**

A simple React application allowing the user to:

* Add goals
* Edit goals (click to edit)
* Delete goals

Frontend communicates only with **App1 (gateway)** on `http://localhost:5001/api/goals`.

---

# **Installation**

From the project root:

<pre class="overflow-visible!" data-start="2240" data-end="2263"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm install
</span></span></code></div></div></pre>

To install frontend dependencies:

<pre class="overflow-visible!" data-start="2300" data-end="2341"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> frontend
npm install
</span><span>cd</span><span> ..
</span></span></code></div></div></pre>

---

# **Build Project**

Compile TypeScript backends:

<pre class="overflow-visible!" data-start="2399" data-end="2424"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run build
</span></span></code></div></div></pre>

---

# **Running the Services**

### ✔ **Run ALL services (App1, App2, Frontend) at once**

<pre class="overflow-visible!" data-start="2633" data-end="2662"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run start:all
</span></span></code></div></div></pre>

This launches:

* **App2 (core API)** → [http://localhost:5002]()
* **App1 (gateway)** → [http://localhost:5001](http://localhost:5001)
* **React frontend** → [http://localhost:3000]()

---

### ✔ Run ONLY backends in dev mode (auto reload)

<pre class="overflow-visible!" data-start="2879" data-end="2910"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev:backend
</span></span></code></div></div></pre>

### ✔ Run everything in dev mode (backend + frontend)

<pre class="overflow-visible!" data-start="2967" data-end="2994"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npm run dev:all
</span></span></code></div></div></pre>

---

# **JSON Database**

The JSON database file is automatically created here:

### `dist/goals.json`

---

# **Frontend Editing Feature**

* Clicking on a goal title switches it into edit mode
* Press **Enter** to save
* Press **Esc** to cancel
* Clicking outside also saves the new value

---

# **Demo** 


<pre class="overflow-visible!" data-start="4465" data-end="4496"><div class="contain-inline-size rounded-2xl corner-superellipse/1.1 relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>[https:</span><span>//your-domain.com](https://youtu.be/FzPcUm8Mjsc)</span><span>
</span></span></code></div></div></pre>
