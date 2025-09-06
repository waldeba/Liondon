# Liondon Photography Portfolio

A photography portfolio website built with Hugo and deployed on Netlify. This site showcases a collection of photography work with a clean, modern design.

## Features

- 📸 Photography gallery with organized collections
- ⚡ Fast static site generation with Hugo
- 🌐 Deployed on Netlify with serverless functions
- 📱 Responsive design for all devices
- 🔄 Automatic builds and deployments

## Live Site

🔗 **Deployed on Netlify**: [Your site will be available at your Netlify domain]

## Local Development

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (version 0.125.7 or later)
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/waldeba/Liondon.git
   cd Liondon
   ```

2. Start the Hugo development server:
   ```bash
   hugo server
   ```

3. Open your browser and visit `http://localhost:1313`

The site will automatically reload when you make changes to the source files.

### Building for Production

To build the static site for production:

```bash
hugo
```

This will generate the static files in the `public/` directory.

## Netlify Deployment

This site is configured for automatic deployment on Netlify. The deployment configuration is defined in `netlify.toml`.

### Automatic Deployment

1. Connect your GitHub repository to Netlify
2. Netlify will automatically build and deploy your site when you push changes to the main branch
3. Build command: `hugo`
4. Publish directory: `public`
5. Hugo version: `0.125.7`

### Manual Deployment

You can also deploy manually:

1. Build the site locally: `hugo`
2. Drag and drop the `public/` folder to your Netlify dashboard
3. Or use the Netlify CLI:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=public
   ```

## Netlify Functions

This project includes serverless functions in the `netlify/functions/` directory:

- `hello.js` - Simple hello world function
- `time.js` - Returns current server time
- `echo.js` - Echoes back request data

Functions are automatically deployed with your site and accessible at `/.netlify/functions/[function-name]`.

## Project Structure

```
.
├── assets/           # Sass, JS, and other assets to be processed
├── content/          # Markdown content files
│   ├── photos/       # Photography portfolio content
│   └── _index.md     # Homepage content
├── layouts/          # HTML templates
├── netlify/
│   └── functions/    # Serverless functions
├── static/           # Static files (images, etc.)
├── config.toml       # Hugo configuration
├── netlify.toml      # Netlify deployment configuration
└── README.md         # This file
```

## Configuration

### Hugo Configuration (`config.toml`)

The site configuration includes:
- Site title and description
- Base URL (automatically set for Netlify deployments)
- Language settings

### Netlify Configuration (`netlify.toml`)

Deployment settings:
- Build command and Hugo version
- Environment variables
- Security headers
- Redirect rules

## Adding Content

### Adding Photos

1. Add your photo files to the `static/images/` directory
2. Create a new Markdown file in `content/photos/`:
   ```markdown
   ---
   title: "Your Photo Title"
   date: 2023-12-06
   description: "Photo description"
   image: "/images/your-photo.jpg"
   ---
   
   Additional description or story about the photo.
   ```

### Editing Content

All content is written in Markdown and stored in the `content/` directory. Edit these files to update your site content.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.