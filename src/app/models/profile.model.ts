export interface Profile{
    
    

    username: string,

    email:string,

    admin: boolean,

    login: boolean,
    
    filmId: any,

    filmRented: string,

    rentingDate: string,

    arrivalDate: string,

    numberRentingDays: string,

    viewedFilms:[{
        
        movieRentedId: string,

        movieRentedTitle: string,

        rentingDate: string

    }]
}