import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from '../models/User';
import School from '../models/School';
import Question from '../models/Question';
import connectDB from '../config/database';

dotenv.config();

// Demo school data
const schoolData = {
  name: 'Tamil Nadu Model School',
  code: 'TNMS001',
  address: '123 Main Street, Anna Nagar',
  city: 'Chennai',
  state: 'Tamil Nadu',
  pincode: '600040',
  phone: '+91 44 12345678',
  email: 'info@tnmodelschool.edu',
  principal: 'Dr. Rajesh Kumar',
  isActive: true,
};

// Demo users data
const getUsersData = (schoolId: mongoose.Types.ObjectId) => [
  {
    name: 'Admin User',
    email: 'admin@school.com',
    password: 'admin123',
    role: 'admin',
    schoolId,
    isActive: true,
  },
  {
    name: 'Physics Teacher',
    email: 'teacher@school.com',
    password: 'teacher123',
    role: 'teacher',
    schoolId,
    isActive: true,
  },
  {
    name: 'Student One',
    email: 'student@school.com',
    password: 'student123',
    role: 'student',
    schoolId,
    grade: '12th',
    coins: 100,
    streak: 5,
    totalPoints: 250,
    isActive: true,
  },
];

// Sample questions data
const questionsData = [
  // Physics - Kinematics & Dynamics
  {
    subject: 'Physics',
    topic: 'Kinematics & Dynamics',
    difficulty: 'easy',
    question: {
      en: 'Which of the following is a vector quantity?',
      ta: 'பின்வருவனவற்றுள் எது ஒரு திசையன் அளவு?',
    },
    options: {
      en: ['Speed', 'Distance', 'Mass', 'Velocity'],
      ta: ['வேகம்', 'தூரம்', 'நிறை', 'திசைவேகம்'],
    },
    correctAnswer: 3,
    explanation: {
      en: 'Velocity is a vector quantity as it has both magnitude (speed) and direction. The others are scalar quantities.',
      ta: 'திசைவேகம் ஒரு திசையன் அளவு ஏனெனில் அது அளவு (வேகம்) மற்றும் திசை இரண்டையும் கொண்டுள்ளது.',
    },
    marks: 4,
    examType: 'Both',
  },
  {
    subject: 'Physics',
    topic: 'Kinematics & Dynamics',
    difficulty: 'medium',
    question: {
      en: "Newton's first law of motion is also known as the law of:",
      ta: 'நியூட்டனின் முதல் இயக்க விதி எவ்வாறு அழைக்கப்படுகிறது?',
    },
    options: {
      en: ['Inertia', 'Action-Reaction', 'Acceleration', 'Gravity'],
      ta: ['மந்தநிலை', 'செயல்-எதிர்வினை', 'முடுக்கம்', 'ஈர்ப்பு'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'Newton\'s first law states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This is the principle of inertia.',
      ta: 'நியூட்டனின் முதல் விதி ஒரு பொருள் வெளிப்புற விசையால் செயல்படுத்தப்படாவிட்டால் ஓய்வில் அல்லது நேர்கோட்டில் சீரான இயக்கத்தில் இருக்கும் என்று கூறுகிறது.',
    },
    videoUrl: 'https://www.youtube.com/embed/1xrc_U88pd8',
    marks: 4,
    examType: 'Both',
  },
  // Physics - Work, Energy, and Power
  {
    subject: 'Physics',
    topic: 'Work, Energy, and Power',
    difficulty: 'easy',
    question: {
      en: 'What type of energy is stored in a stretched rubber band?',
      ta: 'நீட்டப்பட்ட ரப்பர் இசைவில் எந்த வகை ஆற்றல் சேமிக்கப்படுகிறது?',
    },
    options: {
      en: ['Kinetic Energy', 'Potential Energy', 'Chemical Energy', 'Thermal Energy'],
      ta: ['இயக்க ஆற்றல்', 'நிலை ஆற்றல்', 'வேதியியல் ஆற்றல்', 'வெப்ப ஆற்றல்'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'Elastic potential energy is stored in the stretched rubber band. It is converted to kinetic energy when the band is released.',
      ta: 'மீள்திறன் நிலை ஆற்றல் நீட்டப்பட்ட ரப்பர் இசைவில் சேமிக்கப்படுகிறது.',
    },
    marks: 4,
    examType: 'Both',
  },
  // Chemistry - Basic Concepts
  {
    subject: 'Chemistry',
    topic: 'Basic Concepts',
    difficulty: 'easy',
    question: {
      en: 'What is the chemical formula for water?',
      ta: 'தண்ணீரின் வேதியியல் சூத்திரம் என்ன?',
    },
    options: {
      en: ['CO2', 'H2O', 'O2', 'NaCl'],
      ta: ['CO2', 'H2O', 'O2', 'NaCl'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A molecule of water is composed of two hydrogen atoms and one oxygen atom, hence the formula H2O.',
      ta: 'ஒரு தண்ணீர் மூலக்கூறு இரண்டு ஹைட்ரஜன் அணுக்கள் மற்றும் ஒரு ஆக்ஸிஜன் அணுவால் ஆனது.',
    },
    marks: 4,
    examType: 'Both',
  },
  {
    subject: 'Chemistry',
    topic: 'Acids, Bases & Salts',
    difficulty: 'easy',
    question: {
      en: 'What is the pH of a neutral solution?',
      ta: 'நடுநிலை கரைசலின் pH என்ன?',
    },
    options: {
      en: ['0', '7', '14', '1'],
      ta: ['0', '7', '14', '1'],
    },
    correctAnswer: 1,
    explanation: {
      en: 'A pH of 7 is considered neutral. Values below 7 are acidic, and values above 7 are alkaline (basic).',
      ta: '7 என்ற pH நடுநிலையாக கருதப்படுகிறது. 7க்கு கீழே உள்ள மதிப்புகள் அமிலம், மேலே உள்ளவை காரம்.',
    },
    videoUrl: 'https://www.youtube.com/embed/LS67vS10O5Y',
    marks: 4,
    examType: 'Both',
  },
  // Biology - Cell Biology
  {
    subject: 'Biology',
    topic: 'Cell Biology',
    difficulty: 'easy',
    question: {
      en: 'What is the powerhouse of the cell?',
      ta: 'செல்லின் மின்நிலையம் எது?',
    },
    options: {
      en: ['Nucleus', 'Ribosome', 'Mitochondrion', 'Cell Wall'],
      ta: ['கரு', 'ரைபோசோம்', 'மைட்டோகாண்ட்ரியா', 'செல் சுவர்'],
    },
    correctAnswer: 2,
    explanation: {
      en: 'Mitochondria are responsible for generating most of the cell\'s supply of adenosine triphosphate (ATP), used as a source of chemical energy.',
      ta: 'மைட்டோகாண்ட்ரியா செல்லின் அடினோசின் டிரைபாஸ்பேட் (ATP) உற்பத்திக்கு பொறுப்பாகும்.',
    },
    videoUrl: 'https://www.youtube.com/embed/39HTpUG1MwQ',
    marks: 4,
    examType: 'NEET',
  },
  {
    subject: 'Biology',
    topic: 'Human Physiology',
    difficulty: 'medium',
    question: {
      en: 'Which component of blood is responsible for clotting?',
      ta: 'இரத்தத்தில் உறைதலுக்கு பொறுப்பான கூறு எது?',
    },
    options: {
      en: ['Red Blood Cells', 'White Blood Cells', 'Plasma', 'Platelets'],
      ta: ['சிவப்பு இரத்த அணுக்கள்', 'வெள்ளை இரத்த அணுக்கள்', 'பிளாஸ்மா', 'பிளேட்லெட்டுகள்'],
    },
    correctAnswer: 3,
    explanation: {
      en: 'Platelets, or thrombocytes, are small, colorless cell fragments in our blood that form clots and stop or prevent bleeding.',
      ta: 'பிளேட்லெட்டுகள் நமது இரத்தத்தில் உள்ள சிறிய செல் துண்டுகள் ஆகும், அவை உறைவை உருவாக்கி இரத்தப்போக்கை நிறுத்துகின்றன.',
    },
    marks: 4,
    examType: 'NEET',
  },
  // Maths
  {
    subject: 'Maths',
    topic: 'Algebra',
    difficulty: 'medium',
    question: {
      en: 'What is the value of x in the equation 2x + 5 = 15?',
      ta: '2x + 5 = 15 சமன்பாட்டில் x இன் மதிப்பு என்ன?',
    },
    options: {
      en: ['5', '10', '7.5', '2.5'],
      ta: ['5', '10', '7.5', '2.5'],
    },
    correctAnswer: 0,
    explanation: {
      en: 'Solving: 2x + 5 = 15, subtract 5 from both sides: 2x = 10, divide by 2: x = 5',
      ta: '2x + 5 = 15, இரு பக்கங்களிலும் 5 கழிக்க: 2x = 10, 2 ஆல் வகுக்க: x = 5',
    },
    marks: 4,
    examType: 'Both',
  },
];

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('Starting database seeding...');

    // Clear existing data
    console.log('Clearing existing data...');
    await User.deleteMany({});
    await School.deleteMany({});
    await Question.deleteMany({});

    // Create school
    console.log('Creating school...');
    const school = await School.create(schoolData);
    console.log(`School created: ${school.name}`);

    // Create users
    console.log('Creating users...');
    const users = await User.create(getUsersData(school._id as mongoose.Types.ObjectId));
    console.log(`Created ${users.length} users`);

    // Create questions
    console.log('Creating questions...');
    const questions = await Question.create(questionsData);
    console.log(`Created ${questions.length} questions`);

    console.log('\n✅ Database seeded successfully!');
    console.log('\n📊 Summary:');
    console.log(`- Schools: 1`);
    console.log(`- Users: ${users.length}`);
    console.log(`  - Admin: ${users.filter((u) => u.role === 'admin').length}`);
    console.log(`  - Teachers: ${users.filter((u) => u.role === 'teacher').length}`);
    console.log(`  - Students: ${users.filter((u) => u.role === 'student').length}`);
    console.log(`- Questions: ${questions.length}`);
    console.log(`  - Physics: ${questions.filter((q) => q.subject === 'Physics').length}`);
    console.log(`  - Chemistry: ${questions.filter((q) => q.subject === 'Chemistry').length}`);
    console.log(`  - Biology: ${questions.filter((q) => q.subject === 'Biology').length}`);
    console.log(`  - Maths: ${questions.filter((q) => q.subject === 'Maths').length}`);

    console.log('\n🔑 Demo Credentials:');
    console.log('Admin: admin@school.com / admin123');
    console.log('Teacher: teacher@school.com / teacher123');
    console.log('Student: student@school.com / student123');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
