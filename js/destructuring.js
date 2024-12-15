const player = {
  userName: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
};

// console.log( player.address.city );

const { userName, club, address: { city } } = player;

// console.log(`${userName} plays for ${club}`);

console.log(`${userName} lives in ${city}`);