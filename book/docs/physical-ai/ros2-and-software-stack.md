---
sidebar_position: 3
title: ROS 2 and the Software Stack
---

# ROS 2 and the Software Stack

To control a complex robot, we need more than just raw code.  
We need a **robot operating system**.

**ROS 2 (Robot Operating System 2)** is a framework that:

- Connects all the parts of a robot together.  
- Handles messages between sensors, controllers, and AI models.  
- Helps us build modular, reusable robot software.  

You can think of ROS 2 as the **nervous system** of the robot.

---

## ROS 2 nodes and topics

In ROS 2, the system is built from small programs called **nodes**.

Examples of nodes:

- A camera node that publishes images.  
- A control node that sends motor commands.  
- A localization node that estimates the robot’s position.  
- An AI node that decides what action to take.  

Nodes communicate by sending messages on **topics**.

- A topic is like a named channel.  
- One node publishes messages.  
- Other nodes subscribe and receive them.  

This makes the system:

- **Decoupled** – nodes do not need to know each other directly.  
- **Scalable** – you can add or replace nodes easily.  

---

## Layers of the software stack

A typical robot software stack includes:

1. **Low-level control**  
   - Motor drivers  
   - Joint controllers  
   - Safety checks  

2. **Middleware (ROS 2)**  
   - Messaging between components  
   - Time synchronization  
   - System configuration  

3. **Perception**  
   - Camera and sensor drivers  
   - Object detection  
   - Scene understanding  

4. **Planning and control**  
   - Path planning  
   - Motion planning  
   - Whole-body control for humanoids  

5. **High-level intelligence**  
   - Task planners  
   - LLM-based agents  
   - Vision-Language-Action models  

---

## Why ROS 2 matters for Physical AI

Physical AI systems must:

- Read sensor data in real time.  
- Make decisions fast.  
- Send precise commands to hardware.  

ROS 2 provides:

- A **standard way** to connect everything.  
- Tools for testing, logging, and debugging.  
- A large ecosystem of existing packages.  

In this book, ROS 2 is the backbone that connects:

- Hardware  
- Simulation  
- AI models  
- Control algorithms  
