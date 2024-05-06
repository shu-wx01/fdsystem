const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,

  // 赌博
  gambling_recreate_data: state => state.gambling.gambling_recreate_data,
  gambleModel_data: state => state.gambling.gambleModel_data, // 异常转账模型展示
  gambleTest_data: state => state.gambling.gambleTest_data, // 异常转账模型测试展示

  // 在线赌博
  dynamic_gambling_recreate_data: state => state.dynamic_gambling.gambling_recreate_data,
  dynamic_gambleModel_data: state => state.dynamic_gambling.gambleModel_data, // 异常转账模型展示
  dynamic_gambleTest_data: state => state.dynamic_gambling.gambleTest_data, // 异常转账模型测试展示

  // 持续学习在线赌博
  continual_gambling_recreate_data: state => state.continual_gambling.gambling_recreate_data,
  continual_gambleModel_data: state => state.continual_gambling.gambleModel_data, // 异常转账模型展示
  continual_gambleTest_data: state => state.continual_gambling.gambleTest_data, // 异常转账模型测试展示
}
export default getters
