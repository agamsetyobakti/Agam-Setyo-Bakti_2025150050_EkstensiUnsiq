// Parent Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Halo, nama saya ${this.name}`);
    }
}

// Child Class: Guru
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

    // Polymorphism
    introduce() {
        console.log(
            `Assalamualaikum, saya ${this.name}, guru mata pelajaran ${this.subject}`
        );
    }
}

// Child Class: Siswa
class Student extends Person {
    #score; // Encapsulation

    constructor(name, age, major, score) {
        super(name, age);
        this.major = major;
        this.#score = score;
    }

    // Getter
    getScore() {
        return this.#score;
    }

    // Setter
    setScore(newScore) {
        if (newScore >= 0 && newScore <= 100) {
            this.#score = newScore;
        } else {
            console.log("Nilai harus 0 - 100");
        }
    }

    // Polymorphism
    introduce() {
        console.log(
            `Assalamualaikum, saya ${this.name}, siswa jurusan ${this.major}`
        );
    }
}

// Object
const teacher1 = new Teacher(
    "Agam",
    28,
    "Desain Komunikasi Visual"
);

const student1 = new Student(
    "Rizky",
    17,
    "DKV",
    85
);

// Menjalankan Method
teacher1.introduce();
student1.introduce();

// Encapsulation
console.log("Nilai awal:", student1.getScore());

student1.setScore(95);

console.log("Nilai setelah update:", student1.getScore());
