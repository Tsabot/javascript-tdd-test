# Javascript test

This is my solution to the exercise given in the [instructions](./INSTRUCTIONS.md)

## How to use

```bash
// to filter on any keyword in animals name
node ./src/app.js --filter=panda

// to add count of childs in names
node ./src/app.js --count
```

## Technical choice

### File structure

Went for the simplest approach given the lack of module and complexity.
If the app had an express and a DB connection, I would have implemented the Hexagonal architecture, with filter and count in domain. The cli/ express as application entry-point and DB handling in infrastructure with Nest.js. Probably with OOP and TS.

### Typescript

I thought about using Typescript initialy. Looking at the Data, it seems realy simplistic, not giving typing a lot of advantage over pure JS.
Since it was not given as a requesite and time was an issue for me, i decided to go to vanilla JS.

### TDD

On seeing the instructions, I felt like TDD was the best approach so you could see my logical path.
To keep a high level of readability in commits, I squashed them on merge. To see all the sub-commits, please refer to the PR.
Ex:
https://github.com/Tsabot/adeo-test/pull/1

I do not use this methodology often so I might have gone through it a times !

### OOP

Given the scale and the complexity of the Data. I felt like using classes would not provide much benefits and went for a functionnal approach. I believe that well structure functionnal code can be the better approach on a micro-service type of architecture.
It will not be the case for a bigger monolithic approach thought.

### Linter

I forgot to implement them initialy since I had some form of auto-format directly in my VS code. Sorry for inconvenience.

## Debatable choice

### addCountToCountries

This function is getting a bit too big and having a double reduce can be considered too much. This could be splited into a new sub handler "addCountToPeople" for instance

### autoRun

I did not know what was the cleanest way to deal with this issue (Jest app tests crashing on import of main()). I felt my approach was understandable but there might be a better way.

### reduceCountryByAnimals

Both reduceCountryByAnimals and reducePeopleByAnimals share a lot of logic.
I didn't know if another level of abstraction was the best approach thought. I felt like it would reduce undestandability and maintability and decided not to implement it further.
