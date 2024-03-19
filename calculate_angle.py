#!/usr/bin/python3

import math

def calculate_angle(x1, y1, x2, y2):
    dx = x2 - x1
    dy = y2 - y1
    angle_radians = math.atan2(dy, dx)
    angle_degrees = math.degrees(angle_radians)
    if angle_degrees < 0:
        angle_degrees += 360
    return angle_degrees

# Example usage
x1, y1 = 100, 100
x2, y2 = 200, 200 
angle = calculate_angle(x1, y1, x2, y2)
print("Angle between the two points:", angle)

def mag(x, y):
    return math.sqrt(x**2 + y**2)

def calculate_angle2(x1, y1, x2, y2):
  dot_prod = x1 * x2 + y1 * y2
  print(dot_prod)
  mul = mag(x1, y1) * mag(x2, y2)
  print(mul)
  coss = dot_prod / mul
  print(coss)
  angle_rad = math.acos(coss)
  print(angle_rad)
  angle_deg = math.degrees(angle_rad)
  print(angle_deg)
  return angle_deg

angle = calculate_angle2(x1, y1, x2, y2)
print("Angle between the two points:", angle)





