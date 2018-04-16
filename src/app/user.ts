// User class to define this object's properties.
export class User {
    constructor(
        public id: number,
        public user_roles_id: number,
        public username: string,
        public email: string
    ){}
}
