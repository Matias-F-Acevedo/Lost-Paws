# **🐾** Lost Paws **🐾**

Lost Paws is a React based project with the goal of helping to find lost animals. The main purpose of this application is to provide a platform where users can contact the site administrators to post information about lost or found animals, or also to facilitate finding any of them with their owners. Throughout the project, agile methodologies such as Scrum and good programming practices were applied.

Project report: https://drive.google.com/drive/folders/1CjKQFwmLq2sl4jpihM4qT3KSOhFine-P?usp=sharing

## Functionalities
* Card Display: Users can view lost animal cards on the home page. Each card shows details such as the pet's breed, the location where it was lost and contact information.
* Card Editing and Posting (Admin): Administrators have access to edit existing cards or post new lost pet cards. This allows them to keep the information on the site up to date.
* Access Security: An access control system is implemented to ensure that only administrators have the necessary permissions to edit or publish lost pet cards.
* User Context: A global context is used to save the user's status, allowing authentication and permissions to be managed efficiently throughout the application.

## Technologies Used

The project has been developed using the following technologies:
* React: open source JavaScript library used to build the user interface of the application.

* Context API: React feature used to manage the user's global state and access permissions.

* Hooks: Hooks such as useState, useEffect and useContext are used to manage the state and lifecycle of components.

* Mock API: Where we create and use our test Backend.

* Fetch API: We use the JavaScript Fetch API to make requests to the API and get the data from the lost animal cards.

* React router: Library that facilitates the process of defining the navigation routes within our application.

* React Icons: Small library that allows you to add icons (from different icon libraries) to your applications made with React.

* Firebase (Storage): It is a digital platform designed to facilitate the development of quality web and mobile applications in a fast and efficient way. In our case it was used to save images.

* SweetAlert: It is a plugin with which we give a professional look to the messages we send to users according to current trends.

* GitHub: For project management and code version control.

* CSS: CSS is used for the design and presentation of the page.


## Project Prerequisites

 **Node.js**: Make sure you have Node.js installed on your system.
    
**npm package manager**: npm is the package manager for Node.js and is usually installed automatically along with Node.js.

**Visual Studio Code** or any code editor.
  

## Installation instructions
1. Open the GitHub repository.
    
2.  Click on the "Code" or "Code" button on the right side of the repository, just above the list of files. This will show you the URL of the repository.
    
3.  Copy the repository URL. You can do this by clicking the copy button next to the URL or by manually selecting and copying the URL.
    
4.  Open a terminal or command line on your local machine.
    
5.  Navigate to the directory where you want to clone the repository. You can use the `cd` command followed by the directory path.

7.  Run the following command to clone the repository:

	`git clone URLofRepository`.
8. Press Enter to execute the command. Git will start cloning the repository on your local machine. You will see a progress indication and once finished, a new directory will be created with the repository name.



9.  **Project dependencies**: Node.js projects usually include a `package.json` file that contains a list of dependencies needed for the project. Once you have cloned the project repository on your computer, you can install the dependencies by running the following command in the project directory:

    `npm install`. 
    
    This will install all the necessary dependencies as specified in the `package.json` file.



## Execution Instructions

1. Once the installation of the dependencies is complete, run the following command to start the development server:
	
	`npm run dev` 

	This command will start the Vite development server and begin compiling and serving your React project. You will see the server URL in the terminal.

2.  Open a web browser and visit the URL displayed in the terminal. Usually it will be something like: `http://localhost:3000`.



## Use of the project

* When you open the lost animal page in your browser, the list of available lost animal cards will be displayed.
* You can scroll down to browse through the different lost animal cards. Each card displays information such as the pet's breed, the location where it was lost, and contact information.
* To log in as an administrator and access the CRUD functionality:
   * Click on the "Login" button located at the top right of the page.
   * A login form will be displayed. Enter your administrator credentials (user: admin123 and password: admin123) and press the "Login" button.
* After logging in as administrator, you will see two changes on the page:
   * Instead of the list of lost animal cards, a welcome message will be displayed along with a "Logout" button in the top navigation bar.
   * Cards in the main section are now clickable and display additional "Administration" options that allow you to access card editing and deletion functionality.
* To edit an existing card:
	* An edit form will open when you click on the Card where you can modify the details of the lost animal. Make the necessary changes and press the "Update" button to save the changes.

* To publish a new lost animal card:
   * Click on the button with the create icon on the main page.
   * A posting form will open where you can enter the details of the new lost animal. Complete all required fields and press the "Create" button to add the new card to the list.
* If you want to log out as administrator:
   * Click the "Log out" button in the navigation bar.
   * You will be redirected back to the main page where you will be able to view the lost animal cards as a normal user.
Remember that only administrators can make edits and posts. Normal users can view the lost animal cards but do not have access to the editing functionality.


 **🐾** Lost Paws **🐾**
 
**Project members:** Francisco Almirón, Matias Cagliero, Sofia Belocchi ,Matias Acevedo.
