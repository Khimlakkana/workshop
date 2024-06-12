<template>
  <div id="app">
    <h1>Grade Calculator</h1>
    <div class="form-container">
      <input type="text" v-model="score" placeholder="Enter your score" />
      <button @click="calculateGrade">Get Grade</button>
    </div>
    <p v-if="error" class="error">{{ error }}</p>
    <p v-if="grade" class="result">Your grade is: {{ grade }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      score: '',
      grade: '',
      error: ''
    };
  },
  methods: {
    calculateGrade() {
      const score = parseInt(this.score);
      if (isNaN(score) || score < 0 || score > 100) {
        this.error = 'Please enter a valid score between 0 and 100.';
        this.grade = '';
      } else {
        this.error = '';
        if (score >= 80) {
          this.grade = 'A';
        } else if (score >= 70) {
          this.grade = 'B';
        } else if (score >= 60) {
          this.grade = 'C';
        } else if (score >= 50) {
          this.grade = 'D';
        } else {
          this.grade = 'F';
        }
      }
    }
  }
};
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}

h1 {
  color: #333;
}

.form-container {
  margin-bottom: 20px;
}

input[type="text"] {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
}

button {
  padding: 8px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

.error {
  color: red;
}

.result {
  color: #007bff;
  font-size: 18px;
  font-weight: bold;
}
</style>