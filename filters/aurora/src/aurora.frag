varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;

${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float _cos = light.x;
    float _sin = light.y;
    vec3 dir = vec3(0.0, 0.0, 0.0);
    float d = 0.0;
    

    if (parallel) 
    {
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
        dir = vec3(d, d, 0.0);
    } 
    else 
    {
         float dx = coord.x - light.x / dimensions.x;
         float dy = (coord.y - light.y / dimensions.y) * aspect;

         dir = vec3(dx, dy, 0.0);
    }

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(400.0, 270.0, 270.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);

    float colorChangeSpeed = time * 0.3;
    float r = (_cos - coord.x) + abs(cos(colorChangeSpeed));
    float g = (_sin + coord.y) + abs(sin(colorChangeSpeed));
    float b = d * noise;

    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 0.30) * vec4(r,g,b, 0.30) * (0.40 - coord.y + (noise * 0.1));

    mist.a = 1.0;

    gl_FragColor = mist;//texture2D(uSampler, vTextureCoord) + mist;
}
