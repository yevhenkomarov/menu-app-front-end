import 'src/stub/menuStubs'
import { ProductData, ResponseDto, MenuItem } from './productData';
import { List } from 'linqts';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProductsStorage {

    onMenuUpdated: EventEmitter<ResponseDto> = new EventEmitter<ResponseDto>();
    menuObject: ResponseDto;
    setMenuObject(response: {}) {
        this.menuObject = response as ResponseDto;
        this.onMenuUpdated.emit(this.menuObject);
    }

    getCategories(): Array<string> {
        const result = new List<string>();
        for (let index = 0; index < this.menuObject.menu.length; index++) {
            const element = this.menuObject.menu[index];
            if (!result.Contains(element.category) && !this.menuObject.excluded_groups.includes(element.category)) {
                result.Add(element.category);
            }
        }
        return result.ToArray();
    }

    getCategoriesByGroup(group: string): Array<string> {
        const result = new List<string>();
        for (let index = 0; index < this.menuObject.menu.length; index++) {
            const element = this.menuObject.menu[index];
            if (element.group == group
                && !result.Contains(element.category)
                && !this.menuObject.excluded_groups.includes(element.category)) {
                result.Add(element.category);
            }
        }
        return result.ToArray();
    }

    getProductsByCategory(category: string): ProductData[] {
        var result: List<ProductData> = new List<ProductData>();

        let arr = this.menuObject.menu as unknown as Array<MenuItem>;
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            if (element.category == category) {
                result.Add(new ProductData(element.name, element.description, +element.price))
            }
        }
        return result.ToArray();
    }

    getBoardGames():string[]{
        return this.menuObject.board_games;
    }
}