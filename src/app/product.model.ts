export class Product{
    public name: string;
    public image: string;
    public amount: number;
    public price: number;
    public email?: string
    constructor(name: string, image: string, amount: number, price: number, email?: string) {
        this.name = name;
        this.image = image;
        this.amount = amount;
        this.price = price
        this.email = email
    }
}

export class Reqest{
    public email: string;
    public product: string;
    public amount: number
    constructor(email: string, product: string, amount: number){
        this.email = email;
        this.product = product;
        this.amount = amount;
    }
}