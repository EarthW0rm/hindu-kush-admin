import { ClickMe } from "./ClickMe";

(function(){
    const btn = document.querySelector('#meClica');
    const clickAction = (evt) => {
        window.alert(ClickMe.actionBaby());
    }; 

    btn.addEventListener('click', clickAction);
})();
