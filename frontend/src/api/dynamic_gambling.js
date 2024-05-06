import request from '@/utils/request'

// 删除历史数据并重新建表
export function gamblingRecreateTable(data) {
  return request({
    url: '/api_gambling/dynamic_gambling/RecreateTable/',
    method: 'post',
    data
  })
}

// 赌博
export function gambleModelShow(data) {
  return request({
    url: '/api_gambling/dynamic_gambling/detectionGambling/',
    method: 'post',
    data
  })
}
export function gambleModelInit(data) {
  return request({
    url: '/api_gambling/dynamic_gambling/detectionGamblingInit/',
    method: 'get',
    data
  })
}

export function gambleTestShow(data) {
  return request({
    url: '/api_gambling/dynamic_gambling/detGamblingTest/',
    method: 'post',
    data
  })
}
export function gambleTestInit(data) {
  return request({
    url: '/api_gambling/dynamic_gambling/detGamblingTestInit/',
    method: 'get',
    data
  })
}
