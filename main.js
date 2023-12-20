var last_position_of_x, last_position_of_y
color = "black"
width_of_line = 2

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

var device_width = screen.width
newCanvasWidth = device_width - 70

newCanvasHeight = screen.height - 300

if(device_width < 992){
document.getElementById("myCanvas").width =  newCanvasWidth
document.getElementById("myCanvas").height = newCanvasHeight

document.body.style.overflow = "hidden"
}

canvas.addEventListener("touchstart", my_touchstart)

function my_touchstart(e){
console.log("my_touchstart detected")
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
last_position_of_x = e.touches[0].clientX - canvas.offsetLeft
last_position_of_y = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", my_touchmove)

function my_touchmove(e){
    console.log("touch move is operational")
    current_posistion_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft
    current_posistion_of_mouse_y = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width_of_line
    
    console.log(last_position_of_x, last_position_of_y)
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y)
ctx.moveTo(last_position_of_x, last_position_of_y)

console.log(current_posistion_of_mouse_x, current_posistion_of_mouse_y)
console.log("x = " + current_posistion_of_mouse_x + "y = " + current_posistion_of_mouse_y)
ctx.lineTo(current_posistion_of_mouse_x, current_posistion_of_mouse_y)

ctx.stroke()

last_position_of_x = current_posistion_of_mouse_x
last_position_of_y = current_posistion_of_mouse_y
}

function clearArea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height)
}























































































