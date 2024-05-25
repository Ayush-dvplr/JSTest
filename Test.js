/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFT = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,age,phone) {
     const myObj = {
        name,
        age,
        phone
     }
     myNFT.push(myObj);
     console.log("Minted : ",name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    myNFT.forEach((item)=>{
        console.log(item);
    })
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(myNFT.length);
}

// call your functions below this line
mintNFT("Ayush",21,9060);
mintNFT("Abhigyan",22,7242);
mintNFT("Shreya",19,6200);
mintNFT("Amar",20,9504);
listNFTs();
getTotalSupply();
