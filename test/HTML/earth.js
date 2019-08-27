const CITY_RADIUS = 100,
    CITY_MARGIN = 1,
    BLINT_SPEED = 0.05,
    HEXAGON_RADIUS = 5,
    radius = 100
let scene, camera, renderer, clock, control
let earthImg, earthData, earthParticles = new THREE.Object3D(),
    cloud = new THREE.Object3D(),
    hexagon = new THREE.Object3D(),
    dotTexture = new THREE.TextureLoader().load('/uploads/1805/dot.png'),
    coneImg = ['/uploads/1805/lightray.jpg', '/uploads/1805/lightray_yellow.jpg'],
    hexagonColor = [0xffffff, 0xffff00]

main()

function main() {
    earthImg = document.createElement('img')
    earthImg.src = '/uploads/1805/earth.jpg'
    earthImg.onload = () => {
        let earthCanvas = document.createElement('canvas')
        earthCtx = earthCanvas.getContext('2d')
        earthCanvas.width = earthImg.width
        earthCanvas.height = earthImg.height
        earthCtx.drawImage(earthImg, 0, 0, earthImg.width, earthImg.height)
        earthImgData = earthCtx.getImageData(0, 0, earthImg.width, earthImg.height)
            // basic scene
        createBasicScene()
            // 球面打点
        createEarthParticles()
            // 云层
        createCloudGrid()
        animate()
    }
}

function createBasicScene() {
    let width = window.innerWidth,
        height = window.innerHeight
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000)
    camera.position.z = 500
    renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    renderer.autoClearColor = new THREE.Color(1, 0, 0, 0)
    document.querySelector('#three').appendChild(renderer.domElement)
    clock = new THREE.Clock()
    control = new THREE.TrackballControls(camera)
    control.rotateSpeed = 1.0
    control.zoomSpeed = 1.0
    control.panSpeed = 1.0
    axes = new THREE.AxesHelper(CITY_RADIUS + 10)
        //scene.add(axes)

    window.addEventListener('resize', resize)
}

function createEarthParticles() {
    let positions = []
    let materials = []
    let sizes = []
    for (var i = 0; i < 2; i++) {
        positions[i] = {
            positions: []
        }
        sizes[i] = {
            sizes: []
        }
        mat = new THREE.PointsMaterial()
        mat.size = 5
        mat.color = new THREE.Color(0x03d98e)
        mat.map = dotTexture
        mat.depthWrite = false
        mat.transparent = true
        mat.opacity = 0
        mat.side = THREE.FrontSide
        mat.blending = THREE.AdditiveBlending
        let n = i / 2
        mat.t_ = n * Math.PI * 2
        mat.speed_ = BLINT_SPEED
        mat.min_ = .2 * Math.random() + .5
        mat.delta_ = .1 * Math.random() + .1
        mat.opacity_coef_ = 1
        materials.push(mat)
    }
    var spherical = new THREE.Spherical
    spherical.radius = radius
    const step = 250
    for (let i = 0; i < step; i++) {
        let vec = new THREE.Vector3
        let radians = step * (1 - Math.sin(i / step * Math.PI)) / step + .5 // 每个纬线圈内的角度均分
        for (let j = 0; j < step; j += radians) {
            let c = j / step, // 底图上的横向百分比
                f = i / step, // 底图上的纵向百分比
                index = Math.floor(2 * Math.random())
            pos = positions[index]
            size = sizes[index]
            if (isLandByUV(c, f)) { // 根据横纵百分比判断在底图中的像素值
                spherical.theta = c * Math.PI * 2 - Math.PI / 2 // 横纵百分比转换为theta和phi夹角
                spherical.phi = f * Math.PI // 横纵百分比转换为theta和phi夹角
                vec.setFromSpherical(spherical); // 夹角转换为世界坐标
                pos.positions.push(vec.x)
                pos.positions.push(vec.y)
                pos.positions.push(vec.z)
                if (j % 3 === 0) {
                    size.sizes.push(6.0)
                }
            }
        }
    }
    for (let i = 0; i < positions.length; i++) {
        let pos = positions[i],
            size = sizes[i],
            bufferGeom = new THREE.BufferGeometry,
            typedArr1 = new Float32Array(pos.positions.length),
            typedArr2 = new Float32Array(size.sizes.length)
        for (let j = 0; j < pos.positions.length; j++) {
            typedArr1[j] = pos.positions[j]
        }
        for (let j = 0; j < size.sizes.length; j++) {
            typedArr2[j] = size.sizes[j]
        }
        bufferGeom.addAttribute("position", new THREE.BufferAttribute(typedArr1, 3))
        bufferGeom.addAttribute('size', new THREE.BufferAttribute(typedArr2, 1))
        bufferGeom.computeBoundingSphere()
        let particle = new THREE.Points(bufferGeom, materials[i])
        earthParticles.add(particle)
    }
    scene.add(earthParticles)
}

function createCloudGrid() {
    THREE.XRayMaterial = function(options) {
        let uniforms = {
            uTex: {
                type: "t",
                value: options.map || new THREE.Texture
            },
            offsetRepeat: {
                value: new THREE.Vector4(0, 0, 1, 1)
            },
            alphaProportion: {
                type: "1f",
                value: options.alphaProportion || .5
            },
            diffuse: {
                value: options.color || new THREE.Color(16777215)
            },
            opacity: {
                value: options.opacity || 1
            },
            gridOffset: {
                value: 0
            }
        }
        return new THREE.ShaderMaterial({
            uniforms: uniforms,
            vertexShader: ` 
varying float _alpha;
varying vec2 vUv;
uniform vec4 offsetRepeat;
uniform float alphaProportion;
void main() {
gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
vUv = uv * offsetRepeat.zw + offsetRepeat.xy;
vec4 worldPosition = modelMatrix * vec4( vec3( position ), 1.0 );
vec3 cameraToVertex = normalize( cameraPosition - worldPosition.xyz);
_alpha = 1.0 - max( 0.0, dot( normal, cameraToVertex ) );
_alpha = max( 0.0, (_alpha - alphaProportion) / (1.0 - alphaProportion) );
}`,
            fragmentShader: `
uniform sampler2D uTex;
uniform vec3 diffuse;
uniform float opacity;
uniform float gridOffset;
varying float _alpha;
varying vec2 vUv;
void main() {
vec4 texColor = texture2D( uTex, vUv );
float _a = _alpha * opacity;
if( _a <= 0.0 ) discard;
_a = _a * ( sin( vUv.y * 2000.0 + gridOffset ) * .5 + .5 );
gl_FragColor = vec4( texColor.rgb * diffuse, _a );
}`,
            transparent: !0,
            blending: THREE.AdditiveBlending,
            depthTest: !1
        })
    }
    let geometry = new THREE.SphereGeometry(1.3 * radius, 66, 44),
        map = new THREE.TextureLoader().load('/uploads/1805/clouds.jpg')
    map.wrapT = THREE.ClampToEdgeWrapping
    map.wrapS = THREE.ClampToEdgeWrapping
    let material = new THREE.XRayMaterial({
            map: map,
            alphaProportion: .25,
            color: new THREE.Color(263385797),
            opacity: 0,
            gridOffsetSpeed: .6
        }),
        mesh = new THREE.Mesh(geometry, material)
    mesh.matrixAutoUpdate = !1
    cloud.add(mesh)
    scene.add(cloud)
}

function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
}

function render() {
    let delta = clock.getDelta()
    control.update(delta)
    renderer.render(scene, camera)
}

function animate() {
    requestAnimationFrame(animate)
        // 球面粒子闪烁
    let objects = earthParticles.children
    objects.forEach(obj => {
        let material = obj.material
        material.t_ += material.speed_
        material.opacity = (Math.sin(material.t_) * material.delta_ + material.min_) * material.opacity_coef_
        material.needsUpdate = true
    })
    render()
}

function createPosition(lnglat) {
    let spherical = new THREE.Spherical
    spherical.radius = radius
    const lng = lnglat[0]
    const lat = lnglat[1]
        // const phi = (180 - lng) * (Math.PI / 180)
        // const theta = (90 + lat) * (Math.PI / 180)
    const theta = (lng + 90) * (Math.PI / 180)
    const phi = (90 - lat) * (Math.PI / 180)
    spherical.phi = phi
    spherical.theta = theta
    let position = new THREE.Vector3()
    position.setFromSpherical(spherical)
    return position
}

function isLandByUV(c, f) {
    if (!earthImgData) { // 底图数据
        console.error('data error!')
    }
    let n = parseInt(earthImg.width * c) // 根据横纵百分比计算图象坐标系中的坐标
    o = parseInt(earthImg.height * f) // 根据横纵百分比计算图象坐标系中的坐标
    return 0 === earthImgData.data[4 * (o * earthImgData.width + n)] // 查找底图中对应像素点的rgba值并判断
}

