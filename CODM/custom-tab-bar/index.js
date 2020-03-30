Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "../index/index",
      iconPath: "../img/index.png",
      selectedIconPath: "../img/indexing.png",
      // text: "组件"
       },
      {
        pagePath: "../clue/clue",
        iconPath: "../img/clue.png",
        selectedIconPath: "../img/clueing.png",
        // text: "接口"
      },
      {
        pagePath: "../task/task",
        iconPath: "../img/task.png",
        selectedIconPath: "../img/tasking.png",
        // text: "接口"
      },
      {
        pagePath: "../guessing/guessing",
        iconPath: "../img/guess.png",
        selectedIconPath: "../img/guessing.png",
        // text: "接口"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
