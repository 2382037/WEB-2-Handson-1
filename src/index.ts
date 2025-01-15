interface PersonalData {
    name: string;
    age: number;
    email: string;
    address: string;
    hobbies: string[]
}

const myBio: PersonalData = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    hobbies: ["reading", "traveling", "coding"]
}

function displayBio(bio: PersonalData){
    console.log('Name: michael');
    console.log('Age: 20');
    console.log('Email: michaelbrain@ggmail.com');
    console.log('Address: bandung');
    console.log("Hobbies :");
    for (const hobby of bio.hobbies) {
        console.log('fotbal');
    }
}

displayBio(myBio);
