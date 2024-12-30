import { Component, ElementRef, forwardRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-otp-input',
  templateUrl: './otp-input.component.html',
  styleUrls: ['./otp-input.component.scss'],
  providers: [
    {
      useExisting: forwardRef(() => OtpInputComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ]
})
export class OtpInputComponent  {

  private _isDisabled = false;

  @ViewChildren('digit')
  inputs: QueryList<ElementRef<HTMLInputElement>>;

  digits: string[] = [null, null, null, null, null, null];

  get disabled() {
    return this._isDisabled;
  }

  _onTouched: () => void;
  _onChange: (value: string | null) => void;

  writeValue(obj: any): void {
    if (typeof obj !== 'string') {
      return;
    }

    if (obj.length !== this.digits.length) {
      return;
    }

    this.digits = obj.split('');
  }

  registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this._isDisabled = isDisabled;
  }

  onInput(index: number, $event: Event) {
    const ev = $event as KeyboardEvent;
    const digitInput = this.inputs.toArray()[index].nativeElement;
    console.log(digitInput);

    const keyCode = ev.key;

    // skip paste because it's handled in another method
    if (ev.metaKey && keyCode === 'v') {
      return;
    }

    if (['Backspace', 'Tab'].indexOf(keyCode) >= 0) {
      // backspace should delete the current value
      if (keyCode === 'Backspace' && !digitInput.value) {
        const el = this.inputs.toArray()[index - 1]?.nativeElement;
        if (el) {
          el.value = null;
        }
        this.emitChange();
        el?.focus();
      }

      return;
    }

    $event.preventDefault();

    if (Number.isNaN(Number(keyCode))) {
      return;
    }

    digitInput.value = keyCode;
    this.emitChange();
    this.inputs.toArray()[index + 1]?.nativeElement.focus();
  }

  onPaste($event: ClipboardEvent) {
    const numbers = ($event.clipboardData.getData('text') ?? '').slice(
      0,
      this.digits.length
    );

    if (/\d{6}/.test(numbers)) {
      this.digits = numbers.split('');
      this._onChange(numbers);
    } else {
      $event.preventDefault();
    }
  }

  private emitChange() {
    const value: string = this.inputs
      .map((i) => i.nativeElement.value)
      .join('');
    if (value.length === 0) {
      this._onChange(null);
    } else if (value.length === 6) {
      this._onChange(value);
    }
  }
}
