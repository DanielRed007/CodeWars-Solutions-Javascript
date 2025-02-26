function greet(name = ""){
    const first = name[0].toUpperCase();
    const chars = name.slice(1,name.length).toLowerCase();

    return `Hello ${first + chars}!`;     
}

greet('riley'); // 'Hello Riley!'