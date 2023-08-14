const linking = {
    prefixes: ['myapp://app'],
    config: {
      screens: {
        BottomTabs: {
          screens: {
            AccountScreen: {
              screens: {
                AccountDetail: "AccountDetail/:user_id",
                Login: "login",
                Wishlist: "Wishlist"
              }
            },
            MoreScreen: {
              screens: {
                ColorIcon: 'ColorIcon'
              }
            },
            HomeScreen: {
              screens: {
                Home: "Home"
              }
            },
            PaperScreen: {
              screens: {
                PaperList: 'PaperList',
                PaperDetail: 'PaperDetail/:paper_id'
              }
            }
          },
        }
      },
    }
  };

export default linking;

// const config = {
// 	screens: {
// 	  // set config for App init screen
// 	  PersonalInfoScreen: {
// 		path: "info_register/",
// 		parse: {
// 		  token: (token) => `${token}`,
// 		},
// 	  },
// 	  // set config for Tabs screen 
// 	  TabStack: {
// 		screens: {
// 		  Setting: {
// 			screens: {
// 			  SettingScreen: "setting_register/:token",
// 			},
// 		  },
// 		},
// 	  },
// 	},
//   };
// https://reactnavigation.org/docs/configuring-links/
