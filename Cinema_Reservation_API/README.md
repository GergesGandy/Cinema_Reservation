
# Cinema_Reservation_API

This main code for Cinema_Reservation project, you can use this API code with amy app.

We have included a simple UI with the program to help understand the project and it is not an essential part of the project.


## API Reference

#### Register in database

```http
  POST /api/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Your name |
| `email` | `string & email` | **Required**. Your email (login mail) |
| `password` | `string` | **Required**. Your Password |
| `password_confirmation` | `string` | **Required**.  |



#### Login

```http
  POST /api/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string & email` | **Required**. Your email (login mail) |
| `password` | `string` | **Required**. Your Password |


#### Logout
```http
  POST /api/logout  {Need authorization with bearer token}
```
this token returned in login.




## 🔗 Links
[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/GergesGandy)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/GergesGandy/)
[![facebook](https://img.shields.io/badge/facebook-1DA1F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/GergesGandy98/)

