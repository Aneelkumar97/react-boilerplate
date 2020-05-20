export interface IRestaurant {
    id: string;
    name: string;
    cuisines: string[];
    averageForTwo: number;
    currency: string;
    hasTableBooking: boolean;
    hasOnlineDelivery: boolean;
    rating: number;
    ratingColor: string;
    ratingText: string;
    votes: number;
}