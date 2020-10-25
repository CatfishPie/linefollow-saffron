function LineFollowRight (inches: number) {
    motors.largeAD.reset()
    LineFollow_DegreesTurned = 0
    while (motors.largeA.angle() / 360 <= inches / 5.35) {
        motors.largeAD.steer((sensors.color3.light(LightIntensityMode.Reflected) - 50) * 0.8, 35)
    }
}
let LineFollow_DegreesTurned = 0
LineFollowRight(10)
