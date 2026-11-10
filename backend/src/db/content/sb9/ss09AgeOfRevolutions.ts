// Tamil Nadu State Board, 9th Social Science, Unit 9 – History: The Age of Revolutions (புரட்சிகளின் காலம்).
// Book exercise questions (multiple choice, correct statement, assertion–reason, match the following)
// plus our own questions so that every section is covered at three levels.
// source = section or exercise and printed page of the English-medium book.

import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 127', answer: 0,
    en: { q: 'The first British colony in America was', options: ['Jamestown', 'New York', 'Philadelphia', 'Amsterdam'], explanation: 'Jamestown (1607) was the first British colony in America.' },
    ta: { q: 'அமெரிக்காவில் ஏற்படுத்தப்பட்ட முதல் ஆங்கிலேயக் காலனி', options: ['ஜேம்ஸ்டவுன்', 'நியூயார்க்', 'பிலடெல்பியா', 'ஆம்ஸ்டர்டாம்'], explanation: 'அமெரிக்காவில் இங்கிலாந்து நிறுவிய முதல் குடியேற்றம் ஜேம்ஸ்டவுன் (1607).' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.2, p. 127', answer: 0,
    en: { q: 'The pioneer of the French Revolution who fought on the side of Washington against the British was', options: ['Lafayette', 'Mirabeau', 'Napoleon', 'Danton'], explanation: 'Lafayette fought beside Washington up to Yorktown (1781) and later commanded the French National Guard.' },
    ta: { q: 'பிரெஞ்சுப் புரட்சியின் முன்னோடியாக, வாஷிங்டனுடன் கூட்டுச் சேர்ந்து ஆங்கிலேயருக்கு எதிராகப் போராடியவர்', options: ['லஃபாயெட்', 'மிராபு', 'நெப்போலியன்', 'டான்டன்'], explanation: 'லஃபாயெட் யார்க்டவுன் போர் (1781) வரை வாஷிங்டனுடன் சேர்ந்து போரிட்டார்; பின்னர் பிரெஞ்சுத் தேசியப் பாதுகாவலர் படைக்குத் தளபதியானார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 127', answer: 0,
    en: { q: 'Lafayette, Thomas Jefferson and Mirabeau wrote the', options: ['Declaration of Rights of Man and Citizen', 'Declaration of Independence', 'Declaration of Pilnitz', 'Human Rights Charter'], explanation: 'The Declaration of the Rights of Man and the Citizen, adopted by the National Assembly on 27 August 1789, was drafted by Lafayette, Jefferson and Mirabeau.' },
    ta: { q: 'லஃபாயெட், தாமஸ் ஜெபர்சன், மிராபு ஆகியோர் எழுதியது', options: ['மனிதன் மற்றும் குடிமகன் உரிமைகள் பற்றிய பிரகடனம்', 'சுதந்திரப் பிரகடனம்', 'பில்னிட்ஸ் பிரகடனம்', 'மனித உரிமை சாசனம்'], explanation: '1789 ஆகஸ்டு 27இல் தேசியச் சட்டமன்றம் ஏற்ற மனிதன், குடிமகன் உரிமைகள் பிரகடனத்தை லஃபாயெட், ஜெபர்சன், மிராபு ஆகியோர் வரைந்தனர்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 127', answer: 0,
    en: { q: 'The defeat of the British at ______ paved the way for the friendship between France and America.', options: ['Saratoga', 'Trenton', 'Pennsylvania', 'New York'], explanation: 'The British defeat at Saratoga led France and America to sign two treaties on 6 February 1778.' },
    ta: { q: '______ இல் ஆங்கிலேயரின் தோல்வி பிரான்சிற்கும் அமெரிக்காவிற்கும் இடையிலான நட்புக்கு வழிவகுத்தது.', options: ['சாரடோகா', 'டிரென்டன்', 'பென்சில்வேனியா', 'நியூயார்க்'], explanation: 'சாரடோகாவில் இங்கிலாந்துப் படைகள் தோற்றதால் 1778 பிப்ரவரி 6இல் பிரான்சும் அமெரிக்காவும் இரு உடன்படிக்கைகளில் கையெழுத்திட்டன.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.5, p. 127', answer: 0,
    en: { q: '______ was the symbol of “Royal Despotism” in France.', options: ['Prison of Bastille', 'Versailles Palace', 'Paris Commune', 'Estates General'], explanation: 'The Bastille prison stood for royal despotism; its storming on 14 July 1789 was the first great turning point of the revolution.' },
    ta: { q: 'பிரான்சில் அரச சர்வாதிகாரத்தின் சின்னமாக இருந்தது ______.', options: ['பாஸ்டில் சிறைச்சாலை', 'வெர்சேல்ஸ் அரண்மனை', 'பாரிஸ் கம்யூன்', 'ஸ்டேட்ஸ் ஜெனரல்'], explanation: 'பாஸ்டில் சிறை அரச சர்வாதிகாரத்தின் சின்னம்; 1789 ஜூலை 14இல் அதன் தகர்ப்பு புரட்சியின் முதல் பெரும் திருப்புமுனை.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.6, p. 127', answer: 0,
    en: { q: 'The forces of Austria and Prussia were defeated by the French Revolutionary forces at', options: ['Valmy', 'Verna', 'Versailles', 'Pilnitz'], explanation: 'In September 1792 the French won their first victory over the invading Austrians and Prussians at Valmy; this saved the Revolution.' },
    ta: { q: 'ஆஸ்திரியா மற்றும் பிரஷ்யாவின் படைகள் பிரெஞ்சுப் புரட்சியாளர் படைகளால் தோற்கடிக்கப்பட்ட போர்க்களம்', options: ['வால்மி', 'வெர்ணா', 'வெர்சேல்ஸ்', 'பில்னிட்ஸ்'], explanation: '1792 செப்டம்பரில் வால்மி போர்க்களத்தில் ஆஸ்திரிய, பிரஷ்யப் படைகளைப் பிரெஞ்சுப் படைகள் வென்றன; இவ்வெற்றி புரட்சியைக் காப்பாற்றியது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.7, p. 127', answer: 0,
    en: { q: 'Candide was written by', options: ['Voltaire', 'Rousseau', 'Montesquieu', 'Danton'], explanation: 'Candide was Voltaire’s most famous work; he was a prolific writer and a fierce critic of the Church.' },
    ta: { q: '‘கான்டீட்’ என்ற நூல் ______ ஆல் எழுதப்பட்டது.', options: ['வால்டேர்', 'ரூசோ', 'மாண்டெஸ்கியூ', 'டான்டன்'], explanation: 'கான்டீட் (Candide) வால்டேரின் மிகவும் புகழ்பெற்ற நூல்; அவர் திருச்சபையைக் கடுமையாக விமர்சித்தார்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.8, p. 127', answer: 0,
    en: { q: 'The moderate liberals who wanted to retain Louis XVI as a limited monarch were called', options: ['Girondins', 'Jacobins', 'Emigres', 'Royalists'], explanation: 'The moderate liberals were the Girondins; the hardcore republicans were the Jacobins.' },
    ta: { q: 'பதினாறாம் லூயியின் கீழ் குறைந்தபட்ச அதிகாரங்களைக் கொண்ட முடியாட்சியைத் தக்கவைத்துக்கொள்ள விரும்பிய மிதவாத தாராளவாதிகள்', options: ['ஜெரோண்டியர்', 'ஜேக்கோபியர்', 'குடியேறிகள்', 'அரச விசுவாசிகள்'], explanation: 'மிதவாதிகள் ஜெரோண்டியர் கட்சியினர்; தீவிரக் குடியரசுவாதிகள் ஜேக்கோபியர்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.9, p. 127', answer: 0,
    en: { q: 'The American War of Independence ended with the Peace of Paris in the year', options: ['1783', '1776', '1779', '1781'], explanation: 'Cornwallis surrendered at Yorktown in 1781; in 1783 the Peace of Paris was signed and Britain accepted American independence.' },
    ta: { q: '______ ஆம் ஆண்டில் பாரிஸ் அமைதி உடன்படிக்கையின்படி அமெரிக்க சுதந்திரப் போர் முடிவுக்கு வந்தது.', options: ['1783', '1776', '1779', '1781'], explanation: '1781இல் யார்க்டவுனில் காரன்வாலிஸ் சரணடைந்தார்; 1783இல் பாரிஸ் அமைதி உடன்படிக்கை கையெழுத்தானது.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.10, p. 127', answer: 0,
    en: { q: 'Thomas Paine’s famous pamphlet was', options: ['Common Sense', 'Rights of Man', 'Bill of Rights', 'Abolition of Slavery'], explanation: 'Common Sense (January 1776) attacked allegiance to the Crown and called for complete independence; over 100,000 copies sold quickly.' },
    ta: { q: 'தாமஸ் பெயின் எழுதிய புகழ்வாய்ந்த நூல்', options: ['இயல்பறிவு', 'மனித உரிமைகள்', 'உரிமைகள் மசோதா', 'அடிமைத்தனத்தை ஒழித்தல்'], explanation: '1776 ஜனவரியில் வெளியான ‘இயல்பறிவு’ (Common Sense) முழு விடுதலையைக் கோரியது; ஒரு லட்சத்துக்கும் மேற்பட்ட படிகள் விரைவில் விற்றன.' },
  },

  // ---------------------------------------------------------------- Medium
  {
    difficulty: 'medium', source: '§9.1, p. 114', answer: 0,
    en: { q: 'In 1620 the ship Mayflower took a batch of Puritans from Plymouth, England, to America, where they landed and called the place', options: ['New Plymouth', 'Jamestown', 'New Amsterdam', 'Massachusetts Bay'], explanation: 'The Puritans of the Mayflower landed in the north and called the place New Plymouth; John Winthrop’s group set up Massachusetts Bay Colony.' },
    ta: { q: '1620இல் மேபிளவர் கப்பலில் இங்கிலாந்தின் பிளைமவுத்திலிருந்து அமெரிக்கா வந்த பியூரிட்டானியர் தாங்கள் இறங்கிய இடத்தை அழைத்த பெயர்', options: ['புதிய பிளைமவுத்', 'ஜேம்ஸ்டவுன்', 'நியூ ஆம்ஸ்டர்டாம்', 'மாசாசூசட்ஸ் குடியேற்றம்'], explanation: 'மேபிளவர் கப்பலில் வந்த பியூரிட்டானியர் வட அமெரிக்காவில் இறங்கிய இடத்தைப் புதிய பிளைமவுத் என அழைத்தனர்; ஜான் வின்திராப் குழுவினர் மாசாசூசட்ஸ் குடியேற்றத்தை அமைத்தனர்.' },
  },
  {
    difficulty: 'medium', source: '§9.1, p. 115', answer: 0,
    en: { q: 'The Quakers, members of the Christian group called the Society of Friends, were founded in England by', options: ['George Fox', 'John Winthrop', 'William Penn', 'John Cabot'], explanation: 'George Fox founded the Society of Friends; Quakers are known for working for peace and opposing war, and Pennsylvania was named after the Quaker Penn.' },
    ta: { q: 'நண்பர்கள் குழாம் என்னும் கிறித்தவக் குழுவின் உறுப்பினர்களான குவேக்கர்களின் குழுவை இங்கிலாந்தில் நிறுவியவர்', options: ['ஜார்ஜ் பாக்ஸ்', 'ஜான் வின்திராப்', 'வில்லியம் பென்', 'ஜான் கேபட்'], explanation: 'நண்பர்கள் குழாமை நிறுவியவர் ஜார்ஜ் பாக்ஸ்; குவேக்கர்கள் அமைதிக்காகப் பாடுபட்டுப் போரை எதிர்த்தனர்; பென் என்ற குவேக்கரின் பெயரால் பென்சில்வேனியா அழைக்கப்பட்டது.' },
  },
  {
    difficulty: 'medium', source: '§9.1, p. 116', answer: 0,
    en: { q: 'The slogan ‘No taxation without representation’ came from the preamble of the', options: ['Sugar Act of 1764', 'Stamp Act of 1765', 'Quartering Act of 1765', 'Townshend Acts of 1767'], explanation: 'The Sugar Act of 1764 taxed molasses, wines, silks and coffee; its preamble provided the slogan ‘No taxation without representation’.' },
    ta: { q: '‘பிரதிநிதித்துவம் இல்லையேல் வரி இல்லை’ என்ற முழக்கம் உருவாகக் காரணமான சட்டத்தின் முகவுரை', options: ['1764ஆம் ஆண்டின் சர்க்கரைச் சட்டம்', '1765ஆம் ஆண்டின் முத்திரைச் சட்டம்', '1765ஆம் ஆண்டின் படைவீரர் தங்குமிடச் சட்டம்', '1767ஆம் ஆண்டின் டவுன்ஷெண்ட் சட்டங்கள்'], explanation: '1764ஆம் ஆண்டின் சர்க்கரைச் சட்டத்தின் முகவுரையே ‘பிரதிநிதித்துவம் இல்லையேல் வரி இல்லை’ எனும் முழக்கம் உருவாகக் காரணமாயிற்று.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 127', answer: 0,
    en: { q: 'Which Act insisted on the colonies repaying the debt only in gold or silver?', options: ['Currency Act', 'Sugar Act', 'Stamp Act', 'Quartering Act'], explanation: 'The Currency Act required the colonies to repay debts in gold or silver, a huge burden on the colonial economy.' },
    ta: { q: 'கடனைத் தங்கமாகவும் வெள்ளியாகவும் திரும்பச் செலுத்த வற்புறுத்திய சட்டம்', options: ['செலாவணிச் சட்டம்', 'சர்க்கரைச் சட்டம்', 'முத்திரைச் சட்டம்', 'படைவீரர் தங்குமிடச் சட்டம்'], explanation: 'செலாவணிச் சட்டம் கடனைக் காகிதப் பணமாக அல்லாமல் தங்கமாகவும் வெள்ளியாகவும் செலுத்த வற்புறுத்தியது; இது குடியேற்றப் பொருளாதாரத்திற்குப் பெரும் சுமையானது.' },
  },
  {
    difficulty: 'medium', source: '§9.1, p. 116', answer: 0,
    en: { q: 'In December 1773 a group of men disguised as Native Americans boarded the cargo vessels and threw the tea overboard. This is known as the', options: ['Boston Tea Party', 'Boston Massacre', 'Olive Branch Petition', 'Intolerable Acts'], explanation: 'The Boston Tea Party was done publicly before a sympathetic crowd; it was a challenge that led to war between the colonies and England.' },
    ta: { q: '1773 டிசம்பரில் அமெரிக்கப் பூர்வகுடிகளைப் போல் மாறுவேடம் பூண்ட சிலர் சரக்குக் கப்பல்களின் மேலேறி தேயிலையைக் கடலில் வீசிய நிகழ்வு', options: ['பாஸ்டன் தேநீர் விருந்து', 'பாஸ்டன் படுகொலை', 'ஆலிவ் கிளை விண்ணப்ப மனு', 'சகிக்க முடியாத சட்டங்கள்'], explanation: 'பாஸ்டன் தேநீர் விருந்து பெருங்கூட்டத்தின் முன் வெளிப்படையாக நடந்தது; இது குடியேற்றங்களுக்கும் இங்கிலாந்துக்கும் இடையே போருக்கு வழிவகுத்தது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.1, p. 127', answer: 0,
    en: { q: 'The Postmaster-General of the Postal Department set up by the Second Continental Congress was', options: ['Benjamin Franklin', 'Thomas Jefferson', 'John Adams', 'Richard Henry Lee'], explanation: 'The Second Continental Congress (10 May 1775) set up a Postal Department with Benjamin Franklin as Postmaster-General.' },
    ta: { q: 'இரண்டாம் கண்டங்கள் மாநாட்டால் அஞ்சல்துறை தலைமை அதிகாரியாக நியமிக்கப்பட்டவர்', options: ['பெஞ்சமின் பிராங்க்ளின்', 'தாமஸ் ஜெபர்சன்', 'ஜான் ஆடம்ஸ்', 'ரிச்சர்ட் ஹென்றி லீ'], explanation: 'இரண்டாம் கண்டங்கள் மாநாடு (1775 மே 10) அஞ்சல்துறையை நிறுவி பெஞ்சமின் பிராங்க்ளினை அதன் தலைமை அதிகாரியாக்கியது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 127', answer: 0,
    en: { q: 'The Battle of Bunker Hill, the first major battle of the American War of Independence, was fought on', options: ['17 June 1775', '5 September 1774', '4 July 1776', '19 October 1781'], explanation: 'The Battle of Bunker Hill was fought in Massachusetts on 17 June 1775; the British won on the third attempt with heavy losses.' },
    ta: { q: 'அமெரிக்க விடுதலைப் போரின் முதல் பெரும் போரான பங்கர் குன்றுப் போர் நடைபெற்ற நாள்', options: ['1775 ஜூன் 17', '1774 செப்டம்பர் 5', '1776 ஜூலை 4', '1781 அக்டோபர் 19'], explanation: 'பங்கர் குன்றுப் போர் 1775 ஜூன் 17 அன்று மாசாசூசட்சில் நடந்தது; மூன்றாவது முயற்சியில் பெரும் இழப்புடன் ஆங்கிலேயர் வென்றனர்.' },
  },
  {
    difficulty: 'medium', source: '§9.1, p. 118', answer: 0,
    en: { q: 'The Declaration of Independence, drafted by Thomas Jefferson, was adopted by the Congress on', options: ['4 July 1776', '7 June 1776', '2 July 1776', '6 February 1778'], explanation: 'Richard Henry Lee moved the resolution on 7 June 1776; the Declaration was adopted on 4 July 1776, celebrated as Independence Day.' },
    ta: { q: 'தாமஸ் ஜெபர்சன் வரைந்த சுதந்திரப் பிரகடனம் காங்கிரசால் ஏற்றுக்கொள்ளப்பட்ட நாள்', options: ['1776 ஜூலை 4', '1776 ஜூன் 7', '1776 ஜூலை 2', '1778 பிப்ரவரி 6'], explanation: '1776 ஜூன் 7இல் ரிச்சர்ட் ஹென்றி லீ தீர்மானம் கொண்டுவந்தார்; 1776 ஜூலை 4இல் சுதந்திரப் பிரகடனம் ஏற்கப்பட்டது; அந்நாள் சுதந்திர தினமாகக் கொண்டாடப்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: '§9.2, p. 120', answer: 0,
    en: { q: 'The tax collected by the clergy in France, one-tenth of the annual produce or earnings of the common people, was called', options: ['tithe', 'taille', 'gabelle', 'corvee'], explanation: 'The clergy collected tithe; peasants also paid taille (land tax) and gabelle (salt tax) to the state and gave corvee (free labour).' },
    ta: { q: 'பிரான்சில் மதகுருமார்கள் பொதுமக்களின் வருமானத்தில் அல்லது விளைச்சலில் பத்தில் ஒரு பங்காக வசூலித்த வரி', options: ['டித் (தசம பாகம்)', 'டெய்லே (நிலவரி)', 'காபெல்லே (உப்பு வரி)', 'கார்வி (இலவச உழைப்பு)'], explanation: 'மதகுருமார்கள் டித் (தசம பாகம்) வசூலித்தனர்; விவசாயிகள் அரசுக்கு டெய்லே, காபெல்லே வரிகளையும் கார்வி எனும் இலவச உழைப்பையும் வழங்கினர்.' },
  },
  {
    difficulty: 'medium', source: '§9.2, p. 121', answer: 0,
    en: { q: '“Man is born free, but is everywhere in chains” is a famous line from', options: ['Rousseau’s Social Contract', 'Voltaire’s Candide', 'Montesquieu’s The Spirit of the Laws', 'Thomas Paine’s Common Sense'], explanation: 'Rousseau wrote this in his Social Contract; he argued that laws bind only when supported by the general will of the people.' },
    ta: { q: '“மனிதன் சுதந்திரமாகப் பிறக்கிறான்; ஆனால் எங்கும் சங்கிலிகளால் பிணைக்கப்பட்டுள்ளான்” என்ற கூற்று இடம்பெற்ற நூல்', options: ['ரூசோவின் சமூக ஒப்பந்தம்', 'வால்டேரின் கான்டீட்', 'மாண்டெஸ்கியூவின் சட்டத்தின் சாரம்', 'தாமஸ் பெயினின் இயல்பறிவு'], explanation: 'ரூசோ தமது ‘சமூக ஒப்பந்தம்’ நூலில் இதைக் கூறினார்; மக்களின் பொது விருப்பம் ஆதரிக்கும்போதுதான் சட்டங்கள் கட்டுப்படுத்தும் என வாதிட்டார்.' },
  },
  {
    difficulty: 'medium', source: '§9.2, p. 121', answer: 0,
    en: { q: 'The theory of separation of powers among the legislature, executive and judiciary was put forward by', options: ['Montesquieu', 'Voltaire', 'Rousseau', 'Diderot'], explanation: 'Montesquieu, author of The Persian Letters and The Spirit of the Laws, argued that liberty is best protected when the three organs are separate.' },
    ta: { q: 'சட்டம் இயற்றுதல், செயல்படுத்துதல், நீதித்துறை ஆகியவற்றின் அதிகாரப் பிரிவினைக் கோட்பாட்டை முன்வைத்தவர்', options: ['மாண்டெஸ்கியூ', 'வால்டேர்', 'ரூசோ', 'டிடேரோ'], explanation: '‘சட்டத்தின் சாரம்’ நூலை எழுதிய மாண்டெஸ்கியூ, மூன்று உறுப்புகளின் அதிகாரங்களும் தனித்திருந்தால்தான் தனிமனிதச் சுதந்திரம் காக்கப்படும் என்றார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.4, p. 127', answer: 0,
    en: { q: 'The leader of the National Assembly of France was', options: ['Mirabeau', 'Robespierre', 'Danton', 'Marat'], explanation: 'The National Assembly of moderate liberals, led by Mirabeau, wanted a constitution on the model of England and America.' },
    ta: { q: 'பிரான்சின் தேசியச் சட்டமன்றத்தின் தலைவர்', options: ['மிராபு', 'ரோபஸ்பியர்', 'டான்டன்', 'மாரட்'], explanation: 'இங்கிலாந்து, அமெரிக்கா போன்ற அரசியலமைப்பை விரும்பிய மிதவாதத் தேசியச் சட்டமன்றத்தின் தலைவர் மிராபு.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.6, p. 127', answer: 0,
    en: { q: 'Louis XVI was arrested with his family when he tried to escape from France at', options: ['Varennes', 'Versailles', 'Valmy', 'Pilnitz'], explanation: 'Disguised as a valet, Louis XVI fled to the border town of Varennes, was recognised by a postman, arrested and brought back to Paris.' },
    ta: { q: 'பதினாறாம் லூயி பிரான்சை விட்டுத் தப்பியோட முயன்றபோது தமது குடும்பத்துடன் கைது செய்யப்பட்ட நகர்', options: ['வெர்னேஸ்', 'வெர்சேல்ஸ்', 'வால்மி', 'பில்னிட்ஸ்'], explanation: 'சேவகனைப் போல் வேடமிட்டு எல்லை நகரான வெர்னேஸுக்குத் தப்பியோடிய லூயி அடையாளம் காணப்பட்டுக் கைது செய்யப்பட்டுப் பாரிஸுக்குக் கொண்டுவரப்பட்டார்.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise IV, p. 128', answer: 0,
    en: { q: 'Match: The Spirit of Laws –', options: ['Montesquieu', 'Louis XVI', 'Massachusetts Bay', 'July 4'], explanation: 'The Spirit of the Laws was written by Montesquieu. (Other pairs: John Winthrop – Massachusetts Bay, Turgot – French Finance Minister, Marie Antoinette – Louis XVI.)' },
    ta: { q: 'பொருத்துக: சட்டத்தின் சாரம் –', options: ['மாண்டெஸ்கியூ', 'பதினாறாம் லூயி', 'மாசாசூசட்ஸ் குடியேற்றம்', 'ஜூலை 4'], explanation: '‘சட்டத்தின் சாரம்’ மாண்டெஸ்கியூ எழுதியது. (பிற இணைகள்: ஜான் வின்திராப் – மாசாசூசட்ஸ், டர்காட் – பிரான்சின் நிதி அமைச்சர், மேரி அண்டாய்னெட் – பதினாறாம் லூயி.)' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise III.1, p. 127', answer: 0,
    en: { q: '(i) The Portuguese were the pioneers of naval expeditions.\n(ii) New Plymouth was named after the Quaker Penn.\n(iii) Quakers have the reputation of encouraging wars.\n(iv) The English changed the name of New Amsterdam to New York.', options: ['i & iv are correct', 'i & ii are correct', 'iii is correct', 'iv is correct'], explanation: 'The Portuguese (with the Spanish) pioneered explorations and the English renamed New Amsterdam as New York. Pennsylvania, not New Plymouth, was named after Penn, and Quakers opposed war.' },
    ta: { q: 'i) கடலாய்வுப் பயணங்களை மேற்கொண்டதில் போர்த்துகீசியர் முன்னோடியாவர்.\nii) பென் என்ற குவேக்கரால் புதிய பிளைமவுத் பெயரிடப்பட்டது.\niii) குவேக்கர்கள் போருக்கு ஆதரவாக இருந்தமைக்கு நற்பெயர் பெற்றனர்.\niv) ஆங்கிலேயர்கள் நியூ ஆம்ஸ்டர்டாமை நியூயார்க் எனப் பெயர் மாற்றம் செய்தனர்.', options: ['i) மற்றும் iv) சரியானவை', 'i) மற்றும் ii) சரியானவை', 'iii) சரி', 'iv) சரி'], explanation: 'போர்த்துகீசியர் முன்னோடிகள்; நியூ ஆம்ஸ்டர்டாம் நியூயார்க் ஆனது. பென்னின் பெயரால் அழைக்கப்பட்டது பென்சில்வேனியா; குவேக்கர்கள் போரை எதிர்த்தனர்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.2, p. 128', answer: 0,
    en: { q: '(i) The American War of Independence was as much a civil war as a war against the British.\n(ii) The British forces emerged victorious in York Town.\n(iii) The nobles in France were supportive of the rising middle class.\n(iv) The British Parliament repealed the Townshend Act except the tax on paper.', options: ['i is correct', 'iii is correct', 'iv is correct', 'i & iv are correct'], explanation: 'Cornwallis surrendered at Yorktown, the nobles of the sword were against the rising middle class, and the tax retained after repealing the Townshend Acts was on tea, not paper.' },
    ta: { q: 'i) அமெரிக்க விடுதலைப் போர் இங்கிலாந்துடன் செய்யப்பட்ட போராக மட்டுமல்லாது உள்நாட்டுப் போராகவும் அமைந்தது.\nii) ஆங்கிலேயப் படைகள் யார்க்டவுனில் வெற்றிபெற்றன.\niii) வளர்ந்துவரும் நடுத்தர வர்க்கத்தினரைப் பிரெஞ்சு பிரபுக்கள் ஆதரித்தனர்.\niv) ஆங்கிலேய நாடாளுமன்றம் காகிதத்தின் மீதான வரி நீங்கலாக ஏனைய டவுன்ஷெண்ட் சட்டங்களை ரத்து செய்தது.', options: ['i) சரி', 'iii) சரி', 'iv) சரி', 'i) மற்றும் iv) சரியானவை'], explanation: 'யார்க்டவுனில் காரன்வாலிஸ் சரணடைந்தார்; பாரம்பரியப் பிரபுக்கள் நடுத்தர வர்க்கத்தை எதிர்த்தனர்; டவுன்ஷெண்ட் சட்டங்கள் ரத்தானபோது தக்கவைக்கப்பட்டது தேயிலை வரி, காகித வரி அல்ல.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.3, p. 128', answer: 0,
    en: { q: 'Assertion (A): Merchants of Boston boycotted British goods.\nReason (R): The British Finance Minister introduced new duties on imports into the American colonies.', options: AR_EN, explanation: 'Charles Townshend’s 1767 duties on glass, paper, paint, lead and tea led the merchants of Boston to boycott British goods, so R explains A.' },
    ta: { q: 'கூற்று: ஆங்கிலேயப் பொருள்களைப் பாஸ்டன் வணிகர்கள் புறக்கணித்தனர்.\nகாரணம்: ஆங்கிலேய நிதி அமைச்சர், அமெரிக்கக் காலனிகளில் இறக்குமதி செய்யப்பட்ட பொருள்கள் மீது புதிய வரி அறிமுகப்படுத்தினார்.', options: AR_TA, explanation: '1767இல் சார்லஸ் டவுன்ஷெண்ட் கண்ணாடி, காகிதம், வண்ணம், ஈயம், தேயிலை மீது விதித்த வரிகளால் பாஸ்டன் வணிகர்கள் ஆங்கிலேயப் பொருள்களைப் புறக்கணித்தனர்; காரணம் கூற்றை விளக்குகிறது.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.4, p. 128', answer: 2,
    en: { q: 'Assertion (A): There was a massive peasant revolt in the Vendee against conscriptions.\nReason (R): The peasants, as supporters of the king, did not like to fight against him.', options: AR_EN, explanation: 'The Vendee revolt arose partly from the peasants’ unwillingness to accept conscription, so A is true; the book gives no such reason about loyalty to the king, so R is false.' },
    ta: { q: 'கூற்று: கட்டாய இராணுவச் சேவைக்கு எதிராக வெண்டி என்னுமிடத்தில் விவசாயிகள் ஒரு பெரும் புரட்சி செய்தனர்.\nகாரணம்: அரசரின் ஆதரவாளர்களான விவசாயிகள் அவருக்கெதிராகப் போரிட விரும்பவில்லை.', options: AR_TA, explanation: 'கட்டாய இராணுவச் சேவையை ஏற்க விவசாயிகள் விரும்பாததால் வெண்டி கிளர்ச்சி நடந்தது; கூற்று சரி. அரசர் மீதான விசுவாசம் காரணம் எனப் பாடநூல் கூறவில்லை; காரணம் தவறு.' },
  },
  {
    difficulty: 'hard', source: '§9.2, p. 120', answer: 0,
    en: { q: 'Which of the following was NOT a reason for the bankruptcy of the French treasury on the eve of the Revolution?', options: ['The Battle of Valmy', 'Involvement in the Seven Years War that ended in defeat', 'French participation in the American War of Independence', 'The luxurious lifestyle of the royalty and nobles at Versailles'], explanation: 'The treasury was emptied by the Seven Years War, the American War and the luxury of Versailles; Valmy (1792) was a French victory during the Revolution.' },
    ta: { q: 'புரட்சிக்கு முன்னர் பிரெஞ்சுக் கருவூலம் திவாலானதற்குக் காரணமாக இல்லாதது எது?', options: ['வால்மி போர்', 'தோல்வியில் முடிந்த ஏழாண்டுப் போரில் ஈடுபட்டது', 'அமெரிக்க விடுதலைப் போரில் பிரான்ஸ் பங்கேற்றது', 'வெர்சேல்ஸ் அரசவையில் அரச குடும்பம், பிரபுக்களின் ஆடம்பர வாழ்க்கை'], explanation: 'ஏழாண்டுப் போர், அமெரிக்க விடுதலைப் போர், வெர்சேல்ஸ் ஆடம்பரம் ஆகியவை கருவூலத்தைக் காலியாக்கின; வால்மி (1792) புரட்சியின்போது பிரான்ஸ் பெற்ற வெற்றி.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise II.5, p. 127', answer: 0,
    en: { q: 'Who was sent to the guillotine for organising a Festival of Liberty and Reason, causing the first split in the Jacobin party?', options: ['Herbert', 'Danton', 'Marat', 'Mirabeau'], explanation: 'Herbert and his supporters organised the festival in Notre Dame Cathedral; Robespierre, conservative in religion, sent them to the guillotine.' },
    ta: { q: 'சுதந்திரத்திற்கும் பகுத்தறிவிற்கும் பெருவிழா நடத்தியதால் கில்லட்டினால் கொல்லப்பட்டு, ஜேக்கோபியர் கட்சியில் முதல் பிளவுக்குக் காரணமானவர்', options: ['ஹெர்பர்ட்', 'டான்டன்', 'மாரட்', 'மிராபு'], explanation: 'நோட்ரே டாம் தேவாலயத்தில் இவ்விழாவை நடத்திய ஹெர்பர்ட்டையும் ஆதரவாளர்களையும், மதவிஷயங்களில் பழமைவாதியான ரோபஸ்பியர் கில்லட்டினுக்கு அனுப்பினார்.' },
  },
  {
    difficulty: 'hard', source: '§9.2, p. 124', answer: 0,
    en: { q: 'The Reign of Terror in France began after the Convention passed which law in September 1793?', options: ['The Law of Suspects', 'The Intolerable Acts', 'The Constitution of 1791', 'The Republican Calendar'], explanation: 'The Law of Suspects allowed the arrest of anyone suspected of opposing the revolution; the trial and execution of twenty-two Girondin deputies began the Reign of Terror.' },
    ta: { q: '1793 செப்டம்பரில் தேசியப் பேரவை இயற்றிய எந்தச் சட்டத்தைத் தொடர்ந்து பிரான்சில் பயங்கரவாத ஆட்சி தொடங்கியது?', options: ['சந்தேகத்திற்குரியோர் சட்டம்', 'சகிக்க முடியாத சட்டங்கள்', '1791ஆம் ஆண்டின் அரசியலமைப்பு', 'குடியரசு நாட்காட்டி'], explanation: 'புரட்சியை எதிர்ப்பதாகச் சந்தேகிக்கப்பட்டவர்களைக் கைது செய்ய இச்சட்டம் அனுமதித்தது; இருபத்திரண்டு ஜெரோண்டியர் உறுப்பினர்களுக்கு மரண தண்டனை விதிக்கப்பட்டதுடன் பயங்கரவாத ஆட்சி தொடங்கியது.' },
  },
  {
    difficulty: 'hard', source: '§9.2, p. 124', answer: 0,
    en: { q: 'Arrange the stages after the fall of Robespierre in the correct order.', options: ['Directory → Consulate → Napoleon crowned Emperor', 'Consulate → Directory → Napoleon crowned Emperor', 'Napoleon crowned Emperor → Directory → Consulate', 'Directory → Napoleon crowned Emperor → Consulate'], explanation: 'In October 1795 a five-member Directory took power; it was replaced by the Consulate with Napoleon as First Consul, who later crowned himself Emperor.' },
    ta: { q: 'ரோபஸ்பியரின் வீழ்ச்சிக்குப் பின் ஏற்பட்ட மாற்றங்களைச் சரியான வரிசையில் அமைக்கவும்.', options: ['டைரக்டரி → கான்சலேட் → நெப்போலியன் பேரரசராக முடிசூட்டல்', 'கான்சலேட் → டைரக்டரி → நெப்போலியன் பேரரசராக முடிசூட்டல்', 'நெப்போலியன் பேரரசராக முடிசூட்டல் → டைரக்டரி → கான்சலேட்', 'டைரக்டரி → நெப்போலியன் பேரரசராக முடிசூட்டல் → கான்சலேட்'], explanation: '1795 அக்டோபரில் ஐவர் கொண்ட டைரக்டரி ஆட்சிக்கு வந்தது; அதை நெப்போலியனை முதல் கான்சலாகக் கொண்ட கான்சலேட் மாற்றியது; பின்னர் நெப்போலியன் தம்மைப் பேரரசராக முடிசூட்டிக்கொண்டார்.' },
  },
];
