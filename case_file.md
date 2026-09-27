# 🕵️ DEVOPS MURDER MYSTERY — CASE FILE #001

**Incident:** Production server compromise
**Date:** 2024-06-15
**Time:** 03:42 AM
**Status:** Criminal at large

---

## 📖 BRIEFING

At approximately 03:42 AM, an unauthorized user accessed the company's
production server. They failed one login, then succeeded with another
account. They accessed sensitive files and attempted to cover their tracks
using Docker containers and tampering with Git history.

**Your team is the Incident Response Unit.** Use real DevOps commands to
investigate and identify the criminal.

---

## 🎯 CLUES TO SOLVE (10 Total)

| # | Clue | Command Hint |
|---|------|--------------|
| 1 | Find all files (including hidden) in `~/case_files` | `ls -la` |
| 2 | Read the hidden file | `cat .hidden_clue.txt` |
| 3 | Who logged in successfully? | `grep "LOGIN SUCCESS" server.log` |
| 4 | What file did they access? | `grep "FILE ACCESS" server.log` |
| 5 | Which Docker container is running? | `docker ps` |
| 6 | What evidence is inside the container? | `docker exec suspect_container cat /tmp/evidence.txt` |
| 7 | What is the suspect's employee ID? | (combine clues 2 & 6) |
| 8 | Which Git commit mentions the suspect? | `cd git_repo && git log --oneline` |
| 9 | Which K8s pod has the suspect's label? | `kubectl get pods --show-labels` |
| 10 | **WHO IS THE CRIMINAL?** | (combine all clues) |

---

## ⏱️ RULES

- **Time limit:** 15 minutes
- **Team size:** 3 students
- **Winner:** First team with all 10 correct answers
- **No internet.** Use only the terminal.
- **Answer submission:** Write answers on paper and raise your hand.

---

## 🏆 SCORING

| Correct Answers | Points |
|-----------------|--------|
| 10/10 | 100 |
| 8–9 | 80 |
| 6–7 | 60 |
| 4–5 | 40 |
| < 4 | 20 |

Bonus: +10 points for explaining **what each command does**.

---

## 🔐 FINAL ANSWER SHEET (Team Name: ____________)

1. Hidden file: ______________________
2. Hidden clue: ______________________
3. Successful login: ______________________
4. File accessed: ______________________
5. Running container: ______________________
6. Evidence: ______________________
7. Employee ID: ______________________
8. Suspicious commit: ______________________
9. Pod with label: ______________________
10. **Criminal:** ______________________

**Time taken:** ________ minutes