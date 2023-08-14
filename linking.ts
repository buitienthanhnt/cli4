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
                PaperDetail: 'PaperDetail/:paper_id' // pass param for screen(get by props.route.params.paper_id)
              }
            }
          },
        }
      },
    }
  };

export default linking;
// https://reactnavigation.org/docs/configuring-links/
