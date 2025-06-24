const input = +prompt('please enter a number between 1-9')

// if(input == 1) {
//     alert ('one')
// }
// else if(input == 2) {
//     alert ('two')    
// }
// else if(input == 3) {
//     alert ('three') 
// }   
// else if(input == 4) alert ('four')    
// else if(input == 5) alert ('five')    
// else if(input == 6) alert ('six')    
// else if(input == 7) alert ('seven')    
// else if(input == 8) alert ('eight')    
// else if(input == 9) alert ('nine')    


switch (input) {
    case 1:
        alert('one')
        break;
    case 2: 
        alert('two')
        break;
    case 3: 
        alert('three')
        break;
    default:
        alert('unrecognized value')
}    