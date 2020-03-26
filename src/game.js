import { gameController } from './gameController'
import { ship } from "./ship"
//import { Ammo } from './Ammo'


const game = {
  'canvas': document.querySelector('canvas'),
  'context': null,
  'width': innerWidth,
  'height': innerHeight,
  'ship': ship,
  'gameController': gameController,
  'ammos': [],


  animate() {
    requestAnimationFrame(() => { this.animate() })
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    ship.update()
    //Ammo.update()
  },

  init() {
    this.context = this.canvas.getContext('2d')
    this.canvas.width = this.width * 0.999
    this.canvas.height = this.height * 0.995
    this.ship.init(this)
    this.gameController.init(this)
    this.animate()
  },
}
game.init()

