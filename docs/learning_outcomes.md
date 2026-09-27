# 🎓 Learning Outcomes — DevOps Murder Mystery

**Activity:** DevOps Murder Mystery — Case File #001
**Subject:** Essentials in Cloud and DevOps
**Team:**
TEAM MEMBERS:
- Aditya Kumar Singh (RA2311003010916)
- Shaad Quazi(RA2311003010917)
- Suyash Jha (RA2311003010923)

---

## 📖 Overview

This activity was designed to teach core DevOps and Cloud concepts through an
interactive, story-driven investigation game. Instead of passively reading about
commands, students **run real commands** on a real (or simulated) filesystem to
solve a fictional production server hack.

The activity combines three powerful learning techniques:

1. **Storytelling** — A crime narrative creates emotional engagement
2. **Gamification** — Teams compete against the clock
3. **Hands-on Labs** — Every clue requires a real command

By the end of this activity, students will have practiced **12+ DevOps commands**
across **4 technology domains** (Linux, Docker, Git, Kubernetes) and understood
their real-world application in **incident response**.

---

## 1. 🐧 Linux Fundamentals

### 1.1 Hidden Files in Linux

| Aspect | Detail |
|--------|--------|
| **Command** | `ls -la` |
| **Clue** | Clue #1 — Find all files including hidden ones |
| **Concept** | Files starting with `.` are hidden from normal `ls` output |
| **Real-World Use** | Config files (`.bashrc`, `.env`, `.gitignore`) are hidden by convention |
| **Learning Outcome** | Students understand that `-a` reveals hidden files and `-l` shows long format |

### 1.2 Reading File Contents

| Aspect | Detail |
|--------|--------|
| **Command** | `cat .hidden_clue.txt` |
| **Clue** | Clue #2 — Read the hidden file to find the attacker's ID |
| **Concept** | `cat` concatenates and displays file contents |
| **Real-World Use** | Reading config files, logs, and documentation |
| **Learning Outcome** | Students can view file contents and understand that exact filenames (including dots) are required |

### 1.3 Searching Inside Files

| Aspect | Detail |
|--------|--------|
| **Command** | `grep "LOGIN SUCCESS" server.log` |
| **Clue** | Clue #3 — Who logged in successfully? |
| **Concept** | `grep` searches for patterns inside files |
| **Real-World Use** | Log analysis, incident response, debugging |
| **Learning Outcome** | Students learn to filter large logs by keyword and understand that quoted patterns handle spaces |

### 1.4 Directory Navigation

| Aspect | Detail |
|--------|--------|
| **Commands** | `pwd`, `cd`, `ls` |
| **Clues** | Throughout the investigation |
| **Concept** | Understanding the filesystem hierarchy |
| **Real-World Use** | Navigating servers via SSH |
| **Learning Outcome** | Students know where they are and how to move around |

### 1.5 Log Analysis

| Aspect | Detail |
|--------|--------|
| **Command** | `grep "FILE ACCESS" server.log` |
| **Clue** | Clue #4 — What sensitive file did the attacker access? |
| **Concept** | Reading structured logs to detect anomalies |
| **Real-World Use** | Security Operations Center (SOC) analysts do this daily |
| **Learning Outcome** | Students can identify suspicious activity by filtering log patterns |

---

## 2. 🐳 Docker Concepts

### 2.1 Listing Running Containers

| Aspect | Detail |
|--------|--------|
| **Command** | `docker ps` |
| **Clue** | Clue #5 — Which container is currently running? |
| **Concept** | Containers are isolated processes; `docker ps` shows running ones |
| **Real-World Use** | Checking service health in production |
| **Learning Outcome** | Students understand the difference between `docker ps` (running) and `docker ps -a` (all) |

### 2.2 Inspecting Docker Images

| Aspect | Detail |
|--------|--------|
| **Command** | `docker images` |
| **Clue** | Supporting clue — shows available images |
| **Concept** | Images are templates; containers are running instances |
| **Real-World Use** | Managing image versions and disk space |
| **Learning Outcome** | Students can list images and understand repository/tag/size fields |

### 2.3 Executing Commands Inside Containers

| Aspect | Detail |
|--------|--------|
| **Command** | `docker exec suspect_container cat /tmp/evidence.txt` |
| **Clue** | Clue #6 — Extract evidence from inside the container |
| **Concept** | `docker exec` runs commands inside a running container |
| **Real-World Use** | Debugging, forensics, live troubleshooting |
| **Learning Outcome** | Students can inspect a container's internal filesystem without stopping it |

### 2.4 Container Isolation

| Aspect | Detail |
|--------|--------|
| **Concept** | Each container has its own filesystem, network, and process space |
| **Clue** | The evidence file `/tmp/evidence.txt` exists **inside** the container, not on the host |
| **Real-World Use** | Security isolation, microservices architecture |
| **Learning Outcome** | Students understand that containers are isolated environments |

---

## 3. 🔀 Git Forensics

### 3.1 Reading Commit History

| Aspect | Detail |
|--------|--------|
| **Command** | `git log --oneline` |
| **Clue** | Clue #8 — Find the suspicious commit |
| **Concept** | Git records every change with author, timestamp, and message |
| **Real-World Use** | Code auditing, tracing bugs, identifying insider threats |
| **Learning Outcome** | Students can read Git history and spot anomalies in commit messages |

### 3.2 Identifying Authors

| Aspect | Detail |
|--------|--------|
| **Command** | `git log` / `git blame` |
| **Clue** | Supporting clue — who made each commit? |
| **Concept** | Every commit is attributed to an author |
| **Real-World Use** | Accountability, code ownership, review assignment |
| **Learning Outcome** | Students understand that Git provides an immutable audit trail |

### 3.3 Version Control as Audit Trail

| Aspect | Detail |
|--------|--------|
| **Concept** | Git history cannot be easily faked without detection |
| **Clue** | The suspicious commit "Suspicious change by EMP-1042" reveals the attacker |
| **Real-World Use** | Compliance, forensics, rollback |
| **Learning Outcome** | Students learn that version control is not just for code — it's a security tool |

---

## 4. ☸️ Kubernetes Basics

### 4.1 Listing Pods

| Aspect | Detail |
|--------|--------|
| **Command** | `kubectl get pods` |
| **Clue** | Clue #9 — Which pod is suspicious? |
| **Concept** | Pods are the smallest deployable units in Kubernetes |
| **Real-World Use** | Monitoring workloads in a cluster |
| **Learning Outcome** | Students can list pods and understand READY/STATUS fields |

### 4.2 Pod Labels

| Aspect | Detail |
|--------|--------|
| **Command** | `kubectl get pods --show-labels` |
| **Clue** | Clue #9 — Find the pod with the suspect's label |
| **Concept** | Labels are key-value metadata used for selection and grouping |
| **Real-World Use** | Service discovery, monitoring, ownership tracking |
| **Learning Outcome** | Students understand that `owner=EMP-1042` reveals the pod's creator |

### 4.3 Kubernetes as an Attack Surface

| Aspect | Detail |
|--------|--------|
| **Concept** | Misconfigured pods can leak sensitive information |
| **Clue** | The suspect-pod carries the attacker's employee ID as a label |
| **Real-World Use** | Kubernetes security hardening, RBAC |
| **Learning Outcome** | Students realize that metadata can be a security risk |

---

## 5. 🔐 DevOps Culture & Incident Response

### 5.1 Log Analysis in Incident Response

| Aspect | Detail |
|--------|--------|
| **Concept** | Logs are the primary evidence in any security incident |
| **Clue** | Clues #3 and #4 rely entirely on `server.log` |
| **Real-World Use** | SOC analysts, SREs, and DevOps engineers analyze logs daily |
| **Learning Outcome** | Students understand the importance of centralized logging |

### 5.2 Evidence Correlation

| Aspect | Detail |
|--------|--------|
| **Concept** | No single clue is enough — you must combine multiple sources |
| **Clue** | Clue #7 requires combining the hidden file (clue 2) + container evidence (clue 6) |
| **Real-World Use** | Threat hunting, forensic analysis |
| **Learning Outcome** | Students learn to cross-reference data from different systems |

### 5.3 Time-Boxed Investigation

| Aspect | Detail |
|--------|--------|
| **Concept** | Real incidents have SLAs — you must solve them fast |
| **Clue** | The 15-minute timer simulates real incident response pressure |
| **Real-World Use** | On-call rotations, incident command |
| **Learning Outcome** | Students practice prioritization and quick decision-making |

### 5.4 Team Collaboration

| Aspect | Detail |
|--------|--------|
| **Concept** | Incident response is a team sport |
| **Clue** | Teams of 3–4 must divide tasks and share findings |
| **Real-World Use** | War rooms, blameless postmortems |
| **Learning Outcome** | Students experience collaborative problem-solving |

---

## 6. 🧠 Soft Skills Developed

| Skill | How It's Practiced |
|-------|-------------------|
| **Critical Thinking** | Connecting scattered clues across 4 systems |
| **Communication** | Sharing findings within teams under time pressure |
| **Time Management** | Solving 10 clues in 15 minutes |
| **Attention to Detail** | Spotting the hidden file, the suspicious commit, the labeled pod |
| **Collaboration** | Dividing tasks among 3–4 team members |
| **Adaptability** | Switching between Linux, Docker, Git, and Kubernetes |
| **Documentation** | Writing down answers on the submission sheet |

---

## 7. 🗺️ Mapping to Course Syllabus

| Syllabus Topic | Covered By | Clue(s) |
|----------------|------------|---------|
| Linux commands | `ls`, `cat`, `grep`, `pwd`, `cd` | 1, 2, 3, 4 |
| Docker basics | `docker ps`, `docker images`, `docker exec` | 5, 6 |
| Container isolation | Filesystem inside container | 6 |
| Git version control | `git log`, `git blame` | 8 |
| Kubernetes intro | `kubectl get pods`, labels | 9 |
| Cloud/DevOps workflow | Entire activity | All |
| Incident response | Debrief + clues 3, 4, 10 | 3, 4, 10 |
| Security fundamentals | Hidden files, log forensics, least privilege | 1, 3, 4 |

---

## 8. 📊 Assessment Rubric (For Instructors)

| Criteria | Weight | Description |
|----------|--------|-------------|
| **Correct Answers** | 60% | Number of correct clues (out of 10) |
| **Command Usage** | 20% | Proper use of commands without help |
| **Team Collaboration** | 10% | All members participate actively |
| **Explanation Quality** | 10% | Can explain what each command does |

### Scoring Scale

| Correct Answers | Points | Grade |
|-----------------|--------|-------|
| 10/10 | 100 | A+ |
| 8–9 | 80 | A |
| 6–7 | 60 | B |
| 4–5 | 40 | C |
| < 4 | 20 | D |

**Bonus:** +10 points for explaining what each command does.

---

## 9. 🤔 Reflection Questions

After the activity, students should be able to answer:

1. Which command was the most useful? Why?
2. How would this attack have been prevented in real life?
3. What role does logging play in security?
4. Why is it dangerous to run containers as root?
5. How can Git history be tampered with, and how do you detect it?
6. What is "least privilege" and how does it relate to this case?
7. Why is it important to never store secrets in container filesystems?
8. How would you design a monitoring system to catch this attack in real time?

---

## 10. 🎯 Real-World Relevance

This activity directly simulates the daily work of:

| Role | How This Activity Relates |
|------|---------------------------|
| **Site Reliability Engineer (SRE)** | Investigating production incidents using logs and containers |
| **DevOps Engineer** | Managing Docker containers and Kubernetes pods |
| **Security Analyst (SOC)** | Analyzing logs for suspicious activity |
| **Incident Responder** | Correlating evidence across multiple systems |
| **Cloud Engineer** | Debugging containerized workloads |

**Industry fact:** According to IBM's *Cost of a Data Breach Report*, the average
time to identify and contain a breach is **277 days**. Incident response skills
like those practiced here are critical for reducing this time.

---

## 11. 📚 Further Learning

### Books
- **"The Phoenix Project"** by Gene Kim — DevOps culture through a novel
- **"Docker Deep Dive"** by Nigel Poulton — Container fundamentals
- **"Kubernetes Up & Running"** by Kelsey Hightower — K8s in practice
- **"The Linux Command Line"** by William Shotts — Free online book

### Online Resources
- Docker Docs: https://docs.docker.com
- Kubernetes Docs: https://kubernetes.io/docs
- Linux Journey: https://linuxjourney.com
- OverTheWire Bandit: https://overthewire.org/wargames/bandit/

### Practice Platforms
- **Katacoda** — Interactive Docker/K8s labs
- **Play with Docker** — Free Docker playground
- **Play with Kubernetes** — Free K8s playground
- **TryHackMe** — Security-focused labs

---

## 12. ✅ Conclusion

By the end of the DevOps Murder Mystery, students will have:

- ✅ Practiced **12+ real DevOps commands**
- ✅ Learned **4 technology domains** (Linux, Docker, Git, Kubernetes)
- ✅ Understood **incident response workflows**
- ✅ Developed **soft skills** (teamwork, time management, critical thinking)
- ✅ Experienced **learning through play** — the most effective way to retain knowledge

The activity proves that **DevOps concepts can be taught effectively through
storytelling and gamification**, making abstract commands memorable and
contextualized.

---

**Activity designed by:**
- Shaikh Junaid Nadeem Ahmad (RA2311003010563)
- Raunakjit Singha (RA231103010412)
- Priyanshu Kumar (RA231103010382)

**Subject:** Essentials in Cloud and DevOps
**Date:** 2026