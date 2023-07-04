import {
  PayPalPaymentProcess,
  BankTransferPayment,
  CreditCardPaymentProcess,
  PaymentProcessor,
} from './paymentstrategy.interface';

class PaymentProcessSimulator {
  public static main() {
    const paypal = new PayPalPaymentProcess();
    const bank = new BankTransferPayment();
    const card = new CreditCardPaymentProcess();

    let paymentProcessor = new PaymentProcessor(paypal);
    paymentProcessor.processPayment(100);

    paymentProcessor = new PaymentProcessor(bank);
    paymentProcessor.processPayment(100);

    paymentProcessor = new PaymentProcessor(card);
    paymentProcessor.processPayment(100);
  }
}

PaymentProcessSimulator.main();
