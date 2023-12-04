import { PersonBuilder } from "./PersonBuilder";

const nick = new PersonBuilder("nick").activate().makeAdmin().build();

console.log(nick);
