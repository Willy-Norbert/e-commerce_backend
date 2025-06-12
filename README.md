# 🛒 E-Commerce FullStack Application

wXc is a complete **FullStack E-Commerce platform** built with:
 **Description**
wXc (Women Exchange) is a modern, full-featured  **E-Commerce platform for clothing and fashion products**, built with a robust **PostgreSQL + Node.js backend** and a responsive **React + TypeScript frontend**. It supports three key user roles:

- **Admins**: Oversee vendors, manage users, track sales and reports
- **Vendors**: Upload and manage clothing items, handle customer orders
- **Clients**: Browse fashion items, add to cart, place orders, and track purchases

The platform offers:
- Secure **JWT-based authentication**
- **Role-based dashboards** with access control
- A streamlined **shopping experience** for customers
- **Order management** for vendors and admins
- Full **CRUD operations** for products
- Mobile-friendly, responsive UI
- Integration-ready with payment gateways future scope

- **Backend**: Node.js, Express.js, PostgreSQL using Sequelize ORM
- **Frontend**: React with TypeScript and Vite
- **Auth**: JWT-based authentication and role-based access for `Admin`, `Vendor`, and `Client`

The app includes:
- Full product order flow
- Admin & Vendor dashboards
- Protected routes with role restrictions
- API-integrated React frontend

---

## 🔗 GitHub Repository

👉 [GitHub Repo Link](https://github.com/your-username/ecommerce-fullstack-app)

---

## How to Set Up the Development Environment

Follow these steps to run the full project locally:

### Prerequisites

- **Node.js** (v18+ recommended)
- **npm** or **yarn**
- **PostgreSQL** installed and running
- **Git** installed
- Optional: **Sequelize CLI** for DB migrations

---

### 📦 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-clothing-app.git
cd ecommerce-clothing-app
```
```bash
cd backend
npm install

```
```bash
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/ecommerce_clothing
JWT_SECRET=your_super_secret_key

```
```bash
npx sequelize-cli db:migrate

```
```bash
npm run dev


```
---
### Frontend setup

```bash
cd frontend
npm install

```
```bash
npm run dev


```
---
##  Designs & Visuals

This section includes the design mockups, UI screenshots, and architecture diagrams used for this e-commerce app.

###  Figma Mockups

> Click the link below to view the full UI design and wireframes:
- [Figma Mockup](https://www.figma.com/file/your-design-link/ecommerce-clothing-app?type=design&node-id=0%3A1)

---

<!-- Beritha  Make sure you store these images in the `frontend/public/screenshots/` folder and reference them correctly in your repo. -->
###  App Screenshots

####  Home Page
![Home](./screenshots/home.png)

####  Product Page
![Product](./screenshots/product.png)

####  Checkout Page
![Checkout](./screenshots/checkout.png)

####  Cart Page
![Cart](./screenshots/cart.png)

####  Admin Dashboard
![Admin](./screenshots/admin.png)

####  Vendor Dashboard
![Vendor](./screenshots/vendor.png)

 ---

##  Deployment Plan

To bring the E-Commerce application live, I deployed the **frontend** using [Vercel](https://vercel.com) and the **backend** using [Render](https://render.com), both of which provide free-tier hosting and GitHub integration.

###  Backend Deployment – Render

- **Platform**: Render – ideal for hosting Node.js servers and PostgreSQL databases.
- **Steps Taken**:
  1. Pushed the backend code to a GitHub repository.
  2. Connected the repo to [Render Dashboard](https://dashboard.render.com/).
  3. Created a new **Web Service** for the Express server and a **PostgreSQL Database**.
  4. Added necessary environment variables on Render:
     - `PORT`
     - `DATABASE_URL` (from Render’s PostgreSQL instance)
     - `JWT_SECRET`
  5. Configured `build command` as:
     ```
     npm install && npx sequelize-cli db:migrate
     ```
     and `start command` as:
     ```
     node server.js
     ```
  6. Verified API endpoints using Postman or the browser.

###  Frontend Deployment – Vercel

- **Platform**: Vercel – perfect for React + TypeScript apps with Vite.
- **Steps Taken**:
  1. Pushed the frontend code to GitHub.
  2. Connected the repo to [Vercel Dashboard](https://vercel.com/dashboard).
  3. Set the environment variable:
     - `VITE_API_URL` → Your deployed backend API URL from Render.
  4. Let Vercel detect the Vite app and deploy automatically.
  5. Confirmed that all API requests from the frontend were working properly.

> 🔄 Updates to either frontend or backend trigger automatic deployments via GitHub commits.

---

 The project is now live and accessible via the provided Vercel frontend link, communicating securely with the Render backend and PostgreSQL database.
