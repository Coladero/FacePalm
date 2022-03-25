
# FacePalm


# Description
APP Web for football scouts to connect with other scouts from all over the world and to share experience for the newer scouts and to give motivation and enthusiasm to the more experienced ones.


* GET /

- Render HOME page.

# Front-end Services

* -Auth Services-

* SignupService 

    - GET /auth/signup.
    - Render to /signup.

* LoginService

   -GET /auth/login
   -Render to login and show the form.

* CheckUserService

    -Check if the User has the token.

* -API Services-

* GetAllCountriesService

    -GET /api/countries.
    -Render all countries to the user.

* GetAllPlayersService

    -GET /api/countries/:id/players
    -Render All the players from the country.

* GetPlayerDetailsService

    -Get /countries/:id/players/details.
    -Render player details.

* -Players Service-

* GetPlayerandAddService

    -POST /players/add/:id.
    -Send the form with the details.

* UpdatePlayerService

    -PATCH /player/:id/edit.
    -Edit the new params and send to the back-end.

* DeletePlayerService

    -DELETE /player/:id/delete.
    -Send the info to the back-end to delete the details.

* -Chat Services-

* GetAllUsersService

    -GET /users.
    -Show the users to the user.

* newChatService

    -POST /messenger/:userId.
    -Get the id from both users and send the chat to the back-end.

* GetAllMessagesServices

    -GET /messages/:chatId.
    -Send the messages from the users to the back-end.

# PAGES

- Countries
- CountriesDetails
- EditPlayer
- Error
- Home
- PlayerDetail

* Auth

- Login
- Profile
-Signup

* Chat

- UserList
- Messenger

# Components

- AddPlayer
- Agenda
- Country
- Navbar
- SearchCountries
- SearchPlayers
- Toggle

# Context

- Theme.Context

# CSS

- APP
- ADD
- CHAT
- EDIT
- LOGIN
- SIGNUP
- TOGGLE
- USERLIST