# **KKnoteTaker**

![NPM](https://img.shields.io/npm/l/inquirer)

## **Purpose**

This is an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, so the backend has been created and two have been connected.

* The following HTML routes should be created:

  * GET `/notes` returns the `notes.html` file.

  * GET `*` returns the `index.html` file.

* The application has a `db.json` file on the backend that is used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` reads the `db.json` file and returns all saved notes as JSON.

  * POST `/api/notes` receives a new note to save on the request body, add it to the `db.json` file, and then returns the new note to the client.

  * DELETE `/api/notes/:id` receives a query parameter containing the id of a note to delete. This is done using an additional npm request and creates an extremely unique like '8223f680-2f52-41f3-85cf-72ce80a5a96d'.  In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.  


## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

Application should allow users to create and save notes. - This is done by clicking the pen and filling in the title and description and then clicking the save button.  If you do not refresh the page before clicking the save button again, then you will save the same note twice.  Therefore, please refresh after you click the save button.  

Application should allow users to view previously saved notes. - The notes are displayed on the side with the title showing and you can click on the title and you can view the message showing on the right pane.

Application should allow users to delete previously saved notes. - This is done by clicking the bin on the side of the note.  Once you do this, you have to refresh the page before the change is made.   

#### **Table of Contents:**

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation

You have to have the **package.json** file and run **npm install** in the terminal.

## Usage

AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete

## License

This code is covered under the NPM license and the badge at the beginning reflects it.

## Contributors

Kerem Karaman

## Tests

There are no tests for this project.

## Questions

For more information please contact me using my [email](keremukaraman@gmail.com).

The link for the note taker repo can be found [here](https://github.com/KKaraman/KKnoteTaker).

The link for the kknotetaker heroku app can be found [here](https://kknotetaker.herokuapp.com/).

If you liked this, you can see my other repositories at my [GitHub profile](https://github.com/KKaraman).

![Commit Day](https://img.shields.io/github/last-commit/KKaraman/KKemployeeSummary?style=plastic).