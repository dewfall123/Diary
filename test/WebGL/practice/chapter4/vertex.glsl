precision mediump float;

// 接收顶点坐标 (x, y)
attribute vec2 pointPosition;
// 接收 canvas 的尺寸(width, height)
attribute vec2 screenSize;
void main(){
    vec2 position = (pointPosition / screenSize) * 2.0 - 1.0;
    position = position * vec2(1.0,-1.0);
    gl_Position = vec4(position, 0, 1);
}