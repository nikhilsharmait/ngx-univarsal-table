import { UtilityTs } from './utilityTs';

export function GenderRenderer(params: any) {
    // console.log(params.value, params);
    if (params.field == 'user.url') {
        if (params.value) {
            return '<img src="' + params.value + '" width="40" height="auto" class="circular"></img>';
        } else {
            return '<ion-icon name="person-circle-outline" class="font2"></ion-icon>'
        }
    }
    if (params.field == 'user.dob') {
        let age = UtilityTs.getAge(params.value)
        // console.log(age, params.value);
        return age;
    }
    switch (params.value) {
        case 'MALE': return '<ion-icon name="male-outline" color="tertiary" class="font2"></ion-icon>';
        case 'FEMALE': return '<ion-icon name="female-outline"  color="danger" class="font2"></ion-icon>';
        case 'Married': return '<ion-icon name="people-circle-outline" color="warning" class="font2"></ion-icon>';
        case 'UnMarried': return '<ion-icon name="person-circle-outline" color="success" class="font2"></ion-icon>';
    }
}