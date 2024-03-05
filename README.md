# Development and Deployment Documentation for PokePedia Application

## Development Environment Setup

1. **Clone the Repository:**

    ```bash
    git clone <repository_url>
    ```

2. **Install Dependencies:**

    ```bash
    cd <project_folder>
    npm install
    ```

3. **Run the Development Server:**

    ```bash
    npm run dev
    ```

    This command will start the development server, and your application will be accessible at http://localhost:3000.

4. **Start Developing:**

    You can now start developing your application. The entry point of your Next.js application is in the `pages` directory.

## Building for Production

1. **Build the Application:**

    ```bash
    npm run build
    ```

    This command generates an optimized production build of your application.

## Deployment

### Deployment to Vercel

Vercel is a popular platform for deploying Next.js applications.

1. **Install Vercel CLI:**

    ```bash
    npm install -g vercel
    ```

2. **Login to Vercel:**

    ```bash
    vercel login
    ```

3. **Deploy the Application:**

    ```css
    vercel --prod
    ```

    This command will deploy your application to Vercel with a production environment.

### Deployment to Other Platforms

If you prefer deploying your application to other platforms like AWS, Heroku, or Netlify, you can do so by following their respective deployment guides.

## Application Structure

- `pages`: Contains the different pages of the pokepedia application.
- `components`: Reusable React components used across the application.
- `styles`: Styling is done with tailwindcss.
- `public`: Contains static assets like images.