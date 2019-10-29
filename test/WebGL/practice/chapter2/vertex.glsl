precision mediump float;

attribute vec2 clickPosition;
attribute vec2 screenSize;

void main() {
    //start 将屏幕坐标系转化为裁剪坐标（裁剪坐标系）
   vec2 position = (clickPosition / screenSize) * 2.0 - 1.0; 
   position = position * vec2(1.0, -1.0);
   gl_Position = vec4(position, 0, 1);
   //end 将屏幕坐标系转化为裁剪坐标（裁剪坐标系）
   //声明要绘制的点的大小。
   gl_PointSize = 10.0;
}