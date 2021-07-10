class Animal {
    private name: string;
    constructor(name: string) {
        this.name = name;
        console.log("Animal is created");
    }

    getName() {
        return this.name;
    }

    speak = () => {
        return "Speak";
    }
}

const human = new Animal("Some Name");

human.getName();
human.speak();