export interface Order {
    orderId: OrderID;
    totalAmount: number;
    amountCurrency: string;
    orderChoices: OrderChoice[];
  }
  
  export interface OrderChoice {
    orderChoiceId: OrderChoiceID;
    quantity: number;
    subAmount: number;
    amountCurrency: string;
    size: string;
  }
  
  export interface OrderID {
    reservationId: number;
    orderId: number ; 
  }
  
  export interface OrderChoiceID {
    reservationId: number;
    propId: number; 
    orderId: number; 
    choiceId: number; 
    orderChoiceSubId: number; 
  }
  