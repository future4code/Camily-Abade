import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import getProfile from './endpoints/getProfile'

import { login } from "./endpoints/login"

app.get('/user/profile/', getProfile)
app.post('/user/login', login);
app.post('/user/signup', createUser)
app.put('/user/edit/', editUser)
