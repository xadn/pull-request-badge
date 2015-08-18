# pull-request-badge

## Setup
```
npm install
npm start
```

## URLs
Urls should be in the form of `http://localhost:8080/<gh-username>/<gh-token>/<owner>/<repo>/pulls/<pull>.svg`

For example: `http://localhost:8080/xadn/<gh-token>/pivotaltracker/tracker-frontend/pulls/97.svg`

## Getting a Token
Follow the github help doc for [creating an access token](https://help.github.com/articles/creating-an-access-token-for-command-line-use/). Create the token with `repo` or `public_repo` access to allow the server to obtain information about pull-requests. 
