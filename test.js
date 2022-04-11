/*
Map Transformers
Using map, return an array of each transformer's value of its 'form' property 
*/
//result: ['Freightliner Truck','Gun', 'VW Beetle','Walkman']
const transformersMap = () => {
  let transformers = [
      {
        name: 'Optimus Prime',
        form: 'Freightliner Truck',
        team: 'Autobot'
      },
      {
        name: 'Megatron',
        form: 'Gun',
        team: 'Decepticon'
      },
      {
        name: 'Bumblebee',
        form: 'VW Beetle',
        team: 'Autobot'
      },
      {
        name: 'Soundwave',
        form: 'Walkman',
        team: 'Decepticon'
      }
    ];

    return transformers.map(robot => robot.form);
}

console.log(transformersMap());


/*
Filter Transformers
Using filter, return an array of transformer objects that have the 'team' property of 'Autobot'

result: [ {
        name: 'Optimus Prime',
        form: 'Freightliner Truck',
        team: 'Autobot'
      },
       {
        name: 'Bumblebee',
        form: 'VW Beetle',
        team: 'Autobot'
      }
  ]

*/
const transformersFilter = () => {
  let transformers = [
      {
        name: 'Optimus Prime',
        form: 'Freightliner Truck',
        team: 'Autobot'
      },
      {
        name: 'Megatron',
        form: 'Gun',
        team: 'Decepticon'
      },
      {
        name: 'Bumblebee',
        form: 'VW Beetle',
        team: 'Autobot'
      },
      {
        name: 'Soundwave',
        form: 'Walkman',
        team: 'Decepticon'
      }
    ];

    return transformers.filter(robot => robot.team === "Autobot");
}

console.log(transformersFilter());


/*
Reduce Transformers
Using reduce, return an object that has a count for each team of transformer
result: {
  Autobot: 2,
  Decepticon: 2
}
*/
const reduceTransformers = () => {
  let transformers = [
      {
        name: 'Optimus Prime',
        form: 'Freightliner Truck',
        team: 'Autobot'
      },
      {
        name: 'Megatron',
        form: 'Gun',
        team: 'Decepticon'
      },
      {
        name: 'Bumblebee',
        form: 'VW Beetle',
        team: 'Autobot'
      },
      {
        name: 'Soundwave',
        form: 'Walkman',
        team: 'Decepticon'
      }
    ]

    const teamCounts = transformers.reduce((acc, cur) => {
      if(acc[cur.team]) {
        acc[cur.team]++;
      } else {
        acc[cur.team] = 1;
      }
      return acc;
    }, {});

    return teamCounts;
}

console.log(reduceTransformers());


/*

Sum of every positive element
If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0.
Use filter and reduce
*/

//result: 42
const sumPositiveElement = () => {
  const input = [ 1, -4, 12, 0, -3, 29, -150];

  return(
    input.filter(num => num > 0)
    .reduce((acc, cur) => acc + cur)
  );
}

console.log(sumPositiveElement());


/* 
Calculate median and mean
Calculate the mean and median values of the number elements from the input array.

Use: reduce, sort, Math.abs
*/
//result: { mean: 38.5, median: 32 }  <--- SHOULDN'T THE MEDIAN BE 39 HERE??
const medianMean = () => {
  const input = [12, 46, 32, 64];
  const sorted = input.sort();
  let median;

  const mean = input.reduce((acc, cur) => acc + cur) / input.length;

  if (sorted.length % 2 === 0) {
    median = (sorted[(sorted.length / 2) - 1] + sorted[sorted.length / 2]) / 2;
  } else {
    median = sorted[Math.floor(sorted.length / 2)];
  }

  return {mean, median};
}

console.log(medianMean());


/*
Get name initials
The given input is a string of multiple words with a single space between each of them. Abbreviate the name and return the name initials.
Use .map , .split , .join
*/
//result: 'GRRM'
const nameInitials = () => {
  const input = 'George Raymond Richard Martin';

  return(
    input.split(" ")
    .map(string => string[0])
    .join("")
  );
}

console.log(nameInitials());


/*
Age difference from the youngest and oldest
Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.
Use .map , Math.min , Math.max
*/

//Result: [13, 67, 54]
const ageDifference = () => {
  const input = [
      {
        name: 'John',
        age: 13
      },
      {
        name: 'Mark',
        age: 56,
      },
      {
        name: 'Rachel',
        age: 45,
      },
      {
        name: 'Nate',
        age: 67,
      },
      {
        name: 'Jeniffer',
        age: 65,
      }
    ];
  
    let ageArray = input.map(each => each.age);

    let maxAge = ageArray.reduce((prev, current) => {
      return Math.max(prev, current)
    });

    let minAge = ageArray.reduce((prev, current) => {
      return Math.min(prev, current)
    });

    return [minAge, maxAge, (maxAge - minAge)];
}

console.log(ageDifference());