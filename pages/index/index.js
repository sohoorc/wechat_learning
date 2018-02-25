// index.js

Page({
  data: {
    isActive:'1',
    topicList:[
      {
        legend:'',
        name:'郑家3公主',
        title:'年入一百万元是一种什么样的体验？',
        article:'我每个月只有2000元底薪',
        agree:55,
        discuss:66,
        uid:'fdsafafdiyt123'
      },{
        legend:'',
        name:'甘大少',
        title:'年入一百万元是一种什么样的体验？',
        article:'谢邀！',
        agree:17,
        discuss:100,
        uid:'fdsvvvvafafd123'
      },{
        legend:'',
        name:'郊县吴孟达',
        title:'年入一百万元是一种什么样的体验？',
        article:' 谢邀，我月薪2500，无法回答这个问题。谢邀，我月薪2500，无法回答这个问题。',
        agree:44,
        discuss:33,
        uid:'fdsafacccfd123'
      },{
        legend:'',
        name:'肥皂君',
        title:'年入一百万元是一种什么样的体验？',
        article:'没我什么事情，没我什么事情没我什么事情没我什么事情没我什么事情没我什么事情没我什么事情没我什么事情没我什么事情没我什么事情没我什么事情没我什么事情',
        agree:56,
        discuss:5,
        uid:'fdsafaaaafd123'
      },{
        legend:'',
        name:'香波君',
        title:'年入一百万元是一种什么样的体验？',
        article:' 谢邀，我月薪2500，无法回答这个问题。谢邀，我月薪2500，无法回答这个问题。',
        agree:12,
        discuss:1,
        uid:'fdsafafdeqw123'
      }
    ]
  },
  // 标签栏切换
  tabActiveToggle: function(e){
    console.log(e)
    // current index
    var index = e.target.dataset.index;

    this.setData({
      isActive: index
  })

  }
})