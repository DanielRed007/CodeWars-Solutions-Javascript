function firstDup (text = "") {
    const list = text.split("");
    
    const counter = [];

    for(let x = 0; x < list.length; x++){
        const char = list[x];
        const unit = [char,x]
        
        counter.push(unit);
    }

    console.log(counter);
}

firstDup('tweet'); // 't');
firstDup('Ode to Joy'); // ' ');
firstDup('ode to joy'); // 'o');
firstDup('bar'); //  undefined);
firstDup('123123'); // '1');
firstDup('!@#$!@#$'); // '!');
