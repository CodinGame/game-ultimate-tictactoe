import { GraphicEntityModule } from './entity-module/GraphicEntityModule.js';

export const demo = {
  playerCount: 2,
  logo: 'logo_start.png',
  overlayAlpha: 0.4,
  agents: [{
    index: 0,
    name: 'Alice',
    avatar: 'https://www.codingame.com/servlet/fileservlet?id=' + 16085713250612 + '&format=viewer_avatar',
    type: 'CODINGAMER',
    color: '#f9b700',
    typeData: {
      me: true,
      nickname: '[CG]Nonofr'
    }
  }, {
    index: 1,
    name: 'Bob',
    avatar: 'https://www.codingame.com/servlet/fileservlet?id=' + 16085756802960 + '&format=viewer_avatar',
    type: 'CODINGAMER',
    color: '#22a1e4',
    typeData: {
      me: true,
      nickname: '[CG]Maxime'
    }
  }],
  frames: [
      "KEY_FRAME 0\n{\"global\":{\"entitymodule\":{\"width\":1920,\"height\":1080}},\"frame\":{\"duration\":600,\"entitymodule\":[\"C S\",\"C S\",\"C S\",\"C R\",\"C R\",\"C T\",\"C S\",\"C G\",\"C R\",\"C R\",\"C T\",\"C S\",\"C G\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C S\",\"U 44 0.1 C 47,48,46,45 a 1\",\"U 49 0.1 C 53,50,52,51 a 1\",\"U 34 0.1 C 35,38,36,37 a 1\",\"U 59 0.1 C 63,60,61,62 a 1\",\"U 54 0.1 C 57,55,58,56 a 1\",\"U 19 0.1 C 20,21,22,23 a 1\",\"U 39 0.1 C 41,42,43,40 a 1\",\"U 24 0.1 C 25,28,26,27 a 1\",\"U 29 0.1 C 33,30,32,31 a 1\",\"U 35 1 x 870 y 270 Y 270 X 1050 c 16777215 W 3\",\"U 25 1 x 630 y 510 Y 510 X 810 c 16777215 W 3\",\"U 61 1 x 1110 y 810 Y 810 X 1290 c 16777215 W 3\",\"U 23 1 x 750 y 210 Y 390 X 750 c 16777215 W 3\",\"U 16 1 x 600 y 660 Y 660 X 1320 c 16365312 W 5\",\"U 42 1 x 930 y 450 Y 630 X 930 c 16777215 W 3\",\"U 22 1 x 690 y 210 Y 390 X 690 c 16777215 W 3\",\"U 8 1 C 6,7\",\"U 31 1 x 630 y 810 Y 810 X 810 c 16777215 W 3\",\"U 40 1 x 870 y 510 Y 510 X 1050 c 16777215 W 3\",\"U 7 1 bw 116 i $0 ay 0.5 ax 0.5 x 280 y 220 bh 116 z 20\",\"U 57 1 x 1170 y 450 Y 630 X 1170 c 16777215 W 3\",\"U 12 1 bw 116 i $1 ay 0.5 ax 0.5 x 1640 y 220 bh 116 z 20\",\"U 50 1 x 1110 y 270 Y 270 X 1290 c 16777215 W 3\",\"U 64 1 i board_border.png ay 0.5 ax 0.5 x 960 y 540\",\"U 26 1 x 630 y 570 Y 570 X 810 c 16777215 W 3\",\"U 37 1 x 930 y 210 Y 390 X 930 c 16777215 W 3\",\"U 43 1 x 990 y 450 Y 630 X 990 c 16777215 W 3\",\"U 6 1 f 16777215 ay 0.5 ax 0.5 x 280 y 340 s 40 T $0 z 20\",\"U 33 1 x 750 y 690 Y 870 X 750 c 16777215 W 3\",\"U 63 1 x 1230 y 690 Y 870 X 1230 c 16777215 W 3\",\"U 10 1 f 16777215 w 120 x 1580 y 160 W 0 h 120\",\"U 14 1 C 17,18,15,16\",\"U 30 1 x 630 y 750 Y 750 X 810 c 16777215 W 3\",\"U 17 1 x 840 y 180 Y 900 X 840 c 16365312 W 5\",\"U 11 1 f 16777215 ay 0.5 ax 0.5 x 1640 y 340 s 40 T $1 z 20\",\"U 55 1 x 1110 y 510 Y 510 X 1290 c 16777215 W 3\",\"U 3 1 i logoCG.png ay 0.5 ax 0.5 x 1640 y 915\",\"U 9 1 f -2 w 140 x 1570 y 150 W 0 h 140\",\"U 46 1 x 870 y 810 Y 810 X 1050 c 16777215 W 3\",\"U 27 1 x 690 y 450 Y 630 X 690 c 16777215 W 3\",\"U 45 1 x 870 y 750 Y 750 X 1050 c 16777215 W 3\",\"U 60 1 x 1110 y 750 Y 750 X 1290 c 16777215 W 3\",\"U 18 1 x 1080 y 180 Y 900 X 1080 c 16365312 W 5\",\"U 28 1 x 750 y 450 Y 630 X 750 c 16777215 W 3\",\"U 52 1 x 1170 y 210 Y 390 X 1170 c 16777215 W 3\",\"U 56 1 x 1110 y 570 Y 570 X 1290 c 16777215 W 3\",\"U 62 1 x 1170 y 690 Y 870 X 1170 c 16777215 W 3\",\"U 41 1 x 870 y 570 Y 570 X 1050 c 16777215 W 3\",\"U 48 1 x 990 y 690 Y 870 X 990 c 16777215 W 3\",\"U 5 1 f 16777215 w 120 x 220 y 160 W 0 h 120\",\"U 36 1 x 870 y 330 Y 330 X 1050 c 16777215 W 3\",\"U 1 1 i Background.jpg ay 0 ax 0\",\"U 20 1 x 630 y 270 Y 270 X 810 c 16777215 W 3\",\"U 13 1 C 12,11\",\"U 47 1 x 930 y 690 Y 870 X 930 c 16777215 W 3\",\"U 53 1 x 1230 y 210 Y 390 X 1230 c 16777215 W 3\",\"U 21 1 x 630 y 330 Y 330 X 810 c 16777215 W 3\",\"U 32 1 x 690 y 690 Y 870 X 690 c 16777215 W 3\",\"U 38 1 x 990 y 210 Y 390 X 990 c 16777215 W 3\",\"U 15 1 x 600 y 420 Y 420 X 1320 c 16365312 W 5\",\"U 4 1 f -1 w 140 x 210 y 150 W 0 h 140\",\"U 2 1 i logo.png ay 0.5 ax 0.5 x 280 y 915\",\"U 51 1 x 1110 y 330 Y 330 X 1290 c 16777215 W 3\",\"U 58 1 x 1230 y 450 Y 630 X 1230 c 16777215 W 3\"]}}\n",
      "KEY_FRAME 1\n{\"entitymodule\":[\"C S\",\"U 44 0.1 a 0.5\",\"U 49 0.1 a 0.5\",\"U 59 0.1 C 63,60,61,65,62 a 0.5\",\"U 54 0.1 a 0.5\",\"U 19 0.1 a 0.5\",\"U 39 0.1 a 0.5\",\"U 24 0.1 a 0.5\",\"U 29 0.1 a 0.5\",\"U 65 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1200 y 720 bh 48 t -1\",\"U 65 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 2\n{\"entitymodule\":[\"C S\",\"U 34 0.1 C 35,38,36,66,37 a 0.5\",\"U 24 0.1 a 1\",\"U 66 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 900 y 300 bh 48 t -2\",\"U 66 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 3\n{\"entitymodule\":[\"C S\",\"U 34 0.1 a 1\",\"U 24 0.1 C 67,25,28,26,27 a 0.5\",\"U 67 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 720 y 480 bh 48 t -1\",\"U 67 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 4\n{\"entitymodule\":[\"C S\",\"U 34 0.1 C 35,38,36,66,37,68 a 0.5\",\"U 39 0.1 a 1\",\"U 68 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 300 bh 48 t -2\",\"U 68 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 5\n{\"entitymodule\":[\"C S\",\"U 39 0.1 C 41,69,42,43,40\",\"U 69 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 960 y 540 bh 48 t -1\",\"U 69 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 6\n{\"entitymodule\":[\"C S\",\"U 34 0.1 a 1\",\"U 39 0.1 C 41,69,70,42,43,40 a 0.5\",\"U 70 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 480 bh 48 t -2\",\"U 70 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 7\n{\"entitymodule\":[\"C S\",\"U 34 0.1 C 35,38,36,66,37,68,71\",\"U 71 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 960 y 240 bh 48 t -1\",\"U 71 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 8\n{\"entitymodule\":[\"C S\",\"U 34 0.1 C 35,38,72,36,66,37,68,71 a 0.5\",\"U 29 0.1 a 1\",\"U 72 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 900 y 360 bh 48 t -2\",\"U 72 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 9\n{\"entitymodule\":[\"C S\",\"U 19 0.1 a 1\",\"U 29 0.1 C 33,30,32,73,31 a 0.5\",\"U 73 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 660 y 720 bh 48 t -1\",\"U 73 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 10\n{\"entitymodule\":[\"C S\",\"U 34 0.1 a 1\",\"U 19 0.1 C 20,21,22,74,23 a 0.5\",\"U 74 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 720 y 240 bh 48 t -2\",\"U 74 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 11\n{\"entitymodule\":[\"C S\",\"U 44 0.1 a 1\",\"U 34 0.1 C 35,38,72,36,66,75,37,68,71 a 0.5\",\"U 75 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 960 y 360 bh 48 t -1\",\"U 75 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 12\n{\"entitymodule\":[\"C S\",\"U 44 0.1 C 47,48,76,46,45 a 0.5\",\"U 29 0.1 a 1\",\"U 76 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 900 y 840 bh 48 t -2\",\"U 76 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 13\n{\"entitymodule\":[\"C S\",\"U 24 0.1 a 1\",\"U 29 0.1 C 33,30,77,32,73,31 a 0.5\",\"U 77 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 660 y 780 bh 48 t -1\",\"U 77 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 14\n{\"entitymodule\":[\"C S\",\"U 19 0.1 a 1\",\"U 24 0.1 C 67,25,28,78,26,27 a 0.5\",\"U 78 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 660 y 480 bh 48 t -2\",\"U 78 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 15\n{\"entitymodule\":[\"C S\",\"U 54 0.1 a 1\",\"U 19 0.1 C 20,21,22,74,79,23 a 0.5\",\"U 79 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 780 y 300 bh 48 t -1\",\"U 79 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 16\n{\"entitymodule\":[\"C S\",\"U 34 0.1 a 1\",\"U 54 0.1 C 57,55,80,58,56 a 0.5\",\"U 80 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1200 y 480 bh 48 t -2\",\"U 80 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 17\n{\"entitymodule\":[\"C S\",\"U 34 0.1 C 35,81,38,72,36,66,75,37,68,71 a 0.5\",\"U 59 0.1 a 1\",\"U 81 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1020 y 360 bh 48 t -1\",\"U 81 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 18\n{\"entitymodule\":[\"C S\",\"U 59 0.1 C 63,60,82,61,65,62 a 0.5\",\"U 29 0.1 a 1\",\"U 82 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1140 y 840 bh 48 t -2\",\"U 82 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 19\n{\"entitymodule\":[\"C S\",\"U 44 0.1 a 1\",\"U 29 0.1 C 33,83,30,77,32,73,31 a 0.5\",\"U 83 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 720 y 840 bh 48 t -1\",\"U 83 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 20\n{\"entitymodule\":[\"C S\",\"U 44 0.1 C 47,48,76,84,46,45 a 0.5\",\"U 34 0.1 a 1\",\"U 84 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 720 bh 48 t -2\",\"U 84 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 21\n{\"entitymodule\":[\"C S\",\"U 34 0.1 C 35,81,85,38,72,36,66,75,37,68,71 a 0.5\",\"U 19 0.1 a 1\",\"U 85 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 900 y 240 bh 48 t -1\",\"U 85 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 22\n{\"entitymodule\":[\"C S\",\"U 59 0.1 a 1\",\"U 19 0.1 C 20,21,22,74,79,86,23 a 0.5\",\"U 86 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 780 y 360 bh 48 t -2\",\"U 86 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 23\n{\"entitymodule\":[\"C S\",\"U 44 0.1 a 1\",\"U 59 0.1 C 63,60,82,87,61,65,62 a 0.5\",\"U 87 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1200 y 840 bh 48 t -1\",\"U 87 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 24\n{\"entitymodule\":[\"C S\",\"U 44 0.1 C 47,48,88,76,84,46,45 a 0.5\",\"U 54 0.1 a 1\",\"U 88 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1020 y 780 bh 48 t -2\",\"U 88 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 25\n{\"entitymodule\":[\"C S\",\"U 54 0.1 C 57,89,55,80,58,56 a 0.5\",\"U 19 0.1 a 1\",\"U 89 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1140 y 480 bh 48 t -1\",\"U 89 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 26\n{\"entitymodule\":[\"C S\",\"U 19 0.1 C 20,21,22,74,79,86,90,23 a 0.5\",\"U 29 0.1 a 1\",\"U 90 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 660 y 360 bh 48 t -2\",\"U 90 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 27\n{\"entitymodule\":[\"C S\",\"C S\",\"U 44 0.1 a 1\",\"U 49 0.1 a 1\",\"U 34 0.1 a 1\",\"U 59 0.1 a 1\",\"U 54 0.1 a 1\",\"U 19 0.1 a 1\",\"U 39 0.1 a 1\",\"U 24 0.1 a 1\",\"U 29 0.1 v false C 33,83,30,77,91,32,73,31\",\"U 91 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 660 y 840 bh 48 t -1\",\"U 92 0.2 bw 192 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 720 y 780 bh 192 t -1\",\"U 91 1 sx 1 ~ sy 1 ~\",\"U 14 1 C 17,18,15,16,92\",\"U 92 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 28\n{\"entitymodule\":[\"C S\",\"U 44 0.1 C 93,47,48,88,76,84,46,45\",\"U 49 0.1 a 0.5\",\"U 34 0.1 a 0.5\",\"U 59 0.1 a 0.5\",\"U 54 0.1 a 0.5\",\"U 19 0.1 a 0.5\",\"U 39 0.1 a 0.5\",\"U 24 0.1 a 0.5\",\"U 93 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 840 bh 48 t -2\",\"U 93 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 29\n{\"entitymodule\":[\"C S\",\"U 44 0.1 C 93,47,48,88,76,84,94,46,45 a 0.5\",\"U 24 0.1 a 1\",\"U 94 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 900 y 780 bh 48 t -1\",\"U 94 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 30\n{\"entitymodule\":[\"C S\",\"U 39 0.1 a 1\",\"U 24 0.1 C 95,67,25,28,78,26,27 a 0.5\",\"U 95 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 720 y 540 bh 48 t -2\",\"U 95 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 31\n{\"entitymodule\":[\"C S\",\"U 49 0.1 a 1\",\"U 39 0.1 C 41,96,69,70,42,43,40 a 0.5\",\"U 96 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1020 y 480 bh 48 t -1\",\"U 96 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 32\n{\"entitymodule\":[\"C S\",\"U 49 0.1 C 53,50,52,51,97\",\"U 97 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1260 y 240 bh 48 t -2\",\"U 97 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 33\n{\"entitymodule\":[\"C S\",\"U 44 0.1 a 1\",\"U 49 0.1 C 53,50,52,98,51,97\",\"U 34 0.1 a 1\",\"U 59 0.1 a 1\",\"U 54 0.1 a 1\",\"U 19 0.1 a 1\",\"U 39 0.1 a 1\",\"U 24 0.1 a 1\",\"U 98 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1140 y 360 bh 48 t -1\",\"U 98 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 34\n{\"entitymodule\":[\"C S\",\"U 44 0.1 a 0.5\",\"U 49 0.1 a 0.5\",\"U 34 0.1 a 0.5\",\"U 59 0.1 C 63,60,82,87,61,99,65,62 a 0.5\",\"U 54 0.1 a 0.5\",\"U 19 0.1 a 0.5\",\"U 39 0.1 a 0.5\",\"U 99 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1140 y 780 bh 48 t -2\",\"U 99 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 35\n{\"entitymodule\":[\"C S\",\"U 44 0.1 a 1\",\"U 24 0.1 C 95,67,25,100,28,78,26,27 a 0.5\",\"U 100 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 720 y 600 bh 48 t -1\",\"U 100 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 36\n{\"entitymodule\":[\"C S\",\"C S\",\"U 59 0.1 a 1\",\"U 101 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1020 y 840 bh 48 t -2\",\"U 102 0.2 bw 192 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 780 bh 192 t -2\",\"U 14 1 C 17,18,15,102,16,92\",\"U 44 1 v false C 93,47,48,88,101,76,84,94,46,45\",\"U 101 1 sx 1 ~ sy 1 ~\",\"U 102 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 37\n{\"entitymodule\":[\"C S\",\"U 59 0.1 C 63,60,82,87,61,103,99,65,62 a 0.5\",\"U 54 0.1 a 1\",\"U 103 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1260 y 780 bh 48 t -1\",\"U 103 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 38\n{\"entitymodule\":[\"C S\",\"U 49 0.1 a 1\",\"U 34 0.1 a 1\",\"U 59 0.1 a 1\",\"U 54 0.1 C 104,57,89,55,80,58,56\",\"U 19 0.1 a 1\",\"U 39 0.1 a 1\",\"U 24 0.1 a 1\",\"U 104 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1200 y 600 bh 48 t -2\",\"U 104 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 39\n{\"entitymodule\":[\"C S\",\"U 49 0.1 a 0.5\",\"U 34 0.1 a 0.5\",\"U 59 0.1 a 0.5\",\"U 54 0.1 a 0.5\",\"U 19 0.1 C 20,21,22,74,79,86,90,23,105\",\"U 39 0.1 a 0.5\",\"U 24 0.1 a 0.5\",\"U 105 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 660 y 240 bh 48 t -1\",\"U 105 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 40\n{\"entitymodule\":[\"C S\",\"U 49 0.1 a 1\",\"U 19 0.1 C 20,21,22,106,74,79,86,90,23,105 a 0.5\",\"U 106 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 780 y 240 bh 48 t -2\",\"U 106 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 41\n{\"entitymodule\":[\"C S\",\"U 49 0.1 C 53,50,52,98,51,97,107 a 0.5\",\"U 34 0.1 a 1\",\"U 107 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1200 y 240 bh 48 t -1\",\"U 107 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 42\n{\"entitymodule\":[\"C S\",\"C S\",\"U 49 0.1 a 1\",\"U 109 0.2 bw 192 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 300 bh 192 t -2\",\"U 108 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1020 y 240 bh 48 t -2\",\"U 34 1 v false C 35,81,85,38,72,36,66,75,108,37,68,71\",\"U 14 1 C 17,109,18,15,102,16,92\",\"U 109 1 sx 1 ~ sy 1 ~\",\"U 108 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 43\n{\"entitymodule\":[\"C S\",\"U 49 0.1 C 110,53,50,52,98,51,97,107 a 0.5\",\"U 19 0.1 a 1\",\"U 110 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1140 y 240 bh 48 t -1\",\"U 110 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 44\n{\"entitymodule\":[\"C S\",\"U 19 0.1 C 20,21,22,106,74,79,111,86,90,23,105 a 0.5\",\"U 24 0.1 a 1\",\"U 111 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 660 y 300 bh 48 t -2\",\"U 111 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 45\n{\"entitymodule\":[\"C S\",\"U 59 0.1 a 1\",\"U 24 0.1 C 95,67,25,100,28,78,26,112,27 a 0.5\",\"U 112 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 780 y 600 bh 48 t -1\",\"U 112 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 46\n{\"entitymodule\":[\"C S\",\"U 59 0.1 C 63,60,82,113,87,61,103,99,65,62 a 0.5\",\"U 39 0.1 a 1\",\"U 113 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1200 y 780 bh 48 t -2\",\"U 113 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 47\n{\"entitymodule\":[\"C S\",\"U 39 0.1 C 41,96,69,114,70,42,43,40 a 0.5\",\"U 24 0.1 a 1\",\"U 114 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 900 y 540 bh 48 t -1\",\"U 114 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 48\n{\"entitymodule\":[\"C S\",\"U 49 0.1 a 1\",\"U 59 0.1 a 1\",\"U 54 0.1 a 1\",\"U 19 0.1 a 1\",\"U 39 0.1 a 1\",\"U 24 0.1 C 95,67,25,100,28,78,115,26,112,27\",\"U 115 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 660 y 600 bh 48 t -2\",\"U 115 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 49\n{\"entitymodule\":[\"C S\",\"C S\",\"U 39 0.1 v false C 116,41,96,69,114,70,42,43,40\",\"U 116 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 900 y 600 bh 48 t -1\",\"U 117 0.2 bw 192 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 960 y 540 bh 192 t -1\",\"U 117 1 sx 1 ~ sy 1 ~\",\"U 14 1 C 117,17,109,18,15,102,16,92\",\"U 116 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 50\n{\"entitymodule\":[\"C S\",\"C S\",\"U 54 0.1 a 0.5\",\"U 19 0.1 a 0.5\",\"U 24 0.1 a 0.5\",\"U 118 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1260 y 720 bh 48 t -2\",\"U 119 0.2 bw 192 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1200 y 780 bh 192 t -2\",\"U 14 1 C 117,17,109,18,15,102,16,92,119\",\"U 59 1 v false C 63,60,82,113,87,61,103,99,65,118,62\",\"U 118 1 sx 1 ~ sy 1 ~\",\"U 119 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 51\n{\"entitymodule\":[\"C S\",\"U 49 0.1 C 110,53,50,52,98,51,97,107,120\",\"U 54 0.1 a 1\",\"U 19 0.1 a 1\",\"U 24 0.1 a 1\",\"U 120 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1200 y 360 bh 48 t -1\",\"U 120 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 52\n{\"entitymodule\":[\"C S\",\"C S\",\"U 19 0.1 v false C 20,21,22,106,74,79,121,111,86,90,23,105\",\"U 121 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 720 y 360 bh 48 t -2\",\"U 122 0.2 bw 192 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 720 y 300 bh 192 t -2\",\"U 121 1 sx 1 ~ sy 1 ~\",\"U 14 1 C 117,17,109,18,15,102,122,16,92,119\",\"U 122 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 53\n{\"entitymodule\":[\"C S\",\"U 54 0.1 a 0.5\",\"U 24 0.1 C 95,123,67,25,100,28,78,115,26,112,27 a 0.5\",\"U 123 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 780 y 480 bh 48 t -1\",\"U 123 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 54\n{\"entitymodule\":[\"C S\",\"U 49 0.1 C 110,53,124,50,52,98,51,97,107,120 a 0.5\",\"U 24 0.1 a 1\",\"U 124 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1140 y 300 bh 48 t -2\",\"U 124 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 55\n{\"entitymodule\":[\"C S\",\"U 24 0.1 C 125,95,123,67,25,100,28,78,115,26,112,27\",\"U 125 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 660 y 540 bh 48 t -1\",\"U 125 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 56\n{\"entitymodule\":[\"C S\",\"U 54 0.1 a 1\",\"U 24 0.1 C 95,25,78,26,112,27,125,123,67,100,28,115,126 a 0.5\",\"U 126 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 780 y 540 bh 48 t -2\",\"U 126 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 57\n{\"entitymodule\":[\"C S\",\"U 49 0.1 a 1\",\"U 54 0.1 C 104,57,89,55,80,58,56,127 a 0.5\",\"U 127 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1260 y 480 bh 48 t -1\",\"U 127 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 58\n{\"entitymodule\":[\"C S\",\"U 49 0.1 C 110,53,128,124,50,52,98,51,97,107,120 a 0.5\",\"U 54 0.1 a 1\",\"U 128 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1260 y 300 bh 48 t -2\",\"U 128 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 59\n{\"entitymodule\":[\"C S\",\"U 49 0.1 a 1\",\"U 54 0.1 C 104,57,129,89,55,80,58,56,127\",\"U 24 0.1 a 1\",\"U 129 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1260 y 600 bh 48 t -1\",\"U 129 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 60\n{\"entitymodule\":[\"C S\",\"U 54 0.1 C 104,57,129,89,55,80,130,58,56,127\",\"U 130 0.2 bw 48 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1140 y 600 bh 48 t -2\",\"U 130 1 sx 1 ~ sy 1 ~\"]}\n",
      "KEY_FRAME 61\n{\"entitymodule\":[\"C S\",\"C S\",\"U 49 0.1 v false C 110,53,128,124,50,52,98,51,97,107,120,131\",\"U 132 0.2 bw 192 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1200 y 300 bh 192 t -1\",\"U 131 0.2 bw 48 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1200 y 300 bh 48 t -1\",\"U 131 1 sx 1 ~ sy 1 ~\",\"U 14 1 C 117,17,109,18,15,102,122,132,16,92,119\",\"U 13 1 a 0.3\",\"U 132 1 sx 1 ~ sy 1 ~\"]}\n"
  ]
};

export const playerColors = [
  '#f2b213', // yellow
  '#22a1e4' // curious blue
];

export const modules = [
	GraphicEntityModule
];
