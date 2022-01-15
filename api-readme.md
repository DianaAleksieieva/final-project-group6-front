# `AUTH`

## Registration

### Registration request

```
POST /api/auth/register
Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}
```

### Registration validation error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### Registration conflict error

```
Status: 409 Conflict
Content-Type: application/json
ResponseBody: {
  "message": "Email in use"
}
```

### Registration success response

```
Status: 201 Created
Content-Type: application/json
ResponseBody: {
  "user": {
    "email": "example@example.com",
    ...???
  }
}
```

## Auth

### Auth request

```
POST /api/auth/login
Content-Type: application/json
RequestBody: {
  "email": "example@example.com",
  "password": "examplepassword"
}
```

### Auth validation error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки  валидации>
```

### Auth error

```
Status: 401 Unauthorized
ResponseBody: {
  "message": "Email or password is wrong"
}
```

### Auth success response

```
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "token": "exampletoken",
  "user": {
    "email": "example@example.com",
    ...?
  }
}
```

## Verification (email - optionaly)

### Verification request

```
GET /api/auth/verify/:emailToken
```

### Verification user Not Found

```
Status: 404 Not Found
ResponseBody: {
  message: 'User not found'
}
```

### Verification success response

```
Status: 200 OK
ResponseBody: {
  message: 'Verification successful',
}
```

## Resending (email - optionaly)

### Resending a email request

```
POST /api/auth/resend
Content-Type: application/json
RequestBody: {
  "email": "example@example.com"
}
```

### Resending a email validation error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### Resend error email for verified user

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: {
  message: "Verification has already been passed"
}
```

### Resending a email success response

```
Status: 200 Ok
Content-Type: application/json
ResponseBody: {
  "message": "Verification email sent"
}
```

## Logout

### Logout request

```
GET /api/auth/logout
Authorization: "Bearer {{token}}"
```

### Logout unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### Logout success response

```
Status: 204 No Content
```

## Current

### Current request

```
GET /api/auth/current
Authorization: "Bearer {{token}}"
```

### Current unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### Current user success response

```
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "email": "example@example.com",
  ...?
}
```

## Auth прослойка?

### Middleware unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

## Avatar

### Avatar request

```
PATCH /api/auth/avatar
Content-Type: multipart/form-data
Authorization: "Bearer {{token}}"
RequestBody: загруженный файл
```

### Avatar unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### Avatar success response

```
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "avatarURL": "тут будет ссылка на изображение"
}
```

# `TRANSACTIONS`

## BalanceUpdate

### BalanceUpdate request

```
POST /api/transactions/balance
Content-Type: application/json
Authorization: "Bearer {{token}}"
RequestBody: {
  "currentBalance": 1000
}
```

### BalanceUpdate error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### BalanceUpdate unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### BalanceUpdate success response

```
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "currentBalance": 1000
}
```

## AddExpense & AddIncome

### addTransaction request

```
POST /api/transactions/add
Content-Type: application/json
Authorization: "Bearer {{token}}"
RequestBody: {
    type: 'income',// 'expense'
    date: '21.09.2019',
    category: 'goods',
    amount: 500,
}
```

### addTransaction error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### addTransaction unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### addTransaction success response

```
Status: 201 Created
Content-Type: application/json
ResponseBody: {
  "transaction": {
    "id": new._id, //объект transaction._id
    "owner": user._id, //объект user._id
    "type": "income", //string
    "date": '21.09.2019', //string
    "category": 'goods', //string
    "amount": 500, //num
    "month": 9,  //num
    "year": 2019, //num
    ...???
  }
```

## RemoveTransaction

### removeTransaction request

```
DELETE /api/transactions/:id
Content-Type: application/json
Authorization: "Bearer {{token}}"
```

### removeTransaction error Not Found

```
Status: 404 Not Found
Content-Type: application/json
ResponseBody: {
    "message": "Not found"
    }
```

### removeTransaction error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### removeTransaction unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### removeTransaction success response

```
Status: 200 Ok
Content-Type: application/json
ResponseBody: {
  "transaction": {
    "message": "transaction deleted"
  }
```

## getYearlyTransactionsByType

### getYearlyTransactionsByType request

//type: 'income' or 'expense'

```
GET /api/transactions/year/:year/:type
Authorization: "Bearer {{token}}"
```

### getYearlyTransactionsByType error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### getYearlyTransactionsByType unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### getYearlyTransactionsByType Not Found error

```
Status: 404 Not found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

### getYearlyTransactionsByType success response

```
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "type" : 'income',
  "year" : 2019,
  "sum" : 8330,
  "result": {
    1: 2533,
    2: 334,
    3: 5463,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    11: null,
    12: null,
  },
}
```

## getAllMonthlyTransactions

### getAllMonthlyTransactions request

```
GET /api/transactions/month/:month/:year
Authorization: "Bearer {{token}}"
```

### getAllMonthlyTransactions error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### getAllMonthlyTransactions unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### getAllMonthlyTransactions Not Found error

```
Status: 404 Not found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

### getAllMonthlyTransactions success response

```
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "total" : 6,
  'month' : 5,
  'year' : 2015,
  "sumExpenses" : 290,
  "sumIncoms" : 450,
  "result": [
    {
    _id: id,
    date: '21.11.2019',
    amount: 15,
    type: 'income'
    category:'salary'
    },
    {
    _id: id,
    date: '21.11.2019',
    amount: 45,
    type: 'expense'
    category:'goods'
    },
    {
    _id: id,
    date: '22.11.2019',
    amount: 25,
    type: 'expense'
    category:'health'
    },
    {
    _id: id,
    date: '23.11.2019',
    amount: 435,
    type: 'income'
    category:'freelance'
    },
    {
    _id: id,
    date: '28.11.2019',
    amount: 145,
    type: 'expense'
    category:'house'
    },
    {
    _id: id,
    date: '29.11.2019',
    amount: 75,
    type: 'expense'
    category:'utilities'
    }
  ]
}
```

## getAllMonthlyByCategoryTransactions

### getAllMonthlyByCategoryTransactions request

```
GET /api/transactions/category/:month/:year
Authorization: "Bearer {{token}}"
RequestBody: {
    category: ['goods', 'health']
}
```

### getAllMonthlyByCategoryTransactions error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### getAllMonthlyByCategoryTransactions unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### getAllMonthlyByCategoryTransactions Not Found error

```
Status: 404 Not found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

### getAllMonthlyByCategoryTransactions success response

```
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "total" : 2,
  'month' : 5,
  'year' : 2015,
  "category" : ['goods', 'health'],
  'sum' : 70,
  "result": [
    {
    _id: id,
    date: '21.11.2019',
    amount: 45,
    type: 'expense'
    category:'goods'
    },
    {
    _id: id,
    date: '22.11.2019',
    amount: 25,
    type: 'expense'
    category:'health'
    },
  ]
}
```

## getAllMonthlyByTypeTransactions

### getAllMonthlyByTypeTransactions request

```
GET /api/transactions/type/:month/:year
Authorization: "Bearer {{token}}"
RequestBody: {
    type: 'income'
}
```

### getAllMonthlyByTypeTransactions error

```
Status: 400 Bad Request
Content-Type: application/json
ResponseBody: <Ошибка от Joi или другой библиотеки валидации>
```

### getAllMonthlyByTypeTransactions unauthorized error

```
Status: 401 Unauthorized
Content-Type: application/json
ResponseBody: {
  "message": "Not authorized"
}
```

### getAllMonthlyByTypeTransactions Not Found error

```
Status: 404 Not found
Content-Type: application/json
ResponseBody: {
  "message": "Not found"
}
```

### getAllMonthlyByTypeTransactions success response

```
Status: 200 OK
Content-Type: application/json
ResponseBody: {
  "total" : 2,
  'month' : 5,
  'year' : 2015,
  "type" :  'income',
  'sum' : 450,
  "result": [
    {
    _id: id,
    date: '21.11.2019',
    amount: 15,
    type: 'income'
    category:'salary'
    },
    {
    _id: id,
    date: '23.11.2019',
    amount: 435,
    type: 'income'
    category:'freelance'
    }
  ]
}
```
