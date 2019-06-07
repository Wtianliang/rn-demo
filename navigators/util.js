export  default class $router {
  static resetTohome(parmas) {
    let { navigation } = parmas;
    navigation.navigate('Main');
  }
  static goBack(navigation) {
    navigation.goBack()
  }
  static PageTo(pramas, page) {
    const navigation = $router.navigation;
    if (!navigation) {
      console.log('$router.navigation is empty');
      return
    }
    navigation.navigate(page, {
      ...pramas
    })
  }
}