

import {opponent,opponent_list,opponent_list_lenght,find_in_opponent_list,create_opponent} from './Bestiary.js'; 


// Elelement HTML de la ligne "ajouter un adversaire"
let add_opponent = document.getElementById("add_opponent"); // bouton "Add" pour ajouter l'adversaire selectionne4
let opponent_input = document.getElementById("opponent_input"); // Liste deroulante avec les noms des ennemis disponibles
let opponents_display = document.getElementById("opponents_display"); 
let opponent_number = document.getElementById("opponent_number"); // balise ou est indique le nombre d'ennemi deja selectionne

// Elelement HTML de la ligne "ajouter joueur"
let add_player = document.getElementById("add_character");
let player_name_input = document.getElementById("character_name_input");
let player_init_input = document.getElementById("character_init_input");
let player_hp_input = document.getElementById("character_hp_input");

let opponent_number_value = 0; // variable de type number qui compte le nombre d'ennemis ajoute
let present_opponent_list = []; // tableau ammene a stocker les objets des creature adversaire a mesure qu'ils sont ajoute par l'utilisateur

let battle_order_button = document.getElementById("battle_order"); // correspond a l'element html du bouton "battle_order"
let opponent_presentation_table = []; // Table regroupant les elements HTML contenant toute la ligne d'un adversaire
let attack_button_table = []; // Tableau dans lequel on range les elements HTML correspondants aux differents bouttons "attack" quand ils sont generes
let damage_button_table = []; // Pareil qu'au dessus pour le bouton "take_damage"
let damage_input_table = [];// Pareil qu'au dessus pour le rectangle ou l'utilisateur rentre les dommages a prendre en compte
let opponent_HP_table = [];
let attack_text = document.getElementById("attack_text_barre");
let opponent_in_order = [];

//Element pour le loot
let generate_loot_button = document.getElementById("generate_loot");
let total_piece = 0;



add_opponent.addEventListener("click",function(){  // evenement se declenchant quand on clique sur "add_opponent"
       
    ++opponent_number_value; // On incremente le compteur du nombre d'ennemis
    opponent_number.innerText=(opponent_number_value); // on affiche le nouveau nombre d'ennemis

    let opponent_input_value = opponent_input.value;  // on met la valeur choisie par l'utilisateur dans une variable string
    let present_opponent_indice = find_in_opponent_list(opponent_input_value);     // On va cherche l'indice correspondant dans le tableau opponent_list
    let present_opponent_object = create_opponent(opponent_list[present_opponent_indice],opponent_number_value);           // On creer la variable present_opponent_object contenant l'object correspondant a l'adversaire choisie
    present_opponent_list.push(present_opponent_object);

    console.log("This "+present_opponent_object.name+ " has an initiative of " +present_opponent_list[opponent_number_value-1].Init); 
    let newelt = document.createElement("div"); // on cree l'element html dans lequel on va mettre les differents elements lie a l'adversaire ajoute (nom, HP, case pour enregistrer les degats, etc..)
    opponents_display.appendChild(newelt); // on ajoute ce nouvel element dans pagecontent
    newelt.classList.add("present_opponent") // on ajoute a ce nouvel element la classe "present_opponent"
    newelt.innerHTML = opponent_input.value;


});

add_player.addEventListener("click",function(){
    ++opponent_number_value;
    opponent_number.innerText=(opponent_number_value);

    let player_name_value = player_name_input.value;
    let player_init_value = player_init_input.value;
    let player_hp_value = player_hp_input.value;


    present_opponent_list.push(new opponent(player_name_value,player_hp_value,0,player_init_value,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0));

    let newelt = document.createElement("div"); // on cree l'element html dans lequel on va mettre les differents elements lie a l'adversaire ajoute (nom, HP, case pour enregistrer les degats, etc..)
    opponents_display.appendChild(newelt); // on ajoute ce nouvel element dans pagecontent
    newelt.classList.add("present_opponent") // on ajoute a ce nouvel element la classe "present_opponent"
    newelt.innerHTML = player_name_value + " " + player_init_value;


});

battle_order_button.addEventListener("click",function(){

    opponents_display.innerHTML="";

    let compteur = 0;
    let present_opponent_list_lenght = present_opponent_list.length;

    let attack_button_table = [];  // on remet a vide les tables pour les reremplirs ensuite.
    let damage_button_table = [];
    let damage_input_table = [];
    let opponent_in_order = [];
    let opponent_HP_table = [];
    let opponent_presentation_table = [];


    for (let j = 0; j < 35; j++) {    // Ici, on va tester les valeurs de 35 a 0 et les comparer au jet d'initiative de chaque creature dans present_opponent_list pour ensuite les ranger dans l'ordre d'initiative dans le tableau opponent_in_order 
        for (let i = 0; i < present_opponent_list_lenght; i++){
        
            if (present_opponent_list[i].Init == (30-j)) {
                opponent_in_order.push(present_opponent_list[i]); // On cree un tableau qui recense les elements HTML correspondant aux boutons "attack" de chaque ennemis
                ++compteur;
                
                let newelt = document.createElement("div"); // on cree l'element html dans lequel on va mettre les differents elements lie a l'adversaire ajoute (nom, HP, case pour enregistrer les degats, etc..)
                opponents_display.appendChild(newelt); // on ajoute ce nouvel element dans pagecontent
                newelt.classList.add("present_opponent") // on ajoute a ce nouvel element la classe "present_opponent"

                newelt.innerHTML = compteur +" "+ present_opponent_list[i].name + "<span class = present_opponent id = " + compteur + "present_opponent>" + " <span class = present_opponent_init id = " + compteur + "present_opponent_init alt = "+ compteur +"> "+ present_opponent_list[i].CA + "</span> <span class = present_opponent_hp id = " + compteur + "present_opponent_hp alt = "+ compteur +"> "+ present_opponent_list[i].HP + "</span> <input type=input class = dammage_input id = " + compteur + "dammage_input alt = "+compteur+"> <input type=submit value=take_damage id = " + compteur + "take_damage alt = "+compteur+"> <input type=submit value=attack class = generat_attack id = " + compteur + "attack alt = "+compteur+"> <input type=input class = character_effect id = " + compteur + "effect_note value = no_temporary_effect alt = "+compteur+"> </span>";
                
                attack_button_table.push(document.getElementById(compteur + "attack")); // On cree un tableau qui recense les elements HTML correspondant aux boutons "take_damage" de chaque ennemis
                damage_button_table.push(document.getElementById(compteur + "take_damage"));
                damage_input_table.push(document.getElementById(compteur+"dammage_input"));
                opponent_HP_table.push(document.getElementById(compteur+"present_opponent_hp"));
                opponent_presentation_table.push(document.getElementById(compteur+"present_opponent"));
                
            }
            else {}                   
        }
    }
    
    for (let i = 0; i < present_opponent_list_lenght; i++){

        attack_button_table[i].addEventListener("click",function(){

            let attack_text_content = generate_attack(opponent_in_order[i]);
            console.log(attack_text_content);
            attack_text.textContent =(attack_text_content);

        });

        damage_button_table[i].addEventListener("click",function(){

            let damage_value = damage_input_table[i].value;
            let new_hp_value = opponent_in_order[i].HP - damage_value;
            opponent_in_order[i].HP = new_hp_value;
            console.log(new_hp_value);
            opponent_HP_table[i].textContent =(new_hp_value);

            if  (new_hp_value < 1 ) 
            {
                opponent_presentation_table[i].innerHTML = (" Dead");
                
            }
            else {}  

        })
    }
    console.log(document.getElementById(compteur + "present_opponent_init"));
    
}); // fin de l'evenemment "cliquer sur battle_order"


generate_loot_button.addEventListener("click",function(){

    let present_opponent_list_lenght = present_opponent_list.length;
    let loot_name_table =[];
    let loot_quantity =0;
    let loot_quantity_table =[];
    let total_piece = 0;
    let total_copper = 0;
    let total_silver = 0;
    let total_gold = 0;
    let total_xp = 0;


    for (let i = 0; i < present_opponent_list_lenght; i++){ // pour chaque adversaire dans la liste

        console.log("on genere le loot de "+ present_opponent_list[i].name);

        // on traite d'abord le premier loot
        let loot1 = present_opponent_list[i].drop_object1;
        let proba1 = present_opponent_list[i].proba1;
        let random_test = Math.random();
        let test_new_loot = 0;


        if (proba1 > random_test){


            for (let i = 0; i < loot_name_table.length+1; i++){  // on test si le nouvel object loot est deja dans la table de loot


                if (loot1 == loot_name_table[i]){

                    loot_quantity = loot_quantity_table[i];
                    ++loot_quantity;
                    loot_quantity_table[i]=loot_quantity;  // si oui, on ajoute 1 a la quantite correspondante dans le tableau loot_quantity_table
                    test_new_loot = 1     // si oui, on met 1 dans la valeur de test_new_loot
                }
                else {}
            }


            if (test_new_loot == "0"){ // Si test_new_loot est egal a 0, cela veut dire qu'il s'agit d'un nouvel objet
                
                loot_name_table.push(loot1);
                loot_quantity_table.push(1);

            }
            else {}
        }
        else {}

        // on traite ensuite le deuxieme loot
        let loot2 = present_opponent_list[i].drop_object2;
        let proba2 = present_opponent_list[i].proba2;
        let random_test2 = Math.random();
        let test_new_loot2 = 0;

        
                if (proba2 > random_test2){
        
        
                    for (let i = 0; i < loot_name_table.length+1; i++){  // on test si le nouvel object loot est deja dans la table de loot
        
                        if (loot2 == loot_name_table[i]){
        
                            loot_quantity = loot_quantity_table[i];
                            ++loot_quantity;
                            loot_quantity_table[i]=loot_quantity;  // si oui, on ajoute 1 a la quantite correspondante dans le tableau loot_quantity_table
                            test_new_loot2 = 1     // si oui, on met 1 dans la valeur de test_new_loot
                        }
                        else {}
                    }
        
        
                    if (test_new_loot2 == "0"){ // Si test_new_loot est egal a 0, cela veut dire qu'il s'agit d'un nouvel objet
                        
                        loot_name_table.push(loot2);
                        loot_quantity_table.push(1);
        
                    }
                    else {}
                }
                else {}

        // on traite le cas des pieces de monnais
        
        let max_piece = present_opponent_list[i].drop_coin;
        let drop_piece = Math.floor(Math.random() * max_piece + 1);

        total_piece = total_piece + drop_piece;

        // on traite enfin l'xp total
        
        let drop_xp_value = present_opponent_list[i].drop_xp;

        total_xp = total_xp + drop_xp_value;

    }

    total_gold =  Math.floor(total_piece/400);
    total_silver = Math.floor(total_piece/20)-(20*total_gold);
    total_copper = total_piece - (total_gold*400)-(total_silver*20);



    let text_loot = " ";
    for (let i = 0; i < loot_name_table.length; i++) {
        
        text_loot =  text_loot + " / " + loot_quantity_table[i] + " " + loot_name_table[i];
    }

    text_loot = "On gagne un total de "+ total_xp + " XP ainsi que " + total_piece + " PC soit "+ total_gold + " PO  " + total_silver + " PA  " + total_copper +" PC  "+ text_loot;
    attack_text.textContent =(text_loot);

});


function generate_attack(object) // Une fonction qui genere un text de l'attaque de la creature (object) en input.
{
    let random_test = Math.random();

    if (object.attack1_proba> random_test){

        let touch_score = Math.floor(Math.random() * 20 + 1)+ object.attack1_touch;
        let damage_score = Math.floor(Math.random() * (object.attack1_max-object.attack1_min+1) +object.attack1_min); 

        return (object.name + " attack with " + object.attack1 + " with a touch score of " + touch_score + " and inflict "+ damage_score + " damages");   
    }
    else {
        let touch_score = Math.floor(Math.random() * 20 + 1)+ object.attack2_touch;
        let damage_score = Math.floor(Math.random() * (object.attack2_max-object.attack1_min+1) +object.attack2_min); 

        return (object.name + " attack with " + object.attack2 + " with a touch score of " + touch_score + " and inflict "+ damage_score + " damages");
        }
}





        
