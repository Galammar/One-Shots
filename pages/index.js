import styles from '../styles/Home.module.css';
import Head from 'next/head';
import react, { useState } from 'react';

export default function Home() {
  const adventures = [
    new Adventure(
      'Dinosaur Nests',
      'Dinosaurs have been acting really wild lately at a particular area near houses, attacking people and animals, from which area they seem unwilling to leave. The adventures are asked to empty the area by any means necessary. By visiting the place the adventures might spot some nests with dinosaur eggs and discover the reason why they wont leave.<br>In order to end the adventure, the party will have to either kill the dinosaurs or transport the eggs to another place; this way the dinosaurs will follow them.<br>They all get one point of inspiration and one of them gets a +1 weapon for not killing the dinosaurs. Also if they choose to keep an egg, it cracks in 1d4+4 days giving birth to a baby dinosaur companion.'
    ),
    new Adventure(
      'Goblin Business',
      'A goblin gang has been raising its reputation making it really difficult to travel across the cities. Adventures are asked to deal with the goblins and return the stolen goods afterwards.<br>The gangs leader is an ambitious druid who teamed up with the goblins in order to raise money along with them. When he classes with the adventures he tries to lure them at the goblin lair where loads of traps lay on the ground.<br>After defeating the goblins the adventures get plenty of loot which they should return to the person that gave them the quest. If they do so, they get one third of the wealth in return.'
    ),
  ];
  return (
    <div>
      <Head>
        <title>One Shot Adventures</title>
      </Head>

      <main>
        <Land></Land>
      </main>
    </div>
  );

  function Land() {
    for (let i = 0; i < adventures.length; i++) {}
  }
}

class Adventure {
  name;
  description;

  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
}
