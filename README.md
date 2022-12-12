# Transaction API

THis api for our react transactioin app whic is at `... link to react app repo ..`

... what this app is ....

## How to use

1. clone this projec by Runing `git clone https://github.com/Codmnk/api-transaction_aug_22.git`
2. Run `cd api-transaction_aug_22`
3. Run `npm i`
4. Run `npm run dev`. You must have `nodemon` install in your system, otherwise run `npm i nodemon -g` to install globally.

Now the project will be server at `http://localhost:8000`

## API

This api server will be have 2 api endpoints

1. User API
2. Transacting API

All the endpoint will follow the following path `{rooturl}/api/v1`

### User API

User api will use the following pah `{rooturl}/api/v1/user`. THis api will allow client to create user, login and more.

| #   | PATH     | METHOD | IS PRIVATE | DESCRIPTION                                |
| --- | -------- | ------ | ---------- | ------------------------------------------ |
| 1.  | `/`      | POST   | fals       | create new user                            |
| 2.  | `/login` | POST   | fals       | allow user to send email and pin for login |

### Transaction API

User api will use the following pah `{rooturl}/api/v1/transaction`. THis api will allow client to do CRUD operation on transaction tabl.

| #   | PATH | METHOD | IS PRIVATE | DESCRIPTION                                                                                                      |
| --- | ---- | ------ | ---------- | ---------------------------------------------------------------------------------------------------------------- |
| 1.  | `/`  | GET    | true       | allow user to fetch theri own trasactions only                                                                   |
| 2.  | `/`  | POST   | true       | allow user to post new trasactions, data should be send as `{}`                                                  |
| 3.  | `/`  | PATCH  | true       |                                                                                                                  |
| 4.  | `/`  | DELETE | true       | allow user to delete sigle or multiple of their own trasactions only. cliet should sned the data as `[id1, id2]` |
