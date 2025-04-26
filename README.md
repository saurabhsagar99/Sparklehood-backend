# HumanChain AI Safety Incident Log API

A simple RESTful backend service to **log and manage AI safety incidents**, built using **TypeScript, Express.js**, and **MongoDB**.

---

## 🚀 Tech Stack
- **Language**: TypeScript
- **Framework**: Node.js with Express
- **Database**: MongoDB
- **ODM**: Mongoose

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/saurabhsagar99/Sparklehood-backend.git
cd Sparklehood-backend
```

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Create `.env` file

At the root of the project, create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```


---

### 4. Run the server in local

```bash
npm run dev
```

(Server will start at `http://localhost:5000`)

✅ It will auto-reload on file changes using **ts-node-dev**.

---

## 🛠 Database Setup

- No manual database schema setup needed.
- **Mongoose** will automatically create the collection `incidents` based on the schema when you create your first incident.
- Optionally, you can pre-populate some sample incidents manually via POST requests.

---

## 📚 API Endpoints

All responses are in **JSON**.

---

### ➡️ 1. Get all incidents

- **Endpoint:** `GET /incidents`
- **Description:** Retrieve all logged AI safety incidents.

**Postman Example:**

Select GET from the dropdown.

Enter the URL: http://localhost:5000/incidents

Click Send.

---

### ➡️ 2. Create a new incident

- **Endpoint:** `POST /incidents`
- **Description:** Log a new incident.



**Postman Example:**
Select POST from the dropdown.

Enter the URL: http://localhost:5000/incidents

Go to the Body tab and choose raw, then select JSON from the dropdown.
Write the data
Click Send

---

### ➡️ 3. Get a specific incident by ID

- **Endpoint:** `GET /incidents/:id`
- **Description:** Retrieve a specific incident by its ID.

Postman Example:

Select GET from the dropdown.

Enter the URL: http://localhost:5000/incidents/<incident_id>

Replace <incident_id> with a valid incident ID (e.g., 1).

Click Send.

---

### ➡️ 4. Delete an incident by ID

- **Endpoint:** `DELETE /incidents/:id`
- **Description:** Delete an incident.

**Postman Example:**

Select DELETE from the dropdown.

Enter the URL: http://localhost:5000/incidents/<incident_id>

Replace <incident_id> with a valid incident ID (e.g., 1).

Click Send.



## 🧠 Design Decisions & Challenges

- **MongoDB + Mongoose** was chosen for fast development and flexibility with dynamic incident data.
- **TypeScript** improves code reliability with type safety.
- Used **dotenv** for managing environment variables securely.
- Basic validation was added manually inside controller functions to keep it simple for now (future improvement: use libraries like **Joi** or **zod** for advanced validation).

---

