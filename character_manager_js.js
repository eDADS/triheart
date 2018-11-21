var characterIndex;

$.fn.clicktoggle = function (a, b) {
    return this.each(function () {
        var clicked = false;
        $(this).click(function () {
            if (clicked) {
                clicked = false;
                return b.apply(this, arguments);
            }
            clicked = true;
            return a.apply(this, arguments);
        });
    });
};

function Character(name, level, className, strength, agility, vitality, knowledge, instinct, charisma, athletics, climb, acrobatics, dexterity, stealth, medicine, alchemy, occult, nature, forgery, perception, investigation, hunting, animalhandling, persuasion, deception, intimidation, entertainment, streetwise, maxHp, currentHp, maxMp, currentMp, inventory1, inventory2, inventory3, inventory4, inventory5, inventory6, inventory7, inventory8, inventory9, inventory10, wealth, determination, personalValue1, personalValue2, personalValue3, personalValue4, personalValue5, personalValue6, universalValue1, universalValue2, universalValue3, universalValue4, universalValue5, universalValue6, characteristic1, characteristic2, characteristic3, notes) {
    this.name = name;
    this.level = level;
    this.className = className;
    this.strength = strength;
    this.agility = agility;
    this.vitality = vitality;
    this.knowledge = knowledge;
    this.instinct = instinct;
    this.charisma = charisma;
    this.athletics = athletics;
    this.climb = climb;
    this.acrobatics = acrobatics;
    this.dexterity = dexterity;
    this.stealth = stealth;
    this.medicine = medicine;
    this.alchemy = alchemy;
    this.occult = occult;
    this.nature = nature;
    this.forgery = forgery;
    this.perception = perception;
    this.investigation = investigation;
    this.hunting = hunting;
    this.animalhandling = animalhandling;
    this.persuasion = persuasion;
    this.deception = deception;
    this.intimidation = intimidation;
    this.entertainment = entertainment;
    this.streetwise = streetwise;
    this.maxHp = maxHp;
    this.currentHp = currentHp;
    this.maxMp = maxMp;
    this.currentMp = currentMp;
    this.inventory1 = inventory1;
    this.inventory2 = inventory2;
    this.inventory3 = inventory3;
    this.inventory4 = inventory4;
    this.inventory5 = inventory5;
    this.inventory6 = inventory6;
    this.inventory7 = inventory7;
    this.inventory8 = inventory8;
    this.inventory9 = inventory9;
    this.inventory10 = inventory10;
    this.wealth = wealth;
    this.determination = determination;
    this.personalValue1 = personalValue1;
    this.personalValue2 = personalValue2;
    this.personalValue3 = personalValue3;
    this.personalValue4 = personalValue4;
    this.personalValue5 = personalValue5;
    this.personalValue6 = personalValue6;
    this.universalValue1 = universalValue1;
    this.universalValue2 = universalValue2;
    this.universalValue3 = universalValue3;
    this.universalValue4 = universalValue4;
    this.universalValue5 = universalValue5;
    this.universalValue6 = universalValue6;
    this.characteristic1 = characteristic1;
    this.characteristic2 = characteristic2;
    this.characteristic3 = characteristic3;
    this.notes = notes;
}

function updateSheet(character) {
    $("#name").val(character.name);
    $("#level").val(character.level);
    $("#className").val(character.className);
    $("#strength").html(character.strength);
    $("#agility").html(character.agility);
    $("#vitality").html(character.vitality);
    $("#knowledge").html(character.knowledge);
    $("#instinct").html(character.instinct);
    $("#charisma").html(character.charisma);
    skillUpdate("athletics", character.athletics, 0);
    skillUpdate("climb", character.climb, 0);
    skillUpdate("acrobatics", character.acrobatics, 0);
    skillUpdate("dexterity", character.dexterity, 0);
    skillUpdate("stealth", character.stealth, 0);
    skillUpdate("medicine", character.medicine, 0);
    skillUpdate("alchemy", character.alchemy, 0);
    skillUpdate("occult", character.occult, 0);
    skillUpdate("nature", character.nature, 0);
    skillUpdate("forgery", character.forgery, 0);
    skillUpdate("perception", character.perception, 0);
    skillUpdate("investigation", character.investigation, 0);
    skillUpdate("hunting", character.hunting, 0);
    skillUpdate("animalhandling", character.animalhandling, 0);
    skillUpdate("persuasion", character.persuasion, 0);
    skillUpdate("deception", character.deception, 0);
    skillUpdate("intimidation", character.intimidation, 0);
    skillUpdate("entertainment", character.entertainment, 0);
    skillUpdate("streetwise", character.streetwise, 0);
    $("#maxHealth").html(character.maxHp);
    $("#health").html(character.currentHp);
    $("#maxMana").html(character.maxMp);
    $("#mana").html(character.currentMp);
    $("#inventory1").html(character.inventory1);
    $("#inventory2").html(character.inventory2);
    $("#inventory3").html(character.inventory3);
    $("#inventory4").html(character.inventory4);
    $("#inventory5").html(character.inventory5);
    $("#inventory6").html(character.inventory6);
    $("#inventory7").html(character.inventory7);
    $("#inventory8").html(character.inventory8);
    $("#inventory9").html(character.inventory9);
    $("#inventory10").html(character.inventory10);
    $("#wealth").html(character.wealth);
    $("#determination").html(character.determination);
    $("#personalValue1").html(character.personalValue1);
    $("#personalValue2").html(character.personalValue2);
    $("#personalValue3").html(character.personalValue3);
    $("#personalValue4").html(character.personalValue4);
    $("#personalValue5").html(character.personalValue5);
    $("#personalValue6").html(character.personalValue6);
    $("#universalValue1").html(character.universalValue1);
    $("#universalValue2").html(character.universalValue2);
    $("#universalValue3").html(character.universalValue3);
    $("#universalValue4").html(character.universalValue4);
    $("#universalValue5").html(character.universalValue5);
    $("#universalValue6").html(character.universalValue6);
    $("#characteristic1").html(character.characteristic1);
    $("#characteristic2").html(character.characteristic2);
    $("#characteristic3").html(character.characteristic3);
    $("#notes").html(character.notes);
}

function updateCharacter() {
    character = characterArray[characterIndex];
    character.name = $("#name").val();
    character.level = $("#level").val();
    character.className = $("#className").val();
    character.strength = $("#strength").html();
    character.agility = $("#agility").html();
    character.vitality = $("#vitality").html();
    character.knowledge = $("#knowledge").html();
    character.instinct = $("#instinct").html();
    character.charisma = $("#charisma").html();
    character.maxHp = $("#maxHealth").html();
    character.currentHp = $("#health").html();
    character.maxMp = $("#maxMana").html();
    character.currentMp = $("#mana").html();
    character.inventory1 = $("#inventory1").html();
    character.inventory2 = $("#inventory2").html();
    character.inventory3 = $("#inventory3").html();
    character.inventory4 = $("#inventory4").html();
    character.inventory5 = $("#inventory5").html();
    character.inventory6 = $("#inventory6").html();
    character.inventory7 = $("#inventory7").html();
    character.inventory8 = $("#inventory8").html();
    character.inventory9 = $("#inventory9").html();
    character.inventory10 = $("#inventory10").html();
    character.wealth = $("#wealth").html();
    character.determination = $("#determination").html();
    character.personalValue1 = $("#personalValue1").html();
    character.personalValue2 = $("#personalValue2").html();
    character.personalValue3 = $("#personalValue3").html();
    character.personalValue4 = $("#personalValue4").html();
    character.personalValue5 = $("#personalValue5").html();
    character.personalValue6 = $("#personalValue6").html();
    character.universalValue1 = $("#universalValue1").html();
    character.universalValue2 = $("#universalValue2").html();
    character.universalValue3 = $("#universalValue3").html();
    character.universalValue4 = $("#universalValue4").html();
    character.universalValue5 = $("#universalValue5").html();
    character.universalValue6 = $("#universalValue6").html();
    character.characteristic1 = $("#characteristic1").html();
    character.characteristic2 = $("#characteristic2").html();
    character.characteristic3 = $("#characteristic3").html();
    character.notes = $("#notes").html();

    characterArray[characterIndex] = character;
    localStorage.setItem("cArray", JSON.stringify(characterArray));
}

function updateCharacterAttribute(attribute){

}

$('document').ready(function () {
    if (!localStorage.cArray) {

        character = new Character("", "", "", "")

        characterArray = [character];
        localStorage.setItem("cArray", JSON.stringify(characterArray));
    }

    characterArray = JSON.parse(localStorage.getItem("cArray"));
    updateSheet(characterArray[0]);
    characterIndex = 0;
});

function skillUpdate(skillName, clickedBall, skillValue) {
    if (clickedBall == 1) {
        if (1 == skillValue) {
            $('#' + skillName + '1').removeClass("ballActive");
            $('#' + skillName + '2').removeClass("ballActive");
            $('#' + skillName + '3').removeClass("ballActive");
            return clickedBall - 1;
        } else {
            $('#' + skillName + '1').addClass("ballActive");
            $('#' + skillName + '2').removeClass("ballActive");
            $('#' + skillName + '3').removeClass("ballActive");
            return clickedBall;
        }
    } else if (clickedBall == 2) {
        if (2 == skillValue) {
            $('#' + skillName + '1').addClass("ballActive");
            $('#' + skillName + '2').removeClass("ballActive");
            $('#' + skillName + '3').removeClass("ballActive");
            return clickedBall - 1;
        } else {
            $('#' + skillName + '1').addClass("ballActive");
            $('#' + skillName + '2').addClass("ballActive");
            $('#' + skillName + '3').removeClass("ballActive");
            return clickedBall;
        }
    } else if (clickedBall == 3) {
        if (3 == skillValue) {
            $('#' + skillName + '1').addClass("ballActive");
            $('#' + skillName + '2').addClass("ballActive");
            $('#' + skillName + '3').removeClass("ballActive");
            return clickedBall - 1;
        } else {
            $('#' + skillName + '1').addClass("ballActive");
            $('#' + skillName + '2').addClass("ballActive");
            $('#' + skillName + '3').addClass("ballActive");
            return clickedBall;
        }
    }
}

$(function () {
    $('.skillBall').on('click', function () {
        character = characterArray[characterIndex];
        switch (this.id.slice(0, -1)) {
            case "athletics":
                character.athletics = skillUpdate("athletics", this.id.slice(-1), character.athletics);
                break;
            case "climb":
                character.climb = skillUpdate("climb", this.id.slice(-1), character.climb);
                break;
            case "acrobatics":
                character.acrobatics = skillUpdate("acrobatics", this.id.slice(-1), character.acrobatics);
                break;
            case "dexterity":
                character.dexterity = skillUpdate("dexterity", this.id.slice(-1), character.dexterity);
                break;
            case "stealth":
                character.stealth = skillUpdate("stealth", this.id.slice(-1), character.stealth);
                break;
            case "medicine":
                character.medicine = skillUpdate("medicine", this.id.slice(-1), character.medicine);
                break;
            case "alchemy":
                character.alchemy = skillUpdate("alchemy", this.id.slice(-1), character.alchemy);
                break;
            case "occult":
                character.occult = skillUpdate("occult", this.id.slice(-1), character.occult);
                break;
            case "nature":
                character.nature = skillUpdate("nature", this.id.slice(-1), character.nature);
                break;
            case "forgery":
                character.forgery = skillUpdate("forgery", this.id.slice(-1), character.forgery);
                break;
            case "perception":
                character.perception = skillUpdate("perception", this.id.slice(-1), character.perception);
                break;
            case "investigation":
                character.investigation = skillUpdate("investigation", this.id.slice(-1), character.investigation);
                break;
            case "hunting":
                character.hunting = skillUpdate("hunting", this.id.slice(-1), character.hunting);
                break;
            case "animalhandling":
                character.animalhandling = skillUpdate("animalhandling", this.id.slice(-1), character.animalhandling);
                break;
            case "persuasion":
                character.persuasion = skillUpdate("persuasion", this.id.slice(-1), character.persuasion);
                break;
            case "deception":
                character.deception = skillUpdate("deception", this.id.slice(-1), character.deception);
                break;
            case "intimidation":
                character.intimidation = skillUpdate("intimidation", this.id.slice(-1), character.intimidation);
                break;
            case "entertainment":
                character.entertainment = skillUpdate("entertainment", this.id.slice(-1), character.entertainment);
                break;
            case "streetwise":
                character.streetwise = skillUpdate("streetwise", this.id.slice(-1), character.streetwise);
                break;
            default:
                break;
        }
        updateCharacter();
    });
});

window.onbeforeunload = function(){
    updateCharacter();
 }