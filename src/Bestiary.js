    export class opponent {  // creation de la classe d'object avec un objet = un type d'ennemi et ses caracteristiques
        constructor (name, HP,CA,Init, attack1,attack1_touch, attack1_min, attack1_max,attack1_proba, attack2,attack2_touch, attack2_min, attack2_max,attack2_proba, drop_xp,drop_coin,drop_object1,proba1,drop_object2,proba2 ) {
        this.name = name;
        this.HP = HP;
        this.CA = CA;
        this.Init = Init;
        this.attack1 = attack1;
        this.attack1_touch = attack1_touch;
        this.attack1_min = attack1_min;
        this.attack1_max = attack1_max;
        this.attack1_proba = attack1_proba;
        this.attack2 = attack2;
        this.attack2_touch = attack2_touch;
        this.attack2_min = attack2_min;
        this.attack2_max = attack2_max;
        this.attack2_proba = attack2_proba;
        this.drop_xp = drop_xp;
        this.drop_coin = drop_coin;
        this.drop_object1 = drop_object1;
        this.proba1 = proba1;
        this.drop_object2 = drop_object2;
        this.proba2 = proba2;
        }
    }

    // on cree la master data pour les ennemis

    let gothir_soldier = new opponent("gothir_soldier",16,12,2,"sword blow",3,3,9,0.7,"furious charge",0,5,12,0.3,320,40,"epee courte en fer",0.5,"tresor gothir 1",0.1);
    let gothir_archer = new opponent("gothir_archer",14,2,5,"arrow",3,2,7,1,0,0,0,0,0,340,45,"5 x fleche en fer", 0.5,"tresor gothir 1",0.1);
    let gothir_sergeant = new opponent("gothir_sergeant",20,14,3,"masse blow",5,5,10,0.7,"Break the knees and inflict - 3 CA for the rest of the fight",3,5,10,0.3,550,60,"tresor gothir 1", 0.3,"Iron mace",0.7);
    let gothir_knight = new opponent("gothir_knight",26,17,5,"sword blow",7,5,12,0.6,"defensive blow (+4 CA until next turn)", 4, 4,10,0.4,900,120,"tresor gothir 1", 0.6, "Gothir tresor 2",0.2);
    let gothir_royal_guard = new opponent("gothir_royal_guard",32,19,7,"sword blow",9,8,15,0.6,"defensive blow (+4 CA until next turn)", 7, 7,13,0.4,1500,200,"tresor gothir 1", 0.8, "Gothir tresor 2",0.4);
    export let opponent_list = [gothir_soldier,gothir_archer,gothir_sergeant,gothir_knight,gothir_royal_guard];
    export let opponent_list_lenght = opponent_list.length

    export function find_in_opponent_list(opponent_input_name) // Une fonction qui a comme input un string (le nom d'une des unites adverses) et renvoie une valeur qui est l'indice du tableau opponent_list_lenght contenant l'object correspondant)
    {
        for (let i = 0; i < opponent_list_lenght; i++) {  
            if (opponent_list[i].name == opponent_input_name){
                return i;            
            }
            else {
                }     
        }
    }

    export function create_opponent(object, indice) // Une fonction qui a comme input un string (le nom d'une des unites adverses) et renvoie une valeur qui est l'indice du tableau opponent_list_lenght contenant l'object correspondant)
    {
        let current_opponent_initiative = Math.floor(Math.random() * 20 + 1) + object.Init; // on roll le jet d'initiative pour cette creature
        let current_opponent = new opponent(object.name +indice, object.HP, object.CA, current_opponent_initiative, object.attack1, object.attack1_touch, object.attack1_min, object.attack1_max, object.attack1_proba, object.attack2, object.attack2_touch, object.attack2_min, object.attack2_max, object.attack2_proba, object.drop_xp, object.drop_coin, object.drop_object1, object.proba1,object.drop_object2, object.proba2);
        return current_opponent;
    }