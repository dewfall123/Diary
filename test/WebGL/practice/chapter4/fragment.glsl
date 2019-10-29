precision mediump float;

uniform vec4 pointColor;

void main() {
    gl_FragColor = pointColor / vec4(255, 255, 255, 1);
}