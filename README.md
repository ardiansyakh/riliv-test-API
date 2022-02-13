# riliv-test-API
# Dokumentasi API riliv-test-API
## Database
```
riliv-test
```

## Migration
npm run db

## Run Dev
```
npm run dev
```

## Run Prod
```
npm start
```
### HTTP REQUEST
***BASE URL:***
```
http://127.0.0.1:3000
```

## Register
- **URL:**
```
/auth/register
```
- **METHOD:**
```
POST
```
- **BODY:**
```
{
    email: string,
    password: string,
    role: admin/user
}
```
- **SUCCESS RESPONSE:**
```
CODE: 201
{
    "data": {
        "id": 1,
        "email": "admin@mail.com",
        "password": null,
        "role": "admin",
        "updatedAt": "2022-02-13T06:53:56.559Z",
        "createdAt": "2022-02-13T06:53:56.559Z"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## Login
- **URL:**
```
/auth/login
```
- **METHOD:**
```
POST
```
- **BODY:**
```
{
    email: string,
    password: string
}
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "id": 1,
        "email": "admin@mail.com",
        "password": null,
        "role": "admin",
        "createdAt": "2022-02-13T04:45:02.175Z",
        "updatedAt": "2022-02-13T04:45:02.175Z",
        "aaccess_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInR5cGUiOiJhZG1pbiIsImlhdCI6MTY0NDczNTM3N30.f72Qw5Qefn02EM1cUGJ6e67GXRINrosbhPSOcVjnPk4"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## get all item
- **URL:**
```
/item
```
- **METHOD:**
```
get
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "page": 1,
    "limit": 10,
    "data": {
        "count": 2,
        "rows": [
            {
                "id": 2,
                "name": "produk1",
                "stock": 10,
                "price": 1000,
                "createdAt": "2022-02-13T05:05:11.062Z",
                "updatedAt": "2022-02-13T05:05:11.062Z"
            },
            {
                "id": 1,
                "name": "produk2",
                "stock": 10,
                "price": 500,
                "createdAt": "2022-02-13T05:04:39.246Z",
                "updatedAt": "2022-02-13T07:01:56.405Z"
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```
## get detail item
- **URL:**
```
/item/:id
```
- **METHOD:**
```
get
```
- **PARAMS:**
```
id
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "id": 1,
        "name": "produk1",
        "stock": 10,
        "price": 500,
        "createdAt": "2022-02-13T05:04:39.246Z",
        "updatedAt": "2022-02-13T07:01:56.405Z"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## Add Item
- **URL:**
```
/admin/item
```
- **METHOD:**
```
POST
```
- **BODY:**
```
{
    name: string,
    stock: int,
    price: int
}
```
- **SUCCESS RESPONSE:**
```
CODE: 201
{
    "data": {
        "id": 1,
        "name": "produk1",
        "stock": 10,
        "price": 5000,
        "updatedAt": "2022-02-13T07:00:13.690Z",
        "createdAt": "2022-02-13T07:00:13.690Z"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## update item
- **URL:**
```
/admin/item/:id
```
- **METHOD:**
```
put
```
- **PARAMS:**
```
id
```
- **BODY:**
```
{
    name: string,
    stock: int,
    price: int
}
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "id": 1,
        "name": "produk1",
        "stock": "10",
        "price": "500",
        "createdAt": "2022-02-13T05:04:39.246Z",
        "updatedAt": "2022-02-13T07:01:56.405Z"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## delete item
- **URL:**
```
/admin/item/:id
```
- **METHOD:**
```
delete
```
- **PARAMS:**
```
id
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "msg": "successfully deleted"
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## get all purchasing for admin
- **URL:**
```
/admin/purchasing
```
- **METHOD:**
```
get
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "page": 1,
    "limit": 10,
    "data": {
        "count": 1,
        "rows": [
            {
                "id": 1,
                "transaction_code": "4a93f1e6-3cce-4574-aba1-b0599a4d0658",
                "payment_status": "COMPLETED",
                "userId": 1,
                "total": 5000,
                "createdAt": "2022-02-13T05:58:29.196Z",
                "updatedAt": "2022-02-13T06:48:54.098Z",
                "User": {
                    "id": 1,
                    "email": "admin@mail.com"
                },
                "PurchasingDetails": [
                    {
                        "id": 1,
                        "purchasingId": 1,
                        "itemId": 2,
                        "qty": 5,
                        "price": null,
                        "createdAt": "2022-02-13T05:58:29.224Z",
                        "updatedAt": "2022-02-13T05:58:29.224Z",
                        "Item": {
                            "id": 2,
                            "name": "produk1",
                            "stock": 10,
                            "price": 1000,
                            "createdAt": "2022-02-13T05:05:11.062Z",
                            "updatedAt": "2022-02-13T05:05:11.062Z"
                        }
                    }
                ]
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```
## get detail purchasing for admin
- **URL:**
```
/admin/pruchasing/:transaction_code
```
- **METHOD:**
```
get
```
- **PARAMS:**
```
transaction_code
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "id": 1,
        "transaction_code": "4a93f1e6-3cce-4574-aba1-b0599a4d0658",
        "payment_status": "COMPLETED",
        "userId": 1,
        "total": 5000,
        "createdAt": "2022-02-13T05:58:29.196Z",
        "updatedAt": "2022-02-13T06:48:54.098Z",
        "User": {
            "id": 1,
            "email": "admin@mail.com"
        },
        "PurchasingDetails": [
            {
                "id": 1,
                "purchasingId": 1,
                "itemId": 2,
                "qty": 5,
                "price": null,
                "createdAt": "2022-02-13T05:58:29.224Z",
                "updatedAt": "2022-02-13T05:58:29.224Z",
                "Item": {
                    "id": 2,
                    "name": "produk1",
                    "stock": 10,
                    "price": 1000,
                    "createdAt": "2022-02-13T05:05:11.062Z",
                    "updatedAt": "2022-02-13T05:05:11.062Z"
                }
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## get cart
- **URL:**
```
/order/carts
```
- **METHOD:**
```
get
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "total": 10000,
        "carts": [
            {
                "id": 5,
                "userId": 1,
                "itemId": 2,
                "qty": 10,
                "createdAt": "2022-02-13T07:12:23.398Z",
                "updatedAt": "2022-02-13T07:12:23.398Z",
                "User": {
                    "id": 1,
                    "email": "admin@mail.com"
                },
                "Item": {
                    "id": 2,
                    "name": "produk1",
                    "stock": 10,
                    "price": 1000,
                    "createdAt": "2022-02-13T05:05:11.062Z",
                    "updatedAt": "2022-02-13T05:05:11.062Z"
                }
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## add to cart
- **URL:**
```
/order/carts
```
- **METHOD:**
```
post
```
- **BODY:**
```
{
    itemId: int,
    qty: int
}
```
- **SUCCESS RESPONSE:**
```
CODE: 201
{
    "data": {
        "total": 10000,
        "carts": [
            {
                "id": 5,
                "userId": 1,
                "itemId": 2,
                "qty": 10,
                "createdAt": "2022-02-13T07:12:23.398Z",
                "updatedAt": "2022-02-13T07:12:23.398Z",
                "User": {
                    "id": 1,
                    "email": "admin@mail.com"
                },
                "Item": {
                    "id": 2,
                    "name": "produk1",
                    "stock": 10,
                    "price": 1000,
                    "createdAt": "2022-02-13T05:05:11.062Z",
                    "updatedAt": "2022-02-13T05:05:11.062Z"
                }
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## update Qty
- **URL:**
```
/order/carts/:id/qty
```
- **METHOD:**
```
patch
```
- **PARAMS:**
```
id
```
- **BODY:**
```
{
    qty: int
}
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "total": 10000,
        "carts": [
            {
                "id": 5,
                "userId": 1,
                "itemId": 2,
                "qty": 10,
                "createdAt": "2022-02-13T07:12:23.398Z",
                "updatedAt": "2022-02-13T07:12:23.398Z",
                "User": {
                    "id": 1,
                    "email": "admin@mail.com"
                },
                "Item": {
                    "id": 2,
                    "name": "produk1",
                    "stock": 10,
                    "price": 1000,
                    "createdAt": "2022-02-13T05:05:11.062Z",
                    "updatedAt": "2022-02-13T05:05:11.062Z"
                }
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## remove item
- **URL:**
```
/order/carts/:id
```
- **METHOD:**
```
delete
```
- **PARAMS:**
```
id
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": "successfully deleted item"
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## checkout
- **URL:**
```
/order/checkout
```
- **METHOD:**
```
post
```
- **SUCCESS RESPONSE:**
```
CODE: 201
{
    "data": {
        "id": 7,
        "transaction_code": "dbd2f758-e287-461c-ae24-6b9874c6b43b",
        "userId": 1,
        "payment_status": "WAITING_PAYMENT",
        "total": 10000,
        "updatedAt": "2022-02-13T07:36:57.900Z",
        "createdAt": "2022-02-13T07:36:57.900Z"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## quick checkout
- **URL:**
```
/order/quickCheckout
```
- **METHOD:**
```
post
```
- **BODY:**
```
{
    item :{
        id: int
        name: string
        stock: int
        price: int
    }
}
```
- **SUCCESS RESPONSE:**
```
CODE: 201
{
    "data": {
        "id": 7,
        "transaction_code": "dbd2f758-e287-461c-ae24-6b9874c6b43b",
        "userId": 1,
        "payment_status": "WAITING_PAYMENT",
        "total": 10000,
        "updatedAt": "2022-02-13T07:36:57.900Z",
        "createdAt": "2022-02-13T07:36:57.900Z"
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## get all purchasing for user
- **URL:**
```
/order/purchasing
```
- **METHOD:**
```
get
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "page": 1,
    "limit": 10,
    "data": {
        "count": 1,
        "rows": [
            {
                "id": 1,
                "transaction_code": "4a93f1e6-3cce-4574-aba1-b0599a4d0658",
                "payment_status": "COMPLETED",
                "userId": 1,
                "total": 5000,
                "createdAt": "2022-02-13T05:58:29.196Z",
                "updatedAt": "2022-02-13T06:48:54.098Z",
                "User": {
                    "id": 1,
                    "email": "admin@mail.com"
                },
                "PurchasingDetails": [
                    {
                        "id": 1,
                        "purchasingId": 1,
                        "itemId": 2,
                        "qty": 5,
                        "price": null,
                        "createdAt": "2022-02-13T05:58:29.224Z",
                        "updatedAt": "2022-02-13T05:58:29.224Z",
                        "Item": {
                            "id": 2,
                            "name": "produk1",
                            "stock": 10,
                            "price": 1000,
                            "createdAt": "2022-02-13T05:05:11.062Z",
                            "updatedAt": "2022-02-13T05:05:11.062Z"
                        }
                    }
                ]
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```
## get detail purchasing for user
- **URL:**
```
/order/pruchasing/:transaction_code
```
- **METHOD:**
```
get
```
- **PARAMS:**
```
transaction_code
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "id": 1,
        "transaction_code": "4a93f1e6-3cce-4574-aba1-b0599a4d0658",
        "payment_status": "COMPLETED",
        "userId": 1,
        "total": 5000,
        "createdAt": "2022-02-13T05:58:29.196Z",
        "updatedAt": "2022-02-13T06:48:54.098Z",
        "User": {
            "id": 1,
            "email": "admin@mail.com"
        },
        "PurchasingDetails": [
            {
                "id": 1,
                "purchasingId": 1,
                "itemId": 2,
                "qty": 5,
                "price": null,
                "createdAt": "2022-02-13T05:58:29.224Z",
                "updatedAt": "2022-02-13T05:58:29.224Z",
                "Item": {
                    "id": 2,
                    "name": "produk1",
                    "stock": 10,
                    "price": 1000,
                    "createdAt": "2022-02-13T05:05:11.062Z",
                    "updatedAt": "2022-02-13T05:05:11.062Z"
                }
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```

## update callback payment success
- **URL:**
```
/updatePaymentStatus
```
- **METHOD:**
```
post
```
- **BODY:**
```
{
    status: string (ex: 'success')
    transaction_code: string
}
```
- **SUCCESS RESPONSE:**
```
CODE: 200
{
    "data": {
        "id": 1,
        "transaction_code": "4a93f1e6-3cce-4574-aba1-b0599a4d0658",
        "payment_status": "COMPLETED",
        "userId": 1,
        "total": 5000,
        "createdAt": "2022-02-13T05:58:29.196Z",
        "updatedAt": "2022-02-13T06:48:54.098Z",
        "User": {
            "id": 1,
            "email": "admin@mail.com"
        },
        "PurchasingDetails": [
            {
                "id": 1,
                "purchasingId": 1,
                "itemId": 2,
                "qty": 5,
                "price": null,
                "createdAt": "2022-02-13T05:58:29.224Z",
                "updatedAt": "2022-02-13T05:58:29.224Z",
                "Item": {
                    "id": 2,
                    "name": "produk1",
                    "stock": 10,
                    "price": 1000,
                    "createdAt": "2022-02-13T05:05:11.062Z",
                    "updatedAt": "2022-02-13T05:05:11.062Z"
                }
            }
        ]
    }
}
```
- **ERROR RESPONSE:**
```
CODE: 500
```