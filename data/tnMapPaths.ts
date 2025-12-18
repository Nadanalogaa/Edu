// Tamil Nadu District Map SVG Paths
// Simplified geographical representation of TN districts

export interface DistrictMapPath {
  name: string;
  path: string;
  labelX: number;
  labelY: number;
}

// SVG viewBox: 0 0 600 800 (width x height)
// Approximate district boundaries based on geographical positions
export const tnMapPaths: DistrictMapPath[] = [
  // Northern districts
  {
    name: "TIRUVALLUR",
    path: "M 480,50 L 520,60 L 530,85 L 520,110 L 490,115 L 470,95 L 475,65 Z",
    labelX: 497,
    labelY: 85
  },
  {
    name: "CHENNAI",
    path: "M 520,110 L 540,115 L 545,135 L 535,150 L 515,148 L 505,130 L 510,115 Z",
    labelX: 525,
    labelY: 130
  },
  {
    name: "KANCHEEPURAM",
    path: "M 490,115 L 520,110 L 530,130 L 525,155 L 495,160 L 475,145 L 480,125 Z",
    labelX: 500,
    labelY: 135
  },
  {
    name: "CHENGALPATTU",
    path: "M 495,160 L 525,155 L 535,175 L 525,195 L 495,200 L 475,180 L 480,165 Z",
    labelX: 503,
    labelY: 178
  },
  {
    name: "VELLORE",
    path: "M 400,80 L 445,75 L 460,95 L 455,125 L 425,135 L 395,120 L 390,95 Z",
    labelX: 425,
    labelY: 105
  },
  {
    name: "RANIPET",
    path: "M 445,75 L 475,70 L 485,95 L 475,115 L 445,120 L 430,100 L 440,80 Z",
    labelX: 455,
    labelY: 95
  },
  {
    name: "TIRUPATHUR",
    path: "M 385,120 L 425,115 L 440,135 L 435,160 L 405,165 L 380,145 L 378,128 Z",
    labelX: 410,
    labelY: 140
  },
  {
    name: "TIRUVANNAMALAI",
    path: "M 435,160 L 475,155 L 485,180 L 475,205 L 445,210 L 420,190 L 425,170 Z",
    labelX: 450,
    labelY: 183
  },

  // Western districts
  {
    name: "KRISHNAGIRI",
    path: "M 310,75 L 360,70 L 380,95 L 375,125 L 340,135 L 310,115 L 305,90 Z",
    labelX: 340,
    labelY: 103
  },
  {
    name: "DHARMAPURI",
    path: "M 310,115 L 355,110 L 370,135 L 365,165 L 330,175 L 305,150 L 303,128 Z",
    labelX: 335,
    labelY: 143
  },
  {
    name: "SALEM",
    path: "M 305,150 L 350,145 L 370,175 L 365,215 L 325,225 L 295,195 L 297,165 Z",
    labelX: 332,
    labelY: 185
  },
  {
    name: "NAMAKKAL",
    path: "M 325,225 L 365,220 L 380,245 L 375,270 L 340,280 L 315,255 L 318,235 Z",
    labelX: 345,
    labelY: 250
  },
  {
    name: "ERODE",
    path: "M 255,195 L 295,190 L 315,220 L 310,255 L 275,265 L 245,235 L 248,210 Z",
    labelX: 278,
    labelY: 228
  },
  {
    name: "TIRUPPUR",
    path: "M 245,235 L 280,230 L 295,260 L 290,290 L 255,300 L 230,270 L 235,248 Z",
    labelX: 262,
    labelY: 265
  },
  {
    name: "COIMBATORE",
    path: "M 195,240 L 235,235 L 250,270 L 245,310 L 205,320 L 180,285 L 188,255 Z",
    labelX: 217,
    labelY: 278
  },
  {
    name: "THE NILGIRIS",
    path: "M 165,215 L 200,210 L 215,235 L 210,260 L 175,265 L 155,240 L 160,225 Z",
    labelX: 182,
    labelY: 238
  },

  // Central districts
  {
    name: "KARUR",
    path: "M 315,255 L 355,250 L 370,275 L 365,305 L 330,315 L 305,285 L 308,265 Z",
    labelX: 337,
    labelY: 283
  },
  {
    name: "TIRUCHIRAPPALLI",
    path: "M 330,315 L 375,310 L 390,340 L 385,375 L 345,385 L 318,350 L 323,325 Z",
    labelX: 352,
    labelY: 348
  },
  {
    name: "PERAMBALUR",
    path: "M 365,305 L 400,300 L 415,325 L 410,355 L 380,360 L 358,335 L 362,315 Z",
    labelX: 385,
    labelY: 330
  },
  {
    name: "ARIYALUR",
    path: "M 410,355 L 445,350 L 460,375 L 455,400 L 425,405 L 403,380 L 407,363 Z",
    labelX: 430,
    labelY: 378
  },
  {
    name: "CUDDALORE",
    path: "M 455,400 L 495,395 L 510,425 L 505,455 L 470,460 L 448,430 L 452,408 Z",
    labelX: 477,
    labelY: 428
  },
  {
    name: "KALLAKURICHI",
    path: "M 420,210 L 460,205 L 475,235 L 470,265 L 435,270 L 413,240 L 417,220 Z",
    labelX: 443,
    labelY: 238
  },
  {
    name: "VILLUPURAM",
    path: "M 435,270 L 475,265 L 490,295 L 485,330 L 450,335 L 428,305 L 432,280 Z",
    labelX: 457,
    labelY: 303
  },

  // Coastal districts
  {
    name: "MAYILADUTHURAI",
    path: "M 425,405 L 465,400 L 480,425 L 475,450 L 440,455 L 420,430 L 423,413 Z",
    labelX: 447,
    labelY: 428
  },
  {
    name: "NAGAPATTINAM",
    path: "M 440,455 L 475,450 L 490,475 L 485,505 L 450,510 L 433,480 L 437,463 Z",
    labelX: 460,
    labelY: 483
  },
  {
    name: "THANJAVUR",
    path: "M 385,375 L 425,370 L 440,400 L 435,435 L 395,440 L 375,405 L 380,385 Z",
    labelX: 407,
    labelY: 405
  },
  {
    name: "TIRUVARUR",
    path: "M 395,440 L 435,435 L 450,465 L 445,495 L 410,500 L 388,470 L 392,448 Z",
    labelX: 417,
    labelY: 468
  },

  // Southern districts
  {
    name: "PUDUKKOTTAI",
    path: "M 318,350 L 360,345 L 375,375 L 370,410 L 330,420 L 305,385 L 312,360 Z",
    labelX: 340,
    labelY: 383
  },
  {
    name: "SIVAGANGAI",
    path: "M 305,385 L 345,380 L 360,415 L 355,450 L 315,460 L 290,420 L 298,395 Z",
    labelX: 325,
    labelY: 420
  },
  {
    name: "RAMANATHAPURAM",
    path: "M 315,460 L 360,455 L 375,490 L 370,530 L 330,540 L 305,500 L 310,470 Z",
    labelX: 337,
    labelY: 498
  },
  {
    name: "DINDIGUL",
    path: "M 250,310 L 295,305 L 315,340 L 310,380 L 270,390 L 240,350 L 245,325 Z",
    labelX: 277,
    labelY: 348
  },
  {
    name: "MADURAI",
    path: "M 270,390 L 315,385 L 330,420 L 325,460 L 285,470 L 258,430 L 263,405 Z",
    labelX: 292,
    labelY: 428
  },
  {
    name: "THENI",
    path: "M 220,375 L 260,370 L 275,405 L 270,440 L 235,450 L 210,410 L 215,388 Z",
    labelX: 242,
    labelY: 410
  },
  {
    name: "VIRUDHUNAGAR",
    path: "M 258,430 L 300,425 L 315,460 L 310,500 L 270,510 L 245,470 L 252,445 Z",
    labelX: 277,
    labelY: 468
  },
  {
    name: "TENKASI",
    path: "M 185,445 L 225,440 L 240,475 L 235,515 L 195,525 L 170,485 L 178,458 Z",
    labelX: 207,
    labelY: 483
  },
  {
    name: "TIRUNELVELI",
    path: "M 195,525 L 240,520 L 255,560 L 250,600 L 210,610 L 182,570 L 188,540 Z",
    labelX: 217,
    labelY: 565
  },
  {
    name: "THOOTHUKKUDI",
    path: "M 245,470 L 285,465 L 300,505 L 295,545 L 255,555 L 230,515 L 238,485 Z",
    labelX: 265,
    labelY: 510
  },
  {
    name: "KANNIYAKUMARI",
    path: "M 182,570 L 220,565 L 235,600 L 230,640 L 195,650 L 165,610 L 175,583 Z",
    labelX: 202,
    labelY: 608
  }
];
