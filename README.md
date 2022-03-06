# Growsari FE Demonstration Project

[Github Pages](https://llravelo.github.io/growsarisari-store/)

## Summary
I was tasked to create a simple web app for diplaying a list of products, adding them to the shopping cart, and viewing final list of items at the end. For this project, I mainly used 4 basic components in displaying and interacting with data. The web app consists of 2 different views, both of which can be accessed through the navbar.

### Table
  I reused the table component for data display in both product list and shopping cart, adding support for basic cell edit button. Moreover, the table also had basic coverage for no data.

### Navbar
  The navbar was mainly used for switching between product list and shopping cart pages. Clicking the cart icon switches to shopping cart view while clicking the growsari icon switches to product list view.

### Searchbar
  The products list contained a lengthy list of 723 items. Navigating through such data presents challenges for the end-user. The easiest way this task can be simplified to the user is by having a search bar. A basic case-insensitive keyword matching algorithm was used, matching search key with name, brand, or category.

###  Filter Button
  In conjunction with search, filter button also acts to help ease the navigation of big table data. In this case, it was used to filter brand and category. Filter buttons used a popover button component and were placed at the headers so actions are applied close to context.

  Even then, category and brand data were still too many for user to effectively navigate so another search was included in the component to filter these data.

## Potential Features
For this demo, development time and scope was limited. Some features can be included if this were to become a full-fledged project.

1. Checkout Page
2. Use of Card components for Cart Page instead of table.
3. Product Details View
4. Table/Grid view toggle for product list (with pagination)
5. Lazy loading mechanism for big data (i.e. Products) > Research Item
6. User Auth
7.  Purchase History

## Unhandled Edge Cases/Points for Improvement

### Unhandled Edge Cases
1. Popover filter state is not bound to the selected layout filters, so a UI bug can happen where selected filters in popover are not exactly the current selected filters.
2. There was also no pagination and sorting in the table in the current implementation.
3. Add to Cart functionality is too basic, there is no support for adding multiple items at once or updating the quantity in cart page.

### Points for Improvement
1. There were no unit tests in the project for this demo. They could've been included.
2. Styling was also pretty basic and incoherent. Theming could be applied here too.

## Setup Guide

This project was developed with `yarn 3.2.0`, however, it should still be interoperable with a recent node/npm version.

1. `npm install` or `yarn install`
2. `npm start` or `yarn start`

Go to `http://localhost:3000/growsarisari-store/`
