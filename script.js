(function(){
    var script = {
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "children": [
  "this.MainViewer",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "start": "this.init(); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.mainPlayList])",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.72,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0BB02A28_1DD7_6C42_41B7_5FFA575EF161"
},
{
 "levels": [
  {
   "url": "media/popup_0F2384FA_1C8A_F8F7_41AF_29F39426160E_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_0F2384FA_1C8A_F8F7_41AF_29F39426160E_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_0F2384FA_1C8A_F8F7_41AF_29F39426160E_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_04EE6A83_1C8B_2B0C_41B7_32342A9DE417"
},
{
 "levels": [
  {
   "url": "media/popup_08BB12AA_1C9B_1B1D_41A0_AE3A70C3110A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_08BB12AA_1C9B_1B1D_41A0_AE3A70C3110A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_08BB12AA_1C9B_1B1D_41A0_AE3A70C3110A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_04199A83_1C8B_2B0C_41BC_04768DCB0F15"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Gedong Kantor",
 "hfovMin": "135%",
 "id": "panorama_2D10BE77_2601_068D_41AA_898525DDC4A6",
 "overlays": [
  "this.overlay_379049C5_2603_0D8C_41B3_6763A493DD32",
  "this.overlay_378B2303_2603_1E84_41A4_D3B1A8C171E4",
  "this.overlay_67B99F21_74A4_F7DC_41CA_262409A0DC6D",
  "this.popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373",
  "this.overlay_676659C4_74A4_3A64_4193_7ADB6FAD4FC2",
  "this.popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4",
  "this.overlay_0EC81BF9_1C89_28F5_41B7_CD835F368EF2",
  "this.popup_0F2384FA_1C8A_F8F7_41AF_29F39426160E"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 119.81,
   "distance": 1,
   "backwardYaw": 117.98,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 164.37,
   "distance": 1,
   "backwardYaw": -177.06,
   "panorama": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0D868B_74A4_36E3_41A9_3998E6BAA951",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0C168C_74A4_36E5_41D9_E067E8C113FB",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0CC68B_74A4_36E3_4170_631E0DDB8455",
 "easing": "cubic_in_out"
},
{
 "levels": [
  {
   "url": "media/popup_0D7A2B95_1C9F_293C_41A0_49642E6BFD4E_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_0D7A2B95_1C9F_293C_41A0_49642E6BFD4E_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_0D7A2B95_1C9F_293C_41A0_49642E6BFD4E_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_0E66E572_1C99_39F4_419C_CA7A67E45C53"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_camera"
},
{
 "levels": [
  {
   "url": "media/popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_630405A1_74A4_0ADF_41C7_2D1C8968DE2E"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768B_74A4_36E3_41D7_4FF5F93263F3, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true, -1, this.effect_6C0C568B_74A4_36E3_41DC_90199E16AB3D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CC68B_74A4_36E3_4170_631E0DDB8455, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CD68B_74A4_36E3_418E_ABFDE4F63694, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DB68B_74A4_36E3_41C5_67D1D34FE59E, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0D868B_74A4_36E3_41A9_3998E6BAA951, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C168C_74A4_36E5_41D9_E067E8C113FB, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DF68B_74A4_36E3_41CF_BEFD3FFCFE6C, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C868C_74A4_36E5_41D8_204B918D2974, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768C_74A4_36E5_41D8_8AE8D8A161A5, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B168C_74A4_36E5_41B2_48812B2168EB, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CE68C_74A4_36E5_41D3_6FEFA3B4EE27, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B768C_74A4_36E5_41A3_BC3E427D2A98, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B568C_74A4_36E5_41D7_1AFEE25D8FE1, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BC68C_74A4_36E5_41C7_9761ECB2FB4D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BB68C_74A4_36E5_41DC_C9B8C95EBF17, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A568C_74A4_36E5_41BD_3955D28DCBE1, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A368C_74A4_36E5_41B0_C44F048CE963, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AA68C_74A4_36E5_41BF_743C0020EFA7, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A968C_74A4_36E5_41DC_C8690A064632, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09268D_74A4_36E7_41D0_F6194AEE715D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AF68C_74A4_36E5_41AD_8A2DFF00E019, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C08068D_74A4_36E7_41DA_80112C9FA066, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09F68D_74A4_36E7_41C4_3F1F8665B7C9, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_camera"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.3,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.73,
 "hideEasing": "cubic_out",
 "yaw": 147.26
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0EA3F651_1C89_1B35_41B2_57400BE0A8F2.ogg",
  "mp3Url": "media/audio_0EA3F651_1C89_1B35_41B2_57400BE0A8F2.mp3"
 },
 "id": "audio_0EA3F651_1C89_1B35_41B2_57400BE0A8F2",
 "data": {
  "label": "Bale Bengong"
 }
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "label": "Nista Mandala Drone View",
 "hfovMin": "120%",
 "id": "panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4",
 "thumbnailUrl": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.32,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0BF53A08_1DD7_6C42_418E_4A9FCBCB4020"
},
{
 "levels": [
  {
   "url": "media/popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_6306059F_74A4_0AE4_41CA_390D721A9210"
},
{
 "levels": [
  {
   "url": "media/popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_6303B5A1_74A4_0ADF_41A9_EAD96A59AD32"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0E38D5EA_1C8B_7917_4199_6268E78785F6.ogg",
  "mp3Url": "media/audio_0E38D5EA_1C8B_7917_4199_6268E78785F6.mp3"
 },
 "id": "audio_0E38D5EA_1C8B_7917_4199_6268E78785F6",
 "data": {
  "label": "Gedong Kantor"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -104.52,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B6D2A4C_1DD7_6CC2_41A3_93CDB6AF3C37"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.24,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B387A79_1DD7_6CC2_41BC_8B9795864822"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0B768C_74A4_36E5_41A3_BC3E427D2A98",
 "easing": "cubic_in_out"
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "label": "Entrance Drone View",
 "hfovMin": "120%",
 "id": "panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864",
 "thumbnailUrl": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_08E75C9B_1C99_6F33_41B0_DCBFF64BFA93.ogg",
  "mp3Url": "media/audio_08E75C9B_1C99_6F33_41B0_DCBFF64BFA93.mp3"
 },
 "id": "audio_08E75C9B_1C99_6F33_41B0_DCBFF64BFA93",
 "data": {
  "label": "Inner"
 }
},
{
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "mouseControlMode": "drag_acceleration"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0C7366EB_1DB5_25C5_41A9_1B8FB6729951.ogg",
  "mp3Url": "media/audio_0C7366EB_1DB5_25C5_41A9_1B8FB6729951.mp3"
 },
 "id": "audio_0C7366EB_1DB5_25C5_41A9_1B8FB6729951",
 "data": {
  "label": "Historic"
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C09F68D_74A4_36E7_41C4_3F1F8665B7C9",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_camera"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 7.08,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0D7A2B95_1C9F_293C_41A0_49642E6BFD4E",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0D7A2B95_1C9F_293C_41A0_49642E6BFD4E_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -14.31,
 "hideEasing": "cubic_out",
 "yaw": 123.47
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.52,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.09,
 "hideEasing": "cubic_out",
 "yaw": -102.69
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0E21B2E3_1CB6_FB15_41BC_09F6CA0EC7AD.ogg",
  "mp3Url": "media/audio_0E21B2E3_1CB6_FB15_41BC_09F6CA0EC7AD.mp3"
 },
 "id": "audio_0E21B2E3_1CB6_FB15_41BC_09F6CA0EC7AD",
 "data": {
  "label": "Dwarapala"
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0BC68C_74A4_36E5_41C7_9761ECB2FB4D",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Bale Bengong and Kul-Kul",
 "hfovMin": "135%",
 "id": "panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B",
 "overlays": [
  "this.overlay_0C7BCFB2_1C99_2977_41AD_A7557C4F27EA",
  "this.overlay_0DFF0636_1C99_3B7C_41B3_9F6A0EB25155",
  "this.popup_0D7A2B95_1C9F_293C_41A0_49642E6BFD4E",
  "this.popup_0E2FB510_1C89_1933_41A4_AB992EAA3D94",
  "this.overlay_080E9900_1C8B_E90C_41B2_484AF288081A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 75.48,
   "distance": 1,
   "backwardYaw": -48.66,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_t.jpg",
 "hfovMax": 130
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0A968C_74A4_36E5_41DC_C8690A064632",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_084B8368_1C99_191D_41B7_898500726AEF.ogg",
  "mp3Url": "media/audio_084B8368_1C99_191D_41B7_898500726AEF.mp3"
 },
 "id": "audio_084B8368_1C99_191D_41B7_898500726AEF",
 "data": {
  "label": "Bale Lantang"
 }
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_camera"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6C0C568B_74A4_36E3_41DC_90199E16AB3D",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.19,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B52AA42_1DD7_6CC6_4185_22C00121D510"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.27,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B1FBA67_1DD7_6CCE_4192_424A4D3CBAC8"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.78,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.86,
 "hideEasing": "cubic_out",
 "yaw": 75.02
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0C768C_74A4_36E5_41D8_8AE8D8A161A5",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.63,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0ACA1A83_1DD7_6C46_41A4_FE7401F09010"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.67,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0BA6DA18_1DD7_6C42_41B1_17A0B84B0104"
},
{
 "levels": [
  {
   "url": "media/popup_0F1929C8_1CB7_6913_41B9_3CAB46CBB6DF_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_0F1929C8_1CB7_6913_41B9_3CAB46CBB6DF_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_0F1929C8_1CB7_6913_41B9_3CAB46CBB6DF_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_04E5DA73_1C8B_2BF3_41B3_67CA850AD662"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Madya Mandala",
 "hfovMin": "135%",
 "id": "panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C",
 "overlays": [
  "this.overlay_349986A0_2603_0784_41C0_450B63BBAA44",
  "this.overlay_352FE9E9_2603_0D87_41B5_3F2A56CAD9DA",
  "this.overlay_0E564A57_1C89_6B3E_41BA_931AD5F7FE56",
  "this.popup_0ECA55BD_1C89_1972_41BC_2835B1E3E93A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -10.79,
   "distance": 1,
   "backwardYaw": 158.33,
   "panorama": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -100.49,
   "distance": 1,
   "backwardYaw": 82.28,
   "panorama": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_0828798E_1C97_2914_41B5_1EFFCA6372E1"
 ]
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Entrance to Madya Mandala",
 "hfovMin": "135%",
 "id": "panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6",
 "overlays": [
  "this.overlay_346E77A6_2607_058C_41C0_269B50990DFC",
  "this.overlay_3434AED9_2607_0784_41B2_4B959E10BF48",
  "this.overlay_343192D9_2601_1F87_41BF_59F1D579F81D",
  "this.overlay_66B340EB_74A4_0A23_41D9_DA888B520D76",
  "this.popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0",
  "this.overlay_60A7A3C0_74A4_0E5D_41B5_A9020EE0097A",
  "this.popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -127.38,
   "distance": 1,
   "backwardYaw": 49.68,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -169.87,
   "distance": 1,
   "backwardYaw": -3.34,
   "panorama": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.28,
   "distance": 1,
   "backwardYaw": -100.49,
   "panorama": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_0B88DD56_1C99_6934_41BA_2D4ACAE5F910_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_0B88DD56_1C99_6934_41BA_2D4ACAE5F910_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_0B88DD56_1C99_6934_41BA_2D4ACAE5F910_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_04171A83_1C8B_2B0C_41A5_59A2C040A00B"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0B168C_74A4_36E5_41B2_48812B2168EB",
 "easing": "cubic_in_out"
},
{
 "levels": [
  {
   "url": "media/popup_6034D255_74AC_0E67_41CD_6AC8640565DC_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_6034D255_74AC_0E67_41CD_6AC8640565DC_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_6034D255_74AC_0E67_41CD_6AC8640565DC_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_6318E59F_74A4_0AE4_41DA_CF0A50A875D8"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0DF68B_74A4_36E3_41CF_BEFD3FFCFE6C",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.37,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0BD129E8_1DD7_6FC2_419E_A9E00783A5D0"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0CD68B_74A4_36E3_418E_ABFDE4F63694",
 "easing": "cubic_in_out"
},
{
 "levels": [
  {
   "url": "media/popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_630555A0_74A4_0ADD_41D5_89E77B9A920A"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0F96B082_1C8B_1717_4179_033DF87088A9.ogg",
  "mp3Url": "media/audio_0F96B082_1C8B_1717_4179_033DF87088A9.mp3"
 },
 "id": "audio_0F96B082_1C8B_1717_4179_033DF87088A9",
 "data": {
  "label": "Kori"
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0A568C_74A4_36E5_41BD_3955D28DCBE1",
 "easing": "cubic_in_out"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0E0137D3_1C96_F935_41A4_FA2BCDA8ED10.ogg",
  "mp3Url": "media/audio_0E0137D3_1C96_F935_41A4_FA2BCDA8ED10.mp3"
 },
 "id": "audio_0E0137D3_1C96_F935_41A4_FA2BCDA8ED10",
 "data": {
  "label": "Kulkul"
 }
},
{
 "levels": [
  {
   "url": "media/popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_631A459E_74A4_0AE4_41D2_F24CF06A9131"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.78,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0F2384FA_1C8A_F8F7_41AF_29F39426160E",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0F2384FA_1C8A_F8F7_41AF_29F39426160E_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -9.33,
 "hideEasing": "cubic_out",
 "yaw": -91.66
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B768C_74A4_36E5_41A3_BC3E427D2A98, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B568C_74A4_36E5_41D7_1AFEE25D8FE1, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BC68C_74A4_36E5_41C7_9761ECB2FB4D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BB68C_74A4_36E5_41DC_C9B8C95EBF17, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A568C_74A4_36E5_41BD_3955D28DCBE1, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A368C_74A4_36E5_41B0_C44F048CE963, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_camera"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.27,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_08BB12AA_1C9B_1B1D_41A0_AE3A70C3110A",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_08BB12AA_1C9B_1B1D_41A0_AE3A70C3110A_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -19.2,
 "hideEasing": "cubic_out",
 "yaw": 73.2
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.4,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B40AA38_1DD7_6C42_419A_750813CD0B08"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.21,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0BD899DC_1DD7_6FC2_41B4_3BE3984B6F95"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.75,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.81,
 "hideEasing": "cubic_out",
 "yaw": -63.93
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C09268D_74A4_36E7_41D0_F6194AEE715D",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Madya Mandala Drone View 2",
 "hfovMin": "120%",
 "id": "panorama_30B7140F_2603_3A9A_41C1_272601577731",
 "overlays": [
  "this.popup_664F1225_74A4_0E27_419B_C36027287E02"
 ],
 "partial": false,
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_camera"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.76,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0F1929C8_1CB7_6913_41B9_3CAB46CBB6DF",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0F1929C8_1CB7_6913_41B9_3CAB46CBB6DF_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -4.68,
 "hideEasing": "cubic_out",
 "yaw": 104.81
},
{
 "levels": [
  {
   "url": "media/popup_09491381_1CB9_1912_41A2_9CB920ED153A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_09491381_1CB9_1912_41A2_9CB920ED153A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_09491381_1CB9_1912_41A2_9CB920ED153A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_04E48A83_1C8B_2B0C_41A2_9E23462B7C1C"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Nista Mandala",
 "hfovMin": "135%",
 "id": "panorama_2D157EBA_2601_0784_41C0_CB99BEACB061",
 "overlays": [
  "this.overlay_296B4552_2603_3A85_41BE_78D34E4D6570",
  "this.overlay_36B0287E_2601_0B7C_418B_39ECAD1148CB",
  "this.overlay_364BC4C5_2601_1B8C_418E_572B25FF420D",
  "this.overlay_36C40ACC_2601_0F9C_41B1_4EA1B52EF836",
  "this.overlay_349F45C4_2601_058D_41BC_EFD84F97263C",
  "this.overlay_67AD5348_74A4_0E6D_41B1_71B1CB9E6F0E",
  "this.popup_60DD79C6_74A4_7A64_41B1_978A33008E8C",
  "this.overlay_66AC857A_74AC_0A2C_41D5_86976B208250",
  "this.popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4",
  "this.overlay_668DB340_74AC_0E5D_41DB_72ED250DFA35",
  "this.popup_677507AC_74AC_1625_41D6_004BD60D105D"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -102.63,
   "distance": 1,
   "backwardYaw": 80.6,
   "panorama": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 117.98,
   "distance": 1,
   "backwardYaw": 119.81,
   "panorama": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -48.66,
   "distance": 1,
   "backwardYaw": 75.48,
   "panorama": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 49.68,
   "distance": 1,
   "backwardYaw": -127.38,
   "panorama": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 76.76,
   "distance": 1,
   "backwardYaw": -98.33,
   "panorama": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_0F7D3FF6_1CB9_28FE_41BA_21C607BBBEDB"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0B568C_74A4_36E5_41D7_1AFEE25D8FE1",
 "easing": "cubic_in_out"
},
{
 "levels": [
  {
   "url": "media/popup_677507AC_74AC_1625_41D6_004BD60D105D_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_677507AC_74AC_1625_41D6_004BD60D105D_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_677507AC_74AC_1625_41D6_004BD60D105D_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_6319659E_74A4_0AE4_41D4_5515A69E3FCA"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_camera"
},
{
 "levels": [
  {
   "url": "media/popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_630E75AA_74A4_0A2C_41C6_623D4D6AD974"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0BB68C_74A4_36E5_41DC_C9B8C95EBF17",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.62,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B7DFA56_1DD7_6CCE_41A3_ED3E784CE00A"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.77,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -3.37,
 "hideEasing": "cubic_out",
 "yaw": -110.04
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360",
 "easing": "cubic_in_out"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.59,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_60DD79C6_74A4_7A64_41B1_978A33008E8C",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_60DD79C6_74A4_7A64_41B1_978A33008E8C_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 4.98,
 "hideEasing": "cubic_out",
 "yaw": 78.06
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_12480FC0_1DAD_23C3_41B5_B5C031D21028.ogg",
  "mp3Url": "media/audio_12480FC0_1DAD_23C3_41B5_B5C031D21028.mp3"
 },
 "id": "audio_12480FC0_1DAD_23C3_41B5_B5C031D21028",
 "data": {
  "label": "Bale Pegat"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CC68B_74A4_36E3_4170_631E0DDB8455, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CD68B_74A4_36E3_418E_ABFDE4F63694, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DB68B_74A4_36E3_41C5_67D1D34FE59E, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0D868B_74A4_36E3_41A9_3998E6BAA951, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C168C_74A4_36E5_41D9_E067E8C113FB, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DF68B_74A4_36E3_41CF_BEFD3FFCFE6C, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C868C_74A4_36E5_41D8_204B918D2974, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768C_74A4_36E5_41D8_8AE8D8A161A5, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B168C_74A4_36E5_41B2_48812B2168EB, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CE68C_74A4_36E5_41D3_6FEFA3B4EE27, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_camera"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_camera"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.51,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B965A18_1DD7_6C42_41BB_CF7684F27BAA"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Bale Pegat",
 "hfovMin": "135%",
 "id": "panorama_2D29177D_2601_057C_41BD_9C0038DCFE72",
 "overlays": [
  "this.overlay_32D273EA_260F_1D85_4196_721ED7AF2C12",
  "this.overlay_08565C6D_1C9B_2F17_41B6_2A618AF04003",
  "this.popup_08BB12AA_1C9B_1B1D_41A0_AE3A70C3110A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 146.95,
   "distance": 1,
   "backwardYaw": -24.73,
   "panorama": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_t.jpg",
 "hfovMax": 130
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.02,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0BED79E8_1DD7_6FC2_41BC_D7B7429E1C38"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.67,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B0FDA5F_1DD7_6CFD_41BC_4DABB4BDA62E"
},
{
 "levels": [
  {
   "url": "media/popup_60DD79C6_74A4_7A64_41B1_978A33008E8C_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_60DD79C6_74A4_7A64_41B1_978A33008E8C_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_60DD79C6_74A4_7A64_41B1_978A33008E8C_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_631B559D_74A4_0AE4_41D1_14C393C3E173"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "The Kori",
 "hfovMin": "135%",
 "id": "panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290",
 "overlays": [
  "this.overlay_29D95CC6_2601_0B8C_41A8_2B0558EB5C8E",
  "this.overlay_36397BDE_261F_0DBC_41B1_5F9EC72C8301",
  "this.overlay_3768C2EB_2601_1F9B_41B0_D6EE650EB924",
  "this.overlay_674EDEAC_74AC_1625_41D8_AE6E7BB74451",
  "this.popup_6034D255_74AC_0E67_41CD_6AC8640565DC",
  "this.overlay_67EF3FF8_74AC_362D_41D0_50C00163B84E",
  "this.popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4",
  "this.overlay_668F601B_74AC_09E2_41D9_79DE1A57577E",
  "this.popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -98.33,
   "distance": 1,
   "backwardYaw": 76.76,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.06,
   "distance": 1,
   "backwardYaw": 164.37,
   "panorama": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.34,
   "distance": 1,
   "backwardYaw": -169.87,
   "panorama": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_0F6671B0_1DD5_1C42_41AB_C7EF4DE4B18B"
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AA68C_74A4_36E5_41BF_743C0020EFA7, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A968C_74A4_36E5_41DC_C8690A064632, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09268D_74A4_36E7_41D0_F6194AEE715D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AF68C_74A4_36E5_41AD_8A2DFF00E019, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C08068D_74A4_36E7_41DA_80112C9FA066, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09F68D_74A4_36E7_41C4_3F1F8665B7C9, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_camera"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_30B7140F_2603_3A9A_41C1_272601577731_camera"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0828798E_1C97_2914_41B5_1EFFCA6372E1.ogg",
  "mp3Url": "media/audio_0828798E_1C97_2914_41B5_1EFFCA6372E1.mp3"
 },
 "id": "audio_0828798E_1C97_2914_41B5_1EFFCA6372E1",
 "data": {
  "label": "Middle"
 }
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0DB68B_74A4_36E3_41C5_67D1D34FE59E",
 "easing": "cubic_in_out"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.76,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_09491381_1CB9_1912_41A2_9CB920ED153A",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_09491381_1CB9_1912_41A2_9CB920ED153A_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.04,
 "hideEasing": "cubic_out",
 "yaw": 57.8
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.13,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0ADACA8B_1DD7_6C46_41B4_A9C885A4A894"
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0F6671B0_1DD5_1C42_41AB_C7EF4DE4B18B.ogg",
  "mp3Url": "media/audio_0F6671B0_1DD5_1C42_41AB_C7EF4DE4B18B.mp3"
 },
 "id": "audio_0F6671B0_1DD5_1C42_41AB_C7EF4DE4B18B",
 "data": {
  "label": "Kori 2"
 }
},
{
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 6,
      "width": 3072,
      "tags": "ondemand",
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "label": "Madya Mandala Drone View 2",
 "hfovMin": "120%",
 "id": "panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC",
 "thumbnailUrl": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_t.jpg",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.94,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0BF809F8_1DD7_6FC2_41BC_90C46A16F5C5"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.25,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.22,
 "hideEasing": "cubic_out",
 "yaw": 100.42
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768B_74A4_36E3_41D7_4FF5F93263F3, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true, -1, this.effect_6C0C568B_74A4_36E3_41DC_90199E16AB3D, 'showEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CC68B_74A4_36E3_4170_631E0DDB8455, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CD68B_74A4_36E3_418E_ABFDE4F63694, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DB68B_74A4_36E3_41C5_67D1D34FE59E, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0D868B_74A4_36E3_41A9_3998E6BAA951, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C168C_74A4_36E5_41D9_E067E8C113FB, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DF68B_74A4_36E3_41CF_BEFD3FFCFE6C, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C868C_74A4_36E5_41D8_204B918D2974, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768C_74A4_36E5_41D8_8AE8D8A161A5, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B168C_74A4_36E5_41B2_48812B2168EB, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CE68C_74A4_36E5_41D3_6FEFA3B4EE27, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B768C_74A4_36E5_41A3_BC3E427D2A98, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B568C_74A4_36E5_41D7_1AFEE25D8FE1, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BC68C_74A4_36E5_41C7_9761ECB2FB4D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BB68C_74A4_36E5_41DC_C9B8C95EBF17, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A568C_74A4_36E5_41BD_3955D28DCBE1, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A368C_74A4_36E5_41B0_C44F048CE963, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AA68C_74A4_36E5_41BF_743C0020EFA7, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A968C_74A4_36E5_41DC_C8690A064632, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09268D_74A4_36E7_41D0_F6194AEE715D, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AF68C_74A4_36E5_41AD_8A2DFF00E019, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "media": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360, 'hideEffect', false)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "camera": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731_camera"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C08068D_74A4_36E7_41DA_80112C9FA066, 'hideEffect', false); this.trigger('tourEnded')",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09F68D_74A4_36E7_41C4_3F1F8665B7C9, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "media": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC",
   "camera": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_camera"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 131.34,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B284A71_1DD7_6CC2_41AF_F8E86C4AAB1E"
},
{
 "levels": [
  {
   "url": "media/popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_630505A0_74A4_0ADD_41C4_FAFFBE2DB2B1"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0CE68C_74A4_36E5_41D3_6FEFA3B4EE27",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0A368C_74A4_36E5_41B0_C44F048CE963",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0C868C_74A4_36E5_41D8_204B918D2974",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0AA68C_74A4_36E5_41BF_743C0020EFA7",
 "easing": "cubic_in_out"
},
{
 "levels": [
  {
   "url": "media/popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_6302B5A7_74A4_0A23_41CA_F281F3791C37"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.94,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0E2FB510_1C89_1933_41A4_AB992EAA3D94",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0E2FB510_1C89_1933_41A4_AB992EAA3D94_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -32.08,
 "hideEasing": "cubic_out",
 "yaw": 8.22
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0C768B_74A4_36E3_41D7_4FF5F93263F3",
 "easing": "cubic_in_out"
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Entrance",
 "hfovMin": "135%",
 "id": "panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0",
 "overlays": [
  "this.overlay_28EF98C9_2603_0B84_41C2_B549FF4D258F",
  "this.overlay_0E2CAF50_1CB7_2933_41AD_DDA8B3A02DAE",
  "this.popup_0F1929C8_1CB7_6913_41B9_3CAB46CBB6DF",
  "this.overlay_082F09AA_1CB9_6916_4182_9E44F61400FD",
  "this.popup_09491381_1CB9_1912_41A2_9CB920ED153A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 80.6,
   "distance": 1,
   "backwardYaw": -102.63,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "class": "PanoramaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0F7D3FF6_1CB9_28FE_41BA_21C607BBBEDB.ogg",
  "mp3Url": "media/audio_0F7D3FF6_1CB9_28FE_41BA_21C607BBBEDB.mp3"
 },
 "id": "audio_0F7D3FF6_1CB9_28FE_41BA_21C607BBBEDB",
 "data": {
  "label": "Outer"
 }
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0E546549_1CB9_3912_4199_0BAAA0C3C0F2.ogg",
  "mp3Url": "media/audio_0E546549_1CB9_3912_4199_0BAAA0C3C0F2.mp3"
 },
 "id": "audio_0E546549_1CB9_3912_4199_0BAAA0C3C0F2",
 "data": {
  "label": "Bhadra Kala"
 }
},
{
 "levels": [
  {
   "url": "media/popup_0E2FB510_1C89_1933_41A4_AB992EAA3D94_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_0E2FB510_1C89_1933_41A4_AB992EAA3D94_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_0E2FB510_1C89_1933_41A4_AB992EAA3D94_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_04114A83_1C8B_2B0C_4182_6D242BAF3808"
},
{
 "levels": [
  {
   "url": "media/popup_0ECA55BD_1C89_1972_41BC_2835B1E3E93A_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_0ECA55BD_1C89_1972_41BC_2835B1E3E93A_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_0ECA55BD_1C89_1972_41BC_2835B1E3E93A_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ],
 "class": "ImageResource",
 "id": "ImageResource_04158A83_1C8B_2B0C_41B7_CDAC14A2D08A"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.78,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.09,
 "hideEasing": "cubic_out",
 "yaw": 97.26
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.76,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_6034D255_74AC_0E67_41CD_6AC8640565DC",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_6034D255_74AC_0E67_41CD_6AC8640565DC_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 5.59,
 "hideEasing": "cubic_out",
 "yaw": 86.28
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0AF68C_74A4_36E5_41AD_8A2DFF00E019",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C08068D_74A4_36E7_41DA_80112C9FA066",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_camera"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "class": "AudioResource",
  "oggUrl": "media/audio_0E5338F8_1C8B_68F2_41A4_C7276D71B607.ogg",
  "mp3Url": "media/audio_0E5338F8_1C8B_68F2_41A4_C7276D71B607.mp3"
 },
 "id": "audio_0E5338F8_1C8B_68F2_41A4_C7276D71B607",
 "data": {
  "label": "seme"
 }
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.75,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -6.38,
 "hideEasing": "cubic_out",
 "yaw": -121.45
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.61,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0B88DD56_1C99_6934_41BA_2D4ACAE5F910",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0B88DD56_1C99_6934_41BA_2D4ACAE5F910_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -17.05,
 "hideEasing": "cubic_out",
 "yaw": 17.77
},
{
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "label": "Bale Lantang",
 "hfovMin": "135%",
 "id": "panorama_2D10E000_2601_7A83_41B5_D01EEB41A880",
 "overlays": [
  "this.overlay_35F861B3_2601_1D8B_41B9_85B0AF6B1B31",
  "this.overlay_35647234_260E_FE8D_41A7_1C644A640640",
  "this.overlay_600CEB29_74A4_1E2C_41C7_CFFB9244D01A",
  "this.popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1",
  "this.overlay_08C506BC_1C99_3B75_41B1_EA2AE2B6D89E",
  "this.popup_0B88DD56_1C99_6934_41BA_2D4ACAE5F910",
  "this.overlay_0CC36967_1DBF_6CCE_41B3_AF5C1D8BD7A5",
  "this.overlay_0CF34FC7_1DBD_63CD_41BA_4BF4B36984AD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -24.73,
   "distance": 1,
   "backwardYaw": 146.95,
   "panorama": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 158.33,
   "distance": 1,
   "backwardYaw": -10.79,
   "panorama": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "class": "Panorama",
 "vfov": 180,
 "thumbnailUrl": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_t.jpg",
 "hfovMax": 130,
 "audios": [
  "this.audio_0C7366EB_1DB5_25C5_41A9_1B8FB6729951"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.05,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0BCD19C8_1DD7_6FC2_4135_B58E663AEE00"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_camera"
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 2.99,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_0ECA55BD_1C89_1972_41BC_2835B1E3E93A",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_0ECA55BD_1C89_1972_41BC_2835B1E3E93A_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -1.93,
 "hideEasing": "cubic_out",
 "yaw": 157.88
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 3.76,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_677507AC_74AC_1625_41D6_004BD60D105D",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_677507AC_74AC_1625_41D6_004BD60D105D_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -5.04,
 "hideEasing": "cubic_out",
 "yaw": 26.14
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.66,
  "pitch": 0
 },
 "automaticZoomSpeed": 10,
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "id": "camera_0B859A08_1DD7_6C42_41AA_B25A4ED8A28E"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "normal",
 "id": "MainViewer",
 "left": 0,
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#F7931E",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "minWidth": 100,
 "toolTipFontFamily": "Georgia",
 "propagateClick": true,
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F7931E",
 "playbackBarHeadShadowColor": "#000000",
 "class": "ViewerArea",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "toolTipFontColor": "#F7931E",
 "progressBarBackgroundColorDirection": "vertical",
 "shadow": false,
 "progressRight": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "progressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "borderRadius": 0,
 "top": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBarBorderColor": "#0066FF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#F7931E",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#F7931E",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "shadow": false,
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "top": 0,
 "gap": 10,
 "borderSize": 0,
 "height": 73.6,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--BUTTON SET"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0"
 ],
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "width": 60,
 "right": 15,
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "layout": "vertical",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "backgroundColorRatios": [
  0.02
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "minWidth": 1,
 "propagateClick": false,
 "top": 62,
 "gap": 0,
 "borderSize": 0,
 "height": 70.4,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-button set"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_19513556_0DF3_35CF_419C_3E6A0491C97A",
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "width": "18.936%",
 "right": "40%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 30,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "propagateClick": true,
 "minWidth": 1,
 "height": 90,
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-button set container"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1300,
 "maxWidth": 922,
 "id": "Image_6458BD88_745C_1AED_41C8_94D6F4976C22",
 "left": "7.27%",
 "width": "18.901%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "url": "skin/Image_6458BD88_745C_1AED_41C8_94D6F4976C22.jpg",
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "16.79%",
 "propagateClick": false,
 "minWidth": 1,
 "height": "49.204%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "scaleMode": "fit_inside",
 "data": {
  "name": "Info"
 },
 "visible": false,
 "horizontalAlign": "center",
 "shadow": false
},
{
 "shadow": false,
 "id": "veilPopupPanorama",
 "left": 0,
 "right": 0,
 "backgroundOpacity": 0.55,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "bottom": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "top": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "UIComponent",
 "data": {
  "name": "UIComponent12917"
 },
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "right": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "bottom": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minWidth": 0,
 "backgroundColor": [],
 "top": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "ZoomImage",
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage12918"
 },
 "visible": false,
 "backgroundColorDirection": "vertical"
},
{
 "shadow": false,
 "horizontalAlign": "center",
 "pressedIconColor": "#888888",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "right": 10,
 "verticalAlign": "middle",
 "backgroundOpacity": 0.3,
 "paddingRight": 5,
 "iconColor": "#000000",
 "iconHeight": 20,
 "layout": "horizontal",
 "paddingLeft": 5,
 "minHeight": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "rollOverIconColor": "#666666",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "borderColor": "#000000",
 "minWidth": 0,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "top": 10,
 "label": "",
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 5,
 "gap": 5,
 "paddingTop": 5,
 "class": "CloseButton",
 "fontSize": "1.29vmin",
 "iconWidth": 20,
 "fontStyle": "normal",
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "duration": 350,
  "easing": "cubic_in_out"
 },
 "data": {
  "name": "CloseButton12919"
 },
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "iconLineWidth": 5
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_19513556_0DF3_35CF_419C_3E6A0491C97A",
 "width": 40,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_19513556_0DF3_35CF_419C_3E6A0491C97A_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 40,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "class": "IconButton",
 "data": {
  "name": "Button34604"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_19513556_0DF3_35CF_419C_3E6A0491C97A.png",
 "pressedIconURL": "skin/IconButton_19513556_0DF3_35CF_419C_3E6A0491C97A_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290, this.camera_0BF809F8_1DD7_6FC2_41BC_90C46A16F5C5); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.37,
   "hfov": 4.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.81
  }
 ],
 "items": [
  {
   "pitch": -17.81,
   "yaw": 164.37,
   "image": "this.AnimatedImageResource_326A29E5_2601_0D8F_41AD_3826CB544EBB",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.85,
   "distance": 100
  }
 ],
 "id": "overlay_379049C5_2603_0D8C_41B3_6763A493DD32",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_0BED79E8_1DD7_6FC2_41BC_D7B7429E1C38); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.81,
   "hfov": 4.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.01
  }
 ],
 "items": [
  {
   "pitch": -12.01,
   "yaw": 119.81,
   "image": "this.AnimatedImageResource_326A19E5_2601_0D8F_41C1_D85BB9A3B675",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.44,
   "distance": 100
  }
 ],
 "id": "overlay_378B2303_2603_1E84_41A4_D3B1A8C171E4",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_630505A0_74A4_0ADD_41C4_FAFFBE2DB2B1, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.42,
   "hfov": 2.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.22
  }
 ],
 "items": [
  {
   "pitch": -5.22,
   "yaw": 100.42,
   "image": "this.AnimatedImageResource_633BC578_74A4_0A2D_41DA_0FD5A3D71DD5",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.71,
   "distance": 100
  }
 ],
 "id": "overlay_67B99F21_74A4_F7DC_41CA_262409A0DC6D",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_630405A1_74A4_0ADF_41C7_2D1C8968DE2E, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.26,
   "hfov": 2.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.73
  }
 ],
 "items": [
  {
   "pitch": -4.73,
   "yaw": 147.26,
   "image": "this.AnimatedImageResource_633A2579_74A4_0A2F_41A8_5334887EA197",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.85,
   "distance": 100
  }
 ],
 "id": "overlay_676659C4_74A4_3A64_4193_7ADB6FAD4FC2",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0F2384FA_1C8A_F8F7_41AF_29F39426160E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_04EE6A83_1C8B_2B0C_41B7_32342A9DE417, null, null, null, this.audio_0E38D5EA_1C8B_7917_4199_6268E78785F6, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -91.66,
   "hfov": 9.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.33
  }
 ],
 "items": [
  {
   "pitch": -9.33,
   "yaw": -91.66,
   "image": "this.AnimatedImageResource_04CA2A65_1C8B_2B17_4191_A5CC9645F758",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.39,
   "distance": 100
  }
 ],
 "id": "overlay_0EC81BF9_1C89_28F5_41B7_CD835F368EF2",
 "data": {
  "label": "Info 01"
 }
},
{
 "shadow": false,
 "fontFamily": "Arial",
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "width": 60,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "iconHeight": 30,
 "layout": "horizontal",
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "propagateClick": false,
 "mode": "push",
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 12,
 "iconWidth": 30,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "data": {
  "name": "Button settings VR"
 },
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ]
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0D7A2B95_1C9F_293C_41A0_49642E6BFD4E, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_0E66E572_1C99_39F4_419C_CA7A67E45C53, null, null, null, this.audio_0E0137D3_1C96_F935_41A4_FA2BCDA8ED10, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 123.47,
   "hfov": 9.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.31
  }
 ],
 "items": [
  {
   "pitch": -14.31,
   "yaw": 123.47,
   "image": "this.AnimatedImageResource_0E36F55B_1C99_3934_4192_2691F4686756",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.98,
   "distance": 100
  }
 ],
 "id": "overlay_0C7BCFB2_1C99_2977_41AD_A7557C4F27EA",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0E2FB510_1C89_1933_41A4_AB992EAA3D94, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_04114A83_1C8B_2B0C_4182_6D242BAF3808, null, null, null, this.audio_0EA3F651_1C89_1B35_41B2_57400BE0A8F2, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 8.22,
   "hfov": 6.12,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -32.08
  }
 ],
 "items": [
  {
   "pitch": -32.08,
   "yaw": 8.22,
   "image": "this.AnimatedImageResource_0E36955B_1C99_3934_41A4_D7C6DACCA927",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.12,
   "distance": 100
  }
 ],
 "id": "overlay_0DFF0636_1C99_3B7C_41B3_9F6A0EB25155",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_0B284A71_1DD7_6CC2_41AF_F8E86C4AAB1E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.48,
   "hfov": 8.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.64
  }
 ],
 "items": [
  {
   "pitch": -19.64,
   "yaw": 75.48,
   "image": "this.AnimatedImageResource_08CE140E_1C89_7F15_41BA_AF087376331B",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.91,
   "distance": 100
  }
 ],
 "id": "overlay_080E9900_1C8B_E90C_41B2_484AF288081A",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6, this.camera_0BB02A28_1DD7_6C42_41B7_5FFA575EF161); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.49,
   "hfov": 3.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.99
  }
 ],
 "items": [
  {
   "pitch": -5.99,
   "yaw": -100.49,
   "image": "this.AnimatedImageResource_326AE9E6_2601_0D8D_41B3_634627E3C525",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.71,
   "distance": 100
  }
 ],
 "id": "overlay_349986A0_2603_0784_41C0_450B63BBAA44",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880, this.camera_0BA6DA18_1DD7_6C42_41B1_17A0B84B0104); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.79,
   "hfov": 4.71,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.38
  }
 ],
 "items": [
  {
   "pitch": -9.38,
   "yaw": -10.79,
   "image": "this.AnimatedImageResource_326AC9E6_2601_0D8D_4192_5B1818EDA8BA",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.71,
   "distance": 100
  }
 ],
 "id": "overlay_352FE9E9_2603_0D87_41B5_3F2A56CAD9DA",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0ECA55BD_1C89_1972_41BC_2835B1E3E93A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_04158A83_1C8B_2B0C_41B7_CDAC14A2D08A, null, null, null, this.audio_0E5338F8_1C8B_68F2_41A4_C7276D71B607, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 157.88,
   "hfov": 3.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.93
  }
 ],
 "items": [
  {
   "pitch": -1.93,
   "yaw": 157.88,
   "image": "this.AnimatedImageResource_04CF1A65_1C8B_2B17_41BA_0B366ED059EC",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.95,
   "distance": 100
  }
 ],
 "id": "overlay_0E564A57_1C89_6B3E_41BA_931AD5F7FE56",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290, this.camera_0B859A08_1DD7_6C42_41AA_B25A4ED8A28E); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.87,
   "hfov": 5.41,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.58
  }
 ],
 "items": [
  {
   "pitch": -19.58,
   "yaw": -169.87,
   "image": "this.AnimatedImageResource_326A79E5_2601_0D8F_41BD_4C73CD9A4DC7",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.41,
   "distance": 100
  }
 ],
 "id": "overlay_346E77A6_2607_058C_41C0_269B50990DFC",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_0BF53A08_1DD7_6C42_418E_4A9FCBCB4020); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.38,
   "hfov": 2.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.59
  }
 ],
 "items": [
  {
   "pitch": -11.59,
   "yaw": -127.38,
   "image": "this.AnimatedImageResource_326A59E5_2601_0D8F_41A9_AEF21BD0780C",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.98,
   "distance": 100
  }
 ],
 "id": "overlay_3434AED9_2607_0784_41B2_4B959E10BF48",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C, this.camera_0B965A18_1DD7_6C42_41BB_CF7684F27BAA); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.28,
   "hfov": 4.13,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.17
  }
 ],
 "items": [
  {
   "pitch": -9.17,
   "yaw": 82.28,
   "image": "this.AnimatedImageResource_326AB9E5_2601_0D8F_41AC_6B2244B1EB77",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.13,
   "distance": 100
  }
 ],
 "id": "overlay_343192D9_2601_1F87_41BF_59F1D579F81D",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_6303B5A1_74A4_0ADF_41A9_EAD96A59AD32, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.02,
   "hfov": 5.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.86
  }
 ],
 "items": [
  {
   "pitch": -0.86,
   "yaw": 75.02,
   "image": "this.AnimatedImageResource_63392579_74A4_0A2F_41DC_C82F987A86A0",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.32,
   "distance": 100
  }
 ],
 "id": "overlay_66B340EB_74A4_0A23_41D9_DA888B520D76",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_6302B5A7_74A4_0A23_41CA_F281F3791C37, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.45,
   "hfov": 5.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.38
  }
 ],
 "items": [
  {
   "pitch": -6.38,
   "yaw": -121.45,
   "image": "this.AnimatedImageResource_6339B579_74A4_0A2F_41DC_54570A518F58",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.29,
   "distance": 100
  }
 ],
 "id": "overlay_60A7A3C0_74A4_0E5D_41B5_A9020EE0097A",
 "data": {
  "label": "Info 01"
 }
},
{
 "hideDuration": 500,
 "class": "PopupPanoramaOverlay",
 "hfov": 5.05,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "id": "popup_664F1225_74A4_0E27_419B_C36027287E02",
 "popupDistance": 100,
 "rotationX": 0,
 "popupMaxHeight": "95%",
 "popupMaxWidth": "95%",
 "image": {
  "levels": [
   {
    "url": "media/popup_664F1225_74A4_0E27_419B_C36027287E02_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 2.92,
 "hideEasing": "cubic_out",
 "yaw": -11.74
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0, this.camera_0B40AA38_1DD7_6C42_419A_750813CD0B08); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.63,
   "hfov": 3.37,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.94
  }
 ],
 "items": [
  {
   "pitch": -5.94,
   "yaw": -102.63,
   "image": "this.AnimatedImageResource_3274C9E4_2601_0D8D_41B0_A6CDAE3C2FF0",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.37,
   "distance": 100
  }
 ],
 "id": "overlay_296B4552_2603_3A85_41BE_78D34E4D6570",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290, this.camera_0B0FDA5F_1DD7_6CFD_41BC_4DABB4BDA62E); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.76,
   "hfov": 4.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.15
  }
 ],
 "items": [
  {
   "pitch": -11.15,
   "yaw": 76.76,
   "image": "this.AnimatedImageResource_326B29E4_2601_0D8D_4196_6605C113F648",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.63,
   "distance": 100
  }
 ],
 "id": "overlay_36B0287E_2601_0B7C_418B_39ECAD1148CB",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B, this.camera_0B6D2A4C_1DD7_6CC2_41A3_93CDB6AF3C37); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.66,
   "hfov": 4.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.66
  }
 ],
 "items": [
  {
   "pitch": -4.66,
   "yaw": -48.66,
   "image": "this.AnimatedImageResource_326B19E4_2601_0D8D_41A9_FE9740312DF5",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.05,
   "distance": 100
  }
 ],
 "id": "overlay_364BC4C5_2601_1B8C_418E_572B25FF420D",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6, this.camera_0B52AA42_1DD7_6CC6_4185_22C00121D510); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.98,
   "hfov": 2.91,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.69
  }
 ],
 "items": [
  {
   "pitch": -5.69,
   "yaw": 117.98,
   "image": "this.AnimatedImageResource_326B79E4_2601_0D8D_41BC_F30DA63FB103",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.91,
   "distance": 100
  }
 ],
 "id": "overlay_36C40ACC_2601_0F9C_41B1_4EA1B52EF836",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6, this.camera_0B7DFA56_1DD7_6CCE_41A3_ED3E784CE00A); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.68,
   "hfov": 2.85,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.3
  }
 ],
 "items": [
  {
   "pitch": -4.3,
   "yaw": 49.68,
   "image": "this.AnimatedImageResource_326B59E5_2601_0D8F_41C1_1B61FEA2D1A3",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.85,
   "distance": 100
  }
 ],
 "id": "overlay_349F45C4_2601_058D_41BC_EFD84F97263C",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_60DD79C6_74A4_7A64_41B1_978A33008E8C, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_631B559D_74A4_0AE4_41D1_14C393C3E173, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.06,
   "hfov": 3.61,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.98
  }
 ],
 "items": [
  {
   "pitch": 4.98,
   "yaw": 78.06,
   "image": "this.AnimatedImageResource_633E9577_74A4_0A23_41C5_F66CC0CE26C3",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.61,
   "distance": 100
  }
 ],
 "id": "overlay_67AD5348_74A4_0E6D_41B1_71B1CB9E6F0E",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_631A459E_74A4_0AE4_41D2_F24CF06A9131, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.04,
   "hfov": 5.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.37
  }
 ],
 "items": [
  {
   "pitch": -3.37,
   "yaw": -110.04,
   "image": "this.AnimatedImageResource_633EC577_74A4_0A23_41CF_EAFFA035CDEF",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.31,
   "distance": 100
  }
 ],
 "id": "overlay_66AC857A_74AC_0A2C_41D5_86976B208250",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_677507AC_74AC_1625_41D6_004BD60D105D, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_6319659E_74A4_0AE4_41D4_5515A69E3FCA, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.14,
   "hfov": 5.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.04
  }
 ],
 "items": [
  {
   "pitch": -5.04,
   "yaw": 26.14,
   "image": "this.AnimatedImageResource_633D2578_74A4_0A2D_41D9_FBAE6F0493C5",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.3,
   "distance": 100
  }
 ],
 "id": "overlay_668DB340_74AC_0E5D_41DB_72ED250DFA35",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880, this.camera_0B1FBA67_1DD7_6CCE_4192_424A4D3CBAC8); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.95,
   "hfov": 2.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.68
  }
 ],
 "items": [
  {
   "pitch": -7.68,
   "yaw": 146.95,
   "image": "this.AnimatedImageResource_326BE9E6_2601_0D8D_41BC_04E82AA4F70C",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.74,
   "distance": 100
  }
 ],
 "id": "overlay_32D273EA_260F_1D85_4196_721ED7AF2C12",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_08BB12AA_1C9B_1B1D_41A0_AE3A70C3110A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_04199A83_1C8B_2B0C_41BC_04768DCB0F15, null, null, null, this.audio_12480FC0_1DAD_23C3_41B5_B5C031D21028, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 73.2,
   "hfov": 7.75,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -19.2
  }
 ],
 "items": [
  {
   "pitch": -19.2,
   "yaw": 73.2,
   "image": "this.AnimatedImageResource_08D60F0D_1DB3_2442_41BA_3416FCEF879E",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.75,
   "distance": 100
  }
 ],
 "id": "overlay_08565C6D_1C9B_2F17_41B6_2A618AF04003",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_0B387A79_1DD7_6CC2_41BC_8B9795864822); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.33,
   "hfov": 3.86,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.36
  }
 ],
 "items": [
  {
   "pitch": -13.36,
   "yaw": -98.33,
   "image": "this.AnimatedImageResource_326BB9E5_2601_0D8F_41C1_A9A87D7ED952",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.86,
   "distance": 100
  }
 ],
 "id": "overlay_29D95CC6_2601_0B8C_41A8_2B0558EB5C8E",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6, this.camera_0ACA1A83_1DD7_6C46_41A4_FE7401F09010); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.06,
   "hfov": 4.44,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.46
  }
 ],
 "items": [
  {
   "pitch": -13.46,
   "yaw": -177.06,
   "image": "this.AnimatedImageResource_326BE9E5_2601_0D8F_41C2_7C9BA3B94594",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.44,
   "distance": 100
  }
 ],
 "id": "overlay_36397BDE_261F_0DBC_41B1_5F9EC72C8301",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6, this.camera_0ADACA8B_1DD7_6C46_41B4_A9C885A4A894); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.34,
   "hfov": 4.01,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.98
  }
 ],
 "items": [
  {
   "pitch": -10.98,
   "yaw": -3.34,
   "image": "this.AnimatedImageResource_326BC9E5_2601_0D8F_41C2_BF1DD3A056FC",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.01,
   "distance": 100
  }
 ],
 "id": "overlay_3768C2EB_2601_1F9B_41B0_D6EE650EB924",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_6034D255_74AC_0E67_41CD_6AC8640565DC, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_6318E59F_74A4_0AE4_41DA_CF0A50A875D8, null, null, null, this.audio_0F96B082_1C8B_1717_4179_033DF87088A9, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.28,
   "hfov": 5.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.59
  }
 ],
 "items": [
  {
   "pitch": 5.59,
   "yaw": 86.28,
   "image": "this.AnimatedImageResource_633C5578_74A4_0A2D_41DB_4368BB2A227C",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.3,
   "distance": 100
  }
 ],
 "id": "overlay_674EDEAC_74AC_1625_41D8_AE6E7BB74451",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_6306059F_74A4_0AE4_41CA_390D721A9210, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.93,
   "hfov": 5.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.81
  }
 ],
 "items": [
  {
   "pitch": -6.81,
   "yaw": -63.93,
   "image": "this.AnimatedImageResource_633CB578_74A4_0A2D_41B2_EA6751D1A29D",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.29,
   "distance": 100
  }
 ],
 "id": "overlay_67EF3FF8_74AC_362D_41D0_50C00163B84E",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_630555A0_74A4_0ADD_41D5_89E77B9A920A, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.69,
   "hfov": 2.98,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.09
  }
 ],
 "items": [
  {
   "pitch": -4.09,
   "yaw": -102.69,
   "image": "this.AnimatedImageResource_633B1578_74A4_0A2D_41CC_0DD97F3D7E76",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 2.98,
   "distance": 100
  }
 ],
 "id": "overlay_668F601B_74AC_09E2_41D9_79DE1A57577E",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_0BD129E8_1DD7_6FC2_419E_A9E00783A5D0); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.6,
   "hfov": 3.63,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.28
  }
 ],
 "items": [
  {
   "pitch": -8.28,
   "yaw": 80.6,
   "image": "this.AnimatedImageResource_3274B9E2_2601_0D85_41BF_D7AC6D1B047F",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.63,
   "distance": 100
  }
 ],
 "id": "overlay_28EF98C9_2603_0B84_41C2_B549FF4D258F",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0F1929C8_1CB7_6913_41B9_3CAB46CBB6DF, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_04E5DA73_1C8B_2BF3_41B3_67CA850AD662, null, null, null, this.audio_0E21B2E3_1CB6_FB15_41BC_09F6CA0EC7AD, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 104.81,
   "hfov": 5.31,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.68
  }
 ],
 "items": [
  {
   "pitch": -4.68,
   "yaw": 104.81,
   "image": "this.AnimatedImageResource_04C77A53_1C8B_2B33_4197_5F37F6410B0B",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.31,
   "distance": 100
  }
 ],
 "id": "overlay_0E2CAF50_1CB7_2933_41AD_DDA8B3A02DAE",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_09491381_1CB9_1912_41A2_9CB920ED153A, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_04E48A83_1C8B_2B0C_41A2_9E23462B7C1C, null, null, null, this.audio_0E546549_1CB9_3912_4199_0BAAA0C3C0F2, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 57.8,
   "hfov": 5.29,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.04
  }
 ],
 "items": [
  {
   "pitch": -6.04,
   "yaw": 57.8,
   "image": "this.AnimatedImageResource_04C6CA63_1C8B_2B13_41AB_35AD170D98C0",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.29,
   "distance": 100
  }
 ],
 "id": "overlay_082F09AA_1CB9_6916_4182_9E44F61400FD",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C, this.camera_0BD899DC_1DD7_6FC2_41B4_3BE3984B6F95); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.33,
   "hfov": 7.39,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.59
  }
 ],
 "items": [
  {
   "pitch": -9.59,
   "yaw": 158.33,
   "image": "this.AnimatedImageResource_326929E6_2601_0D8D_41A2_BA6BC3903011",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.39,
   "distance": 100
  }
 ],
 "id": "overlay_35F861B3_2601_1D8B_41B9_85B0AF6B1B31",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72, this.camera_0BCD19C8_1DD7_6FC2_4135_B58E663AEE00); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.73,
   "hfov": 3.34,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.93
  }
 ],
 "items": [
  {
   "pitch": -6.93,
   "yaw": -24.73,
   "image": "this.AnimatedImageResource_326919E6_2601_0D8D_41B4_5F19123AFAF6",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.34,
   "distance": 100
  }
 ],
 "id": "overlay_35647234_260E_FE8D_41A7_1C644A640640",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_630E75AA_74A4_0A2C_41C6_623D4D6AD974, null, null, null, this.audio_08E75C9B_1C99_6F33_41B0_DCBFF64BFA93, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.26,
   "hfov": 5.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.09
  }
 ],
 "items": [
  {
   "pitch": -0.09,
   "yaw": 97.26,
   "image": "this.AnimatedImageResource_6327357A_74A4_0A2D_41D5_CD0A9DC30BB0",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.32,
   "distance": 100
  }
 ],
 "id": "overlay_600CEB29_74A4_1E2C_41C7_CFFB9244D01A",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_0B88DD56_1C99_6934_41BA_2D4ACAE5F910, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'borderColor':'#000000','borderSize':0,'iconWidth':20,'paddingBottom':5,'paddingTop':5,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'backgroundOpacity':0.3,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','rollOverIconLineWidth':5,'iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'rollOverIconColor':'#666666','paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconHeight':20}, this.ImageResource_04171A83_1C8B_2B0C_41A5_59A2C040A00B, null, null, null, this.audio_084B8368_1C99_191D_41B7_898500726AEF, true)",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 17.77,
   "hfov": 5.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.05
  }
 ],
 "items": [
  {
   "pitch": -17.05,
   "yaw": 17.77,
   "image": "this.AnimatedImageResource_04F19A65_1C8B_2B17_41A5_0879246A128F",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.09,
   "distance": 100
  }
 ],
 "id": "overlay_08C506BC_1C99_3B75_41B1_EA2AE2B6D89E",
 "data": {
  "label": "Info 01"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.openLink('https://youtu.be/ZbD4e6XuGuM', '_blank')",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -28.99,
   "hfov": 5.32,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.97
  }
 ],
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -28.99,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_6_0.png",
      "class": "ImageResourceLevel",
      "width": 119,
      "height": 119
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.97,
   "hfov": 5.32
  }
 ],
 "id": "overlay_0CC36967_1DBF_6CCE_41B3_AF5C1D8BD7A5",
 "data": {
  "label": "Image"
 }
},
{
 "useHandCursor": true,
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.openLink('https://youtu.be/ZbD4e6XuGuM', '_blank')",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -29.03,
   "hfov": 3.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.98
  }
 ],
 "items": [
  {
   "pitch": -14.98,
   "yaw": -29.03,
   "image": "this.AnimatedImageResource_08D56F0D_1DB3_2442_41AF_6A00F9C9F6D6",
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.26,
   "distance": 100
  }
 ],
 "id": "overlay_0CF34FC7_1DBD_63CD_41BA_4BF4B36984AD",
 "data": {
  "label": "Info 01"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "width": 450,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "text": "PURI KANGINAN",
 "minHeight": 1,
 "borderRadius": 0,
 "propagateClick": false,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 60,
 "top": "0%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Label",
 "fontSize": 31,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "horizontalAlign": "left",
 "data": {
  "name": "Puri Kanginan "
 },
 "fontWeight": "normal",
 "shadow": false
},
{
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "width": 1199,
 "right": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 15,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "propagateClick": true,
 "paddingLeft": 0,
 "minWidth": 1,
 "height": 60,
 "top": "0%",
 "gap": 3,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-button set container"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "right",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "if(!this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22.get('visible')){ this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true, 0, null, null, false) } else { this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, 0, null, null, false) }",
 "class": "IconButton",
 "data": {
  "name": "IconButton Info"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.openLink('https://www.google.com/maps/place/%E1%AC%A7%E1%AC%B8%E1%AC%AD%E1%AC%B6%E1%AC%93%E1%AC%97%E1%AC%B6%E1%AC%A6%E1%AC%A6%E1%AD%84%E1%AC%A9%E1%AC%B8%E1%AC%AE%E1%AC%BE%E1%AC%AE%E1%AC%BE%E1%AC%82%E1%AD%9F+Puri+Kanginan+Buleleng/@-8.1244254,115.0946015,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd1908327e64f15:0x9d3282c3269423f5!8m2!3d-8.1244254!4d115.0971764!16s%2Fg%2F11csrg6vnk?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D', '_blank')",
 "class": "IconButton",
 "data": {
  "name": "IconButton Location"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "maxHeight": 101,
 "maxWidth": 101,
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "width": 44,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "propagateClick": false,
 "minWidth": 1,
 "height": 44,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.openLink('https://youtu.be/0useXGFn2eI', '_blank')",
 "class": "IconButton",
 "data": {
  "name": "IconButton Video"
 },
 "horizontalAlign": "center",
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326A29E5_2601_0D8F_41AD_3826CB544EBB",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326A19E5_2601_0D8F_41C1_D85BB9A3B675",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_633BC578_74A4_0A2D_41DA_0FD5A3D71DD5",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_633A2579_74A4_0A2F_41A8_5334887EA197",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_04CA2A65_1C8B_2B17_4191_A5CC9645F758",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_0E36F55B_1C99_3934_4192_2691F4686756",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_0E36955B_1C99_3934_41A4_D7C6DACCA927",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_08CE140E_1C89_7F15_41BA_AF087376331B",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326AE9E6_2601_0D8D_41B3_634627E3C525",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326AC9E6_2601_0D8D_4192_5B1818EDA8BA",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_04CF1A65_1C8B_2B17_41BA_0B366ED059EC",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326A79E5_2601_0D8F_41BD_4C73CD9A4DC7",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326A59E5_2601_0D8F_41A9_AEF21BD0780C",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326AB9E5_2601_0D8F_41AC_6B2244B1EB77",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_63392579_74A4_0A2F_41DC_C82F987A86A0",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_6339B579_74A4_0A2F_41DC_54570A518F58",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3274C9E4_2601_0D8D_41B0_A6CDAE3C2FF0",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326B29E4_2601_0D8D_4196_6605C113F648",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326B19E4_2601_0D8D_41A9_FE9740312DF5",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326B79E4_2601_0D8D_41BC_F30DA63FB103",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326B59E5_2601_0D8F_41C1_1B61FEA2D1A3",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_633E9577_74A4_0A23_41C5_F66CC0CE26C3",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_633EC577_74A4_0A23_41CF_EAFFA035CDEF",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_633D2578_74A4_0A2D_41D9_FBAE6F0493C5",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326BE9E6_2601_0D8D_41BC_04E82AA4F70C",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_08D60F0D_1DB3_2442_41BA_3416FCEF879E",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326BB9E5_2601_0D8F_41C1_A9A87D7ED952",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326BE9E5_2601_0D8F_41C2_7C9BA3B94594",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326BC9E5_2601_0D8F_41C2_BF1DD3A056FC",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_633C5578_74A4_0A2D_41DB_4368BB2A227C",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_633CB578_74A4_0A2D_41B2_EA6751D1A29D",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_633B1578_74A4_0A2D_41CC_0DD97F3D7E76",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_3274B9E2_2601_0D85_41BF_D7AC6D1B047F",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_04C77A53_1C8B_2B33_4197_5F37F6410B0B",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_04C6CA63_1C8B_2B13_41AB_35AD170D98C0",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326929E6_2601_0D8D_41A2_BA6BC3903011",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 5,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_326919E6_2601_0D8D_41B4_5F19123AFAF6",
 "frameCount": 20
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_6327357A_74A4_0A2D_41D5_CD0A9DC30BB0",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_04F19A65_1C8B_2B17_41A5_0879246A128F",
 "frameCount": 22
},
{
 "class": "AnimatedImageResource",
 "colCount": 4,
 "rowCount": 6,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_08D56F0D_1DB3_2442_41AF_6A00F9C9F6D6",
 "frameCount": 22
},
{
 "backgroundColorDirection": "vertical",
 "popUpBackgroundColor": "#F7931E",
 "fontFamily": "Montserrat",
 "data": {
  "name": "Drone View"
 },
 "textDecoration": "none",
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpBackgroundOpacity": 1,
 "width": 150.4,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "paddingLeft": 15,
 "minHeight": 1,
 "arrowColor": "#FFFFFF",
 "borderRadius": 0,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "popUpShadowOpacity": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 0,
 "borderSize": 0,
 "arrowBeforeLabel": false,
 "paddingBottom": 0,
 "popUpShadowBlurRadius": 6,
 "label": "Drone View",
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "shadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "fontWeight": "bold",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "selectedPopUpBackgroundColor": "#CE6700"
},
{
 "backgroundColorDirection": "vertical",
 "popUpBackgroundColor": "#F7931E",
 "fontFamily": "Montserrat",
 "data": {
  "name": "DropDown 2"
 },
 "textDecoration": "none",
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpBackgroundOpacity": 1,
 "width": 149.6,
 "pressedBackgroundColorRatios": [
  0
 ],
 "height": "100%",
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "paddingLeft": 15,
 "minHeight": 1,
 "arrowColor": "#FFFFFF",
 "borderRadius": 0,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "popUpShadowOpacity": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "popUpBorderRadius": 5,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "backgroundColor": [
  "#F7931E"
 ],
 "gap": 0,
 "borderSize": 0,
 "arrowBeforeLabel": false,
 "paddingBottom": 0,
 "popUpShadowBlurRadius": 6,
 "label": "Outer Courtyard",
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "shadow": false,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "fontWeight": "bold",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "selectedPopUpBackgroundColor": "#CE6700"
},
{
 "shadow": false,
 "popUpBackgroundColor": "#F7931E",
 "fontFamily": "Montserrat",
 "data": {
  "name": "DropDown 3"
 },
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "textDecoration": "none",
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpBackgroundOpacity": 1,
 "width": 150,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "paddingLeft": 15,
 "minHeight": 1,
 "arrowColor": "#FFFFFF",
 "borderRadius": 0,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "popUpShadowOpacity": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "popUpShadowBlurRadius": 6,
 "label": "Middle Courtyard",
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "fontWeight": "bold",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#CE6700"
},
{
 "shadow": false,
 "popUpBackgroundColor": "#F7931E",
 "fontFamily": "Montserrat",
 "data": {
  "name": "DropDown 4"
 },
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "textDecoration": "none",
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpBackgroundOpacity": 1,
 "width": 150,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "popUpShadow": false,
 "popUpFontColor": "#FFFFFF",
 "paddingLeft": 15,
 "minHeight": 1,
 "arrowColor": "#FFFFFF",
 "borderRadius": 0,
 "popUpPaddingTop": 10,
 "popUpShadowSpread": 1,
 "popUpShadowOpacity": 0,
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "popUpBorderRadius": 0,
 "popUpPaddingBottom": 10,
 "minWidth": 1,
 "propagateClick": false,
 "gap": 0,
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "popUpShadowBlurRadius": 6,
 "label": "All",
 "popUpPaddingLeft": 15,
 "popUpGap": 2,
 "paddingTop": 0,
 "arrowBeforeLabel": false,
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "DropDown",
 "fontSize": 12,
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpShadowColor": "#000000",
 "fontWeight": "bold",
 "rollOverPopUpBackgroundColor": "#CE6700",
 "backgroundColorDirection": "vertical",
 "selectedPopUpBackgroundColor": "#CE6700"
},
{
 "shadow": false,
 "fontFamily": "Arial",
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "width": 60,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "iconHeight": 17,
 "layout": "horizontal",
 "paddingLeft": 0,
 "minHeight": 1,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "borderRadius": 0,
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderColor": "#000000",
 "minWidth": 1,
 "propagateClick": false,
 "mode": "toggle",
 "borderSize": 0,
 "height": 60,
 "paddingBottom": 0,
 "paddingTop": 0,
 "gap": 5,
 "class": "Button",
 "fontSize": 12,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "iconWidth": 17,
 "fontStyle": "normal",
 "horizontalAlign": "center",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "data": {
  "name": "Button Settings"
 },
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColorRatios": [
  0
 ]
}],
 "desktopMipmappingEnabled": false,
 "propagateClick": true,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "contentOpaque": false,
 "class": "Player",
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "getKey": function(key){  return window[key]; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "registerKey": function(key, value){  window[key] = value; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "existsKey": function(key){  return key in window; }
 },
 "buttonMute": "this.IconButton_19513556_0DF3_35CF_419C_3E6A0491C97A",
 "data": {
  "name": "Player468"
 },
 "shadow": false,
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
