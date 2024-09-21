endpoint = `https://s4b1k-server.onrender.com`
apikey = `S4B1K-USERS`
message_list = [{
    icon: 'fa-solid fa-star-exclamation',
    title: 'The website went live',
    timing: '1655701877368'
}];

item_list = [
    {
        event: 'HOT',
        name: 'APIKEY',
        icon: 'fas fa-terminal',
        item: [{
                "url": endpoint + '/s4b1k/apikey?type=register&name=${whatever name you want}',
                "name": "Create APIKEY"
            },
            {
                "url": endpoint + '/s4b1k/apikey?type=checker&apikey=' + apikey,
                "name": "Check APIKEY"
            }
        ]
    },
{
  event: 'HOT',
        name: 'A.I',
        icon: 'fa-solid fa-ghost',
        item: [{
                "url": endpoint + '/s4b1k/api/blackbox?prompt=hi&apikey=' + apikey,
                "name": "Black A.i"
            },
            {
                "url": endpoint + '/s4b1k/api/gpt?msg=hi&apikey=' + apikey,
                "name": "ChatGPT"
            }
        ]
},
 {
event: 'HOT',
name: 'Text Edit 200+',
icon: 'fa-solid fa-wand-magic-sparkles',
  item: [{
                "url": endpoint + '/s4b1k/api/textpro?number=1&text=Sabik&apikey=' + apikey,
                "name": "Textpro (replace number)"
            },
            {
                "url": endpoint + '/s4b1k/api/photooxy/4?text=Sabik&apikey=' + apikey,
                "name": "Photooxy (1-15)"
            }
        ]
},
   {
     event: 'HOT',
     name: 'Image edit via Url',
     icon: 'fa fa-area-chart',
     item: [{
         "url": endpoint + '/api/maker/darkness?url=https://i.imgur.com/uH2pJDl.jpeg&no=40&apikey=' + apikey,
         "name": "Darkness"
               },
      {
        "url": endpoint + '/api/maker/blur?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,
        "name": "Blur"
      },
      {

         "url": endpoint + '/api/maker/pixelate?url=https://i.imgur.com/uH2pJDl.jpeg&no=20&apikey=' + apikey,

         "name": "Pixelate"
               },
               {

         "url": endpoint + '/api/maker/circle?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,

         "name": "Circle"
               },
               {

         "url": endpoint + '/api/maker/invert?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,

         "name": "Invert"
               },
               {

         "url": endpoint + '/api/maker/facepalm?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,

         "name": "Facepalm"
               },
            {
         "url": endpoint + '/api/maker/beautiful?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,

         "name": "Beautiful"
               },
          {
               
                      "url": endpoint + '/api/maker/rainbow?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,
               
                      "name": "Rainbow"
                    },
         {
    
           "url": endpoint + '/api/maker/wanted?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,
    
           "name": "Wanted"
         },
            {
       
              "url": endpoint + '/api/maker/trigger?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,
       
              "name": "Trigger"
            },
             {
        
               "url": endpoint + '/api/maker/wasted?url=https://i.imgur.com/uH2pJDl.jpeg&apikey=' + apikey,
        
               "name": "Wasted"
             },
           ]
   },
    {
        event: 'HOT',
        name: 'Create anime avatars',
        icon: 'fa-solid fa-user-tie',
        item: [{
                "url": endpoint + "/s4b1k/taoanhdep/list",
                "name": "List of characters"
            },
            {
                "url": endpoint + "/s4b1k/taoanhdep/search?type=name&name=luffy",
                "name": "Search for characters by name"
            },
            {
                "url": endpoint + "/s4b1k/taoanhdep/search?type=id&id=135",
                "name": "Search for characters by ID"
            },
            {
                "url": endpoint + "/s4b1k/taoanhdep/search?type=movie&movie=One Piece",
                "name": "Search for characters by movie name"
            },
            {
                "url": endpoint + "/s4b1k/taoanhdep/data",
                "name": "Anime image creation data"
            },   
            {
                "url": endpoint + "/s4b1k/taoanhdep/avatarwibu?id=1&chu_nen=Saimum&chu_ky=Sabik","name": "Create avatars"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Code',
        icon: 'fa-solid fa-code',
        item: [{
                "url": 'https://deobfuscate.relative.im/',
                "name": "Deobfuscate"
            },
            {
                "url": 'https://obfuscator.io/',
                "name": "Obfuscate"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Mail 10 minutes',
        icon: 'fas fa-envelope-open-text',
        item: [{
                "url": "https://10minutemail.net/address.api.php?new=1",
                "name": "Create Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php?more=1",
                "name": "More Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php",
                "name": "Get Mail"
            },
            {
                "url": "https://10minutemail.net/address.api.php?check=1",
                "name": "Check Mail"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Cover & EmojiMix',
        icon: 'fa-solid fa-diagram-lean-canvas',
        item: [
            {
                "url": endpoint + "/s4b1k/fbcover/v1?name=Saimum&color=red&address=Bangladesh, Rajshahi&email=sai***@gmail.com&subname=Sabik&sdt=01705***&uid=100071575183469",
                "name": "Facebook Cover v1"
            },
            {
                "url": endpoint + "/s4b1k/fbcover/v3?name=Sabik&birthday=30/12&love=S4B1K&location=Bangladesh&hometown=Rajshahi&follow=2591&gender=Male&uid=100071575183469",
                "name": "Facebook Cover v2"
            },
                 {



         "url": endpoint + '/s4b1k/api/maker/emojimix?emoji1=😱&emoji2=👻&apikey=' + apikey,

         "name": "Emoji Mix"
               },
         
        ]
    },
    {
        event: 'HOT',
        name: 'Youtube',
        icon: 'fa-brands fa-youtube',
        item: [{
                "url": endpoint + '/s4b1k/youtube?search=Son Tung',
                "name": "Youtube Search"
            },
            {
                "url": endpoint + '/s4b1k/youtube?GetVideoId=https://www.youtube.com/watch?v=Jk38OqdAQxc',
                "name": "Get Video Id"
            },
            {
                "url": endpoint + '/s4b1k/youtube?GetVideoDetails=Jk38OqdAQxc',
                "name": "Get Video Details"
            },
            {
                "url": endpoint + '/s4b1k/youtube?downloadVideo=Jk38OqdAQxc',
                "name": "Youtube Downloader"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Banking',
        icon: 'fas fa-university',
        item: [{
                "url": endpoint + "/s4b1k/bank/check?ID=100071575183469",
                "name": "Check Bank ID"
            },
            {
                "url": endpoint + "/s4b1k/bank/register?senderID=100071575183469&name=S4B1K",
                "name": "Create Bank"
            },
            {
                "url": endpoint + "/s4b1k/bank/find?type=${STK}&${ID}&${name}=${result}",
                "name": "Find Bank (Code)"
            },
            {
                "url": endpoint + "/s4b1k/bank/find?type=ID&ID=100071575183469",
                "name": "Find Bank (Example)"
            },
            {
                "url": endpoint + "/s4b1k/bank/password?bka=get&dka=100071575183469",
                "name": "Get Password"
            },
            {
                "url": endpoint + "/s4b1k/bank/password?bka=recovery&dka=100071575183469&fka=26020712",
                "name": "New Password"
            },   
            {
                "url": endpoint + "/s4b1k/bank/send?senderID=100071575183469&money=99999999999",
                "name": "Recharge Money Bank"
            },
            {
                "url": endpoint + "/s4b1k/bank/top",
                "name": "Top Bank"
            },
            {
                "url": endpoint + "/s4b1k/bank/pay?type=STK&senderID=100071575183469&STK=705751495&money=9999999999&password=26020712",
                "name": "Pay Bank (STK)"
            },
            {
                "url": endpoint + "/s4b1k/bank/pay?type=ID&senderID=100071575183469&userID=100071575183469&money=9999999999&password=26020712",
                "name": "Pay Bank (UID)"
            },
            {
                "url": endpoint + "/s4b1k/bank/get?ID=100071575183469&money=99999999999999&password=26020712",
                "name": "Withdraw Money Bank"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Pinterest',
        icon: 'fa-brands fa-pinterest',
        item: [{
            "url": endpoint + '/s4b1k/pinterest?search=Naruto',
            "name": "Search"
        }]
    },
    {
        event: 'HOT',
        name: 'Random Images',
        icon: 'fa-solid fa-images',
        item: [{
                "url": endpoint + '/s4b1k/images/anime?apikey=' + apikey,
                "name": "Anime"
            },
            {
                "url": endpoint + '/s4b1k/images/chitanda?apikey=' + apikey,
                "name": "Chitanda"
            },
            {
                "url": endpoint + '/s4b1k/images/cosplay?apikey=' + apikey,
                "name": "Cosplay"
            },
            {
                "url": endpoint + '//s4b1kimages/gaixinhvn?apikey=' + apikey,
                "name": "Girl Vietnam"
            },
            {
                "url": endpoint + '/s4b1k/images/girl?apikey=' + apikey,
                "name": "Girl"
            },
            {
                "url": endpoint + '/s4b1k/images/jimmy?apikey=' + apikey,
                "name": "Jimmy"
            },
            {
                "url": endpoint + '/s4b1k/images/kana?apikey=' + apikey,
                "name": "Kana"
            },
            {
                "url": endpoint + '/s4b1k/images/khanhhuyen?apikey=' + apikey,
                "name": "Khánh Huyền"
            },
            {
                "url": endpoint + '/s4b1k/images/kurumi?apikey=' + apikey,
                "name": "Kurumi"
            },
            {
                "url": endpoint + '/s4b1k/images/lebong?apikey=' + apikey,
                "name": "Lê Bống"
            },
            {
                "url": endpoint + '/s4b1k/images/lnd?apikey=' + apikey,
                "name": "Linh Ngọc Đàm"
            },
            {
                "url": endpoint + '/s4b1k/images/loli?apikey=' + apikey,
                "name": "Loli"
            },
            {
                "url": endpoint + '/s4b1k/images/ngoctrinh?apikey=' + apikey,
                "name": "Ngoc Trinh"
            },
            {
                "url": endpoint + '/s4b1k/images/rem?apikey=' + apikey,
                "name": "Rem"
            },
            {
                "url": endpoint + '/s4b1k/images/sagiri?apikey=' + apikey,
                "name": "Sagiri"
            },
            {
                "url": endpoint + '/s4b1k/images/siesta?apikey=' + apikey,
                "name": "Siesta"
            },
            {
                "url": endpoint + '/s4b1k/images/umaru?apikey=' + apikey,
                "name": "Umaru"
            },
            {
                "url": endpoint + '/s4b1k/images/wallpaper?apikey=' + apikey,
                "name": "Wallpaper"
            } 
        ]
    },

    {
        event: 'HOT',
        name: 'Simsimi',
        icon: 'fa-solid fa-message-bot',
        item: [{
                "url": endpoint + '/s4b1k/sim?type=ask&ask=who is this server admin?',
                "name": "Ask"
            },
            {
                "url": endpoint + '/s4b1k/sim?type=teach&ask=who is this server admin?&ans=this server admin is Saimum Sabik',
                "name": "Teach"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Utilities',
        icon: 'fa-solid fa-lamp-street',
        item: [{
                "url": endpoint + '/s4b1k/imgur?link=https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
                "name": "Imgur Upload"
            },
            {
                "url": endpoint + '/s4b1k/random/useragent',
                "name": "Random User-Agent"
            },
            {
                "url": endpoint + '/s4b1k/covid?country=viet%20nam',
                "name": "COVID 19 DATA"
            },
            {
                "url": endpoint + '/s4b1k/uptimerobot?url=https://docs-api.jrtxtracy.repl.co&key=jrtxtracy&monitor=JRT',
                "name": "Uptime Robot"
            }  
        ]
    },
    {
        event: 'HOT',
        name: 'ADMIN',
        icon: 'fas fa-user-headset',
        item: [{
            event: 'DO NOT SPAM',
            url: 'https://www.facebook.com/100071575183469',
            name: 'Facebook'
        },
        {
            event: 'HOT',
            url: 'https://github.com/',
            name: 'Github'
        }
        ]
    }
];
