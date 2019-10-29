precision mediump float;

varying vec4 v_color;

void main() {
    gl_FragColor = v_color / vec4(255, 255, 255, 1);
}