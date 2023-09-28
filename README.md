<div align="center">
<h1 align="center">
<img src="client/public/assets/logos/moshal/moshal.png" alt="Logo" width="150" />
<br>Moshal Social
</h1>
<h3>Connecting Communities, One Commit at a Time</h3>

<p align="center">
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Node.js-73ae5c.svg?style&logo=Node.js&logoColor=black" alt="Node.js" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style&logo=MongoDB&logoColor=white" alt="MongoDB" />
<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style&logo=Firebase&logoColor=black" alt="Firebase" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/languages/top/ArieLevental/moshal-social?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/ArieLevental/moshal-social?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/ArieLevental/moshal-social?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/ArieLevental/moshal-social?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📖 Table of Contents

- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 Repository Structure](#-repository-structure)
- [⚙️ Modules](#modules)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running moshal-social](#-running-moshal-social)
  - [🧪 Tests](#-tests)
- [🛣 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

Moshal Social is a private social network designed specifically for our scholarship program.

Leveraging React, Node.js, and Express, alongside MongoDB with Mongoose for the database, we're building a comprehensive full stack application. We've prioritized user security by implementing JWT for authentication and data protection, and carefully planned our data schemes. Our project management is organized using a shared file system with tables.

The platform features a user system encompassing registration, login, and profile editing. Additionally, it incorporates a user database with robust search and filtering capabilities, facilitating connections between individuals from various companies and institutions. Further, we've included a private jobs board for scholars and alumni to share job opportunities, along with a list of private WhatsApp groups and a phone book.

We have exciting plans for additional features. Looking ahead, our vision is to transition this project into an open-source initiative for our scholarship fellows, promoting collaboration and providing a platform for collective learning and teamwork on a larger scale.

---

## 📂 Repository Structure

```sh
└── moshal-social/
    ├── client/
    │   ├── public/
    │   │   ├── assets/
    │   │   ├── index.html
    │   └── src/
    │       ├── App.js
    │       ├── components/
    │       │   ├── Footer/
    │       │   ├── Navbar/
    │       │   │   ├── Icons/
    │       │   │   ├── Navbar.js
    │       │   │   └── Navigation/
    │       │   │       └── Navigation.js
    │       │   ├── Scrollbar/
    │       │   └── Widgets/
    │       │       ├── CategoryTitle/
    │       │       └── PictureEditForm/
    │       ├── index.js
    │       ├── scenes/
    │       │   ├── communityPage/
    │       │   ├── homePage/
    │       │   ├── jobsPage/
    │       │   ├── landingPage/
    │       │   ├── profilePage/
    │       │   └── usersPage/
    │       ├── state/
    │       │   └── state.js
    │       └── utils/
    │           ├── authUtils.js
    │           ├── formattingUtils.js
    └── server/
        ├── controllers/
        │   ├── auth.js
        │   ├── companies.js
        │   ├── company.js
        │   ├── institution.js
        │   ├── institutions.js
        │   ├── jobs.js
        │   ├── storage.js
        │   ├── user.js
        │   ├── users.js
        │   └── whatsappGroup.js
        ├── index.js
        ├── middleware/
        │   ├── auth.js
        │   └── errorHandler.js
        ├── models/
        │   ├── Company.js
        │   ├── Education.js
        │   ├── Institution.js
        │   ├── JobOffer.js
        │   ├── Occupation.js
        │   ├── User.js
        │   └── WhatsappGroup.js
        ├── routes/
        │   ├── index.js
        │   ├── auth.js
        │   ├── companies.js
        │   ├── company.js
        │   ├── institution.js
        │   ├── institutions.js
        │   ├── jobs.js
        │   ├── storage.js
        │   ├── user.js
        │   ├── users.js
        │   └── whatsappGroup.js
        └── utils/
            ├── data/
            ├── firebase.js
            ├── testDataLoad.js
            └── validators.js
```

---

## ⚙️ Modules

<details closed><summary>Server</summary>

| File                                                                                | Summary                                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/server/index.js) | This code sets up an Express server with middleware for handling JSON requests, security features, logging, and CORS. It also connects to a MongoDB database and defines routes for an API. The server listens on a specified port and starts the server and database connection. |

</details>

<details closed><summary>Models</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Education.js](https://github.com/ArieLevental/moshal-social/blob/main/server/models/Education.js)         | This code defines a Mongoose schema for the Education model. It includes fields such as userId, institutionId, startYear, endYear, and degree, each with specific validations. The schema is used to create a Mongoose model called "Education", which can be used to interact with the corresponding MongoDB collection.                                                                                                          |
| [Institution.js](https://github.com/ArieLevental/moshal-social/blob/main/server/models/Institution.js)     | The code defines a Mongoose schema for an Institution with fields for name, students, and logoPath. It also includes validation for name length and uniqueness, reference to a User model, and validation for logoPath as a valid URL. The schema is then used to create a Mongoose model for an Institution.                                                                                                                      |
| [WhatsappGroup.js](https://github.com/ArieLevental/moshal-social/blob/main/server/models/WhatsappGroup.js) | This code defines a mongoose schema for creating WhatsApp group objects. The schema includes fields for userId, link, name, and tags. It also includes validation rules for these fields. The code exports the WhatsappGroup model for use in other parts of the application.                                                                                                                                                      |
| [User.js](https://github.com/ArieLevental/moshal-social/blob/main/server/models/User.js)                   | The code defines a user schema using Mongoose ORM for a user management system. It includes fields like firstName, lastName, email, password, picturePath, bannerPath, location, bio, dateOfBirth, phoneNumber, linkedIn, moshalStatus, education, and occupation. It also defines a virtual fullName property and toJSON configuration. The code includes validators for various fields and sets default values where applicable. |
| [Company.js](https://github.com/ArieLevental/moshal-social/blob/main/server/models/Company.js)             | The code defines a Mongoose schema for a company with properties like name, employees, and logoPath. It includes validation rules for fields like name length, uniqueness, and employee IDs. The schema also sets a default value for the logoPath field and includes a validation for its format. The Company model is exported to be used in other parts of the codebase.                                                        |
| [Occupation.js](https://github.com/ArieLevental/moshal-social/blob/main/server/models/Occupation.js)       | This code defines a Mongoose schema for occupations, including fields for user and company IDs, position, start year, and end year. It also includes validation for user and company IDs, start and end years, and defaults and maximum values for start and end years. It creates a model for the occupation schema and exports it. (306 characters)                                                                              |
| [JobOffer.js](https://github.com/ArieLevental/moshal-social/blob/main/server/models/JobOffer.js)           | The code defines a schema for a job offer using Mongoose, a Node.js ORM. The schema includes various fields such as userId, companyId, content, offerTitle, location, offerLink, expReq, and referral, with specified validation rules. The JobOffer model is created based on this schema and exported for use in other parts of the application.                                                                                 |

</details>

<details closed><summary>Utils</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [validators.js](https://github.com/ArieLevental/moshal-social/blob/main/server/utils/validators.js)               | This code provides functions to validate various user inputs, such as URLs, emails, phone numbers, and user IDs. It also includes functions to validate the existence of institutions and companies. Additionally, it includes a method to validate the end year based on the start year. The code utilizes regular expressions and interacts with a mongoose database.                   |
| [testDataLoad.js](https://github.com/ArieLevental/moshal-social/blob/main/server/utils/testDataLoad.js)           | The code is used for a one-time data load. It imports models for various entities such as User, Company, and Institution, and data from a separate file. The loadData function asynchronously inserts the data into their respective collections using the insertMany method.                                                                                                             |
| [firebase.js](https://github.com/ArieLevental/moshal-social/blob/main/server/utils/firebase.js)                   | This code initializes a Firebase app and configures the storage functionality. It retrieves the necessary environment variables and sets up the Firebase config object. It then initializes the Firebase app and exports the storage module for further use.                                                                                                                              |
| [authUtils.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/utils/authUtils.js)             | The code handles an expired token by making a POST request to log the user out, clearing local storage data, and resetting token and user data states. It ensures proper handling of expired tokens in a concise and efficient manner.                                                                                                                                                    |
| [formattingUtils.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/utils/formattingUtils.js) | The code includes two helper functions. 1. "formatDate" takes a date string and returns it in the format "yyyy-MM-dd". If no input is provided, it returns an empty string.2. "capitalizeFirstLetters" takes a string, capitalizes the first letter of each word, and returns the modified string. If the input is empty or not a string, it returns an empty string.                     |
| [texts.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/utils/texts.js)                     | The code defines two React functional components: FooterContributeText and HomepageMainText. FooterContributeText displays an invitation to contribute to the development efforts, explaining the benefits, features, and technologies used.HomepageMainText introduces the Moshal scholarship community, emphasizing its purpose, opportunities, and the value it offers to its members. |

</details>

<details closed><summary>Controllers</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [user.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/user.js)                   | This code provides functionality to manage user profiles by allowing users to retrieve, update, and delete their information, as well as add education and occupation items. It also updates related models such as institutions and companies.                                                    |
| [company.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/company.js)             | The code retrieves a company from the database based on the provided ID using the findById method. If the company doesn't exist, it throws an error with a not found message. Otherwise, it returns the company object in the response with a 200 status code.                                     |
| [auth.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/auth.js)                   | This code provides functionalities for user registration, login, and logout. It uses bcrypt for password encryption and verification, jwt for token generation, and the User model for database operations.                                                                                        |
| [storage.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/storage.js)             | The code uploads and retrieves profile images using Firebase Storage. It saves the file, updates the user's picturePath, and returns the image URL. It also fetches and returns the URL of an existing profile image.                                                                              |
| [users.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/users.js)                 | This code fetches all users from the database and returns them sorted by first name. It excludes the password field, and populates the education and occupation fields for each user. It handles errors and returns the users in JSON format.                                                      |
| [institutions.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/institutions.js)   | The code exports a function that retrieves all institutions from the database using the Institution model. If no institutions are found, it throws an error with a 404 status code. If successful, it sends a JSON response with the retrieved institutions.                                       |
| [jobs.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/jobs.js)                   | The code includes two functions: 1. getJobOffers retrieves all job offers, sorts them by updatedAt, and populates corresponding data.2. newJobOffer creates a new job offer by saving the provided data and populating company information.                                                        |
| [institution.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/institution.js)     | This code exports a function called "getInstitution" that retrieves an institution from the database based on the provided ID. If the institution is found, it is returned as a JSON response with a status code of 200. If not found, it throws an error with a message and a status code of 404. |
| [whatsappGroup.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/whatsappGroup.js) | This code provides core functionalities for managing WhatsApp groups:-getAllWhatsappGroups: retrieves all groups-newWhatsappGroup: creates a new group-updateWhatsappGroup: updates a group-deleteWhatsappGroup: deletes a group.                                                                  |
| [companies.js](https://github.com/ArieLevental/moshal-social/blob/main/server/controllers/companies.js)         | The code retrieves all companies from the database and sends them as a JSON response. If no companies are found, it throws an error with a status code of 404.                                                                                                                                     |

</details>

<details closed><summary>Middleware</summary>

| File                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [errorHandler.js](https://github.com/ArieLevental/moshal-social/blob/main/server/middleware/errorHandler.js) | This code defines an error handler middleware function. It takes in an error, request, response, and next function as parameters. It sets the status code and error message based on the error object, and sends a JSON response with the error details.                                                                                                                                                                            |
| [auth.js](https://github.com/ArieLevental/moshal-social/blob/main/server/middleware/auth.js)                 | This code implements a JWT middleware function, "verifyToken", that protects routes by validating and verifying JWT tokens. It checks if the token exists and starts with "Bearer ", removes the prefix, and verifies the token using a secret key. If the token is valid, the verified user is attached to the request for further processing. Any errors are appropriately handled with relevant status codes and error messages. |

</details>

<details closed><summary>Routes</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [user.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/user.js)                   | This code defines routes for a user in an express application. It includes functionalities for getting/updating user data, adding/deleting education and occupation items. Token verification is used for authentication.                                                                                                           |
| [company.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/company.js)             | This code defines the companyRouter, a router that handles the GET request for getting a company. It also includes middleware to verify the token for authentication purposes.                                                                                                                                                      |
| [auth.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/auth.js)                   | This code exports a router object for handling authentication routes. It includes routes for logging out, logging in, and registering. The corresponding functions for each route are imported from the auth controller module.                                                                                                     |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/index.js)                 | This code exports a router that handles various API routes for authentication, users, storage, institutions, jobs, companies, and WhatsApp groups. It also includes an error handling middleware.                                                                                                                                   |
| [storage.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/storage.js)             | This code sets up a router for handling storage routes. It uses Express to define two routes: one for retrieving and updating profile images, and another for adding banner images (currently commented out). The routes require authentication, utilize multer for file uploads, and include logic for processing the image files. |
| [users.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/users.js)                 | This code sets up a users route in an Express application. It imports the getAllUsers controller and the verifyToken middleware. The users route is accessed through a GET request and requires a valid token.                                                                                                                      |
| [institutions.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/institutions.js)   | This code defines an Express router for handling requests related to institutions. It includes a GET route that calls the getAllInstitutions controller function and verifies the authenticity of the request's token.                                                                                                              |
| [jobs.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/jobs.js)                   | The code sets up an Express router for job-related requests. It defines routes for getting and adding job offers, protected by token-based authentication.                                                                                                                                                                          |
| [institution.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/institution.js)     | This code sets up a router for handling requests related to institutions. It imports the necessary functions from the controllers and middleware. Specifically, it sets up a GET route for retrieving institution data by ID and adds authentication middleware for verification.                                                   |
| [whatsappGroup.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/whatsappGroup.js) | This code defines a router for managing WhatsApp groups in an Express application. It allows users to retrieve all groups, create a new group, update a group, and delete a group. Authentication is required for all operations.                                                                                                   |
| [companies.js](https://github.com/ArieLevental/moshal-social/blob/main/server/routes/companies.js)         | This code implements a Express router for handling requests to the "/companies" route. It uses the "verifyToken" middleware to authenticate requests, and calls the "getAllCompanies" controller function when the route is accessed with a GET request.                                                                            |

</details>

<details closed><summary>Public</summary>

| File                                                                                           | Summary                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [robots.txt](https://github.com/ArieLevental/moshal-social/blob/main/client/public/robots.txt) | The code follows the guidelines from the "robots.txt" protocol, allowing all web crawlers to access all parts of the website.                                                                                                                                                                      |
| [index.html](https://github.com/ArieLevental/moshal-social/blob/main/client/public/index.html) | This code is an HTML template for a website created using create-react-app. It includes basic meta tags, a manifest file, and provides instructions for development and production builds. The main content of the website is expected to be rendered inside the `div` element with the id "root". |

</details>

<details closed><summary>Src</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [App.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/App.css)     | This code defines the core styling for a web application layout. It utilizes flexbox for a responsive and flexible design, with a navigation bar, content area, and footer. The layout adjusts to fill the full height of the viewport.                                                                    |
| [App.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/App.js)       | This code defines the structure and routing of a React application. It manages authentication, state data, and renders different pages/components based on the user's authentication status. It uses React Router for navigation and various context providers to store and share data throughout the app. |
| [index.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/index.css) | This code defines custom CSS variables for color values, font styles, and common HTML element styles. It also includes styles for buttons, input fields, text areas, and select dropdowns. The aim is to provide a consistent and visually appealing UI design for a web application.                      |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/index.js)   | This code is responsible for rendering the root component of a React application, while applying strict mode settings. It fetches the "root" element from the HTML document and mounts the <App /> component within it.                                                                                    |

</details>

<details closed><summary>Profilepage</summary>

| File                                                                                                         | Summary                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/profilePage/index.css) | This code defines CSS styles for a profile page. It includes styling for a banner picture, profile picture, and various layout components such as flexboxes and form elements. The code ensures proper layout and positioning of these elements on the profile page. |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/profilePage/index.js)   | HTTPStatus Exception: 400                                                                                                                                                                                                                                            |

</details>

<details closed><summary>Experiencecontainer</summary>

| File                                                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [experienceContainer.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/profilePage/experienceContainer/experienceContainer.css) | This code defines CSS styles for a responsive experience container, including buttons and a form. It uses flexbox to align and space the elements, allowing for easy customization and layout adjustments.                                                                                                                                                                                                                                                            |
| [experienceContainer.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/profilePage/experienceContainer/experienceContainer.js)   | The code defines a React component called ExperienceContainer which handles the rendering of experience items. It includes functionality for adding and removing experience items, as well as displaying a form for adding new items. The component receives data about organizations and experience items as props. It also uses context for authentication and user data. Overall, it serves as a container component for managing and displaying experience items. |

</details>

<details closed><summary>Dataitem</summary>

| File                                                                                                                                   | Summary                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DataItem.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/profilePage/components/DataItem/DataItem.css) | This code defines a CSS class called "profile-page-data-item" which specifies a flexbox layout for a row. The flex-direction is set to "row" and the contents are justified with space between them.                                                          |
| [DataItem.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/profilePage/components/DataItem/DataItem.js)   | The code defines a reusable component called DataItem. It displays a label, value, and corresponding icon using the FontAwesomeIcon component. If no value is provided, it displays "Not provided". The CSS classnames are also defined for styling purposes. |

</details>

<details closed><summary>Experiencebox</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [experienceBox.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/profilePage/experienceBox/experienceBox.css) | This code defines the styling for an experience box element. It uses flexbox to align and position elements within the box. It includes features such as displaying company information, including name and logo, as well as duration and position. It also provides a remove button with hover effects.      |
| [experienceBox.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/profilePage/experienceBox/experienceBox.js)   | The code is a React component called ExperienceBox that renders a box displaying information about an experience item. It also handles the deletion of experience items when the user clicks on a remove button. The component uses globalAuthContext to determine if the user is allowed to delete the item. |

</details>

<details closed><summary>Userspage</summary>

| File                                                                                                     | Summary                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/usersPage/index.js) | This code defines the UsersPage component, which fetches user data from an API, stores it in local storage, and displays it. It also fetches institutions and companies data and passes them to a search bar component and a data display component. |

</details>

<details closed><summary>Searchbar</summary>

| File                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Searchbar.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/usersPage/Searchbar/Searchbar.js)   | The Searchbar component is a React component that provides a search functionality to filter a list of users based on various criteria. It allows users to search for specific users by name, as well as filter users by occupation (company) and education (university). The component also includes a random selection feature.                                                                                                                                                                                                   |
| [Searchbar.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/usersPage/Searchbar/Searchbar.css) | This code defines the CSS styles for a search bar component. The search bar has a flex layout, a centered display, and a background color. It also includes styles for a search button, a filter zone, a dropdown label, and a dropdown menu.                                                                                                                                                                                                                                                                                      |
| [Searchbar.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/jobsPage/Searchbar/Searchbar.js)    | The code provides a search bar component for filtering job listings. It uses React's useContext and useState hooks to access and update data from two contexts: companiesData and jobsData. The component filters the jobsData based on the user's search query and selected company filter. The filters are applied to job titles, content, and company names. The filtered data is then set as the presentedJobsData. The component also allows users to search for jobs by company by selecting a company from a dropdown menu. |

</details>

<details closed><summary>Usercard</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [UserCard.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/usersPage/UserCard/UserCard.js)   | The UserCard component is a reusable component that renders a user's profile card. It displays the user's full name, profile picture, and contact icons for LinkedIn, WhatsApp, and email. Clicking on the name or picture will navigate to the user's profile page.                                                                       |
| [UserCard.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/usersPage/UserCard/UserCard.css) | The code defines a user card component with specific styles. It includes a background color, size, border-radius, and image settings. It also sets styles for the user's full name, including font size and padding. Additionally, it defines styles for the user's profile image and icons, such as height, border radius, and alignment. |

</details>

<details closed><summary>Databasecontainer</summary>

| File                                                                                                                                                 | Summary                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DataBaseContainer.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/usersPage/DataBaseContainer/DataBaseContainer.js)   | The code creates a functional component called DataBaseContainer. It receives data from usersDbDataContext and renders them as UserCard components. The UserCard components are generated based on the data provided and are rendered inside a parent div with the className "database-container". |
| [DataBaseContainer.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/usersPage/DataBaseContainer/DataBaseContainer.css) | The code transforms a container into a grid layout with wrapped items. It centers the items and creates a gap between columns and rows. It allows scrolling within the container and adds padding.                                                                                                 |

</details>

<details closed><summary>Communitypage</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/communityPage/index.css) | The code defines the core functionalities of a community page. It uses flexbox to create a row layout with space around the items. The page is divided into four columns each taking up 25% of the width. Overall, it enables a responsive and visually appealing community page design.            |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/communityPage/index.js)   | The code is importing three components, namely MoshalSocials, PhoneBook, and WhatsappGroups.These components are then rendered within a div element with the class name "community-page".The purpose of this code is to create a CommunityPage component that displays these three functionalities. |

</details>

<details closed><summary>Moshalsocials</summary>

| File                                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                             |
| -------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [MoshalSocials.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/communityPage/MoshalSocials/MoshalSocials.css) | The code sets up the layout and styling for social media icons and YouTube videos. The social-icons class makes the icons display in a row with equal space between them. The youtube-videos class arranges the videos in a column, with centered alignment and a small gap between each video.                                                     |
| [MoshalSocials.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/communityPage/MoshalSocials/MoshalSocials.js)   | The given code is a React component called "MoshalSocials" that displays a section for Moshal Program's social media links and YouTube videos. It utilizes FontAwesomeIcon library to display social media icons with links to respective platforms. The YouTube videos are embedded using iframes and videos are displayed in a responsive manner. |

</details>

<details closed><summary>Whatsappgroups</summary>

| File                                                                                                                                            | Summary                                                                                                                                                                                                                                                                                                                                                                                            |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [WhatsappGroups.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/communityPage/WhatsappGroups/WhatsappGroups.css) | The code implements a responsive layout for a WhatsApp groups page. It uses flexbox for positioning and styling elements, allowing for easy arrangement and alignment. It also includes functionality for adding and displaying groups, including their names, tags, and edit options. Overall, the code provides a user-friendly interface for managing WhatsApp groups.                          |
| [WhatsappGroups.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/communityPage/WhatsappGroups/WhatsappGroups.js)   | This code is a React component that manages a list of WhatsApp groups. It allows users to search for groups, add new groups, edit existing groups, and delete groups. The component retrieves the groups from an API and updates the state accordingly. It also handles form submissions for adding and editing groups. The component uses FontAwesomeIcon to display icons for different actions. |

</details>

<details closed><summary>Phonebook.js</summary>

| File                                                                                                                                | Summary                                                                                                                                                                                                                                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [PhoneBook.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/communityPage/PhoneBook.js/PhoneBook.css) | This code defines the styles for a phone book web application. It uses flexbox to lay out the input fields and contact list in a column format. The contact list has scrollable functionality and each contact item has a border and proper alignment for the name and phone number. The styles are applied using classes in HTML elements. |
| [PhoneBook.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/communityPage/PhoneBook.js/PhoneBook.js)   | The code is a React component called "PhoneBook" that displays a phone book interface. It allows users to search for contacts by name and filters the displayed contacts based on the search query. The contacts data is stored in an array and rendered dynamically.                                                                       |

</details>

<details closed><summary>Jobspage</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/jobsPage/index.js) | The code is for a JobsPage component that displays a list of jobs. It fetches job data from an API and stores it in state. It also fetches company data and stores it in a separate state. The component renders a Searchbar component and a FeedContainer component, passing the job data through a context provider. |

</details>

<details closed><summary>Feedcontainer</summary>

| File                                                                                                                                    | Summary                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [FeedContainer.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/jobsPage/FeedContainer/FeedContainer.css) | The code defines the styling for a feed container and a job offer container. The feed container is a scrollable column that aligns its items in the center with a 1rem gap between them. The job offer container spans the entire width with centered align and justify content.                                  |
| [FeedContainer.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/jobsPage/FeedContainer/FeedContainer.js)   | The FeedContainer component is responsible for rendering the job offers in a container. It utilizes the useContext hook to access the presentedJobsData from the jobsDataContext. It renders a NewJobForm component at the top and iterates through presentedJobsData to render JobOffer components for each job. |

</details>

<details closed><summary>Newjobform</summary>

| File                                                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [NewJobForm.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/jobsPage/FeedContainer/NewJobForm/NewJobForm.css) | This code defines the layout and styling for a job offer form on a jobs page. It uses flexbox to center and align items, sets the width, and adds some spacing. It is designed with a clean and organized structure.                                                                                                                                                                                                                             |
| [NewJobForm.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/jobsPage/FeedContainer/NewJobForm/NewJobForm.js)   | The NewJobForm component is responsible for rendering a form that allows users to add a new job offer. It utilizes React's useState and useContext hooks to manage state and access global data. When the form is submitted, it sends a POST request to the server to create a new job offer. The response is then processed and the job offer is added to the local and presented job data. The form is shown/hidden based on user interaction. |

</details>

<details closed><summary>Joboffer</summary>

| File                                                                                                                     | Summary                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [JobOffer.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/jobsPage/JobOffer/JobOffer.js)   | The code above defines a component called JobOffer that displays the details of a job offer. It includes the offer's date, publisher, title, company logo, content, experience requirements, location, referral information, and an external link. It also has icons for favorites, editing, and deleting. |
| [JobOffer.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/jobsPage/JobOffer/JobOffer.css) | This code defines the styles for displaying job offers. It includes a flexible layout, headers, titles, company images, job details, and footer icons. The design aims to be aesthetically pleasing and user-friendly.                                                                                     |

</details>

<details closed><summary>Homepage</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/homePage/index.css) | The code defines styles for a homepage container, carousel, and a "Born Today" widget. It utilizes flexbox for layout and includes properties for positioning, sizing, and typography. The carousel displays images at a reduced opacity, while the "Born Today" widget features user profiles with names and images. |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/homePage/index.js)   | The code is a React component that represents a homepage. It fetches user data from an API, displays a carousel of images, and showcases users who are born on the current day. It also handles expired authentication tokens. The component utilizes React hooks and context API for state management.               |

</details>

<details closed><summary>Landingpage</summary>

| File                                                                                                         | Summary                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/landingPage/index.css) | The code defines the styling for a landing page container. It sets the width and height to 100% with hidden overflow and a background gradient. It also centers the content within the container and applies a blurred background image.                                                                                      |
| [index.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/landingPage/index.js)   | This code is responsible for rendering a landing page that contains login, registration, and password recovery forms. It uses React's useState hook to handle form data and manage the active form being displayed. The authContext.Provider is used to provide the form data and form relationships to the child components. |

</details>

<details closed><summary>Formscontainer</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [formsContainer.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/landingPage/formsContainer/formsContainer.css) | The code defines the styling for login, register, and recovery forms, including their widths, background color, gradient, box shadow, border radius, and padding. It also specifies the layout and styling for form elements such as labels and inputs, as well as the styling for focused inputs, action links, and submit buttons.                                                                                                                                                               |
| [formsContainer.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/scenes/landingPage/formsContainer/formsContainer.js)   | The code consists of three forms: Login, Register, and Password Recovery. The Login form handles user authentication, sending the form data to the server and storing the user token and data in local storage. The Register form handles user registration, validating the passwords and sending the form data to the server. The Password Recovery form allows users to recover their password by submitting their email address. The code utilizes React hooks and React Router for navigation. |

</details>

<details closed><summary>Footer</summary>

| File                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Footer.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Footer/Footer.css) | The code defines the styles for a sticky footer element with centered content. It also includes styles for a credit link with a hover effect and a tooltip container with hidden text that appears on hover. Some parts of the code are commented out and marked as TODO, indicating they need further work or consideration. |
| [Footer.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Footer/Footer.js)   | This code implements a Footer component for a web application. It displays links for Terms of Service and Privacy Policy, as well as a section for credits. It also includes a tooltip for contribution information.                                                                                                          |

</details>

<details closed><summary>Scrollbar</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Scrollbar.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Scrollbar/Scrollbar.css) | The code provides a customized appearance for scrollbars in a web page. It sets the scrollbar width, defines the appearance of the thumb (the movable part of the scrollbar), and changes the background color when the thumb is hovered. The scrollbar track (the background of the scrollbar) is also styled. |

</details>

<details closed><summary>Pictureeditform</summary>

| File                                                                                                                                             | Summary                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [PictureEditForm.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Widgets/PictureEditForm/PictureEditForm.js)   | The code exports a functional component called PictureEditForm. It renders a form with an input field for a user to select an image file. When the input value changes, the function onInputChange is called with the selected file. When the form is submitted, the function onFormSubmit is called. The buttonText prop determines the text displayed on the submit button. |
| [PictureEditForm.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Widgets/PictureEditForm/PictureEditForm.css) | The code snippet is responsible for styling the picture form on a user's profile page. It arranges the elements in a vertical manner, aligning them at the center with a gap of 5px between each row.                                                                                                                                                                         |

</details>

<details closed><summary>Categorytitle</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [CategoryTitle.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Widgets/CategoryTitle/CategoryTitle.css) | The code defines the styling for a category title. It sets the text to uppercase, adds a bottom border, and adjusts the spacing and color. It also includes a span element with a background color and padding.               |
| [CategoryTitle.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Widgets/CategoryTitle/CategoryTitle.js)   | The code exports a functional component called CategoryTitle which takes a title as a prop and renders it inside a div element with the className "category-title". It also applies styling using the CategoryTitle.css file. |

</details>

<details closed><summary>Navbar</summary>

| File                                                                                                          | Summary                                                                                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Navbar.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Navbar/Navbar.css) | This code defines the core functionalities of a navbar component. It creates a responsive navbar with a logo on the left side. The navbar has a sticky position and a background color. The logo is styled with a background color, border radius, padding, and margin. The logo image is sized to 7vh.       |
| [Navbar.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Navbar/Navbar.js)   | This code is a functional component that represents a navbar. It uses React Router to create a link to the homepage. It also imports a global authentication context and uses it to handle user authentication and logout functionality. If a user is logged in, it renders a navigation component and icons. |

</details>

<details closed><summary>Navigation</summary>

| File                                                                                                                             | Summary                                                                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Navigation.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Navbar/Navigation/Navigation.css) | This code defines the styles for a navigation bar, with flex-based layout and various hover/active states. It also includes styles for icons and text within the navigation items.                                                                                                                                    |
| [Navigation.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Navbar/Navigation/Navigation.js)   | This code provides a navigation component for a React application using React Router. It uses FontAwesome icons and dynamically highlights the active link based on the current location. The component renders a set of links with icons and text, allowing the user to navigate between different pages in the app. |

</details>

<details closed><summary>Icons</summary>

| File                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Icons.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Navbar/Icons/Icons.js)   | This code defines a functional component Icons, which displays a set of icons including settings, user picture, mail, and logout. The icons are imported from a library and styled using CSS. The component takes props for the signed user ID, user picture path, and logout function. The user picture is displayed as a link to the user's profile. |
| [Icons.css](https://github.com/ArieLevental/moshal-social/blob/main/client/src/components/Navbar/Icons/Icons.css) | This code defines styles for icons and navbar user pictures. The icons are displayed as flex items, centered and spaced with padding. The icons and user pictures have hover effects. The user pictures have additional styles for dimensions, margin, border, and object-fit.                                                                         |

</details>

<details closed><summary>State</summary>

| File                                                                                          | Summary                                                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [state.js](https://github.com/ArieLevental/moshal-social/blob/main/client/src/state/state.js) | The code snippet defines four contexts using the React framework: general data, global authentication, institutions data, and companies data. These contexts enable components to access, consume, and share data across the application efficiently. |

</details>

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the moshal-social repository:

```sh
git clone https://github.com/ArieLevental/moshal-social
```

2. Change to the project directory:

```sh
cd moshal-social
```

3. Split into 2 terminal instances and:

```sh
cd client
...
cd server
```

4. Install the dependencies in both instances:

```sh
npm install
```

### 🤖 Running moshal-social

Again, run in both instances:

```sh
npm run dev
```

### 🧪 Tests

```sh
Will be added soon!
```

---

## 🛣 Roadmap

Full Roadmap can be found [here](https://docs.google.com/document/d/e/2PACX-1vQE-LeLBZWpM-iTqNjcTgXAXranH3_1H1etg0ncSB4DpL7lCgBb6HLu2stm83j9jdPROgyXMBk6P0--/pub), this is only partial Roadmap:

> - [x] `ℹ️  Visual users database with smart queries`
> - [x] `ℹ️  Refactor: Client code needs a lot of work`
> - [ ] `ℹ️  Type Checking: incorporating TypeScript in the app`
> - [ ] `ℹ️  Responsive design: Maybe adopting a styling library like Ant Design or Mantine`
> - [ ] `ℹ️  Testing Framework: Thinking about Jest or Playwright`
> - [ ] `ℹ️ Chat / Messaging system`

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `MIT` License. See the [LICENSE-Type](LICENSE) file for additional info.

---

## 👏 Acknowledgments

- Made by [Adir Barak](https://www.linkedin.com/in/adir-barak-4ab698257/) and [myself](https://www.linkedin.com/in/arie-levental/)
- Thanks to the Moshal's Scholarship Program for supporting the project and in general
