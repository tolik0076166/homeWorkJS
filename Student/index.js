class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  grades = [];
  
  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  attendance = new Array(25).fill(null);
  maxAttendanceCount = 25;
    
    
  _addAttendance(value) {
    const index = this.attendance.findIndex(item => item === null);
      if (index >= 0 && index < this.attendance.length) {
        this.attendance[index] = value;
      } else {
        this.attendanceOverflow = true;
      }
  }
  
  present() {
    this._addAttendance(true);
  }
  
  absent() {
    this._addAttendance(false);
  }

  summary() {
    const avgGrade = this.getAverageGrade();
    const avgAttendance = this.attendance.filter(Boolean).length / this.attendance.length;
    const fullName = `${this.firstName} ${this.lastName}`;
    const age = this.getAge();

    if (this.attendanceOverflow) {
      return `${fullName} (${age} років): Масив відвідуваності вже заповнений!`;
    }

    if (avgGrade > 90 && avgAttendance > 0.9) {
      return `${fullName} (${age} років): Молодець!`;
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
      return `${fullName} (${age} років): Добре, але можна краще`;
    } else {
      return `${fullName} (${age} років): Редиска!`;
    }
  }
}

const student1 = new Student('Анатолій', 'Кравцов', 2002);
const student2 = new Student('Олена', 'Петренко', 2001);
const student3 = new Student('Анжеліка', 'Кравцова', 2004);

student1.grades.push(90, 95, 85, 92);
student2.grades.push(90, 90, 90, 92, 90, 90, 90, 90, 92, 90, 90, 90, 90, 92, 90, 90, 90, 90, 90, 90, 90, 90, 90, 92);
student3.grades.push(50,20)

student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.absent();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student2.present();
student3.present();
student3.absent();
student3.present();
student3.absent();

console.log(student1.summary()); 
console.log(student2.summary()); 
console.log(student3.summary());




  