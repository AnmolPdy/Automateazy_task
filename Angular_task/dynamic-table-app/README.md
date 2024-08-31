# Angular Dynamic Table Project

This project is an Angular application that displays dynamic tables by fetching data from public APIs. The tables support pagination, sorting, and search functionality, allowing users to filter data efficiently. The project also utilizes Tailwind CSS for styling.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Routes](#routes)


## Features

- **Dynamic Table:** Fetches data from public APIs and displays it in a dynamic table.
- **Pagination:** Supports pagination for easy navigation through large datasets.
- **Sorting:** Allows sorting of table columns to organize data as per user preference.
- **Search Functionality:** Provides search input to filter data based on user input.
- **Responsive Design:** Styled using Tailwind CSS for a responsive and visually appealing interface.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14.x or above)
- [Angular CLI](https://angular.io/cli) (v12.x or above)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/angular-dynamic-table.git
   cd angular-dynamic-table
   npm install

2. **Running the Project:**

To run the project locally, use:

    ```bash
    ng serve



## Routes

### `/`

This is the main route of the application and provides two buttons:
- **Users**: Redirects to the `/user` route.
- **Products**: Redirects to the `/product` route.

### `/user`

Fetches data from the [DummyJSON Users API](https://dummyjson.com/users). This route displays a list of users.

### `/product`

Fetches data from the [Fake Store API](https://fakestoreapi.com/products). This route displays a list of products.