import { AbstractControl } from '@angular/forms';

/**
 * Clase encargada de validar que el valor de los control para las contraseñas sean iguales.
 */
export class MatchPasswordValidator {

    static matchPassword(control: AbstractControl) {
        const password = control.get('newPassword').value;
        const confirmPassword = control.get('confirmPassword').value;

        if (password !== confirmPassword) {
            control.get('confirmPassword').setErrors({confirmPassword: true});
        } else {
            return null;
        }
    }
}
