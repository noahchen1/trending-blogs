<!-- PROJECT LOGO -->
<br />
<div id="readme-top" align="center">
  <h1 align="center">Simple News Search Engine</h1>

  <p align="center">
    A search tool for quick and ad free news reading!
    <br />
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- ![Project Screen Shot](/screenshot.png) -->
</br>
</br>
<div align="center">
    <img src="./screenshot.png" alt="Logo" width="auto" height="450" >
</div>
</br>
</br>

This project was built to learn the standard practices of Next.js and TypeScript. The core functionality revolves around interfacing with the NewsAPI to procure news-related data based on the user input. The data retrieved from NewsAPI consists of essential elements such as article titles, associated links, thumbnails, etc.. API does not provide the content of articles and therefore the selected article is scrapped for its text content using cherrios.js. Additionally, this project incorporates a summary feature, offering text analysis using ChatGPT API. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Next.js
* TypeScript
* Tailwind.css

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free NewsAPI key at https://newsapi.org/.

2. Get a free ChatGPT API Key at https://platform.openai.com/.

3. Clone the repo
   ```sh
   git clone https://github.com/noahchen1/trending-blogs
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create a .env file and enter your API keys without '
   ```sh
   NEXT_PUBLIC_NEWS_KEY='YOUR NewsAPI KEY';
   NEXT_PUBLIC_GPT_KEY='YOUR ChatGPT KEY';
   ```
6. Run the development server: 
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Noah Chen - nuoya1996@gmail.com

Project Link: [https://github.com/noahchen1/trending-blogs](https://github.com/noahchen1/trending-blogs)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
