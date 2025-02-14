# pro-wiz

## Overview
This project is a fully functional dashboard built with **Next.js**, **Tailwind CSS**, and chart libraries such as **Recharts** or **react-charts**. The dashboard includes filters, tables, and charts that dynamically update based on user-selected filters. The UI design is based on the provided **Figma** file.

## Features
- Uses **icons, fonts, and assets** from the provided **Figma** design.
- Implements **filter dropdowns** with **React Select** to update charts and tables dynamically.
- Uses **chart libraries** like **Recharts** or **react-charts**, avoiding custom chart implementations.
- Follows a **clean folder structure**:
  - `components/` - Reusable UI components
  - `pages/` - Next.js pages
  - `mock/` - Mock data for charts and tables
  - `utils/` - Utility functions
  - `assets/` - Static assets
- Uses **Tailwind CSS** for styling, with optional additional CSS techniques.
- Table with **at least 5 rows**, filtered dynamically based on selected filters.
- **Bonus**: Implements local state persistence to retain filter selections after a page refresh.

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/dashboard.git
   cd dashboard
   ```

2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```

3. Run the development server:
   ```sh
   npm run dev  # or yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage
- Use the **filter dropdowns** to update the displayed charts and table data dynamically.
- The state of selected filters persists even after refreshing the page.

## Technologies Used
- **Tailwind CSS** - Modern utility-first styling
- **Recharts / react-charts** - For visualizing data with charts
- **React Select** - Custom dropdown components for filtering
- **Mock Data** - Temporary data for development and testing
- **Local Storage / State Management** - Persisting filter selections

## Future Enhancements
- Implement **download data functionality**.
- Connect with a **real API or database** for dynamic data fetching.
- Improve **UI/UX enhancements** based on feedback.

---
### Author:Balaji Deshmukh
Feel free to contribute or modify as needed!

