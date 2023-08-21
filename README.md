# A Book Catalog Application Frontend

## Home Route:

- Display all books (image, title, author, genre, public data).
- Search field (search by title, author or genre)

## Add Book Route:

- It's a private route. Only authenticated user can access this route.
- Add new book with image url, title, author, genre, public date.
- Get toast after added book or any error.

## Wishlist Route

- User can add book to wishlist from home route.
- After go to wishlist route user can see those books that's they added from home route.
- User can remove book from wishlist.

## Reading list Route

- User can add book to reading list from home route.
- After go to reading list route user can see those books that's they added from home route.
- User can remove book from reading list.
- User can also change reading status (by default not start reading, reading, finished)

## Profile Button

- If user is not logged in user can see sign up and login button.
- If user is logged in user can see log out button.

## Authentication

- User can create account with name, email and password from Sign Up route.
- User can logged in with email and password from Login route.

## Technology (Frontend):

- React
- Typescript
- Redux Toolkit
- RTK Query
- React Hot Toast
- React Hook Form

## Technology (Backend):

- Typescript
- Express
- Mongoose
