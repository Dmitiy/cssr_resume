import autosize from 'autosize';
import moment from 'moment';
import Pikaday from 'Pikaday';
import 'pikaday/css/pikaday.css';

(() => {
    const block = document.querySelectorAll('.textarea');

    autosize(block);
    autosize(document.querySelector('textarea'));

    const field = document.getElementById('datepicker');
    const picker = new Pikaday({
        format: 'DD.MM.YYYY',
        field,
        onSelect: function (date) {
            field.value = picker.toString();
            console.log(this.getMoment().format('DD.MM.YYYY'));
        }
    });

})()