
## Superhero-hunter
Superhero Hunter is a web application built using HTML, Tailwind CSS, and JavaScript. It uses the Marvel API to fetch data about superheroes and display them on the webpage.


## Features

- Search for superheroes by name
- View details about a superhero, including their name, description, and image
- Pagination to display multiple pages of search results
- Responsive design that adapts to different screen sizes

## Dependencies
- Tailwind CSS - A utility-first CSS framework
- CryptoJS: A JavaScript library for cryptographic functions. It is used in this project to create a hash for accessing the Marvel API.

## Installation
- Clone the repository: git clone https://github.com/praveen836845/superhero-hunter.git

- Navigate to the project directory: cd superhero-hunter
- Open the index.html file in a web browser.
- Enter a search query in the search bar and click the "Search" button to find superheroes whose names start with the entered text.
- The results will be displayed in a grid format. -   Clicking on an image of a superhero will take the user to a page with more details about the superhero.
- The user can also navigate to a "Favourite" page by clicking the "Favourite" button in the top left corner of the page.
-  This page displays any superheroes that the user has marked as "favourites".
- The user can mark a superhero as a "favourite" by clicking the "Favourite" button displayed below the superhero's image on the main search page.

## API  
This project uses the Marvel Comics API to retrieve data about superheroes. The API key and hash are hard-coded in the JavaScript file.

## Future Improvements
- Implement pagination for search results.
- Allow users to search for superheroes by criteria other than name (e.g. by comic book series, by superpower).
- Implement a more user-friendly way of marking superheroes as "favourites".
- Add a feature that displays recommended superheroes based on the user's search history.
