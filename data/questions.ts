import { Question } from '../types';

export const questionsByTopic: Record<string, Record<string, Question[]>> = {
  Physics: {
    "Kinematics & Dynamics": [
      {
        question: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Mass", "Velocity"],
        correctAnswer: "Velocity",
        explanation: "Velocity is a vector quantity as it has both magnitude (speed) and direction. The others are scalar quantities."
      },
      {
        question: "Newton's first law of motion is also known as the law of:",
        options: ["Inertia", "Action-Reaction", "Acceleration", "Gravity"],
        correctAnswer: "Inertia",
        explanation: "Newton's first law states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This is the principle of inertia.",
        videoExplanationUrl: "https://www.youtube.com/embed/1xrc_U88pd8"
      },
    ],
    "Work, Energy, and Power": [
       {
        question: "What type of energy is stored in a stretched rubber band?",
        options: ["Kinetic Energy", "Potential Energy", "Chemical Energy", "Thermal Energy"],
        correctAnswer: "Potential Energy",
        explanation: "Elastic potential energy is stored in the stretched rubber band. It is converted to kinetic energy when the band is released."
      }
    ],
    "Electricity & Magnetism": [
      {
        question: "What is the unit of electrical resistance?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correctAnswer: "Ohm",
        explanation: "The Ohm (symbol: Ω) is the SI derived unit of electrical resistance, named after German physicist Georg Ohm."
      },
    ],
  },
  Chemistry: {
    "Basic Concepts": [
      {
        question: "What is the chemical formula for water?",
        options: ["CO2", "H2O", "O2", "NaCl"],
        correctAnswer: "H2O",
        explanation: "A molecule of water is composed of two hydrogen atoms and one oxygen atom, hence the formula H2O."
      },
      {
        question: "Which element is the most abundant in the Earth's crust?",
        options: ["Iron", "Silicon", "Aluminum", "Oxygen"],
        correctAnswer: "Oxygen",
        explanation: "Oxygen is the most abundant element in the Earth's crust, making up about 46.6% of its mass."
      },
    ],
    "Acids, Bases & Salts": [
      {
        question: "What is the pH of a neutral solution?",
        options: ["0", "7", "14", "1"],
        correctAnswer: "7",
        explanation: "A pH of 7 is considered neutral. Values below 7 are acidic, and values above 7 are alkaline (basic).",
        videoExplanationUrl: "https://www.youtube.com/embed/LS67vS10O5Y"
      },
    ],
    "Inorganic Chemistry": [
      {
        question: "Which gas is known as 'laughing gas'?",
        options: ["Methane", "Nitrous Oxide", "Carbon Monoxide", "Helium"],
        correctAnswer: "Nitrous Oxide",
        explanation: "Nitrous oxide (N2O) is commonly known as laughing gas due to the euphoric effects of inhaling it."
      }
    ],
  },
  Biology: {
    "Cell Biology": [
      {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondrion", "Cell Wall"],
        correctAnswer: "Mitochondrion",
        explanation: "Mitochondria are responsible for generating most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy.",
        videoExplanationUrl: "https://www.youtube.com/embed/39HTpUG1MwQ"
      },
    ],
    "Human Physiology": [
      {
        question: "Which component of blood is responsible for clotting?",
        options: ["Red Blood Cells", "White Blood Cells", "Plasma", "Platelets"],
        correctAnswer: "Platelets",
        explanation: "Platelets, or thrombocytes, are small, colorless cell fragments in our blood that form clots and stop or prevent bleeding."
      },
      {
        question: "What is the largest organ in the human body?",
        options: ["Liver", "Brain", "Heart", "Skin"],
        correctAnswer: "Skin",
        explanation: "The skin is the body's largest organ, providing a protective barrier against pathogens and injuries from the environment."
      }
    ],
    "Plant Physiology": [
       {
        question: "Photosynthesis primarily occurs in which part of the plant?",
        options: ["Roots", "Stem", "Leaves", "Flowers"],
        correctAnswer: "Leaves",
        explanation: "Leaves are the primary sites for photosynthesis, as they contain chloroplasts, the organelles where the process takes place."
      },
    ]
  }
};


// For backwards compatibility with ExamMode which needs all questions for a subject
export const questions: Record<string, Question[]> = Object.keys(questionsByTopic).reduce((acc, subject) => {
  acc[subject] = Object.values(questionsByTopic[subject]).flat();
  return acc;
}, {} as Record<string, Question[]>);