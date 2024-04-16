import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable()
export class AuthService {
    currentUser: IUser
    loginUser(userName: string, password: string) {
        
        this.currentUser ={
            id: 1,
            userName: userName,
            firstName: 'John',
            lastName: 'Papa'

        }
        console.log('login user   ', this)
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    }

    isAuthenticated() {
        console.log("this.currentUser isAuthenticated",this.currentUser)
        console.log('login user isAuthenticated  ', this)

        const currentUser = localStorage.getItem('currentUser')
        return !!currentUser;
    }

    getCurrentUser() {

        const currentUserString = localStorage.getItem('currentUser')
        if (currentUserString){
            return JSON.parse(currentUserString)
        }
    }
}