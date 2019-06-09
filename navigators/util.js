export  default class $router {
  static resetTohome(params) {
    let { navigation } = params;
    navigation.navigate('Main');
  }
  static goBack(navigation) {
    navigation.goBack()
  }
  static PageTo(page,params) {
    const navigation = $router.navigation;
    if (!navigation) {
      console.log('$router.navigation is empty');
      return
    }
    navigation.navigate(page, {
      ...params
    })
  }
}