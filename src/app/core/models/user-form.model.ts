import { FormControl, FormGroup } from '@angular/forms';
import { PaymentMode } from '../enums';

export interface Address {
  village: FormControl<string>;
  town: FormControl<string>;
}

export interface UserForm {
  name: FormControl<string>;
  phoneNumber: FormControl<number | null>;
  amount: FormControl<number | null>;
  address: FormGroup<Address>;
  amountGivenOn: FormControl<number>;
  paymentMode: FormControl<PaymentMode>;
  collectionStartsFrom: FormControl<number>;
}
