(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2d0e6128"],{"96d9":function(s,t,e){"use strict";e.r(t),e.d(t,"NativeAudioWeb",function(){return i}),e.d(t,"NativeAudio",function(){return n});class a{constructor(s){this.audio=s}}class i extends e("1547").a{constructor(){super({name:"NativeAudio",platforms:["web"]})}async resume(s){s=this.getAudioAsset(s.assetId).audio;if(s.paused)return s.play()}async pause(s){return this.getAudioAsset(s.assetId).audio.pause()}async getCurrentTime(s){return{currentTime:this.getAudioAsset(s.assetId).audio.currentTime}}async getDuration(s){s=this.getAudioAsset(s.assetId).audio;if(Number.isNaN(s.duration))throw"no duration available";if(Number.isFinite(s.duration))return{duration:s.duration};throw"duration not available => media resource is streaming"}async configure(s){throw"configure is not supported for web: "+JSON.stringify(s)}async preload(s){if(i.AUDIO_ASSET_BY_ASSET_ID.has(s.assetId))throw"AssetId already exists. Unload first if like to change!";if(null==(t=s.assetPath)||!t.length)throw"no assetPath provided";if(!s.isUrl&&!new RegExp("^/?"+i.FILE_LOCATION).test(s.assetPath)){const t=s.assetPath.startsWith("/")?"":"/";s.assetPath=""+i.FILE_LOCATION+t+s.assetPath}var t=new Audio(s.assetPath);t.autoplay=!1,t.loop=!1,t.preload="auto",s.volume&&(t.volume=s.volume),i.AUDIO_ASSET_BY_ASSET_ID.set(s.assetId,new a(t))}async play(s){var e=this.getAudioAsset(s.assetId).audio;return await this.stop(s),e.loop=!1,e.currentTime=null!=(s=s.time)?s:0,e.play()}async loop(s){var t=this.getAudioAsset(s.assetId).audio;return await this.stop(s),t.loop=!0,t.play()}async stop(s){s=this.getAudioAsset(s.assetId).audio;s.pause(),s.loop=!1,s.currentTime=0}async unload(s){await this.stop(s),i.AUDIO_ASSET_BY_ASSET_ID.delete(s.assetId)}async setVolume(s){if("number"!=typeof(null==s?void 0:s.volume))throw"no volume provided";this.getAudioAsset(s.assetId).audio.volume=s.volume}async isPlaying(s){return{isPlaying:!this.getAudioAsset(s.assetId).audio.paused}}getAudioAsset(s){if(this.checkAssetId(s),i.AUDIO_ASSET_BY_ASSET_ID.has(s))return i.AUDIO_ASSET_BY_ASSET_ID.get(s);throw`no asset for assetId "${s}" available. Call preload first!`}checkAssetId(s){if("string"!=typeof s)throw"assetId must be a string";if(null==s||!s.length)throw"no assetId provided"}}i.FILE_LOCATION="assets/sounds",i.AUDIO_ASSET_BY_ASSET_ID=new Map;const n=new i}}]);