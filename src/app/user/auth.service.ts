import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName: string, password: string) {
        console.log('inside authservice', this.currentUser)
        console.log('inside authservice2', userName)
        console.log('inside authservice3', this.currentUser.firstName)

        this.currentUser ={
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'
        }
    }

    isAuthenticated() {
        return !!this.currentUser;
    }
}