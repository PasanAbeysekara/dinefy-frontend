export interface ProductMenu{
    menuId: number;
    name: string;
    description: string;
    menuCategories: Array<MenuCategory>;
}

export interface MenuCategory{
    menuCategoryId: {
        menuId: number,
        categoryId: number,
    };
    name: string;
    categoryChoices: Array<MenuChoice>;
}

export interface MenuChoice{
    menuChoiceID: {
        menuId: number,
        propId: number,
        categoryId: number,
        choiceId: number,
    };
}
