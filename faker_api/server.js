const express = require('express');
const app = express();
const PORT = 1337;

const { faker } = require('@faker-js/faker');




class User {
    constructor() {
        this.id = Math.floor(Math.random() * 100);
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.id = Math.floor(Math.random() * 100);
        this.name = faker.company.companyName();
        this.address = {
            street : faker.address.streetName(),
            city : faker.address.cityName(),
            state : faker.address.state(),
            zipCode : faker.address.zipCode(),
            country : faker.address.country()
        }
    }
}

// MiddleWare

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// routes
app.get('/api/users/new', (req, res) => {
    res.json(new User)
})


app.get('/api/companies/new', (req, res) => {
    res.json(new Company)
})

app.get('/api/user/company', (req, res) => {
    res.json({
        status: 200,
        user: new User,
        company: new Company
    })
})



// listen
app.listen(PORT, () => console.log("Server up and servinating"))