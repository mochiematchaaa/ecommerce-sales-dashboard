# Import pandas for data cleaning and processing
import pandas as pd

# Load the cleaned Amazon sales dataset
df = pd.read_csv("SALESDATA_FINALS.csv")

# Rename columns to match Supabase table format
df = df.rename(columns={
    "Order ID": "order_id",
    "Date": "order_date",
    "Status": "status",
    "Fulfilment": "fulfilment",
    "Category": "category",
    "Qty": "quantity",
    "Amount": "amount",
    "ship-state": "ship_state"
})

# Keep only important columns for analysis
df = df[[
    "order_id",
    "order_date",
    "status",
    "fulfilment",
    "category",
    "quantity",
    "amount",
    "ship_state"
]]

# Handle missing values
# Missing amount values are filled with 0 because cancelled orders may have no sales amount
df["amount"] = df["amount"].fillna(0)

# Missing text values are filled with "Unknown"
df["status"] = df["status"].fillna("Unknown")
df["fulfilment"] = df["fulfilment"].fillna("Unknown")
df["category"] = df["category"].fillna("Unknown")
df["ship_state"] = df["ship_state"].fillna("Unknown")

# Missing quantity values are filled with 0
df["quantity"] = df["quantity"].fillna(0)

# Convert date column to proper format
df["order_date"] = pd.to_datetime(df["order_date"]).dt.strftime("%Y-%m-%d")

# Normalize amount column using min-max normalization
df["normalized_amount"] = (
    (df["amount"] - df["amount"].min()) /
    (df["amount"].max() - df["amount"].min())
)

# Remove outliers from amount column using IQR method
Q1 = df["amount"].quantile(0.25)
Q3 = df["amount"].quantile(0.75)
IQR = Q3 - Q1

lower_limit = Q1 - 1.5 * IQR
upper_limit = Q3 + 1.5 * IQR

df = df[
    (df["amount"] >= lower_limit) &
    (df["amount"] <= upper_limit)
]

# Export cleaned dataset
df.to_csv("cleaned_amazon_sales.csv", index=False)

print("Cleaning completed successfully.")
print(df.head())
