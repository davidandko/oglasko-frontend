export interface Listing{
    owner: string,
    title:string,
    phoneNumber: string,
    price: string,
    dateAdded: string,
    dateModified: string,
    mainLocation: string,
    specLocation: string, // specific area
    description: string,
    photos: string[],
    mainCategory: string,
    subCategory: string[],
}