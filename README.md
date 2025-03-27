# Ateneo LitHub

An online marketplace for members of Ateneo de Naga University to buy and sell books. It facilitates the connection between buyers and sellers within the university community. The website will NOT handle online payments as transactions are arranged directly between users outside of the platform.


## Setup Development Environment

Make sure you have [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org) installed.

1. **Clone the Repository.** Go to the directory where you want to put your project folder, then run this command.

   ```bash
   git clone <repository-url>
   cd ateneo-lithub
   ```

2. **Install Dependencies.** Run this command to install React, Vite, Tailwind, and other packages.

   ```bash
   npm install
   ```

3. **Start the Development Server.**

   ```bash
   npm run dev
   ```

   You can launch the app locally at ```http://localhost:5173``` using your browser. To stop the development server, go back to the console then press **q + enter**.
   
   **Note**: You don't need to restart the server everytime there are file changes. Vite handles that for you automatically.


## Git Workflow

We will use Git for version control. If this is your first time setting up the development environment, first set your Git user credentials.

```bash
git config user.name "[your full name]"
git config user.email "[your github email]"
```

These credentials will appear in your commit logs. You can technically put anything for your name and email, but use your real name and Github email so we can track development progress.

### Creating and Pushing Branches

1. **Create a Branch.** Name it after your feature or task.

   ```bash
   git checkout -b <branch-name>
   ```

   We will follow the following format for branch names: ```type-feature-name```. For example, ```feature-login-form```. Types are outlined later down below.

   Each branch should focus on one specific change. If a branch seems like they involve two types, separate them into their own branches.

2. **Make Changes.** Edit files, then stage and commit them.

   ```bash
   git add .
   git commit -m "<type>(scope): <description>"
   ```

   We also have a format for commit messages to make sure they're descriptive and organized which you can find below.

   Be specific with your descriptions. Aim for about 50 characters in the description (excluding type/scope). Use present tense.

   **Note:** Before making any changes, make sure that **you are not on the main branch.** You can check which branch you're on using:

   ```bash
   git status
   ```

3. **Push your Branch.** Send it to the remote repository.

   ```bash
   git push origin <branch-name>
   ```

   If you haven't connected your local Git installation to your Github account yet, it will prompt you to do so. Just follow the instructions.

4. **Make a Pull Request.** After pushing, go to the repository on Github and you should see your commit. Make a pull request so we can review your changes and merge them into the main branch.

### Commit Message Format

Use this format for all commit messages:

```text
type(scope): short description
```

* **Type.** What kind of changes did you make?
  * ```feature```: New feature or functionality (e.g., adding a component)
  * ```fix```: Bug fix or correction
  * ```docs```: Documentation updates (e.g., README, comments)
  * ```style```: Styling/CSS changes without functional changes
  * ```refactor```: Code restructuring without changing behavior
  * ```chore```: Miscellaneous changes

* **Scope.** In what module did you make changes? These are examples and not an exhaustive list.
  * ```auth```: Authentication-related (e.g., login, register)
  * ```listings```: Book listing features
  * ```offers```: Offer management
  * ```messaging```: Messaging system
  * ```ui```: Shared UI components (e.g., header, button)
  * ```data```: Sample data or static files
  * ```app```: App-wide changes (e.g., App.js, routing)


## Notes

* If you're developing on VS Code, you may find it helpful to install [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) (search for it in the Extensions menu). It adds autocomplete, syntax highlighting, and linting for Tailwind CSS.