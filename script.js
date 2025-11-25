(function(){
    var script = {
 "mouseWheelEnabled": true,
 "layout": "absolute",
 "start": "this.init(); this.syncPlaylists([this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist,this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist,this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist,this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist,this.mainPlayList])",
 "scrollBarWidth": 10,
 "id": "rootPlayer",
 "vrPolyfillScale": 0.5,
 "propagateClick": true,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "backgroundPreloadEnabled": true,
 "scrollBarColor": "#000000",
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 20,
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
 "defaultVRPointer": "laser",
 "scripts": {
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "existsKey": function(key){  return key in window; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "paddingBottom": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "height": "100%",
 "downloadEnabled": false,
 "shadow": false,
 "gap": 10,
 "class": "Player",
 "paddingRight": 0,
 "minHeight": 20,
 "borderRadius": 0,
 "horizontalAlign": "left",
 "paddingTop": 0,
 "overflow": "visible",
 "definitions": [{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0A368C_74A4_36E5_41B0_C44F048CE963",
 "easing": "cubic_in_out"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768B_74A4_36E3_41D7_4FF5F93263F3, 'hideEffect', false)",
   "camera": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true, -1, this.effect_6C0C568B_74A4_36E3_41DC_90199E16AB3D, 'showEffect', false)",
   "media": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CC68B_74A4_36E3_4170_631E0DDB8455, 'hideEffect', false)",
   "camera": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CD68B_74A4_36E3_418E_ABFDE4F63694, 'hideEffect', false)",
   "media": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DB68B_74A4_36E3_41C5_67D1D34FE59E, 'hideEffect', false)",
   "camera": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0D868B_74A4_36E3_41A9_3998E6BAA951, 'hideEffect', false)",
   "media": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C168C_74A4_36E5_41D9_E067E8C113FB, 'hideEffect', false)",
   "camera": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DF68B_74A4_36E3_41CF_BEFD3FFCFE6C, 'hideEffect', false)",
   "media": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C868C_74A4_36E5_41D8_204B918D2974, 'hideEffect', false)",
   "camera": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768C_74A4_36E5_41D8_8AE8D8A161A5, 'hideEffect', false)",
   "media": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B168C_74A4_36E5_41B2_48812B2168EB, 'hideEffect', false)",
   "camera": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CE68C_74A4_36E5_41D3_6FEFA3B4EE27, 'hideEffect', false)",
   "media": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B768C_74A4_36E5_41A3_BC3E427D2A98, 'hideEffect', false)",
   "camera": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B568C_74A4_36E5_41D7_1AFEE25D8FE1, 'hideEffect', false)",
   "media": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BC68C_74A4_36E5_41C7_9761ECB2FB4D, 'hideEffect', false)",
   "camera": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BB68C_74A4_36E5_41DC_C9B8C95EBF17, 'hideEffect', false)",
   "media": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A568C_74A4_36E5_41BD_3955D28DCBE1, 'hideEffect', false)",
   "camera": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A368C_74A4_36E5_41B0_C44F048CE963, 'hideEffect', false)",
   "media": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AA68C_74A4_36E5_41BF_743C0020EFA7, 'hideEffect', false)",
   "camera": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A968C_74A4_36E5_41DC_C8690A064632, 'hideEffect', false)",
   "media": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09268D_74A4_36E7_41D0_F6194AEE715D, 'hideEffect', false)",
   "camera": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AF68C_74A4_36E5_41AD_8A2DFF00E019, 'hideEffect', false)",
   "media": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360, 'hideEffect', false)",
   "camera": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5, 'hideEffect', false)",
   "media": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C08068D_74A4_36E7_41DA_80112C9FA066, 'hideEffect', false); this.trigger('tourEnded')",
   "camera": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09F68D_74A4_36E7_41C4_3F1F8665B7C9, 'hideEffect', false)",
   "media": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  }
 ],
 "id": "mainPlayList"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0AA68C_74A4_36E5_41BF_743C0020EFA7",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C09F68D_74A4_36E7_41C4_3F1F8665B7C9",
 "easing": "cubic_in_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_630505A0_74A4_0ADD_41C4_FAFFBE2DB2B1",
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
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_camera"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.77,
 "id": "popup_66C2004A_74A4_0A6D_41B1_E9A761658699",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_66C2004A_74A4_0A6D_41B1_E9A761658699_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -2.38,
 "yaw": 68.89,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.59,
 "id": "popup_60DD79C6_74A4_7A64_41B1_978A33008E8C",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_60DD79C6_74A4_7A64_41B1_978A33008E8C_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 4.98,
 "yaw": 78.06,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.77,
 "id": "popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -3.37,
 "yaw": -110.04,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -15.63,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AF629EA5_BB07_5AAC_41E6_4E2BAB1BCEE4"
},
{
 "class": "ImageResource",
 "id": "ImageResource_630B05AB_74A4_0A2C_41A9_75530EBE2333",
 "levels": [
  {
   "url": "media/popup_67498E2E_74A4_3624_41B0_F66C43E21B92_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_67498E2E_74A4_3624_41B0_F66C43E21B92_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_67498E2E_74A4_3624_41B0_F66C43E21B92_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_6319659E_74A4_0AE4_41D4_5515A69E3FCA",
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
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0C768C_74A4_36E5_41D8_8AE8D8A161A5",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -127.38,
   "backwardYaw": 49.68,
   "distance": 1,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -169.87,
   "backwardYaw": -3.34,
   "distance": 1,
   "panorama": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 82.28,
   "backwardYaw": -100.49,
   "distance": 1,
   "panorama": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C"
  }
 ],
 "hfov": 360,
 "id": "panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6",
 "thumbnailUrl": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_t.jpg",
 "label": "Outer Courtyard 5",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_346E77A6_2607_058C_41C0_269B50990DFC",
  "this.overlay_3434AED9_2607_0784_41B2_4B959E10BF48",
  "this.overlay_343192D9_2601_1F87_41BF_59F1D579F81D",
  "this.overlay_66B340EB_74A4_0A23_41D9_DA888B520D76",
  "this.popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0",
  "this.overlay_60A7A3C0_74A4_0E5D_41B5_A9020EE0097A",
  "this.popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_631D2595_74A4_0AE4_41D2_99D73849A6DF",
 "levels": [
  {
   "url": "media/popup_676BFD0C_74AC_3BE4_41B7_2FBA636502DA_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_676BFD0C_74AC_3BE4_41B7_2FBA636502DA_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_676BFD0C_74AC_3BE4_41B7_2FBA636502DA_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0CE68C_74A4_36E5_41D3_6FEFA3B4EE27",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -60.19,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AFB7CEF7_BB07_5AAC_41E5_7E9956950427"
},
{
 "class": "PanoramaPlayer",
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0C168C_74A4_36E5_41D9_E067E8C113FB",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 169.21,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AF4FFEC5_BB07_5AEC_41DE_C8E80BBA882A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 155.27,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AF1E8E91_BB07_5D64_41E4_B4E67539DCD4"
},
{
 "class": "ImageResource",
 "id": "ImageResource_6306059F_74A4_0AE4_41CA_390D721A9210",
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
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0C768B_74A4_36E3_41D7_4FF5F93263F3",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.77,
 "id": "popup_670A818D_74A4_0AE7_41B6_2CACD309BC24",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_670A818D_74A4_0AE7_41B6_2CACD309BC24_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -1.87,
 "yaw": 20.56,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_630555A0_74A4_0ADD_41D5_89E77B9A920A",
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
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.76,
 "id": "popup_6034D255_74AC_0E67_41CD_6AC8640565DC",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6034D255_74AC_0E67_41CD_6AC8640565DC_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 5.59,
 "yaw": 86.28,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.3,
 "id": "popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -4.73,
 "yaw": 147.26,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 76.76,
   "backwardYaw": -98.33,
   "distance": 1,
   "panorama": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 117.98,
   "backwardYaw": 119.81,
   "distance": 1,
   "panorama": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 49.68,
   "backwardYaw": -127.38,
   "distance": 1,
   "panorama": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -102.63,
   "backwardYaw": 80.6,
   "distance": 1,
   "panorama": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0"
  }
 ],
 "hfov": 360,
 "id": "panorama_2D157EBA_2601_0784_41C0_CB99BEACB061",
 "thumbnailUrl": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_t.jpg",
 "label": "Outer Courtyard 1",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
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
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_6303B5A1_74A4_0ADF_41A9_EAD96A59AD32",
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
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.78,
 "id": "popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -0.09,
 "yaw": 97.26,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -98.33,
   "backwardYaw": 76.76,
   "distance": 1,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.06,
   "backwardYaw": 164.37,
   "distance": 1,
   "panorama": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -3.34,
   "backwardYaw": -169.87,
   "distance": 1,
   "panorama": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6"
  }
 ],
 "hfov": 360,
 "id": "panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290",
 "thumbnailUrl": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_t.jpg",
 "label": "Outer Courtyard 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
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
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0DB68B_74A4_36E3_41C5_67D1D34FE59E",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -103.24,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AF171E9B_BB07_5D64_41C7_85B229E25A73"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -33.05,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AF769EB7_BB07_5AAC_41D1_32D957D0792B"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0CC68B_74A4_36E3_4170_631E0DDB8455",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_30B7140F_2603_3A9A_41C1_272601577731_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -97.72,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AF537EDB_BB07_5AE4_41D3_BAABE446C87B"
},
{
 "class": "ImageResource",
 "id": "ImageResource_630A35AC_74A4_0A24_41C5_688BA282B212",
 "levels": [
  {
   "url": "media/popup_605D6574_74A4_0A25_41CC_7CDC6A29282E_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_605D6574_74A4_0A25_41CC_7CDC6A29282E_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_605D6574_74A4_0A25_41CC_7CDC6A29282E_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.75,
 "id": "popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -6.38,
 "yaw": -121.45,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 79.51,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AABD4F69_BB07_5BA4_41CF_240DD04A925D"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0B768C_74A4_36E5_41A3_BC3E427D2A98",
 "easing": "cubic_in_out"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.38,
 "id": "popup_6787C093_74A4_0AE3_41AB_357813D137A7",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_6787C093_74A4_0AE3_41AB_357813D137A7_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 19.57,
 "yaw": 4.38,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_6C00CF46_74AC_1665_41C3_D1CCDB0AA282",
 "levels": [
  {
   "url": "media/popup_60B1B4AD_74AC_0A24_41D9_A9A3C9E1AE97_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_60B1B4AD_74AC_0A24_41D9_A9A3C9E1AE97_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_60B1B4AD_74AC_0A24_41D9_A9A3C9E1AE97_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.25,
 "id": "popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -5.22,
 "yaw": 100.42,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -130.32,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AAA64F56_BB07_5BEC_41B8_2BBB5C9B8249"
},
{
 "class": "ImageResource",
 "id": "ImageResource_631A459E_74A4_0AE4_41D2_F24CF06A9131",
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
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -99.4,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AA562F3B_BB07_5BA4_41E5_8851CE5FACDC"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0A968C_74A4_36E5_41DC_C8690A064632",
 "easing": "cubic_in_out"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.94,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AAAC3F4E_BB07_5BFC_41D9_462B04587CBD"
},
{
 "class": "ImageResource",
 "id": "ImageResource_630AC5AD_74A4_0A24_41D7_B82F53F5CF22",
 "levels": [
  {
   "url": "media/popup_6787C093_74A4_0AE3_41AB_357813D137A7_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_6787C093_74A4_0AE3_41AB_357813D137A7_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_6787C093_74A4_0AE3_41AB_357813D137A7_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0DF68B_74A4_36E3_41CF_BEFD3FFCFE6C",
 "easing": "cubic_in_out"
},
{
 "class": "FadeInEffect",
 "duration": 1000,
 "id": "effect_6C0C568B_74A4_36E3_41DC_90199E16AB3D",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -24.73,
   "backwardYaw": 146.95,
   "distance": 1,
   "panorama": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 158.33,
   "backwardYaw": -10.79,
   "distance": 1,
   "panorama": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C"
  }
 ],
 "hfov": 360,
 "id": "panorama_2D10E000_2601_7A83_41B5_D01EEB41A880",
 "thumbnailUrl": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_t.jpg",
 "label": "Middle Courtyard 2",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_35F861B3_2601_1D8B_41B9_85B0AF6B1B31",
  "this.overlay_35647234_260E_FE8D_41A7_1C644A640640",
  "this.overlay_668485AF_74A4_0A23_41D0_31721B4C8B24",
  "this.popup_670A818D_74A4_0AE7_41B6_2CACD309BC24",
  "this.overlay_600CEB29_74A4_1E2C_41C7_CFFB9244D01A",
  "this.popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1",
  "this.overlay_60D28908_74BF_FBEC_41D7_7F37AB657AE5"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 146.95,
   "backwardYaw": -24.73,
   "distance": 1,
   "panorama": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880"
  }
 ],
 "hfov": 360,
 "id": "panorama_2D29177D_2601_057C_41BD_9C0038DCFE72",
 "thumbnailUrl": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_t.jpg",
 "label": "Middle Courtyard 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_32D273EA_260F_1D85_4196_721ED7AF2C12",
  "this.overlay_65E15BEB_74A4_7E23_41BC_9ABE4D3E5126",
  "this.popup_66C2004A_74A4_0A6D_41B1_E9A761658699",
  "this.overlay_66A95664_74BC_1625_41D4_F39E4028B52A"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0B168C_74A4_36E5_41B2_48812B2168EB",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 2.52,
 "id": "popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -4.09,
 "yaw": -102.69,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_631B559D_74A4_0AE4_41D1_14C393C3E173",
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
 ]
},
{
 "partial": false,
 "id": "panorama_30B7140F_2603_3A9A_41C1_272601577731",
 "thumbnailUrl": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_t.jpg",
 "hfov": 360,
 "label": "Drone View 3",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_66B3324C_74A4_0E65_41D1_B182553ECD0A",
  "this.popup_664F1225_74A4_0E27_419B_C36027287E02"
 ]
},
{
 "partial": false,
 "id": "panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC",
 "thumbnailUrl": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_t.jpg",
 "hfov": 360,
 "label": "Entrance Gate (Kori Agung)",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_66CFC317_74A4_0FE3_41D9_2951B6FB7C8D",
  "this.popup_6787C093_74A4_0AE3_41AB_357813D137A7",
  "this.overlay_671B8E20_74A7_F9DD_41C1_11FD1062BF57"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_6302B5A7_74A4_0A23_41CA_F281F3791C37",
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
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0BC68C_74A4_36E5_41C7_9761ECB2FB4D",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.78,
 "id": "popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -0.86,
 "yaw": 75.02,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_camera"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CC68B_74A4_36E3_4170_631E0DDB8455, 'hideEffect', false)",
   "camera": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CD68B_74A4_36E3_418E_ABFDE4F63694, 'hideEffect', false)",
   "media": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DB68B_74A4_36E3_41C5_67D1D34FE59E, 'hideEffect', false)",
   "camera": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0D868B_74A4_36E3_41A9_3998E6BAA951, 'hideEffect', false)",
   "media": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C168C_74A4_36E5_41D9_E067E8C113FB, 'hideEffect', false)",
   "camera": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DF68B_74A4_36E3_41CF_BEFD3FFCFE6C, 'hideEffect', false)",
   "media": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C868C_74A4_36E5_41D8_204B918D2974, 'hideEffect', false)",
   "camera": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 3, 4); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768C_74A4_36E5_41D8_8AE8D8A161A5, 'hideEffect', false)",
   "media": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B168C_74A4_36E5_41B2_48812B2168EB, 'hideEffect', false)",
   "camera": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist, 4, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CE68C_74A4_36E5_41D3_6FEFA3B4EE27, 'hideEffect', false)",
   "media": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  }
 ],
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C09268D_74A4_36E7_41D0_F6194AEE715D",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.76,
 "id": "popup_677507AC_74AC_1625_41D6_004BD60D105D",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_677507AC_74AC_1625_41D6_004BD60D105D_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -5.04,
 "yaw": 26.14,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.06,
 "id": "popup_605D6574_74A4_0A25_41CC_7CDC6A29282E",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_605D6574_74A4_0A25_41CC_7CDC6A29282E_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -31.46,
 "yaw": 0.11,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B768C_74A4_36E5_41A3_BC3E427D2A98, 'hideEffect', false)",
   "camera": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B568C_74A4_36E5_41D7_1AFEE25D8FE1, 'hideEffect', false)",
   "media": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BC68C_74A4_36E5_41C7_9761ECB2FB4D, 'hideEffect', false)",
   "camera": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BB68C_74A4_36E5_41DC_C9B8C95EBF17, 'hideEffect', false)",
   "media": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A568C_74A4_36E5_41BD_3955D28DCBE1, 'hideEffect', false)",
   "camera": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A368C_74A4_36E5_41B0_C44F048CE963, 'hideEffect', false)",
   "media": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360, 'hideEffect', false)",
   "camera": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist, 3, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5, 'hideEffect', false)",
   "media": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  }
 ],
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist"
},
{
 "class": "ImageResource",
 "id": "ImageResource_630E75AA_74A4_0A2C_41C6_623D4D6AD974",
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
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 52.62,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AA5DEF31_BB07_5BA4_41DB_E6862A99DEE8"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0CD68B_74A4_36E3_418E_ABFDE4F63694",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 119.81,
   "backwardYaw": 117.98,
   "distance": 1,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 164.37,
   "backwardYaw": -177.06,
   "distance": 1,
   "panorama": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290"
  }
 ],
 "hfov": 360,
 "id": "panorama_2D10BE77_2601_068D_41AA_898525DDC4A6",
 "thumbnailUrl": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_t.jpg",
 "label": "Outer Courtyard 3",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_379049C5_2603_0D8C_41B3_6763A493DD32",
  "this.overlay_378B2303_2603_1E84_41A4_D3B1A8C171E4",
  "this.overlay_67B99F21_74A4_F7DC_41CA_262409A0DC6D",
  "this.popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373",
  "this.overlay_676659C4_74A4_3A64_4193_7ADB6FAD4FC2",
  "this.popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0D868B_74A4_36E3_41A9_3998E6BAA951",
 "easing": "cubic_in_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_630405A1_74A4_0ADF_41C7_2D1C8968DE2E",
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
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_630F75A8_74A4_0A2D_41CC_CE9D8C885C3D",
 "levels": [
  {
   "url": "media/popup_670A818D_74A4_0AE7_41B6_2CACD309BC24_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_670A818D_74A4_0AE7_41B6_2CACD309BC24_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_670A818D_74A4_0AE7_41B6_2CACD309BC24_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0C868C_74A4_36E5_41D8_204B918D2974",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 13.53,
 "id": "popup_67498E2E_74A4_3624_41B0_F66C43E21B92",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_67498E2E_74A4_3624_41B0_F66C43E21B92_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -32.05,
 "yaw": -6.15,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0A568C_74A4_36E5_41BD_3955D28DCBE1",
 "easing": "cubic_in_out"
},
{
 "class": "ImageResource",
 "id": "ImageResource_6301E5A8_74A4_0A2D_41DC_39909D82E475",
 "levels": [
  {
   "url": "media/popup_672DC349_74A4_0E6F_41C0_03D3A00E2E71_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_672DC349_74A4_0E6F_41C0_03D3A00E2E71_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_672DC349_74A4_0E6F_41C0_03D3A00E2E71_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.77,
 "id": "popup_672DC349_74A4_0E6F_41C0_03D3A00E2E71",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_672DC349_74A4_0E6F_41C0_03D3A00E2E71_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 4.28,
 "yaw": -54.08,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0B568C_74A4_36E5_41D7_1AFEE25D8FE1",
 "easing": "cubic_in_out"
},
{
 "hfovMax": 130,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Outer Courtyard 4",
 "id": "panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B",
 "thumbnailUrl": "media/panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_t.jpg",
 "hfovMin": "135%",
 "pitch": 0
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C08068D_74A4_36E7_41DA_80112C9FA066",
 "easing": "cubic_in_out"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.05,
 "id": "popup_664F1225_74A4_0E27_419B_C36027287E02",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_664F1225_74A4_0E27_419B_C36027287E02_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 2.92,
 "yaw": -11.74,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_camera"
},
{
 "class": "ImageResource",
 "id": "ImageResource_B7009CAE_B9B8_21B6_41DD_4E9AFD307582",
 "levels": [
  {
   "url": "media/popup_664F1225_74A4_0E27_419B_C36027287E02_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_664F1225_74A4_0E27_419B_C36027287E02_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_664F1225_74A4_0E27_419B_C36027287E02_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -62.02,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AAAA5F45_BB07_5BEC_41E0_D5B28397E80F"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_camera"
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0BB68C_74A4_36E5_41DC_C9B8C95EBF17",
 "easing": "cubic_in_out"
},
{
 "partial": false,
 "id": "panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4",
 "thumbnailUrl": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_t.jpg",
 "hfov": 360,
 "label": "Drone View 2",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_67B2B2C6_74A4_0E65_41D2_F3D09A65B91B",
  "this.popup_605D6574_74A4_0A25_41CC_7CDC6A29282E"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 10.13,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AF7B8EAE_BB07_5ABC_41E0_D75B470F7AF7"
},
{
 "class": "ImageResource",
 "id": "ImageResource_630DB5AB_74A4_0A2C_417A_16E9D9AF05EB",
 "levels": [
  {
   "url": "media/popup_66C2004A_74A4_0A6D_41B1_E9A761658699_0_0.jpg",
   "class": "ImageResourceLevel",
   "width": 1240,
   "height": 1748
  },
  {
   "url": "media/popup_66C2004A_74A4_0A6D_41B1_E9A761658699_0_1.jpg",
   "class": "ImageResourceLevel",
   "width": 726,
   "height": 1024
  },
  {
   "url": "media/popup_66C2004A_74A4_0A6D_41B1_E9A761658699_0_2.jpg",
   "class": "ImageResourceLevel",
   "width": 363,
   "height": 512
  }
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768B_74A4_36E3_41D7_4FF5F93263F3, 'hideEffect', false)",
   "camera": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true, -1, this.effect_6C0C568B_74A4_36E3_41DC_90199E16AB3D, 'showEffect', false)",
   "media": "this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CC68B_74A4_36E3_4170_631E0DDB8455, 'hideEffect', false)",
   "camera": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CD68B_74A4_36E3_418E_ABFDE4F63694, 'hideEffect', false)",
   "media": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DB68B_74A4_36E3_41C5_67D1D34FE59E, 'hideEffect', false)",
   "camera": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0D868B_74A4_36E3_41A9_3998E6BAA951, 'hideEffect', false)",
   "media": "this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C168C_74A4_36E5_41D9_E067E8C113FB, 'hideEffect', false)",
   "camera": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 3, 4); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0DF68B_74A4_36E3_41CF_BEFD3FFCFE6C, 'hideEffect', false)",
   "media": "this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C868C_74A4_36E5_41D8_204B918D2974, 'hideEffect', false)",
   "camera": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 4, 5); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0C768C_74A4_36E5_41D8_8AE8D8A161A5, 'hideEffect', false)",
   "media": "this.panorama_2D2A17EC_2601_059C_41BC_19E1C5C0E36B",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B168C_74A4_36E5_41B2_48812B2168EB, 'hideEffect', false)",
   "camera": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 5, 6); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0CE68C_74A4_36E5_41D3_6FEFA3B4EE27, 'hideEffect', false)",
   "media": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B768C_74A4_36E5_41A3_BC3E427D2A98, 'hideEffect', false)",
   "camera": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 6, 7); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0B568C_74A4_36E5_41D7_1AFEE25D8FE1, 'hideEffect', false)",
   "media": "this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BC68C_74A4_36E5_41C7_9761ECB2FB4D, 'hideEffect', false)",
   "camera": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 7, 8); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0BB68C_74A4_36E5_41DC_C9B8C95EBF17, 'hideEffect', false)",
   "media": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A568C_74A4_36E5_41BD_3955D28DCBE1, 'hideEffect', false)",
   "camera": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 8, 9); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A368C_74A4_36E5_41B0_C44F048CE963, 'hideEffect', false)",
   "media": "this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AA68C_74A4_36E5_41BF_743C0020EFA7, 'hideEffect', false)",
   "camera": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 9, 10); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A968C_74A4_36E5_41DC_C8690A064632, 'hideEffect', false)",
   "media": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09268D_74A4_36E7_41D0_F6194AEE715D, 'hideEffect', false)",
   "camera": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 10, 11); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AF68C_74A4_36E5_41AD_8A2DFF00E019, 'hideEffect', false)",
   "media": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360, 'hideEffect', false)",
   "camera": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 11, 12); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5, 'hideEffect', false)",
   "media": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C08068D_74A4_36E7_41DA_80112C9FA066, 'hideEffect', false)",
   "camera": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist, 12, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09F68D_74A4_36E7_41C4_3F1F8665B7C9, 'hideEffect', false)",
   "media": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  }
 ],
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist"
},
{
 "class": "PlayList",
 "items": [
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AA68C_74A4_36E5_41BF_743C0020EFA7, 'hideEffect', false)",
   "camera": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 0, 1); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0A968C_74A4_36E5_41DC_C8690A064632, 'hideEffect', false)",
   "media": "this.panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09268D_74A4_36E7_41D0_F6194AEE715D, 'hideEffect', false)",
   "camera": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 1, 2); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C0AF68C_74A4_36E5_41AD_8A2DFF00E019, 'hideEffect', false)",
   "media": "this.panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09B68D_74A4_36E7_41D9_2C05AAC2C360, 'hideEffect', false)",
   "camera": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 2, 3); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09968D_74A4_36E7_41D3_CDDD9BA860D5, 'hideEffect', false)",
   "media": "this.panorama_30B7140F_2603_3A9A_41C1_272601577731",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  },
  {
   "class": "PanoramaPlayListItem",
   "end": "this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C08068D_74A4_36E7_41DA_80112C9FA066, 'hideEffect', false)",
   "camera": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_camera",
   "begin": "this.setEndToItemIndex(this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist, 3, 0); this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false); this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, -1, this.effect_6C09F68D_74A4_36E7_41C4_3F1F8665B7C9, 'hideEffect', false)",
   "media": "this.panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC",
   "player": "this.MainViewerPanoramaPlayer",
   "start": "this.keepComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true)"
  }
 ],
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist"
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.77,
 "id": "popup_676BFD0C_74AC_3BE4_41B7_2FBA636502DA",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_676BFD0C_74AC_3BE4_41B7_2FBA636502DA_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -3.04,
 "yaw": 95.12,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.33,
 "id": "popup_60B1B4AD_74AC_0A24_41D9_A9A3C9E1AE97",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_60B1B4AD_74AC_0A24_41D9_A9A3C9E1AE97_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": 28.25,
 "yaw": 32.93,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "rotationY": 0,
 "class": "PopupPanoramaOverlay",
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.75,
 "id": "popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4",
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "url": "media/popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4_0_1.jpg",
    "class": "ImageResourceLevel",
    "width": 726,
    "height": 1024
   }
  ]
 },
 "pitch": -6.81,
 "yaw": -63.93,
 "hideDuration": 500,
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_6318E59F_74A4_0AE4_41DA_CF0A50A875D8",
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
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 77.37,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AF5AFED1_BB07_5AE4_4168_F0A700386C4A"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 81.67,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AFBB9EED_BB07_5ABC_41D9_318606F5BA6F"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 80.6,
   "backwardYaw": -102.63,
   "distance": 1,
   "panorama": "this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061"
  }
 ],
 "hfov": 360,
 "id": "panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0",
 "thumbnailUrl": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_t.jpg",
 "label": "Entrance",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_28EF98C9_2603_0B84_41C2_B549FF4D258F",
  "this.overlay_6683F4FF_74AC_0A24_41CF_88818CA74831",
  "this.popup_676BFD0C_74AC_3BE4_41B7_2FBA636502DA"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_camera"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.66,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AABBEF60_BB07_5BA4_41DE_78E6B79AFDE6"
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_camera"
},
{
 "partial": false,
 "id": "panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864",
 "thumbnailUrl": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_t.jpg",
 "hfov": 360,
 "label": "Drone View 1",
 "pitch": 0,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "height": 3072
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_66B98E5B_74A4_1663_41D9_70216358AAE5",
  "this.popup_67498E2E_74A4_3624_41B0_F66C43E21B92"
 ]
},
{
 "class": "FadeOutEffect",
 "duration": 1000,
 "id": "effect_6C0AF68C_74A4_36E5_41AD_8A2DFF00E019",
 "easing": "cubic_in_out"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -100.49,
   "backwardYaw": 82.28,
   "distance": 1,
   "panorama": "this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -10.79,
   "backwardYaw": 158.33,
   "distance": 1,
   "panorama": "this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880"
  }
 ],
 "hfov": 360,
 "id": "panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C",
 "thumbnailUrl": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_t.jpg",
 "label": "Middle Courtyard 1",
 "pitch": 0,
 "partial": false,
 "hfovMax": 130,
 "class": "Panorama",
 "frames": [
  {
   "class": "CubicPanoramaFrame",
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/f/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/f/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/f/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/f/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/u/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/u/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/u/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/u/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/r/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/r/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/r/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/r/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/b/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/b/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/b/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/b/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/d/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/d/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/d/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/d/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/l/0/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "tags": "ondemand",
      "colCount": 5,
      "width": 2560,
      "height": 2560
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/l/1/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "height": 1536
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/l/2/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "height": 1024
     },
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0/l/3/{row}_{column}.jpg",
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_t.jpg"
  }
 ],
 "vfov": 180,
 "hfovMin": "135%",
 "overlays": [
  "this.overlay_349986A0_2603_0784_41C0_450B63BBAA44",
  "this.overlay_352FE9E9_2603_0D87_41B5_3F2A56CAD9DA",
  "this.overlay_66A2B47A_74A4_0A2C_4198_0C40B0AEEF28",
  "this.popup_672DC349_74A4_0E6F_41C0_03D3A00E2E71",
  "this.overlay_6117F2E9_74AC_0E2C_41DB_D02961A9BFA6",
  "this.overlay_60346677_74AC_1624_41C8_C95104A85D01",
  "this.popup_60B1B4AD_74AC_0A24_41D9_A9A3C9E1AE97"
 ]
},
{
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -21.67,
  "pitch": 0
 },
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96
   }
  ]
 },
 "id": "camera_AFAE6EE4_BB07_5AAC_41E2_2CA0486EF46A"
},
{
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 },
 "progressBackgroundColorDirection": "vertical",
 "id": "MainViewer",
 "left": 0,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#FFFFFF",
 "toolTipBorderColor": "#F7931E",
 "paddingLeft": 0,
 "width": "100%",
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "minWidth": 100,
 "toolTipOpacity": 1,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "13px",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#F7931E",
 "playbackBarRight": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "height": "100%",
 "shadow": false,
 "toolTipShadowColor": "#F7931E",
 "playbackBarBorderRadius": 0,
 "class": "ViewerArea",
 "playbackBarHeadBorderRadius": 0,
 "transitionMode": "blending",
 "playbackBarHeadBorderColor": "#000000",
 "minHeight": 50,
 "toolTipShadowOpacity": 0,
 "progressLeft": 0,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "playbackBarBorderSize": 0,
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": true,
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "borderSize": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F7931E",
 "toolTipFontColor": "#F7931E",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "top": 0,
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "paddingBottom": 0,
 "toolTipPaddingLeft": 10,
 "progressBorderRadius": 0,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "toolTipPaddingRight": 10,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingTop": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadHeight": 15
},
{
 "layout": "absolute",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarWidth": 10,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "propagateClick": true,
 "scrollBarColor": "#000000",
 "right": "0%",
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "verticalAlign": "top",
 "height": 60,
 "shadow": false,
 "gap": 10,
 "paddingTop": 0,
 "class": "Container",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "overflow": "visible",
 "horizontalAlign": "left",
 "data": {
  "name": "--BUTTON SET"
 }
},
{
 "layout": "vertical",
 "backgroundColorRatios": [
  0.02
 ],
 "scrollBarWidth": 10,
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "propagateClick": false,
 "width": 60,
 "scrollBarColor": "#000000",
 "right": 15,
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "backgroundColorDirection": "vertical",
 "top": 62,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "backgroundColor": [
  "#F7931E"
 ],
 "verticalAlign": "middle",
 "height": 70.4,
 "scrollBarOpacity": 0.5,
 "shadow": false,
 "gap": 0,
 "paddingTop": 0,
 "class": "Container",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "center",
 "data": {
  "name": "-button set"
 }
},
{
 "layout": "horizontal",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "scrollBarColor": "#000000",
 "paddingLeft": 0,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "minWidth": 1,
 "width": "100%",
 "bottom": "0%",
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 90,
 "scrollBarMargin": 2,
 "shadow": false,
 "gap": 3,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "paddingRight": 30,
 "data": {
  "name": "-button set container"
 }
},
{
 "propagateClick": false,
 "id": "Image_6458BD88_745C_1AED_41C8_94D6F4976C22",
 "left": "7.27%",
 "paddingLeft": 0,
 "width": "18.901%",
 "maxWidth": 922,
 "minWidth": 1,
 "borderSize": 0,
 "url": "skin/Image_6458BD88_745C_1AED_41C8_94D6F4976C22.jpg",
 "verticalAlign": "middle",
 "height": "49.204%",
 "top": "16.79%",
 "shadow": false,
 "maxHeight": 1300,
 "class": "Image",
 "paddingTop": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "data": {
  "name": "Info"
 }
},
{
 "backgroundColorRatios": [
  0
 ],
 "id": "veilPopupPanorama",
 "left": 0,
 "propagateClick": false,
 "right": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "shadow": false,
 "class": "UIComponent",
 "paddingTop": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 0.55,
 "paddingBottom": 0,
 "paddingRight": 0,
 "data": {
  "name": "UIComponent4067"
 }
},
{
 "backgroundColorRatios": [],
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "propagateClick": false,
 "right": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "minWidth": 0,
 "backgroundColorDirection": "vertical",
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "shadow": false,
 "class": "ZoomImage",
 "paddingTop": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 1,
 "scaleMode": "custom",
 "paddingBottom": 0,
 "paddingRight": 0,
 "data": {
  "name": "ZoomImage4068"
 }
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "CloseButton4069"
 },
 "id": "closeButtonPopupPanorama",
 "rollOverIconColor": "#666666",
 "propagateClick": false,
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "paddingLeft": 5,
 "minWidth": 0,
 "iconHeight": 20,
 "backgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "top": 10,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "iconColor": "#000000",
 "iconLineWidth": 5,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowBlurRadius": 6,
 "shadow": false,
 "gap": 5,
 "fontStyle": "normal",
 "pressedIconColor": "#888888",
 "class": "CloseButton",
 "paddingTop": 5,
 "minHeight": 0,
 "borderRadius": 0,
 "visible": false,
 "backgroundOpacity": 0.3,
 "paddingBottom": 5,
 "iconWidth": 20,
 "cursor": "hand",
 "paddingRight": 5,
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290, this.camera_AABBEF60_BB07_5BA4_41DE_78E6B79AFDE6); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.41,
   "image": "this.AnimatedImageResource_326A79E5_2601_0D8F_41BD_4C73CD9A4DC7",
   "pitch": -19.58,
   "yaw": -169.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_346E77A6_2607_058C_41C0_269B50990DFC",
 "maps": [
  {
   "hfov": 5.41,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -169.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -19.58
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_AAA64F56_BB07_5BEC_41B8_2BBB5C9B8249); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.98,
   "image": "this.AnimatedImageResource_326A59E5_2601_0D8F_41A9_AEF21BD0780C",
   "pitch": -11.59,
   "yaw": -127.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3434AED9_2607_0784_41B2_4B959E10BF48",
 "maps": [
  {
   "hfov": 2.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -127.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -11.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C, this.camera_AABD4F69_BB07_5BA4_41CF_240DD04A925D); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.13,
   "image": "this.AnimatedImageResource_326AB9E5_2601_0D8F_41AC_6B2244B1EB77",
   "pitch": -9.17,
   "yaw": 82.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_343192D9_2601_1F87_41BF_59F1D579F81D",
 "maps": [
  {
   "hfov": 4.13,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 82.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.17
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_67CEEE14_74A4_19E5_41A9_E4E2D65FCFF0, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6303B5A1_74A4_0ADF_41A9_EAD96A59AD32, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_63392579_74A4_0A2F_41DC_C82F987A86A0",
   "pitch": -0.86,
   "yaw": 75.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66B340EB_74A4_0A23_41D9_DA888B520D76",
 "maps": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 75.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.86
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_66C522DC_74A4_0E65_41B2_D608FEBC6B11, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6302B5A7_74A4_0A23_41CA_F281F3791C37, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.29,
   "image": "this.AnimatedImageResource_6339B579_74A4_0A2F_41DC_54570A518F58",
   "pitch": -6.38,
   "yaw": -121.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_60A7A3C0_74A4_0E5D_41B5_A9020EE0097A",
 "maps": [
  {
   "hfov": 5.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -121.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.38
  }
 ]
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "propagateClick": false,
 "width": 60,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button settings VR"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "shadowSpread": 1,
 "minWidth": 1,
 "iconHeight": 30,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 1,
 "height": 60,
 "mode": "push",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "shadowBlurRadius": 6,
 "shadow": false,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "class": "Button",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "iconWidth": 30,
 "cursor": "hand",
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "fontWeight": "normal"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0, this.camera_AA562F3B_BB07_5BA4_41E5_8851CE5FACDC); this.mainPlayList.set('selectedIndex', 0)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.37,
   "image": "this.AnimatedImageResource_3274C9E4_2601_0D8D_41B0_A6CDAE3C2FF0",
   "pitch": -5.94,
   "yaw": -102.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_296B4552_2603_3A85_41BE_78D34E4D6570",
 "maps": [
  {
   "hfov": 3.37,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -5.94
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290, this.camera_AFBB9EED_BB07_5ABC_41D9_318606F5BA6F); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.63,
   "image": "this.AnimatedImageResource_326B29E4_2601_0D8D_4196_6605C113F648",
   "pitch": -11.15,
   "yaw": 76.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_36B0287E_2601_0B7C_418B_39ECAD1148CB",
 "maps": [
  {
   "hfov": 4.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 76.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -11.15
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.05,
   "image": "this.AnimatedImageResource_326B19E4_2601_0D8D_41A9_FE9740312DF5",
   "pitch": -4.66,
   "yaw": -48.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_364BC4C5_2601_1B8C_418E_572B25FF420D",
 "maps": [
  {
   "hfov": 4.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -48.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -4.66
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6, this.camera_AFB7CEF7_BB07_5AAC_41E5_7E9956950427); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.91,
   "image": "this.AnimatedImageResource_326B79E4_2601_0D8D_41BC_F30DA63FB103",
   "pitch": -5.69,
   "yaw": 117.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_36C40ACC_2601_0F9C_41B1_4EA1B52EF836",
 "maps": [
  {
   "hfov": 2.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 117.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -5.69
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6, this.camera_AA5DEF31_BB07_5BA4_41DB_E6862A99DEE8); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.85,
   "image": "this.AnimatedImageResource_326B59E5_2601_0D8F_41C1_1B61FEA2D1A3",
   "pitch": -4.3,
   "yaw": 49.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_349F45C4_2601_058D_41BC_EFD84F97263C",
 "maps": [
  {
   "hfov": 2.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 49.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -4.3
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_60DD79C6_74A4_7A64_41B1_978A33008E8C, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_631B559D_74A4_0AE4_41D1_14C393C3E173, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.61,
   "image": "this.AnimatedImageResource_633E9577_74A4_0A23_41C5_F66CC0CE26C3",
   "pitch": 4.98,
   "yaw": 78.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_67AD5348_74A4_0E6D_41B1_71B1CB9E6F0E",
 "maps": [
  {
   "hfov": 3.61,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 78.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_674C8D8D_74AC_3AE7_41C5_5909CD41AFC4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_631A459E_74A4_0AE4_41D2_F24CF06A9131, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.31,
   "image": "this.AnimatedImageResource_633EC577_74A4_0A23_41CF_EAFFA035CDEF",
   "pitch": -3.37,
   "yaw": -110.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66AC857A_74AC_0A2C_41D5_86976B208250",
 "maps": [
  {
   "hfov": 5.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -110.04,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_6_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.37
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_677507AC_74AC_1625_41D6_004BD60D105D, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6319659E_74A4_0AE4_41D4_5515A69E3FCA, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.3,
   "image": "this.AnimatedImageResource_633D2578_74A4_0A2D_41D9_FBAE6F0493C5",
   "pitch": -5.04,
   "yaw": 26.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_668DB340_74AC_0E5D_41DB_72ED250DFA35",
 "maps": [
  {
   "hfov": 5.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 26.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_7_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_AF171E9B_BB07_5D64_41C7_85B229E25A73); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.86,
   "image": "this.AnimatedImageResource_326BB9E5_2601_0D8F_41C1_A9A87D7ED952",
   "pitch": -13.36,
   "yaw": -98.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29D95CC6_2601_0B8C_41A8_2B0558EB5C8E",
 "maps": [
  {
   "hfov": 3.86,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -98.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.36
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D10BE77_2601_068D_41AA_898525DDC4A6, this.camera_AF629EA5_BB07_5AAC_41E6_4E2BAB1BCEE4); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.44,
   "image": "this.AnimatedImageResource_326BE9E5_2601_0D8F_41C2_7C9BA3B94594",
   "pitch": -13.46,
   "yaw": -177.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_36397BDE_261F_0DBC_41B1_5F9EC72C8301",
 "maps": [
  {
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -177.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -13.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6, this.camera_AF7B8EAE_BB07_5ABC_41E0_D75B470F7AF7); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.01,
   "image": "this.AnimatedImageResource_326BC9E5_2601_0D8F_41C2_BF1DD3A056FC",
   "pitch": -10.98,
   "yaw": -3.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3768C2EB_2601_1F9B_41B0_D6EE650EB924",
 "maps": [
  {
   "hfov": 4.01,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -3.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -10.98
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6034D255_74AC_0E67_41CD_6AC8640565DC, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6318E59F_74A4_0AE4_41DA_CF0A50A875D8, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.3,
   "image": "this.AnimatedImageResource_633C5578_74A4_0A2D_41DB_4368BB2A227C",
   "pitch": 5.59,
   "yaw": 86.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_674EDEAC_74AC_1625_41D8_AE6E7BB74451",
 "maps": [
  {
   "hfov": 5.3,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 86.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 5.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_604B4DD6_74AC_1A65_41D8_77D89D4EC2B4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6306059F_74A4_0AE4_41CA_390D721A9210, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.29,
   "image": "this.AnimatedImageResource_633CB578_74A4_0A2D_41B2_EA6751D1A29D",
   "pitch": -6.81,
   "yaw": -63.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_67EF3FF8_74AC_362D_41D0_50C00163B84E",
 "maps": [
  {
   "hfov": 5.29,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -63.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -6.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_67AC6F0C_74A4_17E5_41D4_B94936FA4346, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630555A0_74A4_0ADD_41D5_89E77B9A920A, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.98,
   "image": "this.AnimatedImageResource_633B1578_74A4_0A2D_41CC_0DD97F3D7E76",
   "pitch": -4.09,
   "yaw": -102.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_668F601B_74AC_09E2_41D9_79DE1A57577E",
 "maps": [
  {
   "hfov": 2.98,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -102.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_5_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C, this.camera_AF4FFEC5_BB07_5AEC_41DE_C8E80BBA882A); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.39,
   "image": "this.AnimatedImageResource_326929E6_2601_0D8D_41A2_BA6BC3903011",
   "pitch": -9.59,
   "yaw": 158.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_35F861B3_2601_1D8B_41B9_85B0AF6B1B31",
 "maps": [
  {
   "hfov": 7.39,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 158.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.59
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D29177D_2601_057C_41BD_9C0038DCFE72, this.camera_AF769EB7_BB07_5AAC_41D1_32D957D0792B); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.34,
   "image": "this.AnimatedImageResource_326919E6_2601_0D8D_41B4_5F19123AFAF6",
   "pitch": -6.93,
   "yaw": -24.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_35647234_260E_FE8D_41A7_1C644A640640",
 "maps": [
  {
   "hfov": 3.34,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -24.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -6.93
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_670A818D_74A4_0AE7_41B6_2CACD309BC24, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630F75A8_74A4_0A2D_41CC_CE9D8C885C3D, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_6338D57A_74A4_0A2D_41CD_B7137CB59E7B",
   "pitch": -1.87,
   "yaw": 20.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_668485AF_74A4_0A23_41D0_31721B4C8B24",
 "maps": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 20.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.87
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_608469C4_74A4_3A65_41C9_DC3B1D6105C1, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630E75AA_74A4_0A2C_41C6_623D4D6AD974, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_6327357A_74A4_0A2D_41D5_CD0A9DC30BB0",
   "pitch": -0.09,
   "yaw": 97.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_600CEB29_74A4_1E2C_41C7_CFFB9244D01A",
 "maps": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 97.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -0.09
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://youtu.be/ZbD4e6XuGuM', '_blank')"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.12,
   "image": "this.AnimatedImageResource_6327657A_74A4_0A2D_41C5_4FE137FDD034",
   "pitch": -16.07,
   "yaw": -0.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_60D28908_74BF_FBEC_41D7_7F37AB657AE5",
 "maps": [
  {
   "hfov": 5.12,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -0.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -16.07
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880, this.camera_AF1E8E91_BB07_5D64_41E4_B4E67539DCD4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.74,
   "image": "this.AnimatedImageResource_326BE9E6_2601_0D8D_41BC_04E82AA4F70C",
   "pitch": -7.68,
   "yaw": 146.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_32D273EA_260F_1D85_4196_721ED7AF2C12",
 "maps": [
  {
   "hfov": 2.74,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 146.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -7.68
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_66C2004A_74A4_0A6D_41B1_E9A761658699, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630DB5AB_74A4_0A2C_417A_16E9D9AF05EB, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_6326157A_74A4_0A2D_41D6_6ADD7C5C155C",
   "pitch": -2.38,
   "yaw": 68.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_65E15BEB_74A4_7E23_41BC_9ABE4D3E5126",
 "maps": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 68.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -2.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://youtu.be/ZbD4e6XuGuM', '_blank')"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.26,
   "image": "this.AnimatedImageResource_6326757A_74A4_0A2D_41BF_1158161A1ADD",
   "pitch": -8.8,
   "yaw": 152.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66A95664_74BC_1625_41D4_F39E4028B52A",
 "maps": [
  {
   "hfov": 5.26,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 152.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -8.8
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_664F1225_74A4_0E27_419B_C36027287E02, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_B7009CAE_B9B8_21B6_41DD_4E9AFD307582, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.05,
   "image": "this.AnimatedImageResource_6325757A_74A4_0A2D_41C6_9E3364CB0338",
   "pitch": 2.92,
   "yaw": -11.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66B3324C_74A4_0E65_41D1_B182553ECD0A",
 "maps": [
  {
   "hfov": 5.05,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -11.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 2.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_6787C093_74A4_0AE3_41AB_357813D137A7, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630AC5AD_74A4_0A24_41D7_B82F53F5CF22, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.76,
   "image": "this.AnimatedImageResource_B7E39C8B_B9B8_207E_41DD_4C0186E9C216",
   "pitch": 19.57,
   "yaw": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66CFC317_74A4_0FE3_41D9_2951B6FB7C8D",
 "maps": [
  {
   "hfov": 4.76,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 4.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 19.57
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://youtu.be/ZbD4e6XuGuM', '_blank')"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.16,
   "image": "this.AnimatedImageResource_6324157B_74A4_0A23_41C4_90C00F2544B9",
   "pitch": -14.19,
   "yaw": -109.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_671B8E20_74A7_F9DD_41C1_11FD1062BF57",
 "maps": [
  {
   "hfov": 5.16,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -109.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -14.19
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290, this.camera_AAAC3F4E_BB07_5BFC_41D9_462B04587CBD); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.85,
   "image": "this.AnimatedImageResource_326A29E5_2601_0D8F_41AD_3826CB544EBB",
   "pitch": -17.81,
   "yaw": 164.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_379049C5_2603_0D8C_41B3_6763A493DD32",
 "maps": [
  {
   "hfov": 4.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 164.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -17.81
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_AAAA5F45_BB07_5BEC_41E0_D5B28397E80F); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.44,
   "image": "this.AnimatedImageResource_326A19E5_2601_0D8F_41C1_D85BB9A3B675",
   "pitch": -12.01,
   "yaw": 119.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_378B2303_2603_1E84_41A4_D3B1A8C171E4",
 "maps": [
  {
   "hfov": 4.44,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 119.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -12.01
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_60AE1B8A_74A4_3EEC_41B6_AE12D427B373, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630505A0_74A4_0ADD_41C4_FAFFBE2DB2B1, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.71,
   "image": "this.AnimatedImageResource_633BC578_74A4_0A2D_41DA_0FD5A3D71DD5",
   "pitch": -5.22,
   "yaw": 100.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_67B99F21_74A4_F7DC_41CA_262409A0DC6D",
 "maps": [
  {
   "hfov": 2.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 100.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -5.22
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_606E02D7_74A4_0E63_41B3_87625F2BC0E4, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630405A1_74A4_0ADF_41C7_2D1C8968DE2E, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.85,
   "image": "this.AnimatedImageResource_633A2579_74A4_0A2F_41A8_5334887EA197",
   "pitch": -4.73,
   "yaw": 147.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_676659C4_74A4_3A64_4193_7ADB6FAD4FC2",
 "maps": [
  {
   "hfov": 2.85,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 147.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -4.73
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_605D6574_74A4_0A25_41CC_7CDC6A29282E, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630A35AC_74A4_0A24_41C5_688BA282B212, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.31,
   "image": "this.AnimatedImageResource_6326E57A_74A4_0A2D_41C0_3BFC91CBB45E",
   "pitch": -31.46,
   "yaw": 0.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_67B2B2C6_74A4_0E65_41D2_F3D09A65B91B",
 "maps": [
  {
   "hfov": 4.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 0.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -31.46
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D157EBA_2601_0784_41C0_CB99BEACB061, this.camera_AF5AFED1_BB07_5AE4_4168_F0A700386C4A); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.63,
   "image": "this.AnimatedImageResource_3274B9E2_2601_0D85_41BF_D7AC6D1B047F",
   "pitch": -8.28,
   "yaw": 80.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28EF98C9_2603_0B84_41C2_B549FF4D258F",
 "maps": [
  {
   "hfov": 3.63,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 80.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -8.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_676BFD0C_74AC_3BE4_41B7_2FBA636502DA, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_631D2595_74A4_0AE4_41D2_99D73849A6DF, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.32,
   "image": "this.AnimatedImageResource_633F1571_74A4_0A3F_41D5_A6A867D450F7",
   "pitch": -3.04,
   "yaw": 95.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6683F4FF_74AC_0A24_41CF_88818CA74831",
 "maps": [
  {
   "hfov": 5.32,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 95.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -3.04
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_67498E2E_74A4_3624_41B0_F66C43E21B92, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_630B05AB_74A4_0A2C_41A9_75530EBE2333, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Polygon"
 },
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "hfov": 47.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0_HS_0_0.png",
      "class": "ImageResourceLevel",
      "width": 1158,
      "height": 679
     }
    ]
   },
   "pitch": -32.05,
   "yaw": -6.15
  }
 ],
 "id": "overlay_66B98E5B_74A4_1663_41D9_70216358AAE5",
 "maps": [
  {
   "hfov": 47.91,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -6.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C0A52FC_2603_1F7D_416A_92636ED1A864_0_HS_0_1_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 200,
      "height": 117
     }
    ]
   },
   "pitch": -32.05
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6, this.camera_AF537EDB_BB07_5AE4_41D3_BAABE446C87B); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.71,
   "image": "this.AnimatedImageResource_326AE9E6_2601_0D8D_41B3_634627E3C525",
   "pitch": -5.99,
   "yaw": -100.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_349986A0_2603_0784_41C0_450B63BBAA44",
 "maps": [
  {
   "hfov": 3.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -100.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_1_HS_0_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -5.99
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.startPanoramaWithCamera(this.panorama_2D10E000_2601_7A83_41B5_D01EEB41A880, this.camera_AFAE6EE4_BB07_5AAC_41E2_2CA0486EF46A); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "data": {
  "label": "Circle 01b"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.71,
   "image": "this.AnimatedImageResource_326AC9E6_2601_0D8D_4192_5B1818EDA8BA",
   "pitch": -9.38,
   "yaw": -10.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_352FE9E9_2603_0D87_41B5_3F2A56CAD9DA",
 "maps": [
  {
   "hfov": 4.71,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -10.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_1_HS_1_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 36,
      "height": 16
     }
    ]
   },
   "pitch": -9.38
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_672DC349_74A4_0E6F_41C0_03D3A00E2E71, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6301E5A8_74A4_0A2D_41DC_39909D82E475, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.31,
   "image": "this.AnimatedImageResource_6339E579_74A4_0A2F_41CC_05B855783441",
   "pitch": 4.28,
   "yaw": -54.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_66A2B47A_74A4_0A2C_4198_0C40B0AEEF28",
 "maps": [
  {
   "hfov": 5.31,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -54.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0_HS_2_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.28
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.openLink('https://youtu.be/ZbD4e6XuGuM', '_blank')"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.38,
   "image": "this.AnimatedImageResource_6C293F32_74AC_163C_41C9_905E675421DE",
   "pitch": -1.92,
   "yaw": -22.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6117F2E9_74AC_0E2C_41DB_D02961A9BFA6",
 "maps": [
  {
   "hfov": 3.38,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": -22.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0_HS_3_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1.92
  }
 ]
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "rollOverDisplay": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000",
   "click": "this.showPopupPanoramaOverlay(this.popup_60B1B4AD_74AC_0A24_41D9_A9A3C9E1AE97, {'iconLineWidth':5,'rollOverIconHeight':20,'pressedIconHeight':20,'rollOverIconColor':'#666666','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconWidth':20,'pressedBorderSize':0,'paddingLeft':5,'rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderSize':0,'pressedIconColor':'#888888','backgroundOpacity':0.3,'iconHeight':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorDirection':'vertical','pressedIconWidth':20,'iconColor':'#000000','paddingRight':5,'rollOverIconLineWidth':5,'pressedBorderColor':'#000000','iconWidth':20,'borderColor':'#000000','rollOverBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingBottom':5,'pressedBackgroundColorDirection':'vertical','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical'}, this.ImageResource_6C00CF46_74AC_1665_41C3_D1CCDB0AA282, null, null, null, null, false)"
  }
 ],
 "data": {
  "label": "Info 01"
 },
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.69,
   "image": "this.AnimatedImageResource_6C296F32_74AC_163C_41C3_DDBCB56D88DC",
   "pitch": 28.25,
   "yaw": 32.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_60346677_74AC_1624_41C8_C95104A85D01",
 "maps": [
  {
   "hfov": 4.69,
   "class": "HotspotPanoramaOverlayMap",
   "yaw": 32.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0_HS_4_0_0_map.gif",
      "class": "ImageResourceLevel",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 28.25
  }
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "propagateClick": false,
 "data": {
  "name": "Puri Kanginan "
 },
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "width": 450,
 "borderSize": 0,
 "minWidth": 1,
 "text": "PURI KANGINAN",
 "verticalAlign": "middle",
 "top": "0%",
 "height": 60,
 "fontSize": 31,
 "shadow": false,
 "fontStyle": "normal",
 "paddingTop": 0,
 "class": "Label",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "fontWeight": "normal",
 "horizontalAlign": "left",
 "paddingRight": 0
},
{
 "layout": "horizontal",
 "propagateClick": true,
 "scrollBarWidth": 10,
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "scrollBarColor": "#000000",
 "right": "0%",
 "width": 1199,
 "children": [
  "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
  "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
  "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
  "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "minWidth": 1,
 "top": "0%",
 "scrollBarOpacity": 0.5,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "verticalAlign": "middle",
 "height": 60,
 "shadow": false,
 "gap": 3,
 "paddingTop": 0,
 "class": "Container",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "horizontalAlign": "right",
 "paddingRight": 15,
 "data": {
  "name": "-button set container"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": false,
 "id": "IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52",
 "paddingLeft": 0,
 "width": 44,
 "maxWidth": 101,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52.png",
 "mode": "push",
 "height": 44,
 "click": "if(!this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22.get('visible')){ this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, true, 0, null, null, false) } else { this.setComponentVisibility(this.Image_6458BD88_745C_1AED_41C8_94D6F4976C22, false, 0, null, null, false) }",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_7B212C50_3AA0_A1AF_41C5_F659ED22BD52_rollover.png",
 "paddingTop": 0,
 "maxHeight": 101,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "IconButton Info"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": false,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "paddingLeft": 0,
 "width": 44,
 "maxWidth": 101,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://www.google.com/maps/place/%E1%AC%A7%E1%AC%B8%E1%AC%AD%E1%AC%B6%E1%AC%93%E1%AC%97%E1%AC%B6%E1%AC%A6%E1%AC%A6%E1%AD%84%E1%AC%A9%E1%AC%B8%E1%AC%AE%E1%AC%BE%E1%AC%AE%E1%AC%BE%E1%AC%82%E1%AD%9F+Puri+Kanginan+Buleleng/@-8.1244254,115.0946015,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd1908327e64f15:0x9d3282c3269423f5!8m2!3d-8.1244254!4d115.0971764!16s%2Fg%2F11csrg6vnk?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D', '_blank')",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "paddingTop": 0,
 "maxHeight": 101,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "IconButton Location"
 }
},
{
 "transparencyActive": true,
 "horizontalAlign": "center",
 "propagateClick": false,
 "id": "IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93",
 "paddingLeft": 0,
 "width": 44,
 "maxWidth": 101,
 "minWidth": 1,
 "borderSize": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93.png",
 "mode": "push",
 "height": 44,
 "click": "this.openLink('https://youtu.be/0useXGFn2eI', '_blank')",
 "shadow": false,
 "rollOverIconURL": "skin/IconButton_7B200C51_3AA0_A251_41CC_7E57609B3C93_rollover.png",
 "paddingTop": 0,
 "maxHeight": 101,
 "class": "IconButton",
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 0,
 "paddingBottom": 0,
 "cursor": "hand",
 "paddingRight": 0,
 "data": {
  "name": "IconButton Video"
 }
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326A79E5_2601_0D8F_41BD_4C73CD9A4DC7",
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326A59E5_2601_0D8F_41A9_AEF21BD0780C",
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326AB9E5_2601_0D8F_41AC_6B2244B1EB77",
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_63392579_74A4_0A2F_41DC_C82F987A86A0",
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6339B579_74A4_0A2F_41DC_54570A518F58",
 "levels": [
  {
   "url": "media/panorama_2D1090C5_2601_1B8C_41A7_FD1B0D1FD7B6_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3274C9E4_2601_0D8D_41B0_A6CDAE3C2FF0",
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326B29E4_2601_0D8D_4196_6605C113F648",
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326B19E4_2601_0D8D_41A9_FE9740312DF5",
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326B79E4_2601_0D8D_41BC_F30DA63FB103",
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326B59E5_2601_0D8F_41C1_1B61FEA2D1A3",
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_1_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633E9577_74A4_0A23_41C5_F66CC0CE26C3",
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633EC577_74A4_0A23_41CF_EAFFA035CDEF",
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_6_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633D2578_74A4_0A2D_41D9_FBAE6F0493C5",
 "levels": [
  {
   "url": "media/panorama_2D157EBA_2601_0784_41C0_CB99BEACB061_0_HS_7_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326BB9E5_2601_0D8F_41C1_A9A87D7ED952",
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326BE9E5_2601_0D8F_41C2_7C9BA3B94594",
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326BC9E5_2601_0D8F_41C2_BF1DD3A056FC",
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_1_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633C5578_74A4_0A2D_41DB_4368BB2A227C",
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633CB578_74A4_0A2D_41B2_EA6751D1A29D",
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633B1578_74A4_0A2D_41CC_0DD97F3D7E76",
 "levels": [
  {
   "url": "media/panorama_2D2F2654_2601_0683_41C2_EEE46B0FD290_0_HS_5_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326929E6_2601_0D8D_41A2_BA6BC3903011",
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326919E6_2601_0D8D_41B4_5F19123AFAF6",
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6338D57A_74A4_0A2D_41CD_B7137CB59E7B",
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6327357A_74A4_0A2D_41D5_CD0A9DC30BB0",
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6327657A_74A4_0A2D_41C5_4FE137FDD034",
 "levels": [
  {
   "url": "media/panorama_2D10E000_2601_7A83_41B5_D01EEB41A880_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326BE9E6_2601_0D8D_41BC_04E82AA4F70C",
 "levels": [
  {
   "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6326157A_74A4_0A2D_41D6_6ADD7C5C155C",
 "levels": [
  {
   "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6326757A_74A4_0A2D_41BF_1158161A1ADD",
 "levels": [
  {
   "url": "media/panorama_2D29177D_2601_057C_41BD_9C0038DCFE72_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6325757A_74A4_0A2D_41C6_9E3364CB0338",
 "levels": [
  {
   "url": "media/panorama_30B7140F_2603_3A9A_41C1_272601577731_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_B7E39C8B_B9B8_207E_41DD_4C0186E9C216",
 "levels": [
  {
   "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6324157B_74A4_0A23_41C4_90C00F2544B9",
 "levels": [
  {
   "url": "media/panorama_309ACC57_2603_0A8A_41B2_8F0918F6F3AC_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326A29E5_2601_0D8F_41AD_3826CB544EBB",
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326A19E5_2601_0D8F_41C1_D85BB9A3B675",
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633BC578_74A4_0A2D_41DA_0FD5A3D71DD5",
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633A2579_74A4_0A2F_41A8_5334887EA197",
 "levels": [
  {
   "url": "media/panorama_2D10BE77_2601_068D_41AA_898525DDC4A6_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6326E57A_74A4_0A2D_41C0_3BFC91CBB45E",
 "levels": [
  {
   "url": "media/panorama_30988BD2_2603_0D85_41BE_3F7798A24DF4_0_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_3274B9E2_2601_0D85_41BF_D7AC6D1B047F",
 "levels": [
  {
   "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_633F1571_74A4_0A3F_41D5_A6A867D450F7",
 "levels": [
  {
   "url": "media/panorama_2D5F15A2_2601_0587_41B1_4458FFC76FF0_0_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326AE9E6_2601_0D8D_41B3_634627E3C525",
 "levels": [
  {
   "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_1_HS_0_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 5,
 "frameCount": 20,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_326AC9E6_2601_0D8D_4192_5B1818EDA8BA",
 "levels": [
  {
   "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_1_HS_1_0.png",
   "class": "ImageResourceLevel",
   "width": 1080,
   "height": 600
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6339E579_74A4_0A2F_41CC_05B855783441",
 "levels": [
  {
   "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0_HS_2_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6C293F32_74AC_163C_41C9_905E675421DE",
 "levels": [
  {
   "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0_HS_3_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "class": "AnimatedImageResource",
 "rowCount": 6,
 "frameCount": 22,
 "frameDuration": 41,
 "colCount": 4,
 "id": "AnimatedImageResource_6C296F32_74AC_163C_41C3_DDBCB56D88DC",
 "levels": [
  {
   "url": "media/panorama_2D29B89A_2601_0B87_41AC_7F969AB1B11C_0_HS_4_0.png",
   "class": "ImageResourceLevel",
   "width": 460,
   "height": 690
  }
 ]
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 116,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_0561BA16_3AA3_A1D2_41C7_FDA0B6E9EE29_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "data": {
  "name": "Drone View"
 },
 "popUpPaddingTop": 10,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "label": "Drone View",
 "height": "100%",
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "class": "DropDown",
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "popUpShadowColor": "#000000",
 "paddingTop": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 96,
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_05789A1B_3AA3_A1D2_41CC_002739F0C312_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "data": {
  "name": "DropDown 2"
 },
 "popUpPaddingTop": 10,
 "backgroundColor": [
  "#F7931E"
 ],
 "fontSize": 12,
 "label": "Outer Courtyard",
 "height": "100%",
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 5,
 "popUpShadowOpacity": 0,
 "class": "DropDown",
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "backgroundOpacity": 1,
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "popUpShadowColor": "#000000",
 "paddingTop": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 114,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_05783A1F_3AA3_A1D2_41A6_E88282E5373B_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 3"
 },
 "height": 60,
 "popUpPaddingTop": 10,
 "fontSize": 12,
 "label": "Middle Courtyard",
 "backgroundColor": [
  "#F7931E"
 ],
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "class": "DropDown",
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "backgroundColorRatios": [
  0
 ],
 "arrowColor": "#FFFFFF",
 "popUpPaddingLeft": 15,
 "id": "DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7",
 "popUpBackgroundColor": "#F7931E",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "propagateClick": false,
 "width": 130,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "rollOverPopUpBackgroundColor": "#CE6700",
 "paddingLeft": 15,
 "fontColor": "#FFFFFF",
 "pressedBackgroundColor": [
  "#CE6700"
 ],
 "borderSize": 0,
 "popUpBackgroundOpacity": 1,
 "selectedPopUpBackgroundColor": "#CE6700",
 "minWidth": 1,
 "popUpShadow": false,
 "popUpGap": 2,
 "backgroundColorDirection": "vertical",
 "popUpPaddingBottom": 10,
 "playList": "this.DropDown_057BFA20_3AA3_A1EE_41A9_8EE569D894A7_playlist",
 "pressedBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "DropDown 4"
 },
 "height": 60,
 "popUpPaddingTop": 10,
 "fontSize": 12,
 "label": "All",
 "backgroundColor": [
  "#F7931E"
 ],
 "shadow": false,
 "gap": 0,
 "fontStyle": "normal",
 "popUpBorderRadius": 0,
 "popUpShadowOpacity": 0,
 "paddingTop": 0,
 "popUpShadowBlurRadius": 6,
 "popUpFontColor": "#FFFFFF",
 "class": "DropDown",
 "paddingRight": 15,
 "minHeight": 1,
 "borderRadius": 0,
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "fontWeight": "bold",
 "arrowBeforeLabel": false,
 "popUpShadowColor": "#000000",
 "popUpShadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "horizontalAlign": "center",
 "backgroundColorRatios": [
  0
 ],
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "propagateClick": false,
 "width": 60,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "data": {
  "name": "Button Settings"
 },
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "paddingLeft": 0,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "shadowSpread": 1,
 "minWidth": 1,
 "iconHeight": 17,
 "backgroundColorDirection": "vertical",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 1,
 "height": 60,
 "mode": "toggle",
 "fontSize": 12,
 "backgroundColor": [
  "#F7931E"
 ],
 "shadowBlurRadius": 6,
 "shadow": false,
 "gap": 5,
 "iconBeforeLabel": true,
 "fontStyle": "normal",
 "paddingTop": 0,
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "class": "Button",
 "paddingRight": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "backgroundOpacity": 1,
 "paddingBottom": 0,
 "iconWidth": 17,
 "cursor": "hand",
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "fontWeight": "normal"
}],
 "width": "100%",
 "data": {
  "name": "Player468"
 }
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
