const config = {
	TabStack: {
		screens: {
			BottomTabs: {
				screens: {
					ColorIcon: "color",
				},
			},
		},
	},
};

const linking = {
	prefixes: ['myapp://app'],
	config,
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
