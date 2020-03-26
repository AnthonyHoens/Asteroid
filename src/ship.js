export const ship = {

    init(game) {
        this.game = game
        this.x = this.game.canvas.width / 2
        this.y = this.game.canvas.height / 2
        this.direction = Math.PI / 30
        this.speed = 6
        this.maxSpeed = 10
        this.acceleration = 0.8

        window.addEventListener('keydown',(e) => {
            switch (event.key) {
                case 'ArrowRight':
                    this.direction += Math.PI / 30
                    
                break;

                case 'ArrowLeft':
                    this.direction -= Math.PI / 30
                break;
            }
        } )
    },


    update() {

        this.x += this.speed * Math.cos(this.direction)
        this.y += this.speed * Math.sin(this.direction)

        if(this.speed > this.maxSpeed) {this.speed = this.maxSpeed}
        if(-this.speed < -this.maxSpeed) {this.speed = -this.maxSpeed}
        if(this.x > this.game.canvas.width) {this.x = 0}
        if(this.x < 0) {this.x = this.game.canvas.width}
        if(this.y > this.game.canvas.height) {this.y = 0}
        if(this.y < 0) {this.y = this.game.canvas.height}
        
        

        this.render()
    },

    render() {
        this.game.context.strokeStyle = '#fff'
        this.game.context.fillStyle = '#fff'
        this.game.context.save()
        this.game.context.translate(this.x, this.y)
        this.game.context.rotate(this.direction)
        this.game.context.beginPath()
        this.game.context.moveTo(0, -7)
        this.game.context.lineTo(15, 0)
        this.game.context.lineTo(0, 7)
        this.game.context.fill()
        this.game.context.closePath()
        this.game.context.stroke()
        this.game.context.restore()
    }, 
}