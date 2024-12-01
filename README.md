# Project Setup and Installation

## Node and NPM Versions

Make sure you have the correct versions of Node and NPM:

```bash
node --version
# v20.17.0

npm --version
# 8.10.0

# How to Run the Project

Start the development server:

npm start


public
│
├── loader.gif           # Displays the loader/spinner image
└── assets               # Contains all static images (thumbnails)
    └── ...
src
│
├── api                  # Contains data for mocking server response
│   └── data.json        # Mock data used for API responses
│
├── components           # Contains UI components
│   ├── CardItem.tsx     # Displays individual card
│   ├── ImageModal.tsx   # Displays overlay modal when image is clicked
│   └── LazyImage.tsx    # Displays image with spinner functionality
│
├── mocks                # Contains mock service worker setup
│   ├── browser.tsx      # MSW setup for browser
│   └── handlers.tsx     # MSW handler file for managing requests/responses
│
├── App.css              # Global CSS styles
├── App.tsx              # Main application component
├── index.tsx            # Entry point of the React application
└── utils.tsx            # Utility functions for common tasks

----------------------------------------------------------------------------------------------------------------
How the Modal Works
Overview:
When a user clicks on an image, the isModalOpen state (which is initially set to false) becomes true. 
This triggers the modal to display with the clicked image inside it.

Step-by-Step Workflow:
Initial State:

isModalOpen is false when the modal is closed.
loading state is set to true to display the spinner until the image is fully loaded.
On Image Click:

The src of the clicked image is stored in a separate state.
The isModalOpen is set to true to show the modal.
Displaying the Modal:

A modal overlay is shown using CSS.
The modal component receives the image src as a prop and displays the image.
onClose Callback: The modal includes a close button, which triggers the callback to set isModalOpen back to false, closing the modal.
Image Loading:

While the original image is loading, the loading state remains true, which shows a spinner.
Once the image is fully loaded, the onLoad event is triggered, and loading is set to false, displaying the original image.
----------------------------------------------------------------------------------------------------------------
How Drag and drop works
We are using inbuilt events like onDragStart, OnDrop 
The Card Outer div is draggable true which give it ability to perform drag operations
Also The Card Outer div is droppable which means we can drop one card to another card
When we start dragging we are saving it's position
And When we drop it to another Card we are first removing the dragged element from list and storing it in separate element
Then we are inserting that element on to the drop position
So now we have array in proper order only thing left to do it set position properly
So we are looping the list and setting position as per iteration.
Then we store data in localstorage to persist states

----------------------------------------------------------------------------------------------------------------

Notes:
MSW (Mock Service Worker): Used to mock API calls and simulate server responses during development.
Loader and Spinner: The loader gif (loader.gif) is displayed while the images are being loaded.
Components: CardItem.tsx, ImageModal.tsx, and LazyImage.tsx are the key components for displaying cards, modals, and images with loading states.