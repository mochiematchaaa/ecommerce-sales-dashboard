# E-Commerce Sales Analytics Dashboard

## Project Overview

This project is a cloud-based E-Commerce Sales Analytics Dashboard developed for the Cloud Computing Final Project. The dashboard analyzes Amazon sales data using Supabase cloud database services, Python data processing, Chart.js visualizations, and Google Gemini AI integration.

The system provides interactive charts, KPI cards, category filtering, and AI-generated business insights based on real sales data.

---

## Features

* Cloud-hosted PostgreSQL database using Supabase
* Interactive dashboard with Chart.js visualizations
* KPI cards for:

  * Total Orders
  * Total Revenue
  * Average Sales
* Category filter functionality
* Data cleaning and preprocessing using Python and Pandas
* AI-generated business insights using Google Gemini API
* Live deployment using GitHub Pages

---

## Technologies Used

| Technology          | Purpose                      |
| ------------------- | ---------------------------- |
| HTML/CSS/JavaScript | Frontend dashboard           |
| Chart.js            | Data visualization           |
| Python + Pandas     | Data cleaning and processing |
| Supabase            | Cloud database hosting       |
| GitHub              | Source code repository       |
| GitHub Pages        | Dashboard deployment         |
| Google Gemini API   | AI-powered insights          |

---

## Dataset

The dataset used is the Amazon Sales Dataset from Kaggle. It contains customer orders, product categories, shipping information, sales values, and order statuses.

Main columns used:

* order_id
* order_date
* status
* fulfilment
* category
* quantity
* amount
* ship_state

---

## How to Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/mochiematchaaaa/ecommerce-sales-dashboard.git
```

### 2. Open the Project Folder

```bash
cd ecommerce-sales-dashboard
```

### 3. Run the Dashboard

Open `index.html` using Live Server in VS Code.

---

## Python Data Cleaning

Run the cleaning script using:

```bash
python amazon_sales.py
```

The script:

* handles missing values
* normalizes sales values
* removes outliers using IQR
* exports cleaned dataset

---

## Live Dashboard

https://mochiematchaaaa.github.io/ecommerce-sales-dashboard/

---

## GitHub Repository

https://github.com/mochiematchaaaa/ecommerce-sales-dashboard

---

## AI Integration

The dashboard integrates Google Gemini API to generate AI-powered business insights based on sales metrics and dataset analytics.

---

## Group Members

* Cancer, Tyronne
* Encinas, Nathaniel
* Fugaban, Jessele
* Lopez, Zyrine Angelica
