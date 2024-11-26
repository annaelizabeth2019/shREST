# **shREST**  
*A Free REST API for Shrek*

Welcome to **[shREST](https://shrekofficial.com/)**, a Shrek-themed REST API for developers to learn and have fun with. Whether you're looking for fun Shrek-related data or just exploring APIs, this project has something for you! This project is for educational purposes only!

---

## **Table of Contents**
1. [Features](#features)  
2. [Getting Started](#getting-started)  
3. [API Documentation](#api-documentation)  
4. [Tech Stack](#tech-stack)  
5. [Contributing](#contributing)  
6. [License](#license)  
7. [Contact](#contact)  
8. [Acknowledgments](#acknowledgments)

---

## **Features**
- Shrek-themed API 
- Built with **TypeScript** and **Cloudflare Workers** 
- Easily deployable using GitHub Actions and Wrangler.  

---

## **Getting Started**

### Requesting a random quote:
```curl https://shrekofficial.com/quotes/random```

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)  
- npm (comes with Node.js)  
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/)  

### Installation
1. Clone the repository:  
   ```bash
   git clone https://github.com/annaelizabeth2019/shREST.git
   cd shREST
   npm i
   ```

## API Documentation

Here is the list of available routes for shREST:

### General Routes

#### Root
- **`GET /`**
  - **Description:** Returns the HTML homepage.
  - **Response:** An HTML page describing the API.

#### Random Quotes
- **`GET /quotes/random`**
  - **Description:** Fetches a random quote from a random Shrek movie.
  - **Response Example:**
    ```json
      "Shrek: Better out than in, I always say."
    ```

#### Movies List
- **`GET /movies`**
  - **Description:** Returns a list of all Shrek movies with brief attributes.
  - **Response Example:**
    ```json
    [
      {
        "name": "Shrek",
        "id": "shrek",
        "attributes": {
          "quotes_length": 10,
          "top_cast_length": 5,
          "year": 2001
        }
      },
      {
        "name": "Shrek 2",
        "id": "shrek2",
        "attributes": {
          "quotes_length": 15,
          "top_cast_length": 6,
          "year": 2004
        }
      }
    ]
    ```

---

### Movie-Specific Routes

#### Movie Details
- **`GET /:movieId`**
  - **Description:** Returns detailed information about a specific movie.
  - **Response Example:**
    ```json
    {
      "movie": {
        "name": "Shrek",
        "id": "shrek",
        "quotes": ["Ogres are like onions.", "What are you doing in my swamp?"], // array of strings
        "top_cast": [], // see top cast response
        "year": 2001
      }
    }
    ```

#### Random Quote (Movie-Specific)
- **`GET /:movieId/quotes/random`**
  - **Description:** Fetches a random quote from the specified movie.
  - **Response Example:**
    ```json
    "Shrek: This is the part where you run away." // string
    ```

- **`GET /:movieId/quotes/random/text`**
  - **Description:** Fetches a random quote as plain text from the specified movie.
  - **Response Example:**  
    ```
    Donkey: I just know, before this is over, I'm gonna need a whole lot of serious therapy. Look at my eye twitchin'.
    ```

#### All Quotes (Movie-Specific)
- **`GET /:movieId/quotes`**
  - **Description:** Returns all quotes from the specified movie.
  - **Response Example:**
    ```json
    [
      "Donkey: We can stay up late, swapping manly stories, and in the morning, I'm making waffles!",
      "Shrek: What are you doing in my swamp?"
    ]
    ```

#### Top Cast
- **`GET /:movieId/cast/top`**
  - **Description:** Returns the top cast members of the specified movie and the roles they played.
  - **Response Example:**
    ```json
    [
    {
        "name": "Mike Myers",
        "characters": [
            "Shrek",
            "Blind Mouse",
            "Opening Narration"
        ]
    },
    {
        "name": "Eddie Murphy",
        "characters": [
            "Donkey"
        ]
    }
    ]
    ```

---

### Errors

#### Server Error
- **Any Uncaught Error**
  - **Response Example (500):**
    ```json
    {
      "error": "Internal Server Error",
      "message": "Error details..."
    }
    ```

---

Feel free to test these routes with [Postman](https://www.postman.com/) or `curl`!
No authorization required. 

## Tech Stack

### Backend
- **[TypeScript](https://www.typescriptlang.org/):** A strongly-typed superset of JavaScript for building scalable and maintainable code.
- **[Hono](https://honojs.dev/):** A lightweight and fast web framework optimized for Cloudflare Workers.
- **[Cloudflare Workers](https://workers.cloudflare.com/):** A serverless platform to deploy globally distributed applications with low latency.

### Deployment & DevOps
- **[Wrangler](https://developers.cloudflare.com/workers/wrangler/):** A command-line tool for managing and deploying Cloudflare Workers.
- **[GitHub](https://github.com/):** Used for version control, collaboration, and automatic deployment via GitHub Actions.

### Styling
- **CSS:** Custom styling is provided via static assets for a simple and clean UI.

---

### Notable Features
- **Global Availability:** Powered by Cloudflare Workers
- **Rapid Development:** The use of TypeScript and Hono enables efficient and scalable development. Integration with Github actions provides fast deploy
- **Fully Serverless:** No server maintenance required, leveraging serverless architecture for cost efficiency and scalability.

## Contributing

Contributions to shREST are welcome and appreciated! Here's how you can contribute:

### Getting Started
1. **Fork the Repository**  
   - Click the "Fork" button at the top of this repository to create your own copy.

2. **Clone the Repository**  
   - Clone your fork locally using:  
     ```bash
     git clone https://github.com/<your-username>/shREST.git
     cd shREST
     ```

3. **Install Dependencies**  
   - Install the required packages:  
     ```bash
     npm install
     ```

4. **Run the Development Server**  
   - Start a local development server to test your changes:  
     ```bash
     npm run dev
     ```

5. **Make Your Changes**  
   - Add features, fix bugs, or enhance documentation!

### Submitting Changes
1. **Create a New Branch**  
   - Use a descriptive branch name for your feature or fix:  
     ```bash
     git checkout -b feature/new-feature
     ```

2. **Commit Your Changes**  
   - Write clear and concise commit messages:  
     ```bash
     git add .
     git commit -m "Adds a new feature"
     ```

3. **Push to Your Fork**  
   - Push your changes to your forked repository:  
     ```bash
     git push origin feature/new-feature
     ```

4. **Open a Pull Request**  
   - Go to the original repository and open a pull request.  
   - Describe your changes and reference any related issues.

### Code Guidelines
- Follow the existing code style and formatting.
- Include comments to explain complex logic or new features.
- Ensure your changes don’t break existing functionality.

### Reporting Issues
If you find a bug or have a feature request, feel free to open an issue [here](https://github.com/annaelizabeth2019/shREST/issues).

---

Thank you for helping make shREST even better!

## License

This project is licensed under the [MIT License](./LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.  

### Fair Use Disclaimer
The Shrek-themed REST API includes quotes and references from the *Shrek* franchise. These materials are provided solely for educational and non-commercial purposes under the principles of **fair use**. This API is not affiliated with or endorsed by DreamWorks Animation or any related entities.  

If you have any questions regarding the license or the use of the API, feel free to contact me directly.  

## Contact

If you have questions, feedback, or would like to connect, feel free to reach out!

- **LinkedIn**: [Anna Peterson](https://www.linkedin.com/in/anna-elizabeth-peterson)
- **GitHub**: [annaelizabeth2019](https://github.com/annaelizabeth2019)

## Acknowledgments

- **Aubrey McKinney** - A big thanks to my friend [Aubrey McKinney](https://github.com/Shadowasders) for his support and inspiration throughout this project. 
- **OpenAI's ChatGPT** – For the assistance in planning, debugging, and crafting this project. I hate to admit it, but ChatGPT is fantastic at generating templates and boilerplate. 
- **IMDB** - Really helped with finding Shrek Quotes. 
- **[Shrek Fans Worldwide](https://www.shrek.com/)** – shoutout to all the onions. 
