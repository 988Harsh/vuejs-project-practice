export class User {
    _id;
    name;
    age;
    email;
    password;
    tokens;
    createdAt;
    updatedAt;

    constructor(name, age, email, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.password = password;
    }
}