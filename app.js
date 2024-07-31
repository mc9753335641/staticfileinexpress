// import express from 'express';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';
// import path from 'path'


// // const app = express();
// // const port = 2000;
// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = dirname(__filename);
// // var newpath=path.join(__dirname,"public")
// // var filepath=path.join(newpath,'index.html')
// // app.use(express.static(filepath))


// // app.set('view engine', 'ejs');
// // app.set('views',filepath);

// // app.get('/', (req, res) => {
// //   res.render(filepath)
// // });

// // app.listen(port, () => {
// //   console.log(`Server is running at http://localhost:${port}`);
// // });



// const app = express();
// const port = 8000;
// const __filename =fileURLToPath(import.meta.url);
//  const __dirname = dirname(__filename);
// var newpath=path.join(__dirname,"public")
// var filepath=path.join(newpath,"index.html")
// console.log(filepath)
 

// // EJS को व्यू इंजन के रूप में सेट करें
// app.set('view engine', 'ejs');

// // व्यूज़ की डायरेक्ट्री सेट करें
// app.set('html', filepath);
// app.use(express.static(filepath))
// // रूट सेट करें
// app.get('/', (req, res) => {
//   res.render('index', { title: 'Home Page', message: 'Hello from EJS!' });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

// Create an instance of express
const app = express();
const port = 8000;

// Get the current filename and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Define paths
const viewsPath = path.join(__dirname, 'views'); // Directory for EJS views
const publicPath = path.join(__dirname, 'public'); // Directory for static files

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', viewsPath); // Set the views directory for EJS

// Serve static files from the 'public' directory
app.use(express.static(publicPath));

// Define a route
app.get('/', (req, res) => {
  res.render('index', { title: 'Home Page', message: 'Hello from EJS!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

