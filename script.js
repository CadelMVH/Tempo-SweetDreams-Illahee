TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "PhotoAlbum",
  "thumbnailUrl": "media/album_4435A053_157F_CE7C_419C_D029BBF95803_t.png",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_4435A053_157F_CE7C_419C_D029BBF95803_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "media": {
      "class": "Photo",
      "thumbnailUrl": "media/album_4435A053_157F_CE7C_419C_D029BBF95803_0_t.png",
      "duration": 5000,
      "label": "Floor Plan",
      "width": 1949,
      "id": "album_4435A053_157F_CE7C_419C_D029BBF95803_0",
      "height": 1338,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_4435A053_157F_CE7C_419C_D029BBF95803_0.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     },
     "camera": {
      "class": "MovementPhotoCamera",
      "duration": 5000,
      "scaleMode": "fit_outside",
      "initialPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.50",
       "y": "0.50",
       "zoomFactor": 1
      },
      "easing": "linear",
      "targetPosition": {
       "class": "PhotoCameraPosition",
       "x": "0.36",
       "y": "0.35",
       "zoomFactor": 1.1
      }
     }
    }
   ]
  },
  "label": "Photo Album",
  "id": "album_4435A053_157F_CE7C_419C_D029BBF95803"
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
 },
 "this.album_4435A053_157F_CE7C_419C_D029BBF95803_0",
 {
  "class": "Video",
  "thumbnailUrl": "media/video_5A8B9427_173A_D624_41B3_3EFE22839B57_t.jpg",
  "label": "Tempo Illahee zoom temp",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_5A8B9427_173A_D624_41B3_3EFE22839B57.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_5A8B9427_173A_D624_41B3_3EFE22839B57",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1.44,
    "x": 828.67,
    "angle": 127.73,
    "map": {
     "class": "Map",
     "fieldOfViewOverlayInsideOpacity": 0.2,
     "id": "map_281F512C_155B_4E24_4173_E67DB198D7E6",
     "fieldOfViewOverlayInsideColor": "#0066CC",
     "initialZoomFactor": 1,
     "height": 1385,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "width": 1954,
     "image": {
      "class": "ImageResource",
      "levels": [
       {
        "height": 1134,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6.png"
       },
       {
        "height": 567,
        "class": "ImageResourceLevel",
        "width": 800,
        "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_lq.png",
        "grayscale": true
       }
      ]
     },
     "thumbnailUrl": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_t.png",
     "label": "Sweet Nelson1",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2A920D8D_1767_56E4_4189_3A74CF5C3882",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": -43.56,
        "height": 90,
        "x": 783.67,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_0_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": -43.56,
        "x": 783.67,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_0.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2B51699C_1767_DEE4_4171_54DDAEB45A4D",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 159.56,
        "height": 90,
        "x": 783.29,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_1_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 159.56,
        "x": 783.29,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_1.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_291C0D4C_1767_5664_4176_3082D011AEFC",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 195.48,
        "height": 90,
        "x": 947.67,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_2_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 195.48,
        "x": 947.67,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_2.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_573F5AC7_1766_D264_41A3_E11C21352EF0",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 244.64,
        "height": 90,
        "x": 1463.04,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_3_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 244.64,
        "x": 1463.04,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_3.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_547CA007_1769_4DE4_419A_208AD889CCA1",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 236.15,
        "height": 90,
        "x": 1719.27,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_4_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 236.15,
        "x": 1719.27,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_4.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_55F97C39_1769_362C_418A_86B87CA4DCCE",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 666.33,
        "height": 90,
        "x": 1072.07,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_5_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 666.33,
        "x": 1072.07,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_5.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_53628608_1769_D5EC_41A6_306AEC7C817C",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 1032.86,
        "height": 90,
        "x": 1667.41,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_6_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 8)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 1032.86,
        "x": 1667.41,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_6.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_50E67F9C_1769_52E4_41AC_C10E8267B9D4",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 602.68,
        "height": 90,
        "x": 1758.1,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_7_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 602.68,
        "x": 1758.1,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_7.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2AFECAEB_1769_522C_41B2_6355984821D1",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 447.95,
        "height": 90,
        "x": 1497.42,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_8_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 10)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 447.95,
        "x": 1497.42,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_8.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_288BA7E4_176B_5224_419D_B22BD84D8B34",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 1121.71,
        "height": 90,
        "x": 1055.46,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_9_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 11)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 1121.71,
        "x": 1055.46,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_9.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_57A18A81_176B_D2DC_41AE_495189BA2EE2",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 1338.74,
        "height": 90,
        "x": 1058.07,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_10_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 12)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 1338.74,
        "x": 1058.07,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_10.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_55E76390_176B_32FC_419C_657F09DD749D",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 962.55,
        "height": 90,
        "x": 118.41,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_11_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 16)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 962.55,
        "x": 118.41,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_11.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2B20BC62_176A_F65F_41A1_15299122BA1A",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 449.4,
        "height": 90,
        "x": 98.8,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_12_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 17)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 449.4,
        "x": 98.8,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_12.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_2B984152_1769_4E7C_4185_B3E8BC7C7242",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 537.19,
        "height": 90,
        "x": 536.42,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_13_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 18)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 537.19,
        "x": 536.42,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_13.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      },
      {
       "class": "AreaHotspotMapOverlay",
       "id": "overlay_284DBB84_1769_72E4_41B4_25059D25DE33",
       "map": {
        "offsetY": 0,
        "class": "HotspotMapOverlayMap",
        "width": 90,
        "y": 302.79,
        "height": 90,
        "x": 521.16,
        "offsetX": 0,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 36,
           "class": "ImageResourceLevel",
           "width": 36,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_14_map.gif"
          }
         ]
        }
       },
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "class": "HotspotMapOverlayArea",
         "click": "this.mainPlayList.set('selectedIndex', 19)"
        }
       ],
       "image": {
        "class": "HotspotMapOverlayImage",
        "y": 302.79,
        "x": 521.16,
        "width": 90,
        "height": 90,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 73,
           "url": "media/map_281F512C_155B_4E24_4173_E67DB198D7E6_HS_14.png"
          }
         ]
        }
       },
       "rollOverDisplay": false,
       "useHandCursor": true
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.15
    }
   }
  ],
  "label": "Front Porch",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "preloadEnabled": false,
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "class": "ViewerArea",
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "playbackBarHeadBorderSize": 0,
   "toolTipPaddingLeft": 6,
   "progressBarBackgroundColorRatios": [
    0
   ],
   "toolTipPaddingTop": 4,
   "playbackBarHeadShadowBlurRadius": 3,
   "toolTipTextShadowOpacity": 0,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBackgroundColorRatios": [
    0
   ],
   "toolTipTextShadowBlurRadius": 3,
   "playbackBarHeadHeight": 15,
   "playbackBarLeft": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBorderRadius": 0,
   "borderRadius": 0,
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadBorderRadius": 0,
   "progressBorderSize": 0,
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "progressBackgroundColorRatios": [
    0
   ],
   "toolTipShadowOpacity": 1,
   "paddingBottom": 0,
   "playbackBarOpacity": 1,
   "shadow": false,
   "progressBarOpacity": 1,
   "progressBackgroundOpacity": 1,
   "minHeight": 1,
   "playbackBarHeadShadow": true,
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipFontColor": "#606060",
   "progressOpacity": 1,
   "toolTipFontSize": 12,
   "paddingTop": 0,
   "progressRight": 0,
   "transitionMode": "blending",
   "playbackBarHeadShadowColor": "#000000",
   "playbackBarProgressBorderRadius": 0,
   "playbackBarBackgroundOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "playbackBarBorderSize": 0,
   "paddingRight": 0,
   "progressBarBorderSize": 0,
   "playbackBarProgressOpacity": 1,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowHorizontalLength": 0,
   "progressLeft": 0,
   "playbackBarRight": 0,
   "width": "93.76%",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "height": "90.003%",
   "playbackBarHeadWidth": 6,
   "playbackBarProgressBorderColor": "#000000",
   "paddingLeft": 0,
   "progressBarBorderColor": "#000000",
   "playbackBarBackgroundColor": [
    "#FFFFFF"
   ],
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeight": 10,
   "playbackBarBorderRadius": 0,
   "playbackBarBorderColor": "#FFFFFF",
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "playbackBarHeadOpacity": 1,
   "minWidth": 1,
   "progressBarBorderRadius": 0,
   "toolTipPaddingBottom": 4,
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBackgroundColor": [
    "#3399FF"
   ],
   "playbackBarProgressBorderSize": 0,
   "bottom": "5%",
   "transitionDuration": 500,
   "id": "MapViewer",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "toolTipBorderColor": "#767676",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "progressBottom": 2,
   "left": "3.06%",
   "toolTipFontWeight": "normal",
   "playbackBarBottom": 0,
   "progressHeight": 10,
   "playbackBarHeadShadowHorizontalLength": 0,
   "progressBorderColor": "#000000",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "progressBackgroundColor": [
    "#FFFFFF"
   ],
   "toolTipBorderSize": 1,
   "progressBarBackgroundColor": [
    "#3399FF"
   ],
   "progressBackgroundColorDirection": "vertical"
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -124.61,
   "pitch": -9.21
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 17.47,
     "path": "shortest",
     "pitchSpeed": 23.47,
     "yawSpeed": 46.15,
     "easing": "quad_in_out",
     "targetPitch": -88.25
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 38.84,
     "path": "shortest",
     "pitchSpeed": 22.4,
     "yawSpeed": 44,
     "easing": "linear",
     "targetPitch": -78.45
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 41.69,
     "path": "shortest",
     "pitchSpeed": 35.24,
     "yawSpeed": 69.8,
     "easing": "cubic_in_out",
     "targetPitch": -5.28
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 2000,
  "hfovMin": 60,
  "id": "panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 204.56,
    "x": 828.29,
    "angle": 6.73,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Entry",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -6.53,
   "pitch": -12.83
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 144.84,
     "path": "shortest",
     "pitchSpeed": 22.4,
     "yawSpeed": 44,
     "easing": "cubic_in_out",
     "targetPitch": -3.31
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_0533012F_14E9_4E24_419B_75B644BAE62C",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0533012F_14E9_4E24_419B_75B644BAE62C_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 240.48,
    "x": 992.67,
    "angle": 50.76,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Kitchen",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0533012F_14E9_4E24_419B_75B644BAE62C_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0533012F_14E9_4E24_419B_75B644BAE62C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0533012F_14E9_4E24_419B_75B644BAE62C.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0533012F_14E9_4E24_419B_75B644BAE62C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.8,
   "pitch": -5.19
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -24.24,
     "path": "longest",
     "pitchSpeed": 24.54,
     "yawSpeed": 48.3,
     "easing": "cubic_in_out",
     "targetPitch": -9.67
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 289.64,
    "x": 1508.04,
    "angle": 16.22,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Pantry",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -76.3,
   "pitch": -4.3
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 88.85,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": -6.44
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_06079FD0_14F9_327C_41B4_DCA650278067",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_06079FD0_14F9_327C_41B4_DCA650278067_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 281.15,
    "x": 1764.27,
    "angle": -34.25,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Laundry Room",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_06079FD0_14F9_327C_41B4_DCA650278067_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_06079FD0_14F9_327C_41B4_DCA650278067_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_06079FD0_14F9_327C_41B4_DCA650278067.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_06079FD0_14F9_327C_41B4_DCA650278067_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -52.18,
   "pitch": -2.2
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 21.47,
     "path": "shortest",
     "pitchSpeed": 22.4,
     "yawSpeed": 44,
     "easing": "cubic_in_out",
     "targetPitch": -12.34
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -67.37,
     "path": "shortest",
     "pitchSpeed": 23.47,
     "yawSpeed": 46.15,
     "easing": "cubic_in_out",
     "targetPitch": -1.88
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 2000,
  "hfovMin": 60,
  "id": "panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 711.33,
    "x": 1117.07,
    "angle": 75.89,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Living Room",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -38.63,
   "pitch": -4.13
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 19.42,
     "path": "longest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": -2.51
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_0EF2ABE4_153F_5224_41A6_676364D3C204",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0EF2ABE4_153F_5224_41A6_676364D3C204_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1077.86,
    "x": 1712.41,
    "angle": -43.33,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Master Bed",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0EF2ABE4_153F_5224_41A6_676364D3C204_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0EF2ABE4_153F_5224_41A6_676364D3C204_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0EF2ABE4_153F_5224_41A6_676364D3C204.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0EF2ABE4_153F_5224_41A6_676364D3C204_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 11.7,
   "pitch": 0.36
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 66.95,
     "path": "longest",
     "pitchSpeed": 24.54,
     "yawSpeed": 48.3,
     "easing": "cubic_in_out",
     "targetPitch": -0.89
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 647.68,
    "x": 1803.1,
    "angle": 268.66,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Master Bath",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -86.67,
   "pitch": -1.6
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 9.05,
     "path": "shortest",
     "pitchSpeed": 23.47,
     "yawSpeed": 46.15,
     "easing": "cubic_in_out",
     "targetPitch": 2.33
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_0B87237F_1529_5225_41AC_F3980869DCB7",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0B87237F_1529_5225_41AC_F3980869DCB7_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 492.95,
    "x": 1542.42,
    "angle": 27.8,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Master Shower",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0B87237F_1529_5225_41AC_F3980869DCB7_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0B87237F_1529_5225_41AC_F3980869DCB7_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0B87237F_1529_5225_41AC_F3980869DCB7.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0B87237F_1529_5225_41AC_F3980869DCB7_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -30.3,
   "pitch": 6.82
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 78.57,
     "path": "shortest",
     "pitchSpeed": 21.33,
     "yawSpeed": 41.85,
     "easing": "linear",
     "targetPitch": -0.79
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 2000,
  "hfovMin": 60,
  "id": "panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1166.71,
    "x": 1100.46,
    "angle": -196.25,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Back Door",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 87.32,
   "pitch": -0.71
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -4.04,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": -2.73
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1383.74,
    "x": 1103.07,
    "angle": -158.36,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Back Deck",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -65.69,
   "pitch": -5.25
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 155.98,
     "path": "longest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "cubic_in_out",
     "targetPitch": 0.98
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_35B5E08F_1559_4EE4_41A1_17D2F7A08249_t.jpg",
  "label": "Sweet Illahee temp",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_35B5E08F_1559_4EE4_41A1_17D2F7A08249.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_35B5E08F_1559_4EE4_41A1_17D2F7A08249",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "LivePanorama",
  "hfovMin": 60,
  "id": "panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_1_t.jpg",
  "label": "Under Deck",
  "vfov": 180,
  "hfovMax": 120,
  "frameDisplayTime": 2000,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -66.03,
   "pitch": 16.13
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 167.9,
     "path": "longest",
     "pitchSpeed": 24.54,
     "yawSpeed": 48.3,
     "easing": "cubic_in_out",
     "targetPitch": 6.3
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_3B3885CB_15D9_566C_419F_55414B67992D",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_3B3885CB_15D9_566C_419F_55414B67992D_t.jpg",
  "label": "Basement",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3B3885CB_15D9_566C_419F_55414B67992D_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_3B3885CB_15D9_566C_419F_55414B67992D_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_3B3885CB_15D9_566C_419F_55414B67992D.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_3B3885CB_15D9_566C_419F_55414B67992D_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 49.41,
   "pitch": -10.56
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 55.07,
     "path": "longest",
     "pitchSpeed": 22.4,
     "yawSpeed": 44,
     "easing": "cubic_in_out",
     "targetPitch": -2.16
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 2000,
  "hfovMin": 60,
  "id": "panorama_27391750_15EB_327C_4198_94D8AD718749",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_27391750_15EB_327C_4198_94D8AD718749_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 1007.55,
    "x": 163.41,
    "angle": 49.19,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Den",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_27391750_15EB_327C_4198_94D8AD718749_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_27391750_15EB_327C_4198_94D8AD718749_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_27391750_15EB_327C_4198_94D8AD718749_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_27391750_15EB_327C_4198_94D8AD718749_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_27391750_15EB_327C_4198_94D8AD718749_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_27391750_15EB_327C_4198_94D8AD718749_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_27391750_15EB_327C_4198_94D8AD718749_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -0.9,
   "pitch": -5.13
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -68.62,
     "path": "longest",
     "pitchSpeed": 23.47,
     "yawSpeed": 46.15,
     "easing": "cubic_in_out",
     "targetPitch": -6.91
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 2000,
  "hfovMin": 60,
  "id": "panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 494.4,
    "x": 143.8,
    "angle": 113.4,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Bedroom 2",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 65.35,
   "pitch": -4.27
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -3.81,
     "path": "longest",
     "pitchSpeed": 24.54,
     "yawSpeed": 48.3,
     "easing": "linear",
     "targetPitch": -5.64
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "frameDisplayTime": 2000,
  "hfovMin": 60,
  "id": "panorama_24839284_152A_F2E4_4184_03679EF0BCC1",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_24839284_152A_F2E4_4184_03679EF0BCC1_1_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 582.19,
    "x": 581.42,
    "angle": 401.72,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Hallway",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 800,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_24839284_152A_F2E4_4184_03679EF0BCC1_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_24839284_152A_F2E4_4184_03679EF0BCC1_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_24839284_152A_F2E4_4184_03679EF0BCC1_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_24839284_152A_F2E4_4184_03679EF0BCC1_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_24839284_152A_F2E4_4184_03679EF0BCC1_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_24839284_152A_F2E4_4184_03679EF0BCC1_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_24839284_152A_F2E4_4184_03679EF0BCC1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -133.15,
   "pitch": -1.02
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -49.87,
     "path": "longest",
     "pitchSpeed": 23.47,
     "yawSpeed": 46.15,
     "easing": "cubic_in_out",
     "targetPitch": -1.46
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "id": "panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468",
  "hfov": 360,
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 347.79,
    "x": 566.16,
    "angle": 25.54,
    "map": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6"
   }
  ],
  "label": "Second Bath",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 156.1,
   "pitch": -1.01
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -10.29,
     "path": "shortest",
     "pitchSpeed": 2.07,
     "yawSpeed": 3.15,
     "easing": "cubic_in_out",
     "targetPitch": 2.71
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_23249E2B_1566_F22D_419B_F60349DC62E1_t.jpg",
  "label": "Sweet Dreams Model 1",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_23249E2B_1566_F22D_419B_F60349DC62E1.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_23249E2B_1566_F22D_419B_F60349DC62E1",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_4435A053_157F_CE7C_419C_D029BBF95803",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5A8B9427_173A_D624_41B3_3EFE22839B57",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000')"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_23023682_2DE7_A7E2_4175_BC706CB8B959, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_23023682_2DE7_A7E2_4175_BC706CB8B959",
    "media": "this.panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA",
    "camera": "this.panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2303B68B_2DE7_A7E2_41B5_250C80AF979C, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2303B68B_2DE7_A7E2_41B5_250C80AF979C",
    "media": "this.panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D",
    "camera": "this.panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2303168B_2DE7_A7E2_41C5_E83946F3974E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2303168B_2DE7_A7E2_41C5_E83946F3974E",
    "media": "this.panorama_0533012F_14E9_4E24_419B_75B644BAE62C",
    "camera": "this.panorama_0533012F_14E9_4E24_419B_75B644BAE62C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2304F68B_2DE7_A7E2_41BE_538D4011C43C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2304F68B_2DE7_A7E2_41BE_538D4011C43C",
    "media": "this.panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5",
    "camera": "this.panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2304668B_2DE7_A7E2_41C1_0DEEFF971128, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2304668B_2DE7_A7E2_41C1_0DEEFF971128",
    "media": "this.panorama_06079FD0_14F9_327C_41B4_DCA650278067",
    "camera": "this.panorama_06079FD0_14F9_327C_41B4_DCA650278067_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2305C68B_2DE7_A7E2_41C3_95E0F351CCDA, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2305C68B_2DE7_A7E2_41C3_95E0F351CCDA",
    "media": "this.panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8",
    "camera": "this.panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2305968B_2DE7_A7E2_41C4_CFEFC4FB58B7, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2305968B_2DE7_A7E2_41C4_CFEFC4FB58B7",
    "media": "this.panorama_0EF2ABE4_153F_5224_41A6_676364D3C204",
    "camera": "this.panorama_0EF2ABE4_153F_5224_41A6_676364D3C204_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2305668B_2DE7_A7E2_41B5_7716DDBF3943, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2305668B_2DE7_A7E2_41B5_7716DDBF3943",
    "media": "this.panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6",
    "camera": "this.panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2306C68B_2DE7_A7E2_41C5_536286645E05, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2306C68B_2DE7_A7E2_41C5_536286645E05",
    "media": "this.panorama_0B87237F_1529_5225_41AC_F3980869DCB7",
    "camera": "this.panorama_0B87237F_1529_5225_41AC_F3980869DCB7_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2306A68B_2DE7_A7E2_41C1_1E15C9BB2435, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2306A68B_2DE7_A7E2_41C1_1E15C9BB2435",
    "media": "this.panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1",
    "camera": "this.panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2306168B_2DE7_A7E2_41B0_EE96DE49A15E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2306168B_2DE7_A7E2_41B0_EE96DE49A15E",
    "media": "this.panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770",
    "camera": "this.panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_35B5E08F_1559_4EE4_41A1_17D2F7A08249",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 13, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD",
    "camera": "this.panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3B3885CB_15D9_566C_419F_55414B67992D",
    "camera": "this.panorama_3B3885CB_15D9_566C_419F_55414B67992D_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2308F68B_2DE7_A7E2_41BD_E4C6CADEF52E, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2308F68B_2DE7_A7E2_41BD_E4C6CADEF52E",
    "media": "this.panorama_27391750_15EB_327C_4198_94D8AD718749",
    "camera": "this.panorama_27391750_15EB_327C_4198_94D8AD718749_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2308568B_2DE7_A7E2_41B5_8E1715B27BBE, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2308568B_2DE7_A7E2_41B5_8E1715B27BBE",
    "media": "this.panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2",
    "camera": "this.panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2308368B_2DE7_A7E2_41B9_705164EAAEB6, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2308368B_2DE7_A7E2_41B9_705164EAAEB6",
    "media": "this.panorama_24839284_152A_F2E4_4184_03679EF0BCC1",
    "camera": "this.panorama_24839284_152A_F2E4_4184_03679EF0BCC1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_2309868B_2DE7_A7E2_4190_0544472CF472, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_2309868B_2DE7_A7E2_4190_0544472CF472",
    "media": "this.panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468",
    "camera": "this.panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_23249E2B_1566_F22D_419B_F60349DC62E1",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 20, 0)",
    "end": "this.trigger('tourEnded')",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 20, '#000000')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_4435A053_157F_CE7C_419C_D029BBF95803",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_5A8B9427_173A_D624_41B3_3EFE22839B57",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA",
    "camera": "this.panorama_1E1D3333_14D9_523C_41B1_DC9F1F8009BA_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D",
    "camera": "this.panorama_051E4C2B_14D9_D62D_4195_F9A8BF3BFE7D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0533012F_14E9_4E24_419B_75B644BAE62C",
    "camera": "this.panorama_0533012F_14E9_4E24_419B_75B644BAE62C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5",
    "camera": "this.panorama_05FB1D36_14E6_D624_41A7_4884BBE17EF5_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_06079FD0_14F9_327C_41B4_DCA650278067",
    "camera": "this.panorama_06079FD0_14F9_327C_41B4_DCA650278067_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8",
    "camera": "this.panorama_099CA389_1529_32EC_4188_CD0A83C7C6D8_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0EF2ABE4_153F_5224_41A6_676364D3C204",
    "camera": "this.panorama_0EF2ABE4_153F_5224_41A6_676364D3C204_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6",
    "camera": "this.panorama_0B9CC88A_153F_3EEF_41B0_5CC9493B43F6_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0B87237F_1529_5225_41AC_F3980869DCB7",
    "camera": "this.panorama_0B87237F_1529_5225_41AC_F3980869DCB7_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1",
    "camera": "this.panorama_0B35CC0E_155B_55E7_41A7_0708C6FC6BD1_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 12)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770",
    "camera": "this.panorama_0B47AD34_156F_763B_4183_9BDBBF2E5770_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 12, 13)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_35B5E08F_1559_4EE4_41A1_17D2F7A08249",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 13, 14)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 13, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD",
    "camera": "this.panorama_3FF7DEB3_1529_523C_41A9_D7BFBAAF95AD_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 14, 15)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_3B3885CB_15D9_566C_419F_55414B67992D",
    "camera": "this.panorama_3B3885CB_15D9_566C_419F_55414B67992D_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 15, 16)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_27391750_15EB_327C_4198_94D8AD718749",
    "camera": "this.panorama_27391750_15EB_327C_4198_94D8AD718749_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 16, 17)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2",
    "camera": "this.panorama_27B627C4_15D9_7264_41AD_7BE5EB37BDA2_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 17, 18)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_24839284_152A_F2E4_4184_03679EF0BCC1",
    "camera": "this.panorama_24839284_152A_F2E4_4184_03679EF0BCC1_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 18, 19)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468",
    "camera": "this.panorama_24C4F4CC_1527_5664_41B3_3F0AE283D468_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 19, 20)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_23249E2B_1566_F22D_419B_F60349DC62E1",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 20, 0)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 20, '#000000')"
   }
  ]
 },
 "this.map_281F512C_155B_4E24_4173_E67DB198D7E6",
 {
  "class": "PlayList",
  "id": "playList_2301A682_2DE7_A7E2_41AE_240A2241C51A",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_2301B682_2DE7_A7E2_419D_435DBFFDECA0",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_281F512C_155B_4E24_4173_E67DB198D7E6",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_2198A96C_2DDE_AD26_41B6_52B7DDB4A1E2_t.jpg",
  "label": "MTVGoldenwestvid4Lodge",
  "video": {
   "class": "VideoResource",
   "width": 1920,
   "height": 1080,
   "mp4Url": "media/video_2198A96C_2DDE_AD26_41B6_52B7DDB4A1E2.mp4"
  },
  "width": 1920,
  "id": "video_2198A96C_2DDE_AD26_41B6_52B7DDB4A1E2",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "PlayList",
  "id": "playList_23017682_2DE7_A7E2_4194_C0BAA4E0767E",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_2198A96C_2DDE_AD26_41B6_52B7DDB4A1E2",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_23017682_2DE7_A7E2_4194_C0BAA4E0767E, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_23017682_2DE7_A7E2_4194_C0BAA4E0767E, 0, this.video_2198A96C_2DDE_AD26_41B6_52B7DDB4A1E2)"
   }
  ]
 },
 {
  "class": "FadeInEffect",
  "duration": 600,
  "id": "effect_2BF79CBE_1529_5624_41B3_92769DA929A1",
  "easing": "linear"
 },
 {
  "class": "FadeOutEffect",
  "duration": 600,
  "id": "effect_2BF97CBE_1529_5624_41AC_EE7B3703B164",
  "easing": "linear"
 },
 {
  "data": {
   "label": "Sweet Dreams In Illahee1"
  },
  "class": "MediaAudio",
  "id": "audio_5BDE6F1A_1759_D3EC_41B3_E5EB2F74BFA2",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_5BDE6F1A_1759_D3EC_41B3_E5EB2F74BFA2.mp3",
   "oggUrl": "media/audio_5BDE6F1A_1759_D3EC_41B3_E5EB2F74BFA2.ogg"
  }
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "playbackBarHeadBorderSize": 0,
  "toolTipPaddingLeft": 6,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipPaddingTop": 4,
  "playbackBarHeadShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarHeadHeight": 15,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBorderRadius": 0,
  "borderRadius": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "progressBorderSize": 0,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBackgroundColorRatios": [
   0
  ],
  "toolTipShadowOpacity": 1,
  "paddingBottom": 0,
  "playbackBarOpacity": 1,
  "shadow": false,
  "progressBarOpacity": 1,
  "progressBackgroundOpacity": 1,
  "minHeight": 50,
  "playbackBarHeadShadow": true,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipFontColor": "#606060",
  "progressOpacity": 1,
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "progressRight": 0,
  "transitionMode": "blending",
  "playbackBarHeadShadowColor": "#000000",
  "playbackBarProgressBorderRadius": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "playbackBarBorderSize": 0,
  "paddingRight": 0,
  "progressBarBorderSize": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowHorizontalLength": 0,
  "progressLeft": 0,
  "playbackBarRight": 0,
  "width": "100%",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "height": "100%",
  "playbackBarHeadWidth": 6,
  "playbackBarProgressBorderColor": "#000000",
  "paddingLeft": 0,
  "progressBarBorderColor": "#000000",
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeight": 10,
  "playbackBarBorderRadius": 0,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "minWidth": 100,
  "progressBarBorderRadius": 0,
  "toolTipPaddingBottom": 4,
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarProgressBorderSize": 0,
  "transitionDuration": 300,
  "id": "MainViewer",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipBorderColor": "#767676",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "progressBottom": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipFontWeight": "normal",
  "playbackBarBottom": 5,
  "progressHeight": 10,
  "progressBorderColor": "#000000",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipBorderSize": 1,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "progressBackgroundColorDirection": "vertical"
 },
 {
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "class": "ThumbnailList",
  "horizontalAlign": "left",
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "itemThumbnailShadowBlurRadius": 8,
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 0,
  "selectedItemLabelFontColor": "#00CC33",
  "selectedItemLabelFontSize": 17,
  "layout": "vertical",
  "itemThumbnailShadowOpacity": 0.54,
  "paddingBottom": 0,
  "selectedItemLabelTextDecoration": "underline",
  "itemVerticalAlign": "middle",
  "rollOverItemLabelFontWeight": "bold",
  "minHeight": 20,
  "shadow": false,
  "itemLabelTextDecoration": "none",
  "backgroundOpacity": 0,
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 87,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingBottom": 3,
  "paddingTop": 0,
  "paddingRight": 0,
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 0,
  "width": 185.05,
  "height": "74.709%",
  "itemLabelFontFamily": "Arial",
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "paddingLeft": 0,
  "rollOverItemLabelFontSize": 15,
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 50,
  "rollOverItemBackgroundOpacity": 0,
  "rollOverItemLabelTextDecoration": "none",
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "top": "9.43%",
  "rollOverItemLabelFontColor": "#0099CC",
  "itemOpacity": 1,
  "itemThumbnailShadow": true,
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemLabelFontStyle": "normal",
  "itemThumbnailShadowHorizontalLength": 3,
  "scrollBarOpacity": 0.5,
  "itemThumbnailWidth": 136,
  "gap": 1,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "right": "0.03%",
  "itemLabelPosition": "bottom",
  "itemBackgroundColorRatios": []
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "class": "IconButton",
  "mode": "toggle",
  "width": 86,
  "horizontalAlign": "center",
  "height": 71.5,
  "borderRadius": 0,
  "paddingLeft": 0,
  "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png",
  "minWidth": 0,
  "cursor": "hand",
  "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
  "minHeight": 0,
  "paddingBottom": 0,
  "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
  "backgroundOpacity": 0,
  "data": {
   "name": "Button49930"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "shadow": false,
  "transparencyActive": true,
  "paddingTop": 0,
  "right": "19.83%"
 },
 {
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 1,
  "paddingRight": 0,
  "class": "IconButton",
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "mode": "toggle",
  "toolTipPaddingLeft": 6,
  "width": 112.65,
  "toolTipPaddingTop": 4,
  "horizontalAlign": "center",
  "height": 69.1,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 3,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "borderRadius": 0,
  "paddingLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTip": "Fullscreen",
  "toolTipShadowSpread": 0,
  "paddingBottom": 0,
  "toolTipShadowOpacity": 1,
  "minWidth": 1,
  "maxWidth": 128,
  "bottom": "0.05%",
  "cursor": "hand",
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "backgroundOpacity": 0,
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "transparencyActive": true,
  "toolTipBorderColor": "#767676",
  "toolTipFontColor": "#606060",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "paddingTop": 0,
  "maxHeight": 128,
  "right": "0.02%",
  "toolTipPaddingRight": 6
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "class": "IconButton",
  "mode": "toggle",
  "width": 84.7,
  "horizontalAlign": "center",
  "height": 68.9,
  "borderRadius": 0,
  "paddingLeft": 0,
  "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png",
  "minWidth": 0,
  "cursor": "hand",
  "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
  "minHeight": 0,
  "paddingBottom": 0,
  "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "backgroundOpacity": 0,
  "data": {
   "name": "Button1166"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "shadow": false,
  "transparencyActive": true,
  "paddingTop": 0,
  "right": "16.1%"
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "class": "IconButton",
  "mode": "toggle",
  "width": 76.65,
  "horizontalAlign": "center",
  "height": 72.85,
  "borderRadius": 0,
  "paddingLeft": 0,
  "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, this.effect_2BF79CBE_1529_5624_41B3_92769DA929A1, 'showEffect', false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, this.effect_2BF97CBE_1529_5624_41AC_EE7B3703B164, 'hideEffect', false) }",
  "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png",
  "minWidth": 0,
  "cursor": "hand",
  "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
  "minHeight": 0,
  "paddingBottom": 0,
  "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
  "backgroundOpacity": 0,
  "data": {
   "name": "Button49925"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "shadow": false,
  "transparencyActive": true,
  "left": "26.66%",
  "paddingTop": 0
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "class": "Image",
  "horizontalAlign": "center",
  "height": "5.582%",
  "width": "37.846%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "paddingBottom": 0,
  "top": "0.05%",
  "minWidth": 1,
  "maxWidth": 1694,
  "cursor": "hand",
  "minHeight": 1,
  "shadow": false,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "backgroundOpacity": 0,
  "data": {
   "name": "Image18054"
  },
  "verticalAlign": "middle",
  "scaleMode": "fit_inside",
  "left": "29.2%",
  "paddingTop": 0,
  "maxHeight": 145
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "class": "Image",
  "horizontalAlign": "center",
  "height": "6.604%",
  "width": "9.212%",
  "borderRadius": 0,
  "paddingLeft": 0,
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "top": "0.05%",
  "minWidth": 1,
  "maxWidth": 1412,
  "minHeight": 1,
  "shadow": false,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "backgroundOpacity": 0,
  "data": {
   "name": "Image18131"
  },
  "verticalAlign": "middle",
  "paddingTop": 0,
  "maxHeight": 800,
  "right": "24.72%"
 },
 {
  "borderSize": 0,
  "children": [
   "this.MapViewer"
  ],
  "overflow": "scroll",
  "paddingRight": 0,
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#67B2D2",
   "#FFFFFF",
   "#67B2D2",
   "#000000"
  ],
  "shadowVerticalLength": 5,
  "horizontalAlign": "left",
  "height": "32.233%",
  "width": "28.605%",
  "scrollBarColor": "#000000",
  "shadowBlurRadius": 22,
  "borderRadius": 0,
  "paddingLeft": 0,
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "shadowSpread": 1,
  "backgroundColorRatios": [
   0,
   0.02,
   0.03,
   0.92,
   1
  ],
  "paddingBottom": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "shadowHorizontalLength": -5,
  "visible": false,
  "minHeight": 1,
  "shadow": true,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "layout": "absolute",
  "backgroundOpacity": 0.92,
  "data": {
   "name": "Container18244"
  },
  "verticalAlign": "top",
  "bottom": "5.82%",
  "shadowColor": "#000000",
  "left": "5.86%",
  "paddingTop": 0,
  "creationPolicy": "inAdvance",
  "gap": 10,
  "scrollBarOpacity": 0,
  "shadowOpacity": 0.73,
  "contentOpaque": false
 },
 {
  "borderSize": 0,
  "paddingRight": 0,
  "class": "Label",
  "horizontalAlign": "center",
  "fontSize": 42,
  "width": "9.11%",
  "height": "4.481%",
  "textDecoration": "none",
  "borderRadius": 0,
  "text": "Floor Plan",
  "fontFamily": "Arial",
  "paddingLeft": 0,
  "fontStyle": "normal",
  "fontWeight": "normal",
  "minWidth": 1,
  "click": "this.openLink(\"https://www.mtviewhomes.com/inventory-detail/41399/mountain-view-homes-bremerton/bremerton/tempo/\", \"_blank\")",
  "minHeight": 1,
  "paddingBottom": 0,
  "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
  "backgroundOpacity": 0,
  "data": {
   "name": "Label20305"
  },
  "verticalAlign": "middle",
  "bottom": "0.68%",
  "shadow": false,
  "fontColor": "#000000",
  "left": "17.65%",
  "paddingTop": 0
 }
], 
 "start": "this.playAudioList([this.audio_5BDE6F1A_1759_D3EC_41B3_E5EB2F74BFA2]); this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_2301B682_2DE7_A7E2_419D_435DBFFDECA0.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "borderSize": 0,
 "paddingRight": 0,
 "class": "Player",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "creationPolicy": "inAdvance",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "unregisterKey": function(key){  delete window[key]; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "getKey": function(key){  return window[key]; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } }
 },
 "minHeight": 20,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "layout": "absolute",
 "data": {
  "name": "Player463"
 },
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})