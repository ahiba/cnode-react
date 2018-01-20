import {
  observable,
  computed,
  autorun,
  action,
} from 'mobx'

export class AppState {
  @observable count =0
  @observable name = 'worldzhao'
  @computed get msg() {
    return `${this.name} say conut is ${this.count}`
  }
  @action add() {
    this.count += 1
  }
}

const appState = new AppState()

autorun(() => {
  console.log('====================================')
  console.log(appState.msg)
  console.log('====================================')
})

setInterval(() => {
  appState.add()
}, 1000)

export default appState