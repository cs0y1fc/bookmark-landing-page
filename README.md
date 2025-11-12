# Bookmark Landing Page

This repository contains the solution for the main goal to build a responsive landing web page following design web patterns and Web Content Accessibility Guidelines (WCAG).

---

## 🚀 Project Iterations

This project is developed in three distinct branches for the distinct iterations to demonstrate a progression in styling techniques.

### Iteration 1: HTML & CSS (Vanilla)

**This branch/repository contains the code for Iteration 1.**

* **Objective:** Build the complete landing page layout using only semantic **HTML5** and **Vanilla CSS3**.
* **Focus:** Correctly structuring the DOM, implementing a responsive design using media queries, and styling all components from scratch.
* **JavaScript:** Vanilla JavaScript is used for interactive elements like the FAQ accordion and tabbed features section.

### Iteration 2: SASS Refactor (Future)

* **Objective:** Refactor the entire CSS codebase using **SASS**.
* **Focus:** Improve code maintainability, organization, and reusability by implementing SASS features like variables, nesting, partials, and mixins.

### Iteration 3: Style Library Refactor (Future)

* **Objective:** Refactor the design using a modern CSS framework or utility library.
* **Focus:** Re-implementing the landing page using either **Bootstrap** or **Tailwind CSS** to demonstrate proficiency with popular industry tools and component-based styling.

---

## 🏗️ Page Structure for Vanilla CSS (Iteration 1)

The HTML structure is semantic and divided into the following main sections:

* **Header:** Contains the logo and the main navigation bar.
* **Hero Section:** The main "call to action" block with the primary heading.
* **Features:** Tabbed section to display different product features.
* **"Bookmark in one click":** A feature section highlighting ease of use.
* **Download the Extension:** Cards displaying browser compatibility (Chrome, Firefox, Opera).
* **FAQ Section:** A collapsible accordion for frequently asked questions.
* **Subscribe Form Section:** A "Stay up-to-date" call-to-action with an email input form.
* **Footer:** Contains secondary navigation links and social media icons.

---

## 🛠️ Built With

* **HTML5** (Semantic)
* **CSS3** (Custom Properties, Flexbox, Grid)
* **Vanilla JavaScript** (to style HTML elements)

---

## 📦 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You must have [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) (which includes npm) installed on your computer.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/cs0y1fc/bookmark-landing-page.git](https://github.com/cs0y1fc/bookmark-landing-page.git)
    ```

2.  **Navigate to the project directory:**
    ```sh
    cd bookmark-landing-page
    ```

3.  **Checkout the development branch for Iteration 1:**
    ```sh
    git checkout feature/vanilla-implementation
    ```

4.  **Install dependencies:**
    *(This project uses `npm` to manage development dependencies, such as a live server or linters, as defined in `package.json`.)*
    ```sh
    npm install
    ```

### Running the Project

You have two main options to view the project:

**Option 1: (Recommended) Run the development server:**

If your `package.json` has a `start` or `dev` script (e.g., for `lite-server`):

```sh
npm run dev
# or
npm run start