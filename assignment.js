
class Character{
    constructor(name, level, race, characterClass){
        this.name = name;
        this.level = level;
        this.race = race;
        this.characterClass = characterClass;
    }
}

class Menu{
    constructor(){
        this.characters = [];
        
    }
    start(){
        let selection = this.mainMenu();

        while(selection != 0){
            switch (selection){
                case '1': 
                    this.createCharacter();
                    break;
                case '2': 
                    this.viewCharacters();
                    break;
                case '3':
                    this.deleteCharacter();
                    break;
                default :
                    selection = 0;

            }
            selection = this.mainMenu();
        };

    alert('Farewell, Adventurer!');
    };
    mainMenu(){
        return prompt(`
        0) Exit Tavern
        1) Recruit Adventurer
        2) View Your Party
        3) Retire Adventurer
        `);
    }
    createCharacter(){
        let name = prompt('Enter Adventurer Recruit Name');
        let level = prompt('Enter Adventurer Recruit Level');
        let race = prompt('Enter Adventurer Recruit Race');
        let characterClass = prompt('Enter Adventurer Recruit Class');
        this.characters.push(new Character(name, level, race, characterClass));
    }
    viewCharacters(){
        let partyString = '';
        for(let i =0; i<this.characters.length; i++){
            partyString += i + ') ' + this.characters[i].name + ', level ' + this.characters[i].level +', ' + this.characters[i].race +' '+ this.characters[i].characterClass + '\n';
        }
        alert(partyString);
    }
    deleteCharacter(){
        let index = prompt('Choose which Adventurer to Retire');
        if (index > -1 && index < this.characters.length){
        this.characters.splice(index, 1);
        }
    };
}


let menu = new Menu();
menu.start();