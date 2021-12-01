import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, AfterViewInit{
  public Polindromme: boolean = false;
  public string:string = "";

  public Vowelstring: string ="";
  private hasVowelsRegex = /[aeiouy]/g;
  public Vowels: any = null

  public maxNum: number = 0
  public FoobarNumbers: any[] = []

  public hello: string = 'hello world';
  public count: number = 0;
  public Plus: number = 1;


  constructor() { }


  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  public customAlert(): void {
    alert('Hello World!!!')
}
public countPLus(): void {
      this.count += this.Plus
}
public Buy(): void{
  if (this.count >= 10){
    this.count -= 10
    this.Plus += 1
  }
  }

  public checkPalindrome(): void{
      this.Polindromme = this.string.toLowerCase() === this.string.toLowerCase().split(' ').reverse().join()
  }

  public checkVowels(): void{
  this.Vowels = this.Vowelstring.match(this.hasVowelsRegex);
  }
  public FooBar(): void{
    let divBy3: boolean;
    let divBy5: boolean;
    let i: number;
    let output: string;

    for (i = 1; i <= this.maxNum; i += 1) {
      output = '';
      divBy3 = !(i % 3);
      divBy5 = !(i % 5);
      if (divBy3) output += 'foo';
      if (divBy5) output += 'bar';
      if (!(divBy3 || divBy5)) output = i.toString();
      this.FoobarNumbers.push(output)
    }
    alert(this.FoobarNumbers)
  }
}
