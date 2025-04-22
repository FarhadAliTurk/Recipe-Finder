# Recipe Finder App 🍴

A modern, highly performant recipe finder app built with **React**, **Bootstrap**, and **Edamam API**. This app helps users search and explore delicious recipes from around the world with a clean and visually appealing user interface.

---

## Features 🚀

- **Search Recipes by Name**: Fetch recipes for any dish using the [Edamam Recipe Search API](https://developer.edamam.com/).
- **Real-Time Results**: Get real-time recipe results as you type.
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices.
- **Dynamic Recipe Cards**: Displays recipe images, calories, and a direct link to the full recipe instructions.
- **Loading Spinner**: Interactive spinner for a seamless loading experience.
- **Error Handling**: Displays user-friendly error messages for invalid search queries.
- **Modern Footer**: Includes social media icons and developer credits.

---

## Demo 🎥

🚀 Check out the live demo: [Recipe Finder App Demo](#)

---

## Screenshots 🖼️

### Home Page
![Home Page](https://via.placeholder.com/800x400)

### Recipe Search Results
![Recipe Card](https://via.placeholder.com/800x400)

---

## Installation 🛠️

Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js (v16.0 or above)
- npm (v8.0 or above)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/recipe-finder-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-finder-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Add your **Edamam API Key** to the `.env` file:
   ```bash
   REACT_APP_EDAMAM_APP_ID=your_app_id_here
   REACT_APP_EDAMAM_APP_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm start
   ```
6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## Technologies Used 🛠️

- **React**: Modern JavaScript library for building user interfaces.
- **Bootstrap**: For responsive design and UI components.
- **Axios**: For making API requests.
- **OpenWeather API**: To fetch real-time weather data.

---

## Folder Structure 📂

```
recipe-finder-app/
├── public/
│   ├── index.html       # HTML template
├── src/
│   ├── components/
│   │   ├── Header.js        # Header component
│   │   ├── Footer.js        # Footer component
│   │   ├── RecipeSearch.js  # Recipe search functionality
│   ├── pages/
│   │   ├── Home.js          # Main page of the app
│   ├── App.js               # Root component
│   ├── index.js             # Entry point
│   ├── App.css              # Global styles
├── .env                     # Environment variables (API Key)
├── package.json             # Project metadata and dependencies
```

---

## Footer 📄

The app includes a footer component that displays:
- **Social Media Links**: Facebook, LinkedIn, GitHub, and Email.
- **Credits**: Developer's name.
- **API Attribution**: Acknowledges the Edamam Recipe Search API as the data source.

---

## Contributing 🤝

Contributions are welcome! If you'd like to contribute to this project, follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

---

## License 📄

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgements 🙌

- [Edamam Recipe Search API](https://developer.edamam.com/) for providing recipe data.
- [Bootstrap](https://getbootstrap.com/) for responsive design components.
- [React.js](https://reactjs.org/) for the amazing frontend framework.

---

## Contact 📬

If you have any questions or feedback, feel free to contact me:

- **GitHub**: [FarhadAliTurk](https://github.com/FarhadAliTurk)
- **Email**: 369farhadali@gmail.com