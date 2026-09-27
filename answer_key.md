# ✅ DevOps Murder Mystery — Answer Key

> ⚠️ FOR INSTRUCTORS ONLY. Do not distribute to students.

---

## Answers

| # | Answer | Command Used | DevOps Concept |
|---|--------|--------------|----------------|
| 1 | `.hidden_clue.txt` | `ls -la` | Hidden files in Linux |
| 2 | `The attacker's ID is: EMP-1042` | `cat .hidden_clue.txt` | Reading files |
| 3 | `bob` | `grep "LOGIN SUCCESS" server.log` | Log analysis with grep |
| 4 | `/etc/passwd` | `grep "FILE ACCESS" server.log` | Log forensics |
| 5 | `suspect_container` | `docker ps` | Container inspection |
| 6 | `SECRET=EMP-1042` | `docker exec suspect_container cat /tmp/evidence.txt` | Exec into containers |
| 7 | `EMP-1042` | (from clues 2 & 6) | Evidence correlation |
| 8 | `Suspicious change by EMP-1042` | `git log --oneline` | Git history forensics |
| 9 | `suspect-pod` | `kubectl get pods --show-labels` | Kubernetes labels |
| 10 | **Bob (EMP-1042)** | (combine all clues) | Incident response |

---

## Concept Explanations (For Presentation)

### 1. `ls -la`
Lists all files including hidden ones (starting with `.`).
Flags: `-l` = long format, `-a` = all files.

### 2. `cat <file>`
Concatenates and displays file contents.

### 3. `grep <pattern> <file>`
Searches for a pattern inside a file.
Essential for log analysis in incident response.

### 4. `docker ps`
Lists all **running** containers. `docker ps -a` lists all containers
including stopped ones.

### 5. `docker exec <container> <cmd>`
Executes a command inside a running container.
Used for live debugging and forensics.

### 6. `git log --oneline`
Shows commit history in a compact format.
Used to trace who changed what and when.

### 7. `kubectl get pods --show-labels`
Lists Kubernetes pods with their labels.
Labels help identify ownership and purpose.

---

## Debrief Questions (Ask After the Game)

1. Why is `docker exec` dangerous for security?
2. How can Git history reveal insider threats?
3. Why are logs critical in incident response?
4. What does "least privilege" mean in this context?
5. How would you prevent this attack in real life?

---

## Real-World Relevance

This activity simulates:
- **Incident Response** (SRE / DevOps role)
- **Log Forensics** (Security Operations)
- **Container Inspection** (Docker administration)
- **Git Forensics** (Code audit)
- **Kubernetes Troubleshooting** (Cluster ops)