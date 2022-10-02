import { Injectable } from '@angular/core';
import { WordListComponent } from './word-list.component';
import { AddWord } from './add-word';

@Injectable()
export class WordService {
  getWords() {
    return [
      new AddWord(
        WordListComponent,
        { name: 'tower', bio: 'bell' }
      ),
      new AddWord(
        WordListComponent,
        { name: 'sea', bio: 'tideome' }
      ),
      new AddWord(
        WordListComponent,
        { name: 'family', bio: 'marriage' }
      ),



      /*school	blackboard	
tower	bell	
sea	tide	
family	marriage	
newspaper	interview	
sonata	joy	
banner	camp	
tendency	increment	
mother	child	
insect	caterpillar	
river	ship	
coast	beach	
gun	bullet	
blacksmith	metal	
home	room	
building	hall	
rain	flood	
avenue	tree	
decency	truth	
decree	decision	
diamond	hardness	
result	effect	
occupation	doctor	
book	story	
attack	operation	
cat	soul	
doll	cradle	
episode	happiness	
railroad	steam	
kitchen	pot	
countryside	swamp	
musician	pianist	
industry	factory	
clothing	scarf	
car	headlight	
prison	gangster	
gale	wind	
bouquet	blossom	
bottle	toast	
group	person	
crisis	emergency	
girl	engagement	
harbor	crane	
garden	flowerbed	*/
    ];
  }
}
