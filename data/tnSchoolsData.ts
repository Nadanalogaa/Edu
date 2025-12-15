// Tamil Nadu Schools Data - VP Schools
// Total: 38 Districts, ~220 Blocks, 363 Schools

export interface School {
  sno: number;
  name: string;
}

export interface Block {
  name: string;
  schools: School[];
}

export interface District {
  name: string;
  nameTa: string;
  blocks: Block[];
  color: string;
}

export const tnSchoolsData: District[] = [
  {
    name: "ARIYALUR",
    nameTa: "அரியலூர்",
    color: "#FF6B6B",
    blocks: [
      { name: "Andimadam", schools: [{ sno: 1, name: "GHSS VILANDAI ANDIMADAM" }] },
      { name: "Ariyalur", schools: [{ sno: 2, name: "GHSS ARIYALUR" }] },
      { name: "Jayankondam", schools: [{ sno: 3, name: "GMHSS JAYANKONDAM" }] },
      { name: "T.Palur", schools: [{ sno: 4, name: "GHSS T.PALUR" }] }
    ]
  },
  {
    name: "CHENGALPATTU",
    nameTa: "செங்கல்பட்டு",
    color: "#4ECDC4",
    blocks: [
      { name: "Kattankolathur", schools: [
        { sno: 5, name: "GGHSS, CHENGALPATTU" },
        { sno: 6, name: "GBHSS NANDHIVARAM" }
      ]},
      { name: "Lathur", schools: [
        { sno: 7, name: "GGHSS CHEYYUR" },
        { sno: 8, name: "GHSS KOOVZTHUR" }
      ]},
      { name: "Madurantagam", schools: [
        { sno: 9, name: "H.S.S.G.G.H.S.S.Madhuranthakam" },
        { sno: 10, name: "GHSS KARUNKUZHI" }
      ]},
      { name: "St.Thomas Mount", schools: [{ sno: 11, name: "MMA GHSS PALLAVARAM" }] },
      { name: "Thiruporur", schools: [
        { sno: 12, name: "GBHSS THIRUPORUR" },
        { sno: 13, name: "GHSS KELAMBAKKAM" }
      ]}
    ]
  },
  {
    name: "CHENNAI",
    nameTa: "சென்னை",
    color: "#45B7D1",
    blocks: [
      { name: "Adyar", schools: [{ sno: 14, name: "GHSS PERUNGUDI" }] },
      { name: "Anna Nagar", schools: [{ sno: 15, name: "GOVERNMENT MODEL HIGHER SECONDARY SCHOOL" }] },
      { name: "Kodambakkam", schools: [{ sno: 16, name: "GHSS MGR NAGAR" }] },
      { name: "Royapuram South", schools: [{ sno: 17, name: "Govt. Muslim Higher Secondary School" }] },
      { name: "Teynampet", schools: [{ sno: 18, name: "GMHSS, TRIPLICANE CHENNAI-05" }] },
      { name: "Thiru Vi Ka Nagar", schools: [{ sno: 19, name: "GMHSS GKM COLONY" }] },
      { name: "Thiruvotriyur", schools: [{ sno: 20, name: "JGGGHSS THIRUVOTRIYUR (JEYAGOPAL GARODIYA)" }] },
      { name: "Tondiarpet", schools: [{ sno: 21, name: "GHSS MKB NAGAR" }] }
    ]
  },
  {
    name: "COIMBATORE",
    nameTa: "கோயம்புத்தூர்",
    color: "#96CEB4",
    blocks: [
      { name: "Coimbatore city", schools: [
        { sno: 22, name: "CCMA GGHSS RAJA STREET COIMBATORE" },
        { sno: 23, name: "CHSS RS Puram" }
      ]},
      { name: "Karamadai", schools: [{ sno: 24, name: "GHSS METTUPALAYAM" }] },
      { name: "Kinathukkadavu", schools: [{ sno: 25, name: "GHSS KINATHUKADAVU" }] },
      { name: "Periyanaickan Palayam", schools: [{ sno: 26, name: "GHSS(MODEL) ASOKAPURAM" }] },
      { name: "Pollachi south", schools: [
        { sno: 27, name: "MUNICIPAL (B)HSS POLLACHI" },
        { sno: 28, name: "MPL Girls HSS" }
      ]},
      { name: "Sarkar Samakkulam", schools: [{ sno: 29, name: "GHSS SS KULAM" }] },
      { name: "Sulur", schools: [
        { sno: 30, name: "GGHSS SULUR" },
        { sno: 31, name: "GBHSS Sulur" }
      ]},
      { name: "Thondamuthur", schools: [
        { sno: 32, name: "GBHSS THONDAMUTHUR" },
        { sno: 33, name: "GGHSS Thondamuthur" }
      ]},
      { name: "Valparai", schools: [{ sno: 34, name: "GHSS VALPARAI" }] }
    ]
  },
  {
    name: "CUDDALORE",
    nameTa: "கடலூர்",
    color: "#FFEAA7",
    blocks: [
      { name: "Bhuvanagiri", schools: [
        { sno: 35, name: "GBHSS BHUVANAGIRI" },
        { sno: 36, name: "GMGHSS, Bhuvanagiri" }
      ]},
      { name: "Cuddalore", schools: [{ sno: 37, name: "GHSS VANDIPALAYAM" }] },
      { name: "Kattumannarkoil", schools: [
        { sno: 38, name: "GBHSS KATTUMANARKOIL" },
        { sno: 39, name: "GGHSS, Kattumannarkoil" }
      ]},
      { name: "Kumaratchi", schools: [
        { sno: 40, name: "GGHSS CHIDAMBARAM" },
        { sno: 41, name: "ADW Nanthanar Boys School, Chidambaram" }
      ]},
      { name: "Kurinjipadi", schools: [
        { sno: 42, name: "GHSS, Kullanchavadi" },
        { sno: 43, name: "GGHSS KURINJIPADI" }
      ]},
      { name: "Mangalore", schools: [{ sno: 44, name: "GMHSS, M. Podaiyur" }] },
      { name: "Panruti", schools: [{ sno: 45, name: "GHSS PANRUTI" }] },
      { name: "Virudhachalam", schools: [
        { sno: 46, name: "GMGHSS, Virudhachalam" },
        { sno: 47, name: "GBHSS VIRUDHACHALAM" }
      ]}
    ]
  },
  {
    name: "DHARMAPURI",
    nameTa: "தர்மபுரி",
    color: "#DDA0DD",
    blocks: [
      { name: "Dharmapuri", schools: [
        { sno: 48, name: "AVVAIYAR GGHSS DHARMAPURI" },
        { sno: 49, name: "Adhiyaman GBHSS, Dharmapuri" }
      ]},
      { name: "Harur", schools: [
        { sno: 50, name: "GBHSS HARUR" },
        { sno: 51, name: "GGHSS, Harur" }
      ]},
      { name: "Palacode", schools: [
        { sno: 52, name: "GBHSS PALACODU" },
        { sno: 53, name: "GGHSS, Palacode" }
      ]},
      { name: "Pappireddipatti", schools: [
        { sno: 54, name: "GBHSS PAPPIREDDYPATTI" },
        { sno: 55, name: "GGHSS, Pappireddipatti" }
      ]},
      { name: "Pennagaram", schools: [
        { sno: 56, name: "GGHSS PENNAGARAM" },
        { sno: 57, name: "GBHSS, Pennagaram" }
      ]}
    ]
  },
  {
    name: "DINDIGUL",
    nameTa: "திண்டுக்கல்",
    color: "#98D8C8",
    blocks: [
      { name: "Athoor", schools: [{ sno: 58, name: "GHSS, N.PANJAMPATTI" }] },
      { name: "DINDIGUL", schools: [{ sno: 59, name: "GHSS PALANI ROAD - DINDIGUL" }] },
      { name: "Natham", schools: [
        { sno: 60, name: "Duraikamalam GMHSS Naththam" },
        { sno: 61, name: "GGHSS, Natham" }
      ]},
      { name: "Nilakottai", schools: [{ sno: 62, name: "GHSS Nilakkottai" }] },
      { name: "Oddanchathram", schools: [{ sno: 63, name: "KRGMHSS Oddanchatram" }] },
      { name: "Palani - Rural", schools: [
        { sno: 64, name: "Municipal Boys HSS, Palani" },
        { sno: 67, name: "GGHSS Palani" }
      ]},
      { name: "Vedasandur", schools: [
        { sno: 65, name: "GBHSS VEDASANDUR" },
        { sno: 66, name: "GGHSS, Vedasandur" }
      ]}
    ]
  },
  {
    name: "ERODE",
    nameTa: "ஈரோடு",
    color: "#F7DC6F",
    blocks: [
      { name: "Anthiyur", schools: [
        { sno: 68, name: "GGHSS ANTHIYUR" },
        { sno: 69, name: "GBHSS, ANTHIYUR" }
      ]},
      { name: "Bhavani", schools: [
        { sno: 70, name: "GGHSS BHAVANI CENTRE 1 (FINAL)" },
        { sno: 71, name: "GBHSS, BHAVANI" }
      ]},
      { name: "Bhavani sagar", schools: [
        { sno: 72, name: "KOM GGHSS P.PULIYAMPATTI" },
        { sno: 73, name: "KVK GBHSS, P.PULIAMPATTI" }
      ]},
      { name: "Erode", schools: [
        { sno: 74, name: "GHSS (MODEL) ERODE(GTS)" },
        { sno: 75, name: "CHSS, RAILWAY COLONY" }
      ]},
      { name: "Gobi", schools: [
        { sno: 76, name: "MUNICIPAL BOYS HSS GOBICHETTIPALAYAM" },
        { sno: 77, name: "MGHSS, GOBI" }
      ]},
      { name: "Modakurichi", schools: [
        { sno: 78, name: "GBHSS, MODAKKURICHI" },
        { sno: 79, name: "GGHSS MODAKKURICHI CENTRE 1 (FINAL)" }
      ]},
      { name: "Nambiyur", schools: [
        { sno: 80, name: "GBHSS NAMBIYUR" },
        { sno: 81, name: "GGHSS, NAMBIYUR" }
      ]},
      { name: "Perundurai", schools: [
        { sno: 82, name: "GBHSS PERUNDURAI" },
        { sno: 83, name: "GGHSS, PERUNDURAI" }
      ]}
    ]
  },
  {
    name: "KALLAKURICHI",
    nameTa: "கள்ளக்குறிச்சி",
    color: "#BB8FCE",
    blocks: [
      { name: "Kallakurichi", schools: [
        { sno: 84, name: "GMGHSS KALLAKURICHI" },
        { sno: 85, name: "GBHSS KALLAKURICHI" }
      ]},
      { name: "Rishivanthiyam", schools: [{ sno: 86, name: "GHSS ARIYALUR" }] },
      { name: "Sankarapuram", schools: [
        { sno: 87, name: "GBHSS SANKARAPURAM" },
        { sno: 88, name: "GGHSS - DEVAPANDALAM" }
      ]},
      { name: "Thirukoilur", schools: [
        { sno: 89, name: "GGHSS THIRUKOILUR" },
        { sno: 90, name: "GBHSS THIRUKOILUR" }
      ]},
      { name: "Ulundurpet", schools: [
        { sno: 91, name: "GGHSS ULUNTHURPET" },
        { sno: 92, name: "GBHSS ULUNTHURPET" }
      ]}
    ]
  },
  {
    name: "KANCHEEPURAM",
    nameTa: "காஞ்சிபுரம்",
    color: "#85C1E9",
    blocks: [
      { name: "Kancheepuram", schools: [
        { sno: 93, name: "GHSS(GIRLS) BIG KANCHIPURAM" },
        { sno: 94, name: "GOVT CMS BOYS HR SEC SCHOOL,KANCHEEPURAM" }
      ]},
      { name: "Kundrathur", schools: [
        { sno: 95, name: "GGHSS KUNDRATHUR" },
        { sno: 96, name: "GOVT BOYS HR SEC SCHOOL,KUNDRATHUR" }
      ]},
      { name: "Sriperumbudur", schools: [
        { sno: 97, name: "GGHSS SRIPERUMPUDUR" },
        { sno: 98, name: "J J GOVT BOYS HR SEC SCHOOL, SRIPERUMBUDUR" }
      ]},
      { name: "Uthiramerur", schools: [{ sno: 99, name: "GHSS THIRUPULIVANAM" }] },
      { name: "Walajabad", schools: [
        { sno: 100, name: "GGHSS WALAJABAD" },
        { sno: 101, name: "GOVT BOYS HR SEC SCHOOL, VALAJABAD" }
      ]}
    ]
  },
  {
    name: "KANNIYAKUMARI",
    nameTa: "கன்னியாகுமரி",
    color: "#F1948A",
    blocks: [
      { name: "Agastheeswaram", schools: [{ sno: 102, name: "SLB GHSS NAGARKOIL" }] },
      { name: "Killiyoor", schools: [{ sno: 103, name: "GHSS KARUNGAL" }] },
      { name: "Kurunthancode", schools: [{ sno: 104, name: "GHSS AMMANDIVILAI" }] },
      { name: "Melpuram", schools: [{ sno: 105, name: "GBHSS MARTHANDAM" }] },
      { name: "Thuckalay", schools: [{ sno: 106, name: "GMHSS THUCKALAY" }] }
    ]
  },
  {
    name: "KARUR",
    nameTa: "கரூர்",
    color: "#82E0AA",
    blocks: [
      { name: "Aravakurichi", schools: [{ sno: 107, name: "GHSS MALAIKOILUR" }] },
      { name: "Karur", schools: [
        { sno: 108, name: "MUNICIPAL(B) HSS KARUR" },
        { sno: 109, name: "PMGHSS - Karur" }
      ]},
      { name: "Krishnarayapuram", schools: [{ sno: 110, name: "GHSS KRISHNARAYAPURAM" }] },
      { name: "Kulithalai", schools: [
        { sno: 111, name: "GGHSS KULITHALAI" },
        { sno: 112, name: "GBHSS-Kulithalai" }
      ]}
    ]
  },
  {
    name: "KRISHNAGIRI",
    nameTa: "கிருஷ்ணகிரி",
    color: "#F8C471",
    blocks: [
      { name: "Bargur", schools: [
        { sno: 113, name: "GGHSS BARGUR" },
        { sno: 114, name: "GBHHS Bargur" }
      ]},
      { name: "Hosur", schools: [
        { sno: 115, name: "GGHSS HOSUR" },
        { sno: 116, name: "RV Boys GHSS" }
      ]},
      { name: "Krishnagiri", schools: [
        { sno: 117, name: "GGHSS KRISHNAGIRI" },
        { sno: 118, name: "GBHSS KRISHNAGIRI" }
      ]},
      { name: "THALLY", schools: [{ sno: 119, name: "GHSS ANCHETTY" }] },
      { name: "Kelamangalam", schools: [
        { sno: 120, name: "GGHSS DENKANIKOTTAI" },
        { sno: 121, name: "GBHSS DENKANIKOTTAI" }
      ]},
      { name: "Uthangarai", schools: [
        { sno: 122, name: "GGHSS UTHANGARAI" },
        { sno: 123, name: "GBHSS UTHANGARAI" }
      ]},
      { name: "Veppanapalli", schools: [
        { sno: 124, name: "GGHSS, Veppanapalli" },
        { sno: 124, name: "GBHSS, Veppanapalli" }
      ]}
    ]
  },
  {
    name: "MADURAI",
    nameTa: "மதுரை",
    color: "#D7BDE2",
    blocks: [
      { name: "Madurai East", schools: [{ sno: 125, name: "GMGHSS Y OTHAKADAI" }] },
      { name: "Madurai North", schools: [{ sno: 126, name: "GGHSS,MAHABOOBPALAYAM, MDU-16" }] },
      { name: "Madurai South", schools: [{ sno: 127, name: "CORP EVRN GIRLS HSS, SOUTH VELI STREET" }] },
      { name: "Madurai West", schools: [{ sno: 128, name: "Corporation Pandiyan Nedunchelian HSS" }] },
      { name: "Melur", schools: [
        { sno: 129, name: "G(G)HSS, MELUR" },
        { sno: 130, name: "Government Higher Secondary School,Thiruvathavur" }
      ]},
      { name: "T.vadipatti", schools: [
        { sno: 131, name: "GOVT BOYS HR SEC SCHOOL, T.VADIPATTI" },
        { sno: 132, name: "Government Girls Higher Secondary School,Sholavandan" }
      ]},
      { name: "Thirumangalam", schools: [{ sno: 133, name: "GHSS THIRUMANGALAM" }] },
      { name: "Usilampatti", schools: [{ sno: 134, name: "GHSS USILAMPATTI" }] },
      { name: "Thiruparamkundram", schools: [{ sno: 135, name: "NAVALAR SOMASUNDRA BHARATHIYAR CGHSS PAZHANGANATHAM" }] }
    ]
  },
  {
    name: "MAYILADUTHURAI",
    nameTa: "மயிலாடுதுறை",
    color: "#AED6F1",
    blocks: [
      { name: "Mayiladudurai", schools: [{ sno: 136, name: "KITTAPPA MUNICIPAL HSS" }] },
      { name: "Sembanarkoil", schools: [{ sno: 137, name: "GHSS, Akkur" }] },
      { name: "Sirkali", schools: [{ sno: 138, name: "GHSS VAITHEESHWARANKOIL" }] },
      { name: "Kuttalam", schools: [{ sno: 139, name: "GOVT MODEL HR. SEC. SCHOOL, KUTTALAM" }] }
    ]
  },
  {
    name: "NAGAPATTINAM",
    nameTa: "நாகப்பட்டினம்",
    color: "#A9DFBF",
    blocks: [
      { name: "Kelvelur", schools: [{ sno: 140, name: "GHSS KURUKATHI" }] },
      { name: "Nagapattinam", schools: [
        { sno: 141, name: "MGHSS NAGAPATTINAM" },
        { sno: 142, name: "GHSS-SIKKAL" }
      ]},
      { name: "Thalainayar", schools: [{ sno: 143, name: "VGHSS MANAKKUDI" }] },
      { name: "Vedaranyam", schools: [
        { sno: 144, name: "GGHSS AYAKKARANPULAM - 3 (CENTRE 1)" },
        { sno: 145, name: "SKS GHSS VEDARANYAM" }
      ]},
      { name: "Thirumarugal", schools: [{ sno: 146, name: "GHSS THIRUMARUGAL" }] }
    ]
  },
  {
    name: "NAMAKKAL",
    nameTa: "நாமக்கல்",
    color: "#FAD7A0",
    blocks: [
      { name: "Namakkal", schools: [
        { sno: 147, name: "GGHSS NAMAKKAL" },
        { sno: 148, name: "GHSS NAMAKKAL south" }
      ]},
      { name: "Pallipalayam", schools: [
        { sno: 149, name: "GBHSS KUMARAPALAYAM" },
        { sno: 150, name: "GGHSS Kumarapalayam" }
      ]},
      { name: "Paramathi", schools: [
        { sno: 151, name: "GBHSS PARAMATHI" },
        { sno: 152, name: "GGHSS Paramathi" }
      ]},
      { name: "Rasipuram", schools: [{ sno: 153, name: "GHSS ANNASALAI RASIPURAM" }] },
      { name: "Sendamangalam", schools: [
        { sno: 154, name: "GGHSS SENDAMANGALAM" },
        { sno: 155, name: "GBHSS Sendamangalam" }
      ]},
      { name: "Tiruchengode", schools: [
        { sno: 156, name: "GGHSS TIRUCHENGODE" },
        { sno: 157, name: "GBHSS Tiruchengode" }
      ]}
    ]
  },
  {
    name: "PERAMBALUR",
    nameTa: "பெரம்பலூர்",
    color: "#D5DBDB",
    blocks: [
      { name: "Alathur", schools: [{ sno: 158, name: "GHSS MODEL PADALUR" }] },
      { name: "Perambalur", schools: [{ sno: 159, name: "GHSS PERAMBALUR" }] },
      { name: "Veppanthattai", schools: [{ sno: 160, name: "GHSS, Veppanthattai" }] },
      { name: "Veppur", schools: [
        { sno: 161, name: "GGHSS, KUNNAM" },
        { sno: 162, name: "GHSS, Veppur" }
      ]}
    ]
  },
  {
    name: "PUDUKKOTTAI",
    nameTa: "புதுக்கோட்டை",
    color: "#FADBD8",
    blocks: [
      { name: "Aranthangi", schools: [
        { sno: 163, name: "GGHSS, ARANTHANGI" },
        { sno: 164, name: "GOVERNMENT MODEL HIGHER SECONDARY SCHOOL , ARANTHANGI" }
      ]},
      { name: "Gandarvakkottai", schools: [
        { sno: 165, name: "GBHSS GANDARAVAKOTTAI" },
        { sno: 166, name: "GOVERNMENT GIRLS HR SEC SCHOOL, GANDARVAKKOTTAI" }
      ]},
      { name: "Pudukkottai", schools: [
        { sno: 167, name: "Ranees GGHSS, Pudukkottai" },
        { sno: 168, name: "SRI BRAGATHANBAL GOVT HR SEC SCHOOL, PUDUKKOTTAI." }
      ]},
      { name: "Thirumayam", schools: [
        { sno: 169, name: "GBHSS,THIRUMAYAM" },
        { sno: 170, name: "GOVT.GIRLS.HR.SEC.SCHOOL, THIRUMAYAM" }
      ]},
      { name: "Thiruvarankulam", schools: [
        { sno: 171, name: "GBHSS ALANGUDI" },
        { sno: 172, name: "GGHSS ALANGUDI" }
      ]},
      { name: "Viralimalai", schools: [
        { sno: 173, name: "GBHSS-VIRALIMALAI" },
        { sno: 174, name: "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL, VIRALIMALAI" }
      ]}
    ]
  },
  {
    name: "RAMANATHAPURAM",
    nameTa: "ராமநாதபுரம்",
    color: "#D4E6F1",
    blocks: [
      { name: "Kadaladi", schools: [
        { sno: 175, name: "GBHSS SAYALKUDI" },
        { sno: 176, name: "GGHSS SAYALKUDI" }
      ]},
      { name: "Mandapam", schools: [{ sno: 177, name: "GHSS, MANDAPAM CAMP" }] },
      { name: "Mudukulathur", schools: [{ sno: 178, name: "GHSS MUDUKULATHUR" }] },
      { name: "Paramakudi", schools: [{ sno: 179, name: "R.S GBHSS PARAMAKUDI (COMBINED)" }] },
      { name: "Ramanathapuram", schools: [{ sno: 180, name: "Municipal (G)HSS, Ramanathapuram" }] },
      { name: "Thiruvadanai", schools: [
        { sno: 181, name: "GGHSS, THIRUVADANAI" },
        { sno: 182, name: "GBHSS Thiruvadanai" }
      ]}
    ]
  },
  {
    name: "RANIPET",
    nameTa: "ராணிப்பேட்டை",
    color: "#E8DAEF",
    blocks: [
      { name: "Arakkonam", schools: [
        { sno: 183, name: "GBHSS ARAKKONAM" },
        { sno: 184, name: "GGHSS Arakkonam" }
      ]},
      { name: "Arcot", schools: [{ sno: 185, name: "GGHSS ARCOT" }] },
      { name: "Sholingar", schools: [
        { sno: 186, name: "TEM GMHSS SHOLINGUR" },
        { sno: 187, name: "GBHSS SHOLINGAR" }
      ]},
      { name: "Walaja East", schools: [
        { sno: 188, name: "GGHSS WALAJAPET" },
        { sno: 189, name: "GBHSS VANNIVEDU WALAJA" }
      ]},
      { name: "Walaja West", schools: [{ sno: 190, name: "GHSS , Ammur" }] }
    ]
  },
  {
    name: "SALEM",
    nameTa: "சேலம்",
    color: "#D5F5E3",
    blocks: [
      { name: "Attur", schools: [
        { sno: 191, name: "GBHSS ATTUR" },
        { sno: 192, name: "GHSS Thandavarayapuram" }
      ]},
      { name: "Edappadi", schools: [
        { sno: 193, name: "GBHSS Edappadi" },
        { sno: 194, name: "GGHSS . Eddapaddy" }
      ]},
      { name: "Gangavalli", schools: [
        { sno: 195, name: "GBHSS Gangavalli" },
        { sno: 196, name: "GGHSS GANGAVALLI" }
      ]},
      { name: "Kolathur", schools: [{ sno: 197, name: "GHSS METTUR DAM" }] },
      { name: "Omalur", schools: [{ sno: 198, name: "GHSS KARUPPUR" }] },
      { name: "Salem-Urban", schools: [
        { sno: 199, name: "MBHSS FORT" },
        { sno: 200, name: "GGHSS SALEM 1" }
      ]},
      { name: "Sankari", schools: [
        { sno: 201, name: "GGHSS SANKARI" },
        { sno: 202, name: "GBHSS. SANKAGIRI" }
      ]},
      { name: "Tharamangalam", schools: [
        { sno: 203, name: "GGHSS THARAMANGALAM" },
        { sno: 204, name: "Government Model Higher Secondary School, Thuttampatti" }
      ]},
      { name: "Veerapandi", schools: [{ sno: 205, name: "MODEL SCHOOL VEERAPANDI" }] },
      { name: "Yercaud", schools: [{ sno: 206, name: "GHSS YERCAUD" }] },
      { name: "Salem-Rural", schools: [{ sno: 207, name: "GHSS MANIYANOOR" }] }
    ]
  },
  {
    name: "SIVAGANGAI",
    nameTa: "சிவகங்கை",
    color: "#FCF3CF",
    blocks: [
      { name: "Manamadurai", schools: [
        { sno: 208, name: "GGHSS, MANAMADURAI" },
        { sno: 209, name: "GOVT HR SEC SCHOOL IDAIKATTUR" }
      ]},
      { name: "Sakkottai", schools: [{ sno: 210, name: "MV GHSS, KARAIKUDI" }] },
      { name: "Singampunari", schools: [
        { sno: 211, name: "GBHSS SINGAMPUNARI" },
        { sno: 212, name: "RM RM GOVT GIRLS HR SEC SCHOOL SINGAMPUNARI" }
      ]},
      { name: "Sivagangai", schools: [{ sno: 213, name: "GOVT HSS MARUTHUPANDIYAR NAGAR" }] },
      { name: "Thirupatur", schools: [
        { sno: 214, name: "A.P.GOVT.(B)HR.SEC.SCHOOL THIRUPPATHUR" },
        { sno: 215, name: "NM G(G)HSS.Thiruppathur" }
      ]},
      { name: "Thiruppuvanam", schools: [
        { sno: 216, name: "GGHSS THIRUPPUVANAM" },
        { sno: 217, name: "GOVT BOYS HSS THIRUPPUVANAM" }
      ]}
    ]
  },
  {
    name: "TENKASI",
    nameTa: "தென்காசி",
    color: "#EBDEF0",
    blocks: [
      { name: "Alangulam", schools: [{ sno: 218, name: "GHSS, Alangulam" }] },
      { name: "Kadayanallur", schools: [
        { sno: 219, name: "GOVT (G) HR SEC SCHOOL, KADAYANALLUR" },
        { sno: 220, name: "GBHSS, KADAYANALLUR" }
      ]},
      { name: "Sankarankovil", schools: [
        { sno: 221, name: "GGHSS SANKARANKOVIL" },
        { sno: 222, name: "GOMATHI AMBAL GBHSS, SANKARANKOVIL" }
      ]},
      { name: "Tenkasi", schools: [
        { sno: 223, name: "TMT.MANJAMMAL GGHSS TENKASI" },
        { sno: 224, name: "ICI GBHSS, TENKASI" }
      ]},
      { name: "Vasudevanallur", schools: [{ sno: 225, name: "GHSS VASUDEVANALLUR" }] }
    ]
  },
  {
    name: "THANJAVUR",
    nameTa: "தஞ்சாவூர்",
    color: "#ABEBC6",
    blocks: [
      { name: "Kumbakonam", schools: [{ sno: 226, name: "VAIGOVINDASAMY NINAIVU GHSS THARASURAM" }] },
      { name: "Orathanadu", schools: [
        { sno: 227, name: "GGHSS ORATHANADU" },
        { sno: 228, name: "GBHSS ORATHANADU" }
      ]},
      { name: "Papanasam", schools: [{ sno: 229, name: "GHSS - AYYAMPETTAI" }] },
      { name: "Pattukkottai", schools: [{ sno: 230, name: "GOVERNMENT MODEL HIGHER SEC SCHOOL - PATTUKOTTAI" }] },
      { name: "Peravurani", schools: [
        { sno: 231, name: "GGHSS PERAVURANI (COMBINED)" },
        { sno: 232, name: "GBHSS PERAVURANI" }
      ]},
      { name: "Thiruvaiyar", schools: [
        { sno: 233, name: "GGHSS THIRUVAIYARU" },
        { sno: 234, name: "GHSS - MELATHIRUPPANTHURITHI" }
      ]},
      { name: "Thiruvidaimarudhur", schools: [
        { sno: 235, name: "GGHSS NACHIYARKOIL THIRUVIDAIMARUTHUR THANJAVUR" },
        { sno: 236, name: "GBHSS - NACHIYARKOVIL" }
      ]},
      { name: "Thanjavur(Urban)", schools: [{ sno: 237, name: "GGHSS ARANMANAIVALAGAM THANJAVUR" }] }
    ]
  },
  {
    name: "THE NILGIRIS",
    nameTa: "நீலகிரி",
    color: "#85929E",
    blocks: [
      { name: "Coonoor", schools: [{ sno: 238, name: "ARINGAR ANNA GHSS" }] },
      { name: "Gudalur", schools: [{ sno: 239, name: "GHSS GUDALUR CENTER I" }] },
      { name: "Udhagamandalam", schools: [{ sno: 240, name: "GHSS OOTY" }] }
    ]
  },
  {
    name: "THENI",
    nameTa: "தேனி",
    color: "#F9E79F",
    blocks: [
      { name: "Aundipatty", schools: [
        { sno: 241, name: "GBHSS AUNDIPATTI" },
        { sno: 242, name: "Government Girls Higher secondary school" }
      ]},
      { name: "Bodinayakanur", schools: [{ sno: 243, name: "SEVENTHWARD GHSS BODI" }] },
      { name: "Cumbum", schools: [
        { sno: 244, name: "AR Girls HSS,Cumbum" },
        { sno: 245, name: "GHSS, KK patty" }
      ]},
      { name: "Periyakulam", schools: [
        { sno: 246, name: "V.M.BOYS GHSS, PERIYAKULAM" },
        { sno: 247, name: "GHSS Lakshmipuram,Periyakulam" }
      ]}
    ]
  },
  {
    name: "THOOTHUKKUDI",
    nameTa: "தூத்துக்குடி",
    color: "#AEB6BF",
    blocks: [
      { name: "Kovilpatti", schools: [
        { sno: 248, name: "GGHSS KOVILPATTI" },
        { sno: 249, name: "VOC GHSS, KOVILPATTI" }
      ]},
      { name: "Ottapidaram", schools: [{ sno: 250, name: "VOC GHSS OTTAPIDARAM" }] },
      { name: "Srivaikundam", schools: [
        { sno: 251, name: "AKS GIRLS HSS SRIVAIKUNDAM" },
        { sno: 252, name: "GHSS Mukkani" }
      ]},
      { name: "Thiruchenthur", schools: [
        { sno: 253, name: "SMG GHSS THIRUCHENDUR" },
        { sno: 254, name: "ASA GOVT BOYS HSS, TIRUCHENDUR" }
      ]},
      { name: "Thoothukudi Rural", schools: [{ sno: 255, name: "GHSS M.THANGAMMALPURAM" }] },
      { name: "Thoothukudi Urban", schools: [{ sno: 256, name: "SEENA VANA GHSS THOOTHUKUDI" }] },
      { name: "Vilathikulam", schools: [{ sno: 257, name: "GHSS VILATHIKULAM" }] },
      { name: "Kayathar", schools: [{ sno: 258, name: "GHSS KAYATHAR" }] }
    ]
  },
  {
    name: "TIRUCHIRAPPALLI",
    nameTa: "திருச்சிராப்பள்ளி",
    color: "#D2B4DE",
    blocks: [
      { name: "Lalgudi", schools: [{ sno: 259, name: "GHSS , LALGUDI" }] },
      { name: "Andhanallur", schools: [{ sno: 260, name: "GHSS,AYILAPETTAI,TRICHY" }] },
      { name: "Manapparai", schools: [
        { sno: 261, name: "GBHSS MANAPARAI" },
        { sno: 262, name: "GGHSS,Manapparai" }
      ]},
      { name: "Mannachanallur", schools: [
        { sno: 263, name: "GMGHSS MANNACHANALLUR" },
        { sno: 264, name: "GOVT.BOYS HSC, MANNACHANALLUR" }
      ]},
      { name: "Musiri", schools: [
        { sno: 265, name: "GGHSS MUSIRI" },
        { sno: 266, name: "GBHSS,Musiri" }
      ]},
      { name: "Thiruverumbur", schools: [{ sno: 267, name: "GOVT ADW GIRLS HSS KATTUR" }] },
      { name: "Thuraiyur", schools: [
        { sno: 268, name: "GGHSS THURAIYUR" },
        { sno: 269, name: "GOVT ADW HSC SCHOOL, THURAIYUR" }
      ]},
      { name: "Trichy-Urban", schools: [{ sno: 270, name: "Govt Syed Murdusha Model HSS Trichy (Combined)" }] }
    ]
  },
  {
    name: "TIRUNELVELI",
    nameTa: "திருநெல்வேலி",
    color: "#A9CCE3",
    blocks: [
      { name: "Ambasamudram", schools: [
        { sno: 271, name: "A V RM V GOVT GIRLS HR SEC SCHOOL AMBASAMUDRAM" },
        { sno: 272, name: "GOVT HR SEC SCHOOL VELLANGULI" }
      ]},
      { name: "Nanguneri", schools: [
        { sno: 273, name: "SANKARA REDDIYAR GBHSS NANGUNERI" },
        { sno: 274, name: "GOVERNMENT GIRLS HR SEC SCHOOL NANGUNERI" }
      ]},
      { name: "Palay-Rural", schools: [{ sno: 275, name: "KRGHSS REDDIYARPATTI, THIRUNELVELI" }] },
      { name: "Palay-Urban", schools: [{ sno: 276, name: "QUIDEMILLETH CHSS,MELAPALAYAM, THIRUNELVELI" }] },
      { name: "Radhapuram", schools: [{ sno: 277, name: "NVC GHSS RADHAPURAM" }] },
      { name: "Tirunelveli Urban", schools: [{ sno: 278, name: "GHSS TIRUNELVELI" }] }
    ]
  },
  {
    name: "TIRUPATHUR",
    nameTa: "திருப்பத்தூர்",
    color: "#F5CBA7",
    blocks: [
      { name: "Jolarpet", schools: [{ sno: 279, name: "GHSS VAKKANAMPATTI" }] },
      { name: "Madhanur", schools: [{ sno: 280, name: "GHSS DEVALAPURAM" }] },
      { name: "Nattrampalli", schools: [{ sno: 281, name: "GMHSS VANIYAMBADI" }] },
      { name: "Thirupattur", schools: [
        { sno: 282, name: "GBHSS THIRUPATUR" },
        { sno: 283, name: "GGHSS, Madavalam" }
      ]}
    ]
  },
  {
    name: "TIRUPPUR",
    nameTa: "திருப்பூர்",
    color: "#D7DBDD",
    blocks: [
      { name: "Palladam", schools: [
        { sno: 284, name: "GGHSS PALLADAM" },
        { sno: 291, name: "GBHSS, Palladam" }
      ]},
      { name: "Avinashi", schools: [
        { sno: 285, name: "GGHSS.AVINASHI" },
        { sno: 286, name: "GBHSS AVINASHI" }
      ]},
      { name: "Dharapuram", schools: [
        { sno: 287, name: "NCP MUNICIPAL BOYS HIGHER SECONDARY SCHOOL DHARAPURAM" },
        { sno: 288, name: "GHSS DHARAPURAM" }
      ]},
      { name: "Gangayam", schools: [{ sno: 289, name: "GHSS KANGAYAM" }] },
      { name: "Madathukulam", schools: [{ sno: 290, name: "GHSS MADATHUKULAM" }] },
      { name: "Tiruppur North", schools: [{ sno: 292, name: "GHSS KUMAR NAGAR" }] },
      { name: "Tiruppur South", schools: [
        { sno: 293, name: "PALANIAMMAL MPL GHSS, TIRUPUR" },
        { sno: 294, name: "KSC BHSS, Tiruppur" }
      ]},
      { name: "Udumalaipattai", schools: [{ sno: 295, name: "BCGGHSS UDUMALPET" }] }
    ]
  },
  {
    name: "TIRUVALLUR",
    nameTa: "திருவள்ளூர்",
    color: "#E6B0AA",
    blocks: [
      { name: "Gummidipoondi", schools: [
        { sno: 296, name: "GBHSS GUMMIDIPOONDI" },
        { sno: 297, name: "GGHSS, GUMMIDIPOONDI" }
      ]},
      { name: "Minjur", schools: [
        { sno: 298, name: "GGHSS PONNERI" },
        { sno: 299, name: "GBHSS, PONNERI" }
      ]},
      { name: "Poonamallee", schools: [
        { sno: 300, name: "GGHSS KAMARAJ NAGAR, AVADI" },
        { sno: 301, name: "GBHSS, KAMARAJ NAGAR" }
      ]},
      { name: "R.K.Pet", schools: [
        { sno: 302, name: "GBHSS RK PET" },
        { sno: 303, name: "GOVT (G) HSS, R.K.PET" }
      ]},
      { name: "Thiruvallur", schools: [
        { sno: 304, name: "RMJ GGHSS TIRUVALLUR" },
        { sno: 305, name: "KMN BRO MPL HSS THIRUVALLUR" }
      ]},
      { name: "Tiruttani", schools: [
        { sno: 306, name: "GBHSS THIRUTTANI" },
        { sno: 307, name: "GGHSS THIRUTTANI" }
      ]},
      { name: "Villivakkam", schools: [{ sno: 308, name: "GHSS SM NAGAR AVADI" }] }
    ]
  },
  {
    name: "TIRUVANNAMALAI",
    nameTa: "திருவண்ணாமலை",
    color: "#F5B7B1",
    blocks: [
      { name: "Arni", schools: [
        { sno: 309, name: "GGMHSS ARNI" },
        { sno: 310, name: "GBHSS, Arni" }
      ]},
      { name: "Chetpet", schools: [{ sno: 311, name: "GHSS - PAZHAMPET" }] },
      { name: "Kalasapakkam", schools: [
        { sno: 312, name: "GGHSS - KALASAPAKKAM" },
        { sno: 313, name: "GMBHSS, Kalasapakkam" }
      ]},
      { name: "Chengam", schools: [
        { sno: 314, name: "GBHSS CHENGAM" },
        { sno: 315, name: "GGHSS Chengam" }
      ]},
      { name: "Cheyyar", schools: [
        { sno: 316, name: "GBHSS CHEYYAR" },
        { sno: 317, name: "GMGHSS, Cheyyar" }
      ]},
      { name: "Kilpennathur", schools: [
        { sno: 318, name: "GGHSS, KILPENNATHUR" },
        { sno: 319, name: "GBHSS, Kilpennathur" }
      ]},
      { name: "Polur", schools: [
        { sno: 320, name: "GGHSS - POLUR" },
        { sno: 321, name: "GBHSS, Polur" }
      ]},
      { name: "Tiruvannamalai", schools: [
        { sno: 322, name: "Municipal MGGHSS (Model), Tiruvannamalai" },
        { sno: 323, name: "TNAP GHSS, Tiruvannamalai" }
      ]},
      { name: "Vandavasi", schools: [
        { sno: 324, name: "GBHSS VANDAVASI" },
        { sno: 325, name: "GGHSS, Vandavasi" }
      ]},
      { name: "Vembakkam", schools: [
        { sno: 326, name: "GBHSS VEMBAKKAM" },
        { sno: 327, name: "GGHSS, Vembakkam" }
      ]}
    ]
  },
  {
    name: "TIRUVARUR",
    nameTa: "திருவாரூர்",
    color: "#D5D8DC",
    blocks: [
      { name: "Mannargudi", schools: [
        { sno: 328, name: "GGHSS MODEL MANNARGUDI" },
        { sno: 329, name: "MHSS, Co operative urban School, Mannargudi" }
      ]},
      { name: "Nannilam", schools: [
        { sno: 330, name: "GGHSS NANNILAM" },
        { sno: 331, name: "GBHSS, Nannilam" }
      ]},
      { name: "Thiruthuraipoondi", schools: [
        { sno: 332, name: "GBHSS THIRUTHURAIPOONDI" },
        { sno: 333, name: "GGHSS, Thiruthuraipoondi" }
      ]},
      { name: "Thiruvarur", schools: [{ sno: 334, name: "GHSS PULIVALAM" }] },
      { name: "Valangaiman", schools: [
        { sno: 335, name: "GBHSS VALANGAIMAN" },
        { sno: 336, name: "GGHSS, Valangaiman" }
      ]}
    ]
  },
  {
    name: "VELLORE",
    nameTa: "வேலூர்",
    color: "#A3E4D7",
    blocks: [
      { name: "Anaicut", schools: [
        { sno: 337, name: "GBHSS POIGAI" },
        { sno: 338, name: "GGHSS, Poigai" }
      ]},
      { name: "Gudiyatham", schools: [
        { sno: 339, name: "GGHSS NADUPET GUDIYATHAM" },
        { sno: 340, name: "GBHSS, Nellorepet" }
      ]},
      { name: "K.V.Kuppam", schools: [
        { sno: 341, name: "GBHSS K.V.KUPPAM" },
        { sno: 342, name: "GGHSS, K.V.Kuppam" }
      ]},
      { name: "Katpadi", schools: [
        { sno: 343, name: "GBHSS KATPADI" },
        { sno: 344, name: "GGHSS, Katpadi" }
      ]},
      { name: "Vellore Urban", schools: [{ sno: 345, name: "GOVT MUSLIM HSS VELLORE" }] }
    ]
  },
  {
    name: "VILLUPURAM",
    nameTa: "விழுப்புரம்",
    color: "#F9E79F",
    blocks: [
      { name: "Koliyanur", schools: [
        { sno: 346, name: "GOVT MODEL GIRLS HR SEC SCHOOL, VILLUPURAM" },
        { sno: 347, name: "Thiru Kamaraj Municipal Hr. Sec. School, Villupuram" }
      ]},
      { name: "Thiruvennainallur", schools: [
        { sno: 348, name: "GGHSS THIRUVENNAINALLUR" },
        { sno: 349, name: "GOVERNMENT MODEL HIGHER SECONDARY SCHOOL EMAPPUR" }
      ]},
      { name: "Gingee", schools: [
        { sno: 350, name: "RDGBHSS GINGEE" },
        { sno: 351, name: "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL GINGEE" }
      ]},
      { name: "Mailam", schools: [{ sno: 352, name: "GOVT HR SEC SCHOOL, THAZHUTHALI." }] },
      { name: "Olakkur", schools: [{ sno: 353, name: "MPL HSS, KAVERIPAKKAM, DINDIVANAM" }] },
      { name: "Vaanur", schools: [{ sno: 354, name: "GHSS, Kiliyanur" }] },
      { name: "Vikaravandi", schools: [{ sno: 355, name: "GHSS VIKIRAVANDI" }] }
    ]
  },
  {
    name: "VIRUDHUNAGAR",
    nameTa: "விருதுநகர்",
    color: "#FADBD8",
    blocks: [
      { name: "Aruppukottai", schools: [{ sno: 356, name: "GHSS PALAVANATHAM" }] },
      { name: "Rajapalayam", schools: [
        { sno: 357, name: "SSG(B)HSS" },
        { sno: 358, name: "SSG(G)HSS,RAJAPALAYAM" }
      ]},
      { name: "Sivakasi", schools: [{ sno: 359, name: "A U MUNICIPAL HIGHER SECONDARY SCHOOL - SIVAKASI." }] },
      { name: "Srivilliputhur", schools: [{ sno: 360, name: "MPL TVK HSS , Srivilliputhur" }] },
      { name: "Sattur", schools: [{ sno: 361, name: "GHSS Padanthal" }] },
      { name: "Thiruchuli", schools: [{ sno: 362, name: "GHSS, M.REDDIAPATTI(MODEL)" }] },
      { name: "Virudhunagar", schools: [{ sno: 363, name: "TPNM GIRLS HR SEC SCHOOL VIRUDHUNAGAR - CENTRE 1" }] }
    ]
  }
];

// Helper functions
export const getTotalStats = () => {
  let totalBlocks = 0;
  let totalSchools = 0;

  tnSchoolsData.forEach(district => {
    totalBlocks += district.blocks.length;
    district.blocks.forEach(block => {
      totalSchools += block.schools.length;
    });
  });

  return {
    districts: tnSchoolsData.length,
    blocks: totalBlocks,
    schools: totalSchools
  };
};

export const getDistrictByName = (name: string) => {
  return tnSchoolsData.find(d => d.name.toLowerCase() === name.toLowerCase());
};

export const searchSchools = (query: string) => {
  const results: { district: string; block: string; school: School }[] = [];
  const lowerQuery = query.toLowerCase();

  tnSchoolsData.forEach(district => {
    district.blocks.forEach(block => {
      block.schools.forEach(school => {
        if (school.name.toLowerCase().includes(lowerQuery) ||
            district.name.toLowerCase().includes(lowerQuery) ||
            block.name.toLowerCase().includes(lowerQuery)) {
          results.push({
            district: district.name,
            block: block.name,
            school
          });
        }
      });
    });
  });

  return results;
};
