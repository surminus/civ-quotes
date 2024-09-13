export type Quote = {
  quote: string;
  author: string;
};

const CIV_IV_QUOTES = [
  {
    quote:
      "Give a man a fish and you feed him for a day. Teach a man to fish and you feed him for a lifetime",
    author: "Lao Tzu",
  },
  { quote: "Put your shoulder to the wheel", author: "Aesop" },
  {
    quote: "Oh farmers, pray that your summers be wet and your winters clear",
    author: "Virgil",
  },
  {
    quote: "If you chase two rabbits, you will lose them both",
    author: "Native American Saying",
  },
  {
    quote: "Nature herself has imprinted on the minds of all the idea of God",
    author: "Cicero",
  },
  {
    quote: "You can't direct the wind, but you can adjust your sails",
    author: "Unknown",
  },
  {
    quote: "The man who moves a mountain begins by carrying away small stones",
    author: "Confucius",
  },
  {
    quote:
      "Hath not the potter power over the clay, to make one vessel unto honor, and another unto dishonor?",
    author: "The Bible, Romans",
  },
  {
    quote:
      "Blessed shall be the fruit of thy cattle, the increase of thy kine, and the flocks of thy sheep",
    author: "The Bible, Deut. 28:4",
  },
  {
    quote: "Do not throw the arrow which will return against you",
    author: "Kurdish Proverb",
  },
  {
    quote:
      "Meditation brings wisdom; lack of meditation leaves ignorance. Know well what leads you forward and what holds you back",
    author: "The Buddha",
  },
  {
    quote:
      "Not at all similar are the race of the immortal gods and the race of men who walk upon the earth",
    author: "Homer",
  },
  {
    quote:
      "It is from their foes, not their friends, that cities learn the lesson of building high walls",
    author: "Aristophanes",
  },
  {
    quote: "If you speak the truth, have a foot in the stirrup",
    author: "Turkish Proverb",
  },
  {
    quote:
      "The Lord bless you and keep you; the Lord make His face to shine upon you and be gracious to you; the Lord lift up His countenance upon you and give you peace",
    author: "The Bible, Numbers",
  },
  {
    quote: "I am the Lord thy God. Thou shalt have no other gods before Me",
    author: "The Bible, Exodus",
  },
  {
    quote:
      "It is entirely seemly for a young man killed in battle to lie mangled by the bronze spear. In his death all things appear fair",
    author: "Homer",
  },
  {
    quote:
      "True glory consists in doing what deserves to be written; in writing what deserves to be read",
    author: "Pliny the Elder",
  },
  {
    quote: "And them that take the sword shall perish by the sword",
    author: "The Bible, Matthew",
  },
  {
    quote: "You should hammer your iron when it is glowing hot",
    author: "Publius Syrus",
  },
  {
    quote:
      "Words have the power to both destroy and heal. When words are both true and kind, they can change our world",
    author: "The Buddha",
  },
  {
    quote:
      "If in other sciences we should arrive at certainty without doubt and truth without error, it behooves us to place the foundations of knowledge in mathematics",
    author: "Roger Bacon",
  },
  {
    quote:
      "A multitude of rulers is not a good thing. Let there be one ruler, one king",
    author: "Herodotus",
  },
  { quote: "The wisest men follow their own direction", author: "Euripides" },
  {
    quote:
      "Some books are to be tasted, others to be swallowed, and some few to be chewed and digested",
    author: "Sir Francis Bacon",
  },
  {
    quote:
      "For everything there is a season and a time for every purpose under heaven",
    author: "Ecclesiastes",
  },
  {
    quote: "Look on my works, ye Mighty, and despair!'",
    author: "Percy Bysshe Shelley",
  },
  {
    quote: "Everything is worth what its purchaser will pay for it",
    author: "Publius Syrus",
  },
  { quote: "A god from the machine", author: "Menander" },
  {
    quote:
      "All the world's a stage, And all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts. ",
    author: "William Shakespeare",
  },
  {
    quote:
      "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away",
    author: "Antoine de Saint-Exupery",
  },
  {
    quote:
      "To bring about the rule of righteousness in the land, so that the strong should not harm the weak",
    author: "Hammurabi's Code; Prologue",
  },
  {
    quote:
      "I will to my lord be true and faithful, and love all which he loves and shun all which he shuns",
    author: "Anglo Saxon Oath of Fealty",
  },
  {
    quote: "One doesn't discover new lands without losing sight of the shore",
    author: "Andre Gide",
  },
  {
    quote: "If music be the food of love, play on",
    author: "William Shakespeare",
  },
  {
    quote:
      "that I do without being commanded what others do only from fear of the law",
    author: "Aristotle",
  },
  {
    quote:
      "The bureaucracy is expanding to meet the needs of the expanding bureaucracy",
    author: "Unknown",
  },
  {
    quote: "the earthly by the love of self; the heavenly by the love of God",
    author: "St. Augustine",
  },
  {
    quote:
      "People of the same trade seldom meet together, even for merriment and diversion, but the conversation ends in a conspiracy against the public",
    author: "Adam Smith",
  },
  { quote: "I am the state", author: "Louiz XIV" },
  { quote: "I cannot live without books", author: "Thomas Jefferson" },
  {
    quote: "Banking establishments are more dangerous than standing armies",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "A man does not have himself killed for a half-pence a day or for a petty distinction. You must speak to the soul in order to electrify him",
    author: "Napoleon Bonaparte",
  },
  {
    quote:
      "What gunpowder did for war, the printing press has done for the mind",
    author: "Wendell Phillips",
  },
  {
    quote: "There is no wealth like knowledge, no poverty like ignorance",
    author: "Ali ibn Abi Talib",
  },
  {
    quote:
      "Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win",
    author: "Sun-Tzu",
  },
  {
    quote:
      "No freeman shall be taken, imprisoned, or in any other way destroyed, except by the lawful judgment of his peers",
    author: "The Magna Carta]",
  },
  {
    quote: "The whole is more than the sum of its parts",
    author: "Aristotle",
  },
  {
    quote:
      "Any society that would give up a little liberty to gain a little security will deserve neither and lose both",
    author: "Benjamin Franklin",
  },
  {
    quote: "Compound interest is the most powerful force in the universe",
    author: "Albert Einstein",
  },
  {
    quote:
      "You can get more of what you want with a kind word and a gun than you can with just a kind word",
    author: "Al Capone",
  },
  {
    quote:
      "it has been said that democracy is the worst form of government except all the others that have been tried",
    author: "Winston Churchill",
  },
  {
    quote: "Political power grows out of the barrel of a gun",
    author: "Mao Zedong",
  },
  {
    quote:
      "Astronomy compels the soul to look upwards and leads us from this world to another",
    author: "Plato",
  },
  {
    quote:
      "Corporation, n. An ingenious device for obtaining individual profit without individual responsibility",
    author: "Ambrose Bierce",
  },
  {
    quote:
      "Chemistry means the difference between poverty and starvation and the abundant life",
    author: "Robert Brent",
  },
  {
    quote:
      "You would make a ship sail against the winds and currents by lighting a bon-fire under her deck? I have no time for such nonsense",
    author: "Napoleon, on Robert Fulton's Steamship",
  },
  {
    quote:
      "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use",
    author: "Galileo Galilei",
  },
  {
    quote:
      "Before that steam drill shall beat me down, I'll die with my hammer in my hand",
    author: 'from John Henry, "the Steel-Driving Man"',
  },
  {
    quote: "People can have the Model T in any color, so long as it's black",
    author: "Henry Ford",
  },
  {
    quote:
      "When I give food to the poor, they call me a saint. When I ask why the poor have no food, they call me a communist",
    author: "Dom Helder Camara",
  },
  {
    quote: "To every action there is always opposed an equal reaction",
    author: "Isaac Newton",
  },
  {
    quote:
      "It is not the strongest of the species that survive, but the one most responsive to change",
    author: "Charles Darwin",
  },
  {
    quote:
      "I fooled you, I fooled you, I got pig iron, I got pig iron, I got all pig iron",
    author: 'Lonnie Donegan, "Rock Island Line"',
  },
  {
    quote:
      "For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return",
    author: "Leonardo Da Vinci",
  },
  {
    quote: "Artillery adds dignity to what would otherwise be a vulgar brawl",
    author: "Frederick the Great",
  },
  {
    quote:
      "The great masses of the people... Will more easily fall victims to a big lie than to a small one",
    author: "Adolf Hitler(Misatributted)",
  },
  {
    quote:
      "We will make electricity so cheap that only the rich will burn candles",
    author: "Thomas Edison",
  },
  {
    quote:
      "As to diseases make a habit of two things, to help, or at least, to do no harm",
    author: "Hippocrates",
  },
  {
    quote: "Everything in life is somewhere else, and you get there in a car",
    author: "E. B. White",
  },
  {
    quote:
      "The Earth is the cradle of the mind, but one cannot eternally live in a cradle",
    author: "Konstantin E. Tsiolkovsky",
  },
  {
    quote:
      "Make the best quality of goods possible at the lowest cost possible, paying the highest wages possible",
    author: "Henry Ford",
  },
  {
    quote:
      "If the radiance of a thousand suns were to burst at once into the sky, that would be like the splendor of the Mighty One... I am become Death, the Shatterer of Worlds",
    author: 'J. Robert Oppenheimer, quoting "The Bhagavad Gita"',
  },
  {
    quote: "Tell me what you eat, and I will tell you what you are",
    author: "Anthelme Brillat-Savarin",
  },
  {
    quote:
      "Then one fine mornin' she puts on a New York station. You know her life was saved by Rock 'n' Roll",
    author: 'The Velvet Underground, "Rock And Roll"',
  },
  { quote: "Beep...beep...beep...beep...", author: "Sputnik I" },
  { quote: "plastics", author: "Calder Willingham, The Graduate" },
  {
    quote: "Never trust a computer you can't throw out a window",
    author: "Steve Wozniak",
  },
  {
    quote:
      "The only thing worse than being talked about is not being talked about",
    author: "Oscar Wilde",
  },
  {
    quote: "The whole is greater than the sum of its parts",
    author: "Aristotle",
  },
  {
    quote:
      "There is a single light of science, and to brighten it anywhere is to brighten it everywhere",
    author: "Isaac Asimov",
  },
  {
    quote:
      "We do not inherit the earth from our ancestors, we borrow it from our children",
    author: "Native American Song",
  },
  {
    quote:
      "Soon it will be a sin for parents to have a child which carries the heavy burden of genetic disease",
    author: "Bob Edwards",
  },
  {
    quote: "The real problem is not whether machines think, but whether men do",
    author: "B. F. Skinner",
  },
  {
    quote:
      "Any sufficiently advanced technology is indistinguishable from magic",
    author: "Arthur C. Clarke",
  },
  { quote: "The future will be better tomorrow", author: "Dan Quayle" },
];

const CIV_V_QUOTES = [
  {
    quote:
      "Their rising all at once was as the sound of a thunder heard remote",
    author: "Milton",
  },
  {
    quote: "Once the rockets are up, who cares where they come down?",
    author: "Tom Hehrer",
  },
  {
    quote:
      "Where tillage begins, other arts follow. The farmers therefore are the founders of human civilization",
    author: "Daniel Webster",
  },
  {
    quote: "Thou salt not muzzle the ox when he treadeth out the corn",
    author: "The Bible, Deuteronomy, 25:4",
  },
  {
    quote: "Those who cannot remember the past are condemned to repeat it",
    author: "George Santayana",
  },
  {
    quote:
      "The haft of the arrow had been feathered with one of the eagle's own plumes. We often give our enemies the means of our own destruction",
    author: "Aesop",
  },
  {
    quote:
      "Joyfully to the breeze royal Odysseus spread his sail, and with his rudder skillfully he steered",
    author: "Homer",
  },
  {
    quote:
      "The unleashed power of the atom has changed everything save our modes of thinking, and we thus drift toward unparalleled catastrophes",
    author: "Albert Einstein",
  },
  {
    quote: "Happiness: a good bank account, a good cook and a good digestion",
    author: "Jean Jacques Rousseau",
  },
  {
    quote:
      "If the brain were so simple we could understand it, we would be so simple we couldn't",
    author: "Lyall Watson",
  },
  {
    quote:
      "Here Hector entered, with a spear eleven cubits long in his hand; the bronze point gleamed in front of him, and was fastened to the shaft of the spear by a ring of gold",
    author: "Homer",
  },
  {
    quote:
      "So teach us to number our days, so that we may apply our hearts unto wisdom",
    author: "The Bible, Psalms, 90:12",
  },
  {
    quote:
      "Wherever we look, the work of the chemist has raised the level of our civilization and has increased the productive capacity of our nation",
    author: "Calvin Coolidge",
  },
  {
    quote:
      "Who pulleth out this sword of this stone and anvil, is rightwise king born of all England",
    author: "Malory",
  },
  {
    quote:
      "The only thing that saves us from the bureaucracy is its inefficiency",
    author: "Eugene McCarthy",
  },
  {
    quote:
      "Any man who can drive safely while kissing a pretty girl is simply not giving the kiss the attention it deserves",
    author: "Albert Einstein",
  },
  {
    quote:
      "I find the great thing in this world is not so much where we stand, as in what direction we are moving",
    author: "Oliver Wendell Holmes",
  },
  {
    quote: "Computer are like Old Testament gods: lots of rules and no mercy",
    author: "Joseph Campbell",
  },
  {
    quote:
      "Three things are to be looked to in a building: that it stand on the right spot; that it be securely founded; that it be successfully executed",
    author: "Johann Wolfgang von Goethe",
  },
  {
    quote: "Better is bread with a happy heart/Than wealth with vexation",
    author: "Amenemope",
  },
  {
    quote:
      "As soon as men decide that all means are permitted to fight an evil, then their good becomes indistinguishable from the evil that they set out to destroy",
    author: "Christopher Dawson",
  },
  {
    quote: "Compound interest is the most powerful force in the universe",
    author: "Albert Einstein",
  },
  {
    quote:
      "Only within the moment of time represented by the present century as one species, man, acquired significant power to alter the nature of his world",
    author: "Rachel Carson",
  },
  {
    quote: "Education is the best provision for old age",
    author: "Aristotle",
  },
  {
    quote:
      "Is it a fact - or have I dreamt it - that, by means of electricity, the world of matter has become a great nerve, vibrating thousands of miles in a breathless point of time?",
    author: "Nathaniel Hawthorne",
  },
  {
    quote:
      "There's a basic principle about consumer electronics: it gets more powerful all the time and it gets cheaper all the time",
    author: "Trip Hawkins",
  },
  {
    quote:
      "Instrumental or mechanical sciencce is the noblest and, above all others, the most useful",
    author: "Leonardo da Vinci",
  },
  {
    quote: "The nation that destroys its soil destroys itself",
    author: "Franklin Delano Roosevelt",
  },
  {
    quote:
      "Aeronautics was neither an industry nor a science. It was a miracle",
    author: "Igor Sikorsky",
  },
  {
    quote: "I think we all agree, the past is over",
    author: "George W. Bush",
  },
  {
    quote:
      "The new electronic interdependence recreates the world in the image of a global village",
    author: "Marshall McLuhan",
  },
  {
    quote:
      "The day when two army corps can annihilate each other in one second, all civilized nations, it is to be hoped, will recoil from war and discharge their troops",
    author: "Alfred Nobel",
  },
  { quote: "My kingdom for a horse!", author: "Shakespeare (Richard III)" },
  {
    quote:
      "Do not wait to strike 'til the iron is hot; but make it hot by striking",
    author: "William Butler Yeats",
  },
  {
    quote:
      "The night is far spent, the day is at hand; let us therefore cast off the works of darkness, and let us put on the armor of light",
    author: "The Holy Bible: Romans, 13:12",
  },
  {
    quote:
      "The press is the best instrument for enlightening the mind of man, and improving him as a rational, moral and social being",
    author: "Thomas Jefferson",
  },
  { quote: "How happy are those whose walls already rise!", author: "Virgil" },
  {
    quote:
      "The speed of communication is wondrous to behold. It is also true that speed can multiply the distribution of information that we know to be untrue",
    author: "Edward R. Murrow",
  },
  {
    quote: "Mathematics is the gate and key to the sciences",
    author: "Roger Bacon",
  },
  {
    quote:
      "When pieces of bronze or gold or iron break, the metal-smith welds them together again in the fire, and the bond is established",
    author: "Sri Guru Granth Sahib",
  },
  {
    quote: "There never was a good knife made of bad steel",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "Wars may be fought with weapons, but they are won by men. It is the spirit of the men who follow and of the man who leads that gains the victory",
    author: "George S. Patton",
  },
  {
    quote: "The meek shall inherit the Earth, but not its mineral rights",
    author: "J. Paul Getty",
  },
  {
    quote:
      "The impact of nanotechnology is expected to exceed the impact the electronics revolution has had on our lives",
    author: "Richard Schwartz",
  },
  {
    quote:
      "The winds and the waves are always on the side of the ablest navigators",
    author: "Edward Gibbon",
  },
  {
    quote: "I am become Death, the destroyer of worlds",
    author: "J. Robert Oppenheimer",
  },
  {
    quote:
      "The release of atomic energy has not created a new problem. It has merely made more urgent the necessity of solving an existing one",
    author: "Albert Einstein",
  },
  {
    quote: "He made an instrument to know/If the moon shine at full or no",
    author: "Samuel Butler",
  },
  {
    quote:
      "Every particle of matter is attracted by or gravitates to every other particle of matter with a force inversely proportional to the squares of their distances",
    author: "Isaac Newton",
  },
  {
    quote:
      "In nothing do men more nearly approach the gods than in giving health to men",
    author: "Cicero",
  },
  {
    quote: "There is only one good, knowledge, and one evil, ignorance",
    author: "Socrates",
  },
  {
    quote: "Measure what is measurable, and make measurable what is not so",
    author: "Galileo",
  },
  {
    quote: "Ben, I want to say one word to you, just one word: plastics",
    author: "Buck Henry and Calder Willingham, The Graduate",
  },
  {
    quote: "Shall the clay say to him that fashioneth it, What makest thou?",
    author: "The Bible, Isaiah, 45:9",
  },
  {
    quote: "It is a newspaper's duty to print the news and raise hell",
    author: "The Chicago Times",
  },
  {
    quote: "Vision is the art of seeing things invisible",
    author: "Jonathan Swift",
  },
  {
    quote:
      "The whole country was tied together by radio. We all experienced the same heroes and comedians and singers. They were giants",
    author: "Woody Allen",
  },
  {
    quote:
      "The introduction of so powerful an agent as steam to a carriage on wheels will make a great change in the situation of man",
    author: "Thomas Jefferson",
  },
  {
    quote:
      "And homeless near a thousand homes I stood, and near a thousand tables pined and wanted food",
    author: "William Wordsworth",
  },
  {
    quote: "Nothing is particularly hard if you divide it into small jobs",
    author: "Henry Ford",
  },
  {
    quote:
      "It is well that war is so terrible, or we should grow too fond of it",
    author: "Robert E. Lee",
  },
  {
    quote:
      "1. A robot may not injure a human being or, through inaction, allow a human being to come to harm. 2. A robot must obey any orders given to it by human beings, except where such orders would conflict with the First Law. 3. A robot must protect its own existence as long as such protection does not conflict with the First or Second Law",
    author: "Isaac Asimov",
  },
  {
    quote:
      "A good rule for rocket experimenters to follow is this: always assume that it will explode",
    author: "Astronautics Magazine, 1937",
  },
  {
    quote: "He who commands the sea has command of everything",
    author: "Themistocles",
  },
  {
    quote: "Now, somehow, in some new way, the sky seemed almost alien",
    author: "Lyndon B. Johnson",
  },
  {
    quote:
      "Every great advance in science has issues from a new audacity of imagination",
    author: "John Dewey",
  },
  {
    quote:
      "Be extremely subtle, even to the point of formlessness. Be extremely mysterious, even to the point of soundlessness. Thereby you can be the director of the opponent's fate",
    author: "Sun Tzu",
  },
  {
    quote:
      "The nations of the West hope that by means of steam communications all the world will become as one family",
    author: "Townsend Harris",
  },
  {
    quote:
      "John Henry said to his Captain: 'A man ain't nothin' but a man,/And before I'll let your steam drill beat me down,/I'll die with the hammer in my hand",
    author: "Anonymous: The Ballad of John Henry, the Steel-Drivin' Man",
  },
  {
    quote:
      "I once sent a dozen of my friends a telegram saying 'flee at once - all is discovered.' They all left town immediately",
    author: "Mark Twain",
  },
  {
    quote:
      "Three things are necessary for the salvation of man: to know what he ought to believe; to know what he ought to desire; and to know what he ought to do",
    author: "St. Thomas Aquinas",
  },
  {
    quote:
      "Even brute beasts and wandering birds do not fall for the same traps or nets twice",
    author: "Saint Jerome",
  },
  {
    quote: "Wisdom and virtue are like the two wheels of a cart",
    author: "Japanese Proverb",
  },
  {
    quote: "He who destroys a good book kills reason itself",
    author: "John Milton",
  },
];

const CIV_VI_QUOTES = [
  {
    quote:
      "No man ever wetted clay and then left it, as if there would be bricks by chance and fortune",
    author: "Plutarch",
  },

  {
    quote: "I thought clay must feel happy in the good potter’s hand",
    author: "Janet Fitch",
  },

  {
    quote:
      "If there are no dogs in Heaven, then when I die I want to go where they went",
    author: "Will Rogers",
  },

  {
    quote:
      "I am fond of pigs. Dogs look up to us. Cats look down on us. Pigs treat us as equals",
    author: "Winston S. Churchill",
  },

  {
    quote: "Who deserves more credit than the wife of a coal miner?",
    author: "Merle Travis",
  },

  {
    quote: "When you find yourself in a hole, quit digging",
    author: "Will Rogers",
  },

  {
    quote:
      "Vessels large may venture more, but little boats should keep near shore",
    author: "Benjamin Franklin",
  },

  {
    quote:
      "It is not that life ashore is distasteful to me. But life at sea is better",
    author: "Sir Francis Drake",
  },

  {
    quote:
      "I don’t believe in astrology; I’m a Sagittarius and we’re skeptical",
    author: "Arthur C. Clarke",
  },

  {
    quote:
      "A physician without a knowledge of astrology has no right to call himself a physician",
    author: "Hippocrates",
  },

  {
    quote: "Thousands have lived without love, not one without water",
    author: "W. H. Auden",
  },

  {
    quote:
      "The man who has grit enough to bring about the afforestation or the irrigation of a country is not less worthy of honor than its conqueror",
    author: "Sir John Thomson",
  },

  {
    quote: "I shot an arrow into the air. It fell to earth, I knew not where",
    author: "Henry Wadsworth Longfellow",
  },

  {
    quote:
      "May the forces of evil become confused while your arrow is on its way to the target",
    author: "George Carlin",
  },

  {
    quote:
      "Writing means sharing. It’s part of the human condition to want to share things - thoughts, ideas, opinions",
    author: "Paulo Coelho",
  },

  {
    quote: "Writing is easy. All you have to do is cross out the wrong words",
    author: "Mark Twain",
  },

  {
    quote:
      "Each of us is carving a stone, erecting a column, or cutting a piece of stained glass in the construction of something much bigger than ourselves",
    author: "Adrienne Clarkson",
  },

  {
    quote:
      "When wasteful war shall statues overturn, and broils root out the work of masonry",
    author: "William Shakespeare",
  },

  {
    quote: "Bronze is the mirror of the form, wine of the mind",
    author: "Aeschylus",
  },

  {
    quote:
      "I’m also interested in creating a lasting legacy … because bronze will last for thousands of years",
    author: "Richard MacDonald",
  },

  {
    quote: "Sometimes the wheel turns slowly, but it turns",
    author: "Lorne Michaels",
  },

  {
    quote: "Don’t reinvent the wheel, just realign it",
    author: "Anthony D’Angelo",
  },

  {
    quote: "And all I ask is a tall ship and a star to steer her by",
    author: "John Masefield",
  },

  {
    quote:
      "Set your course by the stars, not by the lights of every passing ship",
    author: "Omar Bradley",
  },

  {
    quote:
      "Wealth consists not in having great possessions, but in having few wants",
    author: "Epictetus",
  },

  {
    quote:
      "Money, if it does not bring you happiness, will at least help you be miserable in comfort",
    author: "Helen Gurley Brown",
  },

  {
    quote: "No hour of life is wasted that is spent in the saddle",
    author: "Winston Churchill",
  },

  {
    quote:
      "A man on a horse is spiritually as well as physically bigger than a man on foot",
    author: "John Steinbeck",
  },

  {
    quote:
      "The Lord made us all out of iron. Then he turns up the heat to forge some of us into steel",
    author: "Marie Osmond",
  },

  {
    quote: "Everything has its limit - iron ore cannot be educated into gold",
    author: "Mark Twain",
  },

  {
    quote:
      "I cannot imagine any condition which would cause a ship to founder … Modern shipbuilding has gone beyond that",
    author: "Capt. E.J. Smith, RMS Titanic",
  },

  {
    quote: "There is nothing but a plank between a sailor and eternity",
    author: "Thomas Gibbons",
  },

  {
    quote:
      "Without mathematics, there’s nothing you can do. Everything around you is mathematics. Everything around you is numbers",
    author: "Shakuntala Devi",
  },

  {
    quote:
      "If I were again beginning my studies, I would follow the advice of Plato and start with mathematics",
    author: "Galileo Galilei",
  },

  {
    quote: "Create with the heart; build with the mind",
    author: "Criss Jami",
  },

  {
    quote:
      "The four building blocks of the universe are fire, water, gravel and vinyl",
    author: "Dave Barry",
  },

  {
    quote: "One man’s ‘magic’ is another man’s engineering",
    author: "Robert Heinlein",
  },

  {
    quote:
      "Normal people … believe that if it ain’t broke, don’t fix it. Engineers believe that if it ain’t broke, it doesn’t have enough features yet",
    author: "Scott Adams",
  },

  {
    quote: "Tactics mean doing what you can with what you have",
    author: "Saul Alinsky",
  },

  {
    quote: "Strategy requires thought; tactics require observation",
    author: "Max Euwe",
  },

  {
    quote:
      "We are all apprentices in a craft where no one ever becomes a master",
    author: "Ernest Hemingway",
  },

  {
    quote:
      "There is no easy way to train an apprentice. My two tools are example and nagging",
    author: "Lemony Snicket",
  },

  {
    quote:
      "Few inventions have been so simple as the stirrup, but few have had so catalytic an influence on history",
    author: "Lynn White Jr",
  },

  {
    quote: "Betwixt the stirrup and the ground, Mercy I asked, mercy I found",
    author: "William Camden",
  },

  {
    quote:
      "I’d imagine the whole world as one big machine. Machines never come with any spare parts, you know. They always come with the exact amount they need",
    author: "Hugo Cabret",
  },

  {
    quote: "Remember that people break down, too, not just machinery",
    author: "Gregory Benford",
  },

  {
    quote:
      "The purpose of education is to replace an empty mind with an open one",
    author: "Malcolm Forbes",
  },

  {
    quote:
      "It is the mark of an educated mind to be able to entertain a thought without accepting it",
    author: "Aristotle",
  },

  {
    quote: "Blast - Build - Battle",
    author: "Motto of the U.S. 16th Engineer Brigade",
  },

  {
    quote:
      "The more science intervenes in warfare, the more will be the need for engineers in the field armies; in the late war there were never enough sappers at any time",
    author: "Bernard Montgomery",
  },

  {
    quote:
      "Rocks in my path? I keep them all. With them I shall build my castle",
    author: "Nemo Nox",
  },

  {
    quote:
      "If you see a castle under fog, you must walk there to meet the extraordinary dreams",
    author: "Mehmet Murat Ildan",
  },

  {
    quote: "Not all who wander are lost",
    author: "J.R.R. Tolkien",
  },

  {
    quote: "People can have the Model T in any color - so long as it’s black",
    author: "Henry Ford",
  },

  {
    quote:
      "What can be labeled, packaged, mass produced is neither truth nor art",
    author: "Marty Rubin",
  },

  {
    quote:
      "If you owe the bank $100 that’s your problem. If you owe the bank $100 million, that’s the bank’s problem",
    author: "J. Paul Getty",
  },

  {
    quote:
      "I saw a bank that said ’24-Hour Banking,’ but I didn’t have that much time",
    author: "Steven Wright",
  },

  {
    quote: "The real use of gunpowder is to make all men tall",
    author: "Thomas Carlyle",
  },

  {
    quote: "Man is a military animal, glories in gunpowder, and loves parades",
    author: "Philip Bailey",
  },

  {
    quote:
      "The pen might not be mightier than the sword, but maybe the printing press is heavier than the siege weapon. Just a few words can change everything",
    author: "Terry Pratchett",
  },

  {
    quote:
      "What gunpowder did for war the printing press has done for the mind",
    author: "Wendell Phillips",
  },

  {
    quote:
      "There is little man has made that approaches anything in nature, but a sailing ship does",
    author: "Allan Villiers",
  },

  {
    quote: "It’s not the towering sails, but the unseen wind that moves a ship",
    author: "English Proverb",
  },

  {
    quote:
      "Astronomy compels the soul to look upwards and leads us from this world to another",
    author: "Plato",
  },

  {
    quote: "Astronomy’s much more fun when you’re not an astronomer",
    author: "Brian May",
  },

  {
    quote:
      "And first Hephaestus makes a great and massive shield … And he forged on the shield two noble cities",
    author: "Homer",
  },

  {
    quote:
      "Don’t judge someone until you’ve stood at his forge and worked with his hammer",
    author: "Rick Riordan",
  },

  {
    quote:
      "The lowest is to attack a city. Siege of a city is only done as a last resort",
    author: "Sun Tzu",
  },

  {
    quote: "All the best romances bloom in the midst of a good siege",
    author: "Miles Cameron",
  },

  {
    quote:
      "I think the human race made a big mistake at the beginning of the Industrial Revolution, we leaped for the mechanical things. People need the use of their hands to feel creative",
    author: "Andre Norton",
  },

  {
    quote:
      "The key words of violent economics are urbanization, industrialization, centralization, efficiency, quantity, speed",
    author: "E.F. Schumacher",
  },

  {
    quote:
      "Claims that cannot be tested, assertions immune to disproof are veridically worthless, whatever value they may have in inspiring us or exciting our sense of wonder",
    author: "Carl Sagan",
  },

  {
    quote: "If facts don’t fit the theory, change the facts",
    author: "Albert Einstein",
  },

  {
    quote:
      "It’s one thing to surmise what happened, but we don’t speculate on that until ballistics confirms what happened …",
    author: "John Hansen",
  },

  {
    quote:
      "Let’s get on our knees and pray. I don’t know to whom. Is there a patron saint of ballistics yet?",
    author: "Adam Savage",
  },

  {
    quote:
      "However beautiful the strategy, you should occasionally look at the results",
    author: "Winston Churchill",
  },

  {
    quote:
      "No one starts a war - or rather, no one in his senses ought to do so - without first being clear in his mind what he intends to achieve by that war and how he intends to conduct it",
    author: "Karl von Clausewitz",
  },

  {
    quote:
      "It is arguable whether the human race have been gainers by the march of science beyond the steam engine",
    author: "Winston Churchill",
  },

  {
    quote:
      "Science owes more to the steam engine than the steam engine owes to science",
    author: "Lawrence Henderson",
  },

  {
    quote:
      "No innovation in the past 200 years has done more to save lives and improve health than the sanitation revolution triggered by the invention of the toilet",
    author: "Sylvia Burwell",
  },

  {
    quote:
      "Apart from the sanitation, the medicine, education, wine, public order, roads, the fresh water system, and public health … what have the Romans ever done for us?",
    author: "John Cleese",
  },

  {
    quote: "Economics is a subject that does not greatly respect one’s wishes",
    author: "Nikita Khrushchev",
  },

  {
    quote:
      "You and I come by road or rail, but economists travel on infrastructure",
    author: "Margaret Thatcher",
  },

  {
    quote: "Bolt actions speak louder than words",
    author: "Craig Roberts",
  },

  {
    quote:
      "Never criticize a rifleman until you have walked a mile in his shoes. That way, he’ll be barefoot and you’ll be out of range",
    author: "The 2nd Target Company",
  },

  {
    quote:
      "For once you have tasted flight you will walk the earth with your eyes turned skywards, for there you have been and there you will long to return",
    author: "Leonardo da Vinci",
  },

  {
    quote:
      "If you can walk away from a landing, it’s a good landing. If you use the airplane the next day, it’s an outstanding landing",
    author: "Chuck Yeager",
  },

  {
    quote:
      "For a machine to run smoothly and predictably, its parts must be standard and hence replaceable",
    author: "Charles Eisenstein",
  },

  {
    quote:
      "Many of us take better care of our automobiles than we do of our own bodies … yet the auto has replaceable parts",
    author: "B.J. Palmer",
  },

  {
    quote: "The best steel doesn’t always shine the brightest",
    author: "Joe Abercrombie",
  },

  {
    quote:
      "There are three things extremely hard: steel, a diamond, and to know one’s self",
    author: "Benjamin Franklin",
  },

  {
    quote:
      "If it weren’t for electricity, we’d all be watching television by candlelight",
    author: "George Gobel",
  },

  {
    quote:
      "Benjamin Franklin may have discovered electricity, but it was the man who invented the meter who made the money",
    author: "Earl Wilson",
  },

  {
    quote: "A world without radio is a deaf world",
    author: "Ernest Yeboah",
  },

  {
    quote:
      "Radio is the theater of the mind; television is the theater of the mindless",
    author: "Steve Allen",
  },

  {
    quote: "Chemistry is the dirty part of physics",
    author: "Peter Reiss",
  },

  {
    quote:
      "Chemists do not usually stutter. It would be very awkward if they did, seeing that they have at times to get out such words as methylethylamylophenylium",
    author: "Sir William Crookes",
  },

  {
    quote:
      "The cars haven’t advanced that much since we were kids. When you boil it down, it’s still a gas combustion engine",
    author: "Dana Brunetti",
  },

  {
    quote:
      "I have always considered that the substitution of the internal combustion engine for the horse marked a very gloomy milestone in the progress of mankind",
    author: "Winston Churchill",
  },

  {
    quote:
      "Sure, jets are fast and economical, but, oh my, what fun we’ve lost and what leisure we’ve sacrificed in the race for efficiency",
    author: "Ginger Rogers",
  },

  {
    quote:
      "If God had really intended men to fly, He’d make it easier to get to the airport",
    author: "George Winters",
  },

  {
    quote:
      "Rocket science has been mythologized all out of proportion to its true difficulty",
    author: "John Carmack",
  },

  {
    quote:
      "When you launch a rocket, you’re not really flying that rocket. You’re just sort of hanging on",
    author: "Michael P. Anderson",
  },

  {
    quote: "Untutored courage is useless in the face of educated bullets",
    author: "George Patton",
  },

  {
    quote: "Aim for the moon. If you miss, you may hit a star",
    author: "W. Clement Stone",
  },

  {
    quote: "Better to fight for something than live for nothing",
    author: "George S. Patton",
  },

  {
    quote: "The chief incalculable in war is the human will",
    author: "B.H. Liddell Hart",
  },

  {
    quote:
      "In the hierarchy of the major poetic substances, plastic figures as a disgraced material, lost between the effusiveness of rubber and the flat hardness of metal",
    author: "Roland Barthes",
  },

  {
    quote: "Nothing on this earth lasts forever. Except maybe plastic",
    author: "Patricia Dunn",
  },

  {
    quote: "To err is human, but to really foul things up you need a computer",
    author: "Paul R. Ehrlich",
  },

  {
    quote:
      "The good thing about computers is that they do what you tell them to do. The bad news is that they do what you tell them to do",
    author: "Ted Nelson",
  },

  {
    quote:
      "If you go on with this nuclear arms race, all you are going to do is make the rubble bounce",
    author: "Winston Churchill",
  },

  {
    quote: "Leave the atom alone",
    author: "E. Y. Harburg",
  },

  {
    quote:
      "There’s so much plastic in this culture that vinyl leopard skin is becoming an endangered synthetic",
    author: "Lily Tomlin",
  },

  {
    quote:
      "There may be no forgiveness for polyester. On this one matter, Satan and the Lord are in agreement",
    author: "Joe Hill",
  },

  {
    quote: "Mr. Watson… Come here… I want to see you",
    author: "Alexander Graham Bell",
  },

  {
    quote:
      "The single biggest problem in communication is the illusion that it has taken place",
    author: "George Bernard Shaw",
  },

  {
    quote: "A satellite has no conscience",
    author: "Edward R. Murrow",
  },

  {
    quote:
      "Right now there are thirty-one satellites zipping around the world with nothing better to do than help you find your way to the grocery store",
    author: "Ed Burnette",
  },

  {
    quote:
      "If you do not change direction, you may end up where you were heading",
    author: "Lao Tzu",
  },

  {
    quote: "I love watching my mom argue with the GPS on the way home",
    author: "Isabelle Fuhrman",
  },

  {
    quote:
      "When God said, ‘Let there be light,’ he surely must have meant perfectly coherent light",
    author: "Charles Townes",
  },

  {
    quote:
      "I’m a big laser believer - really think they are the wave of the future",
    author: "Courteney Cox",
  },

  {
    quote:
      "All material things seem to have been composed of the hard and solid particles … variously associated with the first Creation by the counsel of an Intelligent Agent",
    author: "Isaac Newton",
  },

  {
    quote:
      "It is obvious that while science is struggling to bring Heaven to Earth some men are using its materials in the construction of Hell",
    author: "Herbert Hoover",
  },

  {
    quote:
      "I would say invisibility would be sort of a fun power to have just to see what it was like to move through the world and not be looked at",
    author: "Kevin Bacon",
  },

  {
    quote:
      "In art and dream may you proceed with abandon. In life may you proceed with balance and stealth",
    author: "Patti Smith",
  },

  {
    quote:
      "Robotics has been around forever, and it’s been the next big thing forever, and it is so exciting and compelling that it’s easy to get carried away",
    author: "Colin Angle",
  },

  {
    quote: "I’ll be back",
    author: "The Terminator",
  },

  {
    quote:
      "If technology is the engine of change, then nanotechnology is the fuel for humanity’s future",
    author: "Natasha Vita-More",
  },

  {
    quote:
      "Many, many rules had begun to bend at the hand of nanotechnology … This produced a lot of good, and a lot of bad",
    author: "Matt Spire",
  },

  {
    quote: "There is nothing like a dream to create the future",
    author: "Victor Hugo",
  },

  {
    quote:
      "Even though the future seems far away, it is actually beginning right now",
    author: "Mattie Stepanek",
  },

  {
    quote:
      "I am a big proponent of harnessing the power of fusion - from 93 million miles away. Fusion is done by our sun really, really well and for free. Here on Earth in reactors, not so much",
    author: "Joe Romm",
  },

  {
    quote:
      "When we look up at night and view the stars, everything we see is shining because of distant nuclear fusion",
    author: "Carl Sagan",
  },
];

export const ALL_QUOTES =
  CIV_IV_QUOTES.concat(CIV_V_QUOTES).concat(CIV_VI_QUOTES);

export const JSON_QUOTES = JSON.stringify(
  {
    civIV: CIV_IV_QUOTES,
    civV: CIV_V_QUOTES,
    civVI: CIV_VI_QUOTES,
  },
  null,
  2,
);
