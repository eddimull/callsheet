let solved = false;
let stabCount = 0;
function randomSort()
{
    let possibleDigits = Array.from('javascript',(letter,i)=>i) //weird flex, but ok
    let sequence = {}
    let possibleLetters = ['A','B','C','D','E']

    possibleLetters.forEach(element=>{
        const randomValue = possibleDigits[Math.floor(Math.random()*possibleDigits.length)];
        sequence[element] = randomValue
        possibleDigits.splice(possibleDigits.indexOf(randomValue),1);
    });

    return sequence;
}

function solve(sequence)
{
    const equation = parseInt(sequence.A.toString() + sequence.B + sequence.C + sequence.D + sequence.E) * sequence.A;
    const solution = parseInt(sequence.E.toString() + sequence.E + sequence.E + sequence.E + sequence.E + sequence.E);
    console.log(equation,solution);
    return equation == solution
}

function randomStab()
{
    const sequence = randomSort();
    const solution = solve(sequence);
    stabCount += 1;
    if(solution)
    {
        console.log('The solution is', sequence);
        console.log(`Solved in ${stabCount} stabs`);
        solved = true;
    }
}

while(!solved)
{
    randomStab()
}