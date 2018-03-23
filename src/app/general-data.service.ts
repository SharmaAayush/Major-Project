import { Injectable } from '@angular/core';

@Injectable()
export class GeneralDataService {
  private symptoms = [
    {
      "id": 9,
      "name": "Headache"
    },
    {
      "id": 10,
      "name": "Abdominal pain"
    },
    {
      "id": 11,
      "name": "Fever"
    },
    {
      "id": 12,
      "name": "Pain in the limbs"
    },
    {
      "id": 13,
      "name": "Sore throat"
    },
    {
      "id": 14,
      "name": "Runny nose"
    },
    {
      "id": 15,
      "name": "Cough"
    },
    {
      "id": 16,
      "name": "Tiredness"
    },
    {
      "id": 17,
      "name": "Chest pain"
    },
    {
      "id": 23,
      "name": "Weight gain"
    },
    {
      "id": 28,
      "name": "Stuffy nose"
    },
    {
      "id": 29,
      "name": "Shortness of breath"
    },
    {
      "id": 30,
      "name": "Wheezing"
    },
    {
      "id": 31,
      "name": "Chest tightness"
    },
    {
      "id": 33,
      "name": "Eye redness"
    },
    {
      "id": 35,
      "name": "Lip swelling"
    },
    {
      "id": 37,
      "name": "Palpitations"
    },
    {
      "id": 40,
      "name": "Increased thirst"
    },
    {
      "id": 44,
      "name": "Nausea"
    },
    {
      "id": 45,
      "name": "Heartburn"
    },
    {
      "id": 46,
      "name": "Burning in the throat"
    },
    {
      "id": 52,
      "name": "Sleeplessness"
    },
    {
      "id": 54,
      "name": "Reduced appetite"
    },
    {
      "id": 56,
      "name": "weakness"
    },
    {
      "id": 57,
      "name": "Going black before the eyes"
    },
    {
      "id": 64,
      "name": "Sputum"
    },
    {
      "id": 73,
      "name": "Itching eyes"
    },
    {
      "id": 75,
      "name": "Burning eyes"
    },
    {
      "id": 76,
      "name": "Feeling of foreign body in the eye"
    },
    {
      "id": 87,
      "name": "Earache"
    },
    {
      "id": 92,
      "name": "Early satiety"
    },
    {
      "id": 95,
      "name": "Sneezing"
    },
    {
      "id": 96,
      "name": "Itching in the nose"
    },
    {
      "id": 101,
      "name": "Vomiting"
    },
    {
      "id": 104,
      "name": "Back pain"
    },
    {
      "id": 112,
      "name": "Menstruation disorder"
    },
    {
      "id": 114,
      "name": "Nervousness"
    },
    {
      "id": 115,
      "name": "Tremor at rest"
    },
    {
      "id": 122,
      "name": "Hiccups"
    },
    {
      "id": 123,
      "name": "Missed period"
    },
    {
      "id": 124,
      "name": "Skin rash"
    },
    {
      "id": 133,
      "name": "Night cough"
    },
    {
      "id": 136,
      "name": "Neck pain"
    },
    {
      "id": 138,
      "name": "Sweating"
    },
    {
      "id": 139,
      "name": "Cold sweats"
    },
    {
      "id": 140,
      "name": "Paralysis"
    },
    {
      "id": 144,
      "name": "Unconsciousness, short"
    },
    {
      "id": 149,
      "name": "Hot flushes"
    },
    {
      "id": 153,
      "name": "Fast, deepened breathing"
    },
    {
      "id": 169,
      "name": "Swollen glands on the neck"
    },
    {
      "id": 170,
      "name": "Cheek swelling"
    },
    {
      "id": 175,
      "name": "Chills"
    },
    {
      "id": 179,
      "name": "Stomach burning"
    },
    {
      "id": 181,
      "name": "Vomiting blood"
    },
    {
      "id": 203,
      "name": "Pain on swallowing"
    },
    {
      "id": 207,
      "name": "Dizziness"
    },
    {
      "id": 211,
      "name": "Tears"
    },
    {
      "id": 235,
      "name": "Memory gap"
    },
    {
      "id": 238,
      "name": "Anxiety"
    },
    {
      "id": 244,
      "name": "Drooping eyelid"
    },
    {
      "id": 248,
      "name": "Swollen glands in the armpits"
    },
    {
      "id": 273,
      "name": "Dry eyes"
    },
    {
      "id": 287,
      "name": "Eye pain"
    }
  ];

  private bodyLocations = [
    {
      "id": 6,
      "name": "Head, throat & neck"
    },
    {
      "id": 7,
      "name": "Arms & shoulder"
    },
    {
      "id": 10,
      "name": "Legs"
    },
    {
      "id": 15,
      "name": "Chest & back"
    },
    {
      "id": 16,
      "name": "Abdomen, pelvis & buttocks"
    },
    {
      "id": 17,
      "name": "Skin, joints & general"
    }
  ];

  constructor() { }

  public getAllSymptoms() {
    return this.symptoms.slice();
  }

  public getAllBodyLocations() {
    return this.bodyLocations.slice();
  }

}
