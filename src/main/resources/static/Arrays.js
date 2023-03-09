const liste = [1,4,5,99,-6];
liste[0]=10;
for (let i=0 ; i<liste.length; i++){
    console.log(liste[i]);
}

for (let i of liste){
    console.log(i);
}

liste.push(23);
const lengde = liste.length;
liste.splice(1,2);
const posisjon= liste.indexOf(23);
liste.sort();
console.log(liste);
console.log(posisjon);