import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Address, UserForm } from '../../core/models';
import { ButtonComponent } from '../../shared/button/button.component';
import { PaymentMode } from '../../core/enums';
import { TextInputComponent } from '../../shared/text-input/text-input.component';
import { NumberInputComponent } from '../../shared/number-input/number-input.component';
import { RegexPatterns } from '../../core/constants';

@Component({
  selector: 'app-add-user',
  imports: [
    ButtonComponent,
    ReactiveFormsModule,
    TextInputComponent,
    NumberInputComponent,
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  public userForm!: FormGroup<UserForm>;

  private readonly formBuilder = inject(FormBuilder);
  ngOnInit() {
    this.initializeForm();
  }

  public clearForm() {
    this.userForm.reset({}, { emitEvent: false });
  }

  public getFormControl(field: keyof UserForm) {
    return this.userForm.get(field) as FormControl;
  }

  public getNestedFormControl(group: keyof UserForm, field: keyof Address) {
    return this.getFormControl(group).get(field) as FormControl;
  }

  private initializeForm() {
    this.userForm = this.formBuilder.nonNullable.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: this.formBuilder.control<null | number>(null, [
        Validators.required,
        Validators.pattern(RegexPatterns.PhoneNumber),
      ]),
      amount: this.formBuilder.control<number | null>(null, [
        Validators.required,
        Validators.min(100),
        Validators.pattern(RegexPatterns.Hundred),
      ]),
      address: this.formBuilder.nonNullable.group({
        village: ['', [Validators.required]],
        town: [''],
      }),
      amountGivenOn: [new Date().getTime(), [Validators.required]],
      paymentMode: [PaymentMode.DAILY, [Validators.required]],
      collectionStartsFrom: [0, [Validators.required]],
    });
  }
}
