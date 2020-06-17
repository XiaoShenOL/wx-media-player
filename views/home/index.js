const app = new getApp()
import {
  storeBindingsBehavior
} from 'mobx-miniprogram-bindings'
import {
  store
} from '../../store/index.js'

Component({
  behaviors: [storeBindingsBehavior],

  storeBindings: {
    store,
    fields: ['isShow', 'songListDetail']
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLoad() {
      this.createAudio()
    },

    // 创建 audio
    createAudio() {
      app.globalData.audio = wx.createInnerAudioContext()
      console.log(app.globalData.audio)
    }
  }

})