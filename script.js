"use strict"

// globalt array
let globalArrayOfWords = [];

window.addEventListener("load", fetchData)


// fetch af data til array
async function fetchData() {
    const response = await fetch("../data/ddo_fullforms_2023-10-11.csv");
    const rawtext = await response.text();
    
    globalArrayOfWords = rawtext.split("\n").map(line => {
        const parts = line.split("\t");
        return {
            variant: parts[0],
            headwood: parts[1],
            homograph: parts[2],
            partofspeech: parts[3],
            id: parts[4]
        };
    });

    // forskellige checks: 

    // checker længe på array
    console.log('Number of Entries:', globalArrayOfWords.length);
    // checker array er populated
    console.log(globalArrayOfWords.slice(0, 10));

    //finder ud af hvad index af "hestevogn" er :
    const hestevognIndexes = globalArrayOfWords
    .map((entry, index) => entry.variant === "hestevogn" ? index : -1)
    .filter(index => index !== -1); 

    // logger hestevogns index: 
    console.log("Hestevogn Entries Indexes:", hestevognIndexes);

    // tjekker at der er et object der hedder "hestevogn" som variant.
    const hestevognEntries = globalArrayOfWords.filter(entry => entry.variant === "hestevogn");
    console.log(hestevognEntries);

    // kalder binary search funktionen med hestevogn.
    console.log(binarySearchFunction("hestevogn", globalArrayOfWords, compareValues));
}

// local string comparetor til Dansk der tager højde for dansk sortering
function compareValues(search, check) {
    return search.localeCompare(check, "da")
}       


// adjusted binary search.
function binarySearchFunction(value, globalArrayOfWords, compareValues) {
    let start = 0;
    let end = globalArrayOfWords.length - 1;
    let middle = 0;
    let counter = 0;

    while (start <= end) {
        middle = Math.floor((start + end) / 2);
        counter++;

        const compareValue = compareValues(value.toLowerCase(), globalArrayOfWords[middle].variant.toLowerCase());
        console.log(globalArrayOfWords[middle])
        console.log("Start:", start, "End:", end, "Middle:", middle);
        console.log("Compare Value:", compareValue);

        if (compareValue === 0) {
            console.log("Correct");
            console.log(`It took ${counter} attempts to find the result`);
            return middle;
        } else if (compareValue < 0) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return "Could not find the value";
}



