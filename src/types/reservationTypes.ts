type Customer ={
    firstName: string;
    lastName: string;
  }
  
  type Reservation ={
    id: number;
    businessDate: string;
    status: "CHECKED OUT" | "NOT CONFIRMED" | "SEATED" | "CONFIRMED";
    shift: "BREAKFAST" | "LUNCH" | "DINNER";
    start: string;
    end: string;
    quantity: number;
    customer: Customer;
    area: "BAR" | "MAIN ROOM";
    guestNotes: string;
  }
  
  type ReservationData = {
    reservations: Reservation[];
  }
  
  export type { Customer, Reservation, ReservationData };