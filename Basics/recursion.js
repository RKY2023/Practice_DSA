const rec_decrement = (a) =>{
    
    if(a < 0)
        return 0;
    console.log(a);
    rec_decrement(a-1);
}
rec_decrement(5);

const rec_increment = (a) =>{
    if(a < 0)
        return 0;
    rec_increment(a-1); 
    console.log(a);
}
rec_increment(5);

