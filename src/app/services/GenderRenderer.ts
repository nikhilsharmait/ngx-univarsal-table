import { UtilityTs } from './utilityTs';

export function GenderRenderer(field, value) {
    if (field == 'user.url') {
        if (value) {
            return '<img src="' + value + '" width="40" height="auto" class="circular"></img>';
        } else {
            return '<ion-icon name="person-circle-outline" class="font2"></ion-icon>'
        }
    }
    if (field == 'user.name') {
        return value +" Ji"
    }
    if (field == 'user.dob') {
        let age = UtilityTs.getAge(value)
        // console.log(age, value);
        return age;
    }
    switch (value) {
        case 'MALE':
            return '<span class="material-icons" style="color:#5260FF">male</span>';
        case 'FEMALE':
            return '<span class="material-icons" style="color:#EB445A">female</span>';
        case 'Married':
            return '<span class="material-icons" style="color:#FFC408">wc</span>';
        case 'UnMarried':
            return '<span class="material-icons" style="color:#2ED370">girl</span>';
    }
}