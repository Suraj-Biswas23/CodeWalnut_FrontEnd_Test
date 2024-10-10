# Pokémon Explorer App

## Table of Contents
- [Setup Instructions](#setup-instructions)
- [Approach](#approach)
- [Challenges and Trade-offs](#challenges-and-trade-offs)
- [Screenshots](#screenshots)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Suraj-Biswas23/CodeWalnut_FrontEnd_Test.git
   ```

2. **Install dependencies:**

   ```bash
  pnpm install
  ```

3. **Run the development server:**

   ```bash
  pnpm dev
  ```

4. **Open your browser and go to:**
  http://localhost:3000

## Approach
The Pokémon Explorer App was built using React and Next.js, leveraging the PokeAPI to fetch Pokémon data. The app consists of multiple components organized for optimal functionality:

- Home Page: Displays a list of Pokémon with pagination. The user can search, sort, and filter the Pokémon based on various criteria.
- Pokémon Detail Page: Shows detailed information about a selected Pokémon, including its abilities and stats.

### Key features include:

- Pagination: Implemented using limit and offset parameters to control the number of Pokémon displayed.
- Client-side Routing: Next.js routing was used to navigate between the Pokémon list and individual detail pages.
- Responsiveness: The app is fully responsive and adapts to different screen sizes.

## Challenges and Trade-offs
- Data Fetching: Fetching detailed Pokémon data required multiple API calls, which introduced potential performance issues. This was mitigated by using Promise.all to fetch data in parallel.
- Pagination Handling: Managing state for pagination and ensuring smooth transitions between pages was challenging, requiring careful state management.
- Search and Filter Implementation: Implementing search and filtering functionalities required maintaining additional state and ensuring it didn't conflict with pagination. The app was optimized for performance by updating the displayed list only when necessary.

## Screenshots
- You can view the screenshots of the app under Screenshots folder.

