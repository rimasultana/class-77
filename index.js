function temporary(){
    let counter = 0;

    return function(){
        counter += 1;
    }
}

const add = temporary();

add();

console.dir(add);