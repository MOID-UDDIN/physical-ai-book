---
sidebar_position: 5
title: Lab Setup and Hardware
---

# Lab Setup and Hardware

To teach and learn Physical AI with humanoid robots, you need a **practical lab setup**.

This chapter explains:

- What kind of hardware is needed.  
- How to combine cloud resources with local kits.  
- How to think in terms of cost and scalability.  

---

## Key components of a Physical AI lab

A typical lab includes:

- **Computing**:
  - Cloud GPU instances for training and heavy AI workloads.  
  - Local computers or NVIDIA Jetson devices for running models on robots.  

- **Robot platforms**:
  - Humanoid robots or smaller robot kits.  
  - Robot arms or mobile bases for specific tasks.  

- **Sensors**:
  - RGB or RGB-D cameras.  
  - IMUs.  
  - Possibly LiDAR for mapping and navigation.  

- **Networking**:
  - Reliable Wi-Fi or wired network.  
  - Clear separation between:
    - cloud side (training, planning)  
    - lab side (real-time control)  

---

## Balancing cost and capability

Lab design must consider:

- **Per-student cost** – how much hardware each learner needs access to.  
- **Shared resources** – some items can be shared (cloud accounts, base stations).  
- **Scalability** – the lab should work for:
  - small groups  
  - larger classes  
  - remote learners  

Good practice:

- Use **simulation** to reduce hardware needs.  
- Use **modular kits** that can be reused for multiple courses.  
- Combine **cloud AI** with **edge devices** in the lab.  

---

## Safety considerations

Any Physical AI lab must prioritize safety:

- Clear rules for operating robots.  
- Emergency stop mechanisms.  
- Limits on speed and force during testing.  
- Supervision for early experiments.  

The goal is to create a space where:

- Students can experiment and learn.  
- Hardware is protected from damage.  
- People are protected from harm.  

In the final chapter, we connect this lab setup to **projects** that build real skills.
