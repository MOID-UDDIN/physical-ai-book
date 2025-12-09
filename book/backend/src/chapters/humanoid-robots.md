---
sidebar_position: 2
title: Humanoid Robots
---

# Humanoid Robots

A **humanoid robot** is a robot that roughly looks and moves like a human:

- It has a **head**, **torso**, **arms**, **hands**, **legs**, and **feet**.
- It operates in **human environments** like homes, offices, and factories.
- It is designed to use **human tools** (handles, doors, machines, etc.).

Humanoid robots are a natural match for Physical AI because:

- The world is built for humans.
- If a robot can move like a human, it can use the same spaces and tools.

---

## Main components of a humanoid robot

### 1. Mechanical structure (the body)

The body includes:

- **Joints** – like shoulders, elbows, knees, hips.
- **Links** – the rigid parts between joints (bones).
- **End-effectors** – hands or grippers that touch and hold objects.

Design goals:

- Strong enough to carry weight.  
- Light enough to move quickly.  
- Balanced enough to stand and walk.  

---

### 2. Actuators (the muscles)

Actuators are the parts that **move** the robot:

- Electric motors  
- Gearboxes  
- Sometimes hydraulic or pneumatic systems  

We control them using:

- **Torque** (how strong)  
- **Speed** (how fast)  
- **Position** (where to move)  

---

### 3. Sensors (the senses)

A humanoid robot uses many sensors:

- **IMU** – for balance and orientation  
- **Cameras** – to see the environment  
- **Depth sensors / LiDAR** – to understand distance and shape  
- **Force / torque sensors** – to feel contact and force  
- **Joint encoders** – to know joint angles  

These provide the data needed for **perception** and **control**.

---

### 4. Control and balance

Walking on two legs is very hard.

The control system must:

- Keep the **center of mass** over the support area.  
- Predict how the body will move after each step.  
- React quickly if the robot is pushed or slips.  

This requires:

- Fast feedback loops  
- Good sensor fusion  
- Stable control algorithms  

---

## Humanoid robots as a platform for AI

Humanoid robots are useful because they:

- Can operate in the same spaces as people.  
- Can assist with tasks like carrying, fetching, operating machines.  
- Can be used as platforms for:
  - **LLM-based planning**  
  - **Vision-Language-Action models**  
  - **Long-horizon tasks** in real environments  

In later chapters, we will see how software and AI models run on top of this physical body.
