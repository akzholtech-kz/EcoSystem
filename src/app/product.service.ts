import { Subject } from 'rxjs';
import { Product } from './product.model';
export class ProductService {
  selectItem = new Subject<Product>();
 private  products: Product[] = [
    new Product(
      'Пластмасса',
      'https://www.expatincroatia.com/wp-content/uploads/2020/02/recycling-plastic-2.jpg',
      0,
      50
    ),
    new Product(
      'Қағаз қалдықтары',
      'https://images.immediate.co.uk/production/volatile/sites/4/2009/07/GettyImages-88623894-29b7fe8.jpg?quality=90&resize=768,574',
      0,
      60
    ),
    new Product(
      'Шыны',
      'https://htstatic.imgsmail.ru/pic_image/68e4cba8714a573b11f61c063a0661d0/840/499/1664263/',
      0,
      70
    ),
    new Product(
      'Полиэтилен',
      'https://cpereezd.ru/upload/medialibrary/3de/poli_plenka.jpg',
      0,
      40
    ),
    new Product(
      'Картон',
      'https://informupack.ru/upload/resize_cache/iblock/9a9/720_395_2/9a9a3b89426bddc7c2fa3108e56b732f.jpg',
      0,
      45
    ),
  ];

 getProducts() {
     return this.products;
        }

}
