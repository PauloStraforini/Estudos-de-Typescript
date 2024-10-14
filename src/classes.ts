interface IPerson {
    id: number;     
    sayMyName(): string;
}

class Person implements IPerson {
    readonly id: number;
    protected nome: string;
    private age: number;

    constructor(id: number, nome: string, age: number) {
        this.id = id;
        this.nome = nome;
        this.age = age;
    }

    sayMyName() {
        return this.nome;
    }

}

