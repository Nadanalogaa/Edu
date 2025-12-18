// Tamil Nadu Schools Data - VP Schools
// Total: 38 Districts, ~220 Blocks, 363 Schools

export interface School {
  sno: number;
  name: string;
  studentCount: number;
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
      { name: "Andimadam", schools: [{ sno: 1, name: "GHSS VILANDAI ANDIMADAM", studentCount: 612 }] },
      { name: "Ariyalur", schools: [{ sno: 2, name: "GHSS ARIYALUR", studentCount: 694 }] },
      { name: "Jayankondam", schools: [{ sno: 3, name: "GMHSS JAYANKONDAM", studentCount: 246 }] },
      { name: "T.Palur", schools: [{ sno: 4, name: "GHSS T.PALUR", studentCount: 568 }] }
    ]
  },
  {
    name: "CHENGALPATTU",
    nameTa: "செங்கல்பட்டு",
    color: "#4ECDC4",
    blocks: [
      { name: "Kattankolathur", schools: [
        { sno: 5, name: "GGHSS, CHENGALPATTU", studentCount: 424 },
        { sno: 6, name: "GBHSS NANDHIVARAM", studentCount: 461 }
      ]},
      { name: "Lathur", schools: [
        { sno: 7, name: "GGHSS CHEYYUR", studentCount: 432 },
        { sno: 8, name: "GHSS KOOVZTHUR", studentCount: 793 }
      ]},
      { name: "Madurantagam", schools: [
        { sno: 9, name: "H.S.S.G.G.H.S.S.Madhuranthakam", studentCount: 202 },
        { sno: 10, name: "GHSS KARUNKUZHI", studentCount: 656 }
      ]},
      { name: "St.Thomas Mount", schools: [{ sno: 11, name: "MMA GHSS PALLAVARAM", studentCount: 222 }] },
      { name: "Thiruporur", schools: [
        { sno: 12, name: "GBHSS THIRUPORUR", studentCount: 397 },
        { sno: 13, name: "GHSS KELAMBAKKAM", studentCount: 362 }
      ]}
    ]
  },
  {
    name: "CHENNAI",
    nameTa: "சென்னை",
    color: "#45B7D1",
    blocks: [
      { name: "Adyar", schools: [{ sno: 14, name: "GHSS PERUNGUDI", studentCount: 568 }] },
      { name: "Anna Nagar", schools: [{ sno: 15, name: "GOVERNMENT MODEL HIGHER SECONDARY SCHOOL", studentCount: 608 }] },
      { name: "Kodambakkam", schools: [{ sno: 16, name: "GHSS MGR NAGAR", studentCount: 554 }] },
      { name: "Royapuram South", schools: [{ sno: 17, name: "Govt. Muslim Higher Secondary School", studentCount: 407 }] },
      { name: "Teynampet", schools: [{ sno: 18, name: "GMHSS, TRIPLICANE CHENNAI-05", studentCount: 673 }] },
      { name: "Thiru Vi Ka Nagar", schools: [{ sno: 19, name: "GMHSS GKM COLONY", studentCount: 696 }] },
      { name: "Thiruvotriyur", schools: [{ sno: 20, name: "JGGGHSS THIRUVOTRIYUR (JEYAGOPAL GARODIYA)", studentCount: 582 }] },
      { name: "Tondiarpet", schools: [{ sno: 21, name: "GHSS MKB NAGAR", studentCount: 247 }] }
    ]
  },
  {
    name: "COIMBATORE",
    nameTa: "கோயம்புத்தூர்",
    color: "#96CEB4",
    blocks: [
      { name: "Coimbatore city", schools: [
        { sno: 22, name: "CCMA GGHSS RAJA STREET COIMBATORE", studentCount: 243 },
        { sno: 23, name: "CHSS RS Puram", studentCount: 521 }
      ]},
      { name: "Karamadai", schools: [{ sno: 24, name: "GHSS METTUPALAYAM", studentCount: 659 }] },
      { name: "Kinathukkadavu", schools: [{ sno: 25, name: "GHSS KINATHUKADAVU", studentCount: 360 }] },
      { name: "Periyanaickan Palayam", schools: [{ sno: 26, name: "GHSS(MODEL) ASOKAPURAM", studentCount: 387 }] },
      { name: "Pollachi south", schools: [
        { sno: 27, name: "MUNICIPAL (B)HSS POLLACHI", studentCount: 712 },
        { sno: 28, name: "MPL Girls HSS", studentCount: 231 }
      ]},
      { name: "Sarkar Samakkulam", schools: [{ sno: 29, name: "GHSS SS KULAM", studentCount: 443 }] },
      { name: "Sulur", schools: [
        { sno: 30, name: "GGHSS SULUR", studentCount: 490 },
        { sno: 31, name: "GBHSS Sulur", studentCount: 500 }
      ]},
      { name: "Thondamuthur", schools: [
        { sno: 32, name: "GBHSS THONDAMUTHUR", studentCount: 294 },
        { sno: 33, name: "GGHSS Thondamuthur", studentCount: 739 }
      ]},
      { name: "Valparai", schools: [{ sno: 34, name: "GHSS VALPARAI", studentCount: 251 }] }
    ]
  },
  {
    name: "CUDDALORE",
    nameTa: "கடலூர்",
    color: "#FFEAA7",
    blocks: [
      { name: "Bhuvanagiri", schools: [
        { sno: 35, name: "GBHSS BHUVANAGIRI", studentCount: 632 },
        { sno: 36, name: "GMGHSS, Bhuvanagiri", studentCount: 407 }
      ]},
      { name: "Cuddalore", schools: [{ sno: 37, name: "GHSS VANDIPALAYAM", studentCount: 257 }] },
      { name: "Kattumannarkoil", schools: [
        { sno: 38, name: "GBHSS KATTUMANARKOIL", studentCount: 601 },
        { sno: 39, name: "GGHSS, Kattumannarkoil", studentCount: 437 }
      ]},
      { name: "Kumaratchi", schools: [
        { sno: 40, name: "GGHSS CHIDAMBARAM", studentCount: 536 },
        { sno: 41, name: "ADW Nanthanar Boys School, Chidambaram", studentCount: 508 }
      ]},
      { name: "Kurinjipadi", schools: [
        { sno: 42, name: "GHSS, Kullanchavadi", studentCount: 241 },
        { sno: 43, name: "GGHSS KURINJIPADI", studentCount: 396 }
      ]},
      { name: "Mangalore", schools: [{ sno: 44, name: "GMHSS, M. Podaiyur", studentCount: 512 }] },
      { name: "Panruti", schools: [{ sno: 45, name: "GHSS PANRUTI", studentCount: 302 }] },
      { name: "Virudhachalam", schools: [
        { sno: 46, name: "GMGHSS, Virudhachalam", studentCount: 391 },
        { sno: 47, name: "GBHSS VIRUDHACHALAM", studentCount: 446 }
      ]}
    ]
  },
  {
    name: "DHARMAPURI",
    nameTa: "தர்மபுரி",
    color: "#DDA0DD",
    blocks: [
      { name: "Dharmapuri", schools: [
        { sno: 48, name: "AVVAIYAR GGHSS DHARMAPURI", studentCount: 480 },
        { sno: 49, name: "Adhiyaman GBHSS, Dharmapuri", studentCount: 292 }
      ]},
      { name: "Harur", schools: [
        { sno: 50, name: "GBHSS HARUR", studentCount: 229 },
        { sno: 51, name: "GGHSS, Harur", studentCount: 500 }
      ]},
      { name: "Palacode", schools: [
        { sno: 52, name: "GBHSS PALACODU", studentCount: 297 },
        { sno: 53, name: "GGHSS, Palacode", studentCount: 666 }
      ]},
      { name: "Pappireddipatti", schools: [
        { sno: 54, name: "GBHSS PAPPIREDDYPATTI", studentCount: 391 },
        { sno: 55, name: "GGHSS, Pappireddipatti", studentCount: 416 }
      ]},
      { name: "Pennagaram", schools: [
        { sno: 56, name: "GGHSS PENNAGARAM", studentCount: 266 },
        { sno: 57, name: "GBHSS, Pennagaram", studentCount: 548 }
      ]}
    ]
  },
  {
    name: "DINDIGUL",
    nameTa: "திண்டுக்கல்",
    color: "#98D8C8",
    blocks: [
      { name: "Athoor", schools: [{ sno: 58, name: "GHSS, N.PANJAMPATTI", studentCount: 417 }] },
      { name: "DINDIGUL", schools: [{ sno: 59, name: "GHSS PALANI ROAD - DINDIGUL", studentCount: 278 }] },
      { name: "Natham", schools: [
        { sno: 60, name: "Duraikamalam GMHSS Naththam", studentCount: 664 },
        { sno: 61, name: "GGHSS, Natham", studentCount: 348 }
      ]},
      { name: "Nilakottai", schools: [{ sno: 62, name: "GHSS Nilakkottai", studentCount: 498 }] },
      { name: "Oddanchathram", schools: [{ sno: 63, name: "KRGMHSS Oddanchatram", studentCount: 512 }] },
      { name: "Palani - Rural", schools: [
        { sno: 64, name: "Municipal Boys HSS, Palani", studentCount: 772 },
        { sno: 67, name: "GGHSS Palani", studentCount: 677 }
      ]},
      { name: "Vedasandur", schools: [
        { sno: 65, name: "GBHSS VEDASANDUR", studentCount: 740 },
        { sno: 66, name: "GGHSS, Vedasandur", studentCount: 277 }
      ]}
    ]
  },
  {
    name: "ERODE",
    nameTa: "ஈரோடு",
    color: "#F7DC6F",
    blocks: [
      { name: "Anthiyur", schools: [
        { sno: 68, name: "GGHSS ANTHIYUR", studentCount: 329 },
        { sno: 69, name: "GBHSS, ANTHIYUR", studentCount: 448 }
      ]},
      { name: "Bhavani", schools: [
        { sno: 70, name: "GGHSS BHAVANI CENTRE 1 (FINAL)", studentCount: 454 },
        { sno: 71, name: "GBHSS, BHAVANI", studentCount: 521 }
      ]},
      { name: "Bhavani sagar", schools: [
        { sno: 72, name: "KOM GGHSS P.PULIYAMPATTI", studentCount: 399 },
        { sno: 73, name: "KVK GBHSS, P.PULIAMPATTI", studentCount: 227 }
      ]},
      { name: "Erode", schools: [
        { sno: 74, name: "GHSS (MODEL) ERODE(GTS)", studentCount: 420 },
        { sno: 75, name: "CHSS, RAILWAY COLONY", studentCount: 440 }
      ]},
      { name: "Gobi", schools: [
        { sno: 76, name: "MUNICIPAL BOYS HSS GOBICHETTIPALAYAM", studentCount: 571 },
        { sno: 77, name: "MGHSS, GOBI", studentCount: 415 }
      ]},
      { name: "Modakurichi", schools: [
        { sno: 78, name: "GBHSS, MODAKKURICHI", studentCount: 786 },
        { sno: 79, name: "GGHSS MODAKKURICHI CENTRE 1 (FINAL)", studentCount: 606 }
      ]},
      { name: "Nambiyur", schools: [
        { sno: 80, name: "GBHSS NAMBIYUR", studentCount: 284 },
        { sno: 81, name: "GGHSS, NAMBIYUR", studentCount: 558 }
      ]},
      { name: "Perundurai", schools: [
        { sno: 82, name: "GBHSS PERUNDURAI", studentCount: 258 },
        { sno: 83, name: "GGHSS, PERUNDURAI", studentCount: 258 }
      ]}
    ]
  },
  {
    name: "KALLAKURICHI",
    nameTa: "கள்ளக்குறிச்சி",
    color: "#BB8FCE",
    blocks: [
      { name: "Kallakurichi", schools: [
        { sno: 84, name: "GMGHSS KALLAKURICHI", studentCount: 213 },
        { sno: 85, name: "GBHSS KALLAKURICHI", studentCount: 606 }
      ]},
      { name: "Rishivanthiyam", schools: [{ sno: 86, name: "GHSS ARIYALUR", studentCount: 727 }] },
      { name: "Sankarapuram", schools: [
        { sno: 87, name: "GBHSS SANKARAPURAM", studentCount: 204 },
        { sno: 88, name: "GGHSS - DEVAPANDALAM", studentCount: 761 }
      ]},
      { name: "Thirukoilur", schools: [
        { sno: 89, name: "GGHSS THIRUKOILUR", studentCount: 610 },
        { sno: 90, name: "GBHSS THIRUKOILUR", studentCount: 781 }
      ]},
      { name: "Ulundurpet", schools: [
        { sno: 91, name: "GGHSS ULUNTHURPET", studentCount: 646 },
        { sno: 92, name: "GBHSS ULUNTHURPET", studentCount: 469 }
      ]}
    ]
  },
  {
    name: "KANCHEEPURAM",
    nameTa: "காஞ்சிபுரம்",
    color: "#85C1E9",
    blocks: [
      { name: "Kancheepuram", schools: [
        { sno: 93, name: "GHSS(GIRLS) BIG KANCHIPURAM", studentCount: 485 },
        { sno: 94, name: "GOVT CMS BOYS HR SEC SCHOOL,KANCHEEPURAM", studentCount: 213 }
      ]},
      { name: "Kundrathur", schools: [
        { sno: 95, name: "GGHSS KUNDRATHUR", studentCount: 549 },
        { sno: 96, name: "GOVT BOYS HR SEC SCHOOL,KUNDRATHUR", studentCount: 768 }
      ]},
      { name: "Sriperumbudur", schools: [
        { sno: 97, name: "GGHSS SRIPERUMPUDUR", studentCount: 566 },
        { sno: 98, name: "J J GOVT BOYS HR SEC SCHOOL, SRIPERUMBUDUR", studentCount: 778 }
      ]},
      { name: "Uthiramerur", schools: [{ sno: 99, name: "GHSS THIRUPULIVANAM", studentCount: 608 }] },
      { name: "Walajabad", schools: [
        { sno: 100, name: "GGHSS WALAJABAD", studentCount: 793 },
        { sno: 101, name: "GOVT BOYS HR SEC SCHOOL, VALAJABAD", studentCount: 666 }
      ]}
    ]
  },
  {
    name: "KANNIYAKUMARI",
    nameTa: "கன்னியாகுமரி",
    color: "#F1948A",
    blocks: [
      { name: "Agastheeswaram", schools: [{ sno: 102, name: "SLB GHSS NAGARKOIL", studentCount: 690 }] },
      { name: "Killiyoor", schools: [{ sno: 103, name: "GHSS KARUNGAL", studentCount: 284 }] },
      { name: "Kurunthancode", schools: [{ sno: 104, name: "GHSS AMMANDIVILAI", studentCount: 212 }] },
      { name: "Melpuram", schools: [{ sno: 105, name: "GBHSS MARTHANDAM", studentCount: 295 }] },
      { name: "Thuckalay", schools: [{ sno: 106, name: "GMHSS THUCKALAY", studentCount: 528 }] }
    ]
  },
  {
    name: "KARUR",
    nameTa: "கரூர்",
    color: "#82E0AA",
    blocks: [
      { name: "Aravakurichi", schools: [{ sno: 107, name: "GHSS MALAIKOILUR", studentCount: 445 }] },
      { name: "Karur", schools: [
        { sno: 108, name: "MUNICIPAL(B) HSS KARUR", studentCount: 772 },
        { sno: 109, name: "PMGHSS - Karur", studentCount: 531 }
      ]},
      { name: "Krishnarayapuram", schools: [{ sno: 110, name: "GHSS KRISHNARAYAPURAM", studentCount: 476 }] },
      { name: "Kulithalai", schools: [
        { sno: 111, name: "GGHSS KULITHALAI", studentCount: 761 },
        { sno: 112, name: "GBHSS-Kulithalai", studentCount: 678 }
      ]}
    ]
  },
  {
    name: "KRISHNAGIRI",
    nameTa: "கிருஷ்ணகிரி",
    color: "#F8C471",
    blocks: [
      { name: "Bargur", schools: [
        { sno: 113, name: "GGHSS BARGUR", studentCount: 567 },
        { sno: 114, name: "GBHHS Bargur", studentCount: 259 }
      ]},
      { name: "Hosur", schools: [
        { sno: 115, name: "GGHSS HOSUR", studentCount: 743 },
        { sno: 116, name: "RV Boys GHSS", studentCount: 345 }
      ]},
      { name: "Krishnagiri", schools: [
        { sno: 117, name: "GGHSS KRISHNAGIRI", studentCount: 576 },
        { sno: 118, name: "GBHSS KRISHNAGIRI", studentCount: 790 }
      ]},
      { name: "THALLY", schools: [{ sno: 119, name: "GHSS ANCHETTY", studentCount: 235 }] },
      { name: "Kelamangalam", schools: [
        { sno: 120, name: "GGHSS DENKANIKOTTAI", studentCount: 585 },
        { sno: 121, name: "GBHSS DENKANIKOTTAI", studentCount: 616 }
      ]},
      { name: "Uthangarai", schools: [
        { sno: 122, name: "GGHSS UTHANGARAI", studentCount: 727 },
        { sno: 123, name: "GBHSS UTHANGARAI", studentCount: 247 }
      ]},
      { name: "Veppanapalli", schools: [
        { sno: 124, name: "GGHSS, Veppanapalli", studentCount: 519 },
        { sno: 124, name: "GBHSS, Veppanapalli", studentCount: 319 }
      ]}
    ]
  },
  {
    name: "MADURAI",
    nameTa: "மதுரை",
    color: "#D7BDE2",
    blocks: [
      { name: "Madurai East", schools: [{ sno: 125, name: "GMGHSS Y OTHAKADAI", studentCount: 666 }] },
      { name: "Madurai North", schools: [{ sno: 126, name: "GGHSS,MAHABOOBPALAYAM, MDU-16", studentCount: 643 }] },
      { name: "Madurai South", schools: [{ sno: 127, name: "CORP EVRN GIRLS HSS, SOUTH VELI STREET", studentCount: 362 }] },
      { name: "Madurai West", schools: [{ sno: 128, name: "Corporation Pandiyan Nedunchelian HSS", studentCount: 522 }] },
      { name: "Melur", schools: [
        { sno: 129, name: "G(G)HSS, MELUR", studentCount: 757 },
        { sno: 130, name: "Government Higher Secondary School,Thiruvathavur", studentCount: 552 }
      ]},
      { name: "T.vadipatti", schools: [
        { sno: 131, name: "GOVT BOYS HR SEC SCHOOL, T.VADIPATTI", studentCount: 395 },
        { sno: 132, name: "Government Girls Higher Secondary School,Sholavandan", studentCount: 564 }
      ]},
      { name: "Thirumangalam", schools: [{ sno: 133, name: "GHSS THIRUMANGALAM", studentCount: 363 }] },
      { name: "Usilampatti", schools: [{ sno: 134, name: "GHSS USILAMPATTI", studentCount: 423 }] },
      { name: "Thiruparamkundram", schools: [{ sno: 135, name: "NAVALAR SOMASUNDRA BHARATHIYAR CGHSS PAZHANGANATHAM", studentCount: 624 }] }
    ]
  },
  {
    name: "MAYILADUTHURAI",
    nameTa: "மயிலாடுதுறை",
    color: "#AED6F1",
    blocks: [
      { name: "Mayiladudurai", schools: [{ sno: 136, name: "KITTAPPA MUNICIPAL HSS", studentCount: 383 }] },
      { name: "Sembanarkoil", schools: [{ sno: 137, name: "GHSS, Akkur", studentCount: 791 }] },
      { name: "Sirkali", schools: [{ sno: 138, name: "GHSS VAITHEESHWARANKOIL", studentCount: 254 }] },
      { name: "Kuttalam", schools: [{ sno: 139, name: "GOVT MODEL HR. SEC. SCHOOL, KUTTALAM", studentCount: 463 }] }
    ]
  },
  {
    name: "NAGAPATTINAM",
    nameTa: "நாகப்பட்டினம்",
    color: "#A9DFBF",
    blocks: [
      { name: "Kelvelur", schools: [{ sno: 140, name: "GHSS KURUKATHI", studentCount: 533 }] },
      { name: "Nagapattinam", schools: [
        { sno: 141, name: "MGHSS NAGAPATTINAM", studentCount: 367 },
        { sno: 142, name: "GHSS-SIKKAL", studentCount: 737 }
      ]},
      { name: "Thalainayar", schools: [{ sno: 143, name: "VGHSS MANAKKUDI", studentCount: 695 }] },
      { name: "Vedaranyam", schools: [
        { sno: 144, name: "GGHSS AYAKKARANPULAM - 3 (CENTRE 1)", studentCount: 234 },
        { sno: 145, name: "SKS GHSS VEDARANYAM", studentCount: 417 }
      ]},
      { name: "Thirumarugal", schools: [{ sno: 146, name: "GHSS THIRUMARUGAL", studentCount: 550 }] }
    ]
  },
  {
    name: "NAMAKKAL",
    nameTa: "நாமக்கல்",
    color: "#FAD7A0",
    blocks: [
      { name: "Namakkal", schools: [
        { sno: 147, name: "GGHSS NAMAKKAL", studentCount: 414 },
        { sno: 148, name: "GHSS NAMAKKAL south", studentCount: 317 }
      ]},
      { name: "Pallipalayam", schools: [
        { sno: 149, name: "GBHSS KUMARAPALAYAM", studentCount: 458 },
        { sno: 150, name: "GGHSS Kumarapalayam", studentCount: 592 }
      ]},
      { name: "Paramathi", schools: [
        { sno: 151, name: "GBHSS PARAMATHI", studentCount: 779 },
        { sno: 152, name: "GGHSS Paramathi", studentCount: 313 }
      ]},
      { name: "Rasipuram", schools: [{ sno: 153, name: "GHSS ANNASALAI RASIPURAM", studentCount: 576 }] },
      { name: "Sendamangalam", schools: [
        { sno: 154, name: "GGHSS SENDAMANGALAM", studentCount: 663 },
        { sno: 155, name: "GBHSS Sendamangalam", studentCount: 341 }
      ]},
      { name: "Tiruchengode", schools: [
        { sno: 156, name: "GGHSS TIRUCHENGODE", studentCount: 354 },
        { sno: 157, name: "GBHSS Tiruchengode", studentCount: 690 }
      ]}
    ]
  },
  {
    name: "PERAMBALUR",
    nameTa: "பெரம்பலூர்",
    color: "#D5DBDB",
    blocks: [
      { name: "Alathur", schools: [{ sno: 158, name: "GHSS MODEL PADALUR", studentCount: 711 }] },
      { name: "Perambalur", schools: [{ sno: 159, name: "GHSS PERAMBALUR", studentCount: 233 }] },
      { name: "Veppanthattai", schools: [{ sno: 160, name: "GHSS, Veppanthattai", studentCount: 654 }] },
      { name: "Veppur", schools: [
        { sno: 161, name: "GGHSS, KUNNAM", studentCount: 563 },
        { sno: 162, name: "GHSS, Veppur", studentCount: 280 }
      ]}
    ]
  },
  {
    name: "PUDUKKOTTAI",
    nameTa: "புதுக்கோட்டை",
    color: "#FADBD8",
    blocks: [
      { name: "Aranthangi", schools: [
        { sno: 163, name: "GGHSS, ARANTHANGI", studentCount: 304 },
        { sno: 164, name: "GOVERNMENT MODEL HIGHER SECONDARY SCHOOL , ARANTHANGI", studentCount: 597 }
      ]},
      { name: "Gandarvakkottai", schools: [
        { sno: 165, name: "GBHSS GANDARAVAKOTTAI", studentCount: 770 },
        { sno: 166, name: "GOVERNMENT GIRLS HR SEC SCHOOL, GANDARVAKKOTTAI", studentCount: 777 }
      ]},
      { name: "Pudukkottai", schools: [
        { sno: 167, name: "Ranees GGHSS, Pudukkottai", studentCount: 672 },
        { sno: 168, name: "SRI BRAGATHANBAL GOVT HR SEC SCHOOL, PUDUKKOTTAI.", studentCount: 554 }
      ]},
      { name: "Thirumayam", schools: [
        { sno: 169, name: "GBHSS,THIRUMAYAM", studentCount: 546 },
        { sno: 170, name: "GOVT.GIRLS.HR.SEC.SCHOOL, THIRUMAYAM", studentCount: 756 }
      ]},
      { name: "Thiruvarankulam", schools: [
        { sno: 171, name: "GBHSS ALANGUDI", studentCount: 688 },
        { sno: 172, name: "GGHSS ALANGUDI", studentCount: 790 }
      ]},
      { name: "Viralimalai", schools: [
        { sno: 173, name: "GBHSS-VIRALIMALAI", studentCount: 793 },
        { sno: 174, name: "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL, VIRALIMALAI", studentCount: 640 }
      ]}
    ]
  },
  {
    name: "RAMANATHAPURAM",
    nameTa: "ராமநாதபுரம்",
    color: "#D4E6F1",
    blocks: [
      { name: "Kadaladi", schools: [
        { sno: 175, name: "GBHSS SAYALKUDI", studentCount: 328 },
        { sno: 176, name: "GGHSS SAYALKUDI", studentCount: 784 }
      ]},
      { name: "Mandapam", schools: [{ sno: 177, name: "GHSS, MANDAPAM CAMP", studentCount: 481 }] },
      { name: "Mudukulathur", schools: [{ sno: 178, name: "GHSS MUDUKULATHUR", studentCount: 299 }] },
      { name: "Paramakudi", schools: [{ sno: 179, name: "R.S GBHSS PARAMAKUDI (COMBINED)", studentCount: 672 }] },
      { name: "Ramanathapuram", schools: [{ sno: 180, name: "Municipal (G)HSS, Ramanathapuram", studentCount: 631 }] },
      { name: "Thiruvadanai", schools: [
        { sno: 181, name: "GGHSS, THIRUVADANAI", studentCount: 712 },
        { sno: 182, name: "GBHSS Thiruvadanai", studentCount: 518 }
      ]}
    ]
  },
  {
    name: "RANIPET",
    nameTa: "ராணிப்பேட்டை",
    color: "#E8DAEF",
    blocks: [
      { name: "Arakkonam", schools: [
        { sno: 183, name: "GBHSS ARAKKONAM", studentCount: 399 },
        { sno: 184, name: "GGHSS Arakkonam", studentCount: 544 }
      ]},
      { name: "Arcot", schools: [{ sno: 185, name: "GGHSS ARCOT", studentCount: 621 }] },
      { name: "Sholingar", schools: [
        { sno: 186, name: "TEM GMHSS SHOLINGUR", studentCount: 452 },
        { sno: 187, name: "GBHSS SHOLINGAR", studentCount: 711 }
      ]},
      { name: "Walaja East", schools: [
        { sno: 188, name: "GGHSS WALAJAPET", studentCount: 204 },
        { sno: 189, name: "GBHSS VANNIVEDU WALAJA", studentCount: 562 }
      ]},
      { name: "Walaja West", schools: [{ sno: 190, name: "GHSS , Ammur", studentCount: 237 }] }
    ]
  },
  {
    name: "SALEM",
    nameTa: "சேலம்",
    color: "#D5F5E3",
    blocks: [
      { name: "Attur", schools: [
        { sno: 191, name: "GBHSS ATTUR", studentCount: 566 },
        { sno: 192, name: "GHSS Thandavarayapuram", studentCount: 308 }
      ]},
      { name: "Edappadi", schools: [
        { sno: 193, name: "GBHSS Edappadi", studentCount: 768 },
        { sno: 194, name: "GGHSS . Eddapaddy", studentCount: 360 }
      ]},
      { name: "Gangavalli", schools: [
        { sno: 195, name: "GBHSS Gangavalli", studentCount: 425 },
        { sno: 196, name: "GGHSS GANGAVALLI", studentCount: 266 }
      ]},
      { name: "Kolathur", schools: [{ sno: 197, name: "GHSS METTUR DAM", studentCount: 430 }] },
      { name: "Omalur", schools: [{ sno: 198, name: "GHSS KARUPPUR", studentCount: 674 }] },
      { name: "Salem-Urban", schools: [
        { sno: 199, name: "MBHSS FORT", studentCount: 664 },
        { sno: 200, name: "GGHSS SALEM 1", studentCount: 384 }
      ]},
      { name: "Sankari", schools: [
        { sno: 201, name: "GGHSS SANKARI", studentCount: 692 },
        { sno: 202, name: "GBHSS. SANKAGIRI", studentCount: 690 }
      ]},
      { name: "Tharamangalam", schools: [
        { sno: 203, name: "GGHSS THARAMANGALAM", studentCount: 773 },
        { sno: 204, name: "Government Model Higher Secondary School, Thuttampatti", studentCount: 625 }
      ]},
      { name: "Veerapandi", schools: [{ sno: 205, name: "MODEL SCHOOL VEERAPANDI", studentCount: 711 }] },
      { name: "Yercaud", schools: [{ sno: 206, name: "GHSS YERCAUD", studentCount: 762 }] },
      { name: "Salem-Rural", schools: [{ sno: 207, name: "GHSS MANIYANOOR", studentCount: 452 }] }
    ]
  },
  {
    name: "SIVAGANGAI",
    nameTa: "சிவகங்கை",
    color: "#FCF3CF",
    blocks: [
      { name: "Manamadurai", schools: [
        { sno: 208, name: "GGHSS, MANAMADURAI", studentCount: 734 },
        { sno: 209, name: "GOVT HR SEC SCHOOL IDAIKATTUR", studentCount: 437 }
      ]},
      { name: "Sakkottai", schools: [{ sno: 210, name: "MV GHSS, KARAIKUDI", studentCount: 557 }] },
      { name: "Singampunari", schools: [
        { sno: 211, name: "GBHSS SINGAMPUNARI", studentCount: 550 },
        { sno: 212, name: "RM RM GOVT GIRLS HR SEC SCHOOL SINGAMPUNARI", studentCount: 202 }
      ]},
      { name: "Sivagangai", schools: [{ sno: 213, name: "GOVT HSS MARUTHUPANDIYAR NAGAR", studentCount: 320 }] },
      { name: "Thirupatur", schools: [
        { sno: 214, name: "A.P.GOVT.(B)HR.SEC.SCHOOL THIRUPPATHUR", studentCount: 300 },
        { sno: 215, name: "NM G(G)HSS.Thiruppathur", studentCount: 706 }
      ]},
      { name: "Thiruppuvanam", schools: [
        { sno: 216, name: "GGHSS THIRUPPUVANAM", studentCount: 420 },
        { sno: 217, name: "GOVT BOYS HSS THIRUPPUVANAM", studentCount: 608 }
      ]}
    ]
  },
  {
    name: "TENKASI",
    nameTa: "தென்காசி",
    color: "#EBDEF0",
    blocks: [
      { name: "Alangulam", schools: [{ sno: 218, name: "GHSS, Alangulam", studentCount: 342 }] },
      { name: "Kadayanallur", schools: [
        { sno: 219, name: "GOVT (G) HR SEC SCHOOL, KADAYANALLUR", studentCount: 799 },
        { sno: 220, name: "GBHSS, KADAYANALLUR", studentCount: 534 }
      ]},
      { name: "Sankarankovil", schools: [
        { sno: 221, name: "GGHSS SANKARANKOVIL", studentCount: 712 },
        { sno: 222, name: "GOMATHI AMBAL GBHSS, SANKARANKOVIL", studentCount: 554 }
      ]},
      { name: "Tenkasi", schools: [
        { sno: 223, name: "TMT.MANJAMMAL GGHSS TENKASI", studentCount: 584 },
        { sno: 224, name: "ICI GBHSS, TENKASI", studentCount: 709 }
      ]},
      { name: "Vasudevanallur", schools: [{ sno: 225, name: "GHSS VASUDEVANALLUR", studentCount: 262 }] }
    ]
  },
  {
    name: "THANJAVUR",
    nameTa: "தஞ்சாவூர்",
    color: "#ABEBC6",
    blocks: [
      { name: "Kumbakonam", schools: [{ sno: 226, name: "VAIGOVINDASAMY NINAIVU GHSS THARASURAM", studentCount: 402 }] },
      { name: "Orathanadu", schools: [
        { sno: 227, name: "GGHSS ORATHANADU", studentCount: 580 },
        { sno: 228, name: "GBHSS ORATHANADU", studentCount: 256 }
      ]},
      { name: "Papanasam", schools: [{ sno: 229, name: "GHSS - AYYAMPETTAI", studentCount: 622 }] },
      { name: "Pattukkottai", schools: [{ sno: 230, name: "GOVERNMENT MODEL HIGHER SEC SCHOOL - PATTUKOTTAI", studentCount: 549 }] },
      { name: "Peravurani", schools: [
        { sno: 231, name: "GGHSS PERAVURANI (COMBINED)", studentCount: 306 },
        { sno: 232, name: "GBHSS PERAVURANI", studentCount: 305 }
      ]},
      { name: "Thiruvaiyar", schools: [
        { sno: 233, name: "GGHSS THIRUVAIYARU", studentCount: 729 },
        { sno: 234, name: "GHSS - MELATHIRUPPANTHURITHI", studentCount: 723 }
      ]},
      { name: "Thiruvidaimarudhur", schools: [
        { sno: 235, name: "GGHSS NACHIYARKOIL THIRUVIDAIMARUTHUR THANJAVUR", studentCount: 372 },
        { sno: 236, name: "GBHSS - NACHIYARKOVIL", studentCount: 613 }
      ]},
      { name: "Thanjavur(Urban)", schools: [{ sno: 237, name: "GGHSS ARANMANAIVALAGAM THANJAVUR", studentCount: 505 }] }
    ]
  },
  {
    name: "THE NILGIRIS",
    nameTa: "நீலகிரி",
    color: "#85929E",
    blocks: [
      { name: "Coonoor", schools: [{ sno: 238, name: "ARINGAR ANNA GHSS", studentCount: 207 }] },
      { name: "Gudalur", schools: [{ sno: 239, name: "GHSS GUDALUR CENTER I", studentCount: 776 }] },
      { name: "Udhagamandalam", schools: [{ sno: 240, name: "GHSS OOTY", studentCount: 286 }] }
    ]
  },
  {
    name: "THENI",
    nameTa: "தேனி",
    color: "#F9E79F",
    blocks: [
      { name: "Aundipatty", schools: [
        { sno: 241, name: "GBHSS AUNDIPATTI", studentCount: 548 },
        { sno: 242, name: "Government Girls Higher secondary school", studentCount: 327 }
      ]},
      { name: "Bodinayakanur", schools: [{ sno: 243, name: "SEVENTHWARD GHSS BODI", studentCount: 268 }] },
      { name: "Cumbum", schools: [
        { sno: 244, name: "AR Girls HSS,Cumbum", studentCount: 277 },
        { sno: 245, name: "GHSS, KK patty", studentCount: 329 }
      ]},
      { name: "Periyakulam", schools: [
        { sno: 246, name: "V.M.BOYS GHSS, PERIYAKULAM", studentCount: 649 },
        { sno: 247, name: "GHSS Lakshmipuram,Periyakulam", studentCount: 273 }
      ]}
    ]
  },
  {
    name: "THOOTHUKKUDI",
    nameTa: "தூத்துக்குடி",
    color: "#AEB6BF",
    blocks: [
      { name: "Kovilpatti", schools: [
        { sno: 248, name: "GGHSS KOVILPATTI", studentCount: 281 },
        { sno: 249, name: "VOC GHSS, KOVILPATTI", studentCount: 585 }
      ]},
      { name: "Ottapidaram", schools: [{ sno: 250, name: "VOC GHSS OTTAPIDARAM", studentCount: 658 }] },
      { name: "Srivaikundam", schools: [
        { sno: 251, name: "AKS GIRLS HSS SRIVAIKUNDAM", studentCount: 490 },
        { sno: 252, name: "GHSS Mukkani", studentCount: 456 }
      ]},
      { name: "Thiruchenthur", schools: [
        { sno: 253, name: "SMG GHSS THIRUCHENDUR", studentCount: 517 },
        { sno: 254, name: "ASA GOVT BOYS HSS, TIRUCHENDUR", studentCount: 462 }
      ]},
      { name: "Thoothukudi Rural", schools: [{ sno: 255, name: "GHSS M.THANGAMMALPURAM", studentCount: 430 }] },
      { name: "Thoothukudi Urban", schools: [{ sno: 256, name: "SEENA VANA GHSS THOOTHUKUDI", studentCount: 604 }] },
      { name: "Vilathikulam", schools: [{ sno: 257, name: "GHSS VILATHIKULAM", studentCount: 300 }] },
      { name: "Kayathar", schools: [{ sno: 258, name: "GHSS KAYATHAR", studentCount: 782 }] }
    ]
  },
  {
    name: "TIRUCHIRAPPALLI",
    nameTa: "திருச்சிராப்பள்ளி",
    color: "#D2B4DE",
    blocks: [
      { name: "Lalgudi", schools: [{ sno: 259, name: "GHSS , LALGUDI", studentCount: 279 }] },
      { name: "Andhanallur", schools: [{ sno: 260, name: "GHSS,AYILAPETTAI,TRICHY", studentCount: 229 }] },
      { name: "Manapparai", schools: [
        { sno: 261, name: "GBHSS MANAPARAI", studentCount: 303 },
        { sno: 262, name: "GGHSS,Manapparai", studentCount: 741 }
      ]},
      { name: "Mannachanallur", schools: [
        { sno: 263, name: "GMGHSS MANNACHANALLUR", studentCount: 252 },
        { sno: 264, name: "GOVT.BOYS HSC, MANNACHANALLUR", studentCount: 539 }
      ]},
      { name: "Musiri", schools: [
        { sno: 265, name: "GGHSS MUSIRI", studentCount: 536 },
        { sno: 266, name: "GBHSS,Musiri", studentCount: 595 }
      ]},
      { name: "Thiruverumbur", schools: [{ sno: 267, name: "GOVT ADW GIRLS HSS KATTUR", studentCount: 236 }] },
      { name: "Thuraiyur", schools: [
        { sno: 268, name: "GGHSS THURAIYUR", studentCount: 624 },
        { sno: 269, name: "GOVT ADW HSC SCHOOL, THURAIYUR", studentCount: 661 }
      ]},
      { name: "Trichy-Urban", schools: [{ sno: 270, name: "Govt Syed Murdusha Model HSS Trichy (Combined)", studentCount: 292 }] }
    ]
  },
  {
    name: "TIRUNELVELI",
    nameTa: "திருநெல்வேலி",
    color: "#A9CCE3",
    blocks: [
      { name: "Ambasamudram", schools: [
        { sno: 271, name: "A V RM V GOVT GIRLS HR SEC SCHOOL AMBASAMUDRAM", studentCount: 480 },
        { sno: 272, name: "GOVT HR SEC SCHOOL VELLANGULI", studentCount: 537 }
      ]},
      { name: "Nanguneri", schools: [
        { sno: 273, name: "SANKARA REDDIYAR GBHSS NANGUNERI", studentCount: 754 },
        { sno: 274, name: "GOVERNMENT GIRLS HR SEC SCHOOL NANGUNERI", studentCount: 752 }
      ]},
      { name: "Palay-Rural", schools: [{ sno: 275, name: "KRGHSS REDDIYARPATTI, THIRUNELVELI", studentCount: 622 }] },
      { name: "Palay-Urban", schools: [{ sno: 276, name: "QUIDEMILLETH CHSS,MELAPALAYAM, THIRUNELVELI", studentCount: 431 }] },
      { name: "Radhapuram", schools: [{ sno: 277, name: "NVC GHSS RADHAPURAM", studentCount: 497 }] },
      { name: "Tirunelveli Urban", schools: [{ sno: 278, name: "GHSS TIRUNELVELI", studentCount: 785 }] }
    ]
  },
  {
    name: "TIRUPATHUR",
    nameTa: "திருப்பத்தூர்",
    color: "#F5CBA7",
    blocks: [
      { name: "Jolarpet", schools: [{ sno: 279, name: "GHSS VAKKANAMPATTI", studentCount: 583 }] },
      { name: "Madhanur", schools: [{ sno: 280, name: "GHSS DEVALAPURAM", studentCount: 415 }] },
      { name: "Nattrampalli", schools: [{ sno: 281, name: "GMHSS VANIYAMBADI", studentCount: 700 }] },
      { name: "Thirupattur", schools: [
        { sno: 282, name: "GBHSS THIRUPATUR", studentCount: 545 },
        { sno: 283, name: "GGHSS, Madavalam", studentCount: 384 }
      ]}
    ]
  },
  {
    name: "TIRUPPUR",
    nameTa: "திருப்பூர்",
    color: "#D7DBDD",
    blocks: [
      { name: "Palladam", schools: [
        { sno: 284, name: "GGHSS PALLADAM", studentCount: 461 },
        { sno: 291, name: "GBHSS, Palladam", studentCount: 771 }
      ]},
      { name: "Avinashi", schools: [
        { sno: 285, name: "GGHSS.AVINASHI", studentCount: 254 },
        { sno: 286, name: "GBHSS AVINASHI", studentCount: 732 }
      ]},
      { name: "Dharapuram", schools: [
        { sno: 287, name: "NCP MUNICIPAL BOYS HIGHER SECONDARY SCHOOL DHARAPURAM", studentCount: 650 },
        { sno: 288, name: "GHSS DHARAPURAM", studentCount: 234 }
      ]},
      { name: "Gangayam", schools: [{ sno: 289, name: "GHSS KANGAYAM", studentCount: 374 }] },
      { name: "Madathukulam", schools: [{ sno: 290, name: "GHSS MADATHUKULAM", studentCount: 358 }] },
      { name: "Tiruppur North", schools: [{ sno: 292, name: "GHSS KUMAR NAGAR", studentCount: 675 }] },
      { name: "Tiruppur South", schools: [
        { sno: 293, name: "PALANIAMMAL MPL GHSS, TIRUPUR", studentCount: 269 },
        { sno: 294, name: "KSC BHSS, Tiruppur", studentCount: 358 }
      ]},
      { name: "Udumalaipattai", schools: [{ sno: 295, name: "BCGGHSS UDUMALPET", studentCount: 271 }] }
    ]
  },
  {
    name: "TIRUVALLUR",
    nameTa: "திருவள்ளூர்",
    color: "#E6B0AA",
    blocks: [
      { name: "Gummidipoondi", schools: [
        { sno: 296, name: "GBHSS GUMMIDIPOONDI", studentCount: 617 },
        { sno: 297, name: "GGHSS, GUMMIDIPOONDI", studentCount: 634 }
      ]},
      { name: "Minjur", schools: [
        { sno: 298, name: "GGHSS PONNERI", studentCount: 240 },
        { sno: 299, name: "GBHSS, PONNERI", studentCount: 329 }
      ]},
      { name: "Poonamallee", schools: [
        { sno: 300, name: "GGHSS KAMARAJ NAGAR, AVADI", studentCount: 419 },
        { sno: 301, name: "GBHSS, KAMARAJ NAGAR", studentCount: 533 }
      ]},
      { name: "R.K.Pet", schools: [
        { sno: 302, name: "GBHSS RK PET", studentCount: 531 },
        { sno: 303, name: "GOVT (G) HSS, R.K.PET", studentCount: 500 }
      ]},
      { name: "Thiruvallur", schools: [
        { sno: 304, name: "RMJ GGHSS TIRUVALLUR", studentCount: 788 },
        { sno: 305, name: "KMN BRO MPL HSS THIRUVALLUR", studentCount: 701 }
      ]},
      { name: "Tiruttani", schools: [
        { sno: 306, name: "GBHSS THIRUTTANI", studentCount: 530 },
        { sno: 307, name: "GGHSS THIRUTTANI", studentCount: 286 }
      ]},
      { name: "Villivakkam", schools: [{ sno: 308, name: "GHSS SM NAGAR AVADI", studentCount: 236 }] }
    ]
  },
  {
    name: "TIRUVANNAMALAI",
    nameTa: "திருவண்ணாமலை",
    color: "#F5B7B1",
    blocks: [
      { name: "Arni", schools: [
        { sno: 309, name: "GGMHSS ARNI", studentCount: 769 },
        { sno: 310, name: "GBHSS, Arni", studentCount: 381 }
      ]},
      { name: "Chetpet", schools: [{ sno: 311, name: "GHSS - PAZHAMPET", studentCount: 454 }] },
      { name: "Kalasapakkam", schools: [
        { sno: 312, name: "GGHSS - KALASAPAKKAM", studentCount: 237 },
        { sno: 313, name: "GMBHSS, Kalasapakkam", studentCount: 388 }
      ]},
      { name: "Chengam", schools: [
        { sno: 314, name: "GBHSS CHENGAM", studentCount: 276 },
        { sno: 315, name: "GGHSS Chengam", studentCount: 736 }
      ]},
      { name: "Cheyyar", schools: [
        { sno: 316, name: "GBHSS CHEYYAR", studentCount: 787 },
        { sno: 317, name: "GMGHSS, Cheyyar", studentCount: 775 }
      ]},
      { name: "Kilpennathur", schools: [
        { sno: 318, name: "GGHSS, KILPENNATHUR", studentCount: 721 },
        { sno: 319, name: "GBHSS, Kilpennathur", studentCount: 262 }
      ]},
      { name: "Polur", schools: [
        { sno: 320, name: "GGHSS - POLUR", studentCount: 207 },
        { sno: 321, name: "GBHSS, Polur", studentCount: 404 }
      ]},
      { name: "Tiruvannamalai", schools: [
        { sno: 322, name: "Municipal MGGHSS (Model), Tiruvannamalai", studentCount: 513 },
        { sno: 323, name: "TNAP GHSS, Tiruvannamalai", studentCount: 223 }
      ]},
      { name: "Vandavasi", schools: [
        { sno: 324, name: "GBHSS VANDAVASI", studentCount: 279 },
        { sno: 325, name: "GGHSS, Vandavasi", studentCount: 397 }
      ]},
      { name: "Vembakkam", schools: [
        { sno: 326, name: "GBHSS VEMBAKKAM", studentCount: 283 },
        { sno: 327, name: "GGHSS, Vembakkam", studentCount: 225 }
      ]}
    ]
  },
  {
    name: "TIRUVARUR",
    nameTa: "திருவாரூர்",
    color: "#D5D8DC",
    blocks: [
      { name: "Mannargudi", schools: [
        { sno: 328, name: "GGHSS MODEL MANNARGUDI", studentCount: 515 },
        { sno: 329, name: "MHSS, Co operative urban School, Mannargudi", studentCount: 655 }
      ]},
      { name: "Nannilam", schools: [
        { sno: 330, name: "GGHSS NANNILAM", studentCount: 451 },
        { sno: 331, name: "GBHSS, Nannilam", studentCount: 544 }
      ]},
      { name: "Thiruthuraipoondi", schools: [
        { sno: 332, name: "GBHSS THIRUTHURAIPOONDI", studentCount: 526 },
        { sno: 333, name: "GGHSS, Thiruthuraipoondi", studentCount: 754 }
      ]},
      { name: "Thiruvarur", schools: [{ sno: 334, name: "GHSS PULIVALAM", studentCount: 567 }] },
      { name: "Valangaiman", schools: [
        { sno: 335, name: "GBHSS VALANGAIMAN", studentCount: 236 },
        { sno: 336, name: "GGHSS, Valangaiman", studentCount: 307 }
      ]}
    ]
  },
  {
    name: "VELLORE",
    nameTa: "வேலூர்",
    color: "#A3E4D7",
    blocks: [
      { name: "Anaicut", schools: [
        { sno: 337, name: "GBHSS POIGAI", studentCount: 446 },
        { sno: 338, name: "GGHSS, Poigai", studentCount: 378 }
      ]},
      { name: "Gudiyatham", schools: [
        { sno: 339, name: "GGHSS NADUPET GUDIYATHAM", studentCount: 772 },
        { sno: 340, name: "GBHSS, Nellorepet", studentCount: 691 }
      ]},
      { name: "K.V.Kuppam", schools: [
        { sno: 341, name: "GBHSS K.V.KUPPAM", studentCount: 369 },
        { sno: 342, name: "GGHSS, K.V.Kuppam", studentCount: 786 }
      ]},
      { name: "Katpadi", schools: [
        { sno: 343, name: "GBHSS KATPADI", studentCount: 728 },
        { sno: 344, name: "GGHSS, Katpadi", studentCount: 714 }
      ]},
      { name: "Vellore Urban", schools: [{ sno: 345, name: "GOVT MUSLIM HSS VELLORE", studentCount: 725 }] }
    ]
  },
  {
    name: "VILLUPURAM",
    nameTa: "விழுப்புரம்",
    color: "#F9E79F",
    blocks: [
      { name: "Koliyanur", schools: [
        { sno: 346, name: "GOVT MODEL GIRLS HR SEC SCHOOL, VILLUPURAM", studentCount: 208 },
        { sno: 347, name: "Thiru Kamaraj Municipal Hr. Sec. School, Villupuram", studentCount: 366 }
      ]},
      { name: "Thiruvennainallur", schools: [
        { sno: 348, name: "GGHSS THIRUVENNAINALLUR", studentCount: 544 },
        { sno: 349, name: "GOVERNMENT MODEL HIGHER SECONDARY SCHOOL EMAPPUR", studentCount: 652 }
      ]},
      { name: "Gingee", schools: [
        { sno: 350, name: "RDGBHSS GINGEE", studentCount: 431 },
        { sno: 351, name: "GOVERNMENT GIRLS HIGHER SECONDARY SCHOOL GINGEE", studentCount: 382 }
      ]},
      { name: "Mailam", schools: [{ sno: 352, name: "GOVT HR SEC SCHOOL, THAZHUTHALI.", studentCount: 682 }] },
      { name: "Olakkur", schools: [{ sno: 353, name: "MPL HSS, KAVERIPAKKAM, DINDIVANAM", studentCount: 348 }] },
      { name: "Vaanur", schools: [{ sno: 354, name: "GHSS, Kiliyanur", studentCount: 276 }] },
      { name: "Vikaravandi", schools: [{ sno: 355, name: "GHSS VIKIRAVANDI", studentCount: 214 }] }
    ]
  },
  {
    name: "VIRUDHUNAGAR",
    nameTa: "விருதுநகர்",
    color: "#FADBD8",
    blocks: [
      { name: "Aruppukottai", schools: [{ sno: 356, name: "GHSS PALAVANATHAM", studentCount: 674 }] },
      { name: "Rajapalayam", schools: [
        { sno: 357, name: "SSG(B)HSS", studentCount: 428 },
        { sno: 358, name: "SSG(G)HSS,RAJAPALAYAM", studentCount: 255 }
      ]},
      { name: "Sivakasi", schools: [{ sno: 359, name: "A U MUNICIPAL HIGHER SECONDARY SCHOOL - SIVAKASI.", studentCount: 452 }] },
      { name: "Srivilliputhur", schools: [{ sno: 360, name: "MPL TVK HSS , Srivilliputhur", studentCount: 546 }] },
      { name: "Sattur", schools: [{ sno: 361, name: "GHSS Padanthal", studentCount: 735 }] },
      { name: "Thiruchuli", schools: [{ sno: 362, name: "GHSS, M.REDDIAPATTI(MODEL)", studentCount: 770 }] },
      { name: "Virudhunagar", schools: [{ sno: 363, name: "TPNM GIRLS HR SEC SCHOOL VIRUDHUNAGAR - CENTRE 1", studentCount: 704 }] }
    ]
  }
];

// Helper functions
export const getTotalStats = () => {
  let totalBlocks = 0;
  let totalSchools = 0;
  let totalStudents = 0;

  tnSchoolsData.forEach(district => {
    totalBlocks += district.blocks.length;
    district.blocks.forEach(block => {
      totalSchools += block.schools.length;
      block.schools.forEach(school => {
        totalStudents += school.studentCount;
      });
    });
  });

  return {
    districts: tnSchoolsData.length,
    blocks: totalBlocks,
    schools: totalSchools,
    students: totalStudents
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
