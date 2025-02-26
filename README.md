# **SPA Navigator** 🏄‍♂️🚀  
### **By Terence Onyeweke <Mayor>**  
A lightweight JavaScript library for managing **Single Page Application (SPA)** navigation without reloading the page and handling URL management.  
The **SPA-Navigator** NPM package helps implement "soft" page loads for Single Page Applications (SPAs), improving user experience without full page reloads.  

---

## **📌 Features**  
✔️ **Smooth Page Navigation** – Switch between pages without reloading.  
✔️ **History Management** – Supports browser back/forward navigation.  
✔️ **Easy Integration** – Works with plain HTML, CSS, and JavaScript.  
✔️ **Minimal Dependencies** – No external frameworks required.  

---

## **📦 Installation**  

### **Option 1: Using npm**  
```sh
npm install spa-navigator
```

### **Option 2: Using a CDN**  
Include the minified script in your HTML file:  
```html
<script src="https://cdn.jsdelivr.net/npm/spa-navigator@latest/dist/spa-navigator.min.js"></script>
```

---

## **🚀 Getting Started**  

### **1️⃣ Include the Library**  
If using a local file:  
```html
<script src="path/to/spa-navigator.min.js"></script>
```
Or if using npm:  
```js
import SPANavigator from "spa-navigator";
```

### **2️⃣ Initialize SPA Navigator**  
```js
window.onload = function () {
    window.spa = new SPANavigator({
        pages: ["home", "about", "contact"],
        defaultPage: "home"
    });
};
```

### **3️⃣ Create Your HTML Structure**  
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SPA Navigator Demo</title>
    <script src="dist/spa-navigator.min.js"></script>
</head>
<body>

    <header>
        <h1>My Website</h1>
    </header>

    <nav>
        <a href="javascript:void(0)" onclick="spa.showPage('home')">Home</a>
        <a href="javascript:void(0)" onclick="spa.showPage('about')">About</a>
        <a href="javascript:void(0)" onclick="spa.showPage('contact')">Contact</a>
    </nav>

    <main>
        <section id="home"><h1>🏡 Home Page</h1></section>
        <section id="about"><h1>📖 About Page</h1></section>
        <section id="contact"><h1>📩 Contact Page</h1></section>
    </main>

    <footer>
        <p>© 2025 SPA Navigator. All rights reserved.</p>
    </footer>

</body>
</html>
```

---

## **⚙️ API Methods**  

### **1️⃣ `showPage(pageId, addToHistory = true)`**  
Changes the visible page without reloading.  

🔹 **`pageId`** – The ID of the section to display.  
🔹 **`addToHistory`** *(optional)* – Whether to add the page to the browser history.  

```js
spa.showPage("about");  // Navigates to the About page
```

---

## **🚨 Important: Redirecting Non-Existent Routes to `index.html`**  

### **🔄 Why Redirect All Routes to `index.html`?**  
For Single Page Applications (SPAs), the browser handles navigation **without reloading the page**. However, when a user refreshes the page or directly visits a deep link (`/about`, `/contact`), the server **tries to load an actual file** that does not exist.  

To prevent "404 Not Found" errors, configure the server to **redirect all unknown routes to `index.html`**.  

### **📌 How to Configure This?**  

#### **For Apache (`.htaccess` file):**  
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### **For Nginx (`nginx.conf`):**  
```nginx
location / {
    try_files $uri /index.html;
}
```

#### **For Express.js (Node.js Backend):**  
```js
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

### **🔍 Reasons for Redirecting to `index.html`**  
✔️ Prevents **404 errors** when refreshing or accessing deep links.  
✔️ Ensures **seamless navigation** across the entire application.  
✔️ Improves **SEO handling** when paired with proper meta tags.  

---

## **🎯 How It Works**  

1️⃣ **Hides all sections** except the selected page.  
2️⃣ **Updates the browser history** for back/forward navigation.  
3️⃣ **Redirects all unknown routes to `index.html`**, allowing the SPA to handle navigation.  

---

## **📜 License**  
This project is licensed under the **MIT License**.  

---

## **🌟 Contributing**  
Contributions are welcome! Feel free to submit issues and pull requests.  
