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

## Project Structure

```txt id="dkb9jf"
ecommerce-project/
│
├── README.md
├── SALESDATA_FINALS.csv
├── cleaned_amazon_sales.csv
├── amazon_sales.py
├── index.html
├── style.css
└── script.js
```

---

## How to Run the Project Locally

### 1. Download or Clone the Repository

```bash id="imjlwm"
git clone https://github.com/mochiematchaaaa/ecommerce-sales-dashboard.git
```

### 2. Open the Project Folder

```bash id="jlwm8x"
cd ecommerce-sales-dashboard
```

### 3. Open the Project in VS Code

Open the folder using Visual Studio Code.

### 4. Run the Dashboard

Install the Live Server extension in VS Code, then right-click `index.html` and select:

```txt id="jlwm4n"
Open with Live Server
```

### 5. Run the Python Cleaning Script (Optional)

Open the terminal and run:

```bash id="jlwm1u"
python amazon_sales.py
```

The script will clean the dataset, normalize sales values, remove outliers, and export a cleaned CSV file.

---

## Python Data Cleaning

The Python script performs:

* missing value handling
* date formatting
* Min-Max normalization
* IQR outlier filtering
* cleaned CSV export

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
