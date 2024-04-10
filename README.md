[Your Project Name]

[Your Project Name] is a collection of bookmarklets designed to enhance your browsing experience by allowing you to easily pick, block, and manage elements on web pages, similar to functionalities provided by browser extensions like uBlock Origin.

## Description

This project includes three main bookmarklets:
- **Picker.js**: Allows you to select elements on a web page and save their selectors for future use.
- **Blocker.js**: Uses saved selectors to hide elements on web pages.
- **Editor.js**: Enables editing or deleting previously saved selectors.

## Features

- Easy to use and lightweight
- No need for browser extensions
- Works on any web page

## Installation

To use these bookmarklets:
1. Create a new bookmark in your browser.
2. Copy and paste the minified code for the bookmarklet you want to use into the URL section of the bookmark.

### Minifying Bookmarklet Code

Before using the bookmarklets, you need to minify the JavaScript code. This project includes a `package.json` setup for minifying JavaScript files using Terser.

Run the following command to install the necessary dependencies:

```bash
npm install
```

Then, you can minify the JavaScript files by running:

```bash
npm run minify:all
```

## Usage

After adding the bookmarklets to your browser, click on the bookmarklet you wish to use while on any web page.

- **Picker**: Click the bookmarklet and then click on any element on the page to save its selector.
- **Blocker**: Click the bookmarklet to automatically hide elements based on previously saved selectors.
- **Editor**: Click the bookmarklet to edit or delete saved selectors.

## Contributing

Contributions to [Your Project Name] are always welcome. You can contribute in different ways:

- Submit bug reports or feature requests
- Write code for new features or bug fixes
- Create or improve documentation

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
