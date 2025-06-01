import { inject, Injectable, signal } from "@angular/core";
import { Auth, onAuthStateChanged, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })

export class AuthService {

    private auth = inject(Auth);
    user = signal<User | null>(null)

    constructor() {
        onAuthStateChanged(this.auth, (user) => {
            this.user.set(user);
        });
    }

    isLoggedIn() {
        return this.user() !== null;
    }

    register(email: string, password: string) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    logout() {
        return signOut(this.auth);
    }
}