export class User {

    fullName: string;
    login: string;
    password: string;
    role: string;

    constructor(fullName: string, login: string, password: string, role: string) {
        this.fullName = fullName;
        this.login = login;
        this.password = password;
        this.role = role;
    }
}
