// Tamil Nadu State Board, 9th Science, Unit 25 – Visual Communication: LibreOffice Impress (லிப்ரேஆபீஸ் இம்ப்ரஸ்).
// source = section / exercise and printed page of the English-medium book.
import { BankQuestion, AR_EN, AR_TA } from './types';

export const QUESTIONS: BankQuestion[] = [
  // ------------------------------------------------------------------ Easy
  {
    difficulty: 'easy', source: 'Book exercise I.1, p. 308', answer: 0,
    en: { q: '_____ is a structured delivery of information.', options: ['Presentation', 'Slide Show', 'Page', 'WordArt'], explanation: 'A presentation is a structured, systematic display of information along with graphics, movies and sound.' },
    ta: { q: '_____ என்பது தகவல்களின் கட்டமைக்கப்பட்ட விநியோகமாகும்.', options: ['Presentation (நிகழ்த்துதல்)', 'SlideShow', 'Page', 'WordArt'], explanation: 'நிகழ்த்துதல் என்பது வரைகலை, திரைப்படங்கள், ஒலியுடன் தகவல்களை முறையாகக் காண்பிப்பதாகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.3, p. 308', answer: 0,
    en: { q: 'A presentation consists of many _____.', options: ['slides', 'pages', 'placeholders', 'messages'], explanation: 'A LibreOffice Impress presentation is a combination of many slides.' },
    ta: { q: 'ஒரு விளக்கக்காட்சி என்பது பல _____ ஐ உள்ளடக்கியது.', options: ['Slide (சில்லுகள்)', 'Page', 'placeholders', 'messages'], explanation: 'லிப்ரேஆபீஸ் இம்ப்ரஸ் நிகழ்த்துதல் பல சில்லுகளின் தொகுப்பாகும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise I.4, p. 308', answer: 0,
    en: { q: 'Which key should be pressed to run a slide show from the first slide?', options: ['F5', 'F1', 'Tab', 'F2'], explanation: 'Pressing F5 starts the slide show from the first slide.' },
    ta: { q: 'விசைப்பலகையில் எந்த விசையைப் பயன்படுத்தினால் Slide Show வைப் பார்க்க முடியும்?', options: ['F5', 'F1', 'Tab', 'F12'], explanation: 'F5 விசையை அழுத்தினால் முதல் சில்லிலிருந்து slide show தொடங்கும்.' },
  },
  {
    difficulty: 'easy', source: 'Book exercise II.1, p. 308', answer: 0,
    en: { q: 'LibreOffice Impress is a software used to', options: ['create presentations with text effects, graphics and sound', 'calculate data in rows and columns', 'browse websites', 'scan for computer viruses'], explanation: 'LibreOffice Impress is a user friendly application to create interesting, effective presentations.' },
    ta: { q: 'லிப்ரே ஆபீஸ் இம்ப்ரஸ் என்ற மென்பொருள் பயன்படுவது', options: ['உரை, வரைகலை, ஒலியுடன் நிகழ்த்துதலை உருவாக்க', 'வரிசை, நிரல்களில் தரவுகளைக் கணக்கிட', 'இணையதளங்களைப் பார்வையிட', 'கணினி வைரஸ்களைக் கண்டறிய'], explanation: 'லிப்ரே ஆபீஸ் இம்ப்ரஸ் சுவாரஸ்யமான நிகழ்த்துதலை உருவாக்கும் பயனர் நட்பு மென்பொருள்.' },
  },
  {
    difficulty: 'easy', source: 'Introduction, p. 302', answer: 0,
    en: { q: 'The process of creating movement for an object is called', options: ['animation', 'transition', 'formatting', 'placeholder'], explanation: 'Animation is the process of creating movement for an object.' },
    ta: { q: 'ஒரு பொருளுக்கு இயக்கத்தை உருவாக்கும் செயல்முறை', options: ['அனிமேஷன் (இயங்கு படம்)', 'சில்லு மாற்று விளைவு', 'வடிவமைத்தல்', 'இடம் ஒதுக்கி'], explanation: 'அனிமேஷன் என்பது ஒரு பொருளுக்கு இயக்கத்தை உருவாக்கும் செயல்முறை.' },
  },
  {
    difficulty: 'easy', source: '§25.1.1, p. 302', answer: 0,
    en: { q: 'To create a blank presentation, after clicking LibreOffice Impress you click the New option from the', options: ['File menu', 'Slide menu', 'Insert menu', 'View menu'], explanation: 'File → New → Presentation → Blank Presentation creates a blank presentation.' },
    ta: { q: 'புதிய நிகழ்த்துதலை உருவாக்க LibreOffice Impress-ஐ கிளிக் செய்த பின் New என்பதைத் தேர்வு செய்வது', options: ['File menu', 'Slide menu', 'Insert menu', 'View menu'], explanation: 'File → New → Presentation → Blank Presentation மூலம் புதிய நிகழ்த்துதல் உருவாகிறது.' },
  },
  {
    difficulty: 'easy', source: '§25.1.4, p. 304', answer: 0,
    en: { q: 'To insert a picture in a slide, choose', options: ['Insert → Image', 'Slide → New Slide', 'File → Open', 'View → Slide Transition'], explanation: 'Choose Insert → Image or click the Insert Image icon on the Standard Toolbar.' },
    ta: { q: 'சில்லில் ஒரு படத்தைச் சேர்க்கத் தேர்வு செய்வது', options: ['Insert → Image', 'Slide → New Slide', 'File → Open', 'View → Slide Transition'], explanation: 'Insert → Image அல்லது Standard Toolbar-இல் உள்ள Insert Image குறும்படத்தைக் கிளிக் செய்ய வேண்டும்.' },
  },
  {
    difficulty: 'easy', source: '§25.1.5, p. 305', answer: 0,
    en: { q: 'A _____ is used to add text anywhere on a slide.', options: ['text box', 'slide show', 'transition', 'gallery'], explanation: 'A text box lets you add text anywhere on the slide.' },
    ta: { q: 'சில்லில் எந்த இடத்திலும் உரையைச் சேர்க்க _____ பயன்படுகிறது.', options: ['உரைப்பெட்டி (Text Box)', 'Slide Show', 'சில்லு மாற்று விளைவு', 'Gallery'], explanation: 'உரைப்பெட்டி மூலம் சில்லின் எந்த இடத்திலும் உரையைச் சேர்க்கலாம்.' },
  },
  {
    difficulty: 'easy', source: '§25.1.10, p. 307', answer: 0,
    en: { q: 'When you click File → Save for a new presentation, which dialog box appears?', options: ['Save As', 'Open', 'Insert audio/video', 'Custom Animation'], explanation: 'The Save As dialog box appears; type the file name and click Save.' },
    ta: { q: 'புதிய நிகழ்த்துதலுக்கு File → Save கிளிக் செய்யும்போது தோன்றும் உரையாடல் பெட்டி', options: ['Save As', 'Open', 'Insert audio/video', 'Custom Animation'], explanation: 'Save As உரையாடல் பெட்டி தோன்றும்; File name தட்டச்சு செய்து Save கிளிக் செய்யலாம்.' },
  },
  {
    difficulty: 'easy', source: '§25.1.14, p. 308', answer: 0,
    en: { q: 'To close LibreOffice Impress completely, click File menu and then', options: ['Exit LibreOffice Impress', 'Close', 'Save', 'New'], explanation: 'File → Exit LibreOffice Impress closes the application; File → Close closes only the presentation.' },
    ta: { q: 'லிப்ரேஆபீஸ் இம்ப்ரஸிலிருந்து முழுமையாக வெளியேற File Menu-க்குப் பின் கிளிக் செய்வது', options: ['Exit LibreOffice Impress', 'Close', 'Save', 'New'], explanation: 'File → Exit LibreOffice Impress மென்பொருளிலிருந்து வெளியேற்றும்; Close நிகழ்த்துதலை மட்டும் மூடும்.' },
  },
  {
    difficulty: 'easy', source: '§25.1.13, p. 308', answer: 0,
    en: { q: 'To open an existing presentation, click the File menu and choose', options: ['Open', 'New', 'Exit', 'Save As'], explanation: 'File → Open shows the Open dialog box; select the file and click Open.' },
    ta: { q: 'ஏற்கனவே சேமிக்கப்பட்ட நிகழ்த்துதலைத் திறக்க File Menu-வில் தேர்வு செய்வது', options: ['Open', 'New', 'Exit', 'Save As'], explanation: 'File → Open கிளிக் செய்தால் ஒரு உரையாடல் பெட்டி தோன்றும்; கோப்பைத் தேர்வு செய்து Open கிளிக் செய்யவும்.' },
  },

  // ------------------------------------------------------------------ Medium
  {
    difficulty: 'medium', source: 'Book exercise I.2, p. 308', answer: 0,
    en: { q: 'The slides are grouped together in a sequence to form a _____.', options: ['slide show', 'chart', 'page', 'message'], explanation: 'Slides displayed in sequence form a presentation, viewed as a slide show.' },
    ta: { q: 'Slide களை தொகுத்து முறைப்படுத்தி காட்சிப்படுத்துவது _____', options: ['Slideshow', 'Charts', 'Page', 'Messages'], explanation: 'வரிசையாகக் காட்டப்படும் சில்லுகள் slide show-வாக அமைகின்றன.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise I.5, p. 308', answer: 0,
    en: { q: '_____ is used to insert attractive text in a slide.', options: ['WordArt', 'Slide Show', 'Text', 'Header and Footer'], explanation: 'WordArt inserts decorative, attractive text into a slide.' },
    ta: { q: '_____ என்பது கவரும் விதமான உரைகளை சில்லில் உருவாக்கப் பயன்படுகிறது.', options: ['WordArt', 'Slideshow', 'Text', 'Header and Footer'], explanation: 'WordArt கவர்ச்சிகரமான அலங்கார உரைகளைச் சில்லில் சேர்க்கப் பயன்படுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.2, p. 308', answer: 0,
    en: { q: 'Which best describes a presentation?', options: ['A systematic display of information with graphics, movies and sound shown together on screen', 'A single printed page of text', 'A spreadsheet of numbers', 'A list of computer files'], explanation: 'A presentation systematically displays information along with graphics, movies and sound on screen.' },
    ta: { q: 'நிகழ்த்துதல் என்பதை மிகச் சரியாக விவரிப்பது', options: ['வரைகலை, திரைப்படங்கள், ஒலியுடன் தகவல்களைத் திரையில் ஒன்றாக முறையாகக் காண்பித்தல்', 'அச்சிடப்பட்ட ஒரு பக்க உரை', 'எண்களின் விரிதாள்', 'கணினிக் கோப்புகளின் பட்டியல்'], explanation: 'நிகழ்த்துதல் வரைகலை, திரைப்படம், ஒலியுடன் தகவல்களைத் திரையில் முறையாகக் காட்டுகிறது.' },
  },
  {
    difficulty: 'medium', source: 'Book exercise II.3, p. 308', answer: 0,
    en: { q: 'In LibreOffice Impress, a slide is', options: ['a single screen of the presentation; slides shown in sequence form the presentation', 'the software used to draw pictures', 'a menu that saves files', 'an audio clip in the gallery'], explanation: 'A presentation is a combination of many slides; when displayed in sequence they form the presentation.' },
    ta: { q: 'லிப்ரேஆபீஸ் இம்ப்ரஸில் சில்லு என்பது', options: ['நிகழ்த்துதலின் ஒரு திரை; வரிசையாகக் காட்டப்படும் சில்லுகளே நிகழ்த்துதல்', 'படம் வரையும் மென்பொருள்', 'கோப்புகளைச் சேமிக்கும் மெனு', 'Gallery-யிலுள்ள ஒலிக் கோப்பு'], explanation: 'நிகழ்த்துதல் பல சில்லுகளின் தொகுப்பு; வரிசையாகக் காட்டப்படும்போது நிகழ்த்துதல் உருவாகிறது.' },
  },
  {
    difficulty: 'medium', source: '§25.1.2, p. 303', answer: 0,
    en: { q: 'When you create a blank presentation, the first slide appears with', options: ['two placeholders', 'four text boxes', 'one picture', 'no space for text'], explanation: 'A new blank presentation shows a slide with two placeholders; click inside one to type text.' },
    ta: { q: 'புதிய நிகழ்த்துதலை உருவாக்கும்போது தோன்றும் முதல் சில்லில் இருப்பவை', options: ['இரண்டு இடம் ஒதுக்கிகள் (placeholders)', 'நான்கு உரைப்பெட்டிகள்', 'ஒரு படம்', 'உரைக்கான இடமே இல்லை'], explanation: 'புதிய சில்லில் இரண்டு placeholders தோன்றும்; அவற்றுள் கிளிக் செய்து உரையைத் தட்டச்சு செய்யலாம்.' },
  },
  {
    difficulty: 'medium', source: '§25.1.3, p. 304', answer: 0,
    en: { q: 'To insert a new slide, you click', options: ['Slide menu → New Slide, then choose a layout', 'File menu → New Slide', 'Insert menu → Text Box', 'View menu → Slide Show'], explanation: 'Slide → New Slide inserts a slide; then choose the layout you want, e.g. Blank.' },
    ta: { q: 'புதிய சில்லைச் சேர்க்க கிளிக் செய்வது', options: ['Slide menu → New Slide, பின் layout தேர்வு', 'File menu → New Slide', 'Insert menu → Text Box', 'View menu → Slide Show'], explanation: 'Slide → New Slide மூலம் சில்லைச் சேர்த்து, Blank போன்ற layout-ஐத் தேர்வு செய்யலாம்.' },
  },
  {
    difficulty: 'medium', source: '§25.1.6, p. 306', answer: 0,
    en: { q: 'To insert an audio or video clip into a slide, you use', options: ['Insert menu → Audio or Video', 'Slide menu → Delete Slide', 'File menu → Exit', 'View menu → Slide Transition'], explanation: 'Insert → Audio or Video opens the Insert Audio/Video dialog box to choose the file.' },
    ta: { q: 'சில்லில் ஒலி அல்லது காட்சிக் கோப்பைச் சேர்க்கப் பயன்படுத்துவது', options: ['Insert menu → Audio or Video', 'Slide menu → Delete Slide', 'File menu → Exit', 'View menu → Slide Transition'], explanation: 'Insert → Audio or Video கிளிக் செய்தால் உரையாடல் பெட்டி தோன்றி கோப்பைத் தேர்வு செய்யலாம்.' },
  },
  {
    difficulty: 'medium', source: '§25.1.9, p. 307', answer: 0,
    en: { q: 'To delete a slide, you select the slide and then click', options: ['Slide menu → Delete Slide', 'File menu → Close', 'Insert menu → Image', 'Edit menu → Undo'], explanation: 'Select the slide, click the Slide menu and choose Delete Slide.' },
    ta: { q: 'சில்லை நீக்க, சில்லைத் தேர்வு செய்த பின் கிளிக் செய்வது', options: ['Slide menu → Delete Slide', 'File menu → Close', 'Insert menu → Image', 'Edit menu → Undo'], explanation: 'நீக்க வேண்டிய சில்லைத் தேர்வு செய்து Slide மெனுவில் Delete Slide தேர்ந்தெடுக்கவும்.' },
  },
  {
    difficulty: 'medium', source: '§25.1.13, p. 308', answer: 0,
    en: { q: 'Besides File → Open, a recently used presentation can be opened directly from', options: ['the Recent Documents list', 'the Slide Transition panel', 'the Custom Animation section', 'the Insert Image icon'], explanation: 'You can open a file directly by clicking its name in the Recent Documents list.' },
    ta: { q: 'File → Open தவிர, சமீபத்தில் பயன்படுத்திய நிகழ்த்துதலை நேரடியாகத் திறக்க உதவுவது', options: ['Recent Documents பட்டியல்', 'Slide Transition பகுதி', 'Custom Animation பகுதி', 'Insert Image குறும்படம்'], explanation: 'File → Recent Documents பட்டியலில் கோப்பின் பெயரைத் தெரிவு செய்து நேரடியாகத் திறக்கலாம்.' },
  },
  {
    difficulty: 'medium', source: 'Introduction, p. 302', answer: 0,
    en: { q: 'Which is the correct order of steps to start LibreOffice Impress?', options: ['Start → All Programs → LibreOffice Impress → LibreOffice Impress option', 'All Programs → Start → File → New', 'File → Start → Slide Show → F5', 'Insert → Start → All Programs → Open'], explanation: 'Click Start, All Programs, LibreOffice Impress and then the LibreOffice Impress option.' },
    ta: { q: 'லிப்ரே ஆபீஸ் இம்ப்ரஸைத் தொடங்கும் சரியான படிவரிசை', options: ['Start → All Programs → LibreOffice Impress → LibreOffice Impress விருப்பம்', 'All Programs → Start → File → New', 'File → Start → Slide Show → F5', 'Insert → Start → All Programs → Open'], explanation: 'Start பொத்தான், All Programs, லிப்ரே ஆபீஸ் இம்ப்ரஸ், பின் LibreOffice Impress விருப்பத்தைச் சொடுக்கவும்.' },
  },

  // ------------------------------------------------------------------ Hard
  {
    difficulty: 'hard', source: 'Book exercise II.4, p. 308', answer: 0,
    en: { q: 'Which sequence correctly views a slide show from the beginning using the menu?', options: ['Click the Slide Show tab → click From Beginning (Start from First Slide)', 'Click File → Save → Slide Show', 'Click Insert → Text Box → From Beginning', 'Click Slide → Delete Slide → From Beginning'], explanation: 'Click the Slide Show tab and choose From Beginning; pressing F5 does the same.' },
    ta: { q: 'மெனு மூலம் தொடக்கத்திலிருந்து Slide Show பார்க்கும் சரியான வரிசை', options: ['Slide Show-ஐ கிளிக் செய்க → From Beginning (Start from First Slide) கிளிக் செய்க', 'File → Save → Slide Show', 'Insert → Text Box → From Beginning', 'Slide → Delete Slide → From Beginning'], explanation: 'Slide Show-ஐ கிளிக் செய்து From Beginning தேர்வு செய்யவும்; F5 விசையும் இதையே செய்யும்.' },
  },
  {
    difficulty: 'hard', source: '§25.1.7–25.1.8, p. 306', answer: 0,
    en: { q: 'How does a slide transition differ from an animation?', options: ['A transition is the effect when one slide gives way to the next; an animation is applied to individual elements within a slide.', 'A transition moves a single bullet point; an animation changes the whole slide.', 'Both are the same and are applied only to pictures.', 'A transition adds sound; an animation deletes slides.'], explanation: 'Transitions (e.g. Roll down from top, Fly in from left) act between slides; animations act on a title, chart, shape or bullet point within one slide.' },
    ta: { q: 'சில்லு மாற்று விளைவு (transition) இயங்கு படத்திலிருந்து (animation) எவ்வாறு வேறுபடுகிறது?', options: ['ஒரு சில்லிலிருந்து அடுத்த சில்லுக்கு மாறும்போது நிகழ்வது மாற்று விளைவு; ஒரு சில்லிலுள்ள தனித்தனி பொருட்களுக்குக் கொடுப்பது இயங்கு படம்.', 'மாற்று விளைவு ஒரு புள்ளியை மட்டும் நகர்த்தும்; இயங்கு படம் முழுச் சில்லையும் மாற்றும்.', 'இரண்டும் ஒன்றே; படங்களுக்கு மட்டுமே பொருந்தும்.', 'மாற்று விளைவு ஒலியைச் சேர்க்கும்; இயங்கு படம் சில்லுகளை நீக்கும்.'], explanation: 'மாற்று விளைவு சில்லுகளுக்கிடையே நிகழ்கிறது; இயங்கு படம் ஒரு சில்லிலுள்ள தலைப்பு, படம், வரைபடம், புள்ளிக்குக் கொடுக்கப்படுகிறது.' },
  },
  {
    difficulty: 'hard', source: '§25.1.8, p. 306', answer: 0,
    en: { q: 'To make only a picture on a slide fly in, you should', options: ['select the picture, open Custom Animation in the Sidebar and choose an effect', 'choose View → Slide Transition and apply it to all slides', 'press F5 twice', 'click Slide → New Slide and choose Blank'], explanation: 'Animations are applied to individual objects: select the object, open Custom Animation from the Sidebar and pick an effect.' },
    ta: { q: 'ஒரு சில்லிலுள்ள படம் மட்டும் பறந்து வருமாறு செய்ய', options: ['படத்தைத் தேர்வு செய்து, Sidebar-இல் Custom Animation-ஐத் திறந்து விளைவைத் தேர்வு செய்ய வேண்டும்', 'View → Slide Transition தேர்வு செய்து அனைத்துச் சில்லுகளுக்கும் பொருத்த வேண்டும்', 'F5 விசையை இருமுறை அழுத்த வேண்டும்', 'Slide → New Slide கிளிக் செய்து Blank தேர்வு செய்ய வேண்டும்'], explanation: 'இயங்கு படம் தனிப் பொருளுக்குக் கொடுக்கப்படுகிறது: பொருளைத் தேர்வு செய்து Custom Animation மூலம் விளைவைத் தேர்வு செய்யலாம்.' },
  },
  {
    difficulty: 'hard', source: '§25.1.12, p. 307', answer: 0,
    en: { q: 'You click File → Close on an unsaved presentation and want to return to it without saving or losing it. Which button should you choose?', options: ['Cancel', 'Yes', 'No', 'Exit'], explanation: 'Yes saves the file, No closes without saving and Cancel returns you to the presentation.' },
    ta: { q: 'சேமிக்காத நிகழ்த்துதலில் File → Close கிளிக் செய்தீர்கள்; சேமிக்காமலும் இழக்காமலும் அதற்கே திரும்ப விரும்புகிறீர்கள். நீங்கள் தேர்வு செய்ய வேண்டியது', options: ['Cancel', 'Yes', 'No', 'Exit'], explanation: 'Yes கோப்பைச் சேமிக்கும், No சேமிக்காமல் மூடும், Cancel நிகழ்த்துதலுக்கே திருப்பி அனுப்பும்.' },
  },
  {
    difficulty: 'hard', source: '§25.1.12, p. 307', answer: 0,
    en: { q: 'While closing an unsaved presentation, a student clicks No in the dialog box. What happens?', options: ['The presentation closes without saving the changes.', 'The changes are saved and the file closes.', 'The student returns to the presentation.', 'LibreOffice Impress deletes all slides but stays open.'], explanation: 'Choosing No closes the file without saving it.' },
    ta: { q: 'சேமிக்காத நிகழ்த்துதலை மூடும்போது ஒரு மாணவர் உரையாடல் பெட்டியில் No என்பதைத் தேர்வு செய்கிறார். என்ன நிகழும்?', options: ['மாற்றங்கள் சேமிக்கப்படாமல் நிகழ்த்துதல் மூடப்படும்.', 'மாற்றங்கள் சேமிக்கப்பட்டு கோப்பு மூடப்படும்.', 'மாணவர் நிகழ்த்துதலுக்கே திரும்புவார்.', 'அனைத்துச் சில்லுகளும் நீக்கப்பட்டு மென்பொருள் திறந்தே இருக்கும்.'], explanation: 'No என்பதைத் தேர்வு செய்தால் கோப்பு சேமிக்கப்படாமல் மூடப்படும்.' },
  },
  {
    difficulty: 'hard', source: 'Book exercise III.1, p. 308 (Lab work)', answer: 0,
    en: { q: 'For the lab work "Create a presentation on Festivals of Tamil Nadu and save it", which is the correct order of steps?', options: ['File → New → Presentation → Blank Presentation; add slides and content; File → Save, type the file name, click Save', 'File → Save; then File → New; then add slides', 'Press F5; then insert slides; then File → Exit', 'Slide → Delete Slide; then File → Open; then Save'], explanation: 'Create a blank presentation first, add slides (Slide → New Slide), text, pictures, then save with a suitable name through the Save As dialog.' },
    ta: { q: '"தமிழ்நாட்டில் கொண்டாடப்படும் பண்டிகைகள் பற்றிய விளக்கக்காட்சி தயார் செய்து சேமிக்கவும்" என்ற செய்முறைக்குச் சரியான படிவரிசை', options: ['File → New → Presentation → Blank Presentation; சில்லுகள், உள்ளடக்கம் சேர்த்தல்; File → Save, கோப்புப் பெயர் தட்டச்சு, Save', 'File → Save; பின் File → New; பின் சில்லுகள் சேர்த்தல்', 'F5 அழுத்துதல்; பின் சில்லுகள் சேர்த்தல்; பின் File → Exit', 'Slide → Delete Slide; பின் File → Open; பின் Save'], explanation: 'முதலில் புதிய நிகழ்த்துதலை உருவாக்கி, சில்லுகள், உரை, படங்களைச் சேர்த்து, Save As பெட்டியில் பொருத்தமான பெயரில் சேமிக்க வேண்டும்.' },
  },
  {
    difficulty: 'hard', source: '§25.1.7, p. 306', answer: 0,
    en: { q: "Effects such as 'Roll down from top' or 'Fly in from left' that appear when one slide gives way to the next are", options: ['slide transitions', 'text boxes', 'placeholders', 'WordArt'], explanation: 'Slide transitions add dynamic flair to a slideshow, smoothing the change between slides.' },
    ta: { q: "ஒரு சில்லிலிருந்து அடுத்த சில்லுக்கு மாறும்போது தோன்றும் 'மேலிருந்து சுழன்று வருதல்', 'இடப்புறமிருந்து பறந்து வருதல்' போன்ற விளைவுகள்", options: ['சில்லு மாற்று விளைவுகள் (Slide Transition)', 'உரைப்பெட்டிகள்', 'இடம் ஒதுக்கிகள்', 'WordArt'], explanation: 'சில்லு மாற்று விளைவுகள் slide show-க்குப் பரிமாணத்தையும் தடங்கலற்ற தொடர்ச்சியையும் தருகின்றன.' },
  },
  {
    difficulty: 'hard', source: '§25.1.2, p. 303', answer: 0,
    en: { q: 'A student types text inside a placeholder. What should she do after finishing typing?', options: ['Click outside the placeholder', 'Press F5', 'Click Slide → Delete Slide', 'Click File → Exit'], explanation: 'Click inside a placeholder, type the text, and then click outside the placeholder.' },
    ta: { q: 'ஒரு மாணவி placeholder-இன் உள்ளே உரையைத் தட்டச்சு செய்கிறார். தட்டச்சு முடிந்ததும் அவர் செய்ய வேண்டியது', options: ['placeholder-க்கு வெளியே கிளிக் செய்தல்', 'F5 அழுத்துதல்', 'Slide → Delete Slide கிளிக் செய்தல்', 'File → Exit கிளிக் செய்தல்'], explanation: 'placeholder-இன் உள்ளே கிளிக் செய்து உரையைத் தட்டச்சு செய்த பின் அதற்கு வெளியே கிளிக் செய்ய வேண்டும்.' },
  },
  {
    difficulty: 'hard', source: '§25.1.5, p. 305', answer: 0,
    en: { q: 'Arrange the steps to add a text box:\n(P) Drag to draw the text box  (Q) Click the Insert menu  (R) Select the slide  (S) Click Text Box  (T) Type the text and click outside', options: ['R → Q → S → P → T', 'Q → R → S → T → P', 'R → S → Q → P → T', 'Q → S → R → P → T'], explanation: 'Select the slide, click Insert, click Text Box, drag to draw it, type and click outside.' },
    ta: { q: 'உரைப்பெட்டி சேர்க்கும் படிகளை வரிசைப்படுத்தவும்:\n(P) இழுத்து உரைப்பெட்டியை வரைதல்  (Q) Insert மெனுவைக் கிளிக் செய்தல்  (R) சில்லைத் தேர்வு செய்தல்  (S) Text Box கிளிக் செய்தல்  (T) உரையைத் தட்டச்சு செய்து வெளியே கிளிக் செய்தல்', options: ['R → Q → S → P → T', 'Q → R → S → T → P', 'R → S → Q → P → T', 'Q → S → R → P → T'], explanation: 'சில்லைத் தேர்வு செய்து, Insert, Text Box கிளிக் செய்து, இழுத்து வரைந்து, தட்டச்சு செய்து வெளியே கிளிக் செய்ய வேண்டும்.' },
  },
  {
    difficulty: 'hard', source: '§25.1, p. 302', answer: 0,
    en: { q: 'Assertion: A presentation with text, photos, sound and animation holds the audience’s attention better. Reason: LibreOffice Impress lets us combine text effects, graphics and sound in slides.', options: AR_EN, explanation: 'Because Impress combines text effects, graphics, sound and animation, colourful presentations amaze viewers and keep them interested.' },
    ta: { q: 'கூற்று: உரை, புகைப்படம், ஒலி, அனிமேஷன் கொண்ட நிகழ்த்துதல் பார்வையாளர்களின் கவனத்தை அதிகம் ஈர்க்கும். காரணம்: லிப்ரே ஆபீஸ் இம்ப்ரஸ் சில்லுகளில் உரை, வரைகலை, ஒலி ஆகியவற்றை இணைக்க உதவுகிறது.', options: AR_TA, explanation: 'இம்ப்ரஸ் உரை, வரைகலை, ஒலி, அனிமேஷனை இணைப்பதால் வண்ணமயமான நிகழ்த்துதல் பார்வையாளர்களை வியப்பில் ஆழ்த்துகிறது; காரணம் கூற்றை விளக்குகிறது.' },
  },
];
