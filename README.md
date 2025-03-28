# 🎥 Movie Watchlist App

A React application that allows users to browse movies, add their favorites to a watchlist, and view the watchlist on a dedicated page. The app uses React Context for global state management and `react-router-dom` for routing.

---

## 🚀 Features

- **Fetch Movies**: Fetch and display a list of movies from an API.
- **Add to Watchlist**: Add movies to a personal watchlist by clicking a button below each movie image.
- **View Watchlist**: View all selected movies on a dedicated watchlist page.
- **Global State Management**: Uses React Context to manage the watchlist across the app.
- **Routing**: Navigate between the home page and the watchlist page using `react-router-dom`.

---

## 📂 Project Structure

```plaintext
📦 task-6
├── 📂 src
│   ├── 📂 components
│   │   ├── MovieCard.jsx        
│   │   ├── Watchlist.jsx 
│   │   └── navbar.jsx
│   ├── 📂 context
│   │   ├── WatchListContext.jsx 
|   |__ 📂  pages
|   |    ├── HomePage.jsx
|   |    └── WatchlistPage.jsx
│   ├── App.jsx                  
│   ├── main.jsx                 
│   ├── styles.css               
├── 📜 package.json
├── 📜 [README.md]
```
## 🛠️ Installation & Setup

### Installation
1. clone the repository:
```bash
git clone https://github.com/your-username/movie-watchlist-app.git
cd movie-watchlist-app
```
2. install dependencies:
```bash
npm install
```
3. start the development:
```bash 
npm run dev
```
4. open your browser and navigate to:
```bash 
http://localhost:3000
```

## 🔧 How It Works
### Home Page
- Fetches a list of movies from an API using axios.
- Displays each movie with its image, title, and an "Add to Watchlist" button.
- Clicking the "Add to Watchlist" button adds the movie to the global watchlist state.
### Watchlist Page
- Displays all movies added to the watchlist.
- Uses the WatchlistContext to access the global watchlist state.
### Global State Management
- The app uses React Context (WatchlistContext) to manage the watchlist globally.
- The WatchlistProvider wraps the app and provides the watchlist and addToWatchlist functionality to all components.