# Ateneo LitHub

An online marketplace for members of Ateneo de Naga University to buy and sell books. It facilitates the connection between buyers and sellers within the university community. The website will NOT handle online payments as transactions are arranged directly between users outside of the platform.


## Contributing to Development

Before doing any work, always update your main branch to ensure that you have the latest development environment.

```bash
git checkout main
git pull origin main
npm install
```

In case you were already working on a branch before the main branch was updated, just merge the main branch into your feature branch and continue development as normal.

```bash
git checkout your-feature-branch
git merge main
```

You may push your commits as many times as you want (as long as it's on your own branch). It's not limited to only when your work on some feature is 100% complete. Changes can be pushed to indicate to the rest of the group that you are working on something.


## Git Workflow

### Creating and Pushing Branches

1. **Create a Branch.** Name it after your feature or task.

   ```bash
   git checkout -b <branch-name>
   ```

   We will follow the following format for branch names: ```type/feature-name```. For example, ```feature/login-form```. Types are outlined later down below.

2. **Make Changes.** Edit files, then stage and commit them.

   ```bash
   git add .
   git commit -m "<type>(scope): <description>"
   ```

   Each commit should focus on one specific change. If a commit seems like it will involve two different types, separate them into individual commits to specify the different types and/or scopes. In this case, you may want to stage individual files instead using ```git add <file-name>```.

   We also have a format for commit messages to keep things organized which you can find below. Keep descriptions specific and concise.

   **Note:** Before making any changes, make sure that **you are not on the main branch.** You can check which branch you're on using ```git branch``` or ```git status```.

3. **Push your Branch.** Send it to the remote repository.

   ```bash
   git push origin <branch-name>
   ```

   If you haven't connected your local Git installation to your Github account yet, it will prompt you to do so. Just follow the instructions.

   After pushing, go to the repository on Github and you should see your branch.

4. **Make a Pull Request.**  Once your work on the branch is done, make a pull request so we can review your changes and merge them into the main branch. Follow the commit message format for the title of your pull request, indicating the most primary feature you were working on. You may also briefly list the other changes you made in the description, but this is optional. The description can be left blank.

### Commit Message Guidelines

To keep our logs organized, follow these guidelines for the format of commit messages.

```text
<type>(scope): <short description>
```

* **Type.** What kind of changes did you make?
  * ```feature```: New feature or functionality (e.g., adding a component)
  * ```fix```: Bug fix or correction
  * ```docs```: Documentation updates (e.g., README, comments)
  * ```style```: Styling/CSS changes without functional changes
  * ```refactor```: Code restructuring without changing behavior
  * ```chore```: Miscellaneous changes

* **Scope.** In what module did you make changes? These are examples and not an exhaustive list. (Not to be strictly followed, just put in what you feel is most appropriate)
  * ```auth```: Authentication-related (e.g., login, register)
  * ```listings```: Book listing features
  * ```offers```: Offer management
  * ```messaging```: Messaging system
  * ```ui```: Shared UI components (e.g., header, button)
  * ```data```: Sample data or static files
  * ```app```: App-wide changes (e.g., App.js, routing)


## Setup Development Environment

Make sure you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org) installed.

1. **Clone the Repository.** Go to the directory where you want to put your project folder, then run this command.

   ```bash
   git clone <repository-url>
   cd ateneo-lithub
   ```

2. **Set User Credentials.** These credentials will appear in your commit logs. You can technically put anything for your name and email, but use your real name and Github email so we can track development progress.

   ```bash
   git config user.name "<your full name>"
   git config user.email "<your github email>"
   ```

3. **Install Dependencies.** Run this command to install React, Vite, Tailwind, and other packages.

   ```bash
   npm install
   ```

4. **Start the Development Server.**

   ```bash
   npm run dev
   ```

   You can launch the app locally at ```http://localhost:5173``` using your browser. To stop the server, go back to the console and press **q + enter**.
   
   **Note**: You don't need to restart the server everytime there are file changes. Vite handles that for you automatically.


## Notes

* If you're developing on VS Code, you may find it helpful to install [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (search for it in the Extensions menu). It adds autocomplete, syntax highlighting, and linting for Tailwind CSS.