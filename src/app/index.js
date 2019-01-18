import autosize from 'autosize';

(() => {
    const block = document.querySelectorAll('.textarea');

    autosize(block);
    autosize(document.querySelector('textarea'));

})()