# Real-Time Character Counter

A React app that provides real-time character counting with optimizations for performance. The app features a character limit, a progress bar, and a copy-to-clipboard button.

## 🚀 Features

- Character Counter: Tracks the number of characters typed (Max: 200).

- Progress Bar: Indicates text length with a visual bar.

- Warning Message: Alerts users when 90% of the limit is reached.

- Copy to Clipboard: Copies text to the clipboard with a button.

- Performance Optimizations: Uses useReducer, useMemo, and useCallback for efficiency.

## 📂 Project Structure

```plaintext
📦 real-time-char-counter
├── 📂 src
│   ├── 📂 components
│   │   ├── TextArea.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── CopyButton.jsx
│   ├── 📂 hooks
│   │   ├── useCharacterCount.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
├── 📜 package.json
├── 📜 README.md
```


### 🛠️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/real-time-char-counter.git
cd real-time-char-counter
```
Install dependencies:
```bash
npm install
```
Run the development server:
```bash
npm run dev
```
Open in browser:

The app will be available at http://localhost:5173 (Vite default).

## 🔧 How It Works

- State Management: Uses useReducer to manage text updates and character count.

- Performance Optimization: useMemo caches progress bar calculations, and useCallback prevents unnecessary re-renders.

- Progress Bar & Warning: The bar fills up based on text length; it turns red at 90% limit.

- Copy Button: Uses navigator.clipboard.writeText() to copy text.