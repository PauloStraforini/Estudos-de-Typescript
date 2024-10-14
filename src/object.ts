// type

type Order = {
    id: string,
    price: number,
}

type User = {
    name: string,
    age: number,
    email: string,
    password?: string
    orders: Order[];
    register?(): string;
}

const user: User = {
    name: 'Paulo',
    age: 20,
    email: '',
    password: '',
    orders: [{id: '123', price: 20}],
    register() {
        return 'Register';
    }
}

const printLog = (message?: string) => {}
printLog(user.password!);

// unions

type Author = {
    books: string[];
}

const author: Author & User = {
    name: 'Paulo',
    age: 20,
    email: '',
    password: '',
    orders: [{id: '123', price: 20}],
    books: ['book1', 'book2']
}

// interfaces

interface UserInterface  {
    readonly fristname: string;
    email: string;
}

const emailUser: UserInterface = {
    fristname: 'Paulo',
    email: "Paulo@Gmail.com"
};

interface AuthorInterface {
    books: string[];
}

const newAuthor : AuthorInterface & UserInterface = {
    fristname: 'Paulo',
    email: "Paulo@Gmail.com",
    books: []
}

type Grade = number | string;
const grade: Grade = 10;