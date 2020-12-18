class Animal {
    constructor(name) {
        this.name = name;
    }

    action(element) {
        document.getElementById("imgAnimal").style.display="block";
        document.getElementById(this.actionSoundName).play();

    }

    showImage() {
        document.getElementById("imgAnimal").src = this.image;
        console.log(this.image)
    }

    putInTheDocument() {
        
        var petsTable = document.getElementById("petsTable");
        let animalsTR = document.createElement("tr");

        var petNameTD = document.createElement("td");
        petNameTD.textContent = this.name;
        animalsTR.appendChild(petNameTD);

        var petLegsTD = document.createElement("td");
        petLegsTD.textContent = this.legs;
        animalsTR.appendChild(petLegsTD);

        var petActionTD = document.createElement("td");
        var petActionTDButton = document.createElement("button");
        petActionTDButton.textContent = this.actionText;
        petActionTD.appendChild(petActionTDButton);
        animalsTR.appendChild(petActionTD);

        animalsTR.onclick = this.showImage.bind(this);
        petActionTDButton.onclick = this.action.bind(this);
        petsTable.querySelector("tbody").appendChild(animalsTR)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.legs = 10;
        this.actionText = "Meoow "
        this.actionSoundName = "meow"
        this.image = "https://www.petburada.com/Uploads/Blog/Kediler-Egitilir-Mi-0015.jpg"
    }
}

class Monkey extends Animal {
    constructor(name) {
        super(name);
        this.legs = 12;
        this.actionText = "Scream"
        this.actionSoundName = "scream"
        this.image = "https://foto.haberler.com/haber/2011/03/08/bu-maymunlar-kutsal-ama-hem-yol-kesiyor-hem-2579465_4976_amp.jpg"
    }
}

var Mila = new Cat("Mila");
Mila.putInTheDocument();

var Charlie = new Monkey("Charlie");
Charlie.putInTheDocument();
  