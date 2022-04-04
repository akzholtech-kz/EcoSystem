import { Product } from './product.model';
export class ProductService{
    products: Product[] = [
        new Product("Пластмасса", "https://cdn.teknoblog.ru/wp-content/uploads/2016/07/Plastik-butilka-620x480.jpg", 1),
  new Product('Қағаз қалдықтары', "https://sc04.alicdn.com/kf/Uc2ec7e6712d54e9ebb031589e30a2f88z/1056918926/Uc2ec7e6712d54e9ebb031589e30a2f88z.jpg", 1),
  new Product("Шыны", "https://htstatic.imgsmail.ru/pic_image/68e4cba8714a573b11f61c063a0661d0/840/499/1664263/", 1),
  new Product("Полиэтилен", "https://cpereezd.ru/upload/medialibrary/3de/poli_plenka.jpg", 1),
  new Product("Картон", "https://informupack.ru/upload/resize_cache/iblock/9a9/720_395_2/9a9a3b89426bddc7c2fa3108e56b732f.jpg", 1)  
    ]

    getProducts() {
        return this.products;
    }
}