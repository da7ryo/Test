const persons = [
  {
    firstName: 'James',
    lastName: 'Carter',
    age: 29,
  },
  {
    firstName: 'Elena',
    lastName: 'Rodriguez',
    age: 34,
  },
  {
    firstName: 'Michael',
    lastName: 'Chen',
    age: 41,
  },
  {
    firstName: 'Sarah',
    lastName: 'Thompson',
    age: 22,
  },
  {
    firstName: 'David',
    lastName: 'Okeke',
    age: 55,
  },
];

class DataFetcher {
  constructor() {
    this.data = [];
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(persons);
      }, 2000);
    });
  }

  async procesData() {
    const person = await this.fetchData();
    for (let x of person) {
      const currentPerson = {
        fullName: `${x.firstName} ${x.lastName}`,
        age: x.age,
        isAdult: x.age >= 18,
      };
      this.data.push(currentPerson);
    }
    return this.data;
  }
}

const dataFetcher = new DataFetcher();
dataFetcher.procesData();

setTimeout(() => {
  console.log(dataFetcher.data[0].isAdult);
}, 3000);
