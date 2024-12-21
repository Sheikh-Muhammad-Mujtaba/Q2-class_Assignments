# My Next.js Blog

This is a simple blog application built with Next.js. It features dynamic routing for blog posts and a clean layout.

## Features

- Homepage displaying a list of blog posts
- Dynamic routing for individual blog posts
- Custom layout with header and footer
- Global styles for consistent design

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/my-nextjs-blog.git
   ```

2. **Navigate to the project directory:**
   ```
   cd my-nextjs-blog
   ```

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Run the development server:**
   ```
   npm run dev
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
my-nextjs-blog
├── pages
│   ├── index.tsx        # Homepage
│   ├── _app.tsx         # Custom App component
│   ├── blog
│   │   └── [slug].tsx   # Dynamic blog post page
├── components
│   └── Layout.tsx       # Layout component
├── public
│   └── favicon.ico      # Favicon
├── styles
│   └── globals.css      # Global styles
├── package.json         # NPM configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## License

This project is licensed under the MIT License.