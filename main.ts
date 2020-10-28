function LineFollowRight (inches: number, speed: number) {
    motors.largeAD.reset()
    while (motors.largeA.angle() / 360 <= inches / 5.35) {
        motors.largeAD.steer((sensors.color3.light(LightIntensityMode.Reflected) - 50) * 0.8, speed)
    }
}
LineFollowRight(10, 35)
