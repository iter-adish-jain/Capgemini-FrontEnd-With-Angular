import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-comp',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './first-comp.html',
  styleUrl: './first-comp.css',
})
export class FirstComp {

  questions: string[] = [
    'Question 1: What is Angular?',
    'Question 2: What is TypeScript?',
    'Question 3: What is data binding?',
    'Question 4: What is a component?',
    'Question 5: What is a directive?',
    'Question 6: What is a service?',
    'Question 7: What is routing?',
    'Question 8: What is a module?',
    'Question 9: What is interpolation?',
    'Question 10: What is event binding?'
  ];

  tasks: string[] = [
    'Task 1: Create a simple Angular component',
    'Task 2: Build a form using Angular',
    'Task 3: Create a todo app',
    'Task 4: Fetch API data and display',
    'Task 5: Create a responsive navbar'
  ];

  selectedData: string = '';

  getQuestion() {
    const index = Math.floor(Math.random() * this.questions.length);
    this.selectedData = this.questions[index];
  }

  getTask() {
    const index = Math.floor(Math.random() * this.tasks.length);
    this.selectedData = this.tasks[index];
  }

}