# Image Processing API
![Screenshot 2024-06-20 131615](https://github.com/MinaSaber/Image-Processing-API/assets/67694375/142c40d0-9efe-4af5-a000-0f5bc8149a4f)

## Business Description
The Image Processing API is a powerful and efficient service designed to handle image resizing operations. This API provides an easy-to-use interface for resizing images to specified dimensions, making it ideal for applications requiring dynamic image manipulation, such as web development, content management systems, and e-commerce platforms.

The service utilizes the sharp library, known for its high performance in image processing tasks. Users can upload images, specify the desired dimensions, and receive the resized images in return. This API streamlines the process of managing image sizes, ensuring that your application delivers the best visual experience to your users without the hassle of manual resizing.

## Get Started
### Prerequisites
Before you start, ensure you have the following installed:
- Node.js (v14 or later)
- npm (v6 or later)
- TypeScript (v4 or later)

### Installation
1. Clone the repository:
git clone https://github.com/MinaSaber/image-processing-api.git
cd image-processing-api
2. Install the dependencies:
npm install

### Running the Application
1. Build the project:
   npm run build
3. Start the server:
  npm start

### Usage
1. Navigate to the root endpoint to see the list of available images:
   http://localhost:3000/api
3. To resize an image, use the following endpoint:
  http://localhost:3000/api/photos?filename=example&height=200&width=200

### Project Structure
- src/app.ts: Entry point for the application.
- src/routes/index.ts: Main router file.
- src/routes/api/photo.ts: Photo API routes.
- src/utils/conversion.ts: Image resizing logic using sharp.
### Dependencies
- express: Web framework for Node.js.
- ejs: Template engine.
- sharp: High-performance image processing library.
- jasmine, supertest: Testing frameworks.
### Dev Dependencies
- typescript, ts-node: TypeScript support.
- nodemon: Auto-restart the server on code changes.
- eslint, prettier: Code quality and formatting tools.











