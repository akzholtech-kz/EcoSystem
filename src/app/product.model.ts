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
    public name: string;
    public amount: number;
    public address: string;
    public tel: number;
    // public product: Product;
    constructor(email: string, name: string, amount: number, address: string, tel: number, product: Product){
        this.email = email;
        this.name = name;
        this.amount = amount;
        this.address = address;
        this.tel = tel;
        // this.product = product
    }
}

export class WaitList{
    public name: string;
    public queue: number;
    public date: string;
    public sum: number;
    constructor(name: string, queue: number, date: string, sum: number){
        this.name = name;
        this.queue= queue;
        this.date = date;
        this.sum = sum;
    }
}