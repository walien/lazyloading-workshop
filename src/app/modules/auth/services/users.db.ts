import {User} from '../model/user.model';

export const users: User[] = [
    {
        fullName: 'Administrator',
        login: 'admin',
        password: 'admin',
        role: 'ADMIN'
    },
    {
        fullName: 'John Doe',
        login: 'jdoe',
        password: 'jdoe',
        role: 'STD'
    }
];
