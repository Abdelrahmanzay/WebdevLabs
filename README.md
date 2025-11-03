# WebdevLabs

This repository contains small web development lab exercises .. Each lab is a self-contained folder with HTML/CSS/JS you can open in a browser.

Structure (top-level folders):

- `Lab2/` — Portfolio demo (HTML + CSS)
- `Lab3/` — Calculator demo
- `Lab4/` — Todo demo
- `Lab5/` — Movies Watch List (React demo, no-build; uses CDN and in-browser Babel)

How to run a lab

1. Open the lab folder in your file explorer.
2. Double-click the lab's HTML file (for example `Lab4/todo.html`) to open it in your default browser.

From PowerShell you can open a file with:

```powershell
Start-Process "C:\Users\abdra\OneDrive\Documents\GitHub\WebdevLabs\Lab5\index.html"
```

Notes about `Lab5`

- `Lab5` contains a small React app that runs without npm using React/ReactDOM from a CDN and Babel to transpile JSX in the browser. This is suitable for demos but not production.
- If you plan to develop the React app further, consider converting `Lab5` into a proper project with a bundler (Vite or Create React App). I can scaffold that if you want.


