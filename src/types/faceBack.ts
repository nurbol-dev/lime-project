export interface dataTypes {
    id: number
    name_en: string,
    name_kg: string,
    name_ru: string,
    description: string,
    category: string,
    price: number,
    image: string | undefined,
    quantity?: string | number | undefined | any
    kg: number | string
}