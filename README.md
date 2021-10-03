![Repo Size][repo-size]
![Language][github-language]
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
![MIT License][license-shield]

<br />
<p align="center">

<img src="./public/assets/images/logo.png" alt="Logo" width="150" height="100">

<h3 align="center" id="forge">Forge</h3>

<p align="center">
AS a Bootcamp student, I want to connect with other bootcamp students<br/>
so we can ask/answer coding questions and share experiences.
<br />
<a href="#how-to-download"><strong>Explore the docs »</strong></a>
<br />
<br />
<a href="https://drive.google.com/file/d/1thYNm7TqOy0dbokHF0U0qxG8HWQPxIIz/view?usp=sharing">View Demo</a>
.
<a href="https://github.com/ratalla816/Forge/issues">Report Bug</a>
·
<a href="https://github.com/ratalla816/Forge/issues">Request Feature</a>
</p>
</p>
<br />
<br />

> Link web page: https://forge-team.herokuapp.com/splash

<details open="open">
<summary>Table of Contents</summary>
<ul>
<li><a href="#description">Description</a></li>
<li><a href="#technologies">Technologies</a></li>
<li><a href="#how-to-download">Download</a></li>
<li><a href="#installation">Installation</a></li>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#roadmap">Roadmap</a></li>
<li><a href="#contributing">Contributing</a></li>
<li><a href="#contributors">Contributors</a></li>
<li><a href="#questions">Questions</a></li>
<li><a href="#license">License</a></li>
</ul>
</details>

---

## Description

These is a Social Media Bootcamp, the purpose is that as a Bootcamp student, I want to connect with other bootcamp students so that I can ask/answer coding questions and share experiences, will follow the next conditions.

GIVEN an authenticated user:

- WHEN I go to the home page
  THEN I am shown a sign up/sign in page.

- WHEN I sign in
  THEN I am taken to the homepage.

- WHEN I sign up and I enter my username, email, and password
  THEN I am taken to the homepage.

- WHEN I am on the homepage
  THEN I see options for asking a question, sharing an experience, or reviewing code.

- WHEN I go to ask a question
  THEN I am able to post a link with some text and a title to my page for other developers to review.

- WHEN I choose to share an experience
  THEN I am able to post some text with a title to my page.

- WHEN I choose to review code for other developers
  THEN I am taken to a page that has a list of questions asked by other developers.

- WHEN I click on a question
  THEN I am taken to the page with the explanation of the problem and a link to the GitHub repo.

- WHEN I click on the link to the repo
  THEN I am taken to the repository to review the code.

- WHEN I am done reviewing the code
  THEN I can leave comments on the explanation page.

<br />
<br />
<br/>

### Example:

<br />

![Demo](/public/assets/images/demo-1.gif)

![Demo](/public/assets/images/demo-2.gif)

![Demo](/public/assets/images/demo-3.gif)


## Technologies

- <p><a href="https://nodejs.org/">Node.js</a></p>
- <p><a href="https://dev.mysql.com">MySQL</a></p>
- <p><a href="https://www.npmjs.com/">NPM</a></p>
- <p><a href="https://www.npmjs.com/package/mysql2">NPM Node MySQL 2</a></p>
- <p><a href="https://www.npmjs.com/package/sequelize">NPM Sequelize</a></p>
- <p><a href="https://www.npmjs.com/package/dotenv">NPM Dotenv</a></p>
- <p><a href="https://www.npmjs.com/package/heroku">Heroku CLI</a></p>
- <p><a href="https://www.npmjs.com/package/bcrypt">NPM bcrypt</a></p>
- <p><a href="https://www.npmjs.com/package/express-session">Express-session</a></p>
- <p><a href="https://www.npmjs.com/package/connect-session-sequelize">Connect-session-sequelize</a></p>
- <p><a href="https://www.npmjs.com/package/express-handlebars">Express Handlebars</a></p>
- <p><a href="https://www.npmjs.com/package/aos">AOS - Animate on scroll library</a></p>

[Back To Top](#forge)

---

## How to Download

- Simply copy the **SSH** to the terminal or Download the **ZIP File**:

## Installation

- Use the follow command at your terminal, **git clone** (Create a working copy at your local repository):

  ```
  git clone git@github.com:ratalla816/Forge.git
  ```

- After cloned the repository, create your own repository, copy the files to your repository and type in your terminal the follow commands.

  ```
  git status

  git add -A

  git commit -m "Message to commit."

  git push or git push origin main
  ```

## Prerequisites

1.- Before of using this application, is require to install dependencies, run the following command in your terminal:

```
npm i
```

2.- At the root of the project, create a file `.env`, and insert your MySQL info:

```
DB_NAME='forge_db''
DB_USER='your_MySQL_username'
DB_PW='your_MySQL_password'
```

3.- At the root of your project, open your terminal and run the following commands:

    1.- mysql -u root -p

    2.- Enter your MySQL password

    3.- source db/schema.sql

    4.- quit

    5.- npm run seed

    6.- npm start

[Back To Demo](#example)

---

## Usage

This is a open source program, feel free to use it, contact me to request features.

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/ratalla816/Forge/issues) for a list of proposed features (and known issues).

[Back To Top](#forge)

---

<!-- CONTRIBUTORS -->

## Contributing

Contributions are part of this open source project. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/name-of-feature`)
3. Commit your Changes (`git commit -m "Add some feature"`)
4. Push to the Branch (`git push origin feature/name-of-feature`)
5. Open a Pull Request

## Contributors

Thanks goes to these wonderful people:

<!-- CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| Audry Ford                                                                                                                                          | Cody McCray                                                                                                                                                   | Derimar Gray                                                                                                                                                    | Rob Atalla                                                                                                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: |
| <a href="https://github.com/audryf"> <img src="./public/assets/icons/github-alt-brands.svg" width="20" height="30" alt="github"> </a>               | <a href="https://github.com/cmccray87"> <img src="./public/assets/icons/github-alt-brands.svg" width="20" height="30" alt="github"> </a>                      | <a href="https://github.com/Derimarg"> <img src="./public/assets/icons/github-alt-brands.svg" width="20" height="30" alt="github"> </a>                         | <a href="https://github.com/ratalla816"> <img src="./public/assets/icons/github-alt-brands.svg" width="20" height="30" alt="github"> </a>           |
| <a href="https://www.linkedin.com/in/audry-ford/"> <img src="./public/assets/icons/linkedin-brands.svg" width="20" height="30" alt="linkedin"> </a> | <a href="https://www.linkedin.com/in/cody-mccray-41136a94/"> <img src="./public/assets/icons/linkedin-brands.svg" width="20" height="30" alt="linkedin"> </a> | <a href="https://www.linkedin.com/in/derimar-gray-676275132/"> <img src="./public/assets/icons/linkedin-brands.svg" width="20" height="30" alt="linkedin"> </a> | <a href="https://www.linkedin.com/in/ratalla816/"> <img src="./public/assets/icons/linkedin-brands.svg" width="20" height="30" alt="linkedin"> </a> |
| <a href="mailto:audryford792@gmail.com"><img src="./public/assets/icons/envelope-solid.svg" width="20" height="30" alt="envelope"> </a>             | <a href="mailto:cody.mccray87@gmail.com"><img src="./public/assets/icons/envelope-solid.svg" width="20" height="30" alt="envelope"></a>                       | <a href="mailto:derimargray@gmail.com"> <img src="./public/assets/icons/envelope-solid.svg" width="20" height="30" alt="envelope"> </a>                         | <a href="mailto:rob.atalla@gmail.com"> <img src="./public/assets/icons/envelope-solid.svg" width="20" height="30" alt="envelope"> </a>              |

<!-- CONTRIBUTORS-LIST:END -->

## Questions

For additional help or questions about collaboration, contact us at:

- Project Repository Link: https://github.com/ratalla816/Forge
- Live application Link: https://forge-team.herokuapp.com/splash
- Video demo link: https://drive.google.com/file/d/1thYNm7TqOy0dbokHF0U0qxG8HWQPxIIz/view?usp=sharing

[Back To Top](#forge)

---

## License

MIT License

Copyright (c) 2021 Audry Ford, Cody McCray, Derimar Gray, Rob Atalla

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

[repo-size]: https://img.shields.io/github/repo-size/ratalla816/Forge?style=for-the-badge
[github-language]: https://img.shields.io/github/languages/top/ratalla816/Forge?color=yellow&style=for-the-badge
[contributors-shield]: https://img.shields.io/github/contributors/ratalla816/Forge.svg?style=for-the-badge
[contributors-url]: https://github.com/ratalla816/Forge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ratalla816/Forge.svg?color=9cf&style=for-the-badge
[forks-url]: https://github.com/ratalla816/Forge/network/members
[stars-shield]: https://img.shields.io/github/stars/ratalla816/Forge.svg?color=blueviolet&style=for-the-badge
[stars-url]: https://github.com/ratalla816/Forge/stargazers
[issues-shield]: https://img.shields.io/github/issues/ratalla816/Forge.svg?style=for-the-badge
[issues-url]: https://github.com/ratalla816/Forge/issues
[license-shield]: https://img.shields.io/static/v1?label=license&message=MIT&color=yellowgreen.svg&style=for-the-badge
