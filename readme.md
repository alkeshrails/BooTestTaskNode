# Setup Details

# Prerequisites
 - node version : v16.13.0 (min.)

## Used Technologies

- NodeJs
- Express

## setup
```
> git clone https://alkeshrails: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@github.com/alkeshrails/BooTestTaskNode.git
> cd <Project Directory>

Run :-
> npm install
> npm start

```
After running the start command the server will start on localhost:3001

## Implemented Feature (FrontEnd)


1. `/profile`
  - Method : `GET`
  - Description :- `This API is used to display the default profile and show the data in the UI`

2. `profile/${profileId}`
  - Method : `GET`
  - Description :- `This API is used to display the perticular profile ID and show the data in the UI`

### Created EndPoints (Backend)

1. `/api/profile`

- Methods:- `POST` ,`GET`
- Description :- `This end-point is used to create profile and get the profile`

2. `/api/post`

- Methods:- `POST` ,`GET`

# Sorting 
`/api/post?sort=Best`:- `It will be sort descending order according to likes` 
`/api/post?sort=Recent` :- `It will be sort recent one on top`

- Description :- `This end-point is used to create a post and get a profile`
3. `/api/comment`

- Methods:- `POST` ,`GET`
- Description :- `This end-point is used to create a comment and get a comment`

4. `api/likes`

-Methods:- `POST`,`GET`
-Description :- `This end-point is used to add a like a post and unlike post`


### Other Details

For the testing I have created the postman collection
where all the routes are there for easy get idea about the request and response
u

# POSTMAN collection URL 
https://api.postman.com/collections/28652344-b95fa7a7-3b73-4730-a7f6-d22875f5568b?access_key=PMAT-01HAYF0H8A8WDNK6BK8MFR184Z
