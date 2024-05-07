class Star {
    constructor(name, age, color, galaxy, distance) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.galaxy = galaxy;
        this.distance = distance;
    }

    toHtml() {
        return `
            <div class="star">
                <h1>Voici: ${this.name}</h1>
                <p>l'age est: ${this.age} millions d'années</p>
                <p>Sa couleur est: ${this.color}</p>
                <p>Ça appartiens a la galaxie : ${this.galaxy}</p>
                <p>Elle es a une distance de: ${this.distance}</p>
            </div>
        `;
    }
}

const stars = [
    new Star("45IR1", 690000, "#f4f6f4", "Andromeda", 100054),
    new Star("45IR2", 680000, "#f4f5f4", "Andromeda", 100353),
    new Star("45IR3", 670000, "#f4f4f4", "Andromeda", 100454),
    new Star("45IR4", 660000, "#f4f3f4", "Andromeda", 100554),
    new Star("45IR5", 650000, "#f4f2f4", "Andromeda", 100654),
    new Star("45IR6", 640000, "#f4f1f4", "Andromeda", 100754),
    new Star("45IR7", 630000, "#f4f0f4", "Andromeda", 100854),
];