export interface PaymentStrategy {
  processPayment(amount: number): void;
}

export class CreditCardPaymentProcess implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log('Credit card payment');
  }
}

export class BankTransferPayment implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log('Bank transfer payment process');
  }
}

export class PayPalPaymentProcess implements PaymentStrategy {
  processPayment(amount: number): void {
    console.log('Paypal payment process');
  }
}

export class PaymentProcessor {
  private paymentStrategy: PaymentStrategy;

  constructor(paymentStrategy: PaymentStrategy) {
    this.paymentStrategy = paymentStrategy;
  }

  public processPayment(amount: number) {
    this.paymentStrategy.processPayment(amount);
  }
}
