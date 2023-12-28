export class Reservation {
    reservationId!: number;
    propId!: number;
    availableUnitId!: number;
    availableUnitType!: string;
    date!: Date;
    time!: string;
    timeSlots!: number;
    status!: string;
    hostUser!: number;
    headCount!: number;
    specialRequest!: string;
    slotLength!: number;
    slotMinutes!: number;
    option1!: string;
    option2!: string;
    orders!: Order[];
}

export class Order {
    orderId!: {
        reservationId: number,
        orderId: number
    };
    totalAmount!: number;
    amountCurrency!: string;
    orderChoices!: OrderChoice[];
}

export class OrderChoice {
    orderChoiceId!: {
        reservationId: number,
        orderId: number,
        propId: number,
        choiceId: number,
        orderChoiceSubId: number,
    };
    quantity!: number;
    subAmount!: number;
    amountCurrency!: string;
    size!: string;
}
