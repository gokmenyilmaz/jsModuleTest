import {sumAll} from './math.js';
import enums from './enums.js';

document.querySelector("#container button").addEventListener("click", kaydet);

function kaydet()
{
    var deger=sumAll(9, 8);
    alert(deger);

    alert(enums.baz);
}


