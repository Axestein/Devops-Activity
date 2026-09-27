// =====================================================
// DEVOPS MURDER MYSTERY — Terminal Simulator
// Edit the `fileSystem`, `dockerState`, `gitLog`, `k8sPods`
// objects below to change the crime scene.
// =====================================================

const fileSystem = {
  "/home/detective": ["case_files/"],
  "/home/detective/case_files": [
    "alice.txt",
    "bob.txt",
    "charlie.txt",
    "diana.txt",
    ".hidden_clue.txt",
    "server.log",
    "git_repo/"
  ],
  "/home/detective/case_files/git_repo": [".git/"],
};

const fileContents = {
  ".hidden_clue.txt": "The attacker's ID is: EMP-1042",
  "alice.txt": "Alice — Marketing Dept. No suspicious activity.",
  "bob.txt": "Bob — IT Dept. Last login: 2024-06-15 03:42:45",
  "charlie.txt": "Charlie — HR Dept. On leave since 2024-06-10.",
  "diana.txt": "Diana — Finance Dept. No suspicious activity.",
  "server.log": `2024-06-15 03:42:11 LOGIN FAILED user=alice
2024-06-15 03:42:45 LOGIN SUCCESS user=bob
2024-06-15 03:43:02 FILE ACCESS /etc/passwd by=bob
2024-06-15 03:43:15 LOGOUT user=bob`,
};

const dockerState = {
  containers: [
    {
      id: "a1b2c3d4e5f6",
      image: "nginx",
      name: "suspect_container",
      status: "Up 12 minutes",
      evidence: "SECRET=EMP-1042",
    },
  ],
  images: [
    { repo: "nginx", tag: "latest", id: "a8758716bb6a", size: "187MB" },
    { repo: "alpine", tag: "latest", id: "b2c3d4e5f6a7", size: "7MB" },
  ],
};

const gitLog = [
  { hash: "f3a1b2c", message: "Suspicious change by EMP-1042", author: "unknown" },
  { hash: "d4e5f6a", message: "Updated config", author: "bob" },
  { hash: "a7b8c9d", message: "Initial commit", author: "admin" },
];

const k8sPods = [
  { name: "suspect-pod", status: "Running", labels: "owner=EMP-1042" },
  { name: "web-pod", status: "Running", labels: "app=nginx" },
];

// =====================================================
// TERMINAL ENGINE — Do not edit below unless needed
// =====================================================

const output = document.getElementById("terminal-output");
const input = document.getElementById("terminal-input");

function print(text, className = "") {
  const p = document.createElement("p");
  p.textContent = text;
  if (className) p.classList.add(className);
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

function printCommand(cmd) {
  const p = document.createElement("p");
  p.innerHTML = `<span class="prompt" style="color:#7ee787">$</span> <span class="cmd">${cmd}</span>`;
  output.appendChild(p);
  output.scrollTop = output.scrollHeight;
}

// =====================================================
// COMMAND HANDLERS
// =====================================================

const commands = {
  help() {
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "info");
    print("  AVAILABLE COMMANDS", "info");
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "info");
    print("  ls -la                List all files (incl. hidden)");
    print("  cat <file>            Read a file");
    print("  pwd                   Show current directory");
    print("  cd <dir>              Change directory");
    print('  grep "<pattern>" <file>  Search inside a file');
    print("  docker ps             List running containers");
    print("  docker images         List Docker images");
    print("  docker exec <c> <cmd> Execute command inside container");
    print("  git log --oneline     Show Git commit history");
    print("  git blame <file>      Show who changed a file");
    print("  kubectl get pods      List Kubernetes pods");
    print("  kubectl get pods --show-labels  List pods with labels");
    print("  clear                 Clear terminal");
    print("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "info");
  },

  pwd() {
    print("/home/detective");
  },

  ls(args) {
    const showHidden = args.includes("-la") || args.includes("-a");
    const files = fileSystem["/home/detective/case_files"] || [];
    const visible = showHidden ? files : files.filter(f => !f.startsWith("."));
    print(visible.join("  "));
  },

  cat(args) {
    const file = args[0];
    if (!file) return print("cat: missing file operand", "error");
    if (fileContents[file]) {
      print(fileContents[file]);
    } else {
      print(`cat: ${file}: No such file or directory`, "error");
      if (!file.startsWith(".")) {
        print("💡 Tip: Hidden files start with a dot. Try `ls -la` first.", "info");
      }
    }
  },

  grep(rawArgs) {
    // Handle quoted patterns like: grep "LOGIN SUCCESS" server.log
    const joined = rawArgs.join(" ");
    const match = joined.match(/^"([^"]+)"\s+(\S+)$/);

    let pattern, file;

    if (match) {
      // Quoted pattern case
      pattern = match[1];
      file = match[2];
    } else if (rawArgs.length >= 2) {
      // Unquoted pattern case: grep LOGIN server.log
      pattern = rawArgs[0];
      file = rawArgs.slice(1).join(" ");
    } else {
      return print('grep: usage: grep "<pattern>" <file>', "error");
    }

    const content = fileContents[file];
    if (!content) {
      return print(`grep: ${file}: No such file or directory`, "error");
    }

    const matches = content.split("\n").filter(line => line.includes(pattern));

    if (matches.length === 0) {
      print(`No matches found for "${pattern}"`, "warn");
    } else {
      matches.forEach(m => print(m));
    }
  },

  docker(args) {
    const sub = args[0];
    if (sub === "ps") {
      if (args.includes("-a")) {
        print("CONTAINER ID   IMAGE   STATUS         NAMES");
        dockerState.containers.forEach(c => {
          print(`${c.id}   ${c.image}   ${c.status}   ${c.name}`);
        });
      } else {
        print("CONTAINER ID   IMAGE   STATUS         NAMES");
        dockerState.containers
          .filter(c => c.status.startsWith("Up"))
          .forEach(c => print(`${c.id}   ${c.image}   ${c.status}   ${c.name}`));
      }
    } else if (sub === "images") {
      print("REPOSITORY   TAG      IMAGE ID       SIZE");
      dockerState.images.forEach(i => {
        print(`${i.repo.padEnd(12)} ${i.tag.padEnd(8)} ${i.id}   ${i.size}`);
      });
    } else if (sub === "exec") {
      const containerName = args[1];
      const container = dockerState.containers.find(c => c.name === containerName);
      if (!container) return print(`Error: No such container: ${containerName}`, "error");
      // Look for evidence read command
      if (args.join(" ").includes("evidence.txt")) {
        print(container.evidence, "success");
      } else {
        print("(no output)");
      }
    } else {
      print(`docker: '${sub}' is not a docker command.`, "error");
    }
  },

  git(args) {
    const sub = args[0];
    if (sub === "log") {
      print("Commit History:", "info");
      gitLog.forEach(c => print(`${c.hash}  ${c.message}`));
    } else if (sub === "blame") {
      print("f3a1b2c (unknown 2024-06-15) Suspicious change by EMP-1042");
    } else {
      print(`git: '${sub}' is not a git command.`, "error");
    }
  },

  kubectl(args) {
    if (args[0] === "get" && args[1] === "pods") {
      const showLabels = args.includes("--show-labels");
      if (showLabels) {
        print("NAME           READY   STATUS    LABELS");
        k8sPods.forEach(p => print(`${p.name.padEnd(14)} 1/1     ${p.status}   ${p.labels}`));
      } else {
        print("NAME           READY   STATUS");
        k8sPods.forEach(p => print(`${p.name.padEnd(14)} 1/1     ${p.status}`));
      }
    } else {
      print("kubectl: unknown command", "error");
    }
  },

  cd(args) {
    print("(directory change simulated — all files are in ~/case_files)");
  },

  clear() {
    output.innerHTML = "";
  },

  whoami() {
    print("detective");
  },

  date() {
    print("Mon Jun 15 03:45:00 UTC 2024");
  },
};

// =====================================================
// INPUT HANDLER
// =====================================================

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const raw = input.value.trim();
    if (!raw) return;
    printCommand(raw);
    input.value = "";

    const parts = raw.split(/\s+/);
    const cmd = parts[0];
    const args = parts.slice(1);

    if (commands[cmd]) {
      try {
        commands[cmd](args);
      } catch (err) {
        print(`Error: ${err.message}`, "error");
      }
    } else {
      print(`${cmd}: command not found. Type 'help' for available commands.`, "error");
    }
  }
});

// Focus input on load
window.addEventListener("load", () => input.focus());
document.addEventListener("click", () => input.focus());